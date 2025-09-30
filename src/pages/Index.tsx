import { useState, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/castle/Header';
import HeroSection from '@/components/castle/HeroSection';
import SearchBar from '@/components/castle/SearchBar';
import FilterSortBar from '@/components/castle/FilterSortBar';
import StatsBar from '@/components/castle/StatsBar';
import TrendingSection from '@/components/castle/TrendingSection';
import PromptCard from '@/components/castle/PromptCard';
import PromptDetailDialog from '@/components/castle/PromptDetailDialog';
import CartDialog from '@/components/castle/CartDialog';
import FavoritesDialog from '@/components/castle/FavoritesDialog';
import AuthorProfileDialog from '@/components/castle/AuthorProfileDialog';
import Footer from '@/components/castle/Footer';
import { mockPrompts, categories, categoryColors, Prompt, SortOption } from '@/components/castle/types';

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);
  const [minRating, setMinRating] = useState(0);

  const filteredAndSortedPrompts = useMemo(() => {
    let result = mockPrompts;

    if (selectedCategory !== 'Все') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.author.toLowerCase().includes(query) ||
        p.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    result = result.filter(p => 
      p.price >= priceRange[0] && 
      p.price <= priceRange[1] &&
      p.rating >= minRating
    );

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.sales || 0) - (a.sales || 0);
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return (b.updated || '').localeCompare(a.updated || '');
        default:
          return 0;
      }
    });

    return result;
  }, [selectedCategory, searchQuery, priceRange, minRating, sortBy]);

  const stats = useMemo(() => {
    const totalSales = mockPrompts.reduce((sum, p) => sum + (p.sales || 0), 0);
    const avgRating = mockPrompts.reduce((sum, p) => sum + p.rating, 0) / mockPrompts.length;
    return {
      totalPrompts: mockPrompts.length,
      totalSales,
      avgRating,
      activeUsers: 12847
    };
  }, []);

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
      const prompt = mockPrompts.find(p => p.id === id);
      toast.success('Добавлено в корзину!', {
        description: prompt?.title,
        duration: 3000,
      });
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(i => i !== id));
    const prompt = mockPrompts.find(p => p.id === id);
    toast.info('Удалено из корзины', {
      description: prompt?.title,
      duration: 2000,
    });
  };

  const toggleFavorite = (id: number) => {
    const prompt = mockPrompts.find(p => p.id === id);
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(i => i !== id));
      toast('Удалено из избранного', {
        description: prompt?.title,
        duration: 2000,
      });
    } else {
      setFavorites([...favorites, id]);
      toast.success('Добавлено в избранное! ❤️', {
        description: prompt?.title,
        duration: 3000,
      });
    }
  };

  const cartItems = mockPrompts.filter(p => cart.includes(p.id));
  const favoriteItems = mockPrompts.filter(p => favorites.includes(p.id));
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    <Toaster richColors position="top-right" />
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <Header 
        cartLength={cart.length} 
        favoritesLength={favorites.length}
        onCartClick={() => setShowCart(true)}
        onFavoritesClick={() => setShowFavorites(true)}
      />
      
      <HeroSection />

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <StatsBar {...stats} />

          <TrendingSection 
            prompts={mockPrompts} 
            onViewPrompt={setSelectedPrompt}
          />

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
          />

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full mb-6">
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

          <FilterSortBar
            sortBy={sortBy}
            onSortChange={setSortBy}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
            minRating={minRating}
            onMinRatingChange={setMinRating}
          />

          {filteredAndSortedPrompts.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Промпты не найдены
              </h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить параметры поиска или фильтры
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedPrompts.map((prompt, idx) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  idx={idx}
                  isInCart={cart.includes(prompt.id)}
                  isFavorite={favorites.includes(prompt.id)}
                  onViewClick={() => setSelectedPrompt(prompt)}
                  onAddToCart={() => addToCart(prompt.id)}
                  onToggleFavorite={() => toggleFavorite(prompt.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <PromptDetailDialog
        prompt={selectedPrompt}
        isInCart={cart.includes(selectedPrompt?.id || 0)}
        onClose={() => setSelectedPrompt(null)}
        onAddToCart={() => {
          if (selectedPrompt) {
            addToCart(selectedPrompt.id);
            setSelectedPrompt(null);
          }
        }}
        onViewAuthor={(authorId) => setSelectedAuthorId(authorId)}
      />

      <AuthorProfileDialog
        isOpen={!!selectedAuthorId}
        onClose={() => setSelectedAuthorId(null)}
        authorId={selectedAuthorId}
        prompts={mockPrompts}
        onViewPrompt={setSelectedPrompt}
      />

      <CartDialog
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onRemoveItem={removeFromCart}
      />

      <FavoritesDialog
        isOpen={showFavorites}
        onClose={() => setShowFavorites(false)}
        favoriteItems={favoriteItems}
        onRemoveItem={toggleFavorite}
        onViewItem={setSelectedPrompt}
        onAddToCart={addToCart}
        cart={cart}
      />

      <Footer />
    </div>
    </>
  );
}