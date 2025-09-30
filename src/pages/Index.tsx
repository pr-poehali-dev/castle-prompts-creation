import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/castle/Header';
import HeroSection from '@/components/castle/HeroSection';
import PromptCard from '@/components/castle/PromptCard';
import PromptDetailDialog from '@/components/castle/PromptDetailDialog';
import CartDialog from '@/components/castle/CartDialog';
import Footer from '@/components/castle/Footer';
import { mockPrompts, categories, categoryColors, Prompt } from '@/components/castle/types';

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
      
      <Header cartLength={cart.length} onCartClick={() => setShowCart(true)} />
      
      <HeroSection />

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
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                idx={idx}
                isInCart={cart.includes(prompt.id)}
                onViewClick={() => setSelectedPrompt(prompt)}
                onAddToCart={() => addToCart(prompt.id)}
              />
            ))}
          </div>
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
      />

      <CartDialog
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onRemoveItem={removeFromCart}
      />

      <Footer />
    </div>
  );
}