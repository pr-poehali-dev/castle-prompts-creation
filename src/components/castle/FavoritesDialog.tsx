import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Prompt } from './types';

interface FavoritesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteItems: Prompt[];
  onRemoveItem: (id: number) => void;
  onViewItem: (prompt: Prompt) => void;
  onAddToCart: (id: number) => void;
  cart: number[];
}

export default function FavoritesDialog({ 
  isOpen, 
  onClose, 
  favoriteItems, 
  onRemoveItem, 
  onViewItem,
  onAddToCart,
  cart
}: FavoritesDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card/95 backdrop-blur max-h-[80vh] overflow-y-auto">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500" />
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading flex items-center gap-2 animate-fade-in">
            <Icon name="Heart" className="h-6 w-6 text-pink-400 animate-float fill-pink-400" />
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Избранное</span>
          </DialogTitle>
        </DialogHeader>

        {favoriteItems.length === 0 ? (
          <div className="py-12 text-center animate-fade-in">
            <Icon name="Heart" className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50 animate-float" />
            <p className="text-lg text-muted-foreground">Избранное пусто</p>
            <p className="text-sm text-muted-foreground mt-2">Добавьте промпты в избранное, чтобы не потерять их</p>
          </div>
        ) : (
          <div className="space-y-4">
            {favoriteItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all border-2 border-transparent hover:border-transparent animate-fade-in relative overflow-hidden group"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color}`} />
                
                <div className="flex-1 relative space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className={`font-semibold text-lg bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.title}
                    </h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:bg-red-500/10 hover:text-red-400 transition-all hover:scale-110 shrink-0"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Icon name="X" className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="User" className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-yellow-400">{item.rating}</span>
                    </div>
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex gap-1">
                        {item.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 relative">
                  <p className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent whitespace-nowrap`}>
                    {item.price} ₽
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        onViewItem(item);
                        onClose();
                      }}
                      className="hover:scale-110 transition-all"
                    >
                      <Icon name="Eye" className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${item.color} border-0 hover:scale-110 transition-all`}
                      onClick={() => onAddToCart(item.id)}
                      disabled={cart.includes(item.id)}
                    >
                      {cart.includes(item.id) ? (
                        <Icon name="Check" className="h-4 w-4 mr-1" />
                      ) : (
                        <Icon name="ShoppingCart" className="h-4 w-4 mr-1" />
                      )}
                      {cart.includes(item.id) ? 'В корзине' : 'Купить'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}