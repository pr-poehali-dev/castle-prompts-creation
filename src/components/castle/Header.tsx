import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  cartLength: number;
  favoritesLength: number;
  onCartClick: () => void;
  onFavoritesClick: () => void;
}

export default function Header({ cartLength, favoritesLength, onCartClick, onFavoritesClick }: HeaderProps) {
  return (
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
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:flex items-center gap-2 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all hover:scale-105 border border-transparent hover:border-purple-500/30">
              <Icon name="User" className="h-5 w-5 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Войти</span>
            </Button>
            <Button 
              variant="outline" 
              className="relative hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-red-500/10 hover:border-pink-500/50 transition-all hover:scale-105"
              onClick={onFavoritesClick}
            >
              <Icon name="Heart" className="h-5 w-5 text-pink-400" />
              {favoritesLength > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-gradient-to-br from-pink-500 to-red-500 animate-scale-in shadow-lg shadow-pink-500/50 border-0">
                  {favoritesLength}
                </Badge>
              )}
            </Button>
            <Button 
              variant="outline" 
              className="relative hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-500/50 transition-all hover:scale-105"
              onClick={onCartClick}
            >
              <Icon name="ShoppingCart" className="h-5 w-5 mr-2 text-cyan-400" />
              <span className="hidden sm:inline bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Корзина</span>
              {cartLength > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-gradient-to-br from-green-500 to-emerald-500 animate-scale-in shadow-lg shadow-green-500/50 border-0">
                  {cartLength}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}