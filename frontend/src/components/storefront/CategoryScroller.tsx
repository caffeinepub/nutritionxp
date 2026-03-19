import { categories } from '../../lib/data';
import { Button } from '@/components/ui/button';

export default function CategoryScroller() {
  return (
    <div className="scrollbar-custom -mx-4 flex gap-6 overflow-x-auto px-4 py-6 md:gap-8">
      {categories.map((category) => (
        <div
          key={category.name}
          className="min-w-[260px] flex-shrink-0 rounded-2xl border border-white/10 bg-[#1E1E26] p-6 transition-all hover:-translate-y-2 hover:border-[#FE934F] hover:shadow-[0_10px_30px_rgba(254,147,79,0.3)] md:min-w-[280px]"
        >
          <img
            src={category.image}
            alt={category.name}
            className="mb-4 h-48 w-full rounded-xl object-cover transition-transform hover:scale-105"
          />
          <div className="mb-4 min-h-[110px]">
            <h3 className="mb-2 text-lg font-semibold text-white">{category.name}</h3>
            <p className="text-sm text-[#B3B3B3]">{category.desc}</p>
          </div>
          <Button className="mt-4 w-full rounded-full bg-gradient-to-r from-[#FD8E49] via-black to-[#FD8E49] bg-[length:200%_100%] bg-right font-semibold transition-all duration-300 hover:bg-left hover:scale-105">
            View More
          </Button>
        </div>
      ))}
    </div>
  );
}
