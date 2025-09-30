import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Author, Prompt } from './types';
import { mockAuthors } from './data';

interface AuthorProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  authorId: string | null;
  prompts: Prompt[];
  onViewPrompt: (prompt: Prompt) => void;
}

export default function AuthorProfileDialog({
  isOpen,
  onClose,
  authorId,
  prompts,
  onViewPrompt
}: AuthorProfileDialogProps) {
  const author = mockAuthors.find(a => a.id === authorId);
  const authorPrompts = prompts.filter(p => p.authorId === authorId);

  if (!author) return null;

  const badgeConfig = {
    'verified': { color: 'from-blue-500 to-cyan-500', icon: 'BadgeCheck', text: 'Проверен' },
    'pro': { color: 'from-purple-500 to-pink-500', icon: 'Crown', text: 'PRO' },
    'expert': { color: 'from-yellow-500 to-orange-500', icon: 'Award', text: 'Эксперт' }
  };

  const badge = author.badge ? badgeConfig[author.badge] : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card/95 backdrop-blur max-h-[90vh] overflow-y-auto">
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${badge?.color || 'from-purple-500 to-pink-500'}`} />
        
        <DialogHeader>
          <DialogTitle className="sr-only">Профиль автора</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${badge?.color || 'from-purple-500 to-pink-500'} flex items-center justify-center text-white text-4xl font-bold shadow-lg shrink-0`}>
              {author.name[0]}
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start gap-3">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">{author.name}</h2>
                  {badge && (
                    <Badge className={`bg-gradient-to-r ${badge.color} border-0 text-white`}>
                      <Icon name={badge.icon as any} className="h-3 w-3 mr-1" />
                      {badge.text}
                    </Badge>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{author.bio}</p>

              {author.socials && (
                <div className="flex flex-wrap gap-2">
                  {author.socials.twitter && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer">
                        <Icon name="Twitter" className="h-4 w-4 mr-1" />
                        Twitter
                      </a>
                    </Button>
                  )}
                  {author.socials.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={author.socials.github} target="_blank" rel="noopener noreferrer">
                        <Icon name="Github" className="h-4 w-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {author.socials.website && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={author.socials.website} target="_blank" rel="noopener noreferrer">
                        <Icon name="Globe" className="h-4 w-4 mr-1" />
                        Сайт
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Package" className="h-5 w-5 text-purple-400" />
                <p className="text-sm text-muted-foreground">Промптов</p>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {author.totalPrompts}
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="TrendingUp" className="h-5 w-5 text-green-400" />
                <p className="text-sm text-muted-foreground">Продаж</p>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {author.totalSales.toLocaleString()}
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Star" className="h-5 w-5 text-yellow-400" />
                <p className="text-sm text-muted-foreground">Рейтинг</p>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {author.rating.toFixed(2)}
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Calendar" className="h-5 w-5 text-cyan-400" />
                <p className="text-sm text-muted-foreground">С нами</p>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {new Date(author.joinDate).toLocaleDateString('ru-RU', { year: 'numeric', month: 'short' })}
              </p>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
              <Icon name="Package" className="h-5 w-5 text-purple-400" />
              Промпты автора ({authorPrompts.length})
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {authorPrompts.map((prompt) => (
                <Card
                  key={prompt.id}
                  className="p-4 hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-transparent relative overflow-hidden"
                  onClick={() => {
                    onViewPrompt(prompt);
                    onClose();
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${prompt.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prompt.color}`} />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={`bg-gradient-to-r ${prompt.color} border-0 text-white text-xs`}>
                        {prompt.category}
                      </Badge>
                      {prompt.isPremium && (
                        <Icon name="Sparkles" className="h-4 w-4 text-yellow-400" />
                      )}
                    </div>

                    <h4 className={`font-semibold mb-2 line-clamp-2 bg-gradient-to-r ${prompt.color} bg-clip-text text-transparent`}>
                      {prompt.title}
                    </h4>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{prompt.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="ShoppingBag" className="h-3 w-3" />
                        <span>{prompt.sales?.toLocaleString()}</span>
                      </div>
                    </div>

                    <p className={`text-lg font-bold bg-gradient-to-r ${prompt.color} bg-clip-text text-transparent`}>
                      {prompt.price} ₽
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}