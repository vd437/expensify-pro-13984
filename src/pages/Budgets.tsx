import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus, Trash2, Edit, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

export default function Budgets() {
  const { budgets, categories, addBudget, updateBudget, deleteBudget, toggleBudgetVisibility, settings } = useApp();
  const isArabic = settings.language === 'ar';
  const [showForm, setShowForm] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [editingBudget, setEditingBudget] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [period, setPeriod] = useState<'weekly' | 'monthly' | 'quarterly' | 'yearly'>('monthly');

  const currencySymbol = settings.currency === 'USD' ? '$' : settings.currency === 'EUR' ? '€' : settings.currency === 'EGP' ? 'E£' : 'SAR';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) {
      toast.error(isArabic ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
      return;
    }

    if (editingBudget) {
      updateBudget(editingBudget, {
        name,
        amount: parseFloat(amount),
        category: category || undefined,
        period,
      });
      toast.success(isArabic ? 'تم تحديث الميزانية بنجاح' : 'Budget updated successfully');
      setEditingBudget(null);
    } else {
      addBudget({
        name,
        amount: parseFloat(amount),
        spent: 0,
        category: category || undefined,
        period,
        startDate: new Date().toISOString(),
      });
      toast.success(isArabic ? 'تم إضافة الميزانية بنجاح' : 'Budget added successfully');
    }

    setName('');
    setAmount('');
    setCategory('');
    setShowForm(false);
  };

  const handleEdit = (budget: any) => {
    setEditingBudget(budget.id);
    setName(budget.name);
    setAmount(budget.amount.toString());
    setCategory(budget.category || '');
    setPeriod(budget.period);
    setShowForm(true);
  };

  const displayedBudgets = showHidden ? budgets : budgets.filter(b => !b.hidden);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{isArabic ? 'الميزانيات' : 'Budgets'}</h1>
          <p className="text-muted-foreground">
            {isArabic ? 'تتبع وإدارة ميزانياتك' : 'Track and manage your budgets'}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowHidden(!showHidden)}>
            {showHidden ? <Eye className="mr-2 h-4 w-4" /> : <EyeOff className="mr-2 h-4 w-4" />}
            {showHidden ? (isArabic ? 'إخفاء المخفية' : 'Hide Hidden') : (isArabic ? 'عرض المخفية' : 'Show Hidden')}
          </Button>
          <Button onClick={() => {
            setEditingBudget(null);
            setName('');
            setAmount('');
            setCategory('');
            setShowForm(!showForm);
          }}>
            <Plus className="mr-2 h-4 w-4" />
            {isArabic ? 'إضافة ميزانية' : 'Add Budget'}
          </Button>
        </div>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingBudget 
                ? (isArabic ? 'تعديل الميزانية' : 'Edit Budget')
                : (isArabic ? 'ميزانية جديدة' : 'New Budget')
              }
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{isArabic ? 'الاسم' : 'Name'} *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isArabic ? 'اسم الميزانية' : 'Budget name'}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="amount">{isArabic ? 'المبلغ' : 'Amount'} *</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">{isArabic ? 'الفئة (اختياري)' : 'Category (Optional)'}</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder={isArabic ? 'كل الفئات' : 'All categories'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">{isArabic ? 'كل الفئات' : 'All categories'}</SelectItem>
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.icon} {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="period">{isArabic ? 'الفترة' : 'Period'}</Label>
                  <Select value={period} onValueChange={(val: any) => setPeriod(val)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">{isArabic ? 'أسبوعي' : 'Weekly'}</SelectItem>
                      <SelectItem value="monthly">{isArabic ? 'شهري' : 'Monthly'}</SelectItem>
                      <SelectItem value="quarterly">{isArabic ? 'ربع سنوي' : 'Quarterly'}</SelectItem>
                      <SelectItem value="yearly">{isArabic ? 'سنوي' : 'Yearly'}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit">{isArabic ? 'حفظ' : 'Save'}</Button>
                <Button type="button" variant="outline" onClick={() => {
                  setShowForm(false);
                  setEditingBudget(null);
                  setName('');
                  setAmount('');
                  setCategory('');
                }}>
                  {isArabic ? 'إلغاء' : 'Cancel'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {displayedBudgets.length > 0 ? (
          displayedBudgets.map(budget => {
            const percentage = (budget.spent / budget.amount) * 100;
            const isOverBudget = percentage > 100;
            return (
              <Card key={budget.id} className={budget.hidden ? 'opacity-60' : ''}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold">{budget.name}</CardTitle>
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        toggleBudgetVisibility(budget.id);
                        toast.success(budget.hidden 
                          ? (isArabic ? 'تم إظهار الميزانية' : 'Budget shown')
                          : (isArabic ? 'تم إخفاء الميزانية' : 'Budget hidden')
                        );
                      }}
                    >
                      {budget.hidden ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleEdit(budget)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        deleteBudget(budget.id);
                        toast.success(isArabic ? 'تم حذف الميزانية' : 'Budget deleted');
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {budget.category || (isArabic ? 'كل الفئات' : 'All categories')}
                    </span>
                    <span className="text-muted-foreground capitalize">{budget.period}</span>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        {currencySymbol}{budget.spent.toFixed(2)} / {currencySymbol}{budget.amount.toFixed(2)}
                      </span>
                      <span className={`text-sm font-medium ${isOverBudget ? 'text-destructive' : 'text-success'}`}>
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={Math.min(percentage, 100)} className="h-2" />
                  </div>
                  {isOverBudget && (
                    <p className="text-xs text-destructive">
                      {isArabic ? 'تجاوزت الميزانية!' : 'Over budget!'}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Card className="md:col-span-2">
            <CardContent className="py-8">
              <p className="text-center text-muted-foreground">
                {isArabic ? 'لا توجد ميزانيات حتى الآن' : 'No budgets yet'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
