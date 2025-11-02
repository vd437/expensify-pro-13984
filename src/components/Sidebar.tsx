import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Receipt, 
  PiggyBank, 
  Tags, 
  BarChart3, 
  Calculator, 
  Settings,
  Menu,
  X,
  FileText,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const { settings } = useApp();

  const navigation = [
    { name: settings.language === 'ar' ? 'لوحة التحكم' : 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: settings.language === 'ar' ? 'المصروفات' : 'Expenses', href: '/expenses', icon: Receipt },
    { name: settings.language === 'ar' ? 'الميزانيات' : 'Budgets', href: '/budgets', icon: PiggyBank },
    { name: settings.language === 'ar' ? 'الفئات' : 'Categories', href: '/categories', icon: Tags },
    { name: settings.language === 'ar' ? 'التقارير' : 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: settings.language === 'ar' ? 'الحاسبة' : 'Calculator', href: '/calculator', icon: Calculator },
    { name: settings.language === 'ar' ? 'الإعدادات' : 'Settings', href: '/settings', icon: Settings },
  ];

  const legal = [
    { name: settings.language === 'ar' ? 'الشروط والأحكام' : 'Terms of Use', href: '/terms', icon: FileText },
    { name: settings.language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy', href: '/privacy', icon: Shield },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 transform bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-sidebar-border px-6">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {settings.language === 'ar' ? 'مدير النفقات' : 'Expense Manager'}
            </h1>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-sidebar-accent',
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground hover:text-sidebar-accent-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4 mt-4 border-t border-sidebar-border">
              <p className="px-3 text-xs font-semibold text-muted-foreground mb-2">
                {settings.language === 'ar' ? 'قانوني' : 'Legal'}
              </p>
              {legal.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-sidebar-accent',
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'text-sidebar-foreground hover:text-sidebar-accent-foreground'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="border-t border-sidebar-border p-4">
            <p className="text-xs text-muted-foreground text-center">
              © 2024 Expense Manager
            </p>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
