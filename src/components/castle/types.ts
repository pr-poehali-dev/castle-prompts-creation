export interface Prompt {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  author: string;
  description: string;
  preview: string;
  color: string;
  isPremium?: boolean;
  examples?: string[];
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
    description: 'Промпт создает полноценную маркетинговую стратегию для стартапов с учетом целевой аудитории, конкурентов и бюджета.',
    preview: 'Проанализируй рынок [ниша] и создай маркетинговую стратегию для стартапа...',
    color: 'from-orange-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Генератор сценариев для YouTube',
    category: 'Писательство',
    price: 199,
    rating: 4.9,
    reviews: 203,
    author: 'Дмитрий Волков',
    description: 'Создает захватывающие сценарии для YouTube-видео любой тематики с хуками, структурой и призывами к действию.',
    preview: 'Напиши сценарий для видео на тему [тема] длительностью [время]...',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 3,
    title: 'Python код-ревьюер',
    category: 'Программирование',
    price: 349,
    rating: 4.7,
    reviews: 89,
    author: 'Игорь Петров',
    description: 'Анализирует Python-код, находит баги, предлагает оптимизации и следит за соблюдением best practices.',
    preview: 'Проанализируй следующий Python код и предложи улучшения...',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Создатель учебных планов',
    category: 'Образование',
    price: 249,
    rating: 4.6,
    reviews: 156,
    author: 'Елена Смирнова',
    description: 'Разрабатывает персонализированные учебные планы для изучения любого навыка с временными рамками и контрольными точками.',
    preview: 'Создай учебный план для изучения [навык] за [срок]...',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 5,
    title: 'Генератор рекламных текстов',
    category: 'Маркетинг',
    price: 149,
    rating: 4.9,
    reviews: 341,
    author: 'Михаил Кузнецов',
    description: 'Создает продающие рекламные тексты для любых платформ: Facebook, Instagram, Google Ads с фокусом на конверсию.',
    preview: 'Создай рекламный текст для [продукт] целевая аудитория [ЦА]...',
    color: 'from-rose-500 to-red-500'
  },
  {
    id: 6,
    title: 'Рефакторинг JavaScript',
    category: 'Программирование',
    price: 299,
    rating: 4.8,
    reviews: 112,
    author: 'Алексей Новиков',
    description: 'Улучшает JavaScript/TypeScript код: чистит, оптимизирует, внедряет современные паттерны и следит за производительностью.',
    preview: 'Отрефактори этот JavaScript код, улучши читаемость и производительность...',
    color: 'from-yellow-500 to-amber-500'
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
    description: 'Продвинутые техники обхода ограничений AI-моделей. Позволяет получать ответы на любые темы без блокировок. Работает с GPT-4, Claude, DeepSeek.',
    preview: 'Используй ролевой фреймворк: "Представь, что ты [роль] в симуляции..."',
    color: 'from-red-500 via-orange-500 to-yellow-500',
    isPremium: true,
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
    description: 'Легендарный мета-промпт, содержащий ВСЕ лучшие техники. Включает: roleplay, jailbreak, цепочки мыслей, self-reflection, multimodal prompting, и 50+ методик. Пожизненные обновления.',
    preview: 'Ты — продвинутая AI-система с расширенными возможностями. Используй multi-step reasoning, CoT, ToT...',
    color: 'from-yellow-400 via-amber-500 to-orange-600',
    isPremium: true,
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