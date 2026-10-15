import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Search, 
  Download, 
  RefreshCw, 
  Calendar, 
  Mail, 
  Trash2, 
  Copy, 
  Check, 
  ArrowLeft,
  Send,
  BellRing,
  Clock,
  Sparkles,
  Save,
  CheckCircle2
} from 'lucide-react';
import { getAllLeads, deleteLead, type LeadRecord, type AuthUser } from '../services/auth';
import { 
  getBroadcastMessages, 
  sendBroadcastMessage, 
  getAutomatedTemplates, 
  saveAutomatedTemplates, 
  showAppNotification,
  type BroadcastMessage,
  type AutomatedTemplates 
} from '../services/notifications';
import { ZodiacGlyph } from './ZodiacGlyph';
import { getZodiacSignInfo } from '../data/zodiac/signsInfo';
import type { ZodiacSignId } from '../types/tarot';
import { useLanguage } from '../i18n';

interface AdminPanelScreenProps {
  currentUser: AuthUser;
  onBackToHome: () => void;
}

export const AdminPanelScreen: React.FC<AdminPanelScreenProps> = ({
  currentUser,
  onBackToHome,
}) => {
  const { t, language } = useLanguage();
  const [adminTab, setAdminTab] = useState<'leads' | 'broadcast' | 'templates'>('leads');
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSignFilter, setSelectedSignFilter] = useState<string>('all');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Broadcast State
  const [broadcastList, setBroadcastList] = useState<BroadcastMessage[]>([]);
  const [customTitle, setCustomTitle] = useState<string>('');
  const [customBody, setCustomBody] = useState<string>('');
  const [customTarget, setCustomTarget] = useState<'all' | ZodiacSignId>('all');
  const [isSendingBroadcast, setIsSendingBroadcast] = useState(false);
  const [broadcastSentFeedback, setBroadcastSentFeedback] = useState(false);

  // Automated Templates State
  const [templates, setTemplates] = useState<AutomatedTemplates>(getAutomatedTemplates());
  const [templatesSavedFeedback, setTemplatesSavedFeedback] = useState(false);
  const [testSentFeedback, setTestSentFeedback] = useState(false);

  const loadLeadsData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllLeads();
      setLeads(data);
      setBroadcastList(getBroadcastMessages());
    } catch (e) {
      console.warn('Erro ao carregar leads:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLeadsData();
  }, []);

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchSearch =
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchSign =
        selectedSignFilter === 'all' ||
        (selectedSignFilter === 'sem_signo' && !lead.zodiacSign) ||
        lead.zodiacSign === selectedSignFilter;

      return matchSearch && matchSign;
    });
  }, [leads, searchTerm, selectedSignFilter]);

  // Statistics
  const stats = useMemo(() => {
    const total = leads.length;
    const withSign = leads.filter(l => Boolean(l.zodiacSign)).length;
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const thisWeek = leads.filter(l => (l.createdAt || 0) >= oneWeekAgo).length;

    // Most common sign
    const signCounts: Record<string, number> = {};
    leads.forEach(l => {
      if (l.zodiacSign) {
        signCounts[l.zodiacSign] = (signCounts[l.zodiacSign] || 0) + 1;
      }
    });

    let topSign = '-';
    let maxCount = 0;
    Object.entries(signCounts).forEach(([signId, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topSign = getZodiacSignInfo(signId as ZodiacSignId).name;
      }
    });

    return { total, withSign, thisWeek, topSign, signCounts };
  }, [leads]);

  // Target count for broadcast
  const targetLeadCount = useMemo(() => {
    if (customTarget === 'all') return leads.length;
    return leads.filter(l => l.zodiacSign === customTarget).length;
  }, [leads, customTarget]);

  // Handle Send Custom Broadcast
  const handleSendCustomBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim() || !customBody.trim()) return;

    setIsSendingBroadcast(true);

    try {
      const targetName = customTarget === 'all' 
        ? 'Todos os Leads' 
        : getZodiacSignInfo(customTarget).name;

      sendBroadcastMessage({
        title: customTitle.trim(),
        body: customBody.trim(),
        target: customTarget,
        targetName,
        sentBy: currentUser.email || 'idealconsumo',
      });

      setBroadcastList(getBroadcastMessages());
      setCustomTitle('');
      setCustomBody('');
      setBroadcastSentFeedback(true);
      setTimeout(() => setBroadcastSentFeedback(false), 3500);
    } catch (err) {
      console.warn('Erro ao disparar mensagem:', err);
    } finally {
      setIsSendingBroadcast(false);
    }
  };

  // Handle Save Templates
  const handleSaveTemplates = (e: React.FormEvent) => {
    e.preventDefault();
    saveAutomatedTemplates(templates);
    setTemplatesSavedFeedback(true);
    setTimeout(() => setTemplatesSavedFeedback(false), 3000);
  };

  // Handle Test Notification
  const handleSendTestNotification = async (type: 'tarot' | 'zodiac') => {
    if (type === 'tarot') {
      await showAppNotification(templates.tarotTitle, {
        body: templates.tarotBody,
        tag: 'test-tarot-notif',
      });
    } else {
      await showAppNotification(templates.zodiacTitle, {
        body: templates.zodiacBody,
        tag: 'test-zodiac-notif',
      });
    }
    setTestSentFeedback(true);
    setTimeout(() => setTestSentFeedback(false), 2500);
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) return;

    const headers = ['Nome', 'Email', 'Signo', 'Data de Nascimento', 'Data de Cadastro'];
    const rows = leads.map(l => {
      const signName = l.zodiacSign ? getZodiacSignInfo(l.zodiacSign as ZodiacSignId).name : 'Não informado';
      const createdDate = l.createdAt ? new Date(l.createdAt).toLocaleDateString('pt-BR') : '';
      return [
        `"${(l.name || '').replace(/"/g, '""')}"`,
        `"${(l.email || '').replace(/"/g, '""')}"`,
        `"${signName}"`,
        `"${l.birthDate || ''}"`,
        `"${createdDate}"`,
      ].join(';');
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_idealconsumo_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleDeleteLead = (id: string, name: string) => {
    if (window.confirm(`Deseja realmente remover o lead "${name}" da lista?`)) {
      deleteLead(id);
      loadLeadsData();
    }
  };

  return (
    <div className="space-y-6 pb-28 pt-2 max-w-2xl mx-auto px-3.5 sm:px-4 animate-fadeIn">
      
      {/* Top Header Navigation */}
      <header className="flex items-center justify-between border-b border-[#E1C38B]/20 pb-4 pt-2">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs text-[#E1C38B] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.back}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> {language === 'es' ? 'Administrador (idealconsumo)' : 'Administrador (idealconsumo)'}
          </span>
          <button
            onClick={loadLeadsData}
            title={language === 'es' ? 'Actualizar datos' : 'Atualizar dados'}
            className="p-1.5 rounded-lg bg-[#2A1B36] border border-[#E1C38B]/25 hover:border-[#E1C38B] text-[#E1C38B] transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </header>

      {/* Admin Navigation Tabs */}
      <div className="grid grid-cols-3 p-1 rounded-2xl bg-[#140B1E] border border-[#E1C38B]/20">
        <button
          onClick={() => setAdminTab('leads')}
          className={`py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            adminTab === 'leads'
              ? 'bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] shadow-md'
              : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>{t.admin.leadsTab} ({leads.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('broadcast')}
          className={`py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            adminTab === 'broadcast'
              ? 'bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] shadow-md'
              : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
          }`}
        >
          <Send className="w-4 h-4" />
          <span>{t.admin.broadcastTab}</span>
        </button>

        <button
          onClick={() => setAdminTab('templates')}
          className={`py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            adminTab === 'templates'
              ? 'bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] shadow-md'
              : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>{t.admin.autoRemindersTab}</span>
        </button>
      </div>

      {/* ==================== 1. TAB: GESTÃO DE LEADS ==================== */}
      {adminTab === 'leads' && (
        <div className="space-y-5 animate-fadeIn">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            <div className="p-3.5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/20 text-center space-y-0.5 shadow-md">
              <span className="text-[10px] text-[#C1AFCE] uppercase tracking-wider block">Total de Leads</span>
              <p className="text-2xl font-bold font-serif text-[#F7EEFB]">{stats.total}</p>
              <span className="text-[10px] text-emerald-400 font-medium">100% capturados</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/20 text-center space-y-0.5 shadow-md">
              <span className="text-[10px] text-[#C1AFCE] uppercase tracking-wider block">Com Signo Revelado</span>
              <p className="text-2xl font-bold font-serif text-gold-gradient">{stats.withSign}</p>
              <span className="text-[10px] text-[#E1C38B]">
                {stats.total > 0 ? `${Math.round((stats.withSign / stats.total) * 100)}% concluídos` : '0%'}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/20 text-center space-y-0.5 shadow-md">
              <span className="text-[10px] text-[#C1AFCE] uppercase tracking-wider block">Últimos 7 Dias</span>
              <p className="text-2xl font-bold font-serif text-amber-300">+{stats.thisWeek}</p>
              <span className="text-[10px] text-[#C1AFCE]">Novos cadastros</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/20 text-center space-y-0.5 shadow-md">
              <span className="text-[10px] text-[#C1AFCE] uppercase tracking-wider block">Signo Principal</span>
              <p className="text-lg font-bold font-serif text-[#F7EEFB] truncate">{stats.topSign}</p>
              <span className="text-[10px] text-[#C1AFCE]">Maior incidência</span>
            </div>
          </div>

          {/* Toolbar: Search, Sign Filter, and CSV Export */}
          <div className="p-4 rounded-2xl bg-[#2A1B36]/80 border border-[#E1C38B]/20 space-y-3 shadow-md">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#C1AFCE] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por nome ou e-mail..."
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-xs text-[#F7EEFB] placeholder-[#C1AFCE]/50 focus:border-[#E1C38B] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedSignFilter}
                  onChange={(e) => setSelectedSignFilter(e.target.value)}
                  className="py-2.5 px-3 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-xs text-[#F7EEFB] focus:border-[#E1C38B] focus:outline-none cursor-pointer"
                >
                  <option value="all">Todos os Signos</option>
                  <option value="sem_signo">Aguardando Data</option>
                  <option value="aries">Áries ♈</option>
                  <option value="touro">Touro ♉</option>
                  <option value="gemeos">Gêmeos ♊</option>
                  <option value="cancer">Câncer ♋</option>
                  <option value="leao">Leão ♌</option>
                  <option value="virgem">Virgem ♍</option>
                  <option value="libra">Libra ♎</option>
                  <option value="escorpiao">Escorpião ♏</option>
                  <option value="sagitario">Sagitário ♐</option>
                  <option value="capricornio">Capricórnio ♑</option>
                  <option value="aquario">Aquário ♒</option>
                  <option value="peixes">Peixes ♓</option>
                </select>

                <button
                  onClick={handleExportCSV}
                  className="py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] text-xs font-bold hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer shrink-0"
                  title="Baixar planilha de leads"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar CSV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Leads List */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1 text-xs text-[#C1AFCE]">
              <span>Mostrando {filteredLeads.length} de {leads.length} leads</span>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-[#E1C38B] hover:underline cursor-pointer"
                >
                  Limpar filtro
                </button>
              )}
            </div>

            {filteredLeads.length === 0 ? (
              <div className="p-8 rounded-3xl bg-[#2A1B36]/50 border border-[#E1C38B]/15 text-center space-y-2">
                <Users className="w-8 h-8 text-[#E1C38B]/50 mx-auto" />
                <p className="text-sm text-[#F7EEFB] font-medium">Nenhum lead encontrado com esse filtro</p>
                <p className="text-xs text-[#C1AFCE]">Tente buscar por outro termo ou signo.</p>
              </div>
            ) : (
              filteredLeads.map((lead) => {
                const signInfo = lead.zodiacSign ? getZodiacSignInfo(lead.zodiacSign as ZodiacSignId) : null;
                const formattedDate = lead.createdAt 
                  ? new Date(lead.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                  : '-';

                return (
                  <div
                    key={lead.id}
                    className="p-4 rounded-2xl bg-[#2A1B36]/90 border border-[#E1C38B]/25 hover:border-[#E1C38B]/60 transition-all shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-2xl bg-[#140B1E] border border-[#E1C38B]/35 flex items-center justify-center text-[#E1C38B] shrink-0 shadow-inner">
                        {lead.zodiacSign ? (
                          <ZodiacGlyph signId={lead.zodiacSign as ZodiacSignId} className="w-6 h-6 text-[#E1C38B]" />
                        ) : (
                          <span className="text-base text-[#C1AFCE]">✨</span>
                        )}
                      </div>

                      <div className="min-w-0 flex-1 space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-sm sm:text-base font-bold text-[#F7EEFB] truncate">
                            {lead.name || 'Viajante do Amor'}
                          </h3>
                          {signInfo ? (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E1C38B]/15 text-[#E1C38B] font-medium border border-[#E1C38B]/30">
                              {signInfo.name} ({signInfo.element})
                            </span>
                          ) : (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[#C1AFCE] border border-white/10">
                              Aguardando data
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-[#C1AFCE]">
                          <span className="truncate">{lead.email}</span>
                          <button
                            onClick={() => handleCopyEmail(lead.email)}
                            title="Copiar e-mail"
                            className="p-1 hover:text-[#E1C38B] transition-colors cursor-pointer"
                          >
                            {copiedEmail === lead.email ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#C1AFCE]/70 pt-0.5">
                          {lead.birthDate && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-[#E1C38B]" />
                              Nascimento: {lead.birthDate.split('-').reverse().join('/')}
                            </span>
                          )}
                          <span>Cadastrado em: {formattedDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-1.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <a
                        href={`mailto:${lead.email}`}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#F7EEFB] transition-colors"
                        title="Enviar e-mail para o lead"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#E1C38B]" />
                      </a>

                      <button
                        onClick={() => handleDeleteLead(lead.id, lead.name)}
                        className="p-2 rounded-xl bg-red-950/30 hover:bg-red-900/50 border border-red-500/20 text-red-400 transition-colors cursor-pointer"
                        title="Remover lead de teste"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* ==================== 2. TAB: DISPARO DE MENSAGENS PERSONALIZADAS ==================== */}
      {adminTab === 'broadcast' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-3xl bg-[#2A1B36]/90 border border-[#E1C38B]/30 space-y-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-gold-gradient">
                  Disparar Mensagem Personalizada
                </h2>
                <p className="text-xs text-[#C1AFCE]">
                  Envie notificações personalizadas para os celulares dos seus leads.
                </p>
              </div>
            </div>

            {broadcastSentFeedback && (
              <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Mensagem disparada com sucesso para os leads selecionados!</span>
              </div>
            )}

            <form onSubmit={handleSendCustomBroadcast} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#E1C38B] block uppercase tracking-wider">
                  Destinatários da Notificação:
                </label>
                <select
                  value={customTarget}
                  onChange={(e) => setCustomTarget(e.target.value as any)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-xs sm:text-sm text-[#F7EEFB] focus:border-[#E1C38B] focus:outline-none cursor-pointer"
                >
                  <option value="all">🌐 Todos os Leads Cadastrados ({leads.length} usuários)</option>
                  <option value="aries">♈ Somente Signo Áries</option>
                  <option value="touro">♉ Somente Signo Touro</option>
                  <option value="gemeos">♊ Somente Signo Gêmeos</option>
                  <option value="cancer">♋ Somente Signo Câncer</option>
                  <option value="leao">♌ Somente Signo Leão</option>
                  <option value="virgem">♍ Somente Signo Virgem</option>
                  <option value="libra">♎ Somente Signo Libra</option>
                  <option value="escorpiao">♏ Somente Signo Escorpião</option>
                  <option value="sagitario">♐ Somente Signo Sagitário</option>
                  <option value="capricornio">♑ Somente Signo Capricórnio</option>
                  <option value="aquario">♒ Somente Signo Aquário</option>
                  <option value="peixes">♓ Somente Signo Peixes</option>
                </select>
                <p className="text-[11px] text-[#C1AFCE]">
                  Alcance estimado: <strong className="text-[#E1C38B]">{targetLeadCount} lead(s)</strong>
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#E1C38B] block uppercase tracking-wider">
                  Título da Notificação:
                </label>
                <input
                  type="text"
                  required
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="Ex: Uma mensagem especial para o seu coração hoje ✨"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-xs sm:text-sm text-[#F7EEFB] placeholder-[#C1AFCE]/40 focus:border-[#E1C38B] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#E1C38B] block uppercase tracking-wider">
                  Corpo da Mensagem (Texto que aparece no celular):
                </label>
                <textarea
                  required
                  rows={3}
                  value={customBody}
                  onChange={(e) => setCustomBody(e.target.value)}
                  placeholder="Digite o conselho, reflexão ou novidade que chegará na notificação..."
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-xs sm:text-sm text-[#F7EEFB] placeholder-[#C1AFCE]/40 focus:border-[#E1C38B] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSendingBroadcast}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#E1C38B] via-[#E9D1A2] to-[#F4DFB8] text-[#1B1026] font-bold text-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#E1C38B]/20 cursor-pointer disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>Disparar Notificação Imediata</span>
              </button>
            </form>
          </div>

          {/* Broadcast History */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-bold text-[#F7EEFB] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#E1C38B]" /> Histórico de Disparos Realizados
            </h3>

            {broadcastList.length === 0 ? (
              <div className="p-6 rounded-2xl bg-[#2A1B36]/50 border border-[#E1C38B]/15 text-center text-xs text-[#C1AFCE]">
                Nenhuma mensagem personalizada disparada ainda.
              </div>
            ) : (
              broadcastList.map((b) => (
                <div key={b.id} className="p-4 rounded-2xl bg-[#2A1B36]/70 border border-[#E1C38B]/20 space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E1C38B]/15 text-[#E1C38B] font-semibold border border-[#E1C38B]/30">
                      {b.targetName || 'Todos'}
                    </span>
                    <span className="text-[10px] text-[#C1AFCE]">
                      {new Date(b.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#F7EEFB]">{b.title}</h4>
                  <p className="text-xs text-[#C1AFCE]">{b.body}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ==================== 3. TAB: LEMBRETES AUTOMÁTICOS ==================== */}
      {adminTab === 'templates' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-3xl bg-[#2A1B36]/90 border border-[#E1C38B]/30 space-y-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                <BellRing className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-gold-gradient">
                  Lembretes Automáticos por Horário
                </h2>
                <p className="text-xs text-[#C1AFCE]">
                  Mensagens enviadas nos horários que os usuários definiram no Perfil.
                </p>
              </div>
            </div>

            {/* Explanation Card */}
            <div className="p-4 rounded-2xl bg-[#140B1E]/80 border border-[#E1C38B]/20 text-xs text-[#C1AFCE] leading-relaxed space-y-1.5">
              <p className="font-semibold text-[#E1C38B] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Como funciona o envio automático:
              </p>
              <p>
                Cada usuário escolhe no seu <strong>Perfil</strong> os horários dos lembretes (Tiragem de Tarô e Mensagem do Signo). O sistema monitora e envia a notificação no celular no horário exato escolhido por cada um.
              </p>
            </div>

            {templatesSavedFeedback && (
              <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Textos automáticos salvos com sucesso!</span>
              </div>
            )}

            {testSentFeedback && (
              <div className="p-3 rounded-2xl bg-[#E1C38B]/15 border border-[#E1C38B]/40 text-[#E1C38B] text-xs font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Notificação de teste disparada no seu navegador/celular!</span>
              </div>
            )}

            <form onSubmit={handleSaveTemplates} className="space-y-6">
              
              {/* Template 1: Tarot Reading */}
              <div className="p-4 rounded-2xl bg-[#140B1E] border border-[#E1C38B]/25 space-y-3">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-semibold text-[#E1C38B] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 1. Lembrete da Tiragem de Tarô
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSendTestNotification('tarot')}
                    className="text-[11px] text-[#E1C38B] hover:underline cursor-pointer"
                  >
                    Testar envio
                  </button>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-[#C1AFCE]">Título do lembrete:</label>
                  <input
                    type="text"
                    value={templates.tarotTitle}
                    onChange={(e) => setTemplates({ ...templates, tarotTitle: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-[#1B1026] border border-[#E1C38B]/25 text-xs text-[#F7EEFB] focus:border-[#E1C38B] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-[#C1AFCE]">Mensagem do lembrete:</label>
                  <textarea
                    rows={2}
                    value={templates.tarotBody}
                    onChange={(e) => setTemplates({ ...templates, tarotBody: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-[#1B1026] border border-[#E1C38B]/25 text-xs text-[#F7EEFB] focus:border-[#E1C38B] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Template 2: Zodiac Daily Message */}
              <div className="p-4 rounded-2xl bg-[#140B1E] border border-[#E1C38B]/25 space-y-3">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-semibold text-[#E1C38B] uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 2. Lembrete da Mensagem do Signo
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSendTestNotification('zodiac')}
                    className="text-[11px] text-[#E1C38B] hover:underline cursor-pointer"
                  >
                    Testar envio
                  </button>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-[#C1AFCE]">Título do lembrete:</label>
                  <input
                    type="text"
                    value={templates.zodiacTitle}
                    onChange={(e) => setTemplates({ ...templates, zodiacTitle: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-[#1B1026] border border-[#E1C38B]/25 text-xs text-[#F7EEFB] focus:border-[#E1C38B] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-[#C1AFCE]">Mensagem do lembrete:</label>
                  <textarea
                    rows={2}
                    value={templates.zodiacBody}
                    onChange={(e) => setTemplates({ ...templates, zodiacBody: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-[#1B1026] border border-[#E1C38B]/25 text-xs text-[#F7EEFB] focus:border-[#E1C38B] focus:outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#E1C38B] via-[#E9D1A2] to-[#F4DFB8] text-[#1B1026] font-bold text-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#E1C38B]/20 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Salvar Configuração dos Lembretes</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
