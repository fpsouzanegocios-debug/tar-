export interface AppTranslations {
  common: {
    save: string;
    cancel: string;
    continue: string;
    back: string;
    close: string;
    loading: string;
    success: string;
    offline: string;
    language: string;
    portuguese: string;
    spanish: string;
  };
  nav: {
    hoje: string;
    signo: string;
    tiragens: string;
    diario: string;
    perfil: string;
    admin: string;
  };
  home: {
    oracleTag: string;
    appName: string;
    hello: string;
    helloTraveler: string;
    heroSub: string;
    completedTag: string;
    completedTitle: string;
    completedDesc: string;
    viewTodayBtn: string;
    resetTodayBtn: string;
    inProgressTag: string;
    inProgressTitle: string;
    inProgressDesc: string;
    resumeBtn: string;
    discardBtn: string;
    availableTag: string;
    availableTitle: string;
    availableDesc: string;
    card1: string;
    card2: string;
    card3: string;
    posSituacao: string;
    posDesafio: string;
    posOrientacao: string;
    startBtn: string;
    zodiacBlockTag: string;
    zodiacBlockDiscover: string;
    zodiacInLoveToday: string;
    zodiacDailyAdvice: string;
    zodiacReady: string;
    zodiacSelect: string;
    zodiacViewToday: string;
    zodiacRevealToday: string;
    zodiacChooseSign: string;
    lastReadingTag: string;
    openLastReading: string;
    symbolicNoticeTitle: string;
    symbolicNoticeDesc: string;
  };
  zodiac: {
    headerTitle: string;
    headerSub: string;
    changeSignBtn: string;
    messageOfDay: string;
    forSingles: string;
    inRelationship: string;
    starsAdvice: string;
    reflectionQuestion: string;
    saveToJournal: string;
    savedInJournal: string;
    chooseSignPrompt: string;
    revealedToday: string;
    tapToReveal: string;
    element: string;
    period: string;
    keywords: string;
  };
  flow: {
    step1Title: string;
    step1Sub: string;
    chooseQuestion: string;
    customQuestionLabel: string;
    customPlaceholder: string;
    charsRemaining: string;
    btnShuffle: string;
    shufflingTitle: string;
    shufflingSub: string;
    pickTitle: string;
    pickSub: string;
    ofCardsChosen: string;
    revealReadingBtn: string;
  };
  reading: {
    title: string;
    tapCardToReveal: string;
    reflectionQuestion: string;
    practicalAction: string;
    synthesis: string;
    myReflection: string;
    myReflectionPlaceholder: string;
    saveReflection: string;
    reflectionSaved: string;
    backHome: string;
    share: string;
  };
  history: {
    title: string;
    subtitle: string;
    empty: string;
    viewReadingBtn: string;
    filterAll: string;
  };
  journal: {
    title: string;
    subtitle: string;
    empty: string;
    searchPlaceholder: string;
    editNote: string;
    saveNote: string;
    deleteNote: string;
    noNoteYet: string;
  };
  profile: {
    title: string;
    personalInfo: string;
    nameLabel: string;
    birthDateLabel: string;
    zodiacSignLabel: string;
    detectSignPrompt: string;
    languageTitle: string;
    languageDesc: string;
    timezoneLabel: string;
    remindersTitle: string;
    remindersDesc: string;
    tarotReminder: string;
    zodiacReminder: string;
    timeLabel: string;
    saveBtn: string;
    savedSuccess: string;
    logoutBtn: string;
    adminBadge: string;
    adminDesc: string;
    openAdminBtn: string;
  };
  auth: {
    welcome: string;
    tagline: string;
    loginTab: string;
    signupTab: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    forgotPassword: string;
    submitLogin: string;
    submitSignup: string;
    continueWithoutLogin: string;
    benefitsTitle: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
  };
  onboarding: {
    title: string;
    subtitle: string;
    birthdateLabel: string;
    submitBtn: string;
  };
  installGuide: {
    title: string;
    subtitle: string;
    androidTitle: string;
    androidStep1: string;
    androidStep2: string;
    iosTitle: string;
    iosStep1: string;
    iosStep2: string;
    btnDirectInstall: string;
    btnAlreadyInstalled: string;
  };
  notificationModal: {
    title: string;
    subtitle: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    btnAllow: string;
    btnLater: string;
  };
  admin: {
    title: string;
    subtitle: string;
    leadsTab: string;
    broadcastTab: string;
    autoRemindersTab: string;
    totalUsers: string;
    leadsWithSign: string;
    notificationsActive: string;
    searchPlaceholder: string;
    exportCsv: string;
    sendCustomNotification: string;
    targetAudience: string;
    allUsers: string;
    specificSign: string;
    titleField: string;
    messageField: string;
    btnSendNow: string;
    broadcastHistory: string;
    saveTemplates: string;
    testNow: string;
  };
}

export const ptTranslations: AppTranslations = {
  common: {
    save: 'Salvar',
    cancel: 'Cancelar',
    continue: 'Continuar',
    back: 'Voltar',
    close: 'Fechar',
    loading: 'Carregando...',
    success: 'Sucesso!',
    offline: 'Você está offline. Suas mensagens salvas continuam acessíveis.',
    language: 'Idioma',
    portuguese: 'Português',
    spanish: 'Espanhol',
  },
  nav: {
    hoje: 'Hoje',
    signo: 'Meu Signo',
    tiragens: 'Tiragens',
    diario: 'Diário',
    perfil: 'Perfil',
    admin: 'Admin',
  },
  home: {
    oracleTag: 'Oráculo Diário de Relacionamentos',
    appName: 'Sua Tiragem do Amor',
    hello: 'Olá',
    helloTraveler: 'Olá, viajante',
    heroSub: 'acolha as mensagens do seu coração hoje.',
    completedTag: 'Tiragem de hoje concluída',
    completedTitle: 'Sua sabedoria de hoje está gravada',
    completedDesc: 'Você já realizou sua tiragem diária. Pode revisitar sua leitura e suas anotações pessoais a qualquer momento.',
    viewTodayBtn: 'Ver minha tiragem de hoje',
    resetTodayBtn: 'Reiniciar tiragem de hoje (Fazer novo sorteio)',
    inProgressTag: 'Tiragem em andamento',
    inProgressTitle: 'Suas cartas aguardam você',
    inProgressDesc: 'Você iniciou uma leitura que ainda não foi revelada. Suas cartas continuam preservadas para este dia.',
    resumeBtn: 'Continuar minha tiragem',
    discardBtn: 'Descartar e reiniciar tiragem do zero',
    availableTag: 'Tiragem diária disponível',
    availableTitle: 'Descubra a mensagem de hoje',
    availableDesc: 'Escolha três cartas e explore uma nova perspectiva sobre sua vida amorosa, suas escolhas e seu amor-próprio.',
    card1: '1ª Carta',
    card2: '2ª Carta',
    card3: '3ª Carta',
    posSituacao: 'Situação',
    posDesafio: 'Desafio',
    posOrientacao: 'Orientação',
    startBtn: 'Começar minha tiragem',
    zodiacBlockTag: 'Meu Signo no Amor',
    zodiacBlockDiscover: 'Descubra a mensagem do seu signo',
    zodiacInLoveToday: 'no amor hoje',
    zodiacDailyAdvice: 'Conselho diário para solteiros e relacionamentos',
    zodiacReady: 'Mensagem de hoje pronta para ser revelada',
    zodiacSelect: 'Selecione seu signo e acolha a reflexão do dia',
    zodiacViewToday: 'Ver mensagem de hoje',
    zodiacRevealToday: 'Revelar mensagem do dia',
    zodiacChooseSign: 'Escolher meu signo',
    lastReadingTag: 'Última leitura registrada',
    openLastReading: 'Abrir leitura anterior',
    symbolicNoticeTitle: 'Experiência Simbólica e Consciente',
    symbolicNoticeDesc: 'As interpretações apresentam o tarô como uma ferramenta poética e reflexiva para o seu autoconhecimento. O oráculo não confirma sentimentos de terceiros nem prevê acontecimentos futuros garantidos.',
  },
  zodiac: {
    headerTitle: 'Horóscopo do Amor',
    headerSub: 'Orientação diária para o seu signo no afeto',
    changeSignBtn: 'Trocar meu signo',
    messageOfDay: 'Mensagem do Dia',
    forSingles: 'Para Solteiros',
    inRelationship: 'Em um Relacionamento',
    starsAdvice: 'Conselho das Estrelas',
    reflectionQuestion: 'Pergunta para Reflexão',
    saveToJournal: 'Salvar no meu diário',
    savedInJournal: 'Salvo no Diário',
    chooseSignPrompt: 'Escolha o seu signo zodiacal',
    revealedToday: 'Mensagem de hoje revelada',
    tapToReveal: 'Toque para revelar a mensagem de hoje',
    element: 'Elemento',
    period: 'Período',
    keywords: 'Palavras-chave',
  },
  flow: {
    step1Title: 'Escolha o tema do seu coração',
    step1Sub: 'Para qual área do seu amor você busca clareza hoje?',
    chooseQuestion: 'Selecione ou escreva sua pergunta',
    customQuestionLabel: 'Ou digite sua própria pergunta para o oráculo:',
    customPlaceholder: 'Ex: O que posso cultivar em mim neste momento?',
    charsRemaining: 'caracteres restantes',
    btnShuffle: 'Embaralhar as cartas',
    shufflingTitle: 'Conectando ao oráculo...',
    shufflingSub: 'Respire fundo, mentalize sua pergunta e confie na sua intuição.',
    pickTitle: 'Escolha 3 cartas viradas para baixo',
    pickSub: 'A 1ª carta revelará sua Situação, a 2ª seu Desafio e a 3ª sua Orientação.',
    ofCardsChosen: 'de 3 cartas escolhidas',
    revealReadingBtn: 'Revelar minha tiragem',
  },
  reading: {
    title: 'Sua Leitura de Amor',
    tapCardToReveal: 'Toque na carta para revelar a mensagem',
    reflectionQuestion: 'Pergunta para reflexão:',
    practicalAction: 'Pequena ação prática:',
    synthesis: 'Resumo Conectando a Leitura',
    myReflection: 'Minha reflexão pessoal',
    myReflectionPlaceholder: 'Escreva aqui o que essa tiragem despertou em você hoje (salvo de forma privada no seu dispositivo)...',
    saveReflection: 'Salvar reflexão',
    reflectionSaved: 'Reflexão salva com sucesso!',
    backHome: 'Voltar ao início',
    share: 'Compartilhar',
  },
  history: {
    title: 'Minhas Tiragens',
    subtitle: 'Consulte o histórico de todas as mensagens que o oráculo trouxe para você.',
    empty: 'Você ainda não possui tiragens salvas. Faça sua primeira tiragem diária hoje!',
    viewReadingBtn: 'Ver leitura completa',
    filterAll: 'Todas',
  },
  journal: {
    title: 'Meu Diário de Afeto',
    subtitle: 'Suas reflexões íntimas, percepções e anotações sobre cada leitura.',
    empty: 'Nenhuma anotação escrita ainda. Ao finalizar uma tiragem, registre suas impressões em "Minha reflexão".',
    searchPlaceholder: 'Buscar em suas anotações...',
    editNote: 'Editar anotação',
    saveNote: 'Salvar',
    deleteNote: 'Excluir anotação',
    noNoteYet: 'Nenhuma reflexão anotada nesta tiragem.',
  },
  profile: {
    title: 'Meu Perfil & Configurações',
    personalInfo: 'Informações Pessoais',
    nameLabel: 'Seu nome ou apelido',
    birthDateLabel: 'Data de nascimento',
    zodiacSignLabel: 'Signo no Amor',
    detectSignPrompt: 'Preencha sua data para detectar seu signo automaticamente',
    languageTitle: 'Idioma do Aplicativo',
    languageDesc: 'Escolha o idioma de todo o aplicativo',
    timezoneLabel: 'Fuso horário das leituras diárias',
    remindersTitle: 'Lembretes Diários & Notificações',
    remindersDesc: 'Receba alertas na tela do seu celular mesmo com o aplicativo fechado',
    tarotReminder: 'Lembrete da Tiragem Diária de Tarô',
    zodiacReminder: 'Horóscopo diário do seu Signo',
    timeLabel: 'Horário do lembrete',
    saveBtn: 'Salvar Alterações',
    savedSuccess: 'Configurações salvas com sucesso!',
    logoutBtn: 'Sair da Conta',
    adminBadge: 'Painel do Administrador',
    adminDesc: 'Gerenciamento de leads, disparos e automações',
    openAdminBtn: 'Abrir Painel Admin',
  },
  auth: {
    welcome: 'Sua Tiragem do Amor',
    tagline: 'Oráculo diário para relacionamentos e autoconhecimento',
    loginTab: 'Entrar',
    signupTab: 'Criar Conta',
    nameLabel: 'Seu Nome',
    namePlaceholder: 'Como prefere ser chamado(a)?',
    emailLabel: 'Seu E-mail',
    emailPlaceholder: 'seu.email@exemplo.com',
    passwordLabel: 'Sua Senha Secreta',
    passwordPlaceholder: 'Mínimo 6 caracteres',
    forgotPassword: 'Esqueceu a senha?',
    submitLogin: 'Entrar na Minha Jornada',
    submitSignup: 'Criar Minha Conta Grátis',
    continueWithoutLogin: 'Ou continuar sem login (modo local)',
    benefitsTitle: 'Ao se conectar você garante:',
    benefit1: 'Histórico das suas tiragens protegido na nuvem',
    benefit2: 'Mensagens diárias do seu signo no amor',
    benefit3: 'Lembretes suaves na tela do celular',
  },
  onboarding: {
    title: 'Bem-vindo(a) ao seu Oráculo',
    subtitle: 'Para conectar sua energia e revelar o seu signo no amor, informe sua data de nascimento:',
    birthdateLabel: 'Data de Nascimento',
    submitBtn: 'Descobrir meu Signo & Entrar',
  },
  installGuide: {
    title: 'Instale o Aplicativo',
    subtitle: 'Tenha acesso rápido ao oráculo direto da sua tela inicial',
    androidTitle: 'Para Android (Chrome):',
    androidStep1: 'Toque no menu (3 pontinhos) no canto superior direito.',
    androidStep2: 'Selecione "Instalar aplicativo" ou "Adicionar à tela inicial".',
    iosTitle: 'Para iPhone / iPad (Safari):',
    iosStep1: 'Toque no botão Compartilhar (ícone com quadrado e seta para cima) na barra inferior.',
    iosStep2: 'Role para baixo e selecione "Adicionar à Tela de Início".',
    btnDirectInstall: 'Instalar Aplicativo Agora',
    btnAlreadyInstalled: 'Já instalei / Continuar',
  },
  notificationModal: {
    title: 'Ativar Notificações',
    subtitle: 'Receba um toque suave quando sua carta do dia estiver pronta e seu horóscopo disponível.',
    benefit1: 'Lembrete matinal da sua tiragem',
    benefit2: 'Previsão do seu signo no amor',
    benefit3: 'Mensagens especiais do oráculo',
    btnAllow: 'Ativar Notificações',
    btnLater: 'Agora não, depois',
  },
  admin: {
    title: 'Painel Administrativo',
    subtitle: 'Gestão de usuários, disparos e automações',
    leadsTab: 'Controle de Leads',
    broadcastTab: 'Disparar Mensagem',
    autoRemindersTab: 'Lembretes Automáticos',
    totalUsers: 'Total de Usuários',
    leadsWithSign: 'Com Signo',
    notificationsActive: 'Notificações Ativas',
    searchPlaceholder: 'Buscar por nome ou e-mail...',
    exportCsv: 'Exportar Leads (CSV)',
    sendCustomNotification: 'Disparar Notificação Personalizada',
    targetAudience: 'Público-alvo',
    allUsers: 'Todos os usuários',
    specificSign: 'Apenas do signo',
    titleField: 'Título da Notificação',
    messageField: 'Mensagem da Notificação',
    btnSendNow: 'Disparar Agora',
    broadcastHistory: 'Histórico de Disparos',
    saveTemplates: 'Salvar Modelos',
    testNow: 'Testar Agora',
  },
};

export const esTranslations: AppTranslations = {
  common: {
    save: 'Guardar',
    cancel: 'Cancelar',
    continue: 'Continuar',
    back: 'Volver',
    close: 'Cerrar',
    loading: 'Cargando...',
    success: '¡Éxito!',
    offline: 'Estás sin conexión. Tus mensajes guardados siguen disponibles.',
    language: 'Idioma',
    portuguese: 'Portugués',
    spanish: 'Español',
  },
  nav: {
    hoje: 'Hoy',
    signo: 'Mi Signo',
    tiragens: 'Tiradas',
    diario: 'Diario',
    perfil: 'Perfil',
    admin: 'Admin',
  },
  home: {
    oracleTag: 'Oráculo Diario de Relaciones',
    appName: 'Tu Tirada del Amor',
    hello: 'Hola',
    helloTraveler: 'Hola, viajero',
    heroSub: 'recibe los mensajes de tu corazón hoy.',
    completedTag: 'Tirada de hoy completada',
    completedTitle: 'Tu sabiduría de hoy está guardada',
    completedDesc: 'Ya realizaste tu tirada diaria. Puedes revisar tu lectura y notas personales en cualquier momento.',
    viewTodayBtn: 'Ver mi tirada de hoy',
    resetTodayBtn: 'Reiniciar tirada de hoy (Nuevo sorteo)',
    inProgressTag: 'Tirada en curso',
    inProgressTitle: 'Tus cartas te esperan',
    inProgressDesc: 'Iniciaste una lectura que aún no fue revelada. Tus cartas siguen reservadas para hoy.',
    resumeBtn: 'Continuar mi tirada',
    discardBtn: 'Descartar y reiniciar desde cero',
    availableTag: 'Tirada diaria disponible',
    availableTitle: 'Descubre el mensaje de hoy',
    availableDesc: 'Elige tres cartas y explora una nueva perspectiva sobre tu vida amorosa, elecciones y amor propio.',
    card1: '1ª Carta',
    card2: '2ª Carta',
    card3: '3ª Carta',
    posSituacao: 'Situación',
    posDesafio: 'Desafío',
    posOrientacao: 'Orientación',
    startBtn: 'Comenzar mi tirada',
    zodiacBlockTag: 'Mi Signo en el Amor',
    zodiacBlockDiscover: 'Descubre el mensaje de tu signo',
    zodiacInLoveToday: 'en el amor hoy',
    zodiacDailyAdvice: 'Consejo diario para solteros y relaciones',
    zodiacReady: 'Mensaje de hoy listo para ser revelado',
    zodiacSelect: 'Selecciona tu signo y recibe la reflexión del día',
    zodiacViewToday: 'Ver mensaje de hoy',
    zodiacRevealToday: 'Revelar mensaje del día',
    zodiacChooseSign: 'Elegir mi signo',
    lastReadingTag: 'Última lectura registrada',
    openLastReading: 'Abrir lectura anterior',
    symbolicNoticeTitle: 'Experiencia Simbólica y Consciente',
    symbolicNoticeDesc: 'Las interpretaciones presentan el tarot como una herramienta poética y reflexiva para tu autoconocimiento. El oráculo no confirma sentimientos de terceros ni predice el futuro.',
  },
  zodiac: {
    headerTitle: 'Horóscopo del Amor',
    headerSub: 'Orientación diaria para tu signo en el afecto',
    changeSignBtn: 'Cambiar mi signo',
    messageOfDay: 'Mensaje del Día',
    forSingles: 'Para Solteros',
    inRelationship: 'En una Relación',
    starsAdvice: 'Consejo de las Estrellas',
    reflectionQuestion: 'Pregunta para Reflexión',
    saveToJournal: 'Guardar en mi diario',
    savedInJournal: 'Guardado en el Diario',
    chooseSignPrompt: 'Elige tu signo zodiacal',
    revealedToday: 'Mensaje de hoy revelado',
    tapToReveal: 'Toca para revelar el mensaje de hoy',
    element: 'Elemento',
    period: 'Período',
    keywords: 'Palabras clave',
  },
  flow: {
    step1Title: 'Elige el tema de tu corazón',
    step1Sub: '¿Para qué área de tu amor buscas claridad hoy?',
    chooseQuestion: 'Selecciona o escribe tu pregunta',
    customQuestionLabel: 'O escribe tu propia pregunta para el oráculo:',
    customPlaceholder: 'Ej: ¿Qué puedo cultivar en mí en este momento?',
    charsRemaining: 'caracteres restantes',
    btnShuffle: 'Barajar las cartas',
    shufflingTitle: 'Conectando con el oráculo...',
    shufflingSub: 'Respira profundo, mentaliza tu pregunta y confía en tu intuición.',
    pickTitle: 'Elige 3 cartas boca abajo',
    pickSub: 'La 1ª carta revelará tu Situación, la 2ª tu Desafío y la 3ª tu Orientación.',
    ofCardsChosen: 'de 3 cartas elegidas',
    revealReadingBtn: 'Revelar mi tirada',
  },
  reading: {
    title: 'Tu Lectura de Amor',
    tapCardToReveal: 'Toca la carta para revelar el mensaje',
    reflectionQuestion: 'Pregunta para reflexión:',
    practicalAction: 'Pequeña acción práctica:',
    synthesis: 'Resumen Conectando la Lectura',
    myReflection: 'Mi reflexión personal',
    myReflectionPlaceholder: 'Escribe aquí lo que esta lectura despertó en ti hoy (guardado de forma privada en tu dispositivo)...',
    saveReflection: 'Guardar reflexión',
    reflectionSaved: '¡Reflexión guardada con éxito!',
    backHome: 'Volver al inicio',
    share: 'Compartir',
  },
  history: {
    title: 'Mis Tiradas',
    subtitle: 'Consulta el historial de todas las lecturas que el oráculo trajo para ti.',
    empty: 'Aún no tienes tiradas guardadas. ¡Haz tu primera tirada diaria hoy!',
    viewReadingBtn: 'Ver lectura completa',
    filterAll: 'Todas',
  },
  journal: {
    title: 'Mi Diario Afectivo',
    subtitle: 'Tus reflexiones íntimas, percepciones y notas sobre cada lectura.',
    empty: 'Aún no hay notas. Al terminar una tirada, escribe tus impresiones en "Mi reflexión".',
    searchPlaceholder: 'Buscar en tus notas...',
    editNote: 'Editar nota',
    saveNote: 'Guardar',
    deleteNote: 'Eliminar nota',
    noNoteYet: 'Ninguna reflexión anotada en esta tirada.',
  },
  profile: {
    title: 'Mi Perfil y Ajustes',
    personalInfo: 'Información Personal',
    nameLabel: 'Tu nombre o apodo',
    birthDateLabel: 'Fecha de nacimiento',
    zodiacSignLabel: 'Signo en el Amor',
    detectSignPrompt: 'Ingresa tu fecha para detectar tu signo automáticamente',
    languageTitle: 'Idioma de la Aplicación',
    languageDesc: 'Elige el idioma de toda la aplicación',
    timezoneLabel: 'Zona horaria para las lecturas',
    remindersTitle: 'Recordatorios Diarios y Notificaciones',
    remindersDesc: 'Recibe alertas en la pantalla de tu celular incluso con la app cerrada',
    tarotReminder: 'Recordatorio de la Tirada Diaria de Tarot',
    zodiacReminder: 'Horóscopo diario de tu Signo',
    timeLabel: 'Hora del recordatorio',
    saveBtn: 'Guardar Cambios',
    savedSuccess: '¡Ajustes guardados con éxito!',
    logoutBtn: 'Cerrar Sesión',
    adminBadge: 'Panel del Administrador',
    adminDesc: 'Gestión de leads, envíos y automatizaciones',
    openAdminBtn: 'Abrir Panel Admin',
  },
  auth: {
    welcome: 'Tu Tirada del Amor',
    tagline: 'Oráculo diario para relaciones y autoconocimiento',
    loginTab: 'Iniciar Sesión',
    signupTab: 'Crear Cuenta',
    nameLabel: 'Tu Nombre',
    namePlaceholder: '¿Cómo prefieres que te llamen?',
    emailLabel: 'Tu Correo Electrónico',
    emailPlaceholder: 'tu.correo@ejemplo.com',
    passwordLabel: 'Tu Contraseña Secreta',
    passwordPlaceholder: 'Mínimo 6 caracteres',
    forgotPassword: '¿Olvidaste tu contraseña?',
    submitLogin: 'Iniciar Mi Jornada',
    submitSignup: 'Crear Mi Cuenta Gratis',
    continueWithoutLogin: 'O continuar sin iniciar sesión (modo local)',
    benefitsTitle: 'Al conectarte obtienes:',
    benefit1: 'Historial de tus tiradas protegido en la nube',
    benefit2: 'Mensajes diarios de tu signo en el amor',
    benefit3: 'Recordatorios suaves en la pantalla de tu celular',
  },
  onboarding: {
    title: 'Bienvenido(a) a tu Oráculo',
    subtitle: 'Para conectar tu energía y revelar tu signo en el amor, dinos tu fecha de nacimiento:',
    birthdateLabel: 'Fecha de Nacimiento',
    submitBtn: 'Descubrir mi Signo y Entrar',
  },
  installGuide: {
    title: 'Instala la Aplicación',
    subtitle: 'Accede rápido al oráculo directo desde tu pantalla de inicio',
    androidTitle: 'Para Android (Chrome):',
    androidStep1: 'Toca el menú (3 puntos) en la esquina superior derecha.',
    androidStep2: 'Selecciona "Instalar aplicación" o "Agregar a la pantalla principal".',
    iosTitle: 'Para iPhone / iPad (Safari):',
    iosStep1: 'Toca el botón Compartir (icono de cuadrado con flecha hacia arriba) en la barra inferior.',
    iosStep2: 'Desplaza hacia abajo y selecciona "Agregar a pantalla de inicio".',
    btnDirectInstall: 'Instalar Aplicación Ahora',
    btnAlreadyInstalled: 'Ya lo instalé / Continuar',
  },
  notificationModal: {
    title: 'Activar Notificaciones',
    subtitle: 'Recibe una suave alerta cuando tu carta del día y tu horóscopo estén listos.',
    benefit1: 'Recordatorio matutino de tu tirada diaria',
    benefit2: 'Predicción de tu signo en el amor',
    benefit3: 'Mensajes especiales del oráculo',
    btnAllow: 'Activar Notificaciones',
    btnLater: 'Ahora no, después',
  },
  admin: {
    title: 'Panel de Administración',
    subtitle: 'Gestión de usuarios, envíos y automatizaciones',
    leadsTab: 'Control de Leads',
    broadcastTab: 'Enviar Mensaje',
    autoRemindersTab: 'Recordatorios Automáticos',
    totalUsers: 'Total de Usuarios',
    leadsWithSign: 'Con Signo',
    notificationsActive: 'Notificaciones Activas',
    searchPlaceholder: 'Buscar por nombre o correo...',
    exportCsv: 'Exportar Leads (CSV)',
    sendCustomNotification: 'Enviar Notificación Personalizada',
    targetAudience: 'Público Objetivo',
    allUsers: 'Todos los usuarios',
    specificSign: 'Solo del signo',
    titleField: 'Título de la Notificación',
    messageField: 'Mensaje de la Notificación',
    btnSendNow: 'Enviar Ahora',
    broadcastHistory: 'Historial de Envíos',
    saveTemplates: 'Guardar Plantillas',
    testNow: 'Probar Ahora',
  },
};
