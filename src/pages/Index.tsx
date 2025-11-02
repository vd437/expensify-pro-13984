import { useApp } from '@/contexts/AppContext';
import { StatCard } from '@/components/StatCard';
import { AdSenseAd } from '@/components/AdSenseAd';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, TrendingDown, Wallet, PlusCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const { expenses, budgets, settings } = useApp();
  const isArabic = settings.language === 'ar';

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const monthlyExpenses = expenses
    .filter(exp => {
      const expDate = new Date(exp.date);
      const now = new Date();
      return expDate.getMonth() === now.getMonth() && expDate.getFullYear() === now.getFullYear();
    })
    .reduce((sum, exp) => sum + exp.amount, 0);

  const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const budgetRemaining = totalBudget - totalSpent;

  const currencySymbol = settings.currency === 'USD' ? '$' : settings.currency === 'EUR' ? '€' : settings.currency === 'EGP' ? 'E£' : 'SAR';

  const recentExpenses = [...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  return (
    <div className="p-6 space-y-6">
      {/* AdSense Ad on Homepage */}
      <AdSenseAd className="mb-6" style={{ minHeight: '90px' }} />

      <div>
        <h1 className="text-3xl font-bold mb-2">
          {isArabic ? 'لوحة التحكم' : 'Dashboard'}
        </h1>
        <p className="text-muted-foreground">
          {isArabic ? 'نظرة عامة على نفقاتك وميزانياتك' : 'Overview of your expenses and budgets'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={isArabic ? 'إجمالي النفقات' : 'Total Expenses'}
          value={`${currencySymbol}${totalExpenses.toFixed(2)}`}
          icon={DollarSign}
        />
        <StatCard
          title={isArabic ? 'هذا الشهر' : 'This Month'}
          value={`${currencySymbol}${monthlyExpenses.toFixed(2)}`}
          icon={TrendingDown}
        />
        <StatCard
          title={isArabic ? 'الميزانية المتبقية' : 'Budget Remaining'}
          value={`${currencySymbol}${budgetRemaining.toFixed(2)}`}
          icon={Wallet}
          trend={{ value: `${((budgetRemaining / totalBudget) * 100).toFixed(1)}%`, positive: budgetRemaining > 0 }}
        />
        <StatCard
          title={isArabic ? 'الفئات النشطة' : 'Active Categories'}
          value={expenses.length > 0 ? new Set(expenses.map(e => e.category)).size.toString() : '0'}
          icon={TrendingUp}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'إجراءات سريعة' : 'Quick Actions'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/expenses">
              <Button className="w-full justify-start" variant="outline">
                <PlusCircle className="mr-2 h-4 w-4" />
                {isArabic ? 'إضافة مصروف' : 'Add Expense'}
              </Button>
            </Link>
            <Link to="/analytics">
              <Button className="w-full justify-start" variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                {isArabic ? 'عرض التقارير' : 'View Reports'}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'النفقات الأخيرة' : 'Recent Expenses'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentExpenses.length > 0 ? (
                recentExpenses.map(expense => (
                  <div key={expense.id} className="flex justify-between items-center py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium">{expense.description}</p>
                      <p className="text-sm text-muted-foreground">{expense.category}</p>
                    </div>
                    <p className="font-semibold">{currencySymbol}{expense.amount.toFixed(2)}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  {isArabic ? 'لا توجد نفقات حتى الآن' : 'No expenses yet'}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
