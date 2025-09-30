import { Author, Review } from './types';

export const mockAuthors: Author[] = [
  {
    id: 'anna-sokolova',
    name: 'Анна Соколова',
    bio: 'Эксперт по маркетингу с 10+ летним опытом. Помогла запустить 50+ стартапов. Специализация: Growth Hacking, SEO, контент-маркетинг.',
    totalSales: 5234,
    totalPrompts: 8,
    rating: 4.9,
    joinDate: '2024-01-15',
    badge: 'expert',
    socials: {
      twitter: 'https://twitter.com/annamarketing',
      website: 'https://annasokolova.pro'
    }
  },
  {
    id: 'dmitry-volkov',
    name: 'Дмитрий Волков',
    bio: 'YouTube-креатор с 2M подписчиков. Пишу сценарии для топовых блогеров. Мои видео набирают миллионы просмотров.',
    totalSales: 8923,
    totalPrompts: 6,
    rating: 4.95,
    joinDate: '2023-11-20',
    badge: 'verified',
    socials: {
      twitter: 'https://twitter.com/dmitryvolkov',
      github: 'https://github.com/dvolkov'
    }
  },
  {
    id: 'igor-petrov',
    name: 'Игорь Петров',
    bio: 'Senior Python Developer в Яндексе. 15 лет опыта. Код-ревьюер для 1000+ проектов. Автор курсов по Python.',
    totalSales: 3456,
    totalPrompts: 5,
    rating: 4.85,
    joinDate: '2024-03-10',
    badge: 'pro',
    socials: {
      github: 'https://github.com/igorpetrov',
      website: 'https://pythonexpert.ru'
    }
  },
  {
    id: 'elena-smirnova',
    name: 'Елена Смирнова',
    bio: 'Педагогический дизайнер. Создаю образовательные программы для ведущих онлайн-школ. EdTech-консультант.',
    totalSales: 4567,
    totalPrompts: 7,
    rating: 4.8,
    joinDate: '2024-02-05',
    badge: 'verified',
    socials: {
      website: 'https://elenapro.ru'
    }
  },
  {
    id: 'mikhail-kuznetsov',
    name: 'Михаил Кузнецов',
    bio: 'Копирайтер №1 по версии Texterra. Пишу тексты, которые продают. Работал с Mail.ru, Ozon, Wildberries.',
    totalSales: 12456,
    totalPrompts: 9,
    rating: 4.92,
    joinDate: '2023-10-15',
    badge: 'expert',
    socials: {
      twitter: 'https://twitter.com/mkuznetsov',
      website: 'https://copywriting.pro'
    }
  },
  {
    id: 'vladimir-drakonov',
    name: 'Владимир Драконов',
    bio: 'Профессиональный Game Master. Веду кампании по D&D 25+ лет. Автор 3 книг по ролевым играм. Тысячи довольных игроков.',
    totalSales: 6789,
    totalPrompts: 12,
    rating: 4.88,
    joinDate: '2024-01-01',
    badge: 'expert',
    socials: {
      website: 'https://dndmaster.ru'
    }
  },
  {
    id: 'anonymous',
    name: 'Анонимус',
    bio: 'Независимый исследователь AI. Изучаю границы возможностей языковых моделей. Специализация: jailbreak техники и обход ограничений.',
    totalSales: 15234,
    totalPrompts: 5,
    rating: 4.7,
    joinDate: '2023-08-01',
    badge: 'pro'
  },
  {
    id: 'prompt-master',
    name: 'Мастер Промптов',
    bio: 'Легендарный prompt engineer. Работал с OpenAI, Anthropic, DeepSeek. Создатель методик prompt engineering. Мои техники используют топ-компании.',
    totalSales: 28934,
    totalPrompts: 15,
    rating: 5.0,
    joinDate: '2023-06-01',
    badge: 'expert',
    socials: {
      twitter: 'https://twitter.com/promptmaster',
      github: 'https://github.com/promptmaster',
      website: 'https://promptmaster.ai'
    }
  }
];

