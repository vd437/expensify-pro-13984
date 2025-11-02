import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export default function Calculator() {
  const { settings } = useApp();
  const isArabic = settings.language === 'ar';
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);
    if (previousValue !== null && operation) {
      calculate();
    }
    setPreviousValue(currentValue);
    setOperation(op);
    setDisplay('0');
  };

  const calculate = () => {
    if (previousValue === null || operation === null) return;
    
    const currentValue = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '×':
        result = previousValue * currentValue;
        break;
      case '÷':
        result = previousValue / currentValue;
        break;
      case '%':
        result = (previousValue * currentValue) / 100;
        break;
    }

    const calculation = `${previousValue} ${operation} ${currentValue} = ${result}`;
    setHistory([calculation, ...history.slice(0, 9)]);
    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const buttonClass = "h-16 text-lg font-semibold hover:scale-105 transition-transform";

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{isArabic ? 'الحاسبة' : 'Calculator'}</h1>
        <p className="text-muted-foreground">
          {isArabic ? 'حاسبة مالية متقدمة' : 'Advanced financial calculator'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'الحاسبة' : 'Calculator'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-secondary p-6 rounded-lg text-right">
              <div className="text-4xl font-bold break-all">{display}</div>
              {operation && previousValue !== null && (
                <div className="text-sm text-muted-foreground mt-2">
                  {previousValue} {operation}
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2">
              <Button variant="outline" onClick={clear} className={buttonClass}>C</Button>
              <Button variant="outline" onClick={() => handleOperation('%')} className={buttonClass}>%</Button>
              <Button variant="outline" onClick={() => handleOperation('÷')} className={buttonClass}>÷</Button>
              <Button variant="outline" onClick={() => handleOperation('×')} className={buttonClass}>×</Button>

              <Button variant="secondary" onClick={() => handleNumber('7')} className={buttonClass}>7</Button>
              <Button variant="secondary" onClick={() => handleNumber('8')} className={buttonClass}>8</Button>
              <Button variant="secondary" onClick={() => handleNumber('9')} className={buttonClass}>9</Button>
              <Button variant="outline" onClick={() => handleOperation('-')} className={buttonClass}>-</Button>

              <Button variant="secondary" onClick={() => handleNumber('4')} className={buttonClass}>4</Button>
              <Button variant="secondary" onClick={() => handleNumber('5')} className={buttonClass}>5</Button>
              <Button variant="secondary" onClick={() => handleNumber('6')} className={buttonClass}>6</Button>
              <Button variant="outline" onClick={() => handleOperation('+')} className={buttonClass}>+</Button>

              <Button variant="secondary" onClick={() => handleNumber('1')} className={buttonClass}>1</Button>
              <Button variant="secondary" onClick={() => handleNumber('2')} className={buttonClass}>2</Button>
              <Button variant="secondary" onClick={() => handleNumber('3')} className={buttonClass}>3</Button>
              <Button onClick={calculate} className={`${buttonClass} row-span-2`}>=</Button>

              <Button variant="secondary" onClick={() => handleNumber('0')} className={`${buttonClass} col-span-2`}>0</Button>
              <Button variant="secondary" onClick={() => handleNumber('.')} className={buttonClass}>.</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>{isArabic ? 'السجل' : 'History'}</CardTitle>
            <Button size="icon" variant="ghost" onClick={clearHistory}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            {history.length > 0 ? (
              <div className="space-y-2">
                {history.map((calc, index) => (
                  <div key={index} className="p-3 bg-secondary rounded-lg text-sm font-mono">
                    {calc}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                {isArabic ? 'لا يوجد سجل حسابات' : 'No calculation history'}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
