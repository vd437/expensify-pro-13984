import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Categories() {
  const { categories, addCategory, deleteCategory, settings } = useApp();
  const isArabic = settings.language === 'ar';
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('📌');
  const [color, setColor] = useState('#95A5A6');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      toast.error(isArabic ? 'يرجى إدخال اسم الفئة' : 'Please enter category name');
      return;
    }

    addCategory({ name, icon, color });
    toast.success(isArabic ? 'تم إضافة الفئة بنجاح' : 'Category added successfully');
    setName('');
    setIcon('📌');
    setColor('#95A5A6');
    setShowForm(false);
  };

  const emojiList = ['🍔', '🚗', '🛍️', '🎬', '💡', '⚕️', '📚', '✈️', '🏠', '💰', '🎮', '📱', '☕', '🎵', '📌'];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{isArabic ? 'الفئات' : 'Categories'}</h1>
          <p className="text-muted-foreground">
            {isArabic ? 'إدارة فئات النفقات' : 'Manage your expense categories'}
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          {isArabic ? 'إضافة فئة' : 'Add Category'}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'فئة جديدة' : 'New Category'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">{isArabic ? 'الاسم' : 'Name'} *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isArabic ? 'اسم الفئة' : 'Category name'}
                  required
                />
              </div>

              <div>
                <Label>{isArabic ? 'الأيقونة' : 'Icon'}</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {emojiList.map(emoji => (
                    <button
                      key={emoji}
                      type="button"
                      className={`text-2xl p-2 rounded-lg border-2 hover:scale-110 transition-transform ${icon === emoji ? 'border-primary' : 'border-border'}`}
                      onClick={() => setIcon(emoji)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="color">{isArabic ? 'اللون' : 'Color'}</Label>
                <div className="flex gap-2 items-center mt-2">
                  <Input
                    id="color"
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-20 h-10"
                  />
                  <span className="text-sm text-muted-foreground">{color}</span>
                </div>
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(category => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: category.color + '30' }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{category.name}</p>
                    <div
                      className="w-16 h-3 rounded mt-1"
                      style={{ backgroundColor: category.color }}
                    />
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => {
                    deleteCategory(category.id);
                    toast.success(isArabic ? 'تم حذف الفئة' : 'Category deleted');
                  }}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
