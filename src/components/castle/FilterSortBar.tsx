import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { SortOption } from './types';

interface FilterSortBarProps {
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
  minRating: number;
  onMinRatingChange: (value: number) => void;
}

export default function FilterSortBar({
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  showFilters,
  onToggleFilters,
  minRating,
  onMinRatingChange
}: FilterSortBarProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Select value={sortBy} onValueChange={(value) => onSortChange(value as SortOption)}>
          <SelectTrigger className="w-[200px] border-2 bg-card/50 backdrop-blur">
            <Icon name="ArrowUpDown" className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Популярные</SelectItem>
            <SelectItem value="rating">По рейтингу</SelectItem>
            <SelectItem value="price-low">Сначала дешёвые</SelectItem>
            <SelectItem value="price-high">Сначала дорогие</SelectItem>
            <SelectItem value="newest">Новые</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={onToggleFilters}
          className={`border-2 transition-all ${showFilters ? 'bg-purple-500/10 border-purple-500' : 'bg-card/50'}`}
        >
          <Icon name="Filter" className="h-4 w-4 mr-2" />
          Фильтры
          {showFilters && <Icon name="ChevronUp" className="h-4 w-4 ml-2" />}
          {!showFilters && <Icon name="ChevronDown" className="h-4 w-4 ml-2" />}
        </Button>

        <div className="flex items-center gap-2 text-sm text-muted-foreground ml-auto">
          <Icon name="TrendingUp" className="h-4 w-4 text-green-400" />
          <span>30 промптов</span>
        </div>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-card/50 backdrop-blur rounded-lg border-2 animate-fade-in">
          <div>
            <label className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Icon name="DollarSign" className="h-4 w-4 text-green-400" />
              Цена: {priceRange[0]} ₽ - {priceRange[1]} ₽
            </label>
            <Slider
              value={priceRange}
              onValueChange={(value) => onPriceRangeChange(value as [number, number])}
              min={0}
              max={20000}
              step={100}
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Icon name="Star" className="h-4 w-4 text-yellow-400" />
              Минимальный рейтинг: {minRating.toFixed(1)}
            </label>
            <Slider
              value={[minRating]}
              onValueChange={(value) => onMinRatingChange(value[0])}
              min={0}
              max={5}
              step={0.1}
              className="mt-2"
            />
            <div className="flex items-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  name="Star"
                  className={`h-4 w-4 ${star <= minRating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}