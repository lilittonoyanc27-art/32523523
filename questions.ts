import { Question, PrizeLevel } from './types';

export const QUESTIONS_DATA: Question[] = [
  // 1-30: PASADOS
  {
    id: 1,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Hoy yo ___ mucho.',
    hyQuestion: 'Այսօր ես շատ եմ աշխատել։',
    options: [
      { key: 'A', text: 'trabajaba', hyText: 'աշխատում էի (Imperfecto)' },
      { key: 'B', text: 'trabajé', hyText: 'աշխատեցի (Indefinido)' },
      { key: 'C', text: 'he trabajado', hyText: 'աշխատել եմ (Perfecto)' },
      { key: 'D', text: 'trabajaré', hyText: 'կաշխատեմ (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Hoy» (այսօր) ցույց է տալիս ժամանակահատված, որը դեռ չի ավարտվել։ Օգտագործվում է Pretérito Perfecto (he trabajado)։',
    explanationEs: 'Se usa Pretérito Perfecto (he trabajado) porque "hoy" indica un periodo de tiempo no terminado.',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 2,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'Ayer Marta ___ al cine.',
    hyQuestion: 'Երեկ Մարտան գնաց կինոթատրոն։',
    options: [
      { key: 'A', text: 'ha ido', hyText: 'գնացել է (Perfecto)' },
      { key: 'B', text: 'fue', hyText: 'գնաց (Indefinido)' },
      { key: 'C', text: 'iba', hyText: 'գնում էր (Imperfecto)' },
      { key: 'D', text: 'irá', hyText: 'կգնա (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Ayer» (երեկ) արդեն ավարտված ժամանակային միավոր է։ Օգտագործվում է Pretérito Indefinido (fue)։',
    explanationEs: 'Se usa Pretérito Indefinido (fue) porque "ayer" es un tiempo completamente terminado en el pasado.',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 3,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'Cuando era niño, ___ al fútbol todos los días.',
    hyQuestion: 'Երբ երեխա էի, ամեն օր ֆուտբոլ էի խաղում։',
    options: [
      { key: 'A', text: 'jugué', hyText: 'խաղացի (Indefinido)' },
      { key: 'B', text: 'he jugado', hyText: 'խաղացել եմ (Perfecto)' },
      { key: 'C', text: 'jugaba', hyText: 'խաղում էի (Imperfecto)' },
      { key: 'D', text: 'jugaré', hyText: 'կխաղամ (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Todos los días» (ամեն օր) և մանկության շրջանը ցույց են տալիս սովորական, կրկնվող գործողություն անցյալում՝ Pretérito Imperfecto (jugaba)։',
    explanationEs: 'Se usa Pretérito Imperfecto (jugaba) para hábitos y acciones repetidas en el pasado ("todos los días").',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 4,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Esta semana ___ tres películas.',
    hyQuestion: 'Այս շաբաթ երեք ֆիլմ եմ դիտել։',
    options: [
      { key: 'A', text: 'vi', hyText: 'տեսա (Indefinido)' },
      { key: 'B', text: 'veía', hyText: 'տեսնում էի (Imperfecto)' },
      { key: 'C', text: 'he visto', hyText: 'դիտել եմ / տեսել եմ (Perfecto)' },
      { key: 'D', text: 'vería', hyText: 'կդիտեի (Condicional)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Esta semana» (այս շաբաթ) դեռ չավարտված ժամանակ է -> Pretérito Perfecto (he visto)։',
    explanationEs: 'Con "esta semana" (tiempo aún vigente) se usa Pretérito Perfecto (he visto).',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 5,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'El sábado pasado nosotros ___ a nuestros amigos.',
    hyQuestion: 'Անցած շաբաթ օրը մենք այցելեցինք մեր ընկերներին։',
    options: [
      { key: 'A', text: 'visitábamos', hyText: 'այցելում էինք (Imperfecto)' },
      { key: 'B', text: 'hemos visitado', hyText: 'այցելել ենք (Perfecto)' },
      { key: 'C', text: 'visitamos', hyText: 'այցելեցինք (Indefinido)' },
      { key: 'D', text: 'visitaremos', hyText: 'կայցելենք (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«El sábado pasado» (անցած շաբաթ օրը) ավարտված ժամանակ է -> Pretérito Indefinido (visitamos)։',
    explanationEs: 'Acción puntual y concluida en un día específico pasado ("el sábado pasado").',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 6,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'Antes Pedro ___ cerca del colegio.',
    hyQuestion: 'Նախկինում Պեդրոն դպրոցի մոտ էր ապրում։',
    options: [
      { key: 'A', text: 'vivió', hyText: 'ապրեց (Indefinido)' },
      { key: 'B', text: 'vivía', hyText: 'ապրում էր (Imperfecto)' },
      { key: 'C', text: 'ha vivido', hyText: 'ապրել է (Perfecto)' },
      { key: 'D', text: 'vivirá', hyText: 'կապրի (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Antes» (նախկինում) նկարագրում է անցյալի մշտական վիճակ կամ տևական իրավիճակ -> Pretérito Imperfecto (vivía)։',
    explanationEs: '"Antes" describe una situación o estado duradero habitual en el pasado.',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 7,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Experiencia de vida)',
    esQuestion: '¿___ alguna vez en Barcelona?',
    hyQuestion: 'Երբևէ եղե՞լ ես Բարսելոնայում։',
    options: [
      { key: 'A', text: 'Estuviste', hyText: 'եղար (Indefinido)' },
      { key: 'B', text: 'Estabas', hyText: 'էիր (Imperfecto)' },
      { key: 'C', text: 'Has estado', hyText: 'եղել ես (Perfecto)' },
      { key: 'D', text: 'Estarás', hyText: 'կլինես (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Alguna vez» (երբևէ) վերաբերում է կյանքի ընդհանուր փորձին մինչև ներկա պահը -> Pretérito Perfecto (Has estado)։',
    explanationEs: 'Para preguntar sobre experiencias a lo largo de la vida con "alguna vez" usamos Pretérito Perfecto.',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 8,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'Anoche yo ___ muy tarde.',
    hyQuestion: 'Երեկ գիշեր ես շատ ուշ քնեցի։',
    options: [
      { key: 'A', text: 'me acostaba', hyText: 'պառկում էի քնելու (Imperfecto)' },
      { key: 'B', text: 'me he acostado', hyText: 'քնել եմ (Perfecto)' },
      { key: 'C', text: 'me acosté', hyText: 'քնեցի / պառկեցի (Indefinido)' },
      { key: 'D', text: 'me acuesto', hyText: 'պառկում եմ (Presente)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Anoche» (երեկ գիշեր) ավարտված անցյալի ցուցիչ է -> Pretérito Indefinido (me acosté)։',
    explanationEs: '"Anoche" señala un momento específico y concluido del pasado.',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 9,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'Cuando vivíamos en Madrid, siempre ___ en metro.',
    hyQuestion: 'Երբ Մադրիդում էինք ապրում, միշտ մետրոյով էինք գնում։',
    options: [
      { key: 'A', text: 'fuimos', hyText: 'գնացինք (Indefinido)' },
      { key: 'B', text: 'íbamos', hyText: 'գնում էինք (Imperfecto)' },
      { key: 'C', text: 'hemos ido', hyText: 'գնացել ենք (Perfecto)' },
      { key: 'D', text: 'iremos', hyText: 'կգնանք (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Siempre» (միշտ) անցյալում կրկնվող սովորություն է -> Pretérito Imperfecto (íbamos)։',
    explanationEs: 'Acción que se repetía habitualmente en el pasado ("siempre").',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 10,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Esta mañana Ana ___ un café.',
    hyQuestion: 'Այս առավոտ Անան սուրճ է խմել։',
    options: [
      { key: 'A', text: 'tomó', hyText: 'խմեց (Indefinido)' },
      { key: 'B', text: 'tomaba', hyText: 'խմում էր (Imperfecto)' },
      { key: 'C', text: 'ha tomado', hyText: 'խմել է (Perfecto)' },
      { key: 'D', text: 'tomaría', hyText: 'կխմեր (Condicional)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Esta mañana» (այս առավոտ) այսօրվա դեռ չավարտված օրվա մի մասն է -> Pretérito Perfecto (ha tomado)։',
    explanationEs: '"Esta mañana" pertenece al día de hoy, por lo que exige Pretérito Perfecto.',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 11,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'En 2024 ellos ___ a Sevilla.',
    hyQuestion: '2024 թվականին նրանք մեկնեցին Սևիլիա։',
    options: [
      { key: 'A', text: 'viajaban', hyText: 'ճամփորդում էին (Imperfecto)' },
      { key: 'B', text: 'han viajado', hyText: 'ճամփորդել են (Perfecto)' },
      { key: 'C', text: 'viajaron', hyText: 'մեկնեցին / ճամփորդեցին (Indefinido)' },
      { key: 'D', text: 'viajan', hyText: 'ճամփորդում են (Presente)' }
    ],
    correctAnswer: 'C',
    explanationHy: 'Կոնկրետ ավարտված թվական (En 2024) -> Pretérito Indefinido (viajaron)։',
    explanationEs: 'Un año específico del pasado funciona como marcador de Pretérito Indefinido.',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 12,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'De pequeño, Carlos ___ miedo a los perros.',
    hyQuestion: 'Փոքր ժամանակ Կառլոսը վախենում էր շներից։',
    options: [
      { key: 'A', text: 'tuvo', hyText: 'ունեցավ (Indefinido)' },
      { key: 'B', text: 'tenía', hyText: 'ուներ / վախենում էր (Imperfecto)' },
      { key: 'C', text: 'ha tenido', hyText: 'ունեցել է (Perfecto)' },
      { key: 'D', text: 'tendrá', hyText: 'կունենա (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«De pequeño» (փոքր ժամանակ) անցյալի հոգեվիճակի նկարագրություն է -> Pretérito Imperfecto (tenía)։',
    explanationEs: 'Descripción de estados físicos o emocionales en una etapa pasada.',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 13,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Hoy todavía no ___ nada.',
    hyQuestion: 'Այսօր դեռ ոչինչ չեմ կերել։',
    options: [
      { key: 'A', text: 'comí', hyText: 'կերա (Indefinido)' },
      { key: 'B', text: 'comía', hyText: 'ուտում էի (Imperfecto)' },
      { key: 'C', text: 'he comido', hyText: 'կերել եմ (Perfecto)' },
      { key: 'D', text: 'comeré', hyText: 'կուտեմ (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Hoy todavía no» (այսօր դեռ չէ) -> Pretérito Perfecto (he comido)։',
    explanationEs: '"Todavía no" conectado con "hoy" requiere Pretérito Perfecto.',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 14,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'Ayer Lucía ___ una carta.',
    hyQuestion: 'Երեկ Լուսիան նամակ գրեց։',
    options: [
      { key: 'A', text: 'escribía', hyText: 'գրում էր (Imperfecto)' },
      { key: 'B', text: 'ha escrito', hyText: 'գրել է (Perfecto)' },
      { key: 'C', text: 'escribió', hyText: 'գրեց (Indefinido)' },
      { key: 'D', text: 'escribe', hyText: 'գրում է (Presente)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Ayer» (երեկ) ավարտված գործողություն -> Pretérito Indefinido (escribió)։',
    explanationEs: 'Acción puntual finalizada ayer.',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 15,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Acciones simultáneas)',
    esQuestion: 'Mientras yo estudiaba, mi hermano ___.',
    hyQuestion: 'Մինչ ես սովորում էի, եղբայրս քնած էր։',
    options: [
      { key: 'A', text: 'durmió', hyText: 'քնեց (Indefinido)' },
      { key: 'B', text: 'dormía', hyText: 'քնում էր / քնած էր (Imperfecto)' },
      { key: 'C', text: 'ha dormido', hyText: 'քնել է (Perfecto)' },
      { key: 'D', text: 'dormirá', hyText: 'կքնի (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Mientras» (մինչդեռ) ցույց է տալիս երկու զուգահեռ ընթացող գործողություն անցյալում -> Pretérito Imperfecto (dormía)։',
    explanationEs: 'Dos acciones simultáneas y continuas en el pasado unidas por "mientras".',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 16,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Este mes nosotros ___ mucho trabajo.',
    hyQuestion: 'Այս ամիս մենք շատ աշխատանք ենք ունեցել։',
    options: [
      { key: 'A', text: 'tuvimos', hyText: 'ունեցանք (Indefinido)' },
      { key: 'B', text: 'teníamos', hyText: 'ունեինք (Imperfecto)' },
      { key: 'C', text: 'hemos tenido', hyText: 'ունեցել ենք (Perfecto)' },
      { key: 'D', text: 'tendremos', hyText: 'կունենանք (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Este mes» (այս ամիս) դեռ ընթացքի մեջ է -> Pretérito Perfecto (hemos tenido)։',
    explanationEs: '"Este mes" es un periodo no finalizado respecto al presente.',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 17,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'El año pasado Federico ___ francés.',
    hyQuestion: 'Անցած տարի Ֆեդերիկոն ֆրանսերեն սովորեց։',
    options: [
      { key: 'A', text: 'estudiaba', hyText: 'սովորում էր (Imperfecto)' },
      { key: 'B', text: 'estudió', hyText: 'սովորեց (Indefinido)' },
      { key: 'C', text: 'ha estudiado', hyText: 'սովորել է (Perfecto)' },
      { key: 'D', text: 'estudiará', hyText: 'կսովորի (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«El año pasado» (անցած տարի) ավարտված ժամանակահատված է -> Pretérito Indefinido (estudió)։',
    explanationEs: 'Acción cerrada en un periodo terminado ("el año pasado").',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 18,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'Cuando tenía diez años, ___ muchos libros.',
    hyQuestion: 'Երբ տասը տարեկան էի, շատ գրքեր էի կարդում։',
    options: [
      { key: 'A', text: 'leí', hyText: 'կարդացի (Indefinido)' },
      { key: 'B', text: 'he leído', hyText: 'կարդացել եմ (Perfecto)' },
      { key: 'C', text: 'leía', hyText: 'կարդում էի (Imperfecto)' },
      { key: 'D', text: 'leeré', hyText: 'կկարդամ (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Cuando tenía diez años» ցույց է տալիս կյանքի երկարատև շրջան և սովորական գործողություն -> Pretérito Imperfecto (leía)։',
    explanationEs: 'Hábito del pasado en una etapa determinada de la niñez.',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 19,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: '¿Qué ___ ayer después de clase?',
    hyQuestion: 'Ի՞նչ արեցիր երեկ դասից հետո։',
    options: [
      { key: 'A', text: 'has hecho', hyText: 'արել ես (Perfecto)' },
      { key: 'B', text: 'hacías', hyText: 'անում էիր (Imperfecto)' },
      { key: 'C', text: 'hiciste', hyText: 'արեցիր (Indefinido)' },
      { key: 'D', text: 'haces', hyText: 'անում ես (Presente)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Ayer» (երեկ) -> կոնկրետ ավարտված հարցում tú դեմքով՝ Pretérito Indefinido (hiciste)։',
    explanationEs: 'Pregunta sobre una acción puntual realizada ayer.',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 20,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Hoy ___ a mi profesor.',
    hyQuestion: 'Այսօր տեսել եմ իմ ուսուցչին։',
    options: [
      { key: 'A', text: 'vi', hyText: 'տեսա (Indefinido)' },
      { key: 'B', text: 'veía', hyText: 'տեսնում էի (Imperfecto)' },
      { key: 'C', text: 'he visto', hyText: 'տեսել եմ (Perfecto)' },
      { key: 'D', text: 'veré', hyText: 'կտեսնեմ (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Hoy» (այսօր) -> Pretérito Perfecto (he visto)։',
    explanationEs: 'Acción realizada en el día de hoy.',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 21,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'Antes mi abuelo ___ mucho café.',
    hyQuestion: 'Նախկինում պապիկս շատ սուրճ էր խմում։',
    options: [
      { key: 'A', text: 'bebió', hyText: 'խմեց (Indefinido)' },
      { key: 'B', text: 'bebía', hyText: 'խմում էր (Imperfecto)' },
      { key: 'C', text: 'ha bebido', hyText: 'խմել է (Perfecto)' },
      { key: 'D', text: 'beberá', hyText: 'կխմի (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Antes» (նախկինում) ցույց է տալիս նախկին սովորույթ -> Pretérito Imperfecto (bebía)։',
    explanationEs: 'Costumbre o hábito del pasado con "antes".',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 22,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'La semana pasada ___ un examen difícil.',
    hyQuestion: 'Անցած շաբաթ ես դժվար քննություն հանձնեցի։',
    options: [
      { key: 'A', text: 'he tenido', hyText: 'ունեցել եմ (Perfecto)' },
      { key: 'B', text: 'tenía', hyText: 'ունեի (Imperfecto)' },
      { key: 'C', text: 'tuve', hyText: 'հանձնեցի / ունեցա (Indefinido)' },
      { key: 'D', text: 'tengo', hyText: 'ունեմ (Presente)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«La semana pasada» (անցած շաբաթ) ավարտված ժամանակահատված է -> Pretérito Indefinido (tuve)։',
    explanationEs: '"La semana pasada" es un marcador inequívoco de Pretérito Indefinido.',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 23,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Este año ___ muchas cosas nuevas.',
    hyQuestion: 'Այս տարի շատ նոր բաներ եմ սովորել։',
    options: [
      { key: 'A', text: 'aprendí', hyText: 'սովորեցի (Indefinido)' },
      { key: 'B', text: 'aprendía', hyText: 'սովորում էի (Imperfecto)' },
      { key: 'C', text: 'he aprendido', hyText: 'սովորել եմ (Perfecto)' },
      { key: 'D', text: 'aprenderé', hyText: 'կսովորեմ (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Este año» (այս տարի) շարունակվող տարի է -> Pretérito Perfecto (he aprendido)։',
    explanationEs: '"Este año" indica un lapso de tiempo aún en curso.',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 24,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'Mientras llovía, nosotros ___ en casa.',
    hyQuestion: 'Մինչ անձրև էր գալիս, մենք տանն էինք։',
    options: [
      { key: 'A', text: 'estuvimos', hyText: 'եղանք (Indefinido)' },
      { key: 'B', text: 'estábamos', hyText: 'էինք / գտնվում էինք (Imperfecto)' },
      { key: 'C', text: 'hemos estado', hyText: 'եղել ենք (Perfecto)' },
      { key: 'D', text: 'estaremos', hyText: 'կլինենք (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Mientras llovía» ֆոնային իրավիճակ է, նկարագրություն անցյալում -> Pretérito Imperfecto (estábamos)։',
    explanationEs: 'Describe el estado de fondo mientras ocurría otra acción simultánea.',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 25,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'Ayer Jorge ___ las llaves.',
    hyQuestion: 'Երեկ Խորխեն կորցրեց բանալիները։',
    options: [
      { key: 'A', text: 'perdía', hyText: 'կորցնում էր (Imperfecto)' },
      { key: 'B', text: 'ha perdido', hyText: 'կորցրել է (Perfecto)' },
      { key: 'C', text: 'perdió', hyText: 'կորցրեց (Indefinido)' },
      { key: 'D', text: 'pierde', hyText: 'կորցնում է (Presente)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Ayer» (երեկ) մեկանգամյա ավարտված դեպք -> Pretérito Indefinido (perdió)։',
    explanationEs: 'Acción puntual y concluida en el pasado ayer.',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 26,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'Cuando éramos pequeños, ___ juntos en el parque.',
    hyQuestion: 'Երբ փոքր էինք, միասին խաղում էինք այգում։',
    options: [
      { key: 'A', text: 'jugamos', hyText: 'խաղացինք / խաղում ենք' },
      { key: 'B', text: 'jugábamos', hyText: 'խաղում էինք (Imperfecto)' },
      { key: 'C', text: 'hemos jugado', hyText: 'խաղացել ենք (Perfecto)' },
      { key: 'D', text: 'jugaremos', hyText: 'կխաղանք (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: 'Մանկության շրջանում կրկնվող գործողություն -> Pretérito Imperfecto (jugábamos)։',
    explanationEs: 'Acción habitual durante la infancia (nosotros jugábamos).',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 27,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Esta tarde ya ___ los deberes.',
    hyQuestion: 'Այսօր կեսօրին արդեն ավարտել եմ տնային աշխատանքը։',
    options: [
      { key: 'A', text: 'terminé', hyText: 'ավարտեցի (Indefinido)' },
      { key: 'B', text: 'terminaba', hyText: 'ավարտում էի (Imperfecto)' },
      { key: 'C', text: 'he terminado', hyText: 'ավարտել եմ (Perfecto)' },
      { key: 'D', text: 'terminaré', hyText: 'կավարտեմ (Futuro)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Esta tarde ya» (այսօր կեսօրին արդեն) -> Pretérito Perfecto (he terminado)։',
    explanationEs: '"Esta tarde" es tiempo no cerrado de la jornada actual.',
    ruleTag: 'Pretérito Perfecto'
  },
  {
    id: 28,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Indefinido)',
    esQuestion: 'El domingo pasado ellos ___ una paella.',
    hyQuestion: 'Անցած կիրակի նրանք պաեյա պատրաստեցին։',
    options: [
      { key: 'A', text: 'preparaban', hyText: 'պատրաստում էին (Imperfecto)' },
      { key: 'B', text: 'han preparado', hyText: 'պատրաստել են (Perfecto)' },
      { key: 'C', text: 'prepararon', hyText: 'պատրաստեցին (Indefinido)' },
      { key: 'D', text: 'preparan', hyText: 'պատրաստում են (Presente)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«El domingo pasado» (անցած կիրակի) ավարտված կոնկրետ օր -> Pretérito Indefinido (prepararon)։',
    explanationEs: 'Acción terminada en el domingo anterior.',
    ruleTag: 'Pretérito Indefinido'
  },
  {
    id: 29,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Imperfecto)',
    esQuestion: 'Mi madre siempre ___ música mientras cocinaba.',
    hyQuestion: 'Մայրս միշտ երաժշտություն էր լսում, երբ պատրաստում էր։',
    options: [
      { key: 'A', text: 'escuchó', hyText: 'լսեց (Indefinido)' },
      { key: 'B', text: 'escuchaba', hyText: 'լսում էր (Imperfecto)' },
      { key: 'C', text: 'ha escuchado', hyText: 'լսել է (Perfecto)' },
      { key: 'D', text: 'escuchará', hyText: 'կլսի (Futuro)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Siempre» (միշտ) ցույց է տալիս սովորական կրկնվող գործողություն անցյալում -> Pretérito Imperfecto (escuchaba)։',
    explanationEs: 'Hábito continuo y repetitivo en el pasado.',
    ruleTag: 'Pretérito Imperfecto'
  },
  {
    id: 30,
    category: 'pasados',
    categoryTitleHy: 'Անցյալ ժամանակներ (Pasados)',
    categoryTitleEs: 'Tiempos Pasados (Pretérito Perfecto)',
    esQuestion: 'Nunca ___ una película así.',
    hyQuestion: 'Երբեք նման ֆիլմ չեմ տեսել։',
    options: [
      { key: 'A', text: 'vi', hyText: 'տեսա (Indefinido)' },
      { key: 'B', text: 'veía', hyText: 'տեսնում էի (Imperfecto)' },
      { key: 'C', text: 'he visto', hyText: 'տեսել եմ (Perfecto)' },
      { key: 'D', text: 'vería', hyText: 'կտեսնեի (Condicional)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Nunca» (երբեք) ամբողջ կյանքի փորձի մասին է խոսում մինչև ներկա պահը -> Pretérito Perfecto (he visto)։',
    explanationEs: '"Nunca" enuncia una experiencia de vida no ocurrida hasta el momento presente.',
    ruleTag: 'Pretérito Perfecto'
  },

  // 31-50: PRONOMBRES DIRECTOS E INDIRECTOS
  {
    id: 31,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: 'Tengo el libro. ___ tengo aquí.',
    hyQuestion: 'Գիրքն ունեմ։ Այն այստեղ է։',
    options: [
      { key: 'A', text: 'Le', hyText: 'Նրան (անուղղակի)' },
      { key: 'B', text: 'Lo', hyText: 'Այն / Նրան (արական եզակի ուղիղ)' },
      { key: 'C', text: 'La', hyText: 'Այն / Նրան (իգական եզակի ուղիղ)' },
      { key: 'D', text: 'Les', hyText: 'Նրանց (անուղղակի)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«El libro» արական սեռի եզակի գոյական է և նախադասության ուղիղ խնդիրն է (ի՞նչ ունեմ -> գիրքը)։ Փոխարինվում է «lo» դերանունով։',
    explanationEs: '"El libro" es objeto directo masculino singular -> "lo".',
    ruleTag: 'Objeto Directo (lo)'
  },
  {
    id: 32,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: 'Veo a María todos los días. ___ veo todos los días.',
    hyQuestion: 'Ես ամեն օր տեսնում եմ Մարիային։',
    options: [
      { key: 'A', text: 'Le', hyText: 'Նրան (անուղղակի)' },
      { key: 'B', text: 'Lo', hyText: 'Նրան (արական ուղիղ)' },
      { key: 'C', text: 'La', hyText: 'Նրան (իգական եզակի ուղիղ)' },
      { key: 'D', text: 'Les', hyText: 'Նրանց (անուղղակի)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«A María» իգական սեռի եզակի ուղիղ խնդիր է (ո՞ւմ եմ տեսնում -> Մարիային)։ Օգտագործվում է «la»։',
    explanationEs: '"A María" es objeto directo femenino singular -> "la".',
    ruleTag: 'Objeto Directo (la)'
  },
  {
    id: 33,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: 'Compro las manzanas. ___ compro.',
    hyQuestion: 'Ես գնում եմ խնձորները։',
    options: [
      { key: 'A', text: 'Las', hyText: 'Դրանք / Նրանց (իգական հոգնակի ուղիղ)' },
      { key: 'B', text: 'Les', hyText: 'Նրանց (անուղղակի)' },
      { key: 'C', text: 'Los', hyText: 'Դրանք (արական հոգնակի ուղիղ)' },
      { key: 'D', text: 'Le', hyText: 'Նրան (անուղղակի)' }
    ],
    correctAnswer: 'A',
    explanationHy: '«Las manzanas» իգական սեռի հոգնակի ուղիղ խնդիր է (ի՞նչ եմ գնում -> խնձորները)։ Փոխարինվում է «las» դերանունով։',
    explanationEs: '"Las manzanas" es objeto directo femenino plural -> "las".',
    ruleTag: 'Objeto Directo (las)'
  },
  {
    id: 34,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: 'Conozco a Carlos y Pablo. ___ conozco.',
    hyQuestion: 'Ես ճանաչում եմ Կառլոսին և Պաբլոյին։',
    options: [
      { key: 'A', text: 'Les', hyText: 'Նրանց (անուղղակի)' },
      { key: 'B', text: 'Los', hyText: 'Նրանց (արական հոգնակի ուղիղ)' },
      { key: 'C', text: 'Las', hyText: 'Նրանց (իգական հոգնակի ուղիղ)' },
      { key: 'D', text: 'Lo', hyText: 'Նրան (արական եզակի ուղիղ)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Carlos y Pablo» երկու տղամարդ են, ուղիղ խնդիր (ո՞ւմ եմ ճանաչում)։ Օգտագործվում է «los»։',
    explanationEs: '"A Carlos y Pablo" objeto directo masculino plural -> "los".',
    ruleTag: 'Objeto Directo (los)'
  },
  {
    id: 35,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Indirectos)',
    categoryTitleEs: 'Pronombres de Objeto Indirecto',
    esQuestion: 'Doy un libro a Ana. ___ doy un libro.',
    hyQuestion: 'Ես Անային գիրք եմ տալիս։',
    options: [
      { key: 'A', text: 'La', hyText: 'Նրան (ուղիղ իգական)' },
      { key: 'B', text: 'Lo', hyText: 'Այն (ուղիղ արական)' },
      { key: 'C', text: 'Le', hyText: 'Նրան (անուղղակի՝ ո՞ւմ)' },
      { key: 'D', text: 'Las', hyText: 'Դրանք (ուղիղ իգական)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«A Ana» անուղղակի խնդիրն է (ո՞ւմ եմ տալիս՝ Անային)։ Եզակի թվի անուղղակի դերանունն է «le»։',
    explanationEs: '"A Ana" es objeto indirecto singular (¿a quién?) -> "le".',
    ruleTag: 'Objeto Indirecto (le)'
  },
  {
    id: 36,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Indirectos)',
    categoryTitleEs: 'Pronombres de Objeto Indirecto',
    esQuestion: 'Escribo una carta a mis padres. ___ escribo una carta.',
    hyQuestion: 'Ես նամակ եմ գրում ծնողներիս։',
    options: [
      { key: 'A', text: 'Los', hyText: 'Նրանց (ուղիղ արական)' },
      { key: 'B', text: 'Les', hyText: 'Նրանց (անուղղակի՝ ո՞ւմ / ում համար)' },
      { key: 'C', text: 'Las', hyText: 'Նրանց (ուղիղ իգական)' },
      { key: 'D', text: 'Lo', hyText: 'Այն (ուղիղ արական)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«A mis padres» հոգնակի թվի անուղղակի խնդիր է (ո՞ւմ եմ գրում) -> օգտագործվում է «les»։',
    explanationEs: '"A mis padres" es objeto indirecto plural -> "les".',
    ruleTag: 'Objeto Indirecto (les)'
  },
  {
    id: 37,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: '¿Me compras el pan? —Sí, ___ compro.',
    hyQuestion: 'Ինձ համար հաց կգնե՞ս։ —Այո, այն կգնեմ։',
    options: [
      { key: 'A', text: 'le', hyText: 'նրան (անուղղակի)' },
      { key: 'B', text: 'lo', hyText: 'այն (արական եզակի ուղիղ)' },
      { key: 'C', text: 'la', hyText: 'այն (իգական եզակի ուղիղ)' },
      { key: 'D', text: 'les', hyText: 'նրանց (անուղղակի)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«El pan» արական սեռի եզակի ուղիղ խնդիր է (ի՞նչ եմ գնում՝ հացը) -> «lo»։',
    explanationEs: '"El pan" es objeto directo masculino singular -> "lo".',
    ruleTag: 'Objeto Directo (lo)'
  },
  {
    id: 38,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Indirectos)',
    categoryTitleEs: 'Pronombres de Objeto Indirecto',
    esQuestion: 'Tengo una pregunta para el profesor. ___ hago una pregunta.',
    hyQuestion: 'Ես ուսուցչին հարց եմ տալիս։',
    options: [
      { key: 'A', text: 'Lo', hyText: 'Նրան (ուղիղ արական)' },
      { key: 'B', text: 'La', hyText: 'Նրան (ուղիղ իգական)' },
      { key: 'C', text: 'Le', hyText: 'Նրան (անուղղակի՝ ում)' },
      { key: 'D', text: 'Los', hyText: 'Նրանց (ուղիղ արական)' }
    ],
    correctAnswer: 'C',
    explanationHy: 'Հարց տալ ուսուցչին (hacer una pregunta al profesor) -> «al profesor» անուղղակի խնդիր է (ո՞ւմ) -> «le»։',
    explanationEs: '"Al profesor" recibe la acción indirectamente (¿a quién?) -> "le".',
    ruleTag: 'Objeto Indirecto (le)'
  },
  {
    id: 39,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: 'Veo la película. ___ veo esta noche.',
    hyQuestion: 'Ես ֆիլմը դիտում եմ։ Այն այսօր երեկոյան եմ դիտում։',
    options: [
      { key: 'A', text: 'Le', hyText: 'Նրան (անուղղակի)' },
      { key: 'B', text: 'La', hyText: 'Այն (իգական եզակի ուղիղ)' },
      { key: 'C', text: 'Lo', hyText: 'Այն (արական եզակի ուղիղ)' },
      { key: 'D', text: 'Les', hyText: 'Նրանց (անուղղակի)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«La película» իգական սեռի եզակի ուղիղ խնդիր է (ի՞նչ եմ դիտում) -> «la»։',
    explanationEs: '"La película" es objeto directo femenino singular -> "la".',
    ruleTag: 'Objeto Directo (la)'
  },
  {
    id: 40,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: 'Compramos los tomates. ___ compramos en el mercado.',
    hyQuestion: 'Մենք գնում ենք լոլիկները շուկայից։',
    options: [
      { key: 'A', text: 'Les', hyText: 'Նրանց (անուղղակի)' },
      { key: 'B', text: 'Las', hyText: 'Դրանք (իգական հոգնակի)' },
      { key: 'C', text: 'Los', hyText: 'Դրանք (արական հոգնակի ուղիղ)' },
      { key: 'D', text: 'Lo', hyText: 'Այն (արական եզակի)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Los tomates» արական սեռի հոգնակի ուղիղ խնդիր է (ի՞նչ ենք գնում) -> «los»։',
    explanationEs: '"Los tomates" es objeto directo masculino plural -> "los".',
    ruleTag: 'Objeto Directo (los)'
  },
  {
    id: 41,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Indirectos)',
    categoryTitleEs: 'Pronombres de Objeto Indirecto',
    esQuestion: 'Doy las llaves a Pedro. ___ doy las llaves.',
    hyQuestion: 'Ես բանալիները տալիս եմ Պեդրոյին։',
    options: [
      { key: 'A', text: 'Lo', hyText: 'Նրան (ուղիղ արական)' },
      { key: 'B', text: 'Le', hyText: 'Նրան (անուղղակի՝ ո՞ւմ)' },
      { key: 'C', text: 'La', hyText: 'Նրան (ուղիղ իգական)' },
      { key: 'D', text: 'Los', hyText: 'Նրանց (ուղիղ արական)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«A Pedro» անուղղակի խնդիրն է (ո՞ւմ եմ տալիս բանալիները -> Պեդրոյին) -> «le»։',
    explanationEs: '"A Pedro" es el objeto indirecto destinatario -> "le".',
    ruleTag: 'Objeto Indirecto (le)'
  },
  {
    id: 42,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Indirectos)',
    categoryTitleEs: 'Pronombres de Objeto Indirecto',
    esQuestion: 'Mandamos mensajes a nuestros amigos. ___ mandamos mensajes.',
    hyQuestion: 'Մենք հաղորդագրություններ ենք ուղարկում մեր ընկերներին։',
    options: [
      { key: 'A', text: 'Los', hyText: 'Նրանց (ուղիղ արական)' },
      { key: 'B', text: 'Las', hyText: 'Նրանց (ուղիղ իգական)' },
      { key: 'C', text: 'Les', hyText: 'Նրանց (անուղղակի՝ ո՞ւմ)' },
      { key: 'D', text: 'Lo', hyText: 'Այն (ուղիղ արական)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«A nuestros amigos» հոգնակի անուղղակի խնդիր է (ո՞ւմ ենք ուղարկում) -> «les»։',
    explanationEs: '"A nuestros amigos" es objeto indirecto plural -> "les".',
    ruleTag: 'Objeto Indirecto (les)'
  },
  {
    id: 43,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: '¿Conoces a Marta? —Sí, ___ conozco.',
    hyQuestion: 'Ճանաչո՞ւմ ես Մարտային։ —Այո, ճանաչում եմ նրան։',
    options: [
      { key: 'A', text: 'le', hyText: 'նրան (անուղղակի)' },
      { key: 'B', text: 'la', hyText: 'նրան (իգական եզակի ուղիղ)' },
      { key: 'C', text: 'lo', hyText: 'նրան (արական եզակի ուղիղ)' },
      { key: 'D', text: 'les', hyText: 'նրանց (անուղղակի)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«A Marta» կին է և նախադասության ուղիղ խնդիրը (ո՞ւմ ես ճանաչում) -> «la»։',
    explanationEs: '"A Marta" funciona como objeto directo femenino singular -> "la".',
    ruleTag: 'Objeto Directo (la)'
  },
  {
    id: 44,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: '¿Tienes mis libros? —Sí, ___ tengo.',
    hyQuestion: 'Իմ գրքերն ունե՞ս։ —Այո, ունեմ։',
    options: [
      { key: 'A', text: 'los', hyText: 'դրանք (արական հոգնակի ուղիղ)' },
      { key: 'B', text: 'les', hyText: 'նրանց (անուղղակի)' },
      { key: 'C', text: 'las', hyText: 'դրանք (իգական հոգնակի)' },
      { key: 'D', text: 'le', hyText: 'նրան (անուղղակի)' }
    ],
    correctAnswer: 'A',
    explanationHy: '«Mis libros» արական սեռի հոգնակի ուղիղ խնդիր է (ի՞նչ ունեմ -> գրքերը) -> «los»։',
    explanationEs: '"Mis libros" es objeto directo masculino plural -> "los".',
    ruleTag: 'Objeto Directo (los)'
  },
  {
    id: 45,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Indirectos)',
    categoryTitleEs: 'Pronombres de Objeto Indirecto',
    esQuestion: 'Explico el ejercicio a Lucía. ___ explico el ejercicio.',
    hyQuestion: 'Ես Լուսիային բացատրում եմ վարժությունը։',
    options: [
      { key: 'A', text: 'La', hyText: 'Նրան (ուղիղ իգական)' },
      { key: 'B', text: 'Lo', hyText: 'Այն (ուղիղ արական)' },
      { key: 'C', text: 'Le', hyText: 'Նրան (անուղղակի՝ ո՞ւմ)' },
      { key: 'D', text: 'Las', hyText: 'Դրանք (ուղիղ իգական)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«A Lucía» անուղղակի խնդիր է (ո՞ւմ եմ բացատրում՝ Լուսիային) -> «le»։ Իսկ «el ejercicio»-ն ուղիղ խնդիրն է։',
    explanationEs: '"A Lucía" es objeto indirecto (a quién se explica) -> "le".',
    ruleTag: 'Objeto Indirecto (le)'
  },
  {
    id: 46,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Indirectos)',
    categoryTitleEs: 'Pronombres de Objeto Indirecto',
    esQuestion: 'Compro flores para mis padres. ___ compro flores.',
    hyQuestion: 'Ծնողներիս համար ծաղիկներ եմ գնում։',
    options: [
      { key: 'A', text: 'Los', hyText: 'Նրանց (ուղիղ արական)' },
      { key: 'B', text: 'Les', hyText: 'Նրանց (անուղղակի՝ ում համար)' },
      { key: 'C', text: 'Las', hyText: 'Նրանց (ուղիղ իգական)' },
      { key: 'D', text: 'Lo', hyText: 'Այն (ուղիղ արական)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Para mis padres» հոգնակի թվի անուղղակի խնդիր է (ում հանդեպ / ում համար) -> «les»։',
    explanationEs: '"Para mis padres" representa al destinatario plural -> "les".',
    ruleTag: 'Objeto Indirecto (les)'
  },
  {
    id: 47,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: 'Necesito la mochila. ___ necesito ahora.',
    hyQuestion: 'Ինձ պայուսակն է պետք։ Այն հիմա է պետք։',
    options: [
      { key: 'A', text: 'Le', hyText: 'Նրան (անուղղակի)' },
      { key: 'B', text: 'Lo', hyText: 'Այն (արական եզակի)' },
      { key: 'C', text: 'La', hyText: 'Այն (իգական եզակի ուղիղ)' },
      { key: 'D', text: 'Les', hyText: 'Նրանց (անուղղակի)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«La mochila» իգական սեռի եզակի ուղիղ խնդիր է (ի՞նչ է պետք) -> «la»։',
    explanationEs: '"La mochila" es objeto directo femenino singular -> "la".',
    ruleTag: 'Objeto Directo (la)'
  },
  {
    id: 48,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: 'Escucho a mis profesores. ___ escucho con atención.',
    hyQuestion: 'Ես լսում եմ իմ ուսուցիչներին։',
    options: [
      { key: 'A', text: 'Les', hyText: 'Նրանց (անուղղակի)' },
      { key: 'B', text: 'Los', hyText: 'Նրանց (արական հոգնակի ուղիղ)' },
      { key: 'C', text: 'Las', hyText: 'Նրանց (իգական հոգնակի)' },
      { key: 'D', text: 'Le', hyText: 'Նրան (անուղղակի)' }
    ],
    correctAnswer: 'B',
    explanationHy: '«Escuchar a alguien» պահանջում է ուղիղ խնդիր։ «A mis profesores» արական հոգնակի ուղիղ խնդիր է -> «los»։',
    explanationEs: 'El verbo "escuchar" rige objeto directo. "A mis profesores" masculino plural -> "los".',
    ruleTag: 'Objeto Directo (los)'
  },
  {
    id: 49,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Indirectos)',
    categoryTitleEs: 'Pronombres de Objeto Indirecto',
    esQuestion: 'Damos un regalo a Carmen. ___ damos un regalo.',
    hyQuestion: 'Մենք Կարմենին նվեր ենք տալիս։',
    options: [
      { key: 'A', text: 'La', hyText: 'Նրան (ուղիղ իգական)' },
      { key: 'B', text: 'Lo', hyText: 'Այն (ուղիղ արական)' },
      { key: 'C', text: 'Le', hyText: 'Նրան (անուղղակի՝ ո՞ւմ)' },
      { key: 'D', text: 'Los', hyText: 'Նրանց (ուղիղ արական)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«A Carmen» անուղղակի խնդիր է (ո՞ւմ ենք տալիս նվերը -> Կարմենին) -> «le»։',
    explanationEs: '"A Carmen" es objeto indirecto destinatario -> "le".',
    ruleTag: 'Objeto Indirecto (le)'
  },
  {
    id: 50,
    category: 'pronombres',
    categoryTitleHy: 'Դերանուններ (Pronombres Directos)',
    categoryTitleEs: 'Pronombres de Objeto Directo',
    esQuestion: '¿Dónde están las fotos? —___ tengo en el móvil.',
    hyQuestion: 'Որտե՞ղ են լուսանկարները։ —Դրանք հեռախոսիս մեջ են։',
    options: [
      { key: 'A', text: 'Les', hyText: 'Նրանց (անուղղակի)' },
      { key: 'B', text: 'Los', hyText: 'Դրանք (արական հոգնակի)' },
      { key: 'C', text: 'Las', hyText: 'Դրանք (իգական հոգնակի ուղիղ)' },
      { key: 'D', text: 'Le', hyText: 'Նրան (անուղղակի)' }
    ],
    correctAnswer: 'C',
    explanationHy: '«Las fotos» իգական սեռի հոգնակի ուղիղ խնդիր է (ի՞նչ ունեմ հեռախոսում -> լուսանկարները) -> «las»։',
    explanationEs: '"Las fotos" es objeto directo femenino plural -> "las".',
    ruleTag: 'Objeto Directo (las)'
  }
];

export const GRAMMAR_GUIDE = {
  pasados: {
    titleHy: 'Անցյալ ժամանակների ուղեցույց (Pasados)',
    titleEs: 'Guía de Tiempos Pasados',
    perfecto: {
      name: 'Pretérito Perfecto (he trabajado, has estado, he visto)',
      usageHy: 'Օգտագործվում է, երբ ժամանակահատվածը դեռ ՉԻ ավարտվել կամ կապ ունի ներկայի հետ։ Բանալի բառեր՝ hoy (այսօր), esta semana (այս շաբաթ), este mes (այս ամիս), este año (այս տարի), todavía no (դեռ ոչ), alguna vez (երբևէ), nunca (երբեք)։'
    },
    indefinido: {
      name: 'Pretérito Indefinido (trabajé, fue, visitamos, comí)',
      usageHy: 'Օգտագործվում է ավարտված ժամանակահատվածում մեկանգամյա կամ կոնկրետ ավարտված գործողությունների համար։ Բանալի բառեր՝ ayer (երեկ), anoche (երեկ գիշեր), el año pasado (անցած տարի), la semana pasada (անցած շաբաթ), en 2024։'
    },
    imperfecto: {
      name: 'Pretérito Imperfecto (trabajaba, jugaba, vivía, comía)',
      usageHy: 'Օգտագործվում է անցյալում կրկնվող, սովորական գործողությունների, նկարագրությունների և զուգահեռ ընթացող պրոցեսների համար։ Բանալի բառեր՝ antes (նախկինում), siempre (միշտ), todos los días (ամեն օր), mientras (մինչդեռ), cuando era niño (երբ երեխա էի)։'
    }
  },
  pronombres: {
    titleHy: 'Դերանունների ուղեցույց (Pronombres)',
    titleEs: 'Guía de Pronombres Directos e Indirectos',
    directos: {
      name: 'Directos (Ուղիղ խնդիր՝ ի՞նչ / ո՞ւմ)',
      items: 'lo (արական եզակի), la (իգական եզակի), los (արական հոգնակի), las (իգական հոգնակի)',
      example: 'Tengo el libro -> Lo tengo. / Veo a María -> La veo.'
    },
    indirectos: {
      name: 'Indirectos (Անուղղակի խնդիր՝ ո՞ւմ / ում համար)',
      items: 'me (ինձ), te (քեզ), le (նրան), nos (մեզ), os (ձեզ), les (նրանց)',
      example: 'Doy un libro a Ana -> Le doy un libro. / Escribo a mis padres -> Les escribo.'
    },
    keyRule: {
      titleHy: '⭐ Կարևոր կանոն (Regla Especial)',
      textHy: 'Երբ կողք կողքի են հանդիպում անուղղակի + ուղիղ դերանունները, «le» կամ «les»-ը դառնում է «se»։',
      examples: [
        'Doy el libro a Ana → Se lo doy. (ոչ թե Le lo doy)',
        'Compro las flores a mi madre → Se las compro. (ոչ թե Le las compro)'
      ]
    }
  }
};

// 15-question ladder standard amounts
export const PRIZE_LADDER_15: PrizeLevel[] = [
  { level: 1, amount: 100, formattedAmount: '100 $', isMilestone: false },
  { level: 2, amount: 200, formattedAmount: '200 $', isMilestone: false },
  { level: 3, amount: 300, formattedAmount: '300 $', isMilestone: false },
  { level: 4, amount: 500, formattedAmount: '500 $', isMilestone: false },
  { level: 5, amount: 1000, formattedAmount: '1,000 $', isMilestone: true },
  { level: 6, amount: 2000, formattedAmount: '2,000 $', isMilestone: false },
  { level: 7, amount: 4000, formattedAmount: '4,000 $', isMilestone: false },
  { level: 8, amount: 8000, formattedAmount: '8,000 $', isMilestone: false },
  { level: 9, amount: 16000, formattedAmount: '16,000 $', isMilestone: false },
  { level: 10, amount: 32000, formattedAmount: '32,000 $', isMilestone: true },
  { level: 11, amount: 64000, formattedAmount: '64,000 $', isMilestone: false },
  { level: 12, amount: 125000, formattedAmount: '125,000 $', isMilestone: false },
  { level: 13, amount: 250000, formattedAmount: '250,000 $', isMilestone: false },
  { level: 14, amount: 500000, formattedAmount: '500,000 $', isMilestone: false },
  { level: 15, amount: 1000000, formattedAmount: '1,000,000 $', isMilestone: true }
];

export function getLadderForQuestionsCount(count: number): PrizeLevel[] {
  if (count === 15) return PRIZE_LADDER_15;
  
  // Custom generator for marathon or categories
  const ladder: PrizeLevel[] = [];
  const baseMilestones = [Math.floor(count / 3), Math.floor((count * 2) / 3), count];
  
  for (let i = 1; i <= count; i++) {
    const progress = i / count;
    let amt: number;
    if (i === count) {
      amt = 1000000;
    } else {
      amt = Math.round(Math.pow(10, 2 + progress * 4) / 100) * 100;
    }
    const isMilestone = baseMilestones.includes(i);
    ladder.push({
      level: i,
      amount: amt,
      formattedAmount: `${amt.toLocaleString('en-US')} $`,
      isMilestone
    });
  }
  return ladder;
}
