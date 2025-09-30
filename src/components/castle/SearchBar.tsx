import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchBar({ value, onChange, onClear }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in">
      <div className="relative group">
        <Icon 
          name="Search" 
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-purple-400 transition-colors" 
        />
        <Input
          type="text"
          placeholder="Поиск промптов по названию, описанию или тегам..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-12 pr-12 h-14 text-lg border-2 focus:border-purple-500 bg-card/50 backdrop-blur"
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-red-500/10 hover:text-red-400"
          >
            <Icon name="X" className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}