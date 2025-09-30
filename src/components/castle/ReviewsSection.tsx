import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Review } from './types';
import { mockReviews } from './data';

interface ReviewsSectionProps {
  promptId: number;
  totalReviews: number;
  avgRating: number;
}

export default function ReviewsSection({ promptId, totalReviews, avgRating }: ReviewsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  
  const promptReviews = mockReviews.filter(r => r.promptId === promptId);
  const displayReviews = showAll ? promptReviews : promptReviews.slice(0, 3);
  
  const ratingCounts = [5, 4, 3, 2, 1].map(stars => 
    promptReviews.filter(r => r.rating === stars).length
  );
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              {avgRating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  name="Star"
                  className={`h-5 w-5 ${star <= Math.round(avgRating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              На основе {totalReviews} отзывов
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars, idx) => (
            <div key={stars} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-16">
                <span className="text-sm font-medium">{stars}</span>
                <Icon name="Star" className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              </div>
              <Progress 
                value={(ratingCounts[idx] / promptReviews.length) * 100} 
                className="h-2 flex-1"
              />
              <span className="text-sm text-muted-foreground w-12 text-right">
                {ratingCounts[idx]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {displayReviews.map((review, idx) => (
          <div
            key={review.id}
            className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all border animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{new Date(review.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    name="Star"
                    className={`h-4 w-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm mb-3">{review.comment}</p>

            <div className="flex items-center gap-4 text-sm">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1 hover:text-green-400"
              >
                <Icon name="ThumbsUp" className="h-4 w-4" />
                <span>{review.helpful}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1"
              >
                <Icon name="MessageCircle" className="h-4 w-4" />
                Ответить
              </Button>
            </div>
          </div>
        ))}
      </div>

      {promptReviews.length > 3 && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            <>
              <Icon name="ChevronUp" className="h-4 w-4 mr-2" />
              Скрыть отзывы
            </>
          ) : (
            <>
              <Icon name="ChevronDown" className="h-4 w-4 mr-2" />
              Показать все {promptReviews.length} отзывов
            </>
          )}
        </Button>
      )}
    </div>
  );
}