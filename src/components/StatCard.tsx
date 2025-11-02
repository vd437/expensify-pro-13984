import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className = '' }: StatCardProps) {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-2">{value}</p>
            {trend && (
              <p className={`text-xs mt-2 ${trend.positive ? 'text-success' : 'text-destructive'}`}>
                {trend.positive ? '↑' : '↓'} {trend.value}
              </p>
            )}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