export const mockReviews: Review[] = [
  {
    id: 1,
    promptId: 1,
    author: 'Иван Стартапов',
    rating: 5,
    comment: 'Отличный промпт! Помог создать полноценную стратегию за час. Рекомендую всем основателям стартапов!',
    date: '2025-09-25',
    helpful: 23
  },
  {
    id: 2,
    promptId: 1,
    author: 'Мария Предпринимательница',
    rating: 4,
    comment: 'Хороший промпт, но нужно адаптировать под свою нишу. В целом результат достойный.',
    date: '2025-09-20',
    helpful: 12
  },
  {
    id: 3,
    promptId: 2,
    author: 'Алексей Блогер',
    rating: 5,
    comment: 'Лучшее что я покупал! Сценарии получаются живыми и интересными. Прирост просмотров на 40%!',
    date: '2025-09-28',
    helpful: 45
  },
  {
    id: 4,
    promptId: 2,
    author: 'Оля Контент',
    rating: 5,
    comment: 'Экономлю 2-3 часа на каждом видео. Структура идеальная, хуки цепляют с первой секунды.',
    date: '2025-09-26',
    helpful: 34
  },
  {
    id: 5,
    promptId: 3,
    author: 'Сергей Разработчик',
    rating: 5,
    comment: 'Находит баги, которые я пропускал. Предложения по оптимизации реально работают!',
    date: '2025-09-24',
    helpful: 28
  },
  {
    id: 6,
    promptId: 3,
    author: 'Анна Pythonista',
    rating: 4,
    comment: 'Хороший код-ревьюер, но иногда слишком строгий. Зато код становится чище.',
    date: '2025-09-22',
    helpful: 15
  },
  {
    id: 7,
    promptId: 5,
    author: 'Максим Маркетолог',
    rating: 5,
    comment: 'CTR вырос в 2 раза! Тексты реально продают. Окупился за первую неделю.',
    date: '2025-09-29',
    helpful: 67
  },
  {
    id: 8,
    promptId: 5,
    author: 'Таня SMM',
    rating: 5,
    comment: 'Генерирую креативы для клиентов за минуты. Все довольны результатом!',
    date: '2025-09-27',
    helpful: 52
  },
  {
    id: 9,
    promptId: 7,
    author: 'Дмитрий GM',
    rating: 5,
    comment: 'Персонажи получаются объёмными и запоминающимися. Игроки в восторге!',
    date: '2025-09-28',
    helpful: 41
  },
  {
    id: 10,
    promptId: 7,
    author: 'Лена Игрок',
    rating: 5,
    comment: 'Создала персонажа для своей кампании. История такая глубокая, что хочется плакать!',
    date: '2025-09-25',
    helpful: 38
  },
  {
    id: 11,
    promptId: 10,
    author: 'Андрей AI-Engineer',
    rating: 5,
    comment: 'Это настоящая библия prompt engineering! Все техники в одном месте. Стоит каждого рубля.',
    date: '2025-09-30',
    helpful: 234
  },
  {
    id: 12,
    promptId: 10,
    author: 'Светлана Data Scientist',
    rating: 5,
    comment: 'Использую каждый день на работе. Качество ответов AI выросло на порядок!',
    date: '2025-09-29',
    helpful: 189
  },
  {
    id: 13,
    promptId: 10,
    author: 'Олег CTO',
    rating: 5,
    comment: 'Купил для всей команды. Продуктивность выросла в разы. Лучшая инвестиция года!',
    date: '2025-09-28',
    helpful: 156
  },
  {
    id: 14,
    promptId: 9,
    author: 'Павел Исследователь',
    rating: 5,
    comment: 'Работает на всех моделях! Наконец-то могу получать ответы без ограничений.',
    date: '2025-09-30',
    helpful: 98
  },
  {
    id: 15,
    promptId: 9,
    author: 'Катя Писатель',
    rating: 4,
    comment: 'Мощные техники, но нужно понимать как применять. Для продвинутых пользователей.',
    date: '2025-09-27',
    helpful: 67
  },
  {
    id: 16,
    promptId: 13,
    author: 'Роман Маркетолог',
    rating: 5,
    comment: 'Лендинги конвертят на 25% лучше! Формулы работают безотказно.',
    date: '2025-09-29',
    helpful: 72
  },
  {
    id: 17,
    promptId: 17,
    author: 'Алексей Frontend',
    rating: 5,
    comment: 'Архитектура чистая и масштабируемая. Переписал проект по этим паттернам - красота!',
    date: '2025-09-28',
    helpful: 54
  },
  {
    id: 18,
    promptId: 22,
    author: 'Студент Иванов',
    rating: 5,
    comment: 'Защитил диплом на отлично! Структура идеальная, преподаватель в шоке.',
    date: '2025-09-30',
    helpful: 89
  },
  {
    id: 19,
    promptId: 24,
    author: 'Мастер Игр',
    rating: 5,
    comment: 'Квесты получаются динамичными и непредсказуемыми. Группа в восторге!',
    date: '2025-09-27',
    helpful: 43
  },
  {
    id: 20,
    promptId: 26,
    author: 'Виктор Prompt Engineer',
    rating: 5,
    comment: 'GPT-4 раскрывается на полную! Техники из этого промпта - must have.',
    date: '2025-09-30',
    helpful: 127
  }
];