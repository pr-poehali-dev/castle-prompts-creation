import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Prompt {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  author: string;
  description: string;
  preview: string;
}

const mockPrompts: Prompt[] = [
  {
    id: 1,
    title: 'Маркетинговая стратегия для стартапа',
    category: 'Маркетинг',
    price: 299,
    rating: 4.8,
    reviews: 127,
    author: 'Анна Соколова',
    description: 'Промпт создает полноценную маркетинговую стратегию для стартапов с учетом целевой аудитории, конкурентов и бюджета.',
    preview: 'Проанализируй рынок [ниша] и создай маркетинговую стратегию для стартапа...'
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
    preview: 'Напиши сценарий для видео на тему [тема] длительностью [время]...'
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
    preview: 'Проанализируй следующий Python код и предложи улучшения...'
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
    preview: 'Создай учебный план для изучения [навык] за [срок]...'
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
    preview: 'Создай рекламный текст для [продукт] целевая аудитория [ЦА]...'
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
    preview: 'Отрефактори этот JavaScript код, улучши читаемость и производительность...'
  }
];

const categories = ['Все', 'Маркетинг', 'Писательство', 'Программирование', 'Образование'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [cart, setCart] = useState<number[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [showCart, setShowCart] = useState(false);

  const filteredPrompts = selectedCategory === 'Все' 
    ? mockPrompts 
    : mockPrompts.filter(p => p.category === selectedCategory);

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(i => i !== id));
  };

  const cartItems = mockPrompts.filter(p => cart.includes(p.id));
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-primary/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Icon name="Castle" className="h-10 w-10 text-primary animate-float group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Castle Prompts
                </h1>
                <p className="text-xs text-muted-foreground">Цитадель AI-инструментов</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden md:flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-all hover:scale-105">
                <Icon name="User" className="h-5 w-5" />
                <span>Войти</span>
              </Button>
              <Button 
                variant="outline" 
                className="relative hover:bg-primary/10 hover:border-primary transition-all hover:scale-105"
                onClick={() => setShowCart(true)}
              >
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Корзина</span>
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-secondary animate-scale-in shadow-lg shadow-secondary/50">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 hover:bg-primary/20 transition-colors cursor-pointer">
              <Icon name="Shield" className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Проверенные промпты от экспертов</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
              Откройте силу искусственного интеллекта
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Маркетплейс профессиональных промптов для DeepSeek, ChatGPT и других AI-моделей
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110">
                <Icon name="Search" className="h-5 w-5" />
                Найти промпт
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all hover:scale-110">
                <Icon name="Upload" className="h-5 w-5" />
                Продать промпт
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:flex lg:w-auto gap-2 h-auto bg-transparent">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-6 py-2.5 hover:scale-105 transition-all data-[state=active]:shadow-lg data-[state=active]:shadow-primary/50"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredPrompts.map((prompt, idx) => (
              <Card 
                key={prompt.id} 
                className="group cursor-pointer overflow-hidden animate-fade-in border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="secondary" className="shrink-0 group-hover:scale-110 transition-transform">
                      {prompt.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm group-hover:scale-110 transition-transform">
                      <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" />
                      <span className="font-semibold">{prompt.rating}</span>
                      <span className="text-muted-foreground">({prompt.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl leading-tight group-hover:text-primary transition-all group-hover:translate-x-1">
                    {prompt.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {prompt.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm group-hover:text-foreground transition-colors">
                    <Icon name="User" className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{prompt.author}</span>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-4 border-t">
                  <div className="flex flex-col">
                    <span className="text-2xl font-heading font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                      {prompt.price} ₽
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-primary/10 hover:border-primary transition-all hover:scale-110 hover:rotate-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPrompt(prompt);
                      }}
                    >
                      <Icon name="Eye" className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="hover:scale-110 transition-all shadow-md hover:shadow-lg hover:shadow-primary/50"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(prompt.id);
                      }}
                      disabled={cart.includes(prompt.id)}
                    >
                      {cart.includes(prompt.id) ? (
                        <Icon name="Check" className="h-4 w-4 mr-1 animate-scale-in" />
                      ) : (
                        <Icon name="ShoppingCart" className="h-4 w-4 mr-1" />
                      )}
                      {cart.includes(prompt.id) ? 'В корзине' : 'Купить'}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedPrompt} onOpenChange={() => setSelectedPrompt(null)}>
        <DialogContent className="max-w-2xl bg-card/95 backdrop-blur">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="animate-scale-in">{selectedPrompt?.category}</Badge>
              <div className="flex items-center gap-1 text-sm animate-fade-in">
                <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{selectedPrompt?.rating}</span>
                <span className="text-muted-foreground">({selectedPrompt?.reviews} отзывов)</span>
              </div>
            </div>
            <DialogTitle className="text-2xl font-heading animate-fade-in">{selectedPrompt?.title}</DialogTitle>
            <DialogDescription className="text-base animate-fade-in">
              {selectedPrompt?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="animate-fade-in">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="User" className="h-4 w-4" />
                Автор
              </h4>
              <p className="text-muted-foreground">{selectedPrompt?.author}</p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="FileText" className="h-4 w-4" />
                Предпросмотр промпта
              </h4>
              <div className="bg-muted/50 p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                <code className="text-sm">{selectedPrompt?.preview}</code>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl font-heading font-bold text-primary">
                {selectedPrompt?.price} ₽
              </div>
              <Button 
                size="lg"
                className="hover:scale-110 transition-all shadow-lg hover:shadow-2xl hover:shadow-primary/50"
                onClick={() => {
                  if (selectedPrompt) {
                    addToCart(selectedPrompt.id);
                    setSelectedPrompt(null);
                  }
                }}
                disabled={cart.includes(selectedPrompt?.id || 0)}
              >
                {cart.includes(selectedPrompt?.id || 0) ? (
                  <>
                    <Icon name="Check" className="h-5 w-5 mr-2" />
                    В корзине
                  </>
                ) : (
                  <>
                    <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                    Добавить в корзину
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showCart} onOpenChange={setShowCart}>
        <DialogContent className="max-w-2xl bg-card/95 backdrop-blur">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading flex items-center gap-2 animate-fade-in">
              <Icon name="ShoppingCart" className="h-6 w-6 animate-float" />
              Корзина
            </DialogTitle>
          </DialogHeader>

          {cartItems.length === 0 ? (
            <div className="py-12 text-center animate-fade-in">
              <Icon name="ShoppingCart" className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50 animate-float" />
              <p className="text-lg text-muted-foreground">Корзина пуста</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors border border-transparent hover:border-primary/30 animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">{item.price} ₽</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-destructive/10 hover:text-destructive transition-all hover:scale-110 hover:rotate-90"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Icon name="X" className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <div className="border-t pt-4 space-y-4 animate-fade-in" style={{ animationDelay: `${cartItems.length * 50}ms` }}>
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Итого:</span>
                  <span className="text-2xl text-primary font-heading">{totalPrice} ₽</span>
                </div>
                <Button size="lg" className="w-full gap-2 hover:scale-105 transition-all shadow-lg hover:shadow-2xl hover:shadow-primary/50">
                  <Icon name="Lock" className="h-5 w-5" />
                  Оформить заказ
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t mt-20 py-12 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4 group cursor-pointer">
                <Icon name="Castle" className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-heading font-bold text-xl">Castle Prompts</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Цитадель качественных AI-промптов для профессионалов
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {['Маркетинг', 'Писательство', 'Программирование', 'Образование'].map((cat) => (
                  <li key={cat} className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform">{cat}</li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h4 className="font-semibold mb-4">Для авторов</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {['Продать промпт', 'Панель автора', 'Выплаты'].map((item) => (
                  <li key={item} className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform">{item}</li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {['FAQ', 'Связаться', 'Документация'].map((item) => (
                  <li key={item} className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 Castle Prompts. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}