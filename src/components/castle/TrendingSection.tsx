import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Prompt } from './types';

interface TrendingSectionProps {
  prompts: Prompt[];
  onViewPrompt: (prompt: Prompt) => void;
}

export default function TrendingSection({ prompts, onViewPrompt }: TrendingSectionProps) {
  const topPrompts = prompts
    .sort((a, b) => (b.sales || 0) - (a.sales || 0))
    .slice(0, 5);

  return (
    <div className="mb-12 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="TrendingUp" className="h-8 w-8 text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
        <h2 className="text-3xl font-heading font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Топ продаж
        </h2>
        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white animate-pulse">
          Горячее
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {topPrompts.map((prompt, idx) => (
          <Card
            key={prompt.id}
            className="group relative overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border-2 bg-card/50 backdrop-blur animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
            onClick={() => onViewPrompt(prompt)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${prompt.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prompt.color}`} />
            
            <div className="absolute top-2 left-2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold shadow-lg">
              {idx + 1}
            </div>

            <CardHeader className="pt-12 pb-3">
              <h3 className={`font-semibold text-sm leading-tight line-clamp-2 bg-gradient-to-r ${prompt.color} bg-clip-text text-transparent`}>
                {prompt.title}
              </h3>
            </CardHeader>

            <CardContent className="space-y-2">
              <div className="flex items-center gap-1 text-xs">
                <Icon name="Star" className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-yellow-400">{prompt.rating}</span>
              </div>
              
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Icon name="ShoppingBag" className="h-3 w-3" />
                <span>{prompt.sales?.toLocaleString()} продаж</span>
              </div>

              <p className={`text-lg font-bold bg-gradient-to-r ${prompt.color} bg-clip-text text-transparent`}>
                {prompt.price} ₽
              </p>

              <Button
                size="sm"
                className={`w-full bg-gradient-to-r ${prompt.color} border-0 hover:scale-105 transition-all`}
                onClick={(e) => {
                  e.stopPropagation();
                  onViewPrompt(prompt);
                }}
              >
                <Icon name="Eye" className="h-4 w-4 mr-1" />
                Смотреть
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}