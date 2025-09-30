import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-6 hover:from-purple-500/20 hover:to-pink-500/20 transition-colors cursor-pointer border border-purple-500/20">
            <Icon name="Shield" className="h-4 w-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Проверенные промпты от экспертов</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
            Откройте силу искусственного интеллекта
          </h2>
          <p className="text-xl bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent mb-8">
            Маркетплейс профессиональных промптов для DeepSeek, ChatGPT и других AI-моделей
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 border-0">
              <Icon name="Search" className="h-5 w-5" />
              Найти промпт
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/50 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500 transition-all hover:scale-110">
              <Icon name="Upload" className="h-5 w-5 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Продать промпт</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}