import type { Article, Category, FAQItem } from "@/types";

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "tecnicas-respiracao-ansiedade-trabalho",
    title: "5 Técnicas de Respiração para Controlar a Ansiedade no Trabalho",
    excerpt:
      "Aprenda estratégias simples e cientificamente validadas para regular o sistema nervoso autônomo em momentos de estresse intenso no ambiente profissional.",
    content: `
      <h2 id="introducao">Introdução</h2>
      <p>A ansiedade no trabalho é uma realidade para milhões de brasileiros. Segundo dados recentes, mais de 18% da população sofre com transtornos de ansiedade, e o ambiente profissional costuma ser um dos principais gatilhos. A boa notícia é que existem técnicas simples e eficazes que você pode aplicar em qualquer lugar, a qualquer momento.</p>

      <h2 id="por-que-respiracao">Por que a respiração funciona?</h2>
      <p>O sistema nervoso autônomo divide-se em simpático (responsável pela resposta de luta-ou-fuga) e parassimpático (responsável pelo relaxamento). Quando respiramos de forma lenta e profunda, ativamos o nervo vago, que é o principal acionador do sistema parassimpático. Isso reduz a frequência cardíaca, diminui a pressão arterial e sinaliza ao cérebro que o perigo passou.</p>

      <h2 id="tecnica-4-7-8">1. Técnica 4-7-8</h2>
      <p>Desenvolvida pelo Dr. Andrew Weil, essa técnica é uma das mais eficazes para interromper crises de ansiedade aguda:</p>
      <ul>
        <li>Inspire pelo nariz contando até 4</li>
        <li>Prenda a respiração contando até 7</li>
        <li>Expire pela boca contando até 8</li>
        <li>Repita o ciclo 4 vezes</li>
      </ul>

      <h2 id="respiracao-quadrada">2. Respiração Quadrada (Box Breathing)</h2>
      <p>Utilizada por forças especiais militares para manter o foco sob pressão extrema:</p>
      <ul>
        <li>Inspire contando até 4</li>
        <li>Segure contando até 4</li>
        <li>Expire contando até 4</li>
        <li>Segure contando até 4</li>
      </ul>

      <h2 id="respiracao-diafragmatica">3. Respiração Diafragmática</h2>
      <p>Coloque uma mão no peito e outra no abdômen. Inspire profundamente pelo nariz fazendo o abdômen subir (não o peito). Expire lentamente pela boca. Pratique por 5 minutos.</p>

      <h2 id="respiracao-alternada">4. Respiração Alternada pelas Narinas</h2>
      <p>Técnica do yoga (Nadi Shodhana) que equilibra os hemisférios cerebrais. Feche a narina direita e inspire pela esquerda. Depois feche a esquerda e expire pela direita. Repita alternando.</p>

      <h2 id="respiracao-5-5">5. Respiração 5-5</h2>
      <p>A mais simples de todas: inspire por 5 segundos, expire por 5 segundos. Estudos mostram que 5 respirações por minuto (em vez das 12-20 habituais) sincroniza o sistema cardiovascular e reduz o estresse em até 40%.</p>

      <h2 id="quando-usar">Quando usar cada técnica?</h2>
      <p>Em reuniões tensas, use a respiração quadrada antes de entrar na sala. Em crises agudas de pânico, a técnica 4-7-8 é mais eficaz. Para práticas de mindfulness, opte pela diafragmática. O mais importante é criar o hábito — pratique diariamente por pelo menos 5 minutos, mesmo quando não estiver ansioso.</p>

      <h2 id="conclusao">Conclusão</h2>
      <p>Essas técnicas são ferramentas poderosas, mas não substituem o acompanhamento psicológico profissional. Se a ansiedade está impactando significativamente sua vida, busque ajuda de um psicólogo. Juntos, podemos desenvolver um plano de tratamento personalizado que vai muito além das técnicas de respiração.</p>
    `,
    category: "ansiedade",
    categoryLabel: "Ansiedade",
    date: "15 Mar 2026",
    dateISO: "2026-03-15",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pessoa respirando profundamente em ambiente de trabalho",
    tags: ["ansiedade", "respiração", "trabalho", "mindfulness"],
    featured: true,
  },
  {
    id: 2,
    slug: "apego-relacionamentos-adultos",
    title: "O Papel do Apego na Formação dos Relacionamentos Adultos",
    excerpt:
      "Como os vínculos formados na infância moldam nossa forma de amar e se relacionar na vida adulta, e o que podemos fazer para construir conexões mais saudáveis.",
    content: `
      <h2 id="introducao">Introdução</h2>
      <p>John Bowlby, psiquiatra britânico, foi o primeiro a descrever sistematicamente o sistema de apego humano. Sua teoria, desenvolvida entre as décadas de 1950 e 1980, estabelece que os vínculos formados na primeira infância com os cuidadores primários servem como modelos internos para todos os relacionamentos futuros.</p>

      <h2 id="estilos-apego">Os quatro estilos de apego</h2>
      <p>A pesquisadora Mary Ainsworth identificou os principais padrões de apego através do famoso experimento "Situação Estranha":</p>
      <h3>Apego Seguro</h3>
      <p>Pessoas com apego seguro têm uma visão positiva de si mesmas e dos outros. Conseguem se aproximar e se afastar emocionalmente com facilidade, toleram bem a separação e expressam suas necessidades diretamente.</p>
      <h3>Apego Ansioso-Ambivalente</h3>
      <p>Caracterizado por insegurança e medo de abandono. Pessoas com esse padrão tendem à dependência emocional, ao ciúme excessivo e à necessidade constante de reasseguramento.</p>
      <h3>Apego Evitativo</h3>
      <p>Pessoas que aprenderam a suprimir suas necessidades emocionais, valorizando a autossuficiência ao extremo. Costumam ter dificuldade com intimidade e evitam dependência emocional.</p>
      <h3>Apego Desorganizado</h3>
      <p>Frequentemente resultado de traumas ou negligência grave na infância. Caracteriza-se por comportamentos contraditórios nos relacionamentos.</p>

      <h2 id="mudanca">É possível mudar o estilo de apego?</h2>
      <p>Sim! A psicoterapia é uma das ferramentas mais eficazes para modificar padrões de apego. Por meio de um relacionamento terapêutico seguro e consistente, o paciente pode internalizar um novo modelo de vínculo e gradualmente transformar sua forma de se relacionar.</p>

      <h2 id="conclusao">Conclusão</h2>
      <p>Compreender seu estilo de apego é um passo fundamental para construir relacionamentos mais saudáveis e satisfatórios. Se você se reconheceu em algum dos padrões inseguros, saiba que mudança é possível com o suporte adequado.</p>
    `,
    category: "relacionamentos",
    categoryLabel: "Relacionamentos",
    date: "22 Fev 2026",
    dateISO: "2026-02-22",
    readTime: 11,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Casal caminhando e se conectando emocionalmente",
    tags: ["apego", "relacionamentos", "infância", "terapia"],
    featured: true,
  },
  {
    id: 3,
    slug: "terapia-ato-coragem",
    title: "Por que Buscar Terapia é um Ato de Coragem e Amor Próprio",
    excerpt:
      "Quebrar o estigma em torno da psicoterapia começa pela compreensão: buscar ajuda não é fraqueza, é uma das decisões mais corajosas e inteligentes que alguém pode tomar.",
    content: `
      <h2 id="introducao">Introdução</h2>
      <p>Durante décadas, buscar ajuda psicológica foi associado à fraqueza ou à "loucura". Felizmente, esse cenário está mudando — mas o estigma ainda existe. Neste artigo, vou explicar por que a terapia é, na verdade, um ato de enorme coragem e autocuidado.</p>

      <h2 id="mitos">Quebrando os Mitos</h2>
      <p>O primeiro mito é o de que só pessoas "doentes" fazem terapia. Na realidade, a psicoterapia é benéfica para qualquer pessoa que deseja se conhecer melhor, melhorar seus relacionamentos, superar desafios ou simplesmente viver com mais qualidade.</p>

      <h2 id="beneficios">Benefícios comprovados da psicoterapia</h2>
      <p>Pesquisas mostram que a terapia é eficaz para redução de ansiedade e depressão, melhora das relações interpessoais, aumento da autoestima, maior resiliência emocional e melhor desempenho profissional.</p>

      <h2 id="conclusao">Conclusão</h2>
      <p>Buscar terapia é reconhecer que você merece suporte, que sua saúde mental importa e que você tem a capacidade de crescer. É um dos maiores presentes que você pode dar a si mesmo.</p>
    `,
    category: "autoconhecimento",
    categoryLabel: "Autoconhecimento",
    date: "1 Mar 2026",
    dateISO: "2026-03-01",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pessoa em sessão de terapia com expressão de alívio",
    tags: ["terapia", "autoconhecimento", "saúde mental", "autoestima"],
    featured: false,
  },
  {
    id: 4,
    slug: "burnout-identificar-recuperacao",
    title: "Burnout: Como Identificar os Sinais e Iniciar a Recuperação",
    excerpt:
      "O esgotamento profissional vai muito além do cansaço comum. Entenda os sinais de alerta, as causas profundas e os primeiros passos para retomar sua energia e seu propósito.",
    content: `
      <h2 id="introducao">Introdução</h2>
      <p>O burnout foi reconhecido pela OMS como um fenômeno ocupacional em 2019 e incluído na CID-11. No Brasil, estima-se que mais de 30% dos trabalhadores sofram com algum grau de esgotamento profissional. Mas o que diferencia o burnout do simples cansaço?</p>

      <h2 id="sinais">Sinais de alerta do Burnout</h2>
      <p>Existência de três dimensões: exaustão emocional (sentir-se completamente drenado), despersonalização (cinismo, distanciamento emocional do trabalho) e redução da realização pessoal (sensação de ineficácia).</p>

      <h2 id="recuperacao">O caminho da recuperação</h2>
      <p>A recuperação do burnout é possível e começa com o reconhecimento do problema. Inclui afastamento temporário se necessário, reestruturação de limites, psicoterapia e, em alguns casos, apoio medicamentoso.</p>

      <h2 id="conclusao">Conclusão</h2>
      <p>O burnout é sério, mas tratável. O primeiro passo é parar, reconhecer e buscar ajuda. Sua saúde vale mais do que qualquer entrega profissional.</p>
    `,
    category: "burnout",
    categoryLabel: "Burnout",
    date: "22 Fev 2026",
    dateISO: "2026-02-22",
    readTime: 10,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pessoa exausta na frente do computador",
    tags: ["burnout", "esgotamento", "trabalho", "recuperação"],
    featured: false,
  },
  {
    id: 5,
    slug: "depressao-alem-da-tristeza",
    title: "Depressão: Além da Tristeza — O que Ninguém Conta",
    excerpt:
      "Os sintomas menos conhecidos da depressão e por que o diagnóstico precoce é fundamental para um tratamento eficaz e uma recuperação plena.",
    content: `
      <h2 id="introducao">Introdução</h2>
      <p>Quando pensamos em depressão, a tristeza profunda é o primeiro sintoma que vem à mente. Mas a realidade é muito mais complexa. Muitas pessoas deprimidas não choram — pelo contrário, sentem uma espécie de vazio, de anestesia emocional.</p>

      <h2 id="sintomas-desconhecidos">Sintomas pouco conhecidos</h2>
      <p>Irritabilidade e raiva, dificuldade de concentração e memória, dores físicas sem causa orgânica, anedonia (perda de prazer em atividades que antes eram prazerosas), alterações no apetite e sono, e fadiga persistente.</p>

      <h2 id="diagnostico">A importância do diagnóstico precoce</h2>
      <p>Quanto mais cedo a depressão é identificada e tratada, melhores são os resultados. O tratamento combina psicoterapia, e em muitos casos, medicação prescrita por psiquiatra.</p>

      <h2 id="conclusao">Conclusão</h2>
      <p>Se você ou alguém que você conhece apresenta esses sintomas há mais de duas semanas, busque ajuda profissional. A depressão tem tratamento e a recuperação é possível.</p>
    `,
    category: "depressao",
    categoryLabel: "Depressão",
    date: "14 Fev 2026",
    dateISO: "2026-02-14",
    readTime: 8,
    image:
      "https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pessoa sentada em posição de reflexão e tristeza",
    tags: ["depressão", "diagnóstico", "tratamento", "saúde mental"],
    featured: false,
  },
  {
    id: 6,
    slug: "autoestima-visao-saudavel",
    title: "Autoestima: Como Construir uma Visão Saudável de Si Mesmo",
    excerpt:
      "Estratégias práticas e baseadas em evidências para fortalecer a relação com você mesmo, superar a autocrítica excessiva e viver com mais autenticidade.",
    content: `
      <h2 id="introducao">Introdução</h2>
      <p>A autoestima é a avaliação que fazemos de nós mesmos — e ela influencia cada aspecto da nossa vida: nossos relacionamentos, nossas escolhas profissionais, nossa saúde mental e até nossa saúde física.</p>

      <h2 id="autocritica">A autocrítica e seus limites</h2>
      <p>Existe uma diferença fundamental entre autocrítica saudável (que nos ajuda a aprender e crescer) e autocrítica tóxica (que nos paralisa e nos destrói). A segunda costuma ter uma voz interna muito severa, generalizante e implacável.</p>

      <h2 id="estrategias">Estratégias práticas</h2>
      <p>Identificar e desafiar pensamentos automáticos negativos, praticar autocompaixão (tratar-se como trataria um bom amigo), estabelecer metas alcançáveis, celebrar pequenas conquistas e estabelecer limites saudáveis.</p>

      <h2 id="conclusao">Conclusão</h2>
      <p>Construir autoestima saudável é um trabalho contínuo. A psicoterapia pode acelerar significativamente esse processo, oferecendo ferramentas e um espaço seguro para explorar as raízes da sua autoavaliação.</p>
    `,
    category: "autoconhecimento",
    categoryLabel: "Autoconhecimento",
    date: "5 Fev 2026",
    dateISO: "2026-02-05",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pessoa sorrindo com confiança e autoestima",
    tags: ["autoestima", "autoconhecimento", "autocompaixão", "crescimento"],
    featured: false,
  },
  {
    id: 7,
    slug: "ansiedade-social-medo-pessoas",
    title: "Ansiedade Social: Quando o Medo de Pessoas Paralisa",
    excerpt:
      "Como diferenciar timidez normal de fobia social, quais são os critérios diagnósticos e os caminhos terapêuticos mais eficazes para superar o isolamento.",
    content: `
      <h2 id="introducao">Introdução</h2>
      <p>Sentir um certo nervosismo antes de falar em público ou em situações sociais novas é completamente normal. Mas quando esse medo é intenso, persistente e começa a interferir na vida cotidiana, estamos diante da ansiedade social — o terceiro transtorno mental mais comum no mundo.</p>

      <h2 id="timidez-vs-fobia">Timidez vs. Fobia Social</h2>
      <p>A timidez é um traço de personalidade — uma tendência a ser reservado em situações novas. A fobia social é um transtorno clínico — um medo intenso e irracional de situações sociais que pode levar ao isolamento.</p>

      <h2 id="tratamento">O Tratamento</h2>
      <p>A TCC (Terapia Cognitivo-Comportamental) é o tratamento de primeira linha para ansiedade social, com taxas de eficácia de 60-80%. A exposição gradual às situações temidas, combinada com reestruturação cognitiva, é a base do tratamento.</p>

      <h2 id="conclusao">Conclusão</h2>
      <p>A ansiedade social não é um defeito de caráter nem fraqueza — é um transtorno tratável. Com o suporte adequado, é possível participar da vida social com confiança e autenticidade.</p>
    `,
    category: "ansiedade",
    categoryLabel: "Ansiedade",
    date: "28 Jan 2026",
    dateISO: "2026-01-28",
    readTime: 9,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pessoa em ambiente social sentindo ansiedade",
    tags: ["ansiedade social", "fobia social", "TCC", "tratamento"],
    featured: false,
  },
  {
    id: 8,
    slug: "comunicacao-nao-violenta",
    title: "Comunicação Não Violenta: Melhore Seus Relacionamentos",
    excerpt:
      "Entenda como a CNV pode transformar conflitos em oportunidades de conexão genuína, promovendo empatia e compreensão mútua em todos os seus relacionamentos.",
    content: `
      <h2 id="introducao">Introdução</h2>
      <p>Marshall Rosenberg desenvolveu a Comunicação Não Violenta (CNV) na década de 1960, inspirado por sua experiência trabalhando com conflitos raciais nos Estados Unidos. Hoje, a CNV é utilizada em escolas, empresas, mediações de conflitos e, claro, na psicoterapia.</p>

      <h2 id="quatro-componentes">Os quatro componentes da CNV</h2>
      <p>Observação (sem julgamento), sentimentos (como me sinto), necessidades (o que está por trás do sentimento) e pedido (o que preciso da outra pessoa).</p>

      <h2 id="empatia">A empatia como base</h2>
      <p>A CNV parte do princípio de que toda ação humana, por mais problemática que pareça, é uma tentativa de satisfazer uma necessidade universal. Quando compreendemos a necessidade por trás de um comportamento, podemos responder com empatia em vez de reatividade.</p>

      <h2 id="conclusao">Conclusão</h2>
      <p>A CNV é uma habilidade que se aprende e se pratica. Na terapia, trabalhamos esses quatro componentes de forma aplicada ao contexto de cada paciente, transformando gradualmente a qualidade dos relacionamentos.</p>
    `,
    category: "relacionamentos",
    categoryLabel: "Relacionamentos",
    date: "8 Mar 2026",
    dateISO: "2026-03-08",
    readTime: 9,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Duas pessoas conversando com empatia",
    tags: ["comunicação", "relacionamentos", "empatia", "CNV"],
    featured: false,
  },
];

