import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (delta: number) => void;
  compact?: boolean;
}

export default function QuantitySelector({ quantity, onQuantityChange, compact = false }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      {!compact && <span className="text-base font-medium text-white md:text-lg">Quantity:</span>}
      <div className="flex items-center gap-3">
        <Button
          onClick={() => onQuantityChange(-1)}
          variant="outline"
          size={compact ? 'sm' : 'default'}
          className="h-9 w-9 rounded-lg border-[#333] bg-[#333] text-white hover:bg-[#FC9145] hover:text-white md:h-10 md:w-10"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="min-w-[40px] text-center text-lg font-semibold text-white md:text-xl">{quantity}</span>
        <Button
          onClick={() => onQuantityChange(1)}
          variant="outline"
          size={compact ? 'sm' : 'default'}
          className="h-9 w-9 rounded-lg border-[#333] bg-[#333] text-white hover:bg-[#FC9145] hover:text-white md:h-10 md:w-10"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
