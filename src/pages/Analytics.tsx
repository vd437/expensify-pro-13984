import { useApp } from '@/contexts/AppContext';
import { AdSenseAd } from '@/components/AdSenseAd';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const { expenses, categories, settings } = useApp();
  const isArabic = settings.language === 'ar';

  // Category distribution
  const categoryData = categories.map(cat => ({
    name: cat.name,
    value: expenses.filter(exp => exp.category === cat.name).reduce((sum, exp) => sum + exp.amount, 0),
    color: cat.color,
  })).filter(item => item.value > 0);

  // Monthly expenses
  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const month = date.toLocaleString(isArabic ? 'ar' : 'en', { month: 'short' });
    const total = expenses
      .filter(exp => {
        const expDate = new Date(exp.date);
        return expDate.getMonth() === date.getMonth() && expDate.getFullYear() === date.getFullYear();
      })
      .reduce((sum, exp) => sum + exp.amount, 0);
    return { month, total };
  }).reverse();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{isArabic ? 'التقارير والتحليلات' : 'Analytics & Reports'}</h1>
        <p className="text-muted-foreground">
          {isArabic ? 'تحليل نفقاتك وأنماط الإنفاق' : 'Analyze your expenses and spending patterns'}
        </p>
      </div>

      {/* AdSense Ad on Analytics page */}
      <AdSenseAd className="mb-6" style={{ minHeight: '90px' }} />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'النفقات حسب الفئة' : 'Expenses by Category'}</CardTitle>
          </CardHeader>
          <CardContent>
            {categoryData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value.toFixed(0)}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                {isArabic ? 'لا توجد بيانات لعرضها' : 'No data to display'}
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'النفقات الشهرية' : 'Monthly Expenses'}</CardTitle>
          </CardHeader>
          <CardContent>
            {monthlyData.some(d => d.total > 0) ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="total" fill="hsl(var(--primary))" name={isArabic ? 'المجموع' : 'Total'} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                {isArabic ? 'لا توجد بيانات لعرضها' : 'No data to display'}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? 'ملخص الفئات' : 'Category Summary'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryData.map(cat => (
              <div key={cat.name} className="flex items-center justify-between p-3 rounded-lg border">
                <span className="font-medium">{cat.name}</span>
                <span className="font-bold" style={{ color: cat.color }}>
                  {cat.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