export const CATEGORIES: Category[] = [
  { id: "all", label: "Todos os artigos", count: ARTICLES.length },
  {
    id: "ansiedade",
    label: "Ansiedade",
    count: ARTICLES.filter((a) => a.category === "ansiedade").length,
  },
  {
    id: "depressao",
    label: "Depressão",
    count: ARTICLES.filter((a) => a.category === "depressao").length,
  },
  {
    id: "relacionamentos",
    label: "Relacionamentos",
    count: ARTICLES.filter((a) => a.category === "relacionamentos").length,
  },
  {
    id: "autoconhecimento",
    label: "Autoconhecimento",
    count: ARTICLES.filter((a) => a.category === "autoconhecimento").length,
  },
  {
    id: "burnout",
    label: "Burnout & Carreira",
    count: ARTICLES.filter((a) => a.category === "burnout").length,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quantas sessões de terapia são necessárias para ver resultados?",
    answer:
      "O número de sessões varia conforme o objetivo terapêutico e o histórico de cada pessoa. Para questões pontuais, como preparação para mudanças de vida, podem bastar 8 a 12 sessões. Para transtornos como ansiedade generalizada ou depressão, o processo costuma durar de 6 meses a 1 ano ou mais. O mais importante é que os resultados costumam aparecer nas primeiras semanas, mesmo que o processo completo seja mais longo.",
  },
  {
    question: "Qual a diferença entre psicólogo e psiquiatra?",
    answer:
      "O psicólogo é graduado em Psicologia e atua por meio da psicoterapia — conversas estruturadas que ajudam a compreender e modificar padrões emocionais e comportamentais. O psiquiatra é médico especializado em saúde mental e pode prescrever medicamentos. Nos casos mais complexos, como depressão grave ou transtorno bipolar, o ideal é um trabalho conjunto entre os dois profissionais.",
  },
  {
    question: "A terapia online é tão eficaz quanto a presencial?",
    answer:
      "Sim! Estudos publicados em periódicos científicos de alto impacto demonstram que a psicoterapia online tem eficácia equivalente à presencial para a maioria dos transtornos mentais, incluindo ansiedade e depressão. O formato online tem a vantagem adicional de eliminar barreiras geográficas e facilitar a rotina de pessoas com agenda intensa. As sessões ocorrem por videochamada, com total sigilo e segurança.",
  },
  {
    question: "Como saber se preciso de terapia?",
    answer:
      "Você pode se beneficiar da terapia se: seus sentimentos ou pensamentos interferem no seu trabalho, relacionamentos ou qualidade de vida; você sente ansiedade, tristeza ou irritabilidade persistentes; passou por uma situação difícil e sente dificuldade de processar; quer se conhecer melhor e crescer emocionalmente. Não é preciso estar em crise para começar — a terapia é igualmente valiosa para autodesenvolvimento.",
  },
  {
    question: "O que acontece na primeira sessão de terapia?",
    answer:
      "A primeira sessão é chamada de 'entrevista inicial' ou 'anamnese'. Nela, o psicólogo busca conhecer sua história, compreender o que te trouxe à terapia, seus objetivos e expectativas. É também um momento para você avaliar se se sente confortável com o profissional — a qualidade do vínculo terapêutico é um dos fatores mais importantes para o sucesso do tratamento. Não há pressão para revelar tudo de uma vez; o processo é gradual e respeitoso.",
  },
];

export const FEATURED_ARTICLES = ARTICLES.filter((a) => a.featured);
export const LATEST_ARTICLES = [...ARTICLES]
  .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
  .slice(0, 3);
