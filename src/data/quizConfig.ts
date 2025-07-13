import { QuizQuestion, QuizResult } from '../types/quiz';

export const quizConfig = {
  title: "Descubra o Motivo do Seu Emagrecimento Ter Falhado Até Hoje",
  subtitle: "Quiz completo para desbloquear seu protocolo personalizado mounjaro natural",
  totalQuestions: 29, // Atualizado para 29 perguntas
  offerQuestions: 5, // Separate offer questions
};

export const quizQuestions: QuizQuestion[] = [
  // PERGUNTAS INICIAIS DE PERFIL
  {
    id: 'q0_height',
    question: 'Qual é a sua altura? (em cm)',
    type: 'slider',
    min: 140,
    max: 210,
    step: 1,
    unit: 'cm',
    options: [
      { id: 'height', text: '', value: '' }
    ],
    microFeedback: 'A altura é fundamental para calcular seu IMC e entender melhor seu perfil metabólico.'
  },
  {
    id: 'q0_weight',
    question: 'Qual é o seu peso atual? (em kg)',
    type: 'slider',
    min: 40,
    max: 200,
    step: 0.1,
    unit: 'kg',
    options: [
      { id: 'weight', text: '', value: '' }
    ],
    microFeedback: 'O peso atual, junto com a altura, nos permite calcular seu IMC e personalizar ainda mais o protocolo.'
  },
  {
    id: 'q0_age',
    question: 'Qual é a sua faixa etária? 🎂',
    type: 'single',
    options: [
      { id: 'age_18_25', text: '18-25 anos 🌸', value: 'young', points: 15, microFeedback: 'Seu metabolismo está a seu favor! Aproveite para criar hábitos que vão durar a vida toda. 💪' },
      { id: 'age_26_35', text: '26-35 anos 💪', value: 'adult', points: 12, microFeedback: 'Essa é a fase de ouro para transformar seu corpo e mente. Você está no controle! ✨' },
      { id: 'age_36_45', text: '36-45 anos 🌟', value: 'mature', points: 8, microFeedback: 'Mudanças inteligentes agora trazem resultados duradouros. Seu tempo é precioso! ⏳' },
      { id: 'age_46_plus', text: '46+ anos 👑', value: 'experienced', points: 5, microFeedback: 'Experiência é seu maior trunfo. Vamos usar a estratégia certa para resultados reais! 👑' },
    ],
    microFeedback: 'Sua idade influencia diretamente na velocidade do seu metabolismo. Quanto mais madura, mais estratégico precisa ser o protocolo! 💡'
  },
  {
    id: 'q0_body_type',
    question: 'Como você descreveria seu tipo de corpo atual? 👗',
    type: 'single',
    options: [
      { id: 'body_slim', text: 'Magra, mas com algumas áreas que me incomodam 🤏', value: 'slim_areas', points: 15, microFeedback: 'Pequenos ajustes podem fazer toda diferença. Seu potencial está logo ali! 🤏' },
      { id: 'body_curvy', text: 'Curvilínea, mas quero definir melhor 💃', value: 'curvy', points: 12, microFeedback: 'Definir e valorizar suas curvas é totalmente possível. Vamos juntas! 💃' },
      { id: 'body_overweight', text: 'Acima do peso que gostaria de estar ⚖️', value: 'overweight', points: 6, microFeedback: 'Reconhecer é o primeiro passo. O próximo é agir com inteligência! ⚖️' },
      { id: 'body_obese', text: 'Muito acima do meu peso ideal 😔', value: 'obese', points: 3, microFeedback: 'Toda jornada começa com um passo. O seu já foi dado! 😔' },
    ],
    microFeedback: 'Cada tipo de corpo responde de forma diferente ao protocolo. Vamos personalizar tudo para você! ✨'
  },
  {
    id: 'q0_dream_body',
    question: 'Qual é o seu corpo dos sonhos? ✨',
    type: 'single',
    options: [
      { id: 'dream_toned', text: 'Tonificada e definida, sem exageros 💪', value: 'toned', points: 12, microFeedback: 'Definição e força são totalmente alcançáveis. O caminho começa agora! 💪' },
      { id: 'dream_slim', text: 'Magra e elegante, como uma modelo 👗', value: 'slim', points: 10, microFeedback: 'Elegância e saúde podem andar juntas. Seu objetivo é possível! 👗' },
      { id: 'dream_curvy', text: 'Curvas no lugar certo, cintura fina 🍑', value: 'curvy_fit', points: 10, microFeedback: 'Cintura fina e curvas? Com estratégia, você chega lá! 🍑' },
      { id: 'dream_healthy', text: 'Saudável e confiante, sem obsessões 🌟', value: 'healthy', points: 8, microFeedback: 'Confiança e saúde são o melhor resultado. Vamos conquistar juntas! 🌟' },
    ],
    microFeedback: 'Seu objetivo é possível! O protocolo vai te levar exatamente onde você quer chegar. Vamos descobrir como! 🚀'
  },

  // ETAPA 1/6: Análise Metabólica 🔬
  {
    id: 'q1',
    question: 'Quando você se olha no espelho 🪞 e vê as áreas que NÃO mudam há anos… o que sente primeiro? 😣',
    type: 'single',
    options: [
      { id: 'q1a', text: 'Eu me sinto frustrada porque meu corpo está me sabotando 😩', value: 'frustration', points: 8, microFeedback: 'Frustração é combustível para mudança! Seu corpo não está te sabotando, só precisa do método certo! 💪' },
      { id: 'q1b', text: 'Eu sinto raiva porque fiz de tudo e ainda estou presa aqui 😡', value: 'anger', points: 6, microFeedback: 'Raiva pode ser transformada em poder! Você fez de tudo, agora vamos fazer do jeito certo! 🔥' },
      { id: 'q1c', text: 'Eu me sinto exausta de tentar mais uma vez e falhar 😞', value: 'exhaustion', points: 3, microFeedback: 'Cansar de tentar é normal! Mas desta vez será diferente. Você merece descansar do sofrimento! 😌' },
      { id: 'q1d', text: 'Eu sinto uma mistura cruel de tudo isso ao mesmo tempo 😣😡😞', value: 'mixed', points: 3, microFeedback: 'Sentir tudo junto é intenso! Mas essa intensidade pode ser canalizada para transformação! ⚡' },
    ],
    microFeedback: 'Essa frustração não é só sua. O mercado de emagrecimento lucra bilhões com mulheres insatisfeitas. Eles não querem que você descubra a verdade. E cada dia que passa, o jogo fica mais difícil. 😰'
  },
  {
    id: 'q2',
    question: 'Qual ciclo mais parece te aprisionar? 🔄',
    type: 'single',
    options: [
      { id: 'q2a', text: 'Eu sempre começo empolgada e desisto em semanas 💪…😞', value: 'motivation', points: 12, microFeedback: 'Motivação é passageira, mas disciplina é construída! Vamos criar hábitos que duram! 🏗️' },
      { id: 'q2b', text: 'Eu me sinto culpada porque um deslize destrói tudo 😬…🗑️', value: 'guilt', points: 8, microFeedback: 'Culpa é o maior sabotador! Um deslize não define você. Vamos aprender a perdoar e seguir! 💝' },
      { id: 'q2c', text: 'Eu faço tudo certo mas nada muda e me sinto estagnada ✅…😐', value: 'stagnation', points: 3, microFeedback: 'Estagnação é sinal de que falta o método certo! Seu esforço vai ser recompensado! 🎯' },
      { id: 'q2d', text: 'Eu vivo um looping que se repete em silêncio, sem aviso 🌀', value: 'loop', points: 8, microFeedback: 'Reconhecer o loop é o primeiro passo para quebrá-lo! Agora você tem a chave! 🔑' },
    ],
    microFeedback: 'Esse ciclo vicioso é alimentado por uma indústria que quer te ver presa. Cada tentativa frustrada é lucro para eles. E a cada recaída, você se afasta mais da liberdade. 😔'
  },
  {
    id: 'q3',
    question: 'Quanto tempo da sua vida você já investiu tentando "resolver" isso? ⏳',
    type: 'single',
    options: [
      { id: 'q3a', text: 'Eu venho tentando há meses 🕒', value: 'months', points: 15, microFeedback: 'Meses de tentativas mostram sua determinação! Agora você vai descobrir o que realmente funciona! ⏰' },
      { id: 'q3b', text: 'Eu já perdi anos da minha vida com isso 🕔', value: 'years', points: 10, microFeedback: 'Anos investidos não foram perdidos! Cada tentativa te trouxe até aqui. Agora é hora de colher! 🌾' },
      { id: 'q3c', text: 'Eu luto contra isso há mais de uma década 🕖', value: 'decade', points: 6, microFeedback: 'Uma década de persistência é admirável! Sua força de vontade é extraordinária! 💎' },
      { id: 'q3d', text: 'Eu carrego essa luta a vida inteira, se for honesta ⏰', value: 'lifetime', points: 3, microFeedback: 'Uma vida inteira de luta merece uma solução definitiva! Chegou a hora de vencer! 👑' },
    ],
    microFeedback: 'O tempo está do lado das indústrias. Quanto mais você tenta e falha, mais elas lucram. Não é só sobre força de vontade: é sobre um sistema feito para te manter presa. ⏰'
  },

  // ETAPA 2/6: Diagnóstico Hormonal 🧬
  {
    id: 'q4',
    question: 'Quando você tentou "comer menos" 🍽️, o que aconteceu de pior?',
    type: 'single',
    options: [
      { id: 'q4a', text: 'Eu sentia uma fome que virava ansiedade e depois culpa 😫→😵→😔', value: 'anxiety', points: 3, microFeedback: 'Fome → Ansiedade → Culpa é um ciclo cruel! Vamos quebrar essa corrente! 🔗' },
      { id: 'q4b', text: 'Eu perdi peso no início, mas depois travei completamente 🚫', value: 'plateau', points: 8, microFeedback: 'Platôs são frustrantes! Mas eles têm uma causa específica que vamos resolver! 📊' },
      { id: 'q4c', text: 'Eu simplesmente não consegui manter por muito tempo 😓', value: 'unsustainable', points: 12, microFeedback: 'Restrição extrema não é sustentável! Vamos encontrar o equilíbrio perfeito! ⚖️' },
      { id: 'q4d', text: 'Eu fiquei obcecada pensando em comida o tempo todo 🍔', value: 'obsessed', points: 3, microFeedback: 'Obsessão por comida é exaustivo! Vamos libertar sua mente dessa prisão! 🧠' },
    ],
    microFeedback: 'A indústria quer que você acredite que é só comer menos. Mas quanto mais você sofre, mais produtos milagrosos eles vendem. E sua fome é o combustível desse sistema. 😰'
  },
  {
    id: 'q5',
    question: 'Quando você tentou "se exercitar mais" 💪, qual foi o tropeço mais frustrante?',
    type: 'single',
    options: [
      { id: 'q5a', text: 'Eu não tinha tempo nem energia pra manter ⏰😴', value: 'time_energy', points: 12, microFeedback: 'Tempo e energia são preciosos! Vamos otimizar ambos para resultados reais! ⚡' },
      { id: 'q5b', text: 'Eu acabei me machucando ou sentindo dores 🤕🩹', value: 'injuries', points: 15, microFeedback: 'Lesões são desmotivantes! Mas exercício inteligente é diferente de exagero! 🎯' },
      { id: 'q5c', text: 'Eu me esforcei demais pra ver quase nada de resultado 😑', value: 'no_results', points: 3, microFeedback: 'Esforço sem resultado é desanimador! Mas agora você vai ver mudanças reais! 📈' },
      { id: 'q5d', text: 'Eu fiz tudo certinho e continuei no mesmo corpo 😞', value: 'same_body', points: 3, microFeedback: 'Fazer tudo certo e não ver mudanças é confuso! O problema não é você! 🔍' },
    ],
    microFeedback: 'O mercado fitness lucra com sua exaustão. Eles querem que você acredite que o problema é você, não o sistema. Mas a verdade é que eles precisam que você continue tentando e falhando. 😔'
  },
  {
    id: 'q6',
    question: 'No fundo, qual conclusão silenciosa você já pensou mas nunca disse em voz alta? 🤐',
    type: 'single',
    options: [
      { id: 'q6a', text: 'Eu acho que meu corpo não responde como o dos outros 😔', value: 'different', points: 8, microFeedback: 'Seu corpo é único, não defeituoso! Vamos trabalhar com ele, não contra ele! 🎨' },
      { id: 'q6b', text: 'Eu sinto que deve ter algo que ainda não descobri 🤔', value: 'missing', points: 12, microFeedback: 'Intuição é poderosa! Você está certa, há algo que falta. Vamos descobrir! 🔍' },
      { id: 'q6c', text: 'Eu penso que talvez não nasci pra ser magra 😞', value: 'genetics', points: 3, microFeedback: 'Genética não é sentença! É apenas um ponto de partida. Vamos reescrever sua história! 📝' },
      { id: 'q6d', text: 'Eu estou cansada de procurar e me decepcionar 😩', value: 'tired', points: 3, microFeedback: 'Cansar de procurar é natural! Mas a busca termina aqui. Você encontrou! 🎯' },
    ],
    microFeedback: 'Essa sensação de "ser diferente" é na verdade seu corpo te avisando que algo está biologicamente errado. E ignorar esses sinais pode ter consequências irreversíveis. 😰'
  },

  // ETAPA 3/6: Sintomas Clínicos 🚨
  {
    id: 'q7',
    question: 'Se sua fome fosse uma criatura viva 👹… qual seria?',
    type: 'single',
    options: [
      { id: 'q7a', text: 'Eu sou o Beliscador Infinito – preciso mastigar o dia inteiro 😋', value: 'constant', points: 8, microFeedback: 'Beliscar constantemente é sinal de desequilíbrio! Vamos regular sua fome natural! 🍃' },
      { id: 'q7b', text: 'Eu sou o Monstro do Açúcar – tenho desejo animal por doces e pão 🍬', value: 'sugar', points: 3, microFeedback: 'Desejo por açúcar é químico! Vamos equilibrar seus hormônios! 🧪' },
      { id: 'q7c', text: 'Eu sou o Poço Sem Fundo – como e ainda fico faminta 😫', value: 'bottomless', points: 3, microFeedback: 'Fome insaciável tem causa! Vamos descobrir e resolver! 🔬' },
      { id: 'q7d', text: 'Eu sou um pouco de tudo, em horários diferentes 😵‍💫', value: 'mixed', points: 8, microFeedback: 'Fome variável é confuso! Mas tem padrão. Vamos decifrar seu código! 🔐' },
    ],
    microFeedback: 'Essa fome "monstruosa" não é normal... é seu corpo em desespero tentando compensar um desequilíbrio hormonal grave. E está ficando pior com o tempo. 😨'
  },
  {
    id: 'q8',
    question: 'O que seu corpo faz cerca de 1h depois de comer? ⏰',
    type: 'single',
    options: [
      { id: 'q8a', text: 'Eu sinto sono pesado e minha mente fica lenta 😴', value: 'sleepy', points: 3, microFeedback: 'Sono após comer é sinal de metabolismo lento! Vamos acelerar sua energia! ⚡' },
      { id: 'q8b', text: 'Eu fico bem por pouco tempo, depois desabo completamente 📉', value: 'crash', points: 3, microFeedback: 'Queda de energia é frustrante! Vamos estabilizar seus níveis! 📊' },
      { id: 'q8c', text: 'Eu continuo igual — nada muda no meu corpo 😐', value: 'same', points: 15, microFeedback: 'Estabilidade é boa! Mas podemos otimizar ainda mais sua energia! 🚀' },
      { id: 'q8d', text: 'Eu nunca reparei, mas talvez esteja me sabotando 😶', value: 'unaware', points: 10, microFeedback: 'Observar o corpo é o primeiro passo! Agora você está mais consciente! 👁️' },
    ],
    microFeedback: 'Essa queda de energia após comer é um sinal de resistência à insulina... seu corpo está perdendo a capacidade de processar alimentos normalmente. 😰'
  },
  {
    id: 'q9',
    question: 'Coloque a palma na barriga. Depois, no braço. Sente diferença de temperatura? 🖐️',
    type: 'single',
    options: [
      { id: 'q9a', text: 'Sim, eu sinto minha barriga mais fria ❄️', value: 'cold_belly', points: 3, microFeedback: 'Barriga fria = metabolismo parado! Vamos ativar essa região! 🔥' },
      { id: 'q9b', text: 'Eu acho que sinto um pouco de diferença 😐', value: 'maybe', points: 8, microFeedback: 'Diferença sutil é sinal! Seu corpo está te dando pistas. Vamos investigar! 🔍' },
      { id: 'q9c', text: 'Eu sinto tudo igual 🤷', value: 'same', points: 15, microFeedback: 'Que ótimo! Temperatura uniforme é um ponto positivo! Vamos otimizar ainda mais sua saúde! 🌟' },
      { id: 'q9d', text: 'Eu nunca percebi isso antes 👀', value: 'never_noticed', points: 12, microFeedback: 'Agora você está mais atenta! Consciência corporal é poder! 💪' },
    ],
    microFeedback: 'Uma barriga fria significa que seu metabolismo está praticamente parado nessa região. Você pode estar carregando quilos de toxinas acumuladas sem saber. 😨'
  },
  {
    id: 'q10',
    question: 'Já teve a sensação de que há duas forças dentro de você — uma querendo emagrecer e outra sabotando tudo? 🥊',
    type: 'single',
    options: [
      { id: 'q10a', text: 'Sim, eu sinto exatamente isso dentro de mim 😤', value: 'exactly', points: 3, microFeedback: 'Essa guerra interna é real! Vamos unificar suas forças para vencer! ⚔️' },
      { id: 'q10b', text: 'Eu nunca pensei assim, mas isso descreve minha vida 🤔', value: 'describes', points: 8, microFeedback: 'Reconhecer o padrão é esclarecedor! Agora você entende o que está acontecendo! 💡' },
      { id: 'q10c', text: 'Não, eu acredito que é só falta de disciplina minha 😴', value: 'discipline', points: 15, microFeedback: 'Disciplina é importante, mas não é tudo! Vamos otimizar sua abordagem! 🎯' },
      { id: 'q10d', text: 'Eu sinto às vezes, mas não sei de onde vem ❓', value: 'sometimes', points: 10, microFeedback: 'Sensação ocasional é confusa! Vamos identificar a origem e resolver! 🕵️' },
    ],
    microFeedback: 'Essa "guerra interna" é real... é seu corpo lutando contra hormônios desregulados. E a cada dia que passa, o lado sabotador está ganhando. 😔'
  },

  // ETAPA 4/6: Avaliação GLP-1 💊
  {
    id: 'q11',
    question: 'Se você soubesse que existe um hormônio que te faz sentir saciedade real, queima gordura e estabiliza energia… faria sentido com tudo que já viveu? 🤔',
    type: 'single',
    options: [
      { id: 'q11a', text: 'Sim, isso explicaria muita coisa que eu vivo 😮', value: 'explains', points: 8, microFeedback: 'Finalmente faz sentido! Seu corpo estava tentando te avisar o tempo todo. Agora você tem a resposta! 💡' },
      { id: 'q11b', text: 'Faz sentido, mas eu quero ver como usar isso 🧠', value: 'how_to_use', points: 12, microFeedback: 'Perfeita atitude! Conhecimento sem ação não muda nada. Vamos te mostrar como aplicar! 🚀' },
      { id: 'q11c', text: 'Me parece simplista, mas eu estou curiosa 👀', value: 'curious', points: 15, microFeedback: 'Ceticismo saudável! Às vezes as soluções mais simples são as mais eficazes. Vamos provar! ✨' },
      { id: 'q11d', text: 'Eu não sei se acredito nisso 🤨', value: 'skeptical', points: 20, microFeedback: 'Ceticismo é natural! Mas e se for verdade? Vale a pena descobrir, não é? 🤔' },
    ],
    microFeedback: 'Se esse hormônio está inativo no seu corpo, cada dia que passa sem ativá-lo é um dia a mais de sofrimento desnecessário. O tempo está contra você. ⏰'
  },
  {
    id: 'q12',
    question: 'Você já ouviu falar de GLP-1 antes? ❓',
    type: 'single',
    options: [
      { id: 'q12a', text: 'Não, eu estou ouvindo pela primeira vez 😶', value: 'first_time', points: 15, microFeedback: 'Não se preocupe! A maioria das pessoas não conhece. Mas agora você vai descobrir o poder dele! 💪' },
      { id: 'q12b', text: 'Eu já ouvi, mas não sabia o que era 🤔', value: 'heard_not_knew', points: 12, microFeedback: 'Ótimo! Você já tinha ouvido falar. Agora vamos te explicar como ele pode transformar sua vida! 🌟' },
      { id: 'q12c', text: 'Sim, mas eu achava que só funcionava com remédio 💉', value: 'medicine_only', points: 8, microFeedback: 'Exato! A indústria quer que você pense isso. Mas a natureza tem a resposta! 🌿' },
      { id: 'q12d', text: 'Eu só ouvi por alto 👂', value: 'briefly', points: 15, microFeedback: 'Perfeito! Agora você vai entender completamente como ele funciona e como ativá-lo! 📚' },
    ],
    microFeedback: 'Milhares de pessoas estão gastando R$ 1.200/mês em Ozempic para ativar esse hormônio... enquanto você pode estar perdendo a chance de fazer isso naturalmente. 😰'
  },
  {
    id: 'q13',
    question: 'O que mais te irrita em relação à fome? 😫',
    type: 'single',
    options: [
      { id: 'q13a', text: 'Eu nunca me sinto cheia de verdade 😣', value: 'never_full', points: 3, microFeedback: 'Essa sensação é frustrante! Mas tem solução. Seu corpo pode aprender a se sentir saciado! 🎯' },
      { id: 'q13b', text: 'Eu fico com fome logo depois de comer 🍽️', value: 'hungry_soon', points: 8, microFeedback: 'Isso é sinal de desequilíbrio hormonal! Vamos regular sua fome de forma natural! ⚖️' },
      { id: 'q13c', text: 'Eu preciso de sobremesa ou fico insatisfeita 🍬', value: 'need_dessert', points: 3, microFeedback: 'Desejo por doces é hormonal! Vamos equilibrar isso e você vai se sentir satisfeita! 🍯' },
      { id: 'q13d', text: 'Eu sinto tudo isso junto e me desespero 😵‍💫', value: 'all_together', points: 3, microFeedback: 'Você não está sozinha! Muitas mulheres sentem isso. Mas tem solução! 💝' },
    ],
    microFeedback: 'Essa fome insaciável é seu cérebro em pânico, tentando compensar um desequilíbrio químico. Cada dia sem tratar isso, o vício fica mais forte. 😰'
  },
  {
    id: 'q14',
    question: 'Como estão seus níveis de energia ao longo do dia? ⚡',
    type: 'single',
    options: [
      { id: 'q14a', text: 'Eu despenco depois das refeições 📉', value: 'crash_after_meals', points: 3, microFeedback: 'Isso é resistência à insulina! Seu corpo está perdendo energia. Vamos corrigir isso! 🔋' },
      { id: 'q14b', text: 'Eu vivo altos e baixos constantes 🎢', value: 'ups_downs', points: 8, microFeedback: 'Montanha-russa de energia é exaustivo! Vamos estabilizar seus níveis! 📊' },
      { id: 'q14c', text: 'Eu vivo cansada, mesmo dormindo bem 😴', value: 'always_tired', points: 3, microFeedback: 'Fadiga constante não é normal! Seu metabolismo precisa de ajuda! ⚡' },
      { id: 'q14d', text: 'Eu me sinto bem e estável 😐', value: 'stable', points: 15, microFeedback: 'Que ótimo! Sua energia está estável. Vamos otimizar ainda mais! 🚀' },
    ],
    microFeedback: 'Essa montanha-russa de energia está destruindo seu metabolismo aos poucos. Seu corpo está entrando em colapso energético. 😨'
  },
  {
    id: 'q15',
    question: 'Saber que grandes remédios como as famosas canetinhas do emagrecimento atuam SÓ no GLP-1 e que você pode ativá-lo com chá e horário certo… o que isso te faz pensar? 💡',
    type: 'single',
    options: [
      { id: 'q15a', text: 'Eu sinto que perdi anos indo pelo caminho mais difícil 😞', value: 'wasted_years', points: 8, microFeedback: 'Não foi tempo perdido! Cada tentativa te trouxe até aqui. Agora você tem a resposta! 🎯' },
      { id: 'q15b', text: 'Eu sinto que finalmente encontrei a causa real 🤓', value: 'found_cause', points: 10, microFeedback: 'Exato! Você encontrou a raiz do problema. Agora é hora de agir! 💪' },
      { id: 'q15c', text: 'Eu preciso disso pra ontem 🏃‍♂️', value: 'need_now', points: 3, microFeedback: 'Urgência é sinal de que você está pronta! Vamos começar agora! ⚡' },
      { id: 'q15d', text: 'Eu acho que é hora de testar antes de julgar 🚀', value: 'test_first', points: 15, microFeedback: 'Atitude científica! Testar é a melhor forma de descobrir. Vamos lá! 🔬' },
    ],
    microFeedback: 'Pensar que você poderia ter evitado anos de sofrimento se soubesse disso antes... Mas agora você sabe. A pergunta é: vai agir ou deixar passar? 😔'
  },

  // ETAPA 5/6: Exame de Inflamação 🔥
  {
    id: 'q16',
    question: 'Imagine que existe uma inflamação silenciosa no seu intestino, abafando a produção do hormônio que controla sua fome, energia e queima de gordura. O que essa ideia te desperta? 😳',
    type: 'single',
    options: [
      { id: 'q16a', text: 'Eu sinto uma sensação de alívio — finalmente faz sentido 😌', value: 'relief', points: 10, microFeedback: 'Alívio é natural! Agora tudo faz sentido. Vamos resolver isso! 😌' },
      { id: 'q16b', text: 'Eu sinto raiva — porque ninguém nunca me explicou isso 😣', value: 'anger', points: 8, microFeedback: 'Raiva é justificada! Mas agora você tem a informação. Vamos usar a seu favor! 🔥' },
      { id: 'q16c', text: 'Eu sinto urgência — preciso reverter isso agora 🏃‍♀️', value: 'urgency', points: 3, microFeedback: 'Urgência é necessária! Quanto antes agir, melhor. Vamos começar! ⚡' },
      { id: 'q16d', text: 'Eu tive um estalo — é isso que estava ignorando 💡', value: 'realization', points: 8, microFeedback: 'Estalo perfeito! Às vezes precisamos ver de outro ângulo. Agora você vê! 💡' },
    ],
    microFeedback: 'Essa inflamação silenciosa está corroendo seu metabolismo por dentro. Cada dia que passa sem tratar, ela fica mais agressiva e resistente. 😰'
  },
  {
    id: 'q17',
    question: 'Se essa inflamação seguir ativa por mais 2-3 anos... como você se enxerga? 😔',
    type: 'single',
    options: [
      { id: 'q17a', text: 'Eu me vejo mais cansada, mais pesada, mais frustrada 😩', value: 'worse', points: 3, microFeedback: 'Esse futuro não precisa acontecer! Você pode mudar o curso agora! 🛤️' },
      { id: 'q17b', text: 'Eu me vejo presa no mesmo corpo, com os mesmos medos 😞', value: 'trapped', points: 8, microFeedback: 'Você não está presa! Tem a chave para se libertar. Vamos usar! 🔑' },
      { id: 'q17c', text: 'Eu me vejo esperando que algo mude sem mudar nada 🙏', value: 'waiting', points: 12, microFeedback: 'Esperar não vai mudar nada! Ação é o que transforma. Vamos agir! 💪' },
      { id: 'q17d', text: 'Eu me vejo tentando fingir que não me importo mais 😐', value: 'pretending', points: 15, microFeedback: 'Fingir não funciona! Mas você se importa sim. Vamos cuidar de você! 💝' },
    ],
    microFeedback: 'Imaginar seu futuro assim é assustador, né? Mas é exatamente para onde você está caminhando se não agir agora. O tempo não perdoa. ⏰'
  },
  {
    id: 'q18',
    question: 'Você sabia que grandes remédios como a famosa canetinha (Exemplo: Ozempic, Mounjaro) "imitar o Mounjaro" (que é melhor que o Ozempic) podem ser substituídos por 3 chás naturais por dia? Se soubesse, qual seria a prioridade de aplicar isso na sua vida? 🚨',
    type: 'single',
    options: [
      { id: 'q18a', text: 'Máxima — eu não suporto mais me sentir assim 😣', value: 'maximum', points: 3, microFeedback: 'Você chegou ao limite! Agora é hora de agir. Vamos transformar sua vida! 🚀' },
      { id: 'q18b', text: 'Alta — eu preciso entender e aplicar agora 🏃‍♂️', value: 'high', points: 8, microFeedback: 'Perfeita prioridade! Entender e aplicar é o caminho certo! 📚' },
      { id: 'q18c', text: 'Média — eu quero ver se isso funciona pra mim 🤔', value: 'medium', points: 12, microFeedback: 'Ceticismo saudável! Vamos provar que funciona para você! 🔬' },
      { id: 'q18d', text: 'Baixa — eu ainda me falta clareza 😶', value: 'low', points: 15, microFeedback: 'Clareza vem com informação! Vamos te dar todas as respostas! 💡' },
    ],
    microFeedback: 'Se a prioridade não é máxima, talvez você ainda não entendeu a gravidade da situação. Seu corpo está pedindo socorro. 😰'
  },
  {
    id: 'q19',
    question: 'O mercado cobra R$ 1.000+ por mês pra ativar o GLP-1 com agulha. Saber que isso pode ser feito com ingredientes naturais... te faz pensar o quê? 💸',
    type: 'single',
    options: [
      { id: 'q19a', text: 'Eu sinto que o sistema escondeu isso de mim 😤', value: 'hidden', points: 8, microFeedback: 'O sistema lucra com sua ignorância! Mas agora você sabe a verdade! 💰' },
      { id: 'q19b', text: 'Eu sinto que finalmente encontrei a saída verdadeira 🚪', value: 'found_exit', points: 3, microFeedback: 'Exato! Você encontrou a porta de saída. Agora é só passar por ela! 🚪' },
      { id: 'q19c', text: 'Eu sempre soube que o natural vence no longo prazo 🌿', value: 'natural_wins', points: 12, microFeedback: 'Sábio! A natureza sempre tem as melhores respostas! 🌿' },
      { id: 'q19d', text: 'Eu sinto que é minha chance de assumir o controle 🎉', value: 'take_control', points: 8, microFeedback: 'Perfeito! É hora de assumir o controle da sua saúde! 👑' },
    ],
    microFeedback: 'Enquanto você gasta R$ 1.200/mês em remédios, sua solução pode estar numa xícara de chá. Mas só se você agir antes que seja tarde demais. ⏰'
  },
  {
    id: 'q19_event',
    question: 'Você tem algum evento que gostaria de ir mais magra ainda nos próximos 90 dias?',
    type: 'single',
    options: [
      { id: 'event_casamento', text: 'Casamento', value: 'casamento', points: 1, microFeedback: 'Casamento é um momento especial! Você merece se sentir linda e confiante no seu grande dia! 💒✨' },
      { id: 'event_formatura', text: 'Formatura', value: 'formatura', points: 1, microFeedback: 'Formatura é uma conquista incrível! Vamos te ajudar a celebrar com o corpo dos sonhos! 🎓🌟' },
      { id: 'event_viagem', text: 'Viagem especial', value: 'viagem', points: 1, microFeedback: 'Viagem especial merece preparação especial! Você vai se sentir incrível nas fotos! ✈️🌍' },
      { id: 'event_aniversario', text: 'Meu aniversário', value: 'aniversario', points: 1, microFeedback: 'Seu aniversário é seu dia! Vamos te ajudar a se presentear com o corpo que sempre quis! 🎂🎉' },
      { id: 'event_outro', text: 'Outro evento', value: 'outro', points: 1, microFeedback: 'Todo evento especial merece que você se sinta incrível! Vamos te preparar para brilhar! ⭐✨' },
      { id: 'event_nenhum', text: 'Nenhum evento específico', value: 'nenhum', points: 10, microFeedback: 'Perfeito! Às vezes a melhor motivação é simplesmente se sentir bem consigo mesma! 💝' },
    ],
    microFeedback: 'Ter um evento como motivação pode acelerar ainda mais seus resultados!'
  },
  {
    id: 'q20',
    question: 'Com tudo o que foi revelado... você está pronto(a) para iniciar a fase final — e ativar seu interruptor metabólico com o protocolo exato dos 3 chás? 🚀',
    type: 'single',
    options: [
      { id: 'q20a', text: 'Sim, eu estou 100% pronta 💪', value: 'ready_100', points: 1, microFeedback: 'Você está pronta? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q20b', text: 'Sim, eu quero entender como aplicar isso 📝', value: 'want_to_learn', points: 4, microFeedback: 'Você quer entender como aplicar? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q20c', text: 'Sim, eu cansei de viver no corpo errado 😩', value: 'tired_wrong_body', points: 1, microFeedback: 'Você sente que está cansada de viver no corpo errado? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q20d', text: 'Eu ainda não estou, mas estou perto 😐', value: 'almost', points: 8, microFeedback: 'Você ainda não está pronta? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
    ],
    microFeedback: 'Se você não está 100% pronta agora, depois de tudo que descobriu sobre seu corpo, quando vai estar? O tempo está passando... 😔'
  },

  // ETAPA 6/6: Protocolo Personalizado 🌿 (SEM PONTOS)
  {
    id: 'q21',
    question: 'Baseado no seu perfil, você precisa do protocolo dos 3 chás metabólicos. Qual plano se encaixa melhor na sua situação? 💡',
    type: 'single',
    options: [
      { id: 'q21a', text: 'Plano Básico - R$29,90/mês (protocolo dos 3 chás) 🧪', value: 'basic', points: 0, microFeedback: 'Você precisa do protocolo? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q21b', text: 'Plano Completo - R$39,90/mês (protocolo + 4 bônus) 💪', value: 'complete', points: 0, microFeedback: 'Você precisa do protocolo? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q21c', text: 'Plano Vitalício - R$97 único (tudo dos outros planos + acompanhamento por 1 mês) 🌟', value: 'lifetime', points: 0, microFeedback: 'Você precisa do protocolo? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q21d', text: 'Ainda não tenho certeza 🤔', value: 'unsure', points: 0, microFeedback: 'Você ainda tem dúvidas? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
    ],
    microFeedback: ''
  },
  {
    id: 'q22',
    question: 'O plano completo inclui 4 bônus estratégicos. Qual você mais precisa? 🎁',
    type: 'single',
    options: [
      { id: 'q22a', text: 'Jejum Metabólico Coreano (emagrecer sem sofrimento) 🇰🇷', value: 'korean_fasting', points: 0, microFeedback: 'Você precisa de um jejum? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q22b', text: 'Vício em Doces Nunca Mais (parar compulsão) 🍬', value: 'sugar_addiction', points: 0, microFeedback: 'Você precisa parar de comer doces? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q22c', text: 'Receita da Vovó (limpar intestino) 👵', value: 'grandma_recipe', points: 0, microFeedback: 'Você precisa limpar seu intestino? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q22d', text: 'Acelerador Metabólico Subconsciente 🧠', value: 'subconscious', points: 0, microFeedback: 'Você precisa acelerar seu metabolismo? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
    ],
    microFeedback: ''
  },
  {
    id: 'q23',
    question: 'Você tem 15 dias de garantia total. Se não funcionar, devolvemos 100% do seu dinheiro. Isso te dá mais confiança? 🛡️',
    type: 'single',
    options: [
      { id: 'q23a', text: 'Sim, posso testar sem risco 🚀', value: 'no_risk', points: 0, microFeedback: 'Você tem confiança? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q23b', text: 'Sim, isso me dá segurança total 🔒', value: 'security', points: 0, microFeedback: 'Você tem segurança? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q23c', text: 'Sim, posso sair do modo "esperar e torcer" ⏳', value: 'stop_waiting', points: 0, microFeedback: 'Você sente que está esperando? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q23d', text: 'Ainda tenho dúvidas 😐', value: 'still_doubts', points: 0, microFeedback: 'Você ainda tem dúvidas? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
    ],
    microFeedback: ''
  },
  {
    id: 'q24',
    question: 'Última pergunta: Você está pronta para assumir o controle do seu metabolismo e transformar seu corpo de uma vez por todas? 🚀',
    type: 'single',
    options: [
      { id: 'q24a', text: 'SIM! Estou 100% pronta para mudar 💪', value: 'ready_100', points: 0, microFeedback: 'Você está pronta? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q24b', text: 'SIM! Cansei de viver no corpo errado 😤', value: 'tired_wrong_body', points: 0, microFeedback: 'Você sente que está cansada de viver no corpo errado? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q24c', text: 'SIM! Quero o protocolo agora 🏃‍♀️', value: 'want_now', points: 0, microFeedback: 'Você quer o protocolo? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q24d', text: 'Ainda não estou decidida 😐', value: 'not_decided', points: 0, microFeedback: 'Você ainda não está decidida? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
    ],
    microFeedback: ''
  },
  {
    id: 'q25',
    question: 'OFERTA ESPECIAL: Como você completou o diagnóstico, desbloqueou desconto especial! Qual plano escolhe? 🎯',
    type: 'single',
    options: [
      { id: 'q25a', text: 'BÁSICO - R$29,90/mês (protocolo dos 3 chás) 💳', value: 'basic', points: 0, microFeedback: 'Você quer o plano básico? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q25b', text: 'COMPLETO - R$39,90/mês (protocolo + 4 bônus) 💪', value: 'complete', points: 0, microFeedback: 'Você quer o plano completo? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q25c', text: 'VITALÍCIO - R$97 único (tudo dos outros planos + acompanhamento por 1 mês) 🌟', value: 'lifetime', points: 0, microFeedback: 'Você quer o plano vitalício? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
      { id: 'q25d', text: 'Não quero agora 😐', value: 'not_now', points: 0, microFeedback: 'Você não quer agora? A verdade é que você pode encontrar a paz e a liberdade. 🌟' },
    ],
    microFeedback: ''
  },
];

export const quizResults: QuizResult[] = [
  {
    id: 'critico',
    title: '🧠 Diagnóstico: Síndrome Metabólica Severa',
    description: `Seu metabolismo não está <strong>"lento"</strong>. <span style="color:#d97706;font-weight:bold">Ele está entregando os pontos.</span><br><br>
Níveis hormonais desajustados, respostas inflamatórias crônicas, resistência à insulina — <strong>seu corpo foi empurrado para um estado onde nada funciona como deveria.</strong><br><br>
<span style="color:#be185d;font-weight:bold">Não é sobre estética. É sobre desempenho de vida.</span><br><br>
Você acorda cansado, come “certo” e não muda, sente que está sempre no freio de mão puxado.<br>
<span style="color:#991b1b;font-weight:bold">Mas a verdade?</span><br>
Seu sistema inteiro foi sabotado por anos de decisões automáticas que hoje te mantêm travado.`,
    recommendation: `<span style="font-size:1.1em;font-weight:bold">💥 Recomendação</span><br>
Nada menos que uma <strong>reprogramação metabólica completa</strong>.<br><br>
O protocolo dos 3 chás é um <span style="color:#2563eb;font-weight:bold">gatilho diário de reengenharia bioquímica</span>, e cada bônus acelera sua resposta.<br><br>
<span style="color:#b91c1c;font-weight:bold">Esse não é o momento de "testar" ou "começar devagar".</span><br>
É hora de decidir se você quer continuar vivendo em modo rascunho — ou assumir o controle da máquina biológica que carrega seu nome.<br><br>
<strong>🔑 Plano indicado:</strong> <span style="color:#92400e">Plano completo ou vitalício.</span><br>
Qualquer escolha menor é repetir o padrão que te trouxe até aqui: <strong>tentar resolver um colapso com metade do esforço.</strong>`,
    minPoints: 0,
    maxPoints: 99,
  },
  {
    id: 'severo',
    title: '🔥 Diagnóstico: Disrupção Hormonal Avançada',
    description: `<span style="color:#ea580c;font-weight:bold">Seus hormônios estão jogando contra você</span> — e não é drama.<br><br>
A inflamação intestinal está travando a produção de hormônios essenciais, criando um ciclo silencioso onde você sente menos energia, menos disposição, menos resultados — mesmo quando “faz tudo certo”.<br><br>
<span style="color:#be185d;font-weight:bold">Seu corpo parece sabotador, mas só está reagindo ao ambiente que você criou.</span>`,
    recommendation: `<span style="font-size:1.1em;font-weight:bold">💥 Recomendação</span><br>
Aqui não basta aliviar sintomas.<br>
<strong>É preciso interromper o ciclo na raiz</strong> — e isso começa reduzindo o incêndio invisível que acontece todo dia no seu intestino.<br><br>
O protocolo dos 3 chás tem <span style="color:#ea580c;font-weight:bold">foco específico nesse processo</span>.<br>
Mas se você quiser que os resultados sejam duradouros — e não mais uma fase — <strong>o plano completo é sua escolha lógica.</strong><br><br>
<span style="color:#b91c1c;font-weight:bold">Se você não mudar a química, não adianta mudar a rotina.</span><br>
Seu corpo vai continuar travando cada tentativa.`,
    minPoints: 100,
    maxPoints: 149,
  },
  {
    id: 'moderado',
    title: '🔶 Diagnóstico: Inflamação Metabólica Crônica',
    description: `<span style="color:#f59e42;font-weight:bold">Seu corpo está inflamado.</span><br>
Não ao ponto do colapso — mas o suficiente para sabotar silenciosamente cada esforço seu.<br><br>
Você tenta dormir bem… e acorda cansado.<br>
Começa a treinar… e para na terceira semana.<br>
Reduz a comida… e a balança nem se mexe.<br><br>
<span style="color:#be185d;font-weight:bold">A boa notícia?</span><br>
Você ainda está no ponto onde reverter é simples — desde que comece agora.`,
    recommendation: `<span style="font-size:1.1em;font-weight:bold">⚙️ Recomendação</span><br>
O protocolo dos 3 chás é o <span style="color:#2563eb;font-weight:bold">gatilho que seu corpo precisa para quebrar esse ciclo</span>.<br><br>
Ele ativa a produção natural de <strong>GLP-1</strong> — o hormônio que regula apetite, energia e metabolismo — e inicia uma reprogramação suave, mas profunda.<br><br>
O <strong>plano básico</strong> é suficiente para acender essa mudança.<br>
Mas não pense que é “leve” — pense como um botão que ativa a versão 2.0 do seu corpo.<br><br>
<span style="color:#059669;font-weight:bold">É o começo.<br>Mas um começo que muda tudo.</span>`,
    minPoints: 150,
    maxPoints: 249,
  },
  {
    id: 'otimo',
    title: '🟢 Diagnóstico: Metabolismo Funcionando Bem',
    description: `<span style="color:#059669;font-weight:bold">Parabéns — seu corpo está jogando a seu favor.</span><br><br>
Seu metabolismo está operando com eficiência, e isso coloca você numa posição rara: <strong>você não precisa corrigir. Você pode ESCALAR.</strong><br><br>
Mas cuidado: manter o que funciona exige mais do que sorte.<br><br>
A maioria das pessoas que “está bem” relaxa… e escorrega para o mesmo ciclo de oscilação que você passou anos evitando.`,
    recommendation: `<span style="font-size:1.1em;font-weight:bold">🚀 Recomendação</span><br>
Você está no melhor momento possível para <strong>blindar seus resultados e acelerar sua performance</strong>.<br><br>
O protocolo dos 3 chás, nesse cenário, não é remédio — é <span style="color:#2563eb;font-weight:bold">otimizador estratégico</span>.<br>
Usado como manutenção, ele mantém sua resposta hormonal no pico, afina sua sensibilidade metabólica e ajuda seu corpo a responder ainda melhor a cada estímulo.<br><br>
<span style="color:#be185d;font-weight:bold">Não compre porque você precisa.<br>Compre porque você PODE aproveitar como quase ninguém.<br>E sair do “bem” para o extraordinário.</span>`,
    minPoints: 250,
    maxPoints: 9999,
  },
];