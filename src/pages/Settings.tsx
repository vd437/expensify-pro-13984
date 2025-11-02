import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { toast } from 'sonner';

export default function Settings() {
  const { settings, updateSettings } = useApp();
  const isArabic = settings.language === 'ar';

  const handleThemeToggle = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    updateSettings({ theme: newTheme });
    toast.success(isArabic ? 'تم تغيير السمة' : 'Theme changed');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{isArabic ? 'الإعدادات' : 'Settings'}</h1>
        <p className="text-muted-foreground">
          {isArabic ? 'تخصيص تفضيلات التطبيق' : 'Customize your app preferences'}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? 'المظهر' : 'Appearance'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>{isArabic ? 'الوضع الداكن' : 'Dark Mode'}</Label>
              <p className="text-sm text-muted-foreground">
                {isArabic ? 'التبديل بين الوضع الفاتح والداكن' : 'Toggle between light and dark theme'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={settings.theme === 'dark'}
                onCheckedChange={handleThemeToggle}
              />
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? 'التفضيلات الإقليمية' : 'Regional Preferences'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>{isArabic ? 'اللغة' : 'Language'}</Label>
            <Select
              value={settings.language}
              onValueChange={(value: 'en' | 'ar') => {
                updateSettings({ language: value });
                toast.success(isArabic ? 'تم تغيير اللغة' : 'Language changed');
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{isArabic ? 'العملة' : 'Currency'}</Label>
            <Select
              value={settings.currency}
              onValueChange={(value: any) => {
                updateSettings({ currency: value });
                toast.success(isArabic ? 'تم تغيير العملة' : 'Currency changed');
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD - US Dollar ($)</SelectItem>
                <SelectItem value="EUR">EUR - Euro (€)</SelectItem>
                <SelectItem value="EGP">EGP - Egyptian Pound (E£)</SelectItem>
                <SelectItem value="SAR">SAR - Saudi Riyal (ر.س)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{isArabic ? 'تنسيق التاريخ' : 'Date Format'}</Label>
            <Select
              value={settings.dateFormat}
              onValueChange={(value: any) => {
                updateSettings({ dateFormat: value });
                toast.success(isArabic ? 'تم تغيير تنسيق التاريخ' : 'Date format changed');
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? 'الإشعارات' : 'Notifications'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>{isArabic ? 'تفعيل الإشعارات' : 'Enable Notifications'}</Label>
              <p className="text-sm text-muted-foreground">
                {isArabic ? 'استقبال الإشعارات حول الميزانية والنفقات' : 'Receive notifications about budgets and expenses'}
              </p>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(checked) => {
                updateSettings({ notifications: checked });
                toast.success(
                  checked
                    ? (isArabic ? 'تم تفعيل الإشعارات' : 'Notifications enabled')
                    : (isArabic ? 'تم تعطيل الإشعارات' : 'Notifications disabled')
                );
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
