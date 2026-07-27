import {
  Heart, Scale, GraduationCap, Users, Compass, Crown, BookOpen, Home, Scroll,
  HeartHandshake, Sparkles, Briefcase, ShieldCheck, Library, Coins,
  MessagesSquare, Moon, Sun, Menu, X, Search, Globe, Bookmark, BookmarkCheck,
  Volume2, Square, Download, Send, ArrowRight, Quote, ChevronDown, ChevronRight,
  Bot, MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube,
  BookMarked, Star, Info, HandHeart, ScrollText, GraduationCap as Grad, Languages,
  Sparkle, Lightbulb, FileText, ExternalLink, CheckCircle2, XCircle, User, Calendar,
  Clock, Tag, Filter, ChevronLeft, Plus, Minus, RefreshCw, Trash2, Phone as PhoneIcon,
} from 'lucide-react';

const icons = {
  Heart, Scale, GraduationCap, Users, Compass, Crown, BookOpen, Home, Scroll,
  HeartHandshake, Sparkles, Briefcase, ShieldCheck, Library, Coins,
  MessagesSquare, Moon, Sun, Menu, X, Search, Globe, Bookmark, BookmarkCheck,
  Volume2, Square, Download, Send, ArrowRight, Quote, ChevronDown, ChevronRight,
  Bot, MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube,
  BookMarked, Star, Info, HandHeart, ScrollText, Grad, Languages,
  Sparkle, Lightbulb, FileText, ExternalLink, CheckCircle2, XCircle, User, Calendar,
  Clock, Tag, Filter, ChevronLeft, Plus, Minus, RefreshCw, Trash2, PhoneIcon,
};

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (icons as Record<string, typeof Heart>)[name] || Info;
  return <Cmp className={className} />;
}
