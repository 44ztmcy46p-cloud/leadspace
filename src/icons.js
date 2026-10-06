// Lucide Icons 1.x. Distributed under ISC; Feather-derived icons under MIT.
// The complete unmodified copyright and license notices are shipped in
// public/licenses/lucide.txt and included in the compiled JavaScript bundle.
import {
  createIcons, ArrowRight, Menu, CircleCheck, Gem, UserPlus, Users,
  CalendarDays, Mic, ChartNoAxesColumnIncreasing, CloudDownload, FileText,
  Mail, MessageCircle, Phone, Headphones, CirclePlay, AudioLines,
  ShoppingCart, Monitor, Layers, ShieldCheck, Building2, Send, X,
  Camera, Megaphone, MousePointerClick, Search
} from 'lucide';
export function initializeIcons() {
  createIcons({
    icons: { ArrowRight, Menu, CircleCheck, Gem, UserPlus, Users, CalendarDays,
      Mic, ChartNoAxesColumnIncreasing, CloudDownload, FileText, Mail,
      MessageCircle, Phone, Headphones, CirclePlay, AudioLines, ShoppingCart,
      Monitor, Layers, ShieldCheck, Building2, Send, X, Camera, Megaphone,
      MousePointerClick, Search },
    attrs: { 'aria-hidden': 'true', focusable: 'false', 'stroke-width': 1.7 }
  });
}
