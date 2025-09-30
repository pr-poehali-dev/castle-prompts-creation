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
  color: string;
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
  }
];

const categories = ['Все', 'Маркетинг', 'Писательство', 'Программирование', 'Образование'];

const categoryColors: Record<string, string> = {
  'Все': 'from-purple-500 to-pink-500',
  'Маркетинг': 'from-orange-500 to-red-500',
  'Писательство': 'from-cyan-500 to-blue-500',
  'Программирование': 'from-green-500 to-emerald-500',
  'Образование': 'from-purple-500 to-indigo-500'
};

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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-primary/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-green-500/5" />
        <div className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Icon name="Castle" className="h-10 w-10 text-transparent bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text animate-float group-hover:scale-110 transition-transform" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  Castle Prompts
                </h1>
                <p className="text-xs bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Цитадель AI-инструментов</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden md:flex items-center gap-2 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all hover:scale-105 border border-transparent hover:border-purple-500/30">
                <Icon name="User" className="h-5 w-5 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Войти</span>
              </Button>
              <Button 
                variant="outline" 
                className="relative hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-500/50 transition-all hover:scale-105"
                onClick={() => setShowCart(true)}
              >
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2 text-cyan-400" />
                <span className="hidden sm:inline bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Корзина</span>
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-gradient-to-br from-green-500 to-emerald-500 animate-scale-in shadow-lg shadow-green-500/50 border-0">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-6 hover:from-purple-500/20 hover:to-pink-500/20 transition-colors cursor-pointer border border-purple-500/20">
              <Icon name="Shield" className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Проверенные промпты от экспертов</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
              Откройте силу искусственного интеллекта
            </h2>
            <p className="text-xl bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent mb-8">
              Маркетплейс профессиональных промптов для DeepSeek, ChatGPT и других AI-моделей
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 border-0">
                <Icon name="Search" className="h-5 w-5" />
                Найти промпт
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/50 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500 transition-all hover:scale-110">
                <Icon name="Upload" className="h-5 w-5 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Продать промпт</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:flex lg:w-auto gap-2 h-auto bg-transparent">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="data-[state=active]:bg-gradient-to-r rounded-lg px-6 py-2.5 hover:scale-105 transition-all data-[state=active]:shadow-lg border border-transparent data-[state=active]:border-transparent"
                  style={{
                    backgroundImage: selectedCategory === cat ? `linear-gradient(to right, var(--tw-gradient-stops))` : undefined,
                  }}
                  data-gradient={categoryColors[cat]}
                >
                  <span className={selectedCategory === cat ? 'text-white font-semibold' : `bg-gradient-to-r ${categoryColors[cat]} bg-clip-text text-transparent`}>
                    {cat}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredPrompts.map((prompt, idx) => (
              <Card 
                key={prompt.id} 
                className="group cursor-pointer overflow-hidden animate-fade-in border-2 hover:border-transparent transition-all hover:shadow-2xl hover:-translate-y-2 bg-card/50 backdrop-blur relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${prompt.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prompt.color}`} />
                
                <CardHeader className="space-y-3 relative">
                  <div className="flex items-start justify-between gap-2">
                    <Badge className={`shrink-0 group-hover:scale-110 transition-transform bg-gradient-to-r ${prompt.color} border-0 text-white`}>
                      {prompt.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm group-hover:scale-110 transition-transform">
                      <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" />
                      <span className="font-semibold text-yellow-400">{prompt.rating}</span>
                      <span className="text-muted-foreground">({prompt.reviews})</span>
                    </div>
                  </div>
                  <h3 className={`font-heading font-bold text-xl leading-tight bg-gradient-to-r ${prompt.color} bg-clip-text text-transparent group-hover:translate-x-1 transition-all`}>
                    {prompt.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4 relative">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {prompt.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm group-hover:text-foreground transition-colors">
                    <Icon name="User" className={`h-4 w-4 bg-gradient-to-r ${prompt.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                    <span className="text-muted-foreground">{prompt.author}</span>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-4 border-t relative">
                  <div className="flex flex-col">
                    <span className={`text-2xl font-heading font-bold bg-gradient-to-r ${prompt.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block`}>
                      {prompt.price} ₽
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`hover:bg-gradient-to-r ${prompt.color.replace('to-', 'to-transparent hover:from-')} transition-all hover:scale-110 hover:rotate-6 border-muted hover:border-transparent`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPrompt(prompt);
                      }}
                    >
                      <Icon name="Eye" className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className={`hover:scale-110 transition-all shadow-md bg-gradient-to-r ${prompt.color} hover:shadow-lg border-0`}
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
        <DialogContent className="max-w-2xl bg-card/95 backdrop-blur border-2">
          {selectedPrompt && (
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${selectedPrompt.color}`} />
          )}
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              {selectedPrompt && (
                <Badge className={`animate-scale-in bg-gradient-to-r ${selectedPrompt.color} border-0 text-white`}>
                  {selectedPrompt.category}
                </Badge>
              )}
              <div className="flex items-center gap-1 text-sm animate-fade-in">
                <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-yellow-400">{selectedPrompt?.rating}</span>
                <span className="text-muted-foreground">({selectedPrompt?.reviews} отзывов)</span>
              </div>
            </div>
            <DialogTitle className={`text-2xl font-heading animate-fade-in bg-gradient-to-r ${selectedPrompt?.color} bg-clip-text text-transparent`}>
              {selectedPrompt?.title}
            </DialogTitle>
            <DialogDescription className="text-base animate-fade-in text-muted-foreground">
              {selectedPrompt?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="animate-fade-in">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="User" className="h-4 w-4 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Автор</span>
              </h4>
              <p className="text-muted-foreground">{selectedPrompt?.author}</p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="FileText" className="h-4 w-4 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Предпросмотр промпта</span>
              </h4>
              <div className={`bg-muted/50 p-4 rounded-lg border-2 hover:border-transparent transition-colors relative overflow-hidden`}>
                {selectedPrompt && (
                  <div className={`absolute top-0 left-0 right-0 h-full bg-gradient-to-r ${selectedPrompt.color} opacity-5`} />
                )}
                <code className="text-sm relative">{selectedPrompt?.preview}</code>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className={`text-3xl font-heading font-bold bg-gradient-to-r ${selectedPrompt?.color} bg-clip-text text-transparent`}>
                {selectedPrompt?.price} ₽
              </div>
              <Button 
                size="lg"
                className={`hover:scale-110 transition-all shadow-lg bg-gradient-to-r ${selectedPrompt?.color} border-0`}
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
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500" />
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading flex items-center gap-2 animate-fade-in">
              <Icon name="ShoppingCart" className="h-6 w-6 text-cyan-400 animate-float" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Корзина</span>
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
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all border-2 border-transparent hover:border-transparent animate-fade-in relative overflow-hidden group"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color}`} />
                  <div className="flex-1 relative">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.author}</p>
                  </div>
                  <div className="text-right relative">
                    <p className={`font-bold text-lg bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.price} ₽</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-red-500/10 hover:text-red-400 transition-all hover:scale-110 hover:rotate-90 relative"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Icon name="X" className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <div className="border-t pt-4 space-y-4 animate-fade-in" style={{ animationDelay: `${cartItems.length * 50}ms` }}>
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">Итого:</span>
                  <span className="text-2xl font-heading bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">{totalPrice} ₽</span>
                </div>
                <Button size="lg" className="w-full gap-2 hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 border-0">
                  <Icon name="Lock" className="h-5 w-5" />
                  Оформить заказ
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t mt-20 py-12 bg-card/50 backdrop-blur relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4 group cursor-pointer">
                <Icon name="Castle" className="h-8 w-8 text-transparent bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
                <span className="font-heading font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Castle Prompts</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Цитадель качественных AI-промптов для профессионалов
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h4 className="font-semibold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Категории</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  { name: 'Маркетинг', color: 'from-orange-400 to-red-400' },
                  { name: 'Писательство', color: 'from-cyan-400 to-blue-400' },
                  { name: 'Программирование', color: 'from-green-400 to-emerald-400' },
                  { name: 'Образование', color: 'from-purple-400 to-indigo-400' }
                ].map((cat) => (
                  <li key={cat.name} className={`hover:bg-gradient-to-r ${cat.color} hover:bg-clip-text hover:text-transparent transition-all cursor-pointer hover:translate-x-1`}>
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h4 className="font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Для авторов</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {['Продать промпт', 'Панель автора', 'Выплаты'].map((item) => (
                  <li key={item} className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all cursor-pointer hover:translate-x-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h4 className="font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {['FAQ', 'Связаться', 'Документация'].map((item) => (
                  <li key={item} className="hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent transition-all cursor-pointer hover:translate-x-1">
                    {item}
                  </li>
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