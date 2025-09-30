import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Prompt } from './types';

interface PromptDetailDialogProps {
  prompt: Prompt | null;
  isInCart: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function PromptDetailDialog({ prompt, isInCart, onClose, onAddToCart }: PromptDetailDialogProps) {
  return (
    <Dialog open={!!prompt} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur border-2">
        {prompt && (
          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${prompt.color}`} />
        )}
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            {prompt && (
              <Badge className={`animate-scale-in bg-gradient-to-r ${prompt.color} border-0 text-white`}>
                {prompt.category}
              </Badge>
            )}
            <div className="flex items-center gap-1 text-sm animate-fade-in">
              <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-yellow-400">{prompt?.rating}</span>
              <span className="text-muted-foreground">({prompt?.reviews} отзывов)</span>
            </div>
          </div>
          <DialogTitle className={`text-2xl font-heading animate-fade-in bg-gradient-to-r ${prompt?.color} bg-clip-text text-transparent`}>
            {prompt?.title}
          </DialogTitle>
          <DialogDescription className="text-base animate-fade-in text-muted-foreground">
            {prompt?.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="animate-fade-in">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="User" className="h-4 w-4 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Автор</span>
            </h4>
            <p className="text-muted-foreground">{prompt?.author}</p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="FileText" className="h-4 w-4 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Предпросмотр промпта</span>
            </h4>
            <div className={`bg-muted/50 p-4 rounded-lg border-2 hover:border-transparent transition-colors relative overflow-hidden`}>
              {prompt && (
                <div className={`absolute top-0 left-0 right-0 h-full bg-gradient-to-r ${prompt.color} opacity-5`} />
              )}
              <code className="text-sm relative">{prompt?.preview}</code>
            </div>
          </div>

          {prompt?.examples && prompt.examples.length > 0 && (
            <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="Lightbulb" className="h-4 w-4 text-yellow-400" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Примеры использования</span>
              </h4>
              <ul className="space-y-2">
                {prompt.examples.map((example, idx) => (
                  <li 
                    key={idx} 
                    className={`text-sm text-muted-foreground flex items-start gap-2 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-${prompt.color.split('-')[1]}-500/30`}
                  >
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className={`text-3xl font-heading font-bold bg-gradient-to-r ${prompt?.color} bg-clip-text text-transparent`}>
              {prompt?.price} ₽
            </div>
            <Button 
              size="lg"
              className={`hover:scale-110 transition-all shadow-lg bg-gradient-to-r ${prompt?.color} border-0`}
              onClick={onAddToCart}
              disabled={isInCart}
            >
              {isInCart ? (
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
  );
}