import type { ArcanaCard } from '../types/tarot';

export const MINOR_ARCANA: ArcanaCard[] = [
  // ==========================================
  // NAIPE DE COPAS (CUPS) - IDs 22 a 35
  // ==========================================
  {
    id: 22,
    name: 'Ás de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: 'Ás',
    element: 'Água',
    image: '/cards/card_22.jpg',
    keywords: ['Novo Amor', 'Transbordamento', 'Cura do Coração', 'Pureza'],
    archetype: 'O Cálice Sagrado',
    generalLoveMeaning: 'O Ás de Copas representa a nascente de um sentimento puro, a abertura para receber e oferecer amor sem defesas.',
    loveRelationshipMeaning: 'Convite a permitir que o coração transborde afeto genuíno, dissolvendo desconfianças passadas.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Há uma renovação emocional no ar. O carinho e a intimidade estão prontos para brotar com força renovada.',
        conhecendo_alguem: 'Um sentimento genuíno e doce está nascendo; o coração se sente seguro para começar a se encantar.',
        distancia: 'O afeto transborda mesmo à distância; o sentimento mútuo permanece vivo e reconfortante.',
        amor_proprio: 'Você está redescobrindo o amor por si mesma, enchendo seu próprio cálice antes de esperar que outros o preencham.'
      },
      desafio: {
        meu_relacionamento: 'O medo da vulnerabilidade fazendo você reprimir o carinho ou ter vergonha de demonstrar afeto.',
        conhecendo_alguem: 'Idealizar a paixão inicial e esquecer que relações reais exigem tempo e convivência.',
        distancia: 'A carência emocional transbordando em tristeza nos dias em que o contato é breve.',
        amor_proprio: 'Achar que você só terá valor quando alguém demonstrar sentimentos intensos por você.'
      },
      orientacao: {
        meu_relacionamento: 'Expresse seu afeto sem reservas hoje. Um gesto simples e sincero renova toda a energia do casal.',
        conhecendo_alguem: 'Permita-se sentir sem armaduras, apreciando a pureza dos primeiros momentos.',
        distancia: 'Envie uma mensagem carinhosa relembrando o quanto essa pessoa é querida para você.',
        amor_proprio: 'Pratique a autocompaixão: perdoe seus próprios deslizes e acolha suas emoções com ternura.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como posso demonstrar meu carinho de forma espontânea hoje?',
      conhecendo_alguem: 'Meu coração está aberto para receber afeto verdadeiro?',
      distancia: 'O que posso fazer para nutrir o sentimento nos momentos de saudade?',
      amor_proprio: 'Estou transbordando amor por mim ou esperando migalhas alheias?'
    },
    microActions: {
      meu_relacionamento: 'Abrace seu parceiro demoradamente sem dizer nada, sentindo o calor da união.',
      conhecendo_alguem: 'Elogie algo autêntico e doce na personalidade da outra pessoa.',
      distancia: 'Dedique uma música bonita ao parceiro para embalar o dia.',
      amor_proprio: 'Coloque a mão sobre o peito e diga: "Eu acolho todo o amor que mereço viver".'
    }
  },
  {
    id: 23,
    name: 'Dois de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '2',
    element: 'Água',
    image: '/cards/card_23.jpg',
    keywords: ['Reciprocidade', 'Encontro de Almas', 'Sintonia', 'Pacto'],
    archetype: 'O Brinde dos Enamorados',
    generalLoveMeaning: 'O Dois de Copas simboliza a união harmônica, a troca equilibrada de afeto e a sensação mútua de ter encontrado um porto seguro.',
    loveRelationshipMeaning: 'Confirmação de que o vínculo tem bases de respeito, química saudável e admiração mútua.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Fase de profunda cumplicidade e reconexão. O diálogo e a atração fluem em perfeita harmonia.',
        conhecendo_alguem: 'A afinidade é recíproca; ambos sentem a mesma faísca de conexão e vontade de estar juntos.',
        distancia: 'A sintonia emocional supera os quilômetros; vocês dois continuam olhando na mesma direção.',
        amor_proprio: 'Reconciliação entre suas necessidades e seus desejos: você está em paz com sua própria companhia.'
      },
      desafio: {
        meu_relacionamento: 'A dependência mútua excessiva, esquecendo de alimentar interesses individuais fora da relação.',
        conhecendo_alguem: 'Apressar a formalização do vínculo antes de conhecer as nuances cotidianas do outro.',
        distancia: 'A dor aguda da falta física de quem você sente ser sua metade afetiva.',
        amor_proprio: 'Buscar no outro a aprovação que você precisa cultivar primeiramente em si mesma.'
      },
      orientacao: {
        meu_relacionamento: 'Façam um brinde à história de vocês. Celebrem a reciprocidade com um jantar ou conversa tranquila.',
        conhecendo_alguem: 'Mantenha a transparência; quando há reciprocidade real, não há necessidade de jogos ou defesas.',
        distancia: 'Reafirmem o compromisso mútuo com palavras doces e planos claros para o próximo reencontro.',
        amor_proprio: 'Faça as pazes consigo mesma: trate-se com o mesmo carinho que você dedicaria a um grande amor.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Nossa balança de dar e receber está equilibrada neste momento?',
      conhecendo_alguem: 'Sinto que o interesse e o carinho estão sendo demonstrados dos dois lados?',
      distancia: 'Como podemos fortalecer nossa intimidade mesmo estando distantes?',
      amor_proprio: 'Eu me trato como a pessoa mais importante da minha vida?'
    },
    microActions: {
      meu_relacionamento: 'Agradeça ao parceiro por uma atitude de companheirismo recente.',
      conhecendo_alguem: 'Convide a pessoa para um momento leve onde possam conversar com calma.',
      distancia: 'Proponham assistir ao mesmo filme simultaneamente conversando por chamada.',
      amor_proprio: 'Compre uma guloseima ou presente para si mesma sem motivo especial.'
    }
  },
  {
    id: 24,
    name: 'Três de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '3',
    element: 'Água',
    image: '/cards/card_24.jpg',
    keywords: ['Celebração', 'Amizade Afetuosa', 'Alegria', 'Comunidade'],
    archetype: 'A Dança da Abundância',
    generalLoveMeaning: 'O Três de Copas evoca a leveza das amizades acolhedoras, os momentos de festa e o prazer compartilhado sem cobranças.',
    loveRelationshipMeaning: 'A amizade é o grande alicerce do relacionamento; o amor deve ser comemorado com riso fácil.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Clima de descontração e bom humor. Momentos sociais e risos compartilhados renovam o ânimo do casal.',
        conhecendo_alguem: 'A conexão começou de forma muito natural e amigável; vocês se divertem muito quando estão juntos.',
        distancia: 'Apoie-se em suas amizades e rede de apoio para que a distância não pese de forma solitária.',
        amor_proprio: 'Momento de festejar suas vitórias pessoais cercada de pessoas que verdadeiramente torcem por você.'
      },
      desafio: {
        meu_relacionamento: 'Interferência excessiva de terceiros ou fofocas que podem gerar ruídos desnecessários.',
        conhecendo_alguem: 'Ficar preso na zona de amizade superficial por medo de dar o próximo passo.',
        distancia: 'Sentir inveja da convivência diária de outros casais enquanto vocês enfrentam a distância.',
        amor_proprio: 'Buscar festas e distrações para tentar anestesiar uma solidão interna que pede escuta.'
      },
      orientacao: {
        meu_relacionamento: 'Convidem amigos queridos ou façam algo animado juntos; o riso é o melhor remédio para a rotina.',
        conhecendo_alguem: 'Desfrute da companhia com naturalidade, sem colocar rótulos pesados antes da hora.',
        distancia: 'Mantenha sua vida social vibrante e compartilhe histórias divertidas com seu parceiro distante.',
        amor_proprio: 'Reúna amigas queridas ou desfrute de uma comemoração pessoal pelo seu bem-estar.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos trazer mais leveza e celebração para o nosso dia a dia?',
      conhecendo_alguem: 'Estou conseguindo ser autêntica e alegre nesse novo contato?',
      distancia: 'Estou cuidando da minha alegria pessoal enquanto aguardo o reencontro?',
      amor_proprio: 'Quem são as pessoas que realmente celebram a minha felicidade com pureza?'
    },
    microActions: {
      meu_relacionamento: 'Compartilhe uma memória engraçada de vocês no início do namoro.',
      conhecendo_alguem: 'Conte um episódio divertido do seu dia para aliviar qualquer timidez.',
      distancia: 'Ligue para uma amiga querida e converse sobre coisas alegres.',
      amor_proprio: 'Coloque uma música animada e dance despretensiosamente no seu quarto.'
    }
  },
  {
    id: 25,
    name: 'Quatro de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '4',
    element: 'Água',
    image: '/cards/card_25.jpg',
    keywords: ['Desânimo', 'Apatia', 'Olhar Fechado', 'Introspecção'],
    archetype: 'O Contemplador Desencantado',
    generalLoveMeaning: 'O Quatro de Copas alerta para o risco de não enxergar a taça do amor que a vida oferece por estar fixada naquilo que não saiu perfeito.',
    loveRelationshipMeaning: 'Descontentamento momentâneo ou comodismo que impede de valorizar o afeto real presente.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Pode haver uma sensação de rotina cinzenta ou acomodação, onde um não percebe os esforços do outro.',
        conhecendo_alguem: 'Você pode estar desmotivada ou comparando a pessoa com expectativas irrealistas do passado.',
        distancia: 'A apatia provocada pela saudade repetitiva, fazendo você se isolar e responder com frieza.',
        amor_proprio: 'Um estado de desânimo com o amor onde você se recusa a ver as belezas da sua vida presente.'
      },
      desafio: {
        meu_relacionamento: 'Ficar remoendo o que falta em vez de agradecer e valorizar o que já foi conquistado juntos.',
        conhecendo_alguem: 'Descartar uma boa conexão por detalhes irrelevantes, fechando as portas por pura preguiça emocional.',
        distancia: 'Rejeitar conversas afetuosas por achar que mensagens virtuais nunca serão suficientes.',
        amor_proprio: 'Ficar presa no papel da pessoa incompreendida, rejeitando gestos de carinho sincero.'
      },
      orientacao: {
        meu_relacionamento: 'Abra os olhos para a taça que seu parceiro oferece: agradeça pelo que há de bom antes de exigir mais.',
        conhecendo_alguem: 'Dê uma chance real sem esperar perfeição cinematográfica; a beleza costuma morar na simplicidade.',
        distancia: 'Saia da apatia; um passo proativo seu pode reacender o entusiasmo mútuo.',
        amor_proprio: 'Mude o foco: anote 5 coisas boas que aconteceram com você nesta semana e agradeça.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou ignorando os gestos de carinho do outro por estar fixada no que me incomoda?',
      conhecendo_alguem: 'Minha exigência é proteção saudável ou medo disfarçado de me envolver?',
      distancia: 'Como posso sair do marasmo e me entusiasmar com o presente?',
      amor_proprio: 'O que estou me recusando a receber da vida por apego à frustração?'
    },
    microActions: {
      meu_relacionamento: 'Agradeça conscientemente a algo simples que seu parceiro fez por você hoje.',
      conhecendo_alguem: 'Responda a uma mensagem com entusiasmo e veja a energia mudar.',
      distancia: 'Quebre a rotina: mude a foto de perfil ou envie um bilhete surpresa por correio.',
      amor_proprio: 'Abra as janelas da sua casa, respire ar fresco e sorria para um novo dia.'
    }
  },
  {
    id: 26,
    name: 'Cinco de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '5',
    element: 'Água',
    image: '/cards/card_26.jpg',
    keywords: ['Luto Afetivo', 'Mágoa', 'Perdão', 'Duas Taças em Pé'],
    archetype: 'O Enlutado do Passado',
    generalLoveMeaning: 'O Cinco de Copas reconhece a dor das decepções, mas lembra com ternura que ainda há duas taças cheias atrás de você esperando para serem saboreadas.',
    loveRelationshipMeaning: 'Tempo de acolher o desapontamento sem perder a fé no amor que ainda resta e que pode renascer.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Uma decepção recente feriu a confiança, mas o vínculo não acabou: ainda há muito amor de pé a ser resgatado.',
        conhecendo_alguem: 'O medo de se ferir novamente está muito presente; você ainda olha para trás com nostalgia ou tristeza.',
        distancia: 'A frustração de planos que não deram certo machuca, mas não deve apagar o carinho existente.',
        amor_proprio: 'Processo de cicatrização: acolha suas lágrimas, mas não se defina pelas feridas que alguém causou.'
      },
      desafio: {
        meu_relacionamento: 'Fixar-se eternamente no que foi perdido em vez de olhar para o que ainda pode ser reconstruído.',
        conhecendo_alguem: 'Cobrar da pessoa nova a conta de dores deixadas por pessoas do seu passado.',
        distancia: 'Alimentar o ressentimento por ausências inevitáveis e se fechar para o diálogo carinhoso.',
        amor_proprio: 'Sentir pena de si mesma ou acreditar que o amor nunca mais baterá à sua porta.'
      },
      orientacao: {
        meu_relacionamento: 'Vire-se para trás e veja as taças que continuam em pé: renovem o compromisso com o que é possível salvar.',
        conhecendo_alguem: 'Despeça-se do luto do passado para que o novo tenha um espaço limpo onde florescer.',
        distancia: 'Foque nas soluções e no afeto que resiste, em vez de lamentar infinitamente a distância.',
        amor_proprio: 'Perdoe a si mesma pelas escolhas passadas; o que aconteceu foi aprendizado, não condenação.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que ainda temos de precioso entre nós que merece ser cuidado e protegido?',
      conhecendo_alguem: 'Estou disposta a virar as costas para as taças caídas do meu passado?',
      distancia: 'Como posso transformar a mágoa da ausência em resiliência e maturidade?',
      amor_proprio: 'Qual dor afetiva já cumpriu seu papel de ensinamento e está pronta para ir embora?'
    },
    microActions: {
      meu_relacionamento: 'Diga com afeto: "Eu sei que doeu, mas quero olhar para o que podemos construir daqui para frente".',
      conhecendo_alguem: 'Evite desabafar sobre seus ex-relacionamentos nos primeiros encontros.',
      distancia: 'Foque em planejar a próxima oportunidade real de estarem juntos.',
      amor_proprio: 'Lave o rosto com água fria, olhe-se no espelho e acolha sua nova fase de cura.'
    }
  },
  {
    id: 27,
    name: 'Seis de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '6',
    element: 'Água',
    image: '/cards/card_27.jpg',
    keywords: ['Doçura', 'Nostalgia Sadia', 'Inocência', 'Resgate'],
    archetype: 'O Guardião das Boas Memórias',
    generalLoveMeaning: 'O Seis de Copas traz à tona a pureza dos primeiros amores, a generosidade despretensiosa e a alegria das lembranças que aquecem a alma.',
    loveRelationshipMeaning: 'Resgate da ternura e da ingenuidade gostosa do começo da história de amor.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'A relação se beneficia de um resgate do carinho infantil e das memórias doces que uniram vocês.',
        conhecendo_alguem: 'Sensação de familiaridade instantânea, como se vocês já se conhecessem há muito tempo.',
        distancia: 'As lembranças dos momentos felizes vividos juntos são o combustível que mantém a chama viva.',
        amor_proprio: 'Reconexão profunda com sua criança interior, resgatando a capacidade de sonhar com o amor sem cinismo.'
      },
      desafio: {
        meu_relacionamento: 'Ficar preso ao "como era bom no passado", esquecendo que o amor precisa amadurecer no presente.',
        conhecendo_alguem: 'Confundir nostalgia com compatibilidade real; o passado nem sempre deve voltar.',
        distancia: 'Sofrer com a dor da saudade em vez de celebrar a beleza do que foi vivido.',
        amor_proprio: 'Idealizar épocas passadas achando que sua melhor fase amorosa já ficou para trás.'
      },
      orientacao: {
        meu_relacionamento: 'Traga um mimo delicado ou relembre uma piada interna de quando começaram a namorar.',
        conhecendo_alguem: 'Permita-se viver o encanto inicial com a pureza e a doçura de uma criança feliz.',
        distancia: 'Reviva fotos de viagens ou momentos especiais a dois para aquecer o coração.',
        amor_proprio: 'Abrace suas lembranças com carinho e faça hoje algo que sua versão jovem adorava fazer.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Que gesto carinhoso do nosso início de namoro podemos resgatar hoje?',
      conhecendo_alguem: 'O que essa pessoa desperta de mais doce e autêntico em mim?',
      distancia: 'Qual memória nossa me dá mais força e esperança no reencontro?',
      amor_proprio: 'O que minha criança interior diria sobre a forma como tenho cuidado do meu coração?'
    },
    microActions: {
      meu_relacionamento: 'Escreva um bilhete à mão e deixe na carteira ou bolsa do seu parceiro.',
      conhecendo_alguem: 'Compartilhe uma lembrança afetiva da sua infância que revele sua essência.',
      distancia: 'Reveja um álbum de fotos do casal e envie a sua favorita para o parceiro.',
      amor_proprio: 'Coma seu doce favorito de infância saboreando cada pedaço com alegria.'
    }
  },
  {
    id: 28,
    name: 'Sete de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '7',
    element: 'Água',
    image: '/cards/card_28.jpg',
    keywords: ['Ilusões', 'Múltiplas Escolhas', 'Fantasias', 'Discernimento'],
    archetype: 'O Sonhador Diante do Véu',
    generalLoveMeaning: 'O Sete de Copas alerta para castelos no ar e idealizações excessivas, convidando a escolher o que é real e sustentável com os pés no chão.',
    loveRelationshipMeaning: 'Cuidado para não se apaixonar pela ideia do amor em vez de amar a pessoa real de carne e osso.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Há muitas fantasias ou expectativas que não correspondem à realidade. É hora de alinhar desejos práticos.',
        conhecendo_alguem: 'Você pode estar projetando um príncipe encantado ou muitas hipóteses; mantenha a calma e observe os fatos.',
        distancia: 'A imaginação pode criar tanto expectativas mágicas quanto medos infundados; busque a verdade concreta.',
        amor_proprio: 'Cuidado para não se dispersar em desejos contraditórios; defina o que você verdadeiramente busca no amor.'
      },
      desafio: {
        meu_relacionamento: 'Fugir para fantasias ou distrações quando a convivência diária pede maturidade e presença.',
        conhecendo_alguem: 'Ficar indecisa entre opções superficiais ou apaixonada por uma ilusão de rede social.',
        distancia: 'Construir na cabeça uma imagem do parceiro que o reencontro real não consegue sustentar.',
        amor_proprio: 'A autossabotagem de sonhar com o amor perfeito para não ter que lidar com vínculos reais e humanos.'
      },
      orientacao: {
        meu_relacionamento: 'Foquem no que é simples e tangível hoje. Menos cobranças de filmes românticos e mais carinho de verdade.',
        conhecendo_alguem: 'Observe o comportamento prático da pessoa no cotidiano, para além das conversas charmosas.',
        distancia: 'Conversem sobre a realidade do dia a dia de cada um, mantendo a conexão enraizada na verdade.',
        amor_proprio: 'Escolha uma prioridade emocional clara e comprometa-se com ela com firmeza.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou amando meu parceiro real ou uma versão idealizada que criei na minha mente?',
      conhecendo_alguem: 'O que eu já sei de concreto sobre essa pessoa além das promessas e mensagens?',
      distancia: 'Quais expectativas minhas sobre o reencontro precisam ser mais realistas e gentis?',
      amor_proprio: 'O que é verdadeiramente essencial para minha paz em um relacionamento?'
    },
    microActions: {
      meu_relacionamento: 'Pergunte com curiosidade real: "Como você está se sentindo de verdade com a nossa rotina?".',
      conhecendo_alguem: 'Evite stalkear perfis ou inventar futuros hipotéticos na sua cabeça.',
      distancia: 'Troquem fotos da rotina real e sem filtros do trabalho e da casa.',
      amor_proprio: 'Escreva em um papel o que é ilusão e o que é realidade no seu momento afetivo.'
    }
  },
  {
    id: 29,
    name: 'Oito de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '8',
    element: 'Água',
    image: '/cards/card_29.jpg',
    keywords: ['Partida Corajosa', 'Desapego', 'Busca por Sentido', 'Evolução'],
    archetype: 'O Peregrino das Alturas',
    generalLoveMeaning: 'O Oito de Copas representa a nobreza de deixar para trás situações que não nutrem mais o coração, partindo em busca de um amor mais profundo.',
    loveRelationshipMeaning: 'Coragem de se afastar daquilo que é raso ou tóxico, buscando a verdadeira completude espiritual.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'É hora de abandonar hábitos velhos de discussão e buscar um nível mais alto de maturidade e paz.',
        conhecendo_alguem: 'Se perceber que a conexão não tem profundidade, não hesite em se afastar com elegância e respeito.',
        distancia: 'Você está percebendo o que realmente importa e desapegando de picuinhas sem sentido.',
        amor_proprio: 'A decisão libertadora de dizer adeus a padrões e pessoas que não sabem honrar seu valor.'
      },
      desafio: {
        meu_relacionamento: 'A fuga covarde sem conversa sincera, virando as costas antes de tentar o diálogo.',
        conhecendo_alguem: 'Desistir no primeiro obstáculo por preguiça de construir intimidade de verdade.',
        distancia: 'A tentação de abandonar a relação por cansaço passageiro da distância física.',
        amor_proprio: 'O apego mórbido a relações falidas pelo medo do desconhecido e da solidão.'
      },
      orientacao: {
        meu_relacionamento: 'Subam a montanha juntos: deixem para trás birras e foquem no propósito nobre da união de vocês.',
        conhecendo_alguem: 'Confie na sua intuição: se sentir que ali não há nutrição para sua alma, siga seu caminho com paz.',
        distancia: 'Mantenha os olhos na jornada maior; não permita que o cansaço do caminho desvie você do amor verdadeiro.',
        amor_proprio: 'Afaste-se de conversas que drenam sua vitalidade; seu tempo e sua paz são inegociáveis.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que precisamos deixar para trás juntos para alcançarmos um novo patamar de amor?',
      conhecendo_alguem: 'Essa aproximação me eleva e me nutre ou me desgasta e me diminui?',
      distancia: 'Estou disposta a suportar a travessia pelo que há de mais precioso no futuro?',
      amor_proprio: 'De qual situação desgastante meu coração já sabe que precisa se despedir?'
    },
    microActions: {
      meu_relacionamento: 'Silencie uma discussão repetitiva e proponha uma pausa para esfriar a cabeça.',
      conhecendo_alguem: 'Não responda a mensagens desrespeitosas ou sem compromisso.',
      distancia: 'Faça uma caminhada ao ar livre olhando para o horizonte, renovando o fôlego da alma.',
      amor_proprio: 'Arquive ou delete contatos de quem só procura você por conveniência.'
    }
  },
  {
    id: 30,
    name: 'Nove de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '9',
    element: 'Água',
    image: '/cards/card_30.jpg',
    keywords: ['Contentamento', 'Desejo Realizado', 'Autoamor', 'Gratidão Plena'],
    archetype: 'O Guardião da Taça da Alegria',
    generalLoveMeaning: 'O Nove de Copas é a carta do desejo realizado, onde a pessoa atinge a plenitude emocional e irradia satisfação com a própria vida afetiva.',
    loveRelationshipMeaning: 'Momento de realização e alegria mútua; o coração se sente nutrido, acolhido e feliz.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Grande satisfação e conforto emocional. Vocês desfrutam de um momento de paz, cumplicidade e carinho.',
        conhecendo_alguem: 'A conexão está trazendo um bem-estar enorme; é o tipo de encontro que deixa você com um sorriso no rosto o dia todo.',
        distancia: 'Mesmo longe, há uma profunda tranquilidade e confiança de que o afeto mútuo é sólido e generoso.',
        amor_proprio: 'Você está se sentindo linda, plena e suficiente. Seu contentamento interior é seu maior ímã de bênçãos.'
      },
      desafio: {
        meu_relacionamento: 'A soberba ou o comodismo egoísta, preocupando-se apenas com a própria satisfação.',
        conhecendo_alguem: 'O excesso de autossuficiência que impede de dar espaço para o outro também se expressar.',
        distancia: 'Acomodar-se na própria rotina e esquecer de nutrir a presença com o parceiro distante.',
        amor_proprio: 'Confundir autoamor com vaidade superficial ou hedonismo vazio.'
      },
      orientacao: {
        meu_relacionamento: 'Compartilhe sua satisfação: diga ao seu amor o quanto você se sente realizada(o) e feliz ao lado dele.',
        conhecendo_alguem: 'Desfrute do momento com gratidão; sinta a doçura da vida sem ansiedades sobre amanhã.',
        distancia: 'Celebre a estabilidade do que vocês construíram; a segurança interior dissipa o medo da distância.',
        amor_proprio: 'Presenteie-se hoje com um momento de puro prazer e conforto que celebre a mulher ou o homem incrível que você é.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que em nosso relacionamento hoje me faz sentir a pessoa mais afortunada do mundo?',
      conhecendo_alguem: 'Estou me permitindo desfrutar dessa alegria sem inventar problemas onde não há?',
      distancia: 'Como posso compartilhar minha plenitude com quem amo mesmo à distância?',
      amor_proprio: 'Quais desejos do meu coração eu já realizei e ainda não comemorei adequadamente?'
    },
    microActions: {
      meu_relacionamento: 'Diga com entusiasmo: "Estar com você é um dos maiores presentes da minha vida".',
      conhecendo_alguem: 'Permita-se receber um agrado ou carinho sem desconfianças.',
      distancia: 'Envie um brinde virtual com uma mensagem afetuosa celebrando a conexão de vocês.',
      amor_proprio: 'Prepare seu prato predileto, ponha a mesa com carinho e desfrute com satisfação.'
    }
  },
  {
    id: 31,
    name: 'Dez de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: '10',
    element: 'Água',
    image: '/cards/card_31.jpg',
    keywords: ['Amor Pleno', 'Harmonia Familiar', 'Paz no Lar', 'Arco-Íris'],
    archetype: 'A Família Sagrada',
    generalLoveMeaning: 'O Dez de Copas simboliza a felicidade duradoura, a bênção da harmonia no lar e o sentimento de pertencer a um amor que abraça e acolhe.',
    loveRelationshipMeaning: 'Sonhos conjuntos se consolidando em um ambiente de paz, respeito e calor humano.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Fase de ouro: sintonia, respeito, convivência tranquila e alinhamento com a família e com o futuro.',
        conhecendo_alguem: 'O vínculo tem forte potencial para se tornar uma história linda e duradoura com valores compartilhados.',
        distancia: 'A certeza inabalável de que vocês pertencem um ao outro e que estão construindo um lar juntos.',
        amor_proprio: 'Paz profunda com sua história, suas raízes familiares e sua trajetória afetiva.'
      },
      desafio: {
        meu_relacionamento: 'A cobrança por uma perfeição doméstica ou familiar que não existe em famílias reais.',
        conhecendo_alguem: 'Apressar planos de casamento e filhos antes de consolidar a amizade básica.',
        distancia: 'O sofrimento por não estar no lar compartilhado no momento presente.',
        amor_proprio: 'Achar que sua vida só estará completa quando tiver a foto da família perfeita de comercial.'
      },
      orientacao: {
        meu_relacionamento: 'Celebrem o ninho de vocês: cuidem da casa, preparem um momento tranquilo e desfrutem da paz do lar.',
        conhecendo_alguem: 'Observe como a pessoa se relaciona com a família e como trata as pessoas ao redor.',
        distancia: 'Sonhem juntos com o lar que vão edificar quando a distância for vencida.',
        amor_proprio: 'Faça do seu próprio corpo e do seu quarto o seu santuário de paz e acolhimento incondicional.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que podemos fazer hoje para tornar nosso ambiente ainda mais acolhedor e pacífico?',
      conhecendo_alguem: 'Nossos sonhos de longo prazo e estilo de vida conversam harmoniosamente?',
      distancia: 'O que mantém nossa fé na futura convivência tão sólida e inabalável?',
      amor_proprio: 'Como posso me sentir em casa e em paz dentro de mim mesma hoje?'
    },
    microActions: {
      meu_relacionamento: 'Arrume a cama ou o quarto com perfume suave e carinho para a noite de vocês.',
      conhecendo_alguem: 'Converse sobre como era o clima de afeto na infância de vocês com sensibilidade.',
      distancia: 'Troquem ideias sobre a decoração ou a rotina que sonham viver juntos no futuro.',
      amor_proprio: 'Acenda um incenso ou vela aromática no seu quarto e agradeça pelo seu refúgio.'
    }
  },
  {
    id: 32,
    name: 'Pajem de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: 'Pajem',
    element: 'Água',
    image: '/cards/card_32.jpg',
    keywords: ['Mensagem Doce', 'Sensibilidade', 'Timidez Romântica', 'Intuição Poética'],
    archetype: 'O Jovem Poeta',
    generalLoveMeaning: 'O Pajem de Copas traz notícias carinhosas, um flerte ingênuo e a coragem de expressar sentimentos delicados como uma carta poética.',
    loveRelationshipMeaning: 'Surpresas afetuosas e pequenos gestos que quebram o gelo e aquecem o coração.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Clima de ternura e sensibilidade. Um bilhete, uma mensagem ou um carinho sutil fará maravilhas pelo casal.',
        conhecendo_alguem: 'Aproximação doce e cheia de sensibilidade; a pessoa demonstra interesse com delicadeza e respeito.',
        distancia: 'Uma mensagem inesperada ou uma demonstração poética encurtará a distância de forma emocionante.',
        amor_proprio: 'Permita-se expressar suas emoções através da arte, da escrita ou de pequenos mimos para si.'
      },
      desafio: {
        meu_relacionamento: 'A imaturidade de emburrar por qualquer bobagem em vez de conversar com franqueza.',
        conhecendo_alguem: 'A timidez excessiva que paralisa e impede de responder com clareza ao flerte.',
        distancia: 'Magoar-se com pequenos atrasos em respostas de mensagens no WhatsApp.',
        amor_proprio: 'Sentir-se hipersensível e levar todas as palavras dos outros para o lado pessoal.'
      },
      orientacao: {
        meu_relacionamento: 'Mande uma mensagem fofa ou deixe um bilhete surpresa dizendo o quanto você ama seu parceiro.',
        conhecendo_alguem: 'Mostre seu lado sensível e bem-humorado; a doçura é irresistível quando é sincera.',
        distancia: 'Grave um áudio espontâneo contando algo bobo do seu dia com carinho.',
        amor_proprio: 'Escreva um poema ou uma carta carinhosa para você mesma, validando suas emoções.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Que gesto delicado e carinhoso posso fazer para surpreender meu amor hoje?',
      conhecendo_alguem: 'Estou receptiva à doçura dessa aproximação sem medo de ser vulnerável?',
      distancia: 'Como posso transmitir meu afeto de forma poética e leve à distância?',
      amor_proprio: 'Como tenho acolhido minha sensibilidade nos momentos em que me sinto frágil?'
    },
    microActions: {
      meu_relacionamento: 'Envie um emoji com um recado meigo no meio da tarde sem motivo específico.',
      conhecendo_alguem: 'Responda com sinceridade doce a uma gentileza da outra pessoa.',
      distancia: 'Compartilhe um poema ou frase inspiradora que fez você lembrar da pessoa amada.',
      amor_proprio: 'Compre um caderno bonito para registrar suas inspirações afetivas.'
    }
  },
  {
    id: 33,
    name: 'Cavaleiro de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: 'Cavaleiro',
    element: 'Água',
    image: '/cards/card_33.jpg',
    keywords: ['Cortejo Romântico', 'Proposta de Amor', 'Charme', 'Idealismo'],
    archetype: 'O Cavaleiro Romântico',
    generalLoveMeaning: 'O Cavaleiro de Copas vem trazendo uma proposta amorosa, galanteria, gestos nobres de conquista e o desejo de viver um grande romance.',
    loveRelationshipMeaning: 'Movimento apaixonado em direção à união; o afeto se manifesta em ações de conquista e dedicação.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O romance está em alta: um convite para reacender a chama do namoro, com declarações e passeios especiais.',
        conhecendo_alguem: 'A outra pessoa tem atitudes de cortejo e atenção; o interesse é evidente e busca encantar você.',
        distancia: 'O desejo de cruzar qualquer distância física para estar junto e entregar o coração de bandeja.',
        amor_proprio: 'Você está no comando do seu romance interior: trate-se como a protagonista da sua história de amor.'
      },
      desafio: {
        meu_relacionamento: 'Ficar apenas em declarações poéticas sem sustentação nas atitudes práticas do dia a dia.',
        conhecendo_alguem: 'Iludir-se com um charme superficial que promete o mundo mas desaparece quando a rotina chega.',
        distancia: 'Sofrer com a distância alimentando um idealismo dramático de romance impossível.',
        amor_proprio: 'Esperar que um salvador venha resgatar você de suas próprias responsabilidades emocionais.'
      },
      orientacao: {
        meu_relacionamento: 'Planejem um encontro a dois especial, com clima de cinema e foco total um no outro.',
        conhecendo_alguem: 'Receba a corte com elegância, mas observe se a constância acompanha as belas palavras.',
        distancia: 'Expresse a paixão com firmeza; deixe claro o quanto você valoriza esse vínculo no seu coração.',
        amor_proprio: 'Convide-se para um passeio sofisticado: vista sua melhor roupa e celebre seu magnetismo.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos transformar declarações bonitas em atos concretos de amor?',
      conhecendo_alguem: 'As atitudes dessa pessoa condizem com o charme e as promessas que ela faz?',
      distancia: 'O que estou fazendo para demonstrar ativamente que o amor vale o esforço?',
      amor_proprio: 'Estou sendo o meu próprio cavaleiro e cuidando da minha felicidade?'
    },
    microActions: {
      meu_relacionamento: 'Faça um convite formal e romântico para o próximo fim de semana.',
      conhecendo_alguem: 'Agradeça a um gesto cavalheiro com naturalidade e graça.',
      distancia: 'Envie um presente surpresa ou flores para o endereço do parceiro.',
      amor_proprio: 'Passe seu perfume favorito mesmo que seja para ficar em casa, celebrando seu amor-próprio.'
    }
  },
  {
    id: 34,
    name: 'Rainha de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: 'Rainha',
    element: 'Água',
    image: '/cards/card_34.jpg',
    keywords: ['Empatia Curativa', 'Maturidade Emocional', 'Acolhimento', 'Amor Incondicional'],
    archetype: 'A Mãe Compassiva do Afeto',
    generalLoveMeaning: 'A Rainha de Copas personifica a sabedoria do coração, a capacidade de acolher o outro em suas dores e a firmeza de quem ama com maturidade.',
    loveRelationshipMeaning: 'Ambiente de segurança emocional onde ambas as partes podem ser vulneráveis sem medo do julgamento.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Você ou seu parceiro estão trazendo uma energia admirável de acolhimento, escuta atenta e cura emocional.',
        conhecendo_alguem: 'A conexão desperta sentimentos profundos e ternos; há uma sensação de porto seguro entre vocês.',
        distancia: 'A confiança e a serenidade da Rainha de Copas garantem que o laço se mantenha firme e nutrido.',
        amor_proprio: 'Você atingiu um estágio bonito de respeito pelas suas emoções, cuidando de si com a ternura de uma mãe amorosa.'
      },
      desafio: {
        meu_relacionamento: 'Absorver os problemas e o mau humor do parceiro como se fossem seus, esgotando sua própria energia.',
        conhecendo_alguem: 'Tentar salvar ou consertar as dores do outro antes mesmo de saber se ele quer mudar.',
        distancia: 'A hipersensibilidade provocada pela saudade fazendo você chorar por qualquer silêncio.',
        amor_proprio: 'Doar-se tanto aos outros até que não reste nenhuma gota de carinho para você mesma.'
      },
      orientacao: {
        meu_relacionamento: 'Ofereça um ombro amigo sem julgar. Às vezes o parceiro só precisa ser ouvido com compaixão.',
        conhecendo_alguem: 'Seja acolhedora, mas mantenha seus próprios limites: você é companheira, não terapeuta.',
        distancia: 'Transmita paz e segurança emocional; sua calma será o maior esteio do relacionamento à distância.',
        amor_proprio: 'Coloque a mão sobre seu peito e prometa cuidar do seu coração com todo o amor que ele merece.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou sabendo acolher as fragilidades do meu parceiro sem absorver o peso dele?',
      conhecendo_alguem: 'Estou me apaixonando por quem a pessoa é ou pela vontade de cuidar dela?',
      distancia: 'Como minha serenidade interior pode tranquilizar as inseguranças da distância?',
      amor_proprio: 'Estou reservando para mim a mesma compaixão que tenho pelos outros?'
    },
    microActions: {
      meu_relacionamento: 'Ouça seu parceiro hoje por 10 minutos com o coração aberto, sem dar conselhos não solicitados.',
      conhecendo_alguem: 'Compartilhe um sentimento com sinceridade tranquila, observando como o outro acolhe.',
      distancia: 'Mande uma mensagem dizendo: "Estou aqui com você, torcendo por você e em paz com a nossa história".',
      amor_proprio: 'Tome um banho relaxante à luz de velas e desconecte-se de cobranças externas.'
    }
  },
  {
    id: 35,
    name: 'Rei de Copas',
    arcana: 'menor',
    suit: 'copas',
    rank: 'Rei',
    element: 'Água',
    image: '/cards/card_35.jpg',
    keywords: ['Equilíbrio Emocional', 'Sabedoria Serena', 'Porto Seguro', 'Lealdade Firme'],
    archetype: 'O Senhor das Marés Emocionais',
    generalLoveMeaning: 'O Rei de Copas domina o mar agitado das emoções com sabedoria, oferecendo paciência, aconselhamento calmo e firmeza inabalável.',
    loveRelationshipMeaning: 'Maturidade máxima no amor: saber sentir com paixão sem se deixar afogar em reatividades infantis.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Fase de grande estabilidade e maturidade. Tempestades externas não abalam o respeito e a lealdade do casal.',
        conhecendo_alguem: 'A pessoa demonstra maturidade, equilíbrio emocional e sinceridade sobre o que quer da vida.',
        distancia: 'A firmeza e a calma sustentam a distância sem crises de ciúmes ou desespero ansioso.',
        amor_proprio: 'Você é a governante serena do seu coração; não permite que tempestades alheias tirem sua paz de espírito.'
      },
      desafio: {
        meu_relacionamento: 'A frieza disfarçada de controle emocional, reprimindo sentimentos que precisam ser ditos.',
        conhecendo_alguem: 'Dificuldade de a outra pessoa demonstrar vulnerabilidade por medo de perder o controle da situação.',
        distancia: 'Guardar incômodos para si para não causar conflito, acumulando ressentimentos silenciosos.',
        amor_proprio: 'Tentar engolir as próprias lágrimas achando que maturidade significa nunca poder sofrer.'
      },
      orientacao: {
        meu_relacionamento: 'Seja o porto seguro da relação: quando houver tensão, responda com voz calma e firmeza carinhosa.',
        conhecendo_alguem: 'Valorize atitudes maduras e fuja de pessoas que vivem em montanhas-russas dramáticas.',
        distancia: 'Mantenha a confiança madura; o tempo e o compromisso ético são seus maiores aliados.',
        amor_proprio: 'Reconheça a mulher ou homem maduro que você se tornou e tome decisões com base no seu discernimento.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como posso agir com maturidade e sabedoria diante dos desafios que enfrentamos hoje?',
      conhecendo_alguem: 'Essa pessoa demonstra estabilidade emocional ou instabilidade cansativa?',
      distancia: 'Estou conseguindo manter a calma e a confiança nos momentos de ausência?',
      amor_proprio: 'Estou no comando sereno da minha vida amorosa ou sou refém das atitudes alheias?'
    },
    microActions: {
      meu_relacionamento: 'Responda a uma discordância com calma: "Entendo seu ponto e quero que encontremos uma solução juntos".',
      conhecendo_alguem: 'Observe a forma como a pessoa lida com pequenas frustrações diárias.',
      distancia: 'Tranquilize seu parceiro com palavras firmes de lealdade e afeto maduro.',
      amor_proprio: 'Faça uma pausa respiratória de 3 minutos para ancorar a calma no seu corpo.'
    }
  },

  // ==========================================
  // NAIPE DE PAUS (WANDS) - IDs 36 a 49
  // ==========================================
  {
    id: 36,
    name: 'Ás de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: 'Ás',
    element: 'Fogo',
    image: '/cards/card_36.jpg',
    keywords: ['Faísca Ardente', 'Iniciativa', 'Paixão Viva', 'Desejo'],
    archetype: 'A Centelha Criadora',
    generalLoveMeaning: 'O Ás de Paus simboliza o despertar súbito da atração, a faísca do desejo e a coragem de tomar a iniciativa no amor.',
    loveRelationshipMeaning: 'Energia renovada, atração física acesa e entusiasmo para dar início a um capítulo vibrante.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'A chama da paixão está acesa e pronta para ser cultivada. O momento pede aventura e quebra de rotina.',
        conhecendo_alguem: 'Forte magnetismo e química sexual evidente; há uma vontade intensa de aproximação física.',
        distancia: 'A saudade alimenta o fogo do desejo; o reencontro promete ser intenso e apaixonado.',
        amor_proprio: 'Você está redescobrindo sua vitalidade, seu poder de atração e sua paixão pela própria vida.'
      },
      desafio: {
        meu_relacionamento: 'Impulsividade descontrolada ou queimar etapas sem construir intimidade emocional.',
        conhecendo_alguem: 'Confundir atração física fulminante com compatibilidade para um relacionamento sério.',
        distancia: 'A impaciência com a espera física gerando atritos por carência carnal.',
        amor_proprio: 'Buscar adrenalina passageira para preencher um vazio que precisa de autocuidado real.'
      },
      orientacao: {
        meu_relacionamento: 'Surpreenda com ousadia e paixão. Traga novidade para a intimidade do casal hoje mesmo.',
        conhecendo_alguem: 'Tome a iniciativa com confiança; mostre seu entusiasmo com charme e assertividade.',
        distancia: 'Mantenha o flerte e o jogo de sedução vivos através de mensagens instigantes.',
        amor_proprio: 'Canalize sua energia criativa em um projeto ou atividade física que faça seu sangue vibrar.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como posso reacender a faísca da paixão e do entusiasmo em nossa relação?',
      conhecendo_alguem: 'O que estou fazendo com esse entusiasmo todo: construindo ou apenas me precipitando?',
      distancia: 'Como podemos manter a chama do desejo acesa mesmo à distância?',
      amor_proprio: 'O que faz meus olhos brilharem e me devolve a paixão por viver?'
    },
    microActions: {
      meu_relacionamento: 'Envie uma mensagem picante ou carinhosa antecipando o momento a dois hoje à noite.',
      conhecendo_alguem: 'Dê um sinal claro de atração e deixe a pessoa perceber seu magnetismo.',
      distancia: 'Faça um flerte divertido e provoque a imaginação do parceiro com elegância.',
      amor_proprio: 'Pratique um exercício físico vigoroso para despertar sua força vital.'
    }
  },
  {
    id: 37,
    name: 'Dois de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '2',
    element: 'Fogo',
    image: '/cards/card_37.jpg',
    keywords: ['Horizontes', 'Planejamento', 'Escolha de Rumo', 'Ambição Afetiva'],
    archetype: 'O Visionário no Balcão',
    generalLoveMeaning: 'O Dois de Paus convida a planejar os próximos passos afetivos olhando para o horizonte com coragem e visão de futuro.',
    loveRelationshipMeaning: 'Hora de decidir se vocês querem dar passos mais ousados e expandir os horizontes do casal.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Vocês estão prontos para traçar novos planos juntos (viagens, morar juntos, mudanças importantes).',
        conhecendo_alguem: 'Você está avaliando se vale a pena abrir espaço definitivo para essa pessoa nos seus planos de vida.',
        distancia: 'Necessidade de planejar o futuro da relação para que a distância não se torne um estado indefinido.',
        amor_proprio: 'Você está no topo da sua jornada, decidindo para onde quer direcionar seus sentimentos a partir de agora.'
      },
      desafio: {
        meu_relacionamento: 'Ficar apenas no mundo das ideias e dos planos sem nunca tirá-los do papel.',
        conhecendo_alguem: 'O medo de abrir mão da sua zona de conforto e liberdade individual para viver a dois.',
        distancia: 'A hesitação em tomar decisões difíceis sobre quem se muda ou como resolver a logística.',
        amor_proprio: 'Paralisar na dúvida entre ficar com o que é seguro ou arriscar pelo que faz o coração bater forte.'
      },
      orientacao: {
        meu_relacionamento: 'Conversem sobre os sonhos para os próximos 6 meses. O alinhamento de planos dá segurança ao casal.',
        conhecendo_alguem: 'Pondere com lucidez: observe se o estilo de vida da pessoa cabe nos seus projetos de futuro.',
        distancia: 'Definam datas concretas. O planejamento estratégico é o maior antídoto para a ansiedade da distância.',
        amor_proprio: 'Tenha a coragem de sonhar grande no amor. Não aceite menos do que você é capaz de planejar para si.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Para onde queremos que nosso relacionamento caminhe no próximo ano?',
      conhecendo_alguem: 'Vejo essa pessoa cabendo organicamente nos meus planos de vida futuros?',
      distancia: 'Qual é o plano de ação mais realista para estarmos juntos definitivamente?',
      amor_proprio: 'Que futuro amoroso estou pronta para construir com base nas minhas escolhas presentes?'
    },
    microActions: {
      meu_relacionamento: 'Abram o calendário juntos e escolham uma data para um projeto a dois.',
      conhecendo_alguem: 'Pergunte à pessoa sobre os planos profissionais e de vida dela para os próximos anos.',
      distancia: 'Pesquise opções reais de passagens ou rotas para encurtar o tempo de separação.',
      amor_proprio: 'Escreva em seu diário uma visão nítida do relacionamento que você merece viver.'
    }
  },
  {
    id: 38,
    name: 'Três de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '3',
    element: 'Fogo',
    image: '/cards/card_38.jpg',
    keywords: ['Expansão', 'Retorno dos Barcos', 'Esperança Ativa', 'Progresso'],
    archetype: 'O Mercador Confiante',
    generalLoveMeaning: 'O Três de Paus indica que as sementes plantadas no amor começam a dar retorno; os navios com boas notícias estão a caminho.',
    loveRelationshipMeaning: 'Fase de expansão, confiança e certeza de que o esforço investido na relação valerá a pena.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O relacionamento está evoluindo e ganhando maturidade. Há um sentimento de progresso e conquista mútua.',
        conhecendo_alguem: 'A história está avançando com passos firmes; vocês estão colhendo as primeiras respostas positivas.',
        distancia: 'Os planos de reencontro estão ganhando forma; a expectativa é positiva e fundamentada em ações reais.',
        amor_proprio: 'Você está colhendo os frutos da sua dedicação pessoal, sentindo-se mais forte e confiante no amor.'
      },
      desafio: {
        meu_relacionamento: 'A ansiedade em relação ao tempo que os resultados levam para se consolidar.',
        conhecendo_alguem: 'Querer colher o fruto antes que ele amadureça no galho.',
        distancia: 'A impaciência na reta final da espera, quando os dias parecem mais longos.',
        amor_proprio: 'Duvidar dos seus próprios passos justamente quando as oportunidades começam a aparecer.'
      },
      orientacao: {
        meu_relacionamento: 'Mantenham a visão de longo prazo e celebrem os pequenos avanços cotidianos.',
        conhecendo_alguem: 'Confie no ritmo que está se desenhando; continue demonstrando interesse com consistência.',
        distancia: 'Olhe para o horizonte com otimismo: os esforços de vocês dois estão gerando frutos concretos.',
        amor_proprio: 'Mantenha a cabeça erguida e continue caminhando na direção dos seus maiores ideais afetivos.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Quais frutos positivos de dedicação mútua já podemos colher hoje?',
      conhecendo_alguem: 'Estou sabendo cultivar esse vínculo com constância e paciência?',
      distancia: 'O que me faz ter certeza de que estamos caminhando na direção certa?',
      amor_proprio: 'Estou pronta para receber as bênçãos amorosas que estão a caminho?'
    },
    microActions: {
      meu_relacionamento: 'Reconheça um progresso que vocês fizeram como casal nos últimos meses.',
      conhecendo_alguem: 'Proponha uma atividade que mostre sua vontade de continuar explorando essa conexão.',
      distancia: 'Envie uma mensagem de incentivo para os projetos pessoais do parceiro.',
      amor_proprio: 'Olhe para sua trajetória e celebre o quanto você cresceu emocionalmente.'
    }
  },
  {
    id: 39,
    name: 'Quatro de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '4',
    element: 'Fogo',
    image: '/cards/card_39.jpg',
    keywords: ['Celebração do Marco', 'Estabilidade Feliz', 'Portas Abertas', 'Harmonia'],
    archetype: 'O Portal Festivo',
    generalLoveMeaning: 'O Quatro de Paus celebra a consolidação de um marco importante: segurança afetiva, celebração a dois e acolhimento mútuo.',
    loveRelationshipMeaning: 'Fase de segurança e estabilidade abençoada; o casal comemora uma conquista em clima de festa.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Momento de grande harmonia, celebração e aconchego. Vocês construíram um refúgio estável de amor.',
        conhecendo_alguem: 'A conexão atingiu um patamar sólido e confortável; vocês se sentem seguros e bem-vindos um na vida do outro.',
        distancia: 'A data do reencontro se aproxima com grande alegria e clima de comemoração antecipada.',
        amor_proprio: 'Você atingiu um alicerce firme de estabilidade emocional; sente-se em casa consigo mesma.'
      },
      desafio: {
        meu_relacionamento: 'Acomodar-se na festa e esquecer que relações duradouras exigem cuidado diário constante.',
        conhecendo_alguem: 'Achar que já conquistou tudo e diminuir a dedicação e o carinho.',
        distancia: 'A frustração de não poder comemorar datas comemorativas juntos no mesmo local.',
        amor_proprio: 'Achar que momentos de estabilidade são chatos e buscar conflito apenas por vício em adrenalina.'
      },
      orientacao: {
        meu_relacionamento: 'Comemorem a vitória do relacionamento: façam um brinde, abram um vinho ou cozinhem juntos.',
        conhecendo_alguem: 'Abra as portas do seu mundo com generosidade; mostre que a pessoa é bem-vinda na sua vida.',
        distancia: 'Mantenham o espírito festivo vivo: façam uma contagem regressiva alegre para o reencontro.',
        amor_proprio: 'Aprecie a paz da sua estabilidade interior e celebre o fato de estar bem no presente.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual marco do nosso amor merece ser celebrado com alegria hoje?',
      conhecendo_alguem: 'Estou me sentindo confortável e acolhida nesta aproximação?',
      distancia: 'Como podemos transformar a espera em uma contagem regressiva festiva?',
      amor_proprio: 'Como tenho celebrado minhas próprias vitórias emocionais e conquistas pessoais?'
    },
    microActions: {
      meu_relacionamento: 'Prepare um jantar especial para dois em comemoração à parceria de vocês.',
      conhecendo_alguem: 'Apresente a pessoa a um lugar que tem significado afetivo especial para você.',
      distancia: 'Marquem no calendário os dias que faltam para o reencontro com entusiasmo.',
      amor_proprio: 'Compre algo bonito para enfeitar sua casa ou quarto, simbolizando harmonia.'
    }
  },
  {
    id: 40,
    name: 'Cinco de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '5',
    element: 'Fogo',
    image: '/cards/card_40.jpg',
    keywords: ['Conflitos Menores', 'Disputa de Ego', 'Competição', 'Atrito'],
    archetype: 'Os Competidores em Disputa',
    generalLoveMeaning: 'O Cinco de Paus aponta para picuinhas, atritos diários, disputas de ego e a necessidade de desarmar a competição a dois.',
    loveRelationshipMeaning: 'Choque de vontades ou opiniões divergentes que desgastam a relação se forem levados a ferro e fogo.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Há pequenas brigas e teimosias no ar. Vocês estão competindo para ver quem tem razão em vez de cooperar.',
        conhecendo_alguem: 'Divergências de opiniões ou jogos de poder que podem criar atritos desnecessários no início.',
        distancia: 'A distância amplia o estresse, fazendo com que pequenas divergências virem discussões acaloradas.',
        amor_proprio: 'Conflito interno entre o que você deseja viver no amor e o que suas inseguranças dizem.'
      },
      desafio: {
        meu_relacionamento: 'O orgulho ferido que prefere ter razão a ter paz, transformando conversas em ringues.',
        conhecendo_alguem: 'Entrar em joguinhos de provocação ou querer provar superioridade diante do outro.',
        distancia: 'Descontar o estresse do dia a dia no parceiro distante através de mensagens ríspidas.',
        amor_proprio: 'Autosabotagem através de cobranças internas contraditórias que geram exaustão mental.'
      },
      orientacao: {
        meu_relacionamento: 'Abaixe os bastões. Lembre-se: vocês estão no mesmo time, e não competindo um contra o outro.',
        conhecendo_alguem: 'Não transforme conversas leves em debates pesados; aprenda a acolher as diferenças com humor.',
        distancia: 'Se o clima esquentar por mensagens, pare, respire e conversem somente quando ambos estiverem calmos.',
        amor_proprio: 'Faça as pazes consigo mesma: pare de se criticar por cada sentimento ou pensamento que surge.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou disputando para vencer a discussão ou para encontrar um acordo em paz?',
      conhecendo_alguem: 'Estou reagindo com agressividade por medo de ser vulnerável?',
      distancia: 'Será que estou descontando meu estresse diário na pessoa que amo?',
      amor_proprio: 'Qual conflito interno meu posso desarmar com gentileza e autocompaixão?'
    },
    microActions: {
      meu_relacionamento: 'Diga com sinceridade: "Não quero brigar com você; quero que fiquemos bem".',
      conhecendo_alguem: 'Mude de assunto com leveza quando perceber que uma conversa está virando debate tenso.',
      distancia: 'Envie um sticker ou meme engraçado para quebrar o gelo de uma conversa tensa.',
      amor_proprio: 'Escreva seus pensamentos conflituosos em uma folha e decida não brigar consigo mesma hoje.'
    }
  },
  {
    id: 41,
    name: 'Seis de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '6',
    element: 'Fogo',
    image: '/cards/card_41.jpg',
    keywords: ['Reconhecimento', 'Superação Vitoriosa', 'Confiança', 'Orgulho Sincero'],
    archetype: 'O Cavaleiro Coroado de Louros',
    generalLoveMeaning: 'O Seis de Paus é a vitória após a batalha: reconhecimento mútuo, admiração declarada e superação de crises com nobreza.',
    loveRelationshipMeaning: 'Fase de orgulho saudável pelo caminho percorrido e admiração sincera pelas qualidades do parceiro.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Vocês superaram uma crise ou obstáculo difícil juntos. Há um clima de vitória e valorização mútua.',
        conhecendo_alguem: 'A pessoa reconhece seu valor e demonstra admiração explícita pelo que você é e conquistou.',
        distancia: 'A perseverança de vocês está sendo recompensada; vocês provaram a força do vínculo.',
        amor_proprio: 'Você está no topo da sua autoestima, reconhecendo suas vitórias e orgulhando-se da sua postura digna.'
      },
      desafio: {
        meu_relacionamento: 'A vaidade excessiva ou jogar na cara do parceiro que você tinha razão o tempo todo.',
        conhecendo_alguem: 'Deixar os elogios subirem à cabeça e agir com arrogância.',
        distancia: 'Cobrar aplausos e reconhecimento constante pelo sacrifício de esperar pela outra pessoa.',
        amor_proprio: 'Depender da validação e dos aplausos dos outros para se sentir vitoriosa.'
      },
      orientacao: {
        meu_relacionamento: 'Elogie seu parceiro em público e no privado. Reconheçam a vitória do amor que vocês construíram.',
        conhecendo_alguem: 'Receba os elogios com humildade e elegância, retribuindo a admiração que for sincera.',
        distancia: 'Comemorem cada etapa vencida na distância: vocês são vitoriosos por manter o afeto firme.',
        amor_proprio: 'Reconheça no espelho a mulher ou homem vitorioso que você é por tudo o que já superou.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que nós dois já vencemos juntos que merece nosso reconhecimento e gratidão?',
      conhecendo_alguem: 'Sinto que essa pessoa admira quem eu sou de verdade?',
      distancia: 'Como podemos celebrar a força da nossa história diante dos desafios?',
      amor_proprio: 'Pelo que sinto mais orgulho em relação à minha evolução emocional recente?'
    },
    microActions: {
      meu_relacionamento: 'Diga ao seu parceiro: "Tenho muito orgulho de caminhar ao seu lado e ver tudo o que superamos".',
      conhecendo_alguem: 'Agradeça a um elogio sincero com um sorriso luminoso.',
      distancia: 'Mande uma mensagem celebrando mais uma semana de amor e cumplicidade vencida.',
      amor_proprio: 'Escreva uma lista das 3 maiores superações emocionais da sua vida e sinta sua força.'
    }
  },
  {
    id: 42,
    name: 'Sete de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '7',
    element: 'Fogo',
    image: '/cards/card_42.jpg',
    keywords: ['Defesa Firme', 'Coragem', 'Proteger o Vínculo', 'Integridade'],
    archetype: 'O Defensor da Colina',
    generalLoveMeaning: 'O Sete de Paus traz a coragem de defender aquilo em que você acredita, mantendo sua postura diante de pressões externas e dúvidas alheias.',
    loveRelationshipMeaning: 'Proteger a intimidade do casal contra fofocas, palpites de parentes ou interferências de terceiros.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O casal pode estar enfrentando pressões familiares ou financeiras, exigindo união firme para proteger o vínculo.',
        conhecendo_alguem: 'Você está sustentando seus padrões e limites com coragem, sem ceder à pressão alheia.',
        distancia: 'A defesa do relacionamento contra a descrença de amigos ou familiares que dizem que amor de longe não funciona.',
        amor_proprio: 'A coragem de se posicionar e não permitir que ninguém desrespeite seus valores ou seu espaço.'
      },
      desafio: {
        meu_relacionamento: 'Ficar na defensiva com o próprio parceiro, achando que qualquer comentário é um ataque pessoal.',
        conhecendo_alguem: 'Armar uma barreira agressiva por medo de ser machucada novamente.',
        distancia: 'O esgotamento de ter que justificar constantemente a escolha de manter a relação à distância.',
        amor_proprio: 'Sentir que a vida amorosa é uma guerra constante onde você sempre precisa estar de guarda levantada.'
      },
      orientacao: {
        meu_relacionamento: 'Protejam o relacionamento: fechem as portas para opiniões tóxicas de fora e apoiem-se mutuamente.',
        conhecendo_alguem: 'Mantenha seus limites com serenidade e firmeza, sem precisar ser rude para se fazer respeitar.',
        distancia: 'Confie na sua escolha. A história é de vocês dois; o que terceiros pensam sobre a distância não importa.',
        amor_proprio: 'Diga "não" sem culpa àquilo que ameaça sua integridade emocional.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estamos unidos contra os desafios externos ou brigando entre nós por causa deles?',
      conhecendo_alguem: 'Estou defendendo meus limites com clareza ou erguendo muros intransponíveis?',
      distancia: 'Como podemos blindar nosso afeto contra palpites desanimadores de outras pessoas?',
      amor_proprio: 'Qual limite meu precisa ser reafirmado com firmeza e elegância hoje?'
    },
    microActions: {
      meu_relacionamento: 'Combine com seu parceiro não comentar detalhes íntivos da relação com familiares ou amigos.',
      conhecendo_alguem: 'Se algo a incomodar, fale com tranquilidade no mesmo dia sem acumular mágoa.',
      distancia: 'Diga a um terceiro intrometido: "Nós sabemos cuidar muito bem da nossa relação, obrigada".',
      amor_proprio: 'Cancele um compromisso que você só aceitou por obrigação social para descansar.'
    }
  },
  {
    id: 43,
    name: 'Oito de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '8',
    element: 'Fogo',
    image: '/cards/card_43.jpg',
    keywords: ['Velocidade', 'Mensagens Rápidas', 'Sintonia Ágil', 'Desenrolar'],
    archetype: 'As Flechas do Destino',
    generalLoveMeaning: 'O Oito de Paus indica aceleração nos acontecimentos: mensagens que chegam depressa, conversas que destravam impasses e viagens imprevistas.',
    loveRelationshipMeaning: 'A energia entre vocês corre com velocidade; as respostas chegam e o diálogo flui sem barreiras.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O ritmo do relacionamento acelera; impasses antigos se resolvem com conversas rápidas e dinâmicas.',
        conhecendo_alguem: 'Muita troca de mensagens, sintonia rápida e entusiasmo evidente; as coisas estão se desenrolando depressa.',
        distancia: 'Comunicação fluida e ágil encurtando a distância; notícias sobre reencontros ou viagens a caminho.',
        amor_proprio: 'Sua mente está clara e ágil; você está tomando decisões afetivas com rapidez e assertividade.'
      },
      desafio: {
        meu_relacionamento: 'A pressa em resolver tudo no calor do momento, atropelando o tempo que as emoções levam para assentar.',
        conhecendo_alguem: 'Aceleramento desmedido que queima etapas essenciais do conhecimento mútuo.',
        distancia: 'A ansiedade de respostas imediatas nas redes, gerando cobranças sufocantes.',
        amor_proprio: 'Sobrecarga de estímulos mentais e mensagens que esgotam sua tranquilidade.'
      },
      orientacao: {
        meu_relacionamento: 'Aproveite o embalo favorável para alinhar conversas práticas e definir pendências com leveza.',
        conhecendo_alguem: 'Mantenha o diálogo fluido e espontâneo, desfrutando da agilidade dessa sintonia.',
        distancia: 'Comuniquem-se com clareza e entusiasmo; uma notícia boa está a caminho para encurtar a distância.',
        amor_proprio: 'Aja com rapidez naquilo que depende exclusivamente de você: decida pela sua paz agora.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que podemos resolver com uma conversa direta e rápida hoje sem rodeios?',
      conhecendo_alguem: 'Estou conseguindo acompanhar o ritmo dessa conexão com equilíbrio?',
      distancia: 'Como a comunicação diária pode ser mais dinâmica e afetuosa?',
      amor_proprio: 'Qual decisão sobre minha vida amorosa eu venho adiando e posso tomar hoje?'
    },
    microActions: {
      meu_relacionamento: 'Mande uma mensagem direta e carinhosa desfazendo um mal-entendido recente.',
      conhecendo_alguem: 'Responda com naturalidade e proponha um próximo bate-papo descontraído.',
      distancia: 'Mande um áudio breve e cheio de energia para alegrar o dia do parceiro.',
      amor_proprio: 'Tome uma atitude prática que você vinha protelando há semanas.'
    }
  },
  {
    id: 44,
    name: 'Nove de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '9',
    element: 'Fogo',
    image: '/cards/card_44.jpg',
    keywords: ['Resiliência', 'Cansaço da Batalha', 'Reta Final', 'Defesa Vigilante'],
    archetype: 'O Sentinela Ferido',
    generalLoveMeaning: 'O Nove de Paus mostra que você já enfrentou muitas batalhas no amor e está cansada, mas resta apenas o último esforço para alcançar a segurança.',
    loveRelationshipMeaning: 'Resistir na reta final de uma fase desgastante sem deixar que o cansaço endureça o coração.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O casal atravessou períodos puxados e sente cansaço emocional, mas o compromisso e a lealdade continuam de pé.',
        conhecendo_alguem: 'Você está cautelosa e pisando em ovos por causa de dores passadas; é natural ter receio, mas não se feche totalmente.',
        distancia: 'A saudade acumulada cansa a mente, mas vocês estão na reta final dessa fase de afastamento.',
        amor_proprio: 'Reconhecimento da sua força: você sobreviveu a tudo o que tentou te derrubar e continua inteira.'
      },
      desafio: {
        meu_relacionamento: 'A desconfiança constante, esperando que o parceiro vá cometer um erro a qualquer instante.',
        conhecendo_alguem: 'Ficar em posição de guarda permanente, tratando o novo pretendente como um inimigo em potencial.',
        distancia: 'O desânimo por exaustão nos últimos quilômetros da jornada.',
        amor_proprio: 'Achar que você sempre terá que lutar com armaduras pesadas para merecer um amor tranquilo.'
      },
      orientacao: {
        meu_relacionamento: 'Descansem as armas. Vocês já provaram a lealdade; agora é hora de relaxar no carinho e no acolhimento.',
        conhecendo_alguem: 'Mantenha a prudência, mas permita-se respirar e ver que nem todo mundo quer machucar você.',
        distancia: 'Aguente firme: a travessia está quase completa. O reencontro será a recompensa pela resiliência.',
        amor_proprio: 'Abrace suas cicatrizes com respeito e diga a si mesma: "Eu venci as tempestades e agora mereço a calmaria".'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Será que estou em posição de guarda desnecessária com a pessoa que mais me apoia?',
      conhecendo_alguem: 'O que preciso para relaxar a guarda e me permitir ser cuidada de verdade?',
      distancia: 'De onde posso tirar força para suportar os últimos passos dessa espera?',
      amor_proprio: 'Estou disposta a aceitar que o amor pode ser fácil e pacífico sem batalhas épicas?'
    },
    microActions: {
      meu_relacionamento: 'Diga ao seu parceiro: "Estou cansada hoje; só preciso deitar no seu peito e descansar em paz".',
      conhecendo_alguem: 'Respire fundo e solte os ombros antes de responder a uma mensagem.',
      distancia: 'Lembre-se de que a distância é temporária, mas a maturidade que vocês construíram é para sempre.',
      amor_proprio: 'Faça um escalda-pés com água morna e sal grosso para descarregar o cansaço do corpo.'
    }
  },
  {
    id: 45,
    name: 'Dez de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: '10',
    element: 'Fogo',
    image: '/cards/card_45.jpg',
    keywords: ['Sobrecarga', 'Peso Excessivo', 'Dividir Responsabilidades', 'Exaustão'],
    archetype: 'O Carregador Oprimido',
    generalLoveMeaning: 'O Dez de Paus alerta para o peso de carregar a relação nas costas sozinho, pedindo divisão justa de esforços e descarte de fardos inúteis.',
    loveRelationshipMeaning: 'Exaustão quando uma só pessoa assume a responsabilidade de manter o clima bom e o diálogo vivo.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Você ou o casal estão sobrecarregados de obrigações diárias e o cansaço está drenando a energia do amor.',
        conhecendo_alguem: 'Você está se esforçando demais para fazer o vínculo andar enquanto a outra pessoa apenas assiste.',
        distancia: 'A logística da distância somada ao trabalho e compromissos está ficando pesada demais.',
        amor_proprio: 'O hábito nocivo de assumir as culpas e responsabilidades emocionais de todo mundo ao redor.'
      },
      desafio: {
        meu_relacionamento: 'O orgulho de não pedir ajuda, acumulando estresse até explodir de forma injusta.',
        conhecendo_alguem: 'Carregar a expectativa de sustentar a conversa e os convites sozinha.',
        distancia: 'Sentir que só você se sacrifica e viaja para fazer a relação funcionar.',
        amor_proprio: 'Não saber dizer "basta" para exigências alheias que sufocam seu próprio bem-estar.'
      },
      orientacao: {
        meu_relacionamento: 'Larguem parte dos fardos. Dividam tarefas práticas e conversem sobre o que pode ser adiado ou cancelado.',
        conhecendo_alguem: 'Solte o bastão: se a pessoa não der passos em direção a você, não continue carregando o vínculo sozinha.',
        distancia: 'Dividam despesas, tempo e esforços de forma justa para que nenhum dos dois se sinta explorado.',
        amor_proprio: 'Solte aquilo que não é sua responsabilidade curar ou resolver na vida dos outros.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Que pesos desnecessários podemos soltar juntos para que nosso casal volte a respirar leve?',
      conhecendo_alguem: 'Estou me esforçando o dobro do que a outra pessoa tem demonstrado?',
      distancia: 'A divisão de custos e esforços da distância está verdadeiramente equilibrada?',
      amor_proprio: 'Qual fardo emocional de terceiros eu preciso devolver para o dono hoje?'
    },
    microActions: {
      meu_relacionamento: 'Peça ajuda claramente ao parceiro em algo prático hoje em vez de reclamar depois.',
      conhecendo_alguem: 'Espere a outra pessoa sugerir o próximo assunto ou encontro.',
      distancia: 'Conversem com sinceridade sobre a divisão do cansaço e das viagens.',
      amor_proprio: 'Diga um "não posso agora" sem justificativas longas para preservar seu descanso.'
    }
  },
  {
    id: 46,
    name: 'Pajem de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: 'Pajem',
    element: 'Fogo',
    image: '/cards/card_46.jpg',
    keywords: ['Entusiasmo Jovem', 'Curiosidade Quente', 'Convite Divertido', 'Aventura'],
    archetype: 'O Mensageiro da Chama',
    generalLoveMeaning: 'O Pajem de Paus traz um recado espontâneo e animado, vontade de explorar caminhos inéditos e a alegria de flertar sem amarras.',
    loveRelationshipMeaning: 'Novos estímulos, brincadeiras a dois e curiosidade alegre para descobrir novos gostos no parceiro.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Hora de trazer um novo sopro de entusiasmo: planejem um passeio diferente ou aprendam algo novo juntos.',
        conhecendo_alguem: 'Aproximação divertida e empolgante; as conversas fluem com curiosidade mútua e bom humor.',
        distancia: 'Uma ideia criativa para animar a rotina à distância trará boas risadas e calor ao vínculo.',
        amor_proprio: 'Permita-se experimentar algo inédito: um novo esporte, visual ou hobby que desperte sua alegria.'
      },
      desafio: {
        meu_relacionamento: 'A dispersão empolgada que começa mil coisas e não conclui nenhuma na vida a dois.',
        conhecendo_alguem: 'Ficar apenas no fogo de palha da empolgação momentânea que se apaga no primeiro obstáculo.',
        distancia: 'A ansiedade querendo tudo para ontem gerando frustração desnecessária.',
        amor_proprio: 'A falta de foco em seus próprios objetivos afetivos, trocando de metas a cada semana.'
      },
      orientacao: {
        meu_relacionamento: 'Proponha uma aventura simples e inédita para o casal no fim de semana.',
        conhecendo_alguem: 'Mostre seu lado autêntico, curioso e animado; o entusiasmo sincero é profundamente atraente.',
        distancia: 'Usem a imaginação: proponham jogos virtuais divertidos ou façam um desafio a dois.',
        amor_proprio: 'Permita-se ser iniciante em algo novo com alegria, sem medo de errar ou de parecer boba.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual ideia divertida e fora do comum podemos colocar em prática nesta semana?',
      conhecendo_alguem: 'Essa conexão me desperta vontade de viver ou ansiedade e cansaço?',
      distancia: 'Como podemos trazer mais espontaneidade para as nossas conversas à distância?',
      amor_proprio: 'O que desperta minha curiosidade e entusiasmo genuíno ultimamente?'
    },
    microActions: {
      meu_relacionamento: 'Sugira uma atividade inédita para fazerem juntos (uma receita nova, um parque diferente).',
      conhecendo_alguem: 'Faça uma pergunta divertida e curiosa sobre os gostos mais inusitados da pessoa.',
      distancia: 'Envie um vídeo curto mostrando algo curioso que você viu na rua hoje.',
      amor_proprio: 'Experimente usar uma roupa com uma cor viva que você quase nunca usa.'
    }
  },
  {
    id: 47,
    name: 'Cavaleiro de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: 'Cavaleiro',
    element: 'Fogo',
    image: '/cards/card_47.jpg',
    keywords: ['Paixão Impulsiva', 'Atitude Ousada', 'Aventura Fervorosa', 'Magnetismo'],
    archetype: 'O Guerreiro da Paixão',
    generalLoveMeaning: 'O Cavaleiro de Paus cavalga com audácia, desejo ardente e atitude resoluta, pronto para viver a intensidade do amor sem medir consequências.',
    loveRelationshipMeaning: 'Energia de conquista vibrante, mas que exige maturidade para não virar fogo de palha inconstante.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O momento pede dinamismo, atitude decidida e ação calorosa para quebrar qualquer monotonia.',
        conhecendo_alguem: 'A atração é vulcânica e intensa; a pessoa demonstra iniciativa arrojada para estar com você.',
        distancia: 'Vontade irresistível de encurtar o tempo e pegar a estrada sem pensar duas vezes.',
        amor_proprio: 'Você está recuperando sua coragem para se expor, flertar e viver o amor com todo o seu calor.'
      },
      desafio: {
        meu_relacionamento: 'A impaciência agressiva, o pavio curto ou a instabilidade que causa brigas repentinas.',
        conhecendo_alguem: 'A paixão fulminante que consome tudo rápido demais e perde o interesse quando a rotina chega.',
        distancia: 'Decisões impulsivas tomadas no calor da emoção que depois geram dor de cabeça prática.',
        amor_proprio: 'Deixar-se levar por impulsos cegos apenas para suprir uma necessidade urgente de afirmação.'
      },
      orientacao: {
        meu_relacionamento: 'Canalizem o fogo da paixão para aventuras conjuntas e diálogos entusiasmados, mantendo o bom humor.',
        conhecendo_alguem: 'Aproveite o calor da conquista, mas preserve seu centro: observe se há estabilidade por trás do fogo.',
        distancia: 'Usem essa energia para transformar a saudade em planos objetivos de reencontro e celebração.',
        amor_proprio: 'Seja ousada e corajosa em relação aos seus sonhos: tome uma atitude decidida pelo que você quer.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos canalizar nossa energia apaixonada sem cair em reatividades explosivas?',
      conhecendo_alguem: 'Essa atração intensa tem base para virar relacionamento ou é apenas uma aventura de momento?',
      distancia: 'Nossa paixão está sendo combustível para a união ou faísca para brigas de impaciência?',
      amor_proprio: 'O que estou pronta para conquistar com a força do meu magnetismo pessoal?'
    },
    microActions: {
      meu_relacionamento: 'Surpreenda seu parceiro com um beijo apaixonado no meio de uma tarefa rotineira.',
      conhecendo_alguem: 'Mantenha o mistério e o charme: não entregue todas as suas cartas na primeira conversa.',
      distancia: 'Proponha uma chamada em vídeo com clima especial para matar a saudade com calor.',
      amor_proprio: 'Afirme com convicção: "Eu tenho a força e o magnetismo para construir a vida que desejo".'
    }
  },
  {
    id: 48,
    name: 'Rainha de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: 'Rainha',
    element: 'Fogo',
    image: '/cards/card_48.jpg',
    keywords: ['Confiança Radiante', 'Magnetismo Caloroso', 'Independência', 'Luz Própria'],
    archetype: 'A Soberana Solar',
    generalLoveMeaning: 'A Rainha de Paus transborda charme, generosidade solar, amor-próprio vibrante e a certeza de quem sabe exatamente o valor de sua presença.',
    loveRelationshipMeaning: 'Um relacionamento onde há admiração mútua por parceiros fortes, independentes e calorosos.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Sua energia calorosa e confiante é o sol que ilumina a relação. O companheirismo e o desejo estão em alta.',
        conhecendo_alguem: 'Você exala magnetismo e segurança; a outra pessoa fica fascinada pela sua luz própria e alegria de viver.',
        distancia: 'Sua independência e entusiasmo pessoal garantem que a distância seja vivida com leveza e sem carência dramática.',
        amor_proprio: 'Você está no ápice do seu poder pessoal: dona de si, generosa, vibrante e sem necessidade de validação alheia.'
      },
      desafio: {
        meu_relacionamento: 'O autoritarismo disfarçado de generosidade, querendo controlar tudo à sua maneira.',
        conhecendo_alguem: 'Intimidar a outra pessoa com excesso de orgulho ou postura inatingível.',
        distancia: 'Sentir ciúmes quando a outra pessoa não coloca você no centro das atenções o tempo todo.',
        amor_proprio: 'A dependência de estar sempre no papel da mulher forte que nunca pode demonstrar fraqueza.'
      },
      orientacao: {
        meu_relacionamento: 'Irradie carinho e otimismo: um elogio generoso seu levanta o ânimo do seu parceiro imediatamente.',
        conhecendo_alguem: 'Seja você mesma em sua plenitude: não diminua sua luz para fazer o outro se sentir confortável.',
        distancia: 'Mantenha sua vida social e seus projetos vibrando; sua alegria é o maior atrativo para o reencontro.',
        amor_proprio: 'Coloque sua roupa favorita, sorria para a vida e celebre sua autonomia e sua beleza radiante.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como minha luz e entusiasmo podem aquecer o dia a dia do nosso casal?',
      conhecendo_alguem: 'Estou sendo verdadeira com meu poder pessoal ou me diminuindo para agradar?',
      distancia: 'Como posso me manter solar e cheia de vida enquanto aguardo o momento de estarmos juntos?',
      amor_proprio: 'Eu reconheço e celebro o quanto sou uma pessoa magnética e admirável?'
    },
    microActions: {
      meu_relacionamento: 'Prepare algo animado para os dois hoje e seja a fonte de riso e entusiasmo da noite.',
      conhecendo_alguem: 'Fale sobre suas paixões profissionais ou artísticas com brilho nos olhos.',
      distancia: 'Mande uma foto linda e espontânea do seu dia com um recado caloroso.',
      amor_proprio: 'Compre uma flor girassol ou acenda uma vela dourada para celebrar seu brilho.'
    }
  },
  {
    id: 49,
    name: 'Rei de Paus',
    arcana: 'menor',
    suit: 'paus',
    rank: 'Rei',
    element: 'Fogo',
    image: '/cards/card_49.jpg',
    keywords: ['Liderança Afetiva', 'Nobreza', 'Visão Corajosa', 'Maturidade de Fogo'],
    archetype: 'O Soberano da Chama',
    generalLoveMeaning: 'O Rei de Paus lidera pelo exemplo de integridade, entusiasmo nobre, coragem diante de desafios e lealdade apaixonada.',
    loveRelationshipMeaning: 'Compromisso com atitudes de honra, generosidade protetora e clareza de rumo na vida a dois.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O casal conta com maturidade, atitudes nobres e firmeza para tomar decisões e liderar os rumos da família.',
        conhecendo_alguem: 'A pessoa demonstra postura madura, determinação e intenções claras, sem joguinhos infantis.',
        distancia: 'A lealdade apaixonada e a firmeza de propósitos sustentam a união com total confiança no futuro.',
        amor_proprio: 'Você é o soberano da sua própria trajetória: sabe o que quer, lidera seus sentimentos e não aceita desrespeito.'
      },
      desafio: {
        meu_relacionamento: 'A intolerância à lentidão do parceiro ou a postura impositiva de quem quer dar a última palavra.',
        conhecendo_alguem: 'Achar que precisa conduzir tudo sozinho sem dar espaço para a espontaneidade do outro.',
        distancia: 'A frustração diante de atrasos na resolução prática da distância.',
        amor_proprio: 'Exigir de si mesmo uma perfeição heróica que não permite momentos de descanso e dúvida.'
      },
      orientacao: {
        meu_relacionamento: 'Lidere com generosidade e inspiração: mostre o caminho com amor em vez de impor ordens.',
        conhecendo_alguem: 'Seja clara e direta sobre suas intenções; a nobreza de atitudes atrai reciprocidade de alto nível.',
        distancia: 'Mantenham o foco no objetivo comum de vocês; a firmeza de propósitos supera qualquer distância.',
        amor_proprio: 'Honre sua palavra para consigo mesma e tome uma decisão de respeito pelo seu coração.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou liderando nossa parceria com inspiração ou querendo impor minhas vontades?',
      conhecendo_alguem: 'Essa pessoa demonstra a nobreza de caráter que considero indispensável?',
      distancia: 'Como podemos demonstrar que nossa determinação de ficar juntos é maior que a distância?',
      amor_proprio: 'Quais princípios do meu código de honra afetivo são inegociáveis para mim?'
    },
    microActions: {
      meu_relacionamento: 'Tome a iniciativa para resolver um assunto que estava pendente entre vocês com tranquilidade.',
      conhecendo_alguem: 'Posicione-se com clareza e elegância sobre o que você espera de uma relação saudável.',
      distancia: 'Reafirme sua lealdade e compromisso com o parceiro em uma conversa franca.',
      amor_proprio: 'Olhe-se no espelho com postura ereta e sinta a nobreza de quem você é.'
    }
  },

  // ==========================================
  // NAIPE DE ESPADAS (SWORDS) - IDs 50 a 63
  // ==========================================
  {
    id: 50,
    name: 'Ás de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: 'Ás',
    element: 'Ar',
    image: '/cards/card_50.jpg',
    keywords: ['Clareza Mental', 'Verdade Cortante', 'Conversa Franca', 'Discernimento'],
    archetype: 'A Espada da Verdade',
    generalLoveMeaning: 'O Ás de Espadas corta ilusões, traz clareza absoluta para situações confusas e convida a uma conversa honesta que liberta.',
    loveRelationshipMeaning: 'Momento de encarar os fatos como eles são, alinhando a verdade com coragem e sem rodeios.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Chegou o momento de uma conversa franca e decisiva para esclarecer ruídos que estavam incomodando.',
        conhecendo_alguem: 'Você está enxergando a situação com total lucidez, sem se deixar levar por meias-palavras ou ilusões.',
        distancia: 'Necessidade de transparência total sobre sentimentos, planos e limites durante a distância.',
        amor_proprio: 'Um estalo de lucidez: você reconhece o que realmente quer e corta de vez laços que drenam sua dignidade.'
      },
      desafio: {
        meu_relacionamento: 'A agressividade nas palavras, usando a franqueza como arma para ferir em vez de curar.',
        conhecendo_alguem: 'Ser fria e calculista demais a ponto de não dar espaço para a emoção florescer.',
        distancia: 'Discussões ríspidas por mensagens escritas mal interpretadas no calor do momento.',
        amor_proprio: 'Autocrítica severa e impiedosa que corta sua autoestima em vez de acolher suas falhas humanas.'
      },
      orientacao: {
        meu_relacionamento: 'Falem a verdade com serenidade. A clareza liberta o casal de anos de mal-entendidos.',
        conhecendo_alguem: 'Seja direta sobre suas intenções e limites desde o começo; a verdade poupa decepções futuras.',
        distancia: 'Alinhem tudo por chamada de vídeo, olhando nos olhos para que as palavras tenham tom de respeito.',
        amor_proprio: 'Corte sem remorso hábitos e pensamentos que diminuem sua luz e seu amor-próprio.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual verdade importante nós dois estamos evitando colocar na mesa?',
      conhecendo_alguem: 'Estou sendo transparente sobre o que espero e sobre quem realmente sou?',
      distancia: 'Qual acordo precisa ser esclarecido com urgência para que tenhamos paz?',
      amor_proprio: 'De qual ilusão sobre o amor estou pronta para me libertar hoje?'
    },
    microActions: {
      meu_relacionamento: 'Aborde com calma aquele assunto que você vinha engolindo para evitar conflito.',
      conhecendo_alguem: 'Diga com elegância o que você busca em um relacionamento.',
      distancia: 'Escreva seus pensamentos antes de conversar para escolher palavras justas e serenas.',
      amor_proprio: 'Cancele a assinatura de conteúdos ou perfis que fazem você se sentir inadequada.'
    }
  },
  {
    id: 51,
    name: 'Dois de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '2',
    element: 'Ar',
    image: '/cards/card_51.jpg',
    keywords: ['Impasse Mental', 'Olhos Vendados', 'Dúvida Paralisante', 'Trégua Tensa'],
    archetype: 'A Guardiã no Limiar',
    generalLoveMeaning: 'O Dois de Espadas reflete a recusa em enxergar a realidade ou tomar uma decisão difícil, mantendo os olhos vendados por medo do conflito.',
    loveRelationshipMeaning: 'Bloqueio de comunicação e silêncio tenso onde ambos evitam tocar no ponto nevrálgico da relação.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Há um impasse não resolvido gerando frieza ou silêncio constrangedor entre vocês.',
        conhecendo_alguem: 'Você está indecisa e dividida, sem saber se deve abrir o coração ou recuar.',
        distancia: 'A incerteza sobre o que o outro sente gerando paralisia e falta de posicionamento.',
        amor_proprio: 'Você está evitando encarar uma verdade desconfortável sobre seus sentimentos mais íntimos.'
      },
      desafio: {
        meu_relacionamento: 'Permanecer no silêncio passivo-agressivo esperando que o outro tome a atitude.',
        conhecendo_alguem: 'Ficar em cima do muro por tanto tempo que a oportunidade de conexão se perde.',
        distancia: 'O fechamento emocional que transforma a distância física em abismo de silêncio.',
        amor_proprio: 'Enganar a si mesma para não ter que enfrentar a dor passageira de uma escolha necessária.'
      },
      orientacao: {
        meu_relacionamento: 'Tire a venda dos olhos: abaixem as espadas cruzadas e comecem a escutar o que está por trás do medo.',
        conhecendo_alguem: 'Saia da defensiva; permita-se sentir antes de analisar tudo obsessivamente com a mente.',
        distancia: 'Quebre o silêncio com uma mensagem afetuosa e abra espaço para um diálogo sincero.',
        amor_proprio: 'Encare os fatos com coragem: sua intuição já sabe qual é a melhor decisão para sua paz.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que estou fingindo que não vejo para evitar uma discussão necessária?',
      conhecendo_alguem: 'Por que estou com tanto medo de tomar uma posição clara nessa aproximação?',
      distancia: 'Como podemos quebrar o muro de silêncio que se instalou entre nós?',
      amor_proprio: 'Qual verdade sobre minha vida afetiva estou pronta para admitir para mim mesma?'
    },
    microActions: {
      meu_relacionamento: 'Diga com suavidade: "Percebo que estamos nos esquivando de um assunto; podemos conversar com calma?".',
      conhecendo_alguem: 'Tome uma decisão clara sobre aceitar ou recusar o próximo convite.',
      distancia: 'Mande uma mensagem calorosa quebrando qualquer clima frio que tenha surgido.',
      amor_proprio: 'Tire 10 minutos de silêncio respirando fundo e tirando a venda dos seus medos.'
    }
  },
  {
    id: 52,
    name: 'Três de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '3',
    element: 'Ar',
    image: '/cards/card_52.jpg',
    keywords: ['Coração Ferido', 'Dor da Verdade', 'Cicatrização', 'Desilusão Necessária'],
    archetype: 'O Coração Perfurado pelas Espadas',
    generalLoveMeaning: 'O Três de Espadas representa a dor honesta do desapontamento ou da mágoa, lembrando que reconhecer a ferida é o primeiro passo para a cura real.',
    loveRelationshipMeaning: 'Palavras que doeram ou uma decepção que exige acolhimento sensível para não virar amargura crônica.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Uma discussão ou atitude recente feriu sentimentos íntimos. O momento pede acolhimento da dor para poder curar.',
        conhecendo_alguem: 'Uma desilusão precoce ou uma lembrança dolorosa de outra história está vindo à tona.',
        distancia: 'A dor da solidão ou uma conversa truncada gerou sofrimento temporário no coração.',
        amor_proprio: 'Permitir-se chorar e reconhecer que certas coisas machucaram, sem fingir que está tudo bem.'
      },
      desafio: {
        meu_relacionamento: 'Remoer a mágoa e usar o sofrimento como moeda de chantagem emocional contra o parceiro.',
        conhecendo_alguem: 'Projetar a dor do coração partido anterior na nova pessoa que não tem culpa de nada.',
        distancia: 'Afundar no sofrimento solitário sem comunicar ao outro como você realmente se sente.',
        amor_proprio: 'Achar que você está destinada a sofrer no amor ou que seu coração nunca mais se recuperará.'
      },
      orientacao: {
        meu_relacionamento: 'Conversem com o coração aberto: admitam que houve dor, peçam desculpas sinceras e comecem a cura.',
        conhecendo_alguem: 'Se essa pessoa demonstrou atitudes que feriram seus valores básicos, afaste-se antes de criar laços mais profundos.',
        distancia: 'Acolha sua saudade como sinal de afeto, mas não se afogue em tristezas desnecessárias.',
        amor_proprio: 'Trate sua ferida com amor: chore o que tiver que chorar, coloque um curativo e lembre-se de que a tempestade passa.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que doeu de verdade naquela conversa e como posso expressar isso sem acusar?',
      conhecendo_alguem: 'Estou lidando com a dor real do presente ou com fantasmas do passado?',
      distancia: 'Como posso confortar meu coração nos dias em que a ausência parece doer mais?',
      amor_proprio: 'Qual ferida antiga do meu coração merece meu perdão e carinho agora?'
    },
    microActions: {
      meu_relacionamento: 'Diga com serenidade: "Aquilo que você disse me machucou; podemos conversar sobre como me senti?".',
      conhecendo_alguem: 'Acolha seus sentimentos sem tentar justificar comportamentos grosseiros do outro.',
      distancia: 'Coloque a mão sobre o coração, feche os olhos e respire até a dor diminuir.',
      amor_proprio: 'Escreva em um diário sobre sua mágoa e encerre com: "Eu me perdoo, eu me curo e sigo em frente".'
    }
  },
  {
    id: 53,
    name: 'Quatro de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '4',
    element: 'Ar',
    image: '/cards/card_53.jpg',
    keywords: ['Trégua Mental', 'Descanso Curativo', 'Pausa', 'Restauração'],
    archetype: 'O Cavaleiro em Repouso',
    generalLoveMeaning: 'O Quatro de Espadas aconselha uma trégua estratégica: recolher a mente, descansar o coração e recuperar as energias antes de tomar decisões.',
    loveRelationshipMeaning: 'Pausa nas discussões para que a poeira assente e ambos possam respirar longe do estresse.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O momento pede trégua e descanso. Não toquem em assuntos polêmicos hoje; desfrutem do silêncio que cura.',
        conhecendo_alguem: 'Dê um tempo para assimilar as coisas com calma; não force encontros se sua mente estiver cansada.',
        distancia: 'Aproveite a distância para descansar sua mente de cobranças e recuperar sua serenidade interior.',
        amor_proprio: 'Recolhimento sagrado: você precisa de sono de qualidade, silêncio e descompressão emocional.'
      },
      desafio: {
        meu_relacionamento: 'A teimosia em continuar insistindo em discussões quando os dois estão exaustos.',
        conhecendo_alguem: 'A ansiedade querendo mandar mensagens sem parar por medo do silêncio.',
        distancia: 'Confundir o descanso necessário com frieza ou desinteresse do outro.',
        amor_proprio: 'A culpa por querer ficar sozinha e descansar sem dar satisfação a ninguém.'
      },
      orientacao: {
        meu_relacionamento: 'Proponham uma trégua amorosa: "Hoje vamos apenas descansar e recarregar nossas energias juntos".',
        conhecendo_alguem: 'Dê espaço para que a saudade faça seu trabalho; não tente preencher todos os minutos do dia.',
        distancia: 'Use a noite para dormir bem e silenciar as notificações do celular.',
        amor_proprio: 'Tire o dia de hoje para não tomar nenhuma decisão importante sobre relacionamentos: apenas descanse.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos dar um descanso para a nossa mente e aliviar a tensão do casal?',
      conhecendo_alguem: 'Estou sabendo respeitar o meu tempo e o tempo da outra pessoa?',
      distancia: 'O que posso fazer para que minha noite de sono seja profunda e restauradora?',
      amor_proprio: 'Estou me permitindo fazer uma pausa sem me culpar por não estar produtiva?'
    },
    microActions: {
      meu_relacionamento: 'Combine de não falar sobre problemas ou contas hoje à noite.',
      conhecendo_alguem: 'Desconecte-se das redes por algumas horas e leia um livro relaxante.',
      distancia: 'Deseje uma boa noite serena e durma sem ficar vigiando o horário do último acesso.',
      amor_proprio: 'Deite-se no escuro por 15 minutos em completo silêncio, apenas sentindo o corpo relaxar.'
    }
  },
  {
    id: 54,
    name: 'Cinco de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '5',
    element: 'Ar',
    image: '/cards/card_54.jpg',
    keywords: ['Vitória Vazia', 'Conflito Amargo', 'Desarmar o Ego', 'Perda da Paz'],
    archetype: 'O Vencedor Solitário',
    generalLoveMeaning: 'O Cinco de Espadas adverte sobre discussões onde se quer vencer a qualquer custo, esquecendo que vencer no amor machucando o parceiro é a maior derrota.',
    loveRelationshipMeaning: 'Risco de trocas de acusações ácidas que deixam feridas profundas e um gosto amargo de solidão.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Houve discussões ácidas onde o ego falou mais alto. É hora de reconhecer que ninguém ganha quando o casal se machuca.',
        conhecendo_alguem: 'Cuidado com pessoas que adoram debater, apontar falhas alheias e sempre ter a última palavra.',
        distancia: 'Discussões por texto onde o sarcasmo ou a ironia geraram ressentimentos amargos.',
        amor_proprio: 'A autossabotagem de ficar se punindo e se acusando mentalmente por erros que já passaram.'
      },
      desafio: {
        meu_relacionamento: 'O orgulho rancoroso que se recusa a pedir desculpas mesmo sabendo que passou dos limites.',
        conhecendo_alguem: 'Ficar em um vínculo tóxico onde há humilhações veladas ou jogos de superioridade.',
        distancia: 'Terminar conversas com grosseria e deixar o outro sofrendo no vácuo da distância.',
        amor_proprio: 'Manter conversas internas destrutivas que diminuem seu valor como mulher ou homem.'
      },
      orientacao: {
        meu_relacionamento: 'Larguem as espadas recolhidas no chão. Peçam perdão pelos excessos e escolham a paz em vez da razão.',
        conhecendo_alguem: 'Se a pessoa demonstra ironia destrutiva ou arrogância, afaste-se: isso só piora com o tempo.',
        distancia: 'Peça desculpas por mensagens ásperas e conversem de forma afetuosa.',
        amor_proprio: 'Pare de se maltratar. Diga mentalmente: "Eu escolho ser minha amiga e me tratar com gentileza".'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Vale a pena ter razão e destruir a paz do relacionamento?',
      conhecendo_alguem: 'Essa pessoa me trata com generosidade ou com ironia e arrogância?',
      distancia: 'O que posso fazer para desfazer a amargura de uma conversa recente?',
      amor_proprio: 'Como posso parar de ser minha maior juíza e passar a ser minha maior defensora?'
    },
    microActions: {
      meu_relacionamento: 'Diga com humildade: "Exagerei no tom da conversa; me desculpe, você é importante para mim".',
      conhecendo_alguem: 'Não aceite piadas depreciativas sobre sua personalidade ou aparência.',
      distancia: 'Envie uma mensagem apaziguadora restabelecendo o respeito entre vocês.',
      amor_proprio: 'Escreva um erro que cometeu e risque-o dizendo: "Errei, aprendi e agora me perdoo".'
    }
  },
  {
    id: 55,
    name: 'Seis de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '6',
    element: 'Ar',
    image: '/cards/card_55.jpg',
    keywords: ['Travessia Serena', 'Águas Mais Calmas', 'Deixar a Tempestade', 'Transição'],
    archetype: 'O Barqueiro das Águas Tranqüilas',
    generalLoveMeaning: 'O Seis de Espadas indica a travessia corajosa para longe de tempestades afetivas, navegando com maturidade em direção à calmaria e à cura.',
    loveRelationshipMeaning: 'Deixar crises para trás e entrar em um período de alívio, entendimento sereno e reconstrução.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'A fase turbulenta está ficando para trás. Vocês estão navegando em direção a águas muito mais tranquilas e doces.',
        conhecendo_alguem: 'Essa nova aproximação funciona como uma brisa suave que ajuda você a deixar dores passadas para trás.',
        distancia: 'A transição para um período de maior estabilidade; a tempestade da incerteza está se dissipando.',
        amor_proprio: 'Você tomou a decisão de deixar para trás ambientes tóxicos e caminhar rumo à sua paz de espírito.'
      },
      desafio: {
        meu_relacionamento: 'Ficar olhando para trás e relembrando os momentos difíceis em vez de focar na calmaria à frente.',
        conhecendo_alguem: 'Carregar bagagens pesadas da relação anterior para dentro do barco da nova história.',
        distancia: 'O medo de que a calmaria seja passageira e que novas crises venham a qualquer momento.',
        amor_proprio: 'A dificuldade de aceitar a paz por estar acostumada com tempestades e dramas contínuos.'
      },
      orientacao: {
        meu_relacionamento: 'Olhem para a frente. O pior da crise já passou; celebrem a travessia e mantenham o barco estável com carinho.',
        conhecendo_alguem: 'Permita que essa conexão leve você a lugares mais calmos e acolhedores de afeto.',
        distancia: 'Confiem na direção que estão tomando; as águas calmas trarão a resolução que vocês esperam.',
        amor_proprio: 'Deixe ir o que pesava no seu barco mental: perdoe o passado e aprecie o horizonte sereno.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que precisamos deixar de vez na margem antiga para desfrutarmos da paz que conquistamos?',
      conhecendo_alguem: 'Estou permitindo que essa história seja mais calma e pacífica que as anteriores?',
      distancia: 'Como a superação dessa fase de distância fortalecerá nossa parceria no futuro?',
      amor_proprio: 'Consigo relaxar e usufruir da tranquilidade sem esperar uma nova tempestade?'
    },
    microActions: {
      meu_relacionamento: 'Olhem para o futuro juntos e façam um plano simples e relaxante para o fim de semana.',
      conhecendo_alguem: 'Aprecie uma conversa calma sem pressa de que aconteçam reviravoltas dramáticas.',
      distancia: 'Respire aliviada: reconheça que vocês já superaram as fases mais duras da separação.',
      amor_proprio: 'Faça um descarte de mensagens antigas de mágoas para limpar seu horizonte emocional.'
    }
  },
  {
    id: 56,
    name: 'Sete de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '7',
    element: 'Ar',
    image: '/cards/card_56.jpg',
    keywords: ['Evasão', 'Meias-Verdades', 'Estratégia Oculta', 'Alerta de Sinceridade'],
    archetype: 'O Estrategista das Sombras',
    generalLoveMeaning: 'O Sete de Espadas alerta para evasivas, atitudes que fogem de conversas claras ou o risco de enganar a si mesma para não ver os fatos.',
    loveRelationshipMeaning: 'Necessidade de transparência total: meias-verdades e omissões minam a confiança mútua.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Pode haver omissões ou sentimentos escondidos por medo de magoar. A sinceridade é indispensável.',
        conhecendo_alguem: 'Observe se as histórias contadas pela pessoa fazem sentido ou se há evasivas e contradições.',
        distancia: 'A distância facilita esconder rotinas ou sentimentos; é fundamental cultivar a verdade transparente.',
        amor_proprio: 'Cuidado para não mentir para si mesma justificando atitudes inaceitáveis dos outros.'
      },
      desafio: {
        meu_relacionamento: 'A fuga pelas beiradas para não assumir erros ou ter conversas difíceis cara a cara.',
        conhecendo_alguem: 'A desonestidade emocional: estar com a pessoa apenas para não ficar só ou para inflar o ego.',
        distancia: 'A tentação de agir pelas costas ou omitir informações que deveriam ser compartilhadas.',
        amor_proprio: 'Enganar seu próprio coração fingindo que está feliz em uma relação que só te desgasta.'
      },
      orientacao: {
        meu_relacionamento: 'Joguem limpo. Conversem com total honestidade: a verdade dita a tempo salva o relacionamento.',
        conhecendo_alguem: 'Observe com atenção: se algo não soar verdadeiro, confie no seu instinto e investigue com calma.',
        distancia: 'Mantenham a transparência cristalina sobre horários e planos para evitar desconfianças.',
        amor_proprio: 'Seja honesta consigo mesma: encare a realidade sem filtros cor-de-rosa.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Há alguma coisa que estou omitindo ou que meu parceiro está hesitando em contar?',
      conhecendo_alguem: 'Sinto coerência nas histórias dessa pessoa ou percebo detalhes escorregadios?',
      distancia: 'Como podemos reforçar nosso pacto de honestidade e transparência total?',
      amor_proprio: 'O que estou fingindo não saber para não ter que tomar uma atitude?'
    },
    microActions: {
      meu_relacionamento: 'Pergunte abertamente: "Sinto que há algo que você quer falar; pode se abrir comigo sem medo".',
      conhecendo_alguem: 'Preste atenção em atitudes incoerentes com o discurso da pessoa.',
      distancia: 'Compartilhe sua rotina com clareza para manter o canal de confiança totalmente aberto.',
      amor_proprio: 'Admita em voz alta para si mesma uma verdade que você vinha tentando esconder.'
    }
  },
  {
    id: 57,
    name: 'Oito de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '8',
    element: 'Ar',
    image: '/cards/card_57.jpg',
    keywords: ['Prisão Mental', 'Crenças Limitantes', 'Vitimismo Ilusório', 'Libertação Possível'],
    archetype: 'A Prisioneira Ilusória',
    generalLoveMeaning: 'O Oito de Espadas mostra que as amarras que prendem você no amor são mentais: as cordas estão frouxas e você pode dar um passo e se libertar quando quiser.',
    loveRelationshipMeaning: 'Sentir-se encurralada por medos criados pela própria mente em vez de enxergar as saídas reais.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Você pode estar se sentindo presa ou impotente, mas as saídas existem: basta dar voz aos seus limites.',
        conhecendo_alguem: 'Medo exagerado de se vincular por achar que relacionamentos sempre tiram a liberdade da pessoa.',
        distancia: 'A sensação de prisão pela espera; lembre-se de que sua vida não está suspensa por causa da distância.',
        amor_proprio: 'Crenças limitantes do tipo "eu não tenho sorte no amor" ou "ninguém vai me querer como sou".'
      },
      desafio: {
        meu_relacionamento: 'Acomodar-se no papel de vítima de situações difíceis em vez de tomar atitudes ativas.',
        conhecendo_alguem: 'Paralisar na insegurança e sabotar a aproximação antes mesmo de tentar.',
        distancia: 'Ficar presa dentro de casa esperando a pessoa voltar enquanto a vida lá fora continua.',
        amor_proprio: 'Acreditar nas mentiras que a sua ansiedade conta sobre a sua capacidade de ser amada.'
      },
      orientacao: {
        meu_relacionamento: 'Tire a venda dos olhos: você tem muito mais poder de transformação do que imagina. Posicione-se.',
        conhecendo_alguem: 'Relaxe as amarras mentais; o amor saudável não é uma gaiola, é um espaço de expansão.',
        distancia: 'Saia de casa, viva sua rotina e não condicione toda a sua alegria à presença física do parceiro.',
        amor_proprio: 'Desmonte agora mesmo a crença de que você não pode ser feliz: dê um passo firme em direção à sua liberdade.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que estou acreditando que me aprisiona que na verdade é apenas um medo meu?',
      conhecendo_alguem: 'Estou me sabotando por achar que vou perder minha independência?',
      distancia: 'Que atividades prazerosas estou deixando de viver por causa da espera da distância?',
      amor_proprio: 'Qual pensamento limitante sobre o amor estou pronta para soltar e desmentir?'
    },
    microActions: {
      meu_relacionamento: 'Exponha sua opinião com clareza em uma decisão conjunta em vez de concordar calada.',
      conhecendo_alguem: 'Dê uma resposta honesta sem medo de como a pessoa vai julgar você.',
      distancia: 'Marque um passeio individual ou com amigos que traga alegria ao seu dia.',
      amor_proprio: 'Diga em voz alta: "Eu sou livre, sou capaz e sou dona do meu próprio destino amoroso".'
    }
  },
  {
    id: 58,
    name: 'Nove de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '9',
    element: 'Ar',
    image: '/cards/card_58.jpg',
    keywords: ['Ansiedade Noturna', 'Sofrimento Antecipado', 'Pensamentos Obsessivos', 'Amanhecer Próximo'],
    archetype: 'O Despertar da Ansiedade',
    generalLoveMeaning: 'O Nove de Espadas representa as noites mal dormidas por ansiedade e fantasias de medo que 99% das vezes nunca se concretizam.',
    loveRelationshipMeaning: 'Cenários catastróficos criados pela mente que roubam a paz de espírito e a serenidade do coração.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Você pode estar sofrendo por antecipação, criando problemas na cabeça que não existem na realidade.',
        conhecendo_alguem: 'A ansiedade querendo controlar cada detalhe e temendo a rejeição antes mesmo de ela acontecer.',
        distancia: 'A noite e o silêncio da distância amplificando medos irreais sobre o que o outro está fazendo.',
        amor_proprio: 'Crise de autodepreciação mental: sua mente está sendo sua pior inimiga neste momento.'
      },
      desafio: {
        meu_relacionamento: 'Despejar no parceiro cobranças provocadas por paranoias geradas na insônia.',
        conhecendo_alguem: 'Afastar a pessoa com mensagens desesperadas escritas no calor da ansiedade noturna.',
        distancia: 'Ficar checando horários e status de redes sociais de madrugada em um ciclo de tortura mental.',
        amor_proprio: 'Acreditar em todos os pensamentos catastróficos que surgem quando você está cansada.'
      },
      orientacao: {
        meu_relacionamento: 'Não tome decisões nem discuta nada tarde da noite. Espere o sol nascer para ver as coisas com lucidez.',
        conhecendo_alguem: 'Acalme sua mente: o que tiver que ser seu encontrará um caminho natural sem você precisar se desesperar.',
        distancia: 'Desconecte o celular antes de dormir e confie naquilo que foi conversado à luz do dia.',
        amor_proprio: 'Acolha sua vulnerabilidade com carinho: seus medos são compreensíveis, mas não são verdades absolutas.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Quantos dos medos que estão me tirando o sono são fatos reais e quantos são suposições?',
      conhecendo_alguem: 'Por que estou antecipando o fim ou a dor de uma história que mal começou?',
      distancia: 'O que posso fazer para acalmar meus pensamentos quando a saudade aperta à noite?',
      amor_proprio: 'Como posso falar comigo mesma de forma doce e reconfortante quando sinto ansiedade?'
    },
    microActions: {
      meu_relacionamento: 'Se sentir angústia à noite, respire e deixe para conversar no dia seguinte após descansar.',
      conhecendo_alguem: 'Não envie mensagens impulsivas de madrugada.',
      distancia: 'Tome um chá de camomila ou melissa e coloque uma meditação guiada para dormir.',
      amor_proprio: 'Abrace um travesseiro, respire fundo e repita: "Está tudo bem no presente, eu estou segura".'
    }
  },
  {
    id: 59,
    name: 'Dez de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: '10',
    element: 'Ar',
    image: '/cards/card_59.jpg',
    keywords: ['Fim de Ciclo Doloroso', 'Fundo do Poço', 'Renascer da Luz', 'Alívio'],
    archetype: 'O Alvorecer Dourado',
    generalLoveMeaning: 'O Dez de Espadas marca o ponto final definitivo de uma situação dolorosa; a tempestade atingiu o ápice e agora só resta o renascimento da luz no horizonte.',
    loveRelationshipMeaning: 'Encerramento de ilusões ou padrões desgastantes; o alívio de saber que a dor já não pode mais piorar e que a cura começou.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Um modo antigo e doentio de brigar ou se relacionar chegou ao fim definitivo. Agora começa a reconstrução limpa.',
        conhecendo_alguem: 'Uma decepção recente selou o destino de algo que não servia mais; o caminho está limpo para um novo começo.',
        distancia: 'A fase mais pesada da separação foi vencida; daqui para frente, a luz dourada do reencontro se aproxima.',
        amor_proprio: 'Morte simbólica de uma versão sua que aceitava desrespeito e migalhas. Você renasce mais forte e lúcida.'
      },
      desafio: {
        meu_relacionamento: 'O vitimismo dramático de continuar deitada no chão lamentando em vez de se levantar para a nova fase.',
        conhecendo_alguem: 'Apegar-se à dor da quebra de expectativa em vez de comemorar a libertação precoce.',
        distancia: 'Achar que a relação não vai resistir aos últimos desafios e jogar a toalha no momento errado.',
        amor_proprio: 'Sentir-se derrotada e esquecer de olhar para o sol que já está nascendo no horizonte.'
      },
      orientacao: {
        meu_relacionamento: 'Virem a página com coragem. O que estava doente acabou; agora levantem-se de mãos dadas para o novo ciclo.',
        conhecendo_alguem: 'Agradeça pelo fim rápido do que não seria bom no futuro. Olhe para o horizonte dourado.',
        distancia: 'Respirem fundo: a fase mais dura ficou para trás. Foquem na energia do recomeço.',
        amor_proprio: 'Levante-se, sacuda a poeira e celebre: você sobreviveu ao pior e agora sua luz voltará a brilhar com força total.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual ciclo desgastante nós dois precisamos decretar como encerrado para podermos renascer?',
      conhecendo_alguem: 'Consigo enxergar que o término de uma ilusão é na verdade uma bênção de proteção?',
      distancia: 'Como a travessia dessa fase dura provou a resistência do nosso afeto?',
      amor_proprio: 'O que dentro de mim renasce muito mais forte, sábio e digno a partir de hoje?'
    },
    microActions: {
      meu_relacionamento: 'Digam juntos: "Zeramos essa conta do passado; daqui para a frente começa uma nova história".',
      conhecendo_alguem: 'Bloqueie ou silencie contatos que só trazem energias de decepção.',
      distancia: 'Comemorem a vitória de terem atravessado o momento mais difícil da separação.',
      amor_proprio: 'Abra as cortinas pela manhã, deixe o sol bater no rosto e sinta o alívio de estar viva.'
    }
  },
  {
    id: 60,
    name: 'Pajem de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: 'Pajem',
    element: 'Ar',
    image: '/cards/card_60.jpg',
    keywords: ['Curiosidade Vigilante', 'Olhar Analítico', 'Comunicação Clara', 'Prontidão'],
    archetype: 'O Observador Atento',
    generalLoveMeaning: 'O Pajem de Espadas traz mente afiada, observação cuidadosa e o desejo de descobrir a verdade com inteligência e perspicácia.',
    loveRelationshipMeaning: 'Atenção aos sinais e conversas diretas; questionar com respeito para entender o que está acontecendo.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Vocês precisam de um diálogo inteligente e lúcido; analisem as coisas com a mente fria e o coração justo.',
        conhecendo_alguem: 'Você está atenta e observando cada palavra e atitude da pessoa com curiosidade investigativa.',
        distancia: 'Atenção aos detalhes da comunicação; mensagens claras evitam interpretações truncadas.',
        amor_proprio: 'Você está desperta mentalmente, prestando atenção em como as pessoas reagem quando você impõe limites.'
      },
      desafio: {
        meu_relacionamento: 'A paranoia de bancar a detetive e procurar problemas onde não há nada errado.',
        conhecendo_alguem: 'Interrogar a pessoa como se estivesse em uma entrevista de emprego em vez de um flerte leve.',
        distancia: 'Ficar investigando curtidas e seguidores nas redes do parceiro por insegurança.',
        amor_proprio: 'Hipervigilância defensiva que não permite relaxar e confiar em ninguém.'
      },
      orientacao: {
        meu_relacionamento: 'Faça perguntas diretas e carinhosas em vez de ficar tirando conclusões sozinha na sua cabeça.',
        conhecendo_alguem: 'Observe sem julgamentos precipitados; deixe que os fatos falem por si mesmos com o tempo.',
        distancia: 'Se tiver dúvidas sobre algo, pergunte com naturalidade sem criar teorias conspiratórias.',
        amor_proprio: 'Use sua inteligência para se proteger, mas não deixe a desconfiança matar sua espontaneidade.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou dialogando com clareza ou criando investigações secretas na minha mente?',
      conhecendo_alguem: 'Minha curiosidade é saudável ou está virando desconfiança excessiva?',
      distancia: 'Como posso tirar dúvidas com calma sem parecer que estou fazendo uma acusação?',
      amor_proprio: 'Estou sabendo usar meu discernimento mental sem me tornar uma pessoa cética e fria?'
    },
    microActions: {
      meu_relacionamento: 'Pergunte com naturalidade algo que você ficou em dúvida em vez de guardar suspeita.',
      conhecendo_alguem: 'Observe como a pessoa se comunica quando é contrariada.',
      distancia: 'Evite monitorar redes sociais do parceiro hoje; confie naquilo que é conversado.',
      amor_proprio: 'Anote em tópicos racionais o que você percebeu sobre uma situação para não se perder em fantasias.'
    }
  },
  {
    id: 61,
    name: 'Cavaleiro de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: 'Cavaleiro',
    element: 'Ar',
    image: '/cards/card_61.jpg',
    keywords: ['Determinação Feroz', 'Franqueza Impetuosa', 'Rapidez Mental', 'Decisão Rápida'],
    archetype: 'O Guerreiro da Lógica',
    generalLoveMeaning: 'O Cavaleiro de Espadas avança com velocidade mental e coragem para cortar rodeios e resolver assuntos com determinação imediata.',
    loveRelationshipMeaning: 'Vontade de resolver pendências na hora, mas que exige cuidado para não atropelar a sensibilidade do outro.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Momento de encarar uma decisão rápida e sem rodeios; a passividade não resolverá a questão atual.',
        conhecendo_alguem: 'A pessoa é direta e fala o que pensa com franqueza; o ritmo da conversa é rápido e sem papas na língua.',
        distancia: 'Vontade de tomar medidas drásticas e imediatas para resolver a situação do afastamento.',
        amor_proprio: 'Você está com a mente decidida a cortar qualquer desrespeito com firmeza e rapidez.'
      },
      desafio: {
        meu_relacionamento: 'Falar coisas duras sem filtro no calor da discussão, machucando quem você ama por pura pressa de ter razão.',
        conhecendo_alguem: 'Ser ríspida demais ou julgar a pessoa antes de dar chance para ela se explicar.',
        distancia: 'Mandar mensagens impulsivas e agressivas durante momentos de estresse da distância.',
        amor_proprio: 'A autocrítica impiedosa que ataca seus sentimentos com lógica fria e sem compaixão.'
      },
      orientacao: {
        meu_relacionamento: 'Seja assertiva, mas escolha palavras doces. É possível ser firme sem ser grosseira.',
        conhecendo_alguem: 'Aprecie a sinceridade direta, mas observe se a pessoa também tem sensibilidade e empatia.',
        distancia: 'Respire 10 vezes antes de enviar mensagens polêmicas; a calma poupa retrabalho emocional.',
        amor_proprio: 'Tome a decisão que você sabe ser necessária com rapidez, mas trate seu coração com delicadeza.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como posso ser clara e decidida sem ferir a sensibilidade do meu parceiro?',
      conhecendo_alguem: 'Essa pessoa é sincera e madura ou apenas inconsequente com o que fala?',
      distancia: 'Estou agindo com determinação inteligente ou com desespero impulsivo?',
      amor_proprio: 'Onde estou precisando de mais firmeza e assertividade na minha postura afetiva?'
    },
    microActions: {
      meu_relacionamento: 'Escreva a mensagem delicada que quer falar, revise-a com carinho e só então converse.',
      conhecendo_alguem: 'Seja clara sobre o que você não tolera em um relacionamento logo de início.',
      distancia: 'Canalize sua energia de decisão em um plano prático para a próxima viagem.',
      amor_proprio: 'Corte agora mesmo uma conversa desgastante que não leva a lugar algum.'
    }
  },
  {
    id: 62,
    name: 'Rainha de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: 'Rainha',
    element: 'Ar',
    image: '/cards/card_62.jpg',
    keywords: ['Discernimento Lúcido', 'Independência Soberana', 'Verdade Elegante', 'Limites Claros'],
    archetype: 'A Dama da Sabedoria Imparcial',
    generalLoveMeaning: 'A Rainha de Espadas traz a lucidez de quem já sofreu, aprendeu a lição e agora não aceita ilusões nem mentiras, comunicando-se com elegância.',
    loveRelationshipMeaning: 'Respeito mútuo baseado em inteligência, honestidade sem rodeios e preservação da dignidade individual.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O momento pede cabeça fria, elegância nas palavras e firmeza nos acordos. A maturidade intelectual guia a relação.',
        conhecendo_alguem: 'Você está no comando com perspicácia; não cai em elogios baratos e avalia atitudes com serenidade.',
        distancia: 'A clareza mental e a independência são suas maiores forças para lidar com o espaço físico com dignidade.',
        amor_proprio: 'Você atingiu um patamar de autonomia onde sua felicidade depende da sua própria verdade e consciência limpa.'
      },
      desafio: {
        meu_relacionamento: 'A frieza excessiva ou o sarcasmo defensivo que afasta o calor do afeto e da intimidade.',
        conhecendo_alguem: 'Erguer um tribunal severo onde ninguém consegue ser aprovado por causa de mágoas passadas.',
        distancia: 'A postura distante e formal demais que faz o outro se sentir excluído do seu íntimo.',
        amor_proprio: 'O medo da vulnerabilidade fazendo você se refugiar apenas na mente racional.'
      },
      orientacao: {
        meu_relacionamento: 'Conversem com clareza elegante, mas não se esqueçam de abraçar e demonstrar carinho físico.',
        conhecendo_alguem: 'Mantenha sua inteligência e discernimento no topo, mas permita que a doçura também tenha espaço.',
        distancia: 'Comunique suas necessidades práticas com tranquilidade e firmeza, sem cobranças dramáticas.',
        amor_proprio: 'Honre a sabedoria que suas dores passadas trouxeram: você é lúcida, forte e merecedora de verdade.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou sabendo aliar minha inteligência firme com a doçura do carinho no trato diário?',
      conhecendo_alguem: 'Estou avaliando com discernimento ou apenas na defensiva por medo de ser ferida?',
      distancia: 'Como minha clareza de ideias pode trazer estabilidade para a nossa convivência à distância?',
      amor_proprio: 'Eu confio no meu próprio discernimento para fazer escolhas afetivas maduras?'
    },
    microActions: {
      meu_relacionamento: 'Proponha uma conversa séria usando palavras gentis e sem ironias.',
      conhecendo_alguem: 'Faça uma pergunta inteligente que revele o caráter e os princípios da pessoa.',
      distancia: 'Defina com tranquilidade seus horários de trabalho e estudo para que o parceiro saiba quando você estará livre.',
      amor_proprio: 'Elogie a sua própria inteligência e firmeza ao tomar uma decisão sábia hoje.'
    }
  },
  {
    id: 63,
    name: 'Rei de Espadas',
    arcana: 'menor',
    suit: 'espadas',
    rank: 'Rei',
    element: 'Ar',
    image: '/cards/card_63.jpg',
    keywords: ['Justiça Intelectual', 'Autoridade Ética', 'Clareza Estruturada', 'Verdade Imparcial'],
    archetype: 'O Juiz Consciente',
    generalLoveMeaning: 'O Rei de Espadas personifica a autoridade da razão ética, a justiça imparcial nas decisões e a busca por verdades que sustentam a ordem.',
    loveRelationshipMeaning: 'Alinhamento ético e racional; saber discutir com lógica, respeito mútuo e compromisso com a verdade.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Momento de deliberar sobre assuntos importantes com maturidade, justiça e respeito aos direitos de cada um.',
        conhecendo_alguem: 'A pessoa é lúcida, justa e articulada; há grande afinidade intelectual e respeito pelas ideias.',
        distancia: 'A clareza dos combinados e a honestidade moral sustentam a confiança inabalável entre vocês.',
        amor_proprio: 'Você governa sua vida com sabedoria e integridade: não se permite ser enganada nem engana ninguém.'
      },
      desafio: {
        meu_relacionamento: 'O distanciamento emocional que trata a vida conjugal como um contrato de negócios sem calor humano.',
        conhecendo_alguem: 'Ser exigente e severa demais nos critérios, esquecendo que o amor também é imperfeito e sensível.',
        distancia: 'A frieza nas respostas que pode parecer desdém para a outra pessoa.',
        amor_proprio: 'Racionalizar tanto os sentimentos a ponto de se desconectar do que o corpo e o coração sentem.'
      },
      orientacao: {
        meu_relacionamento: 'Tomem decisões fundamentadas no que é justo para ambos. A ética fortalece o amor a longo prazo.',
        conhecendo_alguem: 'Observe a conduta ética da pessoa com os outros; o caráter é o maior alicerce do afeto.',
        distancia: 'Mantenham a palavra dada e cumpram os combinados; a confiabilidade é o maior tesouro do vínculo.',
        amor_proprio: 'Seja justa consigo mesma: analise sua situação com imparcialidade e tome a decisão mais ética para sua vida.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Nossos combinados atuais são justos e equilibrados para ambas as partes?',
      conhecendo_alguem: 'Essa pessoa demonstra integridade moral nas pequenas e grandes atitudes?',
      distancia: 'Como podemos garantir que nossos acordos sejam cumpridos com lealdade mútua?',
      amor_proprio: 'Estou sendo justa e leal com os meus próprios valores fundamentais?'
    },
    microActions: {
      meu_relacionamento: 'Reconheça um ponto justo do parceiro com elegância: "Você tem razão nisso e eu concordo".',
      conhecendo_alguem: 'Converse sobre um tema ético ou de sociedade e veja a profundidade das ideias do outro.',
      distancia: 'Honre pontualmente o horário que você combinou para a próxima conversa.',
      amor_proprio: 'Tome uma decisão lógica e sensata que trará alívio duradouro para sua mente.'
    }
  },

  // ==========================================
  // NAIPE DE OUROS (PENTACLES) - IDs 64 a 77
  // ==========================================
  {
    id: 64,
    name: 'Ás de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: 'Ás',
    element: 'Terra',
    image: '/cards/card_64.jpg',
    keywords: ['Oportunidade Concreta', 'Semente Próspera', 'Compromisso Real', 'Segurança'],
    archetype: 'A Moeda Dourada da Terra',
    generalLoveMeaning: 'O Ás de Ouros traz a semente de um amor sólido e palpável, a oportunidade de construir estabilidade e segurança material e afetiva.',
    loveRelationshipMeaning: 'Um começo com bases sólidas, projetos práticos conjuntos e potencial de durabilidade real.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Excelente momento para investimentos concretos no casal: compras conjuntas, reformas, planos financeiros ou moradia.',
        conhecendo_alguem: 'A conexão tem pés no chão e potencial de se transformar em um relacionamento sério, estável e seguro.',
        distancia: 'Oportunidade prática para viabilizar um encontro físico ou criar estabilidade que facilite a união.',
        amor_proprio: 'Você está investindo em si mesma com ações concretas: cuidando do corpo, da saúde e das finanças.'
      },
      desafio: {
        meu_relacionamento: 'A mesquinharia material ou o medo excessivo de gastar dinheiro com momentos prazerosos a dois.',
        conhecendo_alguem: 'Ficar presa apenas a aspectos financeiros e materiais da outra pessoa.',
        distancia: 'O custo financeiro das viagens pesando na rotina de vocês dois.',
        amor_proprio: 'Achar que você só será digna de amor quando atingir uma estabilidade financeira perfeita.'
      },
      orientacao: {
        meu_relacionamento: 'Dêem um passo prático e concreto juntos hoje: planejem uma economia conjunta ou façam uma melhoria no lar.',
        conhecendo_alguem: 'Construa a relação sobre bases reais; observe o compromisso diário e as atitudes tangíveis.',
        distancia: 'Façam um planejamento financeiro conjunto para tornar os reencontros viáveis e frequentes.',
        amor_proprio: 'Invista em você mesma: faça algo tangível pela sua saúde, alimentação ou conforto físico.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual semente prática podemos plantar hoje para garantir nossa estabilidade futura?',
      conhecendo_alguem: 'Essa conexão tem bases concretas para virar um compromisso real?',
      distancia: 'Qual passo financeiro ou logístico podemos dar para encurtar a distância?',
      amor_proprio: 'Como posso cuidar do meu corpo e da minha estabilidade material com mais carinho?'
    },
    microActions: {
      meu_relacionamento: 'Conversem sobre um objetivo financeiro conjunto que beneficie os dois.',
      conhecendo_alguem: 'Observe a pontualidade e a responsabilidade da pessoa com os compromissos marcados.',
      distancia: 'Separe uma quantia para o fundo da próxima viagem a dois.',
      amor_proprio: 'Coma uma refeição nutritiva e saborosa mastigando devagar com gratidão pelo seu corpo.'
    }
  },
  {
    id: 65,
    name: 'Dois de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '2',
    element: 'Terra',
    image: '/cards/card_65.jpg',
    keywords: ['Equilíbrio da Rotina', 'Flexibilidade', 'Malabarismo', 'Adaptação'],
    archetype: 'O Malabarista do Infinito',
    generalLoveMeaning: 'O Dois de Ouros convida a equilibrar a rotina entre trabalho, afeto, lazer e responsabilidades com flexibilidade e jogo de cintura.',
    loveRelationshipMeaning: 'Saber dançar com as mudanças da vida diária sem deixar que o cansaço do trabalho engula o romance.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Vocês estão equilibrando muitas demandas práticas (trabalho, contas, família); o momento pede parceria leve.',
        conhecendo_alguem: 'Você está tentando encaixar essa nova história na sua agenda cheia; flexibilidade será essencial.',
        distancia: 'Malabarismo de fusos horários e agendas de trabalho para conseguir um tempo de qualidade para conversar.',
        amor_proprio: 'Equilíbrio saudável entre cuidar das suas obrigações materiais e reservar tempo sagrado para seu descanso.'
      },
      desafio: {
        meu_relacionamento: 'O estresse da rotina fazendo o casal esquecer de trocar carinho e atenção íntima.',
        conhecendo_alguem: 'Ficar indecisa entre duas opções ou não ter tempo real para se dedicar ao vínculo.',
        distancia: 'A desorganização de horários gerando desencontros repetitivos nas chamadas.',
        amor_proprio: 'Sentir-se sobrecarregada por querer dar conta de tudo ao mesmo tempo com perfeição.'
      },
      orientacao: {
        meu_relacionamento: 'Encarem a rotina com bom humor e leveza; dividam tarefas com um sorriso e aproveitem os pequenos momentos.',
        conhecendo_alguem: 'Seja flexível com horários e combinados, mas reserve um espaço real na sua semana para o encontro.',
        distancia: 'Encontrem um meio-termo confortável nos horários de contato para que ninguém fique exausto.',
        amor_proprio: 'Aprenda a priorizar: nem tudo precisa ser feito hoje; respire e equilibre seu ritmo com calma.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos conciliar trabalho e afeto sem que o cansaço tome conta de nós?',
      conhecendo_alguem: 'Tenho tempo e espaço mental disponível para receber alguém na minha vida agora?',
      distancia: 'Como podemos organizar nossos horários para que as conversas sejam prazerosas e não uma obrigação?',
      amor_proprio: 'Onde na minha rotina posso diminuir o ritmo para respirar com mais serenidade?'
    },
    microActions: {
      meu_relacionamento: 'Transforme uma tarefa doméstica (como lavar a louça ou cozinhar) em um momento divertido a dois.',
      conhecendo_alguem: 'Proponha uma data viável com antecedência que não aperte sua rotina de trabalho.',
      distancia: 'Ajustem juntos o melhor horário da semana para uma chamada tranquila e sem pressa.',
      amor_proprio: 'Faça uma pausa de 10 minutos entre reuniões ou afazeres para esticar o corpo e respirar.'
    }
  },
  {
    id: 66,
    name: 'Três de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '3',
    element: 'Terra',
    image: '/cards/card_66.jpg',
    keywords: ['Cooperação Mútua', 'Construção a Dois', 'Trabalho em Equipe', 'Competência'],
    archetype: 'Os Arquitetos da Catedral',
    generalLoveMeaning: 'O Três de Ouros simboliza a construção sólida a dois, a cooperação paciente onde cada um soma com seus talentos para edificar um amor duradouro.',
    loveRelationshipMeaning: 'Parceria no sentido mais nobre da palavra: trabalho em equipe com respeito às habilidades de cada um.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Vocês formam uma excelente dupla. Há sintonia prática para resolver problemas e construir projetos sólidos.',
        conhecendo_alguem: 'A conexão se desenvolve com cooperação e respeito; ambos demonstram vontade de construir tijolo por tijolo.',
        distancia: 'Trabalho conjunto e estratégico para planejar a logística que vai aproximar os dois de forma definitiva.',
        amor_proprio: 'Você está edificando seu amor-próprio com hábitos diários, terapia, leituras e cuidado constante.'
      },
      desafio: {
        meu_relacionamento: 'Competir para ver quem trabalha mais ou desvalorizar o esforço do parceiro na rotina.',
        conhecendo_alguem: 'Achar que tudo deve ser fácil e desistir diante do primeiro esforço de adaptação.',
        distancia: 'A falta de cooperação prática nos planos de reencontro gerando sobrecarga em um dos lados.',
        amor_proprio: 'A impaciência com o próprio processo de crescimento, querendo a catedral pronta sem assentar os tijolos.'
      },
      orientacao: {
        meu_relacionamento: 'Valorizem a parceria: reconheça em voz alta as qualidades práticas que seu parceiro traz para a relação.',
        conhecendo_alguem: 'Construa aos poucos: amizade, respeito e confiança se erguem no dia a dia com consistência.',
        distancia: 'Trabalhem como equipe: planejem juntos os custos, itinerários e metas com transparência.',
        amor_proprio: 'Celebre cada pequeno hábito de autocuidado que você implementou ultimamente.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos ser parceiros ainda mais colaborativos e unidos no dia a dia?',
      conhecendo_alguem: 'Essa pessoa demonstra espírito de equipe e disposição para somar comigo?',
      distancia: 'Estamos cooperando igualmente nos planos práticos para vencer a distância?',
      amor_proprio: 'Qual tijolo de amor-próprio posso assentar na minha vida hoje com paciência?'
    },
    microActions: {
      meu_relacionamento: 'Elogie a competência ou o apoio prático do parceiro em algo do cotidiano.',
      conhecendo_alguem: 'Proponham fazer uma atividade prática juntos onde possam observar a sintonia de vocês.',
      distancia: 'Criem uma planilha ou nota compartilhada para organizar as etapas da viagem.',
      amor_proprio: 'Organize uma gaveta ou espaço da casa como um ato de cuidado pelo seu templo diário.'
    }
  },
  {
    id: 67,
    name: 'Quatro de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '4',
    element: 'Terra',
    image: '/cards/card_67.jpg',
    keywords: ['Apego Possessivo', 'Medo da Perda', 'Controle Rígido', 'Segurança Excessiva'],
    archetype: 'O Guardião do Baú Trancado',
    generalLoveMeaning: 'O Quatro de Ouros adverte sobre o ciúme possessivo, o medo de perder o controle e a insegurança que sufoca a liberdade no amor.',
    loveRelationshipMeaning: 'Reter sentimentos ou controlar o parceiro por medo de ser abandonado, criando um clima de tensão.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Pode haver ciúme, controle ou apego a rotinas antigas por medo de mudanças. O amor precisa de ar para respirar.',
        conhecendo_alguem: 'Você pode estar fechando o coração a sete chaves por medo de se desestruturar ou perder o controle.',
        distancia: 'A distância ativando medos de perda e controle obsessivo sobre onde a outra pessoa está.',
        amor_proprio: 'Apego a mágoas e padrões antigos por medo de encarar o novo com o peito aberto.'
      },
      desafio: {
        meu_relacionamento: 'O controle sufocante que vigia passos e horários, afastando o parceiro pelo excesso de posse.',
        conhecendo_alguem: 'Ser tão reservada e fechada que a outra pessoa acha que você não tem nenhum interesse.',
        distancia: 'A paranoia possessiva querendo exigir relatórios diários de cada minuto do parceiro distante.',
        amor_proprio: 'A mesquinharia afetiva: não se permitir doar carinho nem receber afeto por medo de ser ferida.'
      },
      orientacao: {
        meu_relacionamento: 'Abra as mãos. O que é verdadeiro permanece por escolha livre, e não por correntes de controle.',
        conhecendo_alguem: 'Relaxe a postura defensiva: permita-se mostrar um pouco da sua vulnerabilidade.',
        distancia: 'Solte a necessidade de controlar o que está fora do seu alcance. Confiança é a única moeda que vale à distância.',
        amor_proprio: 'Desapegue da necessidade de ter garantias absolutas sobre tudo antes de se permitir viver o amor.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que estou tentando controlar com medo de perder no meu relacionamento?',
      conhecendo_alguem: 'Estou me fechando tanto que impeço a outra pessoa de se aproximar?',
      distancia: 'Como posso substituir a necessidade de controle por uma confiança madura e serena?',
      amor_proprio: 'A qual controle rígido posso renunciar hoje para viver com mais leveza?'
    },
    microActions: {
      meu_relacionamento: 'Dê espaço total para seu parceiro curtir um momento com amigos ou sozinho hoje sem cobrar nada.',
      conhecendo_alguem: 'Compartilhe um detalhe genuíno sobre seus sentimentos sem medo do que vão pensar.',
      distancia: 'Não cobre respostas imediatas hoje; confie na solidez do afeto compartilhado.',
      amor_proprio: 'Doe roupas ou objetos que você não usa mais para praticar a energia do desapego.'
    }
  },
  {
    id: 68,
    name: 'Cinco de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '5',
    element: 'Terra',
    image: '/cards/card_68.jpg',
    keywords: ['Carência Emocional', 'Desamparo', 'Frio da Solidão', 'Ajuda ao Alcance'],
    archetype: 'Os Peregrinos no Frio',
    generalLoveMeaning: 'O Cinco de Ouros reflete a sensação de frio e carência na alma, lembrando que a janela iluminada do templo do amor está bem ao seu lado para você entrar e se aquecer.',
    loveRelationshipMeaning: 'Sentimento temporário de desamparo ou isolamento; hora de pedir ajuda e acolher a vulnerabilidade.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Vocês podem estar enfrentando um período financeiro ou emocional apertado, sentindo-se desamparados. Mas o amor os une.',
        conhecendo_alguem: 'Sensação de carência profunda que pode fazer você aceitar pouco afeto apenas para não sentir frio.',
        distancia: 'A dor física e solitária da ausência em noites frias; mas lembre-se de que o refúgio do afeto continua aberto.',
        amor_proprio: 'Sentimento de inadequação ou rejeição. Momento de ser seu próprio abrigo acolhedor com compaixão.'
      },
      desafio: {
        meu_relacionamento: 'Focar na escassez e no que falta, brigando por problemas materiais em vez de se abraçarem.',
        conhecendo_alguem: 'Buscar um relacionamento como boia de salvação para suprir carências que exigem terapia e autoamor.',
        distancia: 'Afundar no sentimento de abandono e não enxergar os esforços que o outro faz para estar presente.',
        amor_proprio: 'Passar pela vida como uma pedinte de afeto, mendigando atenção onde você deveria ser rainha.'
      },
      orientacao: {
        meu_relacionamento: 'Abracem-se no frio: enfrentem as dificuldades materiais de mãos dadas; a cumplicidade supera qualquer crise.',
        conhecendo_alguem: 'Não aceite migalhas por desespero da solidão. Aqueça primeiro seu coração com dignidade.',
        distancia: 'Procure o acolhimento nas conversas sinceras e não hesite em dizer ao parceiro: "Hoje estou me sentindo frágil".',
        amor_proprio: 'Olhe para a janela iluminada: acolha-se, tome um banho quente, vista uma roupa aconchegante e ame-se.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos nos apoiar mutuamente nas fases difíceis em vez de nos cobrarmos por aquilo que falta?',
      conhecendo_alguem: 'Estou me aproximando por carinho genuíno ou pelo medo da solidão?',
      distancia: 'Onde posso encontrar refúgio e acolhimento nos momentos em que a saudade pesa mais?',
      amor_proprio: 'Como posso me acolher com calor e compaixão nos meus dias mais cinzentos?'
    },
    microActions: {
      meu_relacionamento: 'Dê um abraço apertado no seu amor e diga: "Estamos juntos nessa, não importa o que aconteça".',
      conhecendo_alguem: 'Não aceite encontros de última hora que não respeitem seu tempo e valor.',
      distancia: 'Conte ao parceiro com sinceridade quando estiver se sentindo carente sem fazer cobranças agressivas.',
      amor_proprio: 'Prepare um chá bem quente, enrole-se em um cobertor confortável e descanse em paz.'
    }
  },
  {
    id: 69,
    name: 'Seis de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '6',
    element: 'Terra',
    image: '/cards/card_69.jpg',
    keywords: ['Generosidade Justa', 'Reciprocidade Tangível', 'Dar e Receber', 'Equilíbrio'],
    archetype: 'O Benfeitor Justo',
    generalLoveMeaning: 'O Seis de Ouros traz a harmonia da balança afetiva: generosidade sem humilhação, cuidado mútuo e reciprocidade no doar e no receber.',
    loveRelationshipMeaning: 'Troca equilibrada de afeto, presentes, tempo e atenção onde nenhum dos dois se sente explorado.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'A relação encontra um equilíbrio muito saudável de cuidado recíproco e generosidade cotidiana.',
        conhecendo_alguem: 'A pessoa demonstra atenção, gentileza e reciprocidade proporcional aos passos que você dá.',
        distancia: 'Divisão equilibrada de esforços e custos das visitas, garantindo que ninguém fique sobrecarregado.',
        amor_proprio: 'Equilíbrio entre doar-se aos outros e guardar energia e mimos de qualidade para você mesma.'
      },
      desafio: {
        meu_relacionamento: 'Fazer o papel de credor afetivo, cobrando cada favor ou presente como se fosse uma dívida.',
        conhecendo_alguem: 'Dar muito afeto cedo demais e ficar frustrada por não receber o mesmo retorno imediato.',
        distancia: 'A sensação de que um sempre viaja mais ou se esforça mais financeiramente do que o outro.',
        amor_proprio: 'Achar que você não merece receber presentes, elogios ou atenções dos outros.'
      },
      orientacao: {
        meu_relacionamento: 'Pratiquem a generosidade desinteressada: um mimo simples ou uma gentileza prática renova a gratidão do casal.',
        conhecendo_alguem: 'Mantenha a equivalência: observe se o que você oferece é acolhido com a mesma generosidade.',
        distancia: 'Conversem abertamente sobre finanças e apoio mútuo com naturalidade e justiça.',
        amor_proprio: 'Aprenda a receber com um sorriso e um "obrigada": você é merecedora de todo o bem da vida.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'A balança de esforço e carinho está equilibrada entre nós dois?',
      conhecendo_alguem: 'Há reciprocidade justa no tempo e na atenção que estamos dedicando a esse encontro?',
      distancia: 'Estamos dividindo com justiça as responsabilidades práticas da distância?',
      amor_proprio: 'Consigo receber elogios e cuidados sem me sentir devedora ou culpada?'
    },
    microActions: {
      meu_relacionamento: 'Faça um agrado prático para seu parceiro hoje sem que ele precise pedir.',
      conhecendo_alguem: 'Retribua um gesto carinhoso com a mesma proporção e simpatia.',
      distancia: 'Equilibrem os custos da próxima visita para que ambos se sintam tranquilos.',
      amor_proprio: 'Receba um favor ou ajuda de alguém com um sorriso aberto e sincero.'
    }
  },
  {
    id: 70,
    name: 'Sete de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '7',
    element: 'Terra',
    image: '/cards/card_70.jpg',
    keywords: ['Paciência na Colheita', 'Maturação', 'Avaliação Seria', 'Constância'],
    archetype: 'O Agricultor Paciente',
    generalLoveMeaning: 'O Sete de Ouros convida à paciência sábia do agricultor: após plantar e regar a terra, é preciso dar tempo para que os frutos amadureçam.',
    loveRelationshipMeaning: 'Compreender que o amor verdadeiro não se apressa; cada etapa tem seu tempo natural de maturação.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Momento de avaliar o que já foi construído com calma. O relacionamento está amadurecendo passo a passo.',
        conhecendo_alguem: 'Não tenha pressa de definir tudo agora; observe o crescimento natural da conexão ao longo das semanas.',
        distancia: 'A paciência é sua maior aliada: a distância está testando e amadurecendo a solidez do vínculo de vocês.',
        amor_proprio: 'Você plantou boas sementes de autocuidado; agora confie no tempo de maturação da sua própria vida.'
      },
      desafio: {
        meu_relacionamento: 'A impaciência ansiosa querendo resultados imediatos em processos que exigem tempo.',
        conhecendo_alguem: 'Arrancar a plantinha para ver se a raiz já cresceu, estragando o ritmo do vínculo por ansiedade.',
        distancia: 'O desânimo de achar que as coisas estão demorando demais para se resolverem.',
        amor_proprio: 'Cobrar-se por mudanças emocionais instantâneas sem respeitar seu próprio ritmo de cicatrização.'
      },
      orientacao: {
        meu_relacionamento: 'Apreciem a jornada. Nem todo dia precisa de grandes reviravoltas; a constância paciente constrói impérios.',
        conhecendo_alguem: 'Dê tempo ao tempo: o tempo é o maior filtro da verdade nas intenções das pessoas.',
        distancia: 'Mantenham a constância do afeto regando a plantinha da relação com paciência e dedicação diária.',
        amor_proprio: 'Tenha paciência com você mesma: suas transformações internas estão se consolidando com firmeza.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Estou sabendo esperar o tempo natural de maturação das coisas entre nós?',
      conhecendo_alguem: 'Consigo viver o presente sem exigir garantias imediatas sobre os próximos meses?',
      distancia: 'Como a paciência pode se tornar uma virtude fortalecedora para nossa história?',
      amor_proprio: 'Estou respeitando o tempo que meu coração leva para aprender e cicatrizar?'
    },
    microActions: {
      meu_relacionamento: 'Pare de cobrar uma resposta ou mudança urgente hoje; respire e dê espaço.',
      conhecendo_alguem: 'Deixe alguns dias entre um encontro e outro para que a saudade faça seu trabalho.',
      distancia: 'Regue uma planta real na sua casa, mentalizando a paciência necessária para a colheita do afeto.',
      amor_proprio: 'Diga a si mesma: "Estou no meu tempo perfeito; tudo floresce no momento certo".'
    }
  },
  {
    id: 71,
    name: 'Oito de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '8',
    element: 'Terra',
    image: '/cards/card_71.jpg',
    keywords: ['Dedicação Diária', 'Cuidado Artesanal', 'Aperfeiçoamento', 'Constância'],
    archetype: 'O Artesão Dedicado',
    generalLoveMeaning: 'O Oito de Ouros ensina que o amor é uma arte que se aprimora com dedicação diária, atenção aos detalhes e paciência artesanal.',
    loveRelationshipMeaning: 'Cuidar do jardim do relacionamento todos os dias com carinho, polindo as arestas com maturidade.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Fase de dedicação e zelo mútuo. Pequenos cuidados cotidianos sustentam e fortalecem o laço amoroso.',
        conhecendo_alguem: 'Vocês estão se conhecendo com atenção sincera aos detalhes dos gostos e rotinas um do outro.',
        distancia: 'A constância e a disciplina diária de manter o contato e o afeto acesos com mensagens cuidadosas.',
        amor_proprio: 'Você está trabalhando no seu autodesenvolvimento com persistência: terapia, estudos e hábitos saudáveis.'
      },
      desafio: {
        meu_relacionamento: 'A rotina mecânica que transforma o cuidado em obrigação burocrática sem emoção.',
        conhecendo_alguem: 'O perfeccionismo excessivo querendo que cada detalhe do encontro saia milimetricamente impecável.',
        distancia: 'A sensação de esforço repetitivo sem novidades aparentes na comunicação diária.',
        amor_proprio: 'A autocrítica do tipo "ainda não estou pronta para o amor", adiando a vida por perfeccionismo.'
      },
      orientacao: {
        meu_relacionamento: 'Dedique-se aos detalhes: um café na cama, uma palavra atenta ou ouvir como foi o dia com carinho artesanal.',
        conhecendo_alguem: 'Demonstre interesse genuíno nas coisas simples que a outra pessoa faz e valoriza.',
        distancia: 'Mantenha a regularidade do afeto com dedicação: a constância é o que constrói a segurança.',
        amor_proprio: 'Continue trabalhando no seu bem-estar com carinho diário; você está esculpindo uma versão admirável de si.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual pequeno detalhe de carinho posso aprimorar no nosso cotidiano hoje?',
      conhecendo_alguem: 'Estou prestando atenção nos detalhes que revelam o coração da outra pessoa?',
      distancia: 'Como a constância diária de carinho fortalece nossa segurança emocional?',
      amor_proprio: 'Qual hábito diário tem me feito sentir mais orgulho e paz comigo mesma?'
    },
    microActions: {
      meu_relacionamento: 'Faça um gesto de cuidado prático pelo parceiro (engraxar um sapato, arrumar algo que quebrou, preparar algo que ele gosta).',
      conhecendo_alguem: 'Lembre-se de um detalhe pequeno que a pessoa mencionou em outra conversa e pergunte sobre isso.',
      distancia: 'Envie uma mensagem atenta no início do dia mostrando que você se importa com a rotina do outro.',
      amor_proprio: 'Dedique 30 minutos a um projeto pessoal ou aprendizado com foco e carinho.'
    }
  },
  {
    id: 72,
    name: 'Nove de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '9',
    element: 'Terra',
    image: '/cards/card_72.jpg',
    keywords: ['Autossuficiência Elegante', 'Conforto Próprio', 'Dignidade', 'Colheita Abundante'],
    archetype: 'A Senhora do Vinhedo Dourado',
    generalLoveMeaning: 'O Nove de Ouros celebra a mulher ou o homem que conquistou sua independência, aprecia sua própria colheita e não precisa de metades para ser inteiro.',
    loveRelationshipMeaning: 'Um amor maduro entre duas pessoas completas que escolhem somar suas abundâncias com liberdade e elegância.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'A relação atinge um ponto nobre de respeito à independência individual e conforto mútuo.',
        conhecendo_alguem: 'Você entra nessa história como alguém inteira, com sua vida organizada e sem desespero por companhia.',
        distancia: 'Você desfruta da sua própria vida com plenitude, o que torna sua presença ainda mais magnética para o parceiro distante.',
        amor_proprio: 'O ápice da elegância e autonomia: você se sente plena, segura e realizada com sua história e seu espaço.'
      },
      desafio: {
        meu_relacionamento: 'O individualismo fechado que dificulta abrir espaço para a convivência e a vulnerabilidade.',
        conhecendo_alguem: 'A postura autossuficiente demais que transmite a impressão de que você não precisa nem quer ninguém.',
        distancia: 'Acostumar-se tanto com a solitude a ponto de hesitar em abrir mão de rotinas no reencontro.',
        amor_proprio: 'O medo de perder a liberdade conquistada a duras penas ao se apaixonar novamente.'
      },
      orientacao: {
        meu_relacionamento: 'Celebrem o conforto e a estabilidade conquistados. Desfrutem de momentos de requinte e lazer a dois.',
        conhecendo_alguem: 'Mostre que você é inteira e independente, mas deixe claro que seu coração está aberto para somar com quem merecer.',
        distancia: 'Aproveite seu tempo com qualidade: cultive seu jardim pessoal para ter flores a compartilhar no reencontro.',
        amor_proprio: 'Comemore sua independência com orgulho: você é uma pessoa completa, refinada e dona do seu próprio destino.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos honrar nossa independência individual e nossa união de casal ao mesmo tempo?',
      conhecendo_alguem: 'Estou demonstrando abertura para o amor sem abrir mão da minha dignidade?',
      distancia: 'Como posso desfrutar da minha própria vida com riqueza enquanto espero pelo parceiro?',
      amor_proprio: 'O que me faz sentir mais orgulho da minha independência emocional e material hoje?'
    },
    microActions: {
      meu_relacionamento: 'Proponham uma comemoração especial a dois em um lugar agradável e elegante.',
      conhecendo_alguem: 'Pague seu próprio café ou jantar com naturalidade e charme.',
      distancia: 'Passeie pelo seu lugar favorito da cidade saboreando sua própria companhia.',
      amor_proprio: 'Compre algo especial para si mesma que simbolize o orgulho da sua autonomia.'
    }
  },
  {
    id: 73,
    name: 'Dez de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: '10',
    element: 'Terra',
    image: '/cards/card_73.jpg',
    keywords: ['Legado Duradouro', 'Segurança Familiar', 'Prosperidade no Lar', 'Tradição Feliz'],
    archetype: 'O Patriarca do Castelo',
    generalLoveMeaning: 'O Dez de Ouros simboliza a segurança duradoura a longo prazo, o patrimônio afetivo e material compartilhado e a bênção de gerações.',
    loveRelationshipMeaning: 'Amor sólido como pedra, com estabilidade financeira, cumplicidade familiar e visão de eternidade.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Fase de consolidação plena: segurança material, projetos de longo prazo e harmonia com as famílias.',
        conhecendo_alguem: 'A conexão tem valores compatíveis para construir uma história de vida duradoura, sólida e respeitável.',
        distancia: 'A certeza de que a distância é apenas uma etapa temporária na edificação de uma vida inteira juntos.',
        amor_proprio: 'Paz profunda com suas raízes, seu legado pessoal e a construção do seu futuro seguro.'
      },
      desafio: {
        meu_relacionamento: 'Preocupar-se tanto com finanças e convenções sociais que a intimidade amorosa fique em segundo plano.',
        conhecendo_alguem: 'Julgar a pessoa pelo status social ou patrimônio em vez do caráter e do coração.',
        distancia: 'A impaciência com os prazos de consolidação da estabilidade financeira que permitirá o reencontro definitivo.',
        amor_proprio: 'Achar que você só será feliz se tiver aprovação da família tradicional para suas escolhas.'
      },
      orientacao: {
        meu_relacionamento: 'Planejem o futuro com segurança: alinhem investimentos, casa e patrimônio com transparência e carinho.',
        conhecendo_alguem: 'Observe a seriedade da pessoa em relação ao trabalho e ao compromisso com a palavra dada.',
        distancia: 'Mantenham os olhos na construção do legado duradouro que vocês vão desfrutar quando a distância acabar.',
        amor_proprio: 'Honre sua história e construa um alicerce inabalável de segurança emocional para você mesma.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Que legado de segurança e afeto estamos construindo juntos para o nosso futuro?',
      conhecendo_alguem: 'Vejo nessa pessoa a solidez e o caráter necessários para construir uma história de vida?',
      distancia: 'O que mantém nossa certeza de que estamos construindo algo que durará para sempre?',
      amor_proprio: 'Como posso cuidar do meu patrimônio e da minha segurança com sabedoria?'
    },
    microActions: {
      meu_relacionamento: 'Conversem sobre um sonho de longo prazo para a casa ou família de vocês.',
      conhecendo_alguem: 'Observe como a pessoa cuida das suas próprias responsabilidades financeiras e familiares.',
      distancia: 'Visualizem o momento em que vocês estarão compartilhando o mesmo lar definitivamente.',
      amor_proprio: 'Organize suas finanças do mês com carinho, honrando o fruto do seu trabalho.'
    }
  },
  {
    id: 74,
    name: 'Pajem de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: 'Pajem',
    element: 'Terra',
    image: '/cards/card_74.jpg',
    keywords: ['Gesto Concreto', 'Intenção Sincera', 'Aprendiz Dedicado', 'Compromisso Prático'],
    archetype: 'O Jovem Aprendiz da Terra',
    generalLoveMeaning: 'O Pajem de Ouros traz uma oportunidade prática de demonstrar interesse real através de atitudes concretas e presença constante.',
    loveRelationshipMeaning: 'Vontade de aprender a amar melhor, com gestos práticos de ajuda, pontualidade e dedicação sincera.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Momento de pequenos gestos práticos: ajudar o parceiro em algo do trabalho ou da rotina fortalece o vínculo.',
        conhecendo_alguem: 'A pessoa demonstra interesse com atitudes reais e consistentes, buscando construir algo sério.',
        distancia: 'A dedicação paciente de manter combinados práticos que dão segurança ao relacionamento distante.',
        amor_proprio: 'Você está no início de um novo ciclo de hábitos saudáveis e investimentos no seu corpo e na sua rotina.'
      },
      desafio: {
        meu_relacionamento: 'A teimosia ou a lentidão excessiva para tomar decisões práticas necessárias.',
        conhecendo_alguem: 'A timidez excessiva que faz a pessoa parecer fria ou desinteressada.',
        distancia: 'A rotina repetitiva que pode esfriar a empolgação se não houver criatividade.',
        amor_proprio: 'Desanimar no início de novos hábitos por achar que os resultados estão demorando.'
      },
      orientacao: {
        meu_relacionamento: 'Ofereça ajuda prática hoje em algo que seu parceiro precise resolver. O amor se prova no apoio concreto.',
        conhecendo_alguem: 'Valorize quem demonstra interesse com atitudes do dia a dia, e não apenas com palavras sedutoras.',
        distancia: 'Mantenha a pontualidade e a seriedade nos combinados de conversa.',
        amor_proprio: 'Comece hoje mesmo um hábito simples e tangível de autocuidado: beba mais água, durma mais cedo.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Qual atitude prática e útil posso ter hoje para apoiar meu amor na rotina dele?',
      conhecendo_alguem: 'Essa pessoa demonstra interesse com atitudes consistentes ou apenas promessas vagas?',
      distancia: 'Como podemos demonstrar compromisso prático com a nossa relação no dia a dia?',
      amor_proprio: 'Qual pequeno hábito saudável posso cultivar com paciência a partir de hoje?'
    },
    microActions: {
      meu_relacionamento: 'Faça um favor prático ou prepare algo útil para seu parceiro antes que ele precise pedir.',
      conhecendo_alguem: 'Observe se a pessoa chega no horário e cumpre o que combinou com você.',
      distancia: 'Avisem com antecedência suas agendas do dia para evitar desencontros.',
      amor_proprio: 'Separe sua roupa de exercício ou organize seu espaço para amanhã cedo.'
    }
  },
  {
    id: 75,
    name: 'Cavaleiro de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: 'Cavaleiro',
    element: 'Terra',
    image: '/cards/card_75.jpg',
    keywords: ['Lealdade Inabalável', 'Constância Paciente', 'Confiabilidade', 'Trabalho Fiel'],
    archetype: 'O Protetor Incansável',
    generalLoveMeaning: 'O Cavaleiro de Ouros avança devagar, mas com passos firmes como pedra: confiabilidade total, lealdade sem blefe e presença garantida.',
    loveRelationshipMeaning: 'Um parceiro em quem se pode confiar de olhos fechados; o amor que não precisa gritar para provar sua firmeza.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Fase de grande lealdade e constância. A confiabilidade e a maturidade prática do casal são o maior esteio.',
        conhecendo_alguem: 'A pessoa avança com calma e responsabilidade; não promete mundos e fundos, mas cumpre tudo o que diz.',
        distancia: 'A fidelidade e a paciência inabaláveis sustentam a relação mesmo diante de meses de separação física.',
        amor_proprio: 'Você está construindo uma relação de total confiabilidade consigo mesma: o que promete a si, você cumpre.'
      },
      desafio: {
        meu_relacionamento: 'A rotina excessivamente previsível e a falta de romantismo espontâneo.',
        conhecendo_alguem: 'A lentidão excessiva da pessoa em demonstrar sentimentos, o que pode gerar tédio ou dúvida.',
        distancia: 'A sensação de monotonia nas conversas diárias quando os dias parecem idênticos.',
        amor_proprio: 'O medo da mudança e a resistência a sair de velhos hábitos que já cumpriram seu ciclo.'
      },
      orientacao: {
        meu_relacionamento: 'Valorizem a lealdade e a constância. Em um mundo de amores descartáveis, a fidelidade é ouro puro.',
        conhecendo_alguem: 'Dê tempo para que a confiança se assente; pessoas sérias costumam dar passos calmos e sólidos.',
        distancia: 'Confiem na constância do sentimento; quem é leal não precisa de cobranças de vigilância.',
        amor_proprio: 'Seja fiel aos seus próprios propósitos: continue cuidando de si com a constância de quem sabe o que quer.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos valorizar nossa estabilidade sem deixar que ela vire monotonia sem romance?',
      conhecendo_alguem: 'Essa pessoa me transmite a sensação de porto seguro e confiabilidade?',
      distancia: 'O que me dá certeza da fidelidade e do compromisso do meu parceiro na distância?',
      amor_proprio: 'Sou uma mulher ou homem leal às minhas próprias promessas e limites?'
    },
    microActions: {
      meu_relacionamento: 'Agradeça ao seu amor pela lealdade e pela presença constante em sua vida.',
      conhecendo_alguem: 'Observe a constância das mensagens ao longo das semanas, para além da empolgação inicial.',
      distancia: 'Reafirmem a fidelidade e a tranquilidade mútua com uma mensagem carinhosa.',
      amor_proprio: 'Cumpra uma meta pessoal que você prometeu a si mesma hoje, por menor que seja.'
    }
  },
  {
    id: 76,
    name: 'Rainha de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: 'Rainha',
    element: 'Terra',
    image: '/cards/card_76.jpg',
    keywords: ['Acolhimento Caloroso', 'Cuidado do Lar', 'Prosperidade Sensata', 'Sensualidade Terrena'],
    archetype: 'A Mãe Nutridora da Terra',
    generalLoveMeaning: 'A Rainha de Ouros une a sensatez material ao calor do aconchego: carinho prático, conforto para o corpo e cuidado generoso com quem ama.',
    loveRelationshipMeaning: 'Um lar acolhedor, onde o amor se expressa em uma comida gostosa, em uma cama macia e na segurança de um abraço firme.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'Clima de grande aconchego, generosidade e cuidado mútuo no lar. O afeto é nutrido no conforto do dia a dia.',
        conhecendo_alguem: 'A pessoa é acolhedora, sensata e prática; transmite segurança e vontade de cuidar e ser cuidada.',
        distancia: 'A segurança interior e a maturidade prática tornam a distância suportável com serenidade e fé.',
        amor_proprio: 'Você está cuidando do seu corpo, da sua alimentação, do seu sono e das suas finanças com carinho materno por si.'
      },
      desafio: {
        meu_relacionamento: 'O apego à rotina doméstica ou a sobrecarga de cuidar de tudo e de todos na casa.',
        conhecendo_alguem: 'Assumir cedo demais o papel de cuidadora ou mãe do pretendente.',
        distancia: 'A tristeza por não poder proporcionar aconchego físico e comida caseira para o parceiro no momento.',
        amor_proprio: 'Preocupar-se tanto com a estabilidade e o conforto dos outros até esquecer do seu próprio prazer.'
      },
      orientacao: {
        meu_relacionamento: 'Nutram o corpo e o lar: preparem um prato especial juntos e desfrutem da sensualidade tranquila da convivência.',
        conhecendo_alguem: 'Seja acolhedora, mas deixe que a pessoa também cuide de você e demonstre iniciativa.',
        distancia: 'Enviem presentes confortáveis ou façam agrados que cheguem pelos correios à casa do parceiro.',
        amor_proprio: 'Dê ao seu corpo o descanso e o carinho que ele pede: uma massagem, uma boa noite de sono ou um doce saudável.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'Como podemos tornar nosso lar um refúgio ainda mais aconchegante e pacífico para o nosso casal?',
      conhecendo_alguem: 'Essa pessoa sabe valorizar e cuidar do meu coração de forma prática?',
      distancia: 'Como posso transmitir meu calor e meu aconchego mesmo à distância?',
      amor_proprio: 'Estou tratando o meu corpo como o templo sagrado e precioso que ele é?'
    },
    microActions: {
      meu_relacionamento: 'Prepare um café especial ou faça uma massagem nos pés ou ombros do seu parceiro esta noite.',
      conhecendo_alguem: 'Receba o carinho da pessoa com serenidade e doçura.',
      distancia: 'Envie um delivery surpresa com a comida favorita do parceiro em um dia cansativo de trabalho.',
      amor_proprio: 'Passe um hidratante cheiroso no corpo com calma, agradecendo pela saúde das suas pernas e mãos.'
    }
  },
  {
    id: 77,
    name: 'Rei de Ouros',
    arcana: 'menor',
    suit: 'ouros',
    rank: 'Rei',
    element: 'Terra',
    image: '/cards/card_77.jpg',
    keywords: ['Segurança Inabalável', 'Provedor Sereno', 'Maturidade Material', 'Fidelidade Sólida'],
    archetype: 'O Soberano da Abundância',
    generalLoveMeaning: 'O Rei de Ouros representa a maturidade máxima na vida prática: lealdade inquestionável, firmeza de caráter, generosidade com os recursos e estabilidade que protege.',
    loveRelationshipMeaning: 'Um relacionamento assentado sobre rocha firme, sem sobressaltos ou blefes, com segurança e respeito mútuo.',
    positionMeanings: {
      situacao: {
        meu_relacionamento: 'O casal desfruta de grande estabilidade, maturidade e segurança. Vocês construíram um porto seguro inabalável.',
        conhecendo_alguem: 'A pessoa tem postura madura, vida estruturada e atitudes honradas; não faz promessas vazias.',
        distancia: 'A certeza e a capacidade prática de resolver as pendências logísticas garantem a vitória sobre a distância.',
        amor_proprio: 'Você governa sua vida com total maturidade material e emocional: é dona do seu chão e da sua segurança.'
      },
      desafio: {
        meu_relacionamento: 'O materialismo excessivo ou a dificuldade de expressar sentimentos românticos com palavras doces.',
        conhecendo_alguem: 'Achar que a estabilidade prática substitui a necessidade de conexão emocional e química.',
        distancia: 'A rigidez em relação a cronogramas ou orçamentos para os encontros.',
        amor_proprio: 'Medir seu valor amoroso pelo tamanho das suas conquistas materiais ou financeiras.'
      },
      orientacao: {
        meu_relacionamento: 'Celebrem a segurança que vocês construíram. Sejam generosos com o tempo e o carinho mútuo.',
        conhecendo_alguem: 'Valorize quem oferece solidez, respeito e honra; a estabilidade é a melhor base para a paixão durar.',
        distancia: 'Usem a inteligência prática para planejar a transição definitiva para viverem juntos.',
        amor_proprio: 'Reconheça a solidez que você conquistou na sua vida: você é uma pessoa confiável, segura e nobre.'
      }
    },
    reflectionQuestions: {
      meu_relacionamento: 'O que em nossa estabilidade prática podemos comemorar com gratidão e generosidade?',
      conhecendo_alguem: 'Essa pessoa demonstra a maturidade e a honra necessárias para um relacionamento duradouro?',
      distancia: 'Qual é a estratégia prática mais segura para consolidarmos nossa convivência definitiva?',
      amor_proprio: 'Eu reconheço a firmeza do meu próprio chão e a dignidade das minhas conquistas?'
    },
    microActions: {
      meu_relacionamento: 'Agradeça ao parceiro pelo empenho e pela segurança que ele traz para a vida a dois.',
      conhecendo_alguem: 'Observe a maturidade com que a pessoa lida com dinheiro e compromissos.',
      distancia: 'Definam uma meta financeira clara para a mudança ou o reencontro definitivo.',
      amor_proprio: 'Revise suas metas para os próximos anos com a serenidade de quem sabe construir o próprio futuro.'
    }
  }
];
