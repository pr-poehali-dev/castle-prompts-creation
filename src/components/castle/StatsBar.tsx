import Icon from '@/components/ui/icon';

interface StatsBarProps {
  totalPrompts: number;
  totalSales: number;
  avgRating: number;
  activeUsers: number;
}

export default function StatsBar({ totalPrompts, totalSales, avgRating, activeUsers }: StatsBarProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 rounded-lg border-2 border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer group">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
            <Icon name="Package" className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {totalPrompts}
            </p>
            <p className="text-xs text-muted-foreground">Промптов</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-lg border-2 border-green-500/20 hover:border-green-500/50 transition-all hover:scale-105 cursor-pointer group">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
            <Icon name="ShoppingBag" className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {totalSales.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">Продаж</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-4 rounded-lg border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:scale-105 cursor-pointer group">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg group-hover:scale-110 transition-transform">
            <Icon name="Star" className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {avgRating.toFixed(1)}
            </p>
            <p className="text-xs text-muted-foreground">Ср. рейтинг</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105 cursor-pointer group">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
            <Icon name="Users" className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {activeUsers.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">Активных</p>
          </div>
        </div>
      </div>
    </div>
  );
}