import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Prompt } from './types';

interface PromptCardProps {
  prompt: Prompt;
  idx: number;
  isInCart: boolean;
  onViewClick: () => void;
  onAddToCart: () => void;
}

export default function PromptCard({ prompt, idx, isInCart, onViewClick, onAddToCart }: PromptCardProps) {
  return (
    <Card 
      className={`group cursor-pointer overflow-hidden animate-fade-in border-2 hover:border-transparent transition-all hover:shadow-2xl hover:-translate-y-2 bg-card/50 backdrop-blur relative ${prompt.isPremium ? 'ring-2 ring-yellow-500/50' : ''}`}
      style={{ animationDelay: `${idx * 100}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${prompt.color} opacity-0 group-hover:opacity-${prompt.isPremium ? '20' : '10'} transition-opacity`} />
      <div className={`absolute top-0 left-0 right-0 ${prompt.isPremium ? 'h-2' : 'h-1'} bg-gradient-to-r ${prompt.color}`} />
      {prompt.isPremium && (
        <div className="absolute top-2 right-2 animate-pulse">
          <Icon name="Sparkles" className="h-6 w-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
        </div>
      )}
      
      <CardHeader className="space-y-3 relative">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className={`shrink-0 group-hover:scale-110 transition-transform bg-gradient-to-r ${prompt.color} border-0 text-white`}>
              {prompt.category}
            </Badge>
            {prompt.isPremium && (
              <Badge className="shrink-0 bg-gradient-to-r from-yellow-400 to-orange-500 border-0 text-white animate-pulse">
                <Icon name="Crown" className="h-3 w-3 mr-1" />
                PREMIUM
              </Badge>
            )}
          </div>
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
              onViewClick();
            }}
          >
            <Icon name="Eye" className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            className={`hover:scale-110 transition-all shadow-md bg-gradient-to-r ${prompt.color} hover:shadow-lg border-0`}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            disabled={isInCart}
          >
            {isInCart ? (
              <Icon name="Check" className="h-4 w-4 mr-1 animate-scale-in" />
            ) : (
              <Icon name="ShoppingCart" className="h-4 w-4 mr-1" />
            )}
            {isInCart ? 'В корзине' : 'Купить'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}