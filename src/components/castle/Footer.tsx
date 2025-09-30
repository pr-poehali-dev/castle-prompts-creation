import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t mt-20 py-12 bg-card/50 backdrop-blur relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <Icon name="Castle" className="h-8 w-8 text-transparent bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Castle Prompts</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Цитадель качественных AI-промптов для профессионалов
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Категории</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { name: 'Маркетинг', color: 'from-orange-400 to-red-400' },
                { name: 'Писательство', color: 'from-cyan-400 to-blue-400' },
                { name: 'Программирование', color: 'from-green-400 to-emerald-400' },
                { name: 'Образование', color: 'from-purple-400 to-indigo-400' },
                { name: 'Ролевые игры', color: 'from-fuchsia-400 to-purple-400' },
                { name: 'Premium', color: 'from-yellow-400 to-orange-400' }
              ].map((cat) => (
                <li key={cat.name} className={`hover:bg-gradient-to-r ${cat.color} hover:bg-clip-text hover:text-transparent transition-all cursor-pointer hover:translate-x-1`}>
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Для авторов</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Продать промпт', 'Панель автора', 'Выплаты'].map((item) => (
                <li key={item} className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all cursor-pointer hover:translate-x-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Поддержка</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['FAQ', 'Связаться', 'Документация'].map((item) => (
                <li key={item} className="hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent transition-all cursor-pointer hover:translate-x-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Castle Prompts. Все права защищены.
        </div>
      </div>
    </footer>
  );
}