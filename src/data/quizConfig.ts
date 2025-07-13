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
    id: 'q0_age',
    question: 'Qual é a sua faixa etária? 🎂',
    type: 'single',
    options: [
      { id: 'age_18_25', text: '18-25 anos 🌸', value: 'young', points: 10 },
      { id: 'age_26_35', text: '26-35 anos 💪', value: 'adult', points: 8 },
      { id: 'age_36_45', text: '36-45 anos 🌟', value: 'mature', points: 6 },
      { id: 'age_46_plus', text: '46+ anos 👑', value: 'experienced', points: 4 },
    ],
    microFeedback: 'Sua idade influencia diretamente na velocidade do seu metabolismo. Quanto mais madura, mais estratégico precisa ser o protocolo! 💡'
  },
  {
    id: 'q0_body_type',
    question: 'Como você descreveria seu tipo de corpo atual? 👗',
    type: 'single',
    options: [
      { id: 'body_slim', text: 'Magra, mas com algumas áreas que me incomodam 🤏', value: 'slim_areas', points: 10 },
      { id: 'body_curvy', text: 'Curvilínea, mas quero definir melhor 💃', value: 'curvy', points: 8 },
      { id: 'body_overweight', text: 'Acima do peso que gostaria de estar ⚖️', value: 'overweight', points: 4 },
      { id: 'body_obese', text: 'Muito acima do meu peso ideal 😔', value: 'obese', points: 2 },
    ],
    microFeedback: 'Cada tipo de corpo responde de forma diferente ao protocolo. Vamos personalizar tudo para você! ✨'
  },
  {
    id: 'q0_dream_body',
    question: 'Qual é o seu corpo dos sonhos? ✨',
    type: 'single',
    options: [
      { id: 'dream_toned', text: 'Tonificada e definida, sem exageros 💪', value: 'toned', points: 8 },
      { id: 'dream_slim', text: 'Magra e elegante, como uma modelo 👗', value: 'slim', points: 6 },
      { id: 'dream_curvy', text: 'Curvas no lugar certo, cintura fina 🍑', value: 'curvy_fit', points: 6 },
      { id: 'dream_healthy', text: 'Saudável e confiante, sem obsessões 🌟', value: 'healthy', points: 4 },
    ],
    microFeedback: 'Seu objetivo é possível! O protocolo vai te levar exatamente onde você quer chegar. Vamos descobrir como! 🚀'
  },

  // ETAPA 1/6: Desmascarando o Ciclo Invisível 😈
  {
    id: 'q1',
    question: 'Quando você se olha no espelho 🪞 e vê as áreas que NÃO mudam há anos… o que sente primeiro? 😣',
    type: 'single',
    options: [
      { id: 'q1a', text: 'Eu me sinto frustrada porque meu corpo está me sabotando 😩', value: 'frustration', points: 3 },
      { id: 'q1b', text: 'Eu sinto raiva porque fiz de tudo e ainda estou presa aqui 😡', value: 'anger', points: 2 },
      { id: 'q1c', text: 'Eu me sinto exausta de tentar mais uma vez e falhar 😞', value: 'exhaustion', points: 1 },
      { id: 'q1d', text: 'Eu sinto uma mistura cruel de tudo isso ao mesmo tempo 😣😡😞', value: 'mixed', points: 1 },
    ],
    microFeedback: 'Essa frustração não é só sua. O mercado de emagrecimento lucra bilhões com mulheres insatisfeitas. Eles não querem que você descubra a verdade. E cada dia que passa, o jogo fica mais difícil. 😰'
  },
  {
    id: 'q2',
    question: 'Qual ciclo mais parece te aprisionar? 🔄',
    type: 'single',
    options: [
      { id: 'q2a', text: 'Eu sempre começo empolgada e desisto em semanas 💪…😞', value: 'motivation', points: 6 },
      { id: 'q2b', text: 'Eu me sinto culpada porque um deslize destrói tudo 😬…🗑️', value: 'guilt', points: 3 },
      { id: 'q2c', text: 'Eu faço tudo certo mas nada muda e me sinto estagnada ✅…😐', value: 'stagnation', points: 1 },
      { id: 'q2d', text: 'Eu vivo um looping que se repete em silêncio, sem aviso 🌀', value: 'loop', points: 3 },
    ],
    microFeedback: 'Esse ciclo vicioso é alimentado por uma indústria que quer te ver presa. Cada tentativa frustrada é lucro para eles. E a cada recaída, você se afasta mais da liberdade. 😔'
  },
  {
    id: 'q3',
    question: 'Quanto tempo da sua vida você já investiu tentando "resolver" isso? ⏳',
    type: 'single',
    options: [
      { id: 'q3a', text: 'Eu venho tentando há meses 🕒', value: 'months', points: 8 },
      { id: 'q3b', text: 'Eu já perdi anos da minha vida com isso 🕔', value: 'years', points: 6 },
      { id: 'q3c', text: 'Eu luto contra isso há mais de uma década 🕖', value: 'decade', points: 3 },
      { id: 'q3d', text: 'Eu carrego essa luta a vida inteira, se for honesta ⏰', value: 'lifetime', points: 1 },
    ],
    microFeedback: 'O tempo está do lado das indústrias. Quanto mais você tenta e falha, mais elas lucram. Não é só sobre força de vontade: é sobre um sistema feito para te manter presa. ⏰'
  },

  // ETAPA 2/6: As Mentiras que o Mercado Te Fez Acreditar 🤥
  {
    id: 'q4',
    question: 'Quando você tentou "comer menos" 🍽️, o que aconteceu de pior?',
    type: 'single',
    options: [
      { id: 'q4a', text: 'Eu sentia uma fome que virava ansiedade e depois culpa 😫→😵→😔', value: 'anxiety', points: 1 },
      { id: 'q4b', text: 'Eu perdi peso no início, mas depois travei completamente 🚫', value: 'plateau', points: 3 },
      { id: 'q4c', text: 'Eu simplesmente não consegui manter por muito tempo 😓', value: 'unsustainable', points: 5 },
      { id: 'q4d', text: 'Eu fiquei obcecada pensando em comida o tempo todo 🍔', value: 'obsessed', points: 1 },
    ],
    microFeedback: 'A indústria quer que você acredite que é só comer menos. Mas quanto mais você sofre, mais produtos milagrosos eles vendem. E sua fome é o combustível desse sistema. 😰'
  },
  {
    id: 'q5',
    question: 'Quando você tentou "se exercitar mais" 💪, qual foi o tropeço mais frustrante?',
    type: 'single',
    options: [
      { id: 'q5a', text: 'Eu não tinha tempo nem energia pra manter ⏰😴', value: 'time_energy', points: 6 },
      { id: 'q5b', text: 'Eu acabei me machucando ou sentindo dores 🤕🩹', value: 'injuries', points: 8 },
      { id: 'q5c', text: 'Eu me esforcei demais pra ver quase nada de resultado 😑', value: 'no_results', points: 1 },
      { id: 'q5d', text: 'Eu fiz tudo certinho e continuei no mesmo corpo 😞', value: 'same_body', points: 1 },
    ],
    microFeedback: 'O mercado fitness lucra com sua exaustão. Eles querem que você acredite que o problema é você, não o sistema. Mas a verdade é que eles precisam que você continue tentando e falhando. 😔'
  },
  {
    id: 'q6',
    question: 'No fundo, qual conclusão silenciosa você já pensou mas nunca disse em voz alta? 🤐',
    type: 'single',
    options: [
      { id: 'q6a', text: 'Eu acho que meu corpo não responde como o dos outros 😔', value: 'different', points: 3 },
      { id: 'q6b', text: 'Eu sinto que deve ter algo que ainda não descobri 🤔', value: 'missing', points: 5 },
      { id: 'q6c', text: 'Eu penso que talvez não nasci pra ser magra 😞', value: 'genetics', points: 1 },
      { id: 'q6d', text: 'Eu estou cansada de procurar e me decepcionar 😩', value: 'tired', points: 1 },
    ],
    microFeedback: 'Essa sensação de "ser diferente" é na verdade seu corpo te avisando que algo está biologicamente errado. E ignorar esses sinais pode ter consequências irreversíveis. 😰'
  },

  // ETAPA 3/6: Os Sinais Que Você Aprendeu a Ignorar 🚨
  {
    id: 'q7',
    question: 'Se sua fome fosse uma criatura viva 👹… qual seria?',
    type: 'single',
    options: [
      { id: 'q7a', text: 'Eu sou o Beliscador Infinito – preciso mastigar o dia inteiro 😋', value: 'constant', points: 3 },
      { id: 'q7b', text: 'Eu sou o Monstro do Açúcar – tenho desejo animal por doces e pão 🍬', value: 'sugar', points: 1 },
      { id: 'q7c', text: 'Eu sou o Poço Sem Fundo – como e ainda fico faminta 😫', value: 'bottomless', points: 1 },
      { id: 'q7d', text: 'Eu sou um pouco de tudo, em horários diferentes 😵‍💫', value: 'mixed', points: 3 },
    ],
    microFeedback: 'Essa fome "monstruosa" não é normal... é seu corpo em desespero tentando compensar um desequilíbrio hormonal grave. E está ficando pior com o tempo. 😨'
  },
  {
    id: 'q8',
    question: 'O que seu corpo faz cerca de 1h depois de comer? ⏰',
    type: 'single',
    options: [
      { id: 'q8a', text: 'Eu sinto sono pesado e minha mente fica lenta 😴', value: 'sleepy', points: 1 },
      { id: 'q8b', text: 'Eu fico bem por pouco tempo, depois desabo completamente 📉', value: 'crash', points: 1 },
      { id: 'q8c', text: 'Eu continuo igual — nada muda no meu corpo 😐', value: 'same', points: 8 },
      { id: 'q8d', text: 'Eu nunca reparei, mas talvez esteja me sabotando 😶', value: 'unaware', points: 6 },
    ],
    microFeedback: 'Essa queda de energia após comer é um sinal de resistência à insulina... seu corpo está perdendo a capacidade de processar alimentos normalmente. 😰'
  },
  {
    id: 'q9',
    question: 'Coloque a palma na barriga. Depois, no braço. Sente diferença de temperatura? 🖐️',
    type: 'single',
    options: [
      { id: 'q9a', text: 'Sim, eu sinto minha barriga mais fria ❄️', value: 'cold_belly', points: 1 },
      { id: 'q9b', text: 'Eu acho que sinto um pouco de diferença 😐', value: 'maybe', points: 4 },
      { id: 'q9c', text: 'Eu sinto tudo igual 🤷', value: 'same', points: 10 },
      { id: 'q9d', text: 'Eu nunca percebi isso antes 👀', value: 'never_noticed', points: 7 },
    ],
    microFeedback: 'Uma barriga fria significa que seu metabolismo está praticamente parado nessa região. Você pode estar carregando quilos de toxinas acumuladas sem saber. 😨'
  },
  {
    id: 'q10',
    question: 'Já teve a sensação de que há duas forças dentro de você — uma querendo emagrecer e outra sabotando tudo? 🥊',
    type: 'single',
    options: [
      { id: 'q10a', text: 'Sim, eu sinto exatamente isso dentro de mim 😤', value: 'exactly', points: 1 },
      { id: 'q10b', text: 'Eu nunca pensei assim, mas isso descreve minha vida 🤔', value: 'describes', points: 3 },
      { id: 'q10c', text: 'Não, eu acredito que é só falta de disciplina minha 😴', value: 'discipline', points: 10 },
      { id: 'q10d', text: 'Eu sinto às vezes, mas não sei de onde vem ❓', value: 'sometimes', points: 6 },
    ],
    microFeedback: 'Essa "guerra interna" é real... é seu corpo lutando contra hormônios desregulados. E a cada dia que passa, o lado sabotador está ganhando. 😔'
  },

  // ETAPA 4/6: Revelando o Inimigo Interno 🧬
  {
    id: 'q11',
    question: 'Se você soubesse que existe um hormônio que te faz sentir saciedade real, queima gordura e estabiliza energia… faria sentido com tudo que já viveu? 🤔',
    type: 'single',
    options: [
      { id: 'q11a', text: 'Sim, isso explicaria muita coisa que eu vivo 😮', value: 'explains', points: 3 },
      { id: 'q11b', text: 'Faz sentido, mas eu quero ver como usar isso 🧠', value: 'how_to_use', points: 6 },
      { id: 'q11c', text: 'Me parece simplista, mas eu estou curiosa 👀', value: 'curious', points: 8 },
      { id: 'q11d', text: 'Eu não sei se acredito nisso 🤨', value: 'skeptical', points: 10 },
    ],
    microFeedback: 'Se esse hormônio está inativo no seu corpo, cada dia que passa sem ativá-lo é um dia a mais de sofrimento desnecessário. O tempo está contra você. ⏰'
  },
  {
    id: 'q12',
    question: 'Você já ouviu falar de GLP-1 antes? ❓',
    type: 'single',
    options: [
      { id: 'q12a', text: 'Não, eu estou ouvindo pela primeira vez 😶', value: 'first_time', points: 8 },
      { id: 'q12b', text: 'Eu já ouvi, mas não sabia o que era 🤔', value: 'heard_not_knew', points: 6 },
      { id: 'q12c', text: 'Sim, mas eu achava que só funcionava com remédio 💉', value: 'medicine_only', points: 3 },
      { id: 'q12d', text: 'Eu só ouvi por alto 👂', value: 'briefly', points: 7 },
    ],
    microFeedback: 'Milhares de pessoas estão gastando R$ 1.200/mês em Ozempic para ativar esse hormônio... enquanto você pode estar perdendo a chance de fazer isso naturalmente. 😰'
  },
  {
    id: 'q13',
    question: 'O que mais te irrita em relação à fome? 😫',
    type: 'single',
    options: [
      { id: 'q13a', text: 'Eu nunca me sinto cheia de verdade 😣', value: 'never_full', points: 1 },
      { id: 'q13b', text: 'Eu fico com fome logo depois de comer 🍽️', value: 'hungry_soon', points: 3 },
      { id: 'q13c', text: 'Eu preciso de sobremesa ou fico insatisfeita 🍬', value: 'need_dessert', points: 1 },
      { id: 'q13d', text: 'Eu sinto tudo isso junto e me desespero 😵‍💫', value: 'all_together', points: 1 },
    ],
    microFeedback: 'Essa fome insaciável é seu cérebro em pânico, tentando compensar um desequilíbrio químico. Cada dia sem tratar isso, o vício fica mais forte. 😰'
  },
  {
    id: 'q14',
    question: 'Como estão seus níveis de energia ao longo do dia? ⚡',
    type: 'single',
    options: [
      { id: 'q14a', text: 'Eu despenco depois das refeições 📉', value: 'crash_after_meals', points: 1 },
      { id: 'q14b', text: 'Eu vivo altos e baixos constantes 🎢', value: 'ups_downs', points: 3 },
      { id: 'q14c', text: 'Eu vivo cansada, mesmo dormindo bem 😴', value: 'always_tired', points: 1 },
      { id: 'q14d', text: 'Eu me sinto bem e estável 😐', value: 'stable', points: 10 },
    ],
    microFeedback: 'Essa montanha-russa de energia está destruindo seu metabolismo aos poucos. Seu corpo está entrando em colapso energético. 😨'
  },
  {
    id: 'q15',
    question: 'Saber que grandes remédios como as famosas canetinhas do emagrecimento atuam SÓ no GLP-1 e que você pode ativá-lo com chá e horário certo… o que isso te faz pensar? 💡',
    type: 'single',
    options: [
      { id: 'q15a', text: 'Eu sinto que perdi anos indo pelo caminho mais difícil 😞', value: 'wasted_years', points: 3 },
      { id: 'q15b', text: 'Eu sinto que finalmente encontrei a causa real 🤓', value: 'found_cause', points: 4 },
      { id: 'q15c', text: 'Eu preciso disso pra ontem 🏃‍♂️', value: 'need_now', points: 1 },
      { id: 'q15d', text: 'Eu acho que é hora de testar antes de julgar 🚀', value: 'test_first', points: 8 },
    ],
    microFeedback: 'Pensar que você poderia ter evitado anos de sofrimento se soubesse disso antes... Mas agora você sabe. A pergunta é: vai agir ou deixar passar? 😔'
  },

  // PERGUNTA DE PESO ATUAL E DESEJADO
  {
    id: 'q15_weight',
    question: 'Qual é seu peso atual e qual seria seu peso ideal? 📏',
    type: 'single',
    options: [
      { id: 'weight_60_55', text: 'Peso atual: 60-70kg | Peso ideal: 55-60kg 🎯', value: 'light_loss', points: 8 },
      { id: 'weight_70_60', text: 'Peso atual: 70-80kg | Peso ideal: 60-65kg 🎯', value: 'moderate_loss', points: 6 },
      { id: 'weight_80_65', text: 'Peso atual: 80-90kg | Peso ideal: 65-70kg 🎯', value: 'significant_loss', points: 3 },
      { id: 'weight_90_70', text: 'Peso atual: 90kg+ | Peso ideal: 70kg ou menos 🎯', value: 'major_loss', points: 1 },
    ],
    microFeedback: 'Sua meta de peso é totalmente alcançável! O protocolo vai te levar exatamente onde você quer chegar, de forma natural e sustentável. 🚀'
  },

  // ETAPA 5/6: A Inflamação Invisível Que Está Silenciando Seu Corpo 🔥
  {
    id: 'q16',
    question: 'Imagine que existe uma inflamação silenciosa no seu intestino, abafando a produção do hormônio que controla sua fome, energia e queima de gordura. O que essa ideia te desperta? 😳',
    type: 'single',
    options: [
      { id: 'q16a', text: 'Eu sinto uma sensação de alívio — finalmente faz sentido 😌', value: 'relief', points: 4 },
      { id: 'q16b', text: 'Eu sinto raiva — porque ninguém nunca me explicou isso 😣', value: 'anger', points: 3 },
      { id: 'q16c', text: 'Eu sinto urgência — preciso reverter isso agora 🏃‍♀️', value: 'urgency', points: 1 },
      { id: 'q16d', text: 'Eu tive um estalo — é isso que estava ignorando 💡', value: 'realization', points: 3 },
    ],
    microFeedback: 'Essa inflamação silenciosa está corroendo seu metabolismo por dentro. Cada dia que passa sem tratar, ela fica mais agressiva e resistente. 😰'
  },
  {
    id: 'q17',
    question: 'Se essa inflamação seguir ativa por mais 2-3 anos... como você se enxerga? 😔',
    type: 'single',
    options: [
      { id: 'q17a', text: 'Eu me vejo mais cansada, mais pesada, mais frustrada 😩', value: 'worse', points: 1 },
      { id: 'q17b', text: 'Eu me vejo presa no mesmo corpo, com os mesmos medos 😞', value: 'trapped', points: 3 },
      { id: 'q17c', text: 'Eu me vejo esperando que algo mude sem mudar nada 🙏', value: 'waiting', points: 6 },
      { id: 'q17d', text: 'Eu me vejo tentando fingir que não me importo mais 😐', value: 'pretending', points: 8 },
    ],
    microFeedback: 'Imaginar seu futuro assim é assustador, né? Mas é exatamente para onde você está caminhando se não agir agora. O tempo não perdoa. ⏰'
  },
  {
    id: 'q18',
    question: 'Você sabia que grandes remédios como a famosa canetinha (Exemplo: Ozempic, Mounjaro) "imitar o Mounjaro" (que é melhor que o Ozempic) podem ser substituídos por 3 chás naturais por dia? Se soubesse, qual seria a prioridade de aplicar isso na sua vida? 🚨',
    type: 'single',
    options: [
      { id: 'q18a', text: 'Máxima — eu não suporto mais me sentir assim 😣', value: 'maximum', points: 1 },
      { id: 'q18b', text: 'Alta — eu preciso entender e aplicar agora 🏃‍♂️', value: 'high', points: 3 },
      { id: 'q18c', text: 'Média — eu quero ver se isso funciona pra mim 🤔', value: 'medium', points: 7 },
      { id: 'q18d', text: 'Baixa — eu ainda me falta clareza 😶', value: 'low', points: 10 },
    ],
    microFeedback: 'Se a prioridade não é máxima, talvez você ainda não entendeu a gravidade da situação. Seu corpo está pedindo socorro. 😰'
  },
  {
    id: 'q19',
    question: 'O mercado cobra R$ 1.000+ por mês pra ativar o GLP-1 com agulha. Saber que isso pode ser feito com ingredientes naturais... te faz pensar o quê? 💸',
    type: 'single',
    options: [
      { id: 'q19a', text: 'Eu sinto que o sistema escondeu isso de mim 😤', value: 'hidden', points: 3 },
      { id: 'q19b', text: 'Eu sinto que finalmente encontrei a saída verdadeira 🚪', value: 'found_exit', points: 1 },
      { id: 'q19c', text: 'Eu sempre soube que o natural vence no longo prazo 🌿', value: 'natural_wins', points: 5 },
      { id: 'q19d', text: 'Eu sinto que é minha chance de assumir o controle 🎉', value: 'take_control', points: 3 },
    ],
    microFeedback: 'Enquanto você gasta R$ 1.200/mês em remédios, sua solução pode estar numa xícara de chá. Mas só se você agir antes que seja tarde demais. ⏰'
  },
  {
    id: 'q19_event',
    question: 'Você tem algum evento que gostaria de ir mais magra ainda nos próximos 90 dias?',
    type: 'single',
    options: [
      { id: 'event_casamento', text: 'Casamento', value: 'casamento', points: 1 },
      { id: 'event_formatura', text: 'Formatura', value: 'formatura', points: 1 },
      { id: 'event_viagem', text: 'Viagem especial', value: 'viagem', points: 1 },
      { id: 'event_aniversario', text: 'Meu aniversário', value: 'aniversario', points: 1 },
      { id: 'event_nenhum', text: 'Nenhum evento específico', value: 'nenhum', points: 10 },
    ],
    microFeedback: 'Ter um evento como motivação pode acelerar ainda mais seus resultados!'
  },
  {
    id: 'q20',
    question: 'Com tudo o que foi revelado... você está pronto(a) para iniciar a fase final — e ativar seu interruptor metabólico com o protocolo exato dos 3 chás? 🚀',
    type: 'single',
    options: [
      { id: 'q20a', text: 'Sim, eu estou 100% pronta 💪', value: 'ready_100', points: 1 },
      { id: 'q20b', text: 'Sim, eu quero entender como aplicar isso 📝', value: 'want_to_learn', points: 4 },
      { id: 'q20c', text: 'Sim, eu cansei de viver no corpo errado 😩', value: 'tired_wrong_body', points: 1 },
      { id: 'q20d', text: 'Eu ainda não estou, mas estou perto 😐', value: 'almost', points: 8 },
    ],
    microFeedback: 'Se você não está 100% pronta agora, depois de tudo que descobriu sobre seu corpo, quando vai estar? O tempo está passando... 😔'
  },

  // ETAPA 6/6: OFERTA DO PROTOCOLO 🌿 (SEM PONTOS)
  {
    id: 'q21',
    question: 'Baseado no seu perfil, você precisa do protocolo dos 3 chás metabólicos. Qual plano se encaixa melhor na sua situação? 💡',
    type: 'single',
    options: [
      { id: 'q21a', text: 'Plano Básico - R$29,90/mês (protocolo dos 3 chás) 🧪', value: 'basic', points: 0 },
      { id: 'q21b', text: 'Plano Completo - R$39,90/mês (protocolo + 4 bônus) 💪', value: 'complete', points: 0 },
      { id: 'q21c', text: 'Plano Vitalício - R$97 único (tudo dos outros planos + acompanhamento por 1 mês) 🌟', value: 'lifetime', points: 0 },
      { id: 'q21d', text: 'Ainda não tenho certeza 🤔', value: 'unsure', points: 0 },
    ],
    microFeedback: ''
  },
  {
    id: 'q22',
    question: 'O plano completo inclui 4 bônus estratégicos. Qual você mais precisa? 🎁',
    type: 'single',
    options: [
      { id: 'q22a', text: 'Jejum Metabólico Coreano (emagrecer sem sofrimento) 🇰🇷', value: 'korean_fasting', points: 0 },
      { id: 'q22b', text: 'Vício em Doces Nunca Mais (parar compulsão) 🍬', value: 'sugar_addiction', points: 0 },
      { id: 'q22c', text: 'Receita da Vovó (limpar intestino) 👵', value: 'grandma_recipe', points: 0 },
      { id: 'q22d', text: 'Acelerador Metabólico Subconsciente 🧠', value: 'subconscious', points: 0 },
    ],
    microFeedback: ''
  },
  {
    id: 'q23',
    question: 'Você tem 15 dias de garantia total. Se não funcionar, devolvemos 100% do seu dinheiro. Isso te dá mais confiança? 🛡️',
    type: 'single',
    options: [
      { id: 'q23a', text: 'Sim, posso testar sem risco 🚀', value: 'no_risk', points: 0 },
      { id: 'q23b', text: 'Sim, isso me dá segurança total 🔒', value: 'security', points: 0 },
      { id: 'q23c', text: 'Sim, posso sair do modo "esperar e torcer" ⏳', value: 'stop_waiting', points: 0 },
      { id: 'q23d', text: 'Ainda tenho dúvidas 😐', value: 'still_doubts', points: 0 },
    ],
    microFeedback: ''
  },
  {
    id: 'q24',
    question: 'Última pergunta: Você está pronta para assumir o controle do seu metabolismo e transformar seu corpo de uma vez por todas? 🚀',
    type: 'single',
    options: [
      { id: 'q24a', text: 'SIM! Estou 100% pronta para mudar 💪', value: 'ready_100', points: 0 },
      { id: 'q24b', text: 'SIM! Cansei de viver no corpo errado 😤', value: 'tired_wrong_body', points: 0 },
      { id: 'q24c', text: 'SIM! Quero o protocolo agora 🏃‍♀️', value: 'want_now', points: 0 },
      { id: 'q24d', text: 'Ainda não estou decidida 😐', value: 'not_decided', points: 0 },
    ],
    microFeedback: ''
  },
  {
    id: 'q25',
    question: 'OFERTA ESPECIAL: Como você completou o diagnóstico, desbloqueou desconto especial! Qual plano escolhe? 🎯',
    type: 'single',
    options: [
      { id: 'q25a', text: 'BÁSICO - R$29,90/mês (protocolo dos 3 chás) 💳', value: 'basic', points: 0 },
      { id: 'q25b', text: 'COMPLETO - R$39,90/mês (protocolo + 4 bônus) 💪', value: 'complete', points: 0 },
      { id: 'q25c', text: 'VITALÍCIO - R$97 único (tudo dos outros planos + acompanhamento por 1 mês) 🌟', value: 'lifetime', points: 0 },
      { id: 'q25d', text: 'Não quero agora 😐', value: 'not_now', points: 0 },
    ],
    microFeedback: ''
  },
];

export const quizResults: QuizResult[] = [
  {
    id: 'critico',
    title: 'Diagnóstico: Síndrome Metabólica Severa',
    description: 'Seu metabolismo está em colapso total. Múltiplos sistemas hormonais estão desregulados e seu corpo está em modo de sobrevivência.',
    minPoints: 10,
    maxPoints: 50,
    recommendation: 'URGENTE: Você precisa do protocolo completo dos 3 chás + todos os bônus. Seu metabolismo precisa de uma reprogramação total. Recomendamos o plano completo ou vitalício para resultados máximos.',
  },
  {
    id: 'severo',
    title: 'Diagnóstico: Disrupção Hormonal Avançada',
    description: 'Seus hormônios estão em guerra contra seu corpo. A inflamação intestinal está bloqueando a produção natural de hormônios essenciais.',
    minPoints: 51,
    maxPoints: 100,
    recommendation: 'Você precisa do protocolo dos 3 chás com foco na redução da inflamação. O plano completo é ideal para você ver resultados consistentes e duradouros.',
  },
  {
    id: 'moderado',
    title: 'Diagnóstico: Inflamação Metabólica Crônica',
    description: 'Seu corpo está em estado inflamatório constante, sabotando todos os seus esforços. Ainda há tempo para reverter.',
    minPoints: 101,
    maxPoints: 150,
    recommendation: 'O protocolo dos 3 chás será suficiente para reativar seu GLP-1. O plano básico é perfeito para você começar e sentir as primeiras mudanças.',
  },
  {
    id: 'otimo',
    title: 'Diagnóstico: Metabolismo Funcionando Bem',
    description: 'Parabéns! Seu metabolismo está funcionando adequadamente. Você não precisa de intervenção urgente.',
    minPoints: 151,
    maxPoints: 199,
    recommendation: 'Seu corpo está respondendo bem! Continue mantendo seus hábitos atuais. Se quiser otimizar ainda mais, o protocolo pode ser usado como manutenção.',
  },
];