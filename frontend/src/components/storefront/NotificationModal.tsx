import { CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationModal({ isOpen, onClose }: NotificationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] rounded-2xl border-2 border-[#FC9145] bg-[#1E1E26] text-white sm:max-w-md">
        <DialogHeader className="items-center space-y-4">
          <CheckCircle className="h-14 w-14 text-[#2ecc71] md:h-16 md:w-16" />
          <DialogTitle className="text-center text-2xl font-bold md:text-3xl">Order Placed Successfully!</DialogTitle>
          <DialogDescription className="text-center text-base leading-relaxed text-[#B3B3B3]">
            Your order details have been sent to <strong className="text-white">nutritionxpmohali@gmail.com</strong>. We
            will contact you shortly to confirm your order.
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={onClose}
          className="mt-4 w-full rounded-full bg-gradient-to-r from-[#FD8E49] to-[#fc8004] py-6 text-base font-semibold transition-all hover:scale-105"
        >
          Continue Shopping
        </Button>
      </DialogContent>
    </Dialog>
  );
}
