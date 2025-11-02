import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';
export type Currency = 'USD' | 'EUR' | 'EGP' | 'SAR';
export type DateFormat = 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD';

export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  notes?: string;
  budgetId?: string;
}

export interface Budget {
  id: string;
  name: string;
  amount: number;
  spent: number;
  category?: string;
  period: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  startDate: string;
  hidden?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface AppSettings {
  language: Language;
  currency: Currency;
  dateFormat: DateFormat;
  notifications: boolean;
  theme: 'light' | 'dark';
}

interface AppContextType {
  expenses: Expense[];
  budgets: Budget[];
  categories: Category[];
  settings: AppSettings;
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  updateExpense: (id: string, expense: Partial<Expense>) => void;
  deleteExpense: (id: string) => void;
  addBudget: (budget: Omit<Budget, 'id'>) => void;
  updateBudget: (id: string, budget: Partial<Budget>) => void;
  deleteBudget: (id: string) => void;
  toggleBudgetVisibility: (id: string) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultCategories: Category[] = [
  { id: '1', name: 'Food & Dining', icon: '🍔', color: '#FF6B6B' },
  { id: '2', name: 'Transportation', icon: '🚗', color: '#4ECDC4' },
  { id: '3', name: 'Shopping', icon: '🛍️', color: '#45B7D1' },
  { id: '4', name: 'Entertainment', icon: '🎬', color: '#FFA07A' },
  { id: '5', name: 'Bills & Utilities', icon: '💡', color: '#98D8C8' },
  { id: '6', name: 'Healthcare', icon: '⚕️', color: '#F7B801' },
  { id: '7', name: 'Other', icon: '📌', color: '#95A5A6' },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [budgets, setBudgets] = useState<Budget[]>(() => {
    const saved = localStorage.getItem('budgets');
    return saved ? JSON.parse(saved) : [];
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('categories');
    return saved ? JSON.parse(saved) : defaultCategories;
  });

  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : {
      language: 'en',
      currency: 'USD',
      dateFormat: 'MM/DD/YYYY',
      notifications: true,
      theme: 'light',
    };
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
    document.documentElement.classList.toggle('dark', settings.theme === 'dark');
    document.documentElement.setAttribute('dir', settings.language === 'ar' ? 'rtl' : 'ltr');
  }, [settings]);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense = { ...expense, id: Date.now().toString() };
    setExpenses([...expenses, newExpense]);
    
    // Update budget spent amount
    if (expense.budgetId) {
      const relatedBudget = budgets.find(b => b.id === expense.budgetId);
      if (relatedBudget) {
        updateBudget(relatedBudget.id, { spent: relatedBudget.spent + expense.amount });
      }
    }
  };

  const updateExpense = (id: string, updatedExpense: Partial<Expense>) => {
    setExpenses(expenses.map(e => e.id === id ? { ...e, ...updatedExpense } : e));
  };

  const deleteExpense = (id: string) => {
    const expense = expenses.find(e => e.id === id);
    if (expense && expense.budgetId) {
      const relatedBudget = budgets.find(b => b.id === expense.budgetId);
      if (relatedBudget) {
        updateBudget(relatedBudget.id, { spent: Math.max(0, relatedBudget.spent - expense.amount) });
      }
    }
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const addBudget = (budget: Omit<Budget, 'id'>) => {
    const newBudget = { ...budget, id: Date.now().toString() };
    setBudgets([...budgets, newBudget]);
  };

  const updateBudget = (id: string, updatedBudget: Partial<Budget>) => {
    setBudgets(budgets.map(b => b.id === id ? { ...b, ...updatedBudget } : b));
  };

  const deleteBudget = (id: string) => {
    setBudgets(budgets.filter(b => b.id !== id));
  };

  const toggleBudgetVisibility = (id: string) => {
    setBudgets(budgets.map(b => b.id === id ? { ...b, hidden: !b.hidden } : b));
  };

  const addCategory = (category: Omit<Category, 'id'>) => {
    const newCategory = { ...category, id: Date.now().toString() };
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (id: string, updatedCategory: Partial<Category>) => {
    setCategories(categories.map(c => c.id === id ? { ...c, ...updatedCategory } : c));
  };

  const deleteCategory = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <AppContext.Provider
      value={{
        expenses,
        budgets,
        categories,
        settings,
        addExpense,
        updateExpense,
        deleteExpense,
        addBudget,
        updateBudget,
        deleteBudget,
        toggleBudgetVisibility,
        addCategory,
        updateCategory,
        deleteCategory,
        updateSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
