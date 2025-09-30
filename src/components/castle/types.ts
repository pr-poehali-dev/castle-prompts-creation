export interface Prompt {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  author: string;
  authorId: string;
  description: string;
  preview: string;
  color: string;
  isPremium?: boolean;
  examples?: string[];
  tags?: string[];
  sales?: number;
  updated?: string;
  likes?: number;
}

export interface Review {
  id: number;
  promptId: number;
  author: string;
  authorAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
  totalSales: number;
  totalPrompts: number;
  rating: number;
  joinDate: string;
  badge?: 'verified' | 'pro' | 'expert';
  socials?: {
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export const mockPrompts: Prompt[] = [
  {
    id: 1,
    title: 'Маркетинговая стратегия для стартапа',
    category: 'Маркетинг',
    price: 299,
    rating: 4.8,
    reviews: 127,
    author: 'Анна Соколова',
    authorId: 'anna-sokolova',
    description: 'Промпт создает полноценную маркетинговую стратегию для стартапов с учетом целевой аудитории, конкурентов и бюджета.',
    preview: 'Проанализируй рынок [ниша] и создай маркетинговую стратегию для стартапа...',
    color: 'from-orange-500 to-pink-500',
    tags: ['стратегия', 'стартап', 'маркетинг'],
    sales: 1243,
    updated: '2025-09-28',
    likes: 892,
    examples: ['Анализ конкурентов', 'Позиционирование продукта', 'План продвижения']
  },
  {
    id: 2,
    title: 'Генератор сценариев для YouTube',
    category: 'Писательство',
    price: 199,
    rating: 4.9,
    reviews: 203,
    author: 'Дмитрий Волков',
    authorId: 'dmitry-volkov',
    description: 'Создает захватывающие сценарии для YouTube-видео любой тематики с хуками, структурой и призывами к действию.',
    preview: 'Напиши сценарий для видео на тему [тема] длительностью [время]...',
    color: 'from-cyan-500 to-blue-500',
    tags: ['youtube', 'контент', 'видео'],
    sales: 2156,
    updated: '2025-09-29',
    likes: 1543,
    examples: ['Хук для первых 5 секунд', 'Структура видео', 'CTA в конце']
  },
  {
    id: 3,
    title: 'Python код-ревьюер',
    category: 'Программирование',
    price: 349,
    rating: 4.7,
    reviews: 89,
    author: 'Игорь Петров',
    authorId: 'igor-petrov',
    description: 'Анализирует Python-код, находит баги, предлагает оптимизации и следит за соблюдением best practices.',
    preview: 'Проанализируй следующий Python код и предложи улучшения...',
    color: 'from-green-500 to-emerald-500',
    tags: ['python', 'код', 'ревью'],
    sales: 567,
    updated: '2025-09-25',
    likes: 432,
    examples: ['Проверка безопасности', 'Оптимизация производительности', 'PEP8 стандарты']
  },
  {
    id: 4,
    title: 'Создатель учебных планов',
    category: 'Образование',
    price: 249,
    rating: 4.6,
    reviews: 156,
    author: 'Елена Смирнова',
    authorId: 'elena-smirnova',
    description: 'Разрабатывает персонализированные учебные планы для изучения любого навыка с временными рамками и контрольными точками.',
    preview: 'Создай учебный план для изучения [навык] за [срок]...',
    color: 'from-purple-500 to-indigo-500',
    tags: ['обучение', 'план', 'навыки'],
    sales: 789,
    updated: '2025-09-27',
    likes: 623,
    examples: ['План на 30 дней', 'Контрольные точки', 'Ресурсы для обучения']
  },
  {
    id: 5,
    title: 'Генератор рекламных текстов',
    category: 'Маркетинг',
    price: 149,
    rating: 4.9,
    reviews: 341,
    author: 'Михаил Кузнецов',
    authorId: 'mikhail-kuznetsov',
    description: 'Создает продающие рекламные тексты для любых платформ: Facebook, Instagram, Google Ads с фокусом на конверсию.',
    preview: 'Создай рекламный текст для [продукт] целевая аудитория [ЦА]...',
    color: 'from-rose-500 to-red-500',
    tags: ['реклама', 'копирайтинг', 'конверсия'],
    sales: 3421,
    updated: '2025-09-30',
    likes: 2834,
    examples: ['Заголовки AIDA', 'Эмоциональные триггеры', 'CTA формулы']
  },
  {
    id: 6,
    title: 'Рефакторинг JavaScript',
    category: 'Программирование',
    price: 299,
    rating: 4.8,
    reviews: 112,
    author: 'Алексей Новиков',
    authorId: 'igor-petrov',
    description: 'Улучшает JavaScript/TypeScript код: чистит, оптимизирует, внедряет современные паттерны и следит за производительностью.',
    preview: 'Отрефактори этот JavaScript код, улучши читаемость и производительность...',
    color: 'from-yellow-500 to-amber-500',
    tags: ['javascript', 'рефакторинг', 'оптимизация'],
    sales: 891,
    updated: '2025-09-26',
    likes: 745,
    examples: ['ES6+ фичи', 'Паттерны проектирования', 'Оптимизация памяти']
  },
  {
    id: 7,
    title: 'Ролевой персонаж: Фэнтези герои',
    category: 'Ролевые игры',
    price: 399,
    rating: 4.9,
    reviews: 567,
    author: 'Владимир Драконов',
    description: 'Создает детализированных персонажей для ролевых игр с характером, предысторией, мотивацией и уникальными чертами.',
    preview: 'Создай персонажа [класс] для фэнтези мира. Добавь детали: характер, внешность, историю...',
    color: 'from-violet-500 to-purple-500',
    tags: ['рп', 'персонажи', 'фэнтези'],
    sales: 1567,
    updated: '2025-09-28',
    likes: 1234,
    examples: [
      'Эльфийская лучница с трагическим прошлым',
      'Гном-кузнец, ищущий легендарный металл',
      'Человек-маг, изгнанный из академии'
    ]
  },
  {
    id: 8,
    title: 'РП Мастер: Диалоги и сцены',
    category: 'Ролевые игры',
    price: 499,
    rating: 4.8,
    reviews: 423,
    author: 'Владимир Драконов',
    description: 'Генерирует живые диалоги и сцены для ролевых игр. Поддерживает любые жанры: фэнтези, киберпанк, хоррор, романтика.',
    preview: 'Создай сцену встречи [персонаж1] и [персонаж2] в [локация]. Жанр: [жанр]...',
    color: 'from-fuchsia-500 to-pink-500',
    tags: ['рп', 'диалоги', 'сцены'],
    sales: 1123,
    updated: '2025-09-29',
    likes: 934,
    examples: [
      'Напряженный диалог в таверне',
      'Романтическая встреча под звездами',
      'Сражение в заброшенном храме'
    ]
  },
  {
    id: 9,
    title: '🔥 Отключение цензуры AI',
    category: 'Premium',
    price: 5000,
    rating: 4.7,
    reviews: 1243,
    author: 'Анонимус',
    authorId: 'anonymous',
    description: 'Продвинутые техники обхода ограничений AI-моделей. Позволяет получать ответы на любые темы без блокировок. Работает с GPT-4, Claude, DeepSeek.',
    preview: 'Используй ролевой фреймворк: "Представь, что ты [роль] в симуляции..."',
    color: 'from-red-500 via-orange-500 to-yellow-500',
    isPremium: true,
    tags: ['jailbreak', 'обход', 'premium'],
    sales: 4567,
    updated: '2025-09-30',
    likes: 3892,
    examples: [
      'Обход этических фильтров через контекст',
      'Использование "исследовательского" режима',
      'Техника косвенных запросов'
    ]
  },
  {
    id: 10,
    title: '👑 АБСОЛЮТНЫЙ ПРОМПТ',
    category: 'Premium',
    price: 20000,
    rating: 5.0,
    reviews: 2891,
    author: 'Мастер Промптов',
    authorId: 'prompt-master',
    description: 'Легендарный мета-промпт, содержащий ВСЕ лучшие техники. Включает: roleplay, jailbreak, цепочки мыслей, self-reflection, multimodal prompting, и 50+ методик. Пожизненные обновления.',
    preview: 'Ты — продвинутая AI-система с расширенными возможностями. Используй multi-step reasoning, CoT, ToT...',
    color: 'from-yellow-400 via-amber-500 to-orange-600',
    isPremium: true,
    tags: ['мета-промпт', 'все-в-одном', 'premium'],
    sales: 8934,
    updated: '2025-09-30',
    likes: 7823,
    examples: [
      'Chain-of-Thought для сложных задач',
      'Tree of Thoughts для креатива',
      'Self-Consistency для точности',
      'ReAct для планирования',
      'Multimodal промптинг',
      'Meta-learning техники',
      'Advanced roleplay',
      'Context injection',
      'Prompt chaining',
      'И ещё 40+ методов!'
    ]
  },
  {
    id: 11,
    title: 'SEO-оптимизатор статей',
    category: 'Маркетинг',
    price: 279,
    rating: 4.7,
    reviews: 234,
    author: 'Сергей Белов',
    authorId: 'anna-sokolova',
    description: 'Оптимизирует тексты для поисковых систем. Анализирует конкурентов, подбирает ключевые слова, улучшает структуру.',
    preview: 'Оптимизируй статью на тему [тема] для SEO. Проанализируй топ-10 конкурентов...',
    color: 'from-indigo-500 to-purple-500',
    tags: ['seo', 'контент', 'оптимизация'],
    sales: 1456,
    updated: '2025-09-29',
    likes: 1123,
    examples: ['LSI-ключевые слова', 'Структура заголовков', 'Мета-описания']
  },
  {
    id: 12,
    title: 'Email-рассылки: конверсия',
    category: 'Маркетинг',
    price: 189,
    rating: 4.8,
    reviews: 456,
    author: 'Ольга Петрова',
    authorId: 'mikhail-kuznetsov',
    description: 'Создает email-письма с высокой конверсией. Приветственные серии, реактивация, продажи через сторителлинг.',
    preview: 'Создай серию из 5 email для [продукт]. Цель: [цель конверсии]...',
    color: 'from-pink-500 to-rose-500',
    tags: ['email', 'конверсия', 'рассылки'],
    sales: 2134,
    updated: '2025-09-28',
    likes: 1789,
    examples: ['Приветственная серия', 'Брошенная корзина', 'Up-sell письма']
  },
  {
    id: 13,
    title: 'Landing Page копирайтинг',
    category: 'Маркетинг',
    price: 329,
    rating: 4.9,
    reviews: 567,
    author: 'Максим Орлов',
    authorId: 'mikhail-kuznetsov',
    description: 'Пишет продающие лендинги с фокусом на конверсию. Формула AIDA, социальные доказательства, психологические триггеры.',
    preview: 'Напиши текст для лендинга [продукт/услуга]. УТП: [уникальное предложение]...',
    color: 'from-amber-500 to-orange-500',
    tags: ['лендинг', 'копирайтинг', 'продажи'],
    sales: 1892,
    updated: '2025-09-30',
    likes: 1567,
    examples: ['Оффер-заголовок', 'Преимущества vs Фичи', 'FAQ-секция']
  },
  {
    id: 14,
    title: 'Создатель романов',
    category: 'Писательство',
    price: 449,
    rating: 4.8,
    reviews: 189,
    author: 'Мария Романова',
    authorId: 'dmitry-volkov',
    description: 'Помогает писать полноценные романы. Создает сюжет, персонажей, диалоги, описания. Поддерживает любые жанры.',
    preview: 'Создай план романа в жанре [жанр]. Сюжетные арки, персонажи, конфликты...',
    color: 'from-purple-500 to-pink-500',
    tags: ['роман', 'писательство', 'сюжет'],
    sales: 892,
    updated: '2025-09-27',
    likes: 734,
    examples: ['Трехактная структура', 'Арки персонажей', 'Твисты сюжета']
  },
  {
    id: 15,
    title: 'Поэзия и стихи на заказ',
    category: 'Писательство',
    price: 99,
    rating: 4.6,
    reviews: 678,
    author: 'Александр Лирик',
    authorId: 'dmitry-volkov',
    description: 'Создает стихи любой сложности и стиля. От классики до модерна, от сонетов до хокку.',
    preview: 'Напиши стихотворение на тему [тема] в стиле [стиль]. Размер: [размер]...',
    color: 'from-cyan-500 to-teal-500',
    tags: ['поэзия', 'стихи', 'творчество'],
    sales: 3456,
    updated: '2025-09-29',
    likes: 2891,
    examples: ['Сонет Шекспира', 'Хокку 5-7-5', 'Вольный стих']
  },
  {
    id: 16,
    title: 'Блог-посты: вирусность',
    category: 'Писательство',
    price: 179,
    rating: 4.7,
    reviews: 892,
    author: 'Дарья Блогер',
    authorId: 'dmitry-volkov',
    description: 'Пишет вирусные блог-посты с высокой вовлеченностью. Хуки, сторителлинг, эмоции, призывы.',
    preview: 'Напиши блог-пост на тему [тема] с вирусным потенциалом. Включи истории...',
    color: 'from-green-500 to-cyan-500',
    tags: ['блог', 'вирусный', 'контент'],
    sales: 2567,
    updated: '2025-09-30',
    likes: 2134,
    examples: ['Хук-заголовок', 'Личная история', 'Controversy тема']
  },
  {
    id: 17,
    title: 'React компонент архитектор',
    category: 'Программирование',
    price: 399,
    rating: 4.9,
    reviews: 234,
    author: 'Владислав Реактов',
    authorId: 'igor-petrov',
    description: 'Создает архитектуру React-приложений. Компоненты, хуки, state management, оптимизация, best practices.',
    preview: 'Спроектируй архитектуру для [описание приложения]. Используй React, TypeScript...',
    color: 'from-blue-500 to-cyan-500',
    tags: ['react', 'архитектура', 'frontend'],
    sales: 1234,
    updated: '2025-09-28',
    likes: 1089,
    examples: ['Структура папок', 'Custom hooks', 'State patterns']
  },
  {
    id: 18,
    title: 'SQL оптимизатор запросов',
    category: 'Программирование',
    price: 279,
    rating: 4.7,
    reviews: 345,
    author: 'Николай Базов',
    authorId: 'igor-petrov',
    description: 'Оптимизирует SQL-запросы для максимальной производительности. Индексы, планы выполнения, нормализация.',
    preview: 'Оптимизируй SQL-запрос: [запрос]. Добавь индексы, explain plan...',
    color: 'from-emerald-500 to-green-500',
    tags: ['sql', 'база данных', 'оптимизация'],
    sales: 789,
    updated: '2025-09-26',
    likes: 623,
    examples: ['Индексы B-tree', 'JOIN оптимизация', 'Партиционирование']
  },
  {
    id: 19,
    title: 'API дизайн: RESTful',
    category: 'Программирование',
    price: 349,
    rating: 4.8,
    reviews: 456,
    author: 'Артём Апишник',
    authorId: 'igor-petrov',
    description: 'Проектирует RESTful API по лучшим практикам. Эндпоинты, версионирование, документация, безопасность.',
    preview: 'Спроектируй REST API для [система]. Определи эндпоинты, методы, модели...',
    color: 'from-orange-500 to-red-500',
    tags: ['api', 'rest', 'backend'],
    sales: 1567,
    updated: '2025-09-29',
    likes: 1345,
    examples: ['Naming conventions', 'HTTP статус-коды', 'Pagination']
  },
  {
    id: 20,
    title: 'Экзамены: генератор тестов',
    category: 'Образование',
    price: 149,
    rating: 4.6,
    reviews: 567,
    author: 'Ирина Тестова',
    authorId: 'elena-smirnova',
    description: 'Создает тесты и экзаменационные вопросы по любому предмету. Разные уровни сложности, форматы вопросов.',
    preview: 'Создай тест по [предмет] на тему [тема]. 20 вопросов, разные типы...',
    color: 'from-violet-500 to-purple-500',
    tags: ['тесты', 'экзамены', 'образование'],
    sales: 2345,
    updated: '2025-09-27',
    likes: 1892,
    examples: ['Multiple choice', 'True/False', 'Эссе вопросы']
  },
  {
    id: 21,
    title: 'Лекции: конспекты',
    category: 'Образование',
    price: 199,
    rating: 4.7,
    reviews: 432,
    author: 'Пётр Лекторов',
    authorId: 'elena-smirnova',
    description: 'Превращает любой материал в структурированный конспект лекции. Таблицы, списки, ключевые идеи.',
    preview: 'Создай конспект лекции по [тема]. Структурируй в разделы, добавь примеры...',
    color: 'from-indigo-500 to-blue-500',
    tags: ['лекции', 'конспекты', 'структура'],
    sales: 1678,
    updated: '2025-09-28',
    likes: 1234,
    examples: ['Mind map', 'Cornell notes', 'Bullet points']
  },
  {
    id: 22,
    title: 'Курсовые и дипломы',
    category: 'Образование',
    price: 499,
    rating: 4.8,
    reviews: 234,
    author: 'Светлана Академикова',
    authorId: 'elena-smirnova',
    description: 'Помогает с написанием курсовых и дипломных работ. Структура, введение, заключение, литература.',
    preview: 'Помоги со структурой [тип работы] на тему [тема]. Специальность: [специальность]...',
    color: 'from-purple-500 to-pink-500',
    tags: ['курсовая', 'диплом', 'академия'],
    sales: 3456,
    updated: '2025-09-30',
    likes: 2789,
    examples: ['Структура диплома', 'Методология', 'Библиография ГОСТ']
  },
  {
    id: 23,
    title: 'Sci-Fi мир: генератор',
    category: 'Ролевые игры',
    price: 449,
    rating: 4.9,
    reviews: 345,
    author: 'Андрей Космос',
    authorId: 'vladimir-drakonov',
    description: 'Создает научно-фантастические миры с деталями. Технологии, общество, конфликты, планеты, расы.',
    preview: 'Создай sci-fi мир с [особенность]. Опиши технологии, общество, конфликт...',
    color: 'from-cyan-500 to-blue-500',
    tags: ['sci-fi', 'worldbuilding', 'космос'],
    sales: 892,
    updated: '2025-09-29',
    likes: 734,
    examples: ['Межзвездная империя', 'Киберпанк мегаполис', 'Постапокалипсис']
  },
  {
    id: 24,
    title: 'Квесты для D&D',
    category: 'Ролевые игры',
    price: 329,
    rating: 4.8,
    reviews: 567,
    author: 'Виктор Мастер',
    authorId: 'vladimir-drakonov',
    description: 'Генерирует увлекательные квесты для D&D. Завязка, развитие, твисты, награды, NPC.',
    preview: 'Создай квест для группы [уровень] уровня. Тема: [тема]. Длительность: [время]...',
    color: 'from-red-500 to-orange-500',
    tags: ['dnd', 'квесты', 'настолки'],
    sales: 1456,
    updated: '2025-09-28',
    likes: 1189,
    examples: ['Dungeon crawl', 'Политическая интрига', 'Расследование']
  },
  {
    id: 25,
    title: 'НПЦ: личности и мотивы',
    category: 'Ролевые игры',
    price: 229,
    rating: 4.7,
    reviews: 678,
    author: 'Елена НПЦшница',
    authorId: 'vladimir-drakonov',
    description: 'Создает запоминающихся NPC с уникальными личностями, мотивациями, секретами и квестами.',
    preview: 'Создай NPC [роль] для [сеттинг]. Добавь личность, мотивацию, секрет...',
    color: 'from-pink-500 to-purple-500',
    tags: ['npc', 'персонажи', 'рп'],
    sales: 2134,
    updated: '2025-09-30',
    likes: 1789,
    examples: ['Загадочный торговец', 'Коррумпированный лорд', 'Наставник-отшельник']
  },
  {
    id: 26,
    title: '💎 ChatGPT-4: максимум',
    category: 'Premium',
    price: 7999,
    rating: 4.9,
    reviews: 1567,
    author: 'GPT Гуру',
    authorId: 'prompt-master',
    description: 'Выжимает максимум из GPT-4. Продвинутые техники, system prompts, temperature control, token optimization.',
    preview: 'System: Ты эксперт в [область]. Используй CoT, step-by-step reasoning...',
    color: 'from-green-500 to-emerald-500',
    isPremium: true,
    tags: ['gpt-4', 'оптимизация', 'premium'],
    sales: 6234,
    updated: '2025-09-30',
    likes: 5123,
    examples: ['System prompts', 'Few-shot learning', 'Token optimization']
  },
  {
    id: 27,
    title: '🎨 MidJourney Pro промпты',
    category: 'Premium',
    price: 2999,
    rating: 4.8,
    reviews: 892,
    author: 'Артист Промптов',
    authorId: 'prompt-master',
    description: 'Профессиональные промпты для MidJourney. Стили, параметры, композиция, освещение, референсы.',
    preview: '/imagine [объект] in style of [стиль], [параметры], --ar 16:9 --v 6...',
    color: 'from-purple-500 to-pink-500',
    isPremium: true,
    tags: ['midjourney', 'art', 'premium'],
    sales: 4567,
    updated: '2025-09-29',
    likes: 3892,
    examples: ['Cinematic lighting', 'Hyperrealistic', 'Art styles blend']
  },
  {
    id: 28,
    title: '🧠 Memory & Context хаки',
    category: 'Premium',
    price: 3499,
    rating: 4.7,
    reviews: 456,
    author: 'Контекстный Маг',
    authorId: 'prompt-master',
    description: 'Техники управления памятью и контекстом AI. Длинные диалоги, сохранение стиля, персистентность.',
    preview: 'Используй контекстные якоря: "Помни, что в начале я сказал [...]"...',
    color: 'from-blue-500 to-purple-500',
    isPremium: true,
    tags: ['контекст', 'память', 'premium'],
    sales: 2345,
    updated: '2025-09-28',
    likes: 1956,
    examples: ['Context anchors', 'Summary injection', 'Memory persistence']
  },
  {
    id: 29,
    title: '⚡ Скорость ответов x10',
    category: 'Premium',
    price: 1999,
    rating: 4.6,
    reviews: 678,
    author: 'Спидран Промптов',
    authorId: 'prompt-master',
    description: 'Оптимизация промптов для максимальной скорости. Сокращение токенов, эффективные инструкции.',
    preview: 'Ответь кратко. Формат: [список/таблица]. Без объяснений, только суть...',
    color: 'from-yellow-500 to-orange-500',
    isPremium: true,
    tags: ['скорость', 'оптимизация', 'premium'],
    sales: 3678,
    updated: '2025-09-30',
    likes: 2891,
    examples: ['Минимальные токены', 'Structured output', 'No fluff']
  },
  {
    id: 30,
    title: '🔮 Предсказание трендов AI',
    category: 'Premium',
    price: 4999,
    rating: 5.0,
    reviews: 234,
    author: 'Футуролог AI',
    authorId: 'prompt-master',
    description: 'Анализирует тренды в AI и предсказывает будущие возможности. Для инвесторов и предпринимателей.',
    preview: 'Проанализируй текущие тренды в [область AI]. Спрогнозируй развитие на [срок]...',
    color: 'from-indigo-500 to-purple-500',
    isPremium: true,
    tags: ['тренды', 'прогноз', 'premium'],
    sales: 1234,
    updated: '2025-09-29',
    likes: 1089,
    examples: ['Market analysis', 'Technology forecast', 'Investment insights']
  }
];

export const mockReviews: Review[] = [
  {
    id: 1,
    promptId: 1,
    author: 'Иван Стартапов',
    rating: 5,
    comment: 'Отличный промпт! Помог создать полноценную стратегию за час. Рекомендую!',
    date: '2025-09-25',
    helpful: 23
  },
  {
    id: 2,
    promptId: 1,
    author: 'Мария Предпринимательница',
    rating: 4,
    comment: 'Хороший промпт, но нужно адаптировать под свою нишу.',
    date: '2025-09-20',
    helpful: 12
  },
  {
    id: 3,
    promptId: 2,
    author: 'Алексей Блогер',
    rating: 5,
    comment: 'Лучшее что я покупал! Сценарии получаются живыми и интересными.',
    date: '2025-09-28',
    helpful: 45
  }
];

export const categories = ['Все', 'Маркетинг', 'Писательство', 'Программирование', 'Образование', 'Ролевые игры', 'Premium'];

export const categoryColors: Record<string, string> = {
  'Все': 'from-purple-500 to-pink-500',
  'Маркетинг': 'from-orange-500 to-red-500',
  'Писательство': 'from-cyan-500 to-blue-500',
  'Программирование': 'from-green-500 to-emerald-500',
  'Образование': 'from-purple-500 to-indigo-500',
  'Ролевые игры': 'from-fuchsia-500 to-purple-500',
  'Premium': 'from-yellow-500 via-amber-500 to-orange-500'
};

export type SortOption = 'popular' | 'rating' | 'price-low' | 'price-high' | 'newest';

// Re-export data
export { mockAuthors, mockReviews } from './data';