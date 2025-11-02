import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { AdSenseAd } from '@/components/AdSenseAd';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2, Edit } from 'lucide-react';
import { toast } from 'sonner';

export default function Expenses() {
  const { expenses, budgets, categories, addExpense, deleteExpense, settings } = useApp();
  const isArabic = settings.language === 'ar';
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [budgetId, setBudgetId] = useState('');

  const currencySymbol = settings.currency === 'USD' ? '$' : settings.currency === 'EUR' ? '€' : settings.currency === 'EGP' ? 'E£' : 'SAR';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !description) {
      toast.error(isArabic ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
      return;
    }

    addExpense({
      amount: parseFloat(amount),
      category,
      description,
      notes,
      date,
      budgetId: budgetId || undefined,
    });

    toast.success(isArabic ? 'تم إضافة المصروف بنجاح' : 'Expense added successfully');
    setAmount('');
    setCategory('');
    setDescription('');
    setNotes('');
    setDate(new Date().toISOString().split('T')[0]);
    setBudgetId('');
    setShowForm(false);
  };

  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{isArabic ? 'المصروفات' : 'Expenses'}</h1>
          <p className="text-muted-foreground">
            {isArabic ? 'إدارة نفقاتك اليومية' : 'Manage your daily expenses'}
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          {isArabic ? 'إضافة مصروف' : 'Add Expense'}
        </Button>
      </div>

      {/* AdSense Ad when Create Expenses button is clicked */}
      {showForm && (
        <AdSenseAd className="mb-4" style={{ minHeight: '90px' }} />
      )}

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'مصروف جديد' : 'New Expense'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
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
                <div>
                  <Label htmlFor="category">{isArabic ? 'الفئة' : 'Category'} *</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder={isArabic ? 'اختر الفئة' : 'Select category'} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.icon} {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">{isArabic ? 'الوصف' : 'Description'} *</Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={isArabic ? 'وصف المصروف' : 'Expense description'}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">{isArabic ? 'التاريخ' : 'Date'}</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="budget">{isArabic ? 'الميزانية (اختياري)' : 'Budget (Optional)'}</Label>
                  <Select value={budgetId} onValueChange={setBudgetId}>
                    <SelectTrigger>
                      <SelectValue placeholder={isArabic ? 'اختر الميزانية' : 'Select budget'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">{isArabic ? 'بدون ميزانية' : 'No budget'}</SelectItem>
                      {budgets.filter(b => !b.hidden).map(budget => (
                        <SelectItem key={budget.id} value={budget.id}>
                          {budget.name} ({budget.category || (isArabic ? 'عام' : 'General')})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="notes">{isArabic ? 'ملاحظات' : 'Notes'}</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isArabic ? 'ملاحظات إضافية' : 'Additional notes'}
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit">{isArabic ? 'حفظ' : 'Save'}</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  {isArabic ? 'إلغاء' : 'Cancel'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? 'جميع النفقات' : 'All Expenses'}</CardTitle>
        </CardHeader>
        <CardContent>
          {sortedExpenses.length > 0 ? (
            <div className="space-y-3">
              {sortedExpenses.map(expense => {
                const expenseCategory = categories.find(c => c.name === expense.category);
                return (
                  <div
                    key={expense.id}
                    className="flex justify-between items-center p-4 rounded-lg border hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                        style={{ backgroundColor: expenseCategory?.color + '20' }}
                      >
                        {expenseCategory?.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{expense.description}</p>
                        <p className="text-sm text-muted-foreground">{expense.category}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(expense.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-lg font-bold">
                        {currencySymbol}{expense.amount.toFixed(2)}
                      </p>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => {
                          deleteExpense(expense.id);
                          toast.success(isArabic ? 'تم حذف المصروف' : 'Expense deleted');
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              {isArabic ? 'لا توجد نفقات حتى الآن' : 'No expenses yet'}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
