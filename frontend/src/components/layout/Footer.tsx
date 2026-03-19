import { SiX, SiLinkedin, SiYoutube, SiTwitch } from 'react-icons/si';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'nutritionxp-app');

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold md:text-3xl">Contact Us</h3>
            <div className="flex gap-4">
              <SiX className="h-5 w-5 cursor-pointer transition-all hover:scale-125 hover:text-[#FC9145]" />
              <SiLinkedin className="h-5 w-5 cursor-pointer transition-all hover:scale-125 hover:text-[#FC9145]" />
              <SiYoutube className="h-5 w-5 cursor-pointer transition-all hover:scale-125 hover:text-[#FC9145]" />
              <SiTwitch className="h-5 w-5 cursor-pointer transition-all hover:scale-125 hover:text-[#FC9145]" />
            </div>
            <div className="space-y-4 text-[#ccc]">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0" />
                <span>7973079323</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0" />
                <span className="break-all">nutritionxpmohali@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <span>SCF 13, 1st Floor, Sector 64<br />Phase 10, Mohali - 160064</span>
              </div>
            </div>
            <div className="pt-8">
              <img
                src="https://instasize.com/api/image/b0e2426687abd8cb722c1532731ddab8925659a72793c6f6c6bd7e1fa1f1c8f3.png"
                alt="NutritionXP"
                className="h-20 w-auto rounded-none md:h-24"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold md:text-3xl">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {['Home', 'Gallery', 'About', 'Terms & Conditions', 'Policies'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[#aaa] transition-all hover:pl-2 hover:text-white"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold md:text-3xl">Send Us A Message</h3>
            <p className="text-sm text-[#aaa]">Kindly fill this form. Average response is within 24hrs</p>
            <form className="space-y-5">
              <Input
                type="text"
                placeholder="Jane Smith"
                className="border-0 border-b border-[#444] bg-transparent px-0 py-3 text-white placeholder:text-[#666] focus-visible:border-[#FC9145] focus-visible:ring-0"
              />
              <Input
                type="email"
                placeholder="jane@framer.com"
                className="border-0 border-b border-[#444] bg-transparent px-0 py-3 text-white placeholder:text-[#666] focus-visible:border-[#FC9145] focus-visible:ring-0"
              />
              <Select>
                <SelectTrigger className="border-0 border-b border-[#444] bg-transparent px-0 py-3 text-white focus:border-[#FC9145] focus:ring-0">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent className="border-[#444] bg-[#1E1E26] text-white">
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                rows={3}
                placeholder="Your message..."
                className="border-0 border-b border-[#444] bg-transparent px-0 py-3 text-white placeholder:text-[#666] focus-visible:border-[#FC9145] focus-visible:ring-0"
              />
              <Button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#FD8E49] to-[#fc8004] py-6 text-base font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(253,142,73,0.4)]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-12 border-t border-[#222] pt-8 text-center text-sm text-[#777]">
          <p className="flex flex-wrap items-center justify-center gap-1">
            <span>© {currentYear} NutritionXP. Built with</span>
            <Heart className="inline h-4 w-4 fill-[#FC9145] text-[#FC9145]" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-[#FC9145]"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
