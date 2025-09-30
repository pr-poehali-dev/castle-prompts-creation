import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Prompt } from './types';

interface CartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Prompt[];
  totalPrice: number;
  onRemoveItem: (id: number) => void;
}

export default function CartDialog({ isOpen, onClose, cartItems, totalPrice, onRemoveItem }: CartDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
                  onClick={() => onRemoveItem(item.id)}
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
  );
}