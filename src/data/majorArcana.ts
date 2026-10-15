import type { ArcanaCard, ThemeId } from '../types/tarot';

export const THEMES = [
  {
    id: 'meu_relacionamento' as ThemeId,
    title: 'Meu relacionamento atual',
    subtitle: 'Cultive harmonia, clareza e conexão com quem caminha ao seu lado.',
    iconName: 'HeartHandshake',
    defaultQuestions: [
      'O que preciso observar no meu relacionamento hoje?',
      'Como posso comunicar melhor minhas necessidades?',
      'Qual energia podemos nutrir juntos para fortalecer nossa sintonia?',
      'O que está pronto para ser acolhido ou transformado entre nós?'
    ]
  },
  {
    id: 'conhecendo_alguem' as ThemeId,
    title: 'Estou conhecendo alguém',
    subtitle: 'Navegue pelo início de uma história com serenidade, presença e verdade.',
    iconName: 'Sparkles',
    defaultQuestions: [
      'Como posso conhecer esse vínculo com calma e sem pressa?',
      'Quais expectativas quero rever para me manter no presente?',
      'O que minha intuição e sensibilidade estão sinalizando sobre nós?',
      'Como preservar minha essência e limites nesse novo encontro?'
    ]
  },
  {
    id: 'distancia' as ThemeId,
    title: 'Há distância entre nós',
    subtitle: 'Compreenda a saudade, os silêncios ou os desafios do espaço físico e emocional.',
    iconName: 'Compass',
    defaultQuestions: [
      'Como posso lidar com essa distância com maturidade e paz?',
      'Que conversa importante ou sincera estou evitando?',
      'Como preservar o afeto sem me perder da minha própria rotina?',
      'O que este espaço de silêncio revela sobre minhas necessidades afetivas?'
    ]
  },
  {
    id: 'amor_proprio' as ThemeId,
    title: 'Meu amor-próprio',
    subtitle: 'Reconheça seu próprio valor, acolha seus limites e honre sua trajetória.',
    iconName: 'Flower2',
    defaultQuestions: [
      'O que preciso cuidar com carinho em mim hoje?',
      'Que limite saudável quero respeitar e comunicar?',
      'Como posso ser mais generosa e compreensiva com meus sentimentos?',
      'Qual padrão afetivo estou pronta para reconhecer e acolher com amor?'
    ]
  }
];

export const MAJOR_ARCANA: ArcanaCard[] = [
  {
    id: 0,
    roman: '0',
    name: 'O Louco',
    image: '/cards/card_00.jpg',
    element: 'Ar',
    keywords: ['Espontaneidade', 'Novo Ciclo', 'Leveza', 'Coragem'],
    archetype: 'O Viajante Livre',
    generalLoveMeaning: 'O Louco convida a dar um passo sem o peso de roteiros rígidos, abrindo espaço para a pureza do sentir e o frescor de novos caminhos.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Há um convite para desarmar expectativas antigas e permitir que a relação respire uma nova leveza, sem cobranças desnecessárias.',
        conhecendo_alguem: 'Você está diante de uma página em branco. A curiosidade e o desprendimento tornam essa aproximação mais autêntica e alegre.',
        distancia: 'A distância física ou temporal pede que você não alimente cenários catastróficos; viva o presente com menos ansiedade e mais abertura.',
        amor_proprio: 'Momento precioso para se permitir recomeçar, perdoando passos passados e acolhendo sua liberdade interior sem culpa.'
      },
      desafio: {
        meu_relacionamento: 'Cuidado com a impulsividade ou com a tentação de fugir de conversas que exigem responsabilidade e presença.',
        conhecendo_alguem: 'A pressa em viver a aventura pode fazer você ignorar sutilezas ou agir de forma dispersa em relação aos seus próprios valores.',
        distancia: 'Evite a desconexão descuidada. A liberdade não precisa significar descaso pelo que foi combinado entre vocês.',
        amor_proprio: 'A autossabotagem de iniciar vários processos sem se aprofundar no acolhimento de quem você realmente é.'
      },
      orientacao: {
        meu_relacionamento: 'Proponha algo inédito e leve hoje: um passeio simples, um riso compartilhado ou um gesto espontâneo de carinho.',
        conhecendo_alguem: 'Permita-se conhecer a pessoa pelo que ela demonstra no agora, sem projetar histórias ou conclusões precipitadas.',
        distancia: 'Foque no que está ao seu alcance neste dia. Cultive sua vida própria para que o reencontro seja enriquecedor.',
        amor_proprio: 'Dê-se a chance de fazer uma escolha apenas pelo prazer de vivê-la, honrando sua alegria mais genuína.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual expectativa pesada estou disposta a soltar para que o diálogo volte a ser leve?',
      conhecendo_alguem: 'Estou apreciando quem a pessoa é ou me apegando à imagem idealizada que criei?',
      distancia: 'O que posso fazer hoje por mim que preencha meu coração de entusiasmo próprio?',
      amor_proprio: 'Se eu não precisasse provar nada para ninguém, o que escolheria para minha paz agora?'
    },
    microActions: {
      meu_relacionamento: 'Envie uma mensagem leve, afetuosa e despretensiosa, sem cobranças de resposta imediata.',
      conhecendo_alguem: 'Mantenha o foco na conversa atual, percebendo como você se sente no próprio corpo ao interagir.',
      distancia: 'Dedique 20 minutos a uma atividade que você ama e que não tenha relação com o outro.',
      amor_proprio: 'Faça uma pausa consciente, respire fundo três vezes e diga mentalmente: "Tenho o direito de começar de novo".'
    }
  },
  {
    id: 1,
    roman: 'I',
    name: 'O Mago',
    image: '/cards/card_01.jpg',
    element: 'Fogo / Mercúrio',
    keywords: ['Iniciativa', 'Clareza', 'Poder Pessoal', 'Comunicação'],
    archetype: 'O Criador Consciente',
    generalLoveMeaning: 'O Mago nos lembra de que temos todos os recursos emocionais e comunicativos para expressar nossos sentimentos com clareza e magnetismo.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Você possui as palavras e a postura certas para guiar a relação a um patamar de maior compreensão e dinamismo.',
        conhecendo_alguem: 'Há uma química mental e comunicativa favorável; o magnetismo inicial está fundamentado na troca autêntica de ideias.',
        distancia: 'A clareza na forma de se expressar é sua maior aliada para encurtar a distância e transmitir presença verdadeira.',
        amor_proprio: 'Você está no comando da sua narrativa amorosa; reconhecer seus talentos e beleza interna transforma sua aura.'
      },
      desafio: {
        meu_relacionamento: 'Atenção para não usar a persuasão como forma de manipulação ou para sempre ter a última palavra.',
        conhecendo_alguem: 'Não tente mostrar uma versão perfeita de si para impressionar; a vulnerabilidade conecta mais que truques de charme.',
        distancia: 'A ambiguidade nas mensagens ou o silêncio estratégico podem gerar ruídos desnecessários na comunicação.',
        amor_proprio: 'O hábito de racionalizar demais os sentimentos em vez de se permitir sentir o que o coração pede.'
      },
      orientacao: {
        meu_relacionamento: 'Inicie uma conversa honesta e propositiva, apresentando com afeto aquilo que você deseja construir em conjunto.',
        conhecendo_alguem: 'Seja expressiva sobre seus gostos e opiniões, permitindo que a outra pessoa veja sua inteligência e verdade.',
        distancia: 'Crie uma ponte criativa: um áudio sincero, uma lembrança afetiva ou um momento reservado para uma chamada com calma.',
        amor_proprio: 'Coloque em prática uma decisão que você vem adiando e que sabe que preservará sua dignidade e paz.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como posso dizer o que sinto com firmeza e gentileza ao mesmo tempo?',
      conhecendo_alguem: 'Minha comunicação reflete quem eu realmente sou ou o que acho que o outro gostaria de ouvir?',
      distancia: 'Estou sendo transparente sobre o que espero e o que posso oferecer no momento?',
      amor_proprio: 'Quais habilidades e virtudes minhas eu costumo diminuir diante dos outros?'
    },
    microActions: {
      meu_relacionamento: 'Fale de um sentimento seu usando "eu sinto" em vez de "você faz", abrindo espaço para acolhimento.',
      conhecendo_alguem: 'Compartilhe um interesse genuíno seu com entusiasmo e veja como a pessoa reage.',
      distancia: 'Escreva seus pensamentos antes de mandar uma mensagem delicada, polindo as palavras com carinho.',
      amor_proprio: 'Anote 3 qualidades que tornam sua companhia agradável e sinta orgulho de quem você é.'
    }
  },
  {
    id: 2,
    roman: 'II',
    name: 'A Sacerdotisa',
    image: '/cards/card_02.jpg',
    element: 'Água / Lua',
    keywords: ['Intuição', 'Silêncio Fértil', 'Sensibilidade', 'Mistério'],
    archetype: 'A Guardiã dos Saberes Ocultos',
    generalLoveMeaning: 'A Sacerdotisa aconselha a escutar a voz suave da intuição antes de qualquer movimento apressado, respeitando o tempo das coisas.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Há sentimentos profundos e não ditos sob a superfície. O momento pede escuta atenta e sensibilidade aos olhares e gestos.',
        conhecendo_alguem: 'Sua intuição já está captando detalhes importantes sobre esse vínculo. Observe como seu íntimo reage a cada contato.',
        distancia: 'O silêncio atual não é um vazio; é um período de maturação interna para que você descubra o que realmente quer.',
        amor_proprio: 'Um chamado para recolher sua energia, honrar sua intimidade e não expor suas dores a quem não sabe cuidar delas.'
      },
      desafio: {
        meu_relacionamento: 'O fechamento excessivo ou a expectativa de que o outro adivinhe o que você sente sem você precisar falar.',
        conhecendo_alguem: 'A desconfiança prévia que ergue muros intransponíveis antes mesmo de a história ter começado.',
        distancia: 'Permitir que a imaginação crie suspeitas infundadas no vácuo de respostas ou silêncios momentâneos.',
        amor_proprio: 'Ignorar aquele pressentimento recorrente por medo de enfrentar a realidade dos fatos.'
      },
      orientacao: {
        meu_relacionamento: 'Em vez de pressionar por respostas imediatas, crie um ambiente seguro e calmo para que a confidência aconteça.',
        conhecendo_alguem: 'Dê tempo para que os fatos se revelem naturalmente. O tempo é o maior filtro da verdade.',
        distancia: 'Confie na conexão interior que independe da presença imediata e use esse tempo para meditar e descansar.',
        amor_proprio: 'Reserve um tempo de silêncio para si hoje, longe de telas e opiniões alheias, ouvindo o que sua alma sussurra.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que meu coração já sabe sobre esta situação, mas minha mente tenta justificar?',
      conhecendo_alguem: 'Meu corpo se sente relaxado ou tenso quando penso nessa pessoa?',
      distancia: 'O que o silêncio entre nós está me ensinando sobre minha autonomia emocional?',
      amor_proprio: 'Estou respeitando meu ritmo interior ou me apressando para agradar expectativas externas?'
    },
    microActions: {
      meu_relacionamento: 'Pratique a escuta ativa por cinco minutos hoje, ouvindo com atenção sem planejar a resposta.',
      conhecendo_alguem: 'Evite checar redes sociais ou status; confie naquilo que é conversado frente a frente ou diretamente.',
      distancia: 'Faça um chá acolhedor à noite e respire com tranquilidade, acolhendo sua própria companhia.',
      amor_proprio: 'Escreva em seu caderno uma intuição que você sentiu recentemente e valide a sua própria percepção.'
    }
  },
  {
    id: 3,
    roman: 'III',
    name: 'A Imperatriz',
    image: '/cards/card_03.jpg',
    element: 'Terra / Vênus',
    keywords: ['Abundância', 'Nutrição', 'Sensualidade', 'Acolhimento'],
    archetype: 'A Mãe Criadora e Amante',
    generalLoveMeaning: 'A Imperatriz celebra a beleza do afeto generoso, a capacidade de florescer no amor e o prazer de cuidar e ser cuidada com dignidade.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O vínculo tem grande potencial de fertilidade emocional, carinho e cumplicidade quando alimentado com delicadeza e prazer.',
        conhecendo_alguem: 'Você exala charme e vitalidade; há uma atração envolvente e calorosa que convida a momentos doces e prazerosos.',
        distancia: 'O afeto permanece vivo e fértil, nutrido pelas lembranças e pelo desejo mútuo de proporcionar aconchego.',
        amor_proprio: 'É tempo de se tratar como alguém sagrada: cuidar do corpo, dos sentidos e do ambiente com carinho e requinte.'
      },
      desafio: {
        meu_relacionamento: 'Cuidado para não assumir o papel maternal em excesso, cuidando do outro a ponto de anular o desejo e a reciprocidade.',
        conhecendo_alguem: 'A carência disfarçada de doação desmedida, querendo entregar tudo antes de receber o básico em troca.',
        distancia: 'A frustração pela falta de contato físico ou a sensação de que o afeto seca se não houver demonstrações constantes.',
        amor_proprio: 'A tendência a buscar validação externa para sentir que é atraente, valiosa ou merecedora de carinho.'
      },
      orientacao: {
        meu_relacionamento: 'Nutra o vínculo com pequenos mimos, elogios sinceros e momentos de conforto sensorial a dois.',
        conhecendo_alguem: 'Deixe que a pessoa se esforce para estar com você também; saboreie o prazer de ser cortejada e acolhida.',
        distancia: 'Alimente o contato com palavras calorosas, fotos do seu dia e gestos que demonstrem que a afeição floresce.',
        amor_proprio: 'Dedique um momento ao seu autocuidado físico e estético: um banho demorado, sua roupa favorita ou um doce especial.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou recebendo o mesmo nível de cuidado e atenção que tenho oferecido com tanta facilidade?',
      conhecendo_alguem: 'Sinto que posso relaxar e ser acolhida nesse vínculo, ou sinto que preciso estar sempre me esforçando?',
      distancia: 'Como posso me sentir nutrida e preenchida de afeto mesmo nos momentos de ausência física?',
      amor_proprio: 'O que meu corpo e meus sentidos estão me pedindo hoje para se sentirem revigorados?'
    },
    microActions: {
      meu_relacionamento: 'Prepare um café especial ou faça um carinho sem esperar nada de volta, apenas pelo prazer do afeto.',
      conhecendo_alguem: 'Receba um elogio com um sorriso e um sincero "obrigada", sem se diminuir ou desconversar.',
      distancia: 'Envie uma mensagem calorosa relembrando uma memória doce que vocês construíram juntos.',
      amor_proprio: 'Olhe-se no espelho com ternura e reconheça em voz alta uma beleza sua que você admira.'
    }
  },
  {
    id: 4,
    roman: 'IV',
    name: 'O Imperador',
    image: '/cards/card_04.jpg',
    element: 'Fogo / Áries',
    keywords: ['Estrutura', 'Limites Claros', 'Compromisso', 'Estabilidade'],
    archetype: 'O Protetor Firme',
    generalLoveMeaning: 'O Imperador traz a necessidade de bases sólidas, coerência entre palavras e atitudes, e a coragem de estabelecer limites saudáveis.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O momento pede solidez e alinhamento de projetos a longo prazo. O amor se prova na constância e na confiabilidade mútua.',
        conhecendo_alguem: 'É hora de observar atitudes concretas e estabilidade, além das palavras bonitas. O caráter é o maior atrativo.',
        distancia: 'A relação requer combinados claros e rotinas bem definidas para manter a segurança emocional de ambas as partes.',
        amor_proprio: 'Você está construindo uma relação inabalável consigo mesma, estabelecendo limites que ninguém mais poderá ultrapassar.'
      },
      desafio: {
        meu_relacionamento: 'A rigidez, o orgulho ou a teimosia de querer controlar o ritmo e os detalhes da dinâmica afetiva.',
        conhecendo_alguem: 'Uma postura excessivamente defensiva ou desconfiada que pode afastar aproximações sinceras.',
        distancia: 'A tentação de impor regras autoritárias por insegurança ou medo de perder o contato.',
        amor_proprio: 'O excesso de autocrítica e a cobrança por uma perfeição emocional que impede você de ser humana.'
      },
      orientacao: {
        meu_relacionamento: 'Sejam francos sobre os planos conjuntos. Definam acordos práticos que tragam tranquilidade e previsibilidade.',
        conhecendo_alguem: 'Mantenha seus padrões elevados e observe a pontualidade, a coerência e a integridade do outro.',
        distancia: 'Estabeleçam dias e horários confortáveis para se falar, transformando o combinado em um porto seguro.',
        amor_proprio: 'Diga um "não" com elegância e firmeza àquilo que drena sua energia ou desrespeita seu espaço.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Nossos acordos atuais ainda nos servem ou precisam ser atualizados com maturidade?',
      conhecendo_alguem: 'Essa pessoa demonstra estabilidade nas atitudes ou apenas entusiasmo momentâneo?',
      distancia: 'Qual combinado prático nos daria mais segurança e diminuiria a ansiedade da distância?',
      amor_proprio: 'Qual limite eu ainda tenho receio de colocar por medo de desagradar os outros?'
    },
    microActions: {
      meu_relacionamento: 'Alinhem juntos uma prioridade da semana para que nenhum dos dois se sinta desamparado.',
      conhecendo_alguem: 'Observe se as atitudes da pessoa correspondem às histórias que ela conta sobre si mesma.',
      distancia: 'Proponha uma data e horário específicos para o próximo momento de conversa com calma.',
      amor_proprio: 'Arrume seu ambiente ou espaço de trabalho como um ato de respeito e ordem para sua mente.'
    }
  },
  {
    id: 5,
    roman: 'V',
    name: 'O Hierofante',
    image: '/cards/card_05.jpg',
    element: 'Terra / Touro',
    keywords: ['Valores Compartilhados', 'Confiança', 'Sabedoria', 'Pacto'],
    archetype: 'O Mestre dos Valores',
    generalLoveMeaning: 'O Hierofante fala sobre a sintonia ética e espiritual entre duas pessoas, o respeito às tradições afetivas e a busca por um propósito conjunto.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'A relação se apoia em valores compartilhados, respeito moral e no desejo sincero de construir algo duradouro.',
        conhecendo_alguem: 'Momento de descobrir se vocês compartilham das mesmas visões de mundo, família e prioridades fundamentais.',
        distancia: 'A confiança mútua e a lealdade ética são o alicerce que sustenta o vínculo enquanto os corpos estão distantes.',
        amor_proprio: 'Honre suas crenças e sua filosofia de vida. Seu valor não depende da aprovação ou dos moldes alheios.'
      },
      desafio: {
        meu_relacionamento: 'Cuidado com o moralismo, com o medo do julgamento familiar ou com a estagnação em regras ultrapassadas.',
        conhecendo_alguem: 'Tentar se enquadrar nas expectativas sociais da família ou amigos em vez de sentir sua própria verdade.',
        distancia: 'Cobranças baseadas em "como um casal deveria agir" segundo cartilhas externas, gerando atritos.',
        amor_proprio: 'Carregar culpas herdadas de criações antigas sobre o que você merece ou não no amor.'
      },
      orientacao: {
        meu_relacionamento: 'Conversem sobre o que é sagrado e inegociável para vocês dois, reafirmando os votos íntimos de lealdade.',
        conhecendo_alguem: 'Faça perguntas sobre princípios, sonhos de vida e o que a pessoa considera essencial em uma relação.',
        distancia: 'Relembrem o propósito maior pelo qual vocês aceitaram viver essa fase e mantenham a fé no compromisso mútuo.',
        amor_proprio: 'Busque a sabedoria de um livro, mentora ou momento de oração/meditação para centrar sua alma.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Quais valores morais e éticos nós dois consideramos indispensáveis para nossa paz?',
      conhecendo_alguem: 'Vejo coerência entre os valores dessa pessoa e a vida que sonho construir?',
      distancia: 'Que significado maior posso enxergar neste desafio de estarmos distantes agora?',
      amor_proprio: 'Quais crenças limitantes sobre relacionamentos foram herdadas e já não fazem sentido para mim?'
    },
    microActions: {
      meu_relacionamento: 'Agradeça ao seu par por um gesto cotidiano de respeito ou lealdade que muitas vezes passa despercebido.',
      conhecendo_alguem: 'Converse sobre um tema profundo que revele o coração e as convicções da outra pessoa.',
      distancia: 'Faça uma oração, envio de boas energias ou vibração amorosa em prol do bem-estar do outro.',
      amor_proprio: 'Escreva seus 3 valores inegociáveis no amor e prometa a si mesma nunca mais abrir mão deles.'
    }
  },
  {
    id: 6,
    roman: 'VI',
    name: 'Os Enamorados',
    image: '/cards/card_06.jpg',
    element: 'Ar / Gêmeos',
    keywords: ['Escolha Afetiva', 'Afinidade', 'Sintonia', 'Entrega'],
    archetype: 'O Encontro dos Corações',
    generalLoveMeaning: 'Os Enamorados simbolizam o despertar do amor autêntico, a escolha consciente de caminhar junto e a harmonia entre corpo e alma.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Forte momento de união, atração e cumplicidade. Vocês são chamados a escolher um ao outro renovadamente todos os dias.',
        conhecendo_alguem: 'Existe uma atração magnética e evidente; a faísca do encanto mútuo está acesa e convida à aproximação.',
        distancia: 'O coração já fez a escolha; a conexão emocional é intensa e sobrevive com ternura aos quilômetros.',
        amor_proprio: 'A reconciliação mais bonita: escolher estar em paz consigo mesma, abraçando suas luzes e suas vulnerabilidades.'
      },
      desafio: {
        meu_relacionamento: 'A indecisão, o medo de perder outras oportunidades ou a dúvida paralisante em momentos de definição.',
        conhecendo_alguem: 'A tentação de idealizar a perfeição ou ficar dividido entre o conforto do passado e a nova oportunidade.',
        distancia: 'A dor da saudade fazendo questionar se a escolha de esperar e persistir vale o esforço do coração.',
        amor_proprio: 'Ficar em cima do muro em relação ao que você merece, aceitando migalhas por receio de ficar só.'
      },
      orientacao: {
        meu_relacionamento: 'Celebrem o amor com um gesto íntimo. Lembre ao seu par o porquê de ter escolhido estar ao lado dele.',
        conhecendo_alguem: 'Assuma seus sentimentos com naturalidade; deixe claro seu interesse quando houver reciprocidade.',
        distancia: 'Envie uma lembrança afetiva que simbolize o pacto de carinho e a certeza do sentimento compartilhado.',
        amor_proprio: 'Escolha você mesma em primeiro lugar hoje. Não dispute atenção onde você deveria ser prioridade.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que me faz ter certeza de que quero continuar escolhendo essa relação no presente?',
      conhecendo_alguem: 'Estou agindo com o coração inteiro ou com medo de me entregar ao que é bom?',
      distancia: 'Como posso demonstrar ao meu par que meu afeto continua firme e dedicado?',
      amor_proprio: 'Se eu me amasse 10% a mais hoje, que decisão eu tomaria sem hesitar?'
    },
    microActions: {
      meu_relacionamento: 'Olhe nos olhos do seu par por alguns segundos e diga com verdade o quanto ele é especial para você.',
      conhecendo_alguem: 'Dê um sinal claro de simpatia e abertura para o próximo encontro ou conversa.',
      distancia: 'Escreva uma mensagem cheia de carinho expressando a beleza do sentimento que você guarda no peito.',
      amor_proprio: 'Compre uma flor para si mesma ou separe um momento de puro deleite para celebrar sua vida.'
    }
  },
  {
    id: 7,
    roman: 'VII',
    name: 'O Carro',
    image: '/cards/card_07.jpg',
    element: 'Água / Câncer',
    keywords: ['Direção', 'Determinação', 'Superação', 'Autonomia'],
    archetype: 'O Condutor Vitorioso',
    generalLoveMeaning: 'O Carro indica que você tem a força e a determinação necessárias para superar oscilações emocionais e guiar sua vida afetiva ao rumo desejado.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'A relação ganha tração e movimento para superar obstáculos anteriores. Vocês estão prontos para avançar juntos.',
        conhecendo_alguem: 'As coisas estão se desenvolvendo com rapidez e entusiasmo; há vontade mútua de fazer a relação dar certo.',
        distancia: 'Momento favorável para planejar o próximo reencontro físico ou traçar um plano de ação para encurtar o afastamento.',
        amor_proprio: 'Você retomou as rédeas da sua vida amorosa, não permitindo que a carência pilote suas decisões.'
      },
      desafio: {
        meu_relacionamento: 'Querer impor seu ritmo a qualquer custo, atropelando o tempo e as necessidades do seu parceiro.',
        conhecendo_alguem: 'Aceleramento desmedido das etapas, forçando intimidade antes da hora.',
        distancia: 'A impaciência e a ansiedade descontrolada em relação ao futuro e aos prazos.',
        amor_proprio: 'O esgotamento por querer controlar todas as variáveis do destino afetivo.'
      },
      orientacao: {
        meu_relacionamento: 'Mantenham o foco no objetivo comum de vocês. Não permitam que pequenas distrações diárias desestruturem o casal.',
        conhecendo_alguem: 'Mantenha o equilíbrio entre entusiasmo e paciência, conduzindo a aproximação com serenidade.',
        distancia: 'Dê um passo prático: pesquise datas, passagens ou planeje o próximo momento de união com clareza.',
        amor_proprio: 'Celebre suas conquistas e avance com firmeza na direção daquilo que nutre sua autoestima.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Para onde estamos direcionando a energia do nosso casal neste momento?',
      conhecendo_alguem: 'Estou conseguindo manter meu próprio ritmo sem me perder na velocidade do outro?',
      distancia: 'Qual é o plano prático mais viável para diminuirmos a incerteza da distância?',
      amor_proprio: 'Quem está no controle da minha paz: minhas escolhas conscientes ou a reação dos outros?'
    },
    microActions: {
      meu_relacionamento: 'Proponha uma meta simples para os próximos 30 dias que entusiasme vocês dois.',
      conhecendo_alguem: 'Mantenha sua agenda pessoal ativa e combine saídas sem abrir mão dos seus compromissos.',
      distancia: 'Abra o calendário e sugira uma data ou roteiro para o próximo encontro.',
      amor_proprio: 'Escreva uma vitória recente na superação de uma insegurança antiga e sinta orgulho de si.'
    }
  },
  {
    id: 8,
    roman: 'VIII',
    name: 'A Força',
    image: '/cards/card_08.jpg',
    element: 'Fogo / Leão',
    keywords: ['Mansidão Firme', 'Paciência', 'Maturidade Emocional', 'Compaixão'],
    archetype: 'O Domínio do Coração',
    generalLoveMeaning: 'A Força ensina que a verdadeira potência no amor não vem do grito ou da imposição, mas da doçura inabalável e do acolhimento das próprias sombras.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'A calma e a gentileza serão capazes de dissolver qualquer tensão recente no relacionamento.',
        conhecendo_alguem: 'Uma atração madura e calorosa, onde a confiança mútua é construída com paciência e respeito aos medos do outro.',
        distancia: 'Você possui a resiliência e a tranquilidade necessárias para atravessar esse período sem se deixar abater.',
        amor_proprio: 'Você está aprendendo a abraçar suas imperfeições com amor e compaixão, sem se agredir por sentir dor.'
      },
      desafio: {
        meu_relacionamento: 'A reatividade impulsiva, o orgulho ferido ou o rancor acumulado querendo explodir em momentos de discórdia.',
        conhecendo_alguem: 'O medo da vulnerabilidade fazendo você rugir ou se defender quando tudo o que o momento pede é entrega.',
        distancia: 'O desânimo emocional minando sua paciência e gerando irritação com a pessoa distante.',
        amor_proprio: 'A autocrítica severa e impaciente com seu próprio tempo de cicatrização e cura.'
      },
      orientacao: {
        meu_relacionamento: 'Responda à rispidez com afeto calmo. O acolhimento desarma qualquer defesa.',
        conhecendo_alguem: 'Mostre seu lado acolhedor e seguro; permita que a outra pessoa se sinta protegida ao seu lado.',
        distancia: 'Acalme a mente nos momentos de saudade; lembre-se de que laços verdadeiros se fortalecem na maturidade.',
        amor_proprio: 'Trate sua criança interior com absoluta ternura hoje, confortando suas inseguranças.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como posso responder a uma discordância com compaixão em vez de defesa reativa?',
      conhecendo_alguem: 'O que me dá medo de relaxar a guarda e me permitir ser cuidada?',
      distancia: 'De onde posso extrair serenidade nos dias em que a saudade aperta o peito?',
      amor_proprio: 'Qual aspecto da minha história merece menos julgamento e mais carinho de mim mesma?'
    },
    microActions: {
      meu_relacionamento: 'Dê um abraço longo e silencioso no seu parceiro antes de tocar em qualquer assunto delicado.',
      conhecendo_alguem: 'Responda com honestidade calma a uma pergunta sobre como foi o seu dia, sem rodeios.',
      distancia: 'Coloque as mãos no peito, feche os olhos e respire lentamente até sentir o coração desacelerar.',
      amor_proprio: 'Diga a si mesma em voz suave: "Eu sou suficiente, eu me acolho e estou em paz no meu processo".'
    }
  },
  {
    id: 9,
    roman: 'IX',
    name: 'O Eremita',
    image: '/cards/card_09.jpg',
    element: 'Terra / Virgem',
    keywords: ['Introspecção', 'Luz Interior', 'Discernimento', 'Pausa Sábia'],
    archetype: 'O Sábio Solitário',
    generalLoveMeaning: 'O Eremita convida ao recolhimento sereno para iluminar as reais verdades do coração, encontrando na solitude a clareza para amar melhor.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O momento pede respeito ao espaço individual de cada um para que ambos possam se recarregar interiormente.',
        conhecendo_alguem: 'Não tenha pressa. Vá com passos calmos e cuidadosos, analisando com sabedoria se há sintonia genuína.',
        distancia: 'A distância física funciona como um espelho sagrado para você compreender quem você é quando está consigo mesma.',
        amor_proprio: 'Um chamado dourado para apreciar sua própria companhia sem depender de estímulos ou aprovações externas.'
      },
      desafio: {
        meu_relacionamento: 'O isolamento emocional, a frieza no trato ou a recusa a compartilhar o que está acontecendo por dentro.',
        conhecendo_alguem: 'O ceticismo excessivo que fecha a porta para conexões bonitas por medo de se machucar novamente.',
        distancia: 'Sentir-se solitária e abandonada em vez de enxergar o valor do espaço para reflexão.',
        amor_proprio: 'O medo do silêncio e da solidão, buscando preencher vazios com presenças rasas.'
      },
      orientacao: {
        meu_relacionamento: 'Comunique com doçura que precisa de um momento só seu, tranquilizando seu parceiro sobre seu amor.',
        conhecendo_alguem: 'Avalie com calma as atitudes da pessoa longe da euforia imediata, ouvindo sua sabedoria acumulada.',
        distancia: 'Use a lâmpada do discernimento para focar nos seus projetos pessoais e estudos enquanto a distância perdurar.',
        amor_proprio: 'Tire uma noite para um ritual íntimo de silêncio, leitura ou meditação sem celulares por perto.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como posso equilibrar meu momento a sós com a entrega ao casal sem gerar distanciamento?',
      conhecendo_alguem: 'O que as experiências do meu passado amoroso me ensinaram que posso aplicar com sabedoria agora?',
      distancia: 'O que estou descobrindo sobre minha própria força interior durante este período de separação?',
      amor_proprio: 'Eu realmente gosto da pessoa que sou quando as luzes se apagam e fico sozinha no quarto?'
    },
    microActions: {
      meu_relacionamento: 'Diga com carinho: "Amo você, só preciso de uma hora de silêncio para recarregar minhas energias".',
      conhecendo_alguem: 'Reserve um dia da semana para você mesma, sem marcar compromissos afetivos.',
      distancia: 'Escreva em um diário suas percepções mais sinceras sobre o que espera do futuro afetivo.',
      amor_proprio: 'Acenda uma vela aromática e aprecie 15 minutos de pura tranquilidade contemplativa.'
    }
  },
  {
    id: 10,
    roman: 'X',
    name: 'A Roda da Fortuna',
    image: '/cards/card_10.jpg',
    element: 'Fogo / Júpiter',
    keywords: ['Ciclos', 'Mudança', 'Sincronia', 'Fluidez'],
    archetype: 'O Tecelão do Destino',
    generalLoveMeaning: 'A Roda da Fortuna lembra que tudo no amor é cíclico; fases difíceis passam e novas oportunidades de renovação sempre chegam no momento certo.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Um ciclo antigo está se encerrando na relação, abrindo portas para uma nova dinâmica de entendimento mútuo.',
        conhecendo_alguem: 'Uma coincidência ou sincronicidade aproximou vocês; esteja aberta às surpresas agradáveis que o destino traz.',
        distancia: 'A fase de distância está sujeita a mudanças imprevistas e favoráveis; mantenha o coração leve para novas reviravoltas.',
        amor_proprio: 'Você está virando a página de um período de desânimo e entrando em uma maré de renovação e brilho próprio.'
      },
      desafio: {
        meu_relacionamento: 'A resistência a aceitar que a rotina muda ou o apego nostálgico à forma como as coisas eram no começo.',
        conhecendo_alguem: 'A instabilidade de humor ou atitudes repentinas que deixam o outro sem chão.',
        distancia: 'A sensação de desamparo diante de fatores externos fora do seu controle (trabalho, viagens, compromissos).',
        amor_proprio: 'Achar que sua felicidade amorosa depende puramente da sorte em vez de suas escolhas conscientes.'
      },
      orientacao: {
        meu_relacionamento: 'Flua com o momento em vez de lutar contra a maré. Adapte-se às novidades com bom humor e parceria.',
        conhecendo_alguem: 'Aproveite a oportunidade que se abriu sem tentar controlar o desenrolar dos próximos meses.',
        distancia: 'Confie no fluxo dos acontecimentos e esteja pronta para ajustar planos quando a oportunidade surgir.',
        amor_proprio: 'Aceite as oscilações naturais das suas emoções sem se culpar por não estar bem todos os dias.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual mudança inevitável estou resistindo a aceitar na dinâmica do nosso relacionamento?',
      conhecendo_alguem: 'Estou receptiva às novidades ou tentando encaixar essa pessoa em um script pré-moldado?',
      distancia: 'Como posso encontrar paz sabendo que esta fase não durará para sempre?',
      amor_proprio: 'Como acolho meus dias de baixa energia com a mesma generosidade dos dias radiantes?'
    },
    microActions: {
      meu_relacionamento: 'Proponha uma quebra na rotina hoje: um jantar diferente ou um caminho novo de volta para casa.',
      conhecendo_alguem: 'Deixe um espaço aberto na sua semana para um convite espontâneo.',
      distancia: 'Mentalize o reencontro com alegria e confie na renovação do ciclo.',
      amor_proprio: 'Repita mentalmente: "Tudo passa, tudo se transforma, e eu permaneço inteira no centro da minha paz".'
    }
  },
  {
    id: 11,
    roman: 'XI',
    name: 'A Justiça',
    image: '/cards/card_11.jpg',
    element: 'Ar / Libra',
    keywords: ['Equilíbrio', 'Verdade', 'Reciprocidade', 'Acertos'],
    archetype: 'A Balança do Coração',
    generalLoveMeaning: 'A Justiça busca a equidade no afeto, a honestidade consigo mesma e com o outro, e o alinhamento entre o que se dá e o que se recebe.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O momento pede ponderação e equilíbrio. É hora de avaliar se a balança de esforço e carinho está nivelada.',
        conhecendo_alguem: 'Avalie com sobriedade se há reciprocidade real nas mensagens, convites e atitudes diárias.',
        distancia: 'Necessidade de sinceridade sobre o que é viável manter na rotina de vocês dois sem sobrecarregar ninguém.',
        amor_proprio: 'Hora de fazer justiça a si mesma, reconhecendo o quanto você tem se esforçado e se dando o crédito merecido.'
      },
      desafio: {
        meu_relacionamento: 'O excesso de julgamento frio, a cobrança por cada milímetro de erro ou o ressentimento contabilizado.',
        conhecendo_alguem: 'Ser crítica demais a ponto de não tolerar nenhuma falha humana na outra pessoa.',
        distancia: 'Medir quem mandou mais mensagens ou quem ligou por último como um placar de jogo.',
        amor_proprio: 'A autojudicialização impiedosa, culpando-se por escolhas afetivas do passado.'
      },
      orientacao: {
        meu_relacionamento: 'Proponham uma conversa serena e justa, onde ambos possam expor seus pontos sem acusação mútua.',
        conhecendo_alguem: 'Observe o equilíbrio: se você deu dois passos, espere a pessoa dar os passos dela também.',
        distancia: 'Dividam responsabilidades de forma justa para que os custos e esforços de visita sejam equilibrados.',
        amor_proprio: 'Perdoe seus próprios erros passados; você agiu com a maturidade que tinha na época.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'A balança da nossa relação está equilibrada ou sinto que um de nós está carregando o vínculo sozinho?',
      conhecendo_alguem: 'Estou sendo justa com essa pessoa ou julgando-a pelas feridas deixadas por outras histórias?',
      distancia: 'O que seria uma divisão justa de atenção e esforço para nós dois neste momento?',
      amor_proprio: 'Estou sendo leal à minha própria verdade e aos meus sentimentos mais autênticos?'
    },
    microActions: {
      meu_relacionamento: 'Reconheça um ponto em que o outro tinha razão com humildade e elegância.',
      conhecendo_alguem: 'Mantenha a equivalência de iniciativa nas conversas sem forçar barras.',
      distancia: 'Conversem abertamente sobre finanças ou logística de reencontros com clareza.',
      amor_proprio: 'Escreva uma carta de absolvição para você mesma por uma decepção amorosa que já passou.'
    }
  },
  {
    id: 12,
    roman: 'XII',
    name: 'O Enforcado',
    image: '/cards/card_12.jpg',
    element: 'Água / Netuno',
    keywords: ['Nova Perspectiva', 'Pausa', 'Desapego', 'Rendição Consciente'],
    archetype: 'O Observador Invertido',
    generalLoveMeaning: 'O Enforcado convida a suspender o ímpeto de forçar resultados, olhando para a situação sob um novo ângulo de sabedoria e desapego.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'As coisas podem parecer paradas ou em compasso de espera. Use esse tempo para enxergar o parceiro sob outra ótica.',
        conhecendo_alguem: 'Não adianta tentar apressar o ritmo do vínculo; a melhor atitude é observar e permitir que as coisas aconteçam sem cobrança.',
        distancia: 'A distância impõe uma pausa obrigatória. Olhar para ela como um sacrifício inútil só aumenta o sofrimento.',
        amor_proprio: 'Soltar a necessidade de ter todas as respostas amorosas agora; a paz começa quando você para de lutar contra a realidade.'
      },
      desafio: {
        meu_relacionamento: 'Fazer o papel de vítima, conformando-se com situações insatisfatórias por comodismo ou medo de mudar.',
        conhecendo_alguem: 'Ficar em banho-maria esperando por alguém que não se posiciona com clareza.',
        distancia: 'Paralisar a própria vida enquanto o outro não estiver por perto.',
        amor_proprio: 'O hábito nocivo de se sacrificar pelos outros e se anular em nome de um amor não correspondido.'
      },
      orientacao: {
        meu_relacionamento: 'Mude de perspectiva: em vez de ver defeitos, tente compreender a história e os medos que movem seu par.',
        conhecendo_alguem: 'Relaxe o controle. Observe sem pressa e sem criar obrigações emocionais precoces.',
        distancia: 'Transforme o tempo de espera em investimento no seu próprio crescimento pessoal.',
        amor_proprio: 'Pare de insistir em portas que estão trancadas. Vire a cabeça e veja as janelas abertas ao seu redor.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que mudaria em mim se eu olhasse para essa discussão pelos olhos e dores do outro?',
      conhecendo_alguem: 'Estou disposta a aceitar a pessoa como ela é hoje ou espero que ela se transforme no futuro?',
      distancia: 'O que estou deixando de viver na minha própria cidade por estar presa na expectativa da distância?',
      amor_proprio: 'Qual apego insistente está me mantendo em sofrimento desnecessário?'
    },
    microActions: {
      meu_relacionamento: 'Ao invés de reclamar de um hábito do parceiro hoje, silencie e observe com afeto.',
      conhecendo_alguem: 'Não envie a mensagem que você escreveu no calor da ansiedade; releia-a apenas amanhã.',
      distancia: 'Faça um passeio individual por um bairro ou parque novo na sua cidade.',
      amor_proprio: 'Respire fundo, solte os ombros e repita: "Eu me liberto da necessidade de controlar o incontrolável".'
    }
  },
  {
    id: 13,
    roman: 'XIII',
    name: 'A Morte',
    image: '/cards/card_13.jpg',
    element: 'Água / Escorpião',
    keywords: ['Renovação', 'Transformação', 'Fim de Ciclo', 'Ressignificação'],
    archetype: 'O Grande Ceifador e Transformador',
    generalLoveMeaning: 'A Morte representa a necessária transmutação emocional: deixar morrer atitudes e medos antigos para que uma nova vida afetiva possa desabrochar.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Um modo antigo de se relacionar não funciona mais. Vocês estão sendo convidados a uma profunda renovação estrutural.',
        conhecendo_alguem: 'Para essa nova pessoa poder entrar de verdade, é preciso encerrar definitivamente o luto de fantasmas do passado.',
        distancia: 'A dinâmica da distância exige que certas ilusões caiam para que uma relação realista e madura nasça.',
        amor_proprio: 'Morte simbólica de uma versão sua que aceitava pouco e tinha medo de ser feliz por inteiro.'
      },
      desafio: {
        meu_relacionamento: 'Apegar-se com desespero a mágoas antigas ou tentar ressuscitar brigas resolvidas.',
        conhecendo_alguem: 'Comparar a nova pessoa com o ex-parceiro, projetando dores que não pertencem ao presente.',
        distancia: 'O medo do término ou da perda impedindo você de viver a honestidade do que sente.',
        amor_proprio: 'A resistência em deixar para trás hábitos autodestrutivos na vida amorosa.'
      },
      orientacao: {
        meu_relacionamento: 'Despeçam-se conscientemente de ressentimentos passados. Deixem que a relação renasça limpa e curada.',
        conhecendo_alguem: 'Limpe gavetas emocionais e bloqueie contatos que ainda drenam sua energia antes de se vincular.',
        distancia: 'Aceitem que a relação atual é diferente da convivência diária e criem novos rituais adaptados.',
        amor_proprio: 'Abrace a mulher ou homem renovado que está surgindo dessas experiências, honrando sua metamorfose.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que em nossa dinâmica precisa morrer para que o amor continue vivo e saudável?',
      conhecendo_alguem: 'Ainda alimento alguma esperança secreta em relação a histórias passadas?',
      distancia: 'Qual apego à ideia de convivência perfeita preciso desapegar para desfrutar da realidade?',
      amor_proprio: 'Qual crença dolorosa sobre mim mesma estou pronta para enterrar de uma vez por todas?'
    },
    microActions: {
      meu_relacionamento: 'Diga com sinceridade: "Eu escolho zerar esse ressentimento e não falar mais sobre isso como acusação".',
      conhecendo_alguem: 'Apague conversas e fotos antigas de vínculos que já terminaram.',
      distancia: 'Crie uma nova playlist compartilhada que represente esta fase atual de vocês dois.',
      amor_proprio: 'Escreva em um papel um medo amoroso e queime-o ou rasgue-o em pedaços com convicção.'
    }
  },
  {
    id: 14,
    roman: 'XIV',
    name: 'A Temperança',
    image: '/cards/card_14.jpg',
    element: 'Fogo / Sagitário',
    keywords: ['Equilíbrio Alquímico', 'Harmonia', 'Paciência Doce', 'Cura'],
    archetype: 'O Anjo da Alquimia',
    generalLoveMeaning: 'A Temperança traz a bênção da moderação serena, misturando as águas do afeto com sabedoria para curar feridas e pacificar corações.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Águas calmas e tempo de conciliação. A cumplicidade e a amizade entre vocês são o bálsamo que sara qualquer atrito.',
        conhecendo_alguem: 'O vínculo se constrói passo a passo, em um ritmo suave e sem tempestades, com admiração mútua e respeito.',
        distancia: 'A paciência doce e a constância emocional ajudam a manter a chama suave e acesa enquanto a distância perdura.',
        amor_proprio: 'Você está encontrando o equilíbrio entre doar-se e recolher-se, vivendo em harmonia com sua essência.'
      },
      desafio: {
        meu_relacionamento: 'A monotonia ou a tendência a engolir pequenos incômodos para evitar conflito a qualquer custo.',
        conhecendo_alguem: 'Achar que a falta de joguinhos ou de drama significa falta de interesse da outra pessoa.',
        distancia: 'A sensação de estagnação quando os dias parecem idênticos e o tempo parece passar devagar demais.',
        amor_proprio: 'Extremos emocionais: oscilar entre a euforia apaixonada e a frieza desencantada.'
      },
      orientacao: {
        meu_relacionamento: 'Cultive a arte da conversa tranquila; o afeto cotidiano e o carinho silencioso sustentam o amor.',
        conhecendo_alguem: 'Aprecie a paz de uma conexão serena. Nem todo grande amor precisa ser uma montanha-russa dolorosa.',
        distancia: 'Mantenha a regularidade afetiva nas pequenas atenções: bom dia carinhoso, presença constante e pacífica.',
        amor_proprio: 'Busque atividades que desacelerem seus batimentos: meditação, caminhada na natureza ou um bom banho morno.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como posso trazer mais serenidade e conciliação para nosso lar neste momento?',
      conhecendo_alguem: 'Estou acostumada com amores ansiosos a ponto de estranhar uma conexão pacífica e saudável?',
      distancia: 'Como a paciência pode se tornar uma virtude bonita e fortalecedora entre nós?',
      amor_proprio: 'Onde em minha vida estou precisando de mais moderação, descanso e autocuidado?'
    },
    microActions: {
      meu_relacionamento: 'Prepare uma bebida quente ou um agrado para desfrutarem em silêncio juntos esta noite.',
      conhecendo_alguem: 'Permita que o diálogo flua sem pressão de responder no mesmo segundo; saboreie a naturalidade.',
      distancia: 'Envie uma mensagem desejando uma noite de paz, transmitindo estabilidade e carinho.',
      amor_proprio: 'Beba um copo d’água conscientemente, mentalizando a limpeza e a harmonia das suas emoções.'
    }
  },
  {
    id: 15,
    roman: 'XV',
    name: 'O Diabo',
    image: '/cards/card_15.jpg',
    element: 'Terra / Capricórnio',
    keywords: ['Paixão Ardente', 'Apego', 'Sombras Afetivas', 'Libertação'],
    archetype: 'O Espelho dos Desejos Secretos',
    generalLoveMeaning: 'O Diabo revela as forças do desejo, da atração carnal e dos apegos ocultos, convidando à consciência sobre aquilo que nos prende ou seduz.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Forte magnetismo e desejo físico, mas que pode vir acompanhado de ciúmes, controle ou inseguranças veladas.',
        conhecendo_alguem: 'Atração sexual e química irresistíveis. É essencial diferenciar a intensidade da paixão da compatibilidade de vida.',
        distancia: 'A carência física pode amplificar a paranoia, o controle de horários e a sensação de posse sobre o outro.',
        amor_proprio: 'Consciência sobre padrões tóxicos em que você se viciou (migalhas, validação rápida, relações que machucam).'
      },
      desafio: {
        meu_relacionamento: 'A manipulação emocional, o ciúme possessivo ou o medo obsessivo de ser traída ou abandonada.',
        conhecendo_alguem: 'Ceder a relacionamentos puramente superficiais que esgotam sua dignidade em troca de atenção momentânea.',
        distancia: 'Ficar checando redes sociais do parceiro de hora em hora, gerando um inferno mental solitário.',
        amor_proprio: 'Sentir-se prisioneira da necessidade da aprovação alheia para validar seu valor como mulher ou homem.'
      },
      orientacao: {
        meu_relacionamento: 'Canalizem o magnetismo para o romance íntimo e desarmem qualquer tentativa de jogo de poder ou cobrança.',
        conhecendo_alguem: 'Aproveite a atração, mas mantenha a lucidez: não entregue suas decisões mais importantes por pura carência.',
        distancia: 'Solte as correntes da vigilância. Se houver lealdade, ela será espontânea; cobrança não garante amor.',
        amor_proprio: 'Reconheça a corrente mental que prende você a amores desgastantes e tire-a do pescoço com coragem.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que estou tentando controlar no outro por medo de olhar para minhas próprias inseguranças?',
      conhecendo_alguem: 'Esta atração me faz bem e me energiza, ou me deixa ansiosa, insegura e vigilante?',
      distancia: 'Que fantasias de medo minha imaginação cria quando sinto saudade ou recebo respostas curtas?',
      amor_proprio: 'A qual ilusão afetiva ainda me sinto apegada mesmo sabendo que me machuca?'
    },
    microActions: {
      meu_relacionamento: 'Proponha uma noite especial a dois focada no prazer, desligando conversas sobre problemas rotineiros.',
      conhecendo_alguem: 'Mantenha seus limites físicos e emocionais alinhados com o que você realmente quer no momento.',
      distancia: 'Evite espionar perfis ou rastrear status online hoje; proteja sua mente da tentação da paranoia.',
      amor_proprio: 'Afirme com vigor: "Eu sou dona da minha própria energia e não entrego meu poder a ninguém".'
    }
  },
  {
    id: 16,
    roman: 'XVI',
    name: 'A Torre',
    image: '/cards/card_16.jpg',
    element: 'Fogo / Marte',
    keywords: ['Quebra de Ilusões', 'Verdade Revelada', 'Libertação Súbita', 'Despertar'],
    archetype: 'O Raio Despertador',
    generalLoveMeaning: 'A Torre derruba estruturas frágeis construídas sobre aparências para que o que é verdadeiro e autêntico possa finalmente ter espaço para existir.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Uma verdade necessária veio à tona, rompendo fingimentos. Embora o choque assuste, é uma chance de cura radical.',
        conhecendo_alguem: 'Uma revelação ou atitude inesperada desmascarou idealizações precoces sobre quem a pessoa realmente é.',
        distancia: 'Um plano ou data combinada pode ter sido cancelada, exigindo maturidade para lidar com o imprevisto sem desespero.',
        amor_proprio: 'O desmoronamento de um papel artificial que você vestia para tentar caber nas relações dos outros.'
      },
      desafio: {
        meu_relacionamento: 'A teimosia em reconstruir o que estava quebrado do mesmo jeito torto de antes, sem aprender a lição.',
        conhecendo_alguem: 'O drama exagerado diante de desapontamentos normais da convivência humana.',
        distancia: 'Projetar toda a frustração de acontecimentos externos na outra pessoa, gerando discussões explosivas.',
        amor_proprio: 'O vitimismo após uma quebra de expectativa, achando que o amor nunca dará certo para você.'
      },
      orientacao: {
        meu_relacionamento: 'Permitam que a poeira assente antes de tomar decisões definitivas. Conversem sobre o que realmente importa.',
        conhecendo_alguem: 'Agradeça pelo aviso precoce do destino. É muito melhor descobrir incompatibilidades no início do que tarde demais.',
        distancia: 'Respirem fundo diante de imprevistos logísticos e foquem naquilo que permanece sólido: o afeto.',
        amor_proprio: 'Veja os escombros como terreno fértil para edificar sua nova postura, baseada na verdade e no respeito.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual ilusão caiu recentemente que, no fundo, precisava mesmo ser esclarecida?',
      conhecendo_alguem: 'Estou disposta a aceitar a realidade da pessoa como ela se revelou, sem inventar desculpas para ela?',
      distancia: 'Como posso manter minha estabilidade interior quando os planos com meu parceiro mudam repentinamente?',
      amor_proprio: 'O que essa quebra de expectativa me ensinou sobre a minha verdadeira força de superação?'
    },
    microActions: {
      meu_relacionamento: 'Se houver clima tenso, espere umas horas e diga com calma: "Vamos respirar e conversar sem atacar".',
      conhecendo_alguem: 'Aceite os fatos como eles são sem tentar justificar comportamentos grosseiros ou ausentes.',
      distancia: 'Flexibilize planos com leveza e proponha uma alternativa criativa ao imprevisto.',
      amor_proprio: 'Faça um descarte de coisas que não usa mais em sua casa, ancorando a energia de limpeza e renovação.'
    }
  },
  {
    id: 17,
    roman: 'XVII',
    name: 'A Estrela',
    image: '/cards/card_17.jpg',
    element: 'Ar / Aquário',
    keywords: ['Esperança', 'Autenticidade', 'Inspiração', 'Cura Serena'],
    archetype: 'A Guia Celeste',
    generalLoveMeaning: 'A Estrela derrama serenidade e fé no caminho do amor, curando o cansaço do coração e guiando os passos com luz e transparência cristalina.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Clima de paz, conciliação e fé renovada no futuro do casal. As feridas passadas estão cicatrizando suavemente.',
        conhecendo_alguem: 'Uma sensação gostosa de conexão de almas, onde você se sente livre para ser quem é sem máscaras.',
        distancia: 'A esperança e a certeza de que a separação é transitória e que o reencontro será luminoso e acolhedor.',
        amor_proprio: 'Você está brilhando na sua luz mais genuína, reconectada com seus sonhos e com a beleza da sua história.'
      },
      desafio: {
        meu_relacionamento: 'O excesso de idealismo utópico, esquecendo-se de que a vida a dois exige lidar com a rotina prática e o cansaço diário.',
        conhecendo_alguem: 'Projetar uma salvação mágica na figura do outro em vez de construir um vínculo terreno.',
        distancia: 'A tristeza silenciosa ao comparar a vida ideal com a saudade real do presente.',
        amor_proprio: 'A falta de fé em seu próprio brilho quando surgem pequenos momentos de desânimo.'
      },
      orientacao: {
        meu_relacionamento: 'Compartilhem sonhos e projetos para os próximos meses; a inspiração conjunta fortalece a intimidade.',
        conhecendo_alguem: 'Seja absolutamente transparente. A sua verdade desarmada é o que há de mais magnético em você.',
        distancia: 'Mantenha a fé acesa e lembre-se de que estão ambos debaixo do mesmo céu e das mesmas estrelas.',
        amor_proprio: 'Alinhe suas atitudes com seus desejos mais nobres, tratando-se com a delicadeza de quem merece o melhor.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual sonho bonito nós dois podemos sonhar e planejar juntos a partir de agora?',
      conhecendo_alguem: 'Consigo ser totalmente eu mesma na presença dessa pessoa, sem medo do julgamento?',
      distancia: 'O que mantém viva a chama da esperança no meu coração nos dias mais cinzentos?',
      amor_proprio: 'Quais talentos e belezas minhas estão prontos para brilhar sem vergonha no mundo?'
    },
    microActions: {
      meu_relacionamento: 'Diga ao seu parceiro um elogio sobre como ele ou ela inspira sua vida a ser melhor.',
      conhecendo_alguem: 'Compartilhe um sonho de infância ou aspiração futura com sinceridade e brilho nos olhos.',
      distancia: 'Olhe para o céu à noite por um minuto e sinta a presença de quem você ama abraçando seu coração.',
      amor_proprio: 'Escreva 3 motivos pelos quais você tem orgulho de quem se tornou nos últimos anos.'
    }
  },
  {
    id: 18,
    roman: 'XVIII',
    name: 'A Lua',
    image: '/cards/card_18.jpg',
    element: 'Água / Peixes',
    keywords: ['Mistério', 'Incerteza', 'Ilusões Noturnas', 'Profundidade Emocional'],
    archetype: 'O Mar das Emoções Ocultas',
    generalLoveMeaning: 'A Lua convida a navegar pelas brumas do medo e da imaginação, distinguindo fantasias projetadas das reais necessidades da alma.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O ambiente pode estar cercado de indefinições ou inseguranças não verbalizadas. O momento pede acolhimento dos medos.',
        conhecendo_alguem: 'Ainda há muito que você não conhece sobre essa pessoa; não tire conclusões precipitadas nem para o bem nem para o mal.',
        distancia: 'A distância física amplifica a imaginação noturna e pode alimentar carências e fantasias irreais.',
        amor_proprio: 'Acolhimento da sua vulnerabilidade: permitir-se chorar ou sentir medo sem se considerar fraca.'
      },
      desafio: {
        meu_relacionamento: 'Alimentar paranoias, desconfianças infundadas ou reações provocadas por feridas não curadas da infância.',
        conhecendo_alguem: 'A tentação de cair em decepções por não querer enxergar as coisas com a luz da razão.',
        distancia: 'O sofrimento antecipado por cenários mentais criados pela solidão no meio da noite.',
        amor_proprio: 'Perder-se em autodepreciação e medos irracionais de nunca ser amada de verdade.'
      },
      orientacao: {
        meu_relacionamento: 'Quando a insegurança bater, converse com serenidade em vez de criar um roteiro dramático na cabeça.',
        conhecendo_alguem: 'Dê tempo para que as sombras se dissipem; espere a luz do sol clarear os passos antes de se apegar.',
        distancia: 'Não tome decisões ou mande mensagens tensas de madrugada. Espere o dia amanhecer com clareza.',
        amor_proprio: 'Acolha sua sensibilidade como um dom, mas não acredite em todos os medos que sua mente inventa no escuro.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que estou temendo que aconteça que talvez seja apenas uma sombra do meu passado?',
      conhecendo_alguem: 'Estou vendo essa pessoa com lucidez ou sob a lente cor-de-rosa das minhas carências?',
      distancia: 'Quais medos da separação posso entregar à confiança e ao tempo?',
      amor_proprio: 'Como posso ser o porto seguro das minhas próprias incertezas hoje?'
    },
    microActions: {
      meu_relacionamento: 'Se sentir ciúme ou medo, respire e espere 1 hora antes de expressar para ter clareza nas palavras.',
      conhecendo_alguem: 'Observe as ações práticas da pessoa à luz do dia em vez de ficar apenas nas palavras sedutoras da noite.',
      distancia: 'Desligue o celular 30 minutos antes de dormir e coloque uma música suave para descansar a mente.',
      amor_proprio: 'Dê um abraço em si mesma e diga com doçura: "Está tudo bem sentir medo; eu cuido de você".'
    }
  },
  {
    id: 19,
    roman: 'XIX',
    name: 'O Sol',
    image: '/cards/card_19.jpg',
    element: 'Fogo / Sol',
    keywords: ['Alegria Pura', 'Clareza', 'Vitalidade', 'Celebração Afetiva'],
    archetype: 'A Luz Radiante do Amor',
    generalLoveMeaning: 'O Sol traz iluminação completa, aquecimento dos sentimentos, transparência alegre e a certeza de que a felicidade a dois é simples e espontânea.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Momento de grande alegria, generosidade mútua e calor humano no casal. As dúvidas se dissipam sob a luz da cumplicidade.',
        conhecendo_alguem: 'Aproximação vibrante, transparente e cheia de entusiasmo; a sintonia é visível e traz leveza ao coração.',
        distancia: 'Apesar dos quilômetros, a energia de vocês dois permanece radiante e nutrida pela certeza da união.',
        amor_proprio: 'Você está no auge do seu magnetismo e autoamor, celebrando sua vitalidade e atraindo afeto de qualidade.'
      },
      desafio: {
        meu_relacionamento: 'O orgulho, a vaidade em ter sempre razão ou querer ser o centro das atenções no relacionamento.',
        conhecendo_alguem: 'Excesso de euforia que queima a largada ou espera que a paixão inicial seja um estado permanente sem dias cinzas.',
        distancia: 'A frustração de não poder viver os dias ensolarados juntos no momento presente.',
        amor_proprio: 'A dependência de aplausos ou elogios externos para se sentir brilhante e radiante.'
      },
      orientacao: {
        meu_relacionamento: 'Celebrem o amor com riso fácil, brincadeiras e declarações de carinho explícitas e acolhedoras.',
        conhecendo_alguem: 'Seja você mesma, mostre seu sorriso e permita que a outra pessoa se encante pela sua espontaneidade.',
        distancia: 'Compartilhe as boas notícias do seu dia com alegria; a felicidade contagia e aproxima corações.',
        amor_proprio: 'Tome um banho de sol pela manhã, respire profundamente e sinta gratidão pela bênção de estar viva.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que traz mais luz e riso espontâneo ao nosso cotidiano a dois?',
      conhecendo_alguem: 'Essa conexão me faz sorrir e me sentir leve ou me cansa e me confunde?',
      distancia: 'Como podemos celebrar nosso vínculo mesmo à distância com criatividade e entusiasmo?',
      amor_proprio: 'O que me faz sentir um orgulho imenso de ser a mulher ou o homem que sou hoje?'
    },
    microActions: {
      meu_relacionamento: 'Envie uma foto sorrindo ou elogie seu par por algo simples e genuíno que ele fez hoje.',
      conhecendo_alguem: 'Compartilhe uma piada ou um momento divertido do seu dia para quebrar qualquer gelo.',
      distancia: 'Faça uma videochamada ao ar livre ou em um lugar bonito, compartilhando a luz do seu ambiente.',
      amor_proprio: 'Sorria para o espelho, dance uma música que você adora no quarto e celebre sua própria energia.'
    }
  },
  {
    id: 20,
    roman: 'XX',
    name: 'O Julgamento',
    image: '/cards/card_20.jpg',
    element: 'Fogo / Plutão',
    keywords: ['Despertar', 'Chamado do Coração', 'Perdão', 'Renascimento Afetivo'],
    archetype: 'O Trombone da Ressurreição',
    generalLoveMeaning: 'O Julgamento soa o chamado para o perdão libertador, a lucidez madura e o renascimento de um amor mais consciente e desprendido de culpas.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Momento de virada e esclarecimento; vocês estão sendo convidados a subir de nível na relação com maturidade.',
        conhecendo_alguem: 'Você está desperta para o que realmente deseja; não aceitará menos do que um amor com respeito e propósito.',
        distancia: 'Hora de tomar decisões maduras sobre o futuro da relação e definir os próximos passos com honestidade.',
        amor_proprio: 'Perdão sincero a si mesma por relacionamentos passados, acolhendo seu renascimento com coragem.'
      },
      desafio: {
        meu_relacionamento: 'A cobrança implacável do passado, jogando na cara do outro erros que já haviam sido perdoados.',
        conhecendo_alguem: 'Julgar a pessoa precipitadamente com base em estereótipos ou mágoas antigas.',
        distancia: 'Ficar adiando eternamente a conversa definitiva sobre o futuro da união.',
        amor_proprio: 'Sentimento crônico de culpa ou inadequação moral por suas escolhas afetivas anteriores.'
      },
      orientacao: {
        meu_relacionamento: 'Pratiquem o perdão consciente. Fechem as contas do passado e comecem um capítulo renovado de mãos dadas.',
        conhecendo_alguem: 'Ouça o chamado do seu coração: você sente que essa pessoa ressoa com sua nova fase de vida?',
        distancia: 'Tenham a coragem de alinhar expectativas reais para que ambos saibam exatamente para onde estão caminhando.',
        amor_proprio: 'Declare sua anistia emocional: você fez o melhor que podia com a consciência que possuía na época.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual pendência antiga nós dois precisamos perdoar de coração para podermos renascer em harmonia?',
      conhecendo_alguem: 'Essa pessoa está alinhada com a versão desperta e consciente que sou hoje?',
      distancia: 'Qual é o chamado que nossa história está fazendo para o nosso amadurecimento mútuo?',
      amor_proprio: 'O que estou pronta para perdoar em mim mesma neste exato instante?'
    },
    microActions: {
      meu_relacionamento: 'Diga ao seu parceiro: "Eu escolho te ver pelo que você é hoje, e não pelos erros de ontem".',
      conhecendo_alguem: 'Defina para si mesma um critério de respeito que você jamais negociará novamente.',
      distancia: 'Agendem um momento sério e carinhoso para conversar sobre o plano de reencontro definitivo.',
      amor_proprio: 'Escreva em um papel "Eu me perdoo e me liberto" e respire sentindo o peso saindo das costas.'
    }
  },
  {
    id: 21,
    roman: 'XXI',
    name: 'O Mundo',
    image: '/cards/card_21.jpg',
    element: 'Terra / Saturno',
    keywords: ['Plenitude', 'Conclusão Triunfante', 'Integração', 'Realização'],
    archetype: 'A Dança Cósmica da Vitória',
    generalLoveMeaning: 'O Mundo coroa a jornada com a celebração da integridade interior, onde dar e receber se harmonizam em uma dança de plenitude e amor verdadeiro.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Fase de completude, cumplicidade e maturidade. Vocês alcançaram um ponto de equilíbrio admirável na relação.',
        conhecendo_alguem: 'Encontro rico e harmonioso, onde você se sente inteira por si mesma e pronta para compartilhar sua abundância.',
        distancia: 'A certeza de que o amor transcende qualquer fronteira física e que o ciclo de separação está próximo da resolução.',
        amor_proprio: 'Você atingiu uma paz profunda consigo mesma; sente-se completa e não procura metades para se preencher.'
      },
      desafio: {
        meu_relacionamento: 'Acomodar-se achando que não é mais preciso cuidar do jardim do amor todos os dias.',
        conhecendo_alguem: 'Esperar a perfeição absoluta em todos os aspectos antes de se permitir viver o momento.',
        distancia: 'O desânimo nas últimas milhas da jornada, quando a ansiedade do fim do ciclo pode gerar cansaço.',
        amor_proprio: 'O medo do sucesso afetivo e da felicidade plena por não estar acostumada com a calmaria.'
      },
      orientacao: {
        meu_relacionamento: 'Celebrem tudo o que conquistaram juntos. Reconheçam a jornada e agradeçam pela parceria sólida.',
        conhecendo_alguem: 'Aproxime-se com a postura de quem já é inteira, compartilhando sua riqueza de alma com leveza.',
        distancia: 'Mantenham o foco na linha de chegada; a travessia está ensinando lições inestimáveis de amor e lealdade.',
        amor_proprio: 'Abrace o mundo com o peito aberto: você é merecedora de todo o amor, respeito e alegria que a vida tem a dar.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que nós dois já superamos juntos que merece ser celebrado com gratidão hoje?',
      conhecendo_alguem: 'Estou entrando nessa história como alguém inteira pronta para somar, ou esperando salvação?',
      distancia: 'Que maturidade profunda este ciclo de distância construiu em nós como casal?',
      amor_proprio: 'Como posso comemorar a mulher ou o homem incrível e pleno que me tornei?'
    },
    microActions: {
      meu_relacionamento: 'Brinde com seu parceiro (mesmo com uma xícara de chá ou café) ao caminho percorrido até aqui.',
      conhecendo_alguem: 'Comemore o prazer da conversa sem ansiedade, curtindo a presença mútua.',
      distancia: 'Envie uma mensagem relembrando o início da história e celebrando a firmeza do amor que resistiu.',
      amor_proprio: 'Coloque sua música mais inspiradora, abra os braços no meio do quarto e sinta a plenitude da sua vida.'
    }
  }
];

export function getCardById(id: number): ArcanaCard {
  return MAJOR_ARCANA.find((card) => card.id === id) || MAJOR_ARCANA[0];
}

export function getThemeById(themeId: ThemeId) {
  return THEMES.find((theme) => theme.id === themeId) || THEMES[0];
}
