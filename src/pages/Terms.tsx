import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function Terms() {
  const { settings } = useApp();
  const isArabic = settings.language === 'ar';

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">
            {isArabic ? 'الشروط والأحكام' : 'Terms of Use'}
          </h1>
        </div>
        <p className="text-muted-foreground">
          {isArabic ? 'آخر تحديث: نوفمبر 2025' : 'Last updated: November 2025'}
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '1. قبول الشروط' : '1. Acceptance of Terms'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'باستخدام تطبيق إدارة النفقات ("الخدمة")، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يجب عليك عدم استخدام الخدمة.'
              : 'By using the Expense Manager application ("the Service"), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use the Service.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '2. وصف الخدمة' : '2. Service Description'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'يوفر تطبيق إدارة النفقات أدوات شاملة لتتبع النفقات الشخصية والميزانيات والفئات المالية. يتم تخزين بياناتك بشكل آمن على خوادم Supabase السحابية، مما يتيح المزامنة عبر الأجهزة، والنسخ الاحتياطي التلقائي، والوصول من أي مكان.'
              : 'Expense Manager provides comprehensive tools for tracking personal expenses, budgets, and financial categories. Your data is securely stored on Supabase cloud servers, enabling cross-device synchronization, automatic backups, and access from anywhere.'}
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>{isArabic ? 'تتبع النفقات والدخل مع المزامنة السحابية' : 'Track expenses and income with cloud sync'}</li>
            <li>{isArabic ? 'إدارة الميزانيات والفئات' : 'Manage budgets and categories'}</li>
            <li>{isArabic ? 'إنشاء التقارير والتحليلات' : 'Generate reports and analytics'}</li>
            <li>{isArabic ? 'دعم متعدد العملات واللغات' : 'Multi-currency and language support'}</li>
            <li>{isArabic ? 'الوصول عبر الأجهزة المتعددة' : 'Multi-device access'}</li>
            <li>{isArabic ? 'نسخ احتياطي تلقائي وآمن' : 'Automatic and secure backups'}</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-foreground mb-2">
              {isArabic ? 'تخزين البيانات السحابية' : 'Cloud Data Storage'}
            </h4>
            <p>
              {isArabic
                ? 'بموجب استخدامك للخدمة، فإنك توافق على تخزين بياناتك المالية بشكل آمن على البنية التحتية السحابية لـ Supabase. يتيح هذا التخزين السحابي ميزات محسّنة مثل المزامنة عبر الأجهزة، والنسخ الاحتياطي التلقائي، وحماية البيانات من فقدان الجهاز. تظل مالكًا لجميع بياناتك ويمكنك تصديرها أو حذفها في أي وقت.'
                : 'By using the Service, you agree to have your financial data securely stored on Supabase cloud infrastructure. This cloud storage enables enhanced features such as cross-device synchronization, automatic backups, and protection from device loss. You remain the owner of all your data and can export or delete it at any time.'}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '3. حساب المستخدم والمسؤولية' : '3. User Account and Responsibility'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'أنت مسؤول عن الحفاظ على دقة المعلومات التي تدخلها في الخدمة وأمان بيانات اعتماد حسابك. يتم تخزين بياناتك بشكل آمن على خوادمنا السحابية مع نسخ احتياطية منتظمة. أنت مسؤول عن:'
              : 'You are responsible for maintaining the accuracy of information you enter into the Service and the security of your account credentials. Your data is securely stored on our cloud servers with regular backups. You are responsible for:'}
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>
              {isArabic
                ? 'الحفاظ على سرية كلمة المرور الخاصة بك'
                : 'Maintaining the confidentiality of your password'}
            </li>
            <li>
              {isArabic
                ? 'إبلاغنا فورًا بأي استخدام غير مصرح به لحسابك'
                : 'Notifying us immediately of any unauthorized use of your account'}
            </li>
            <li>
              {isArabic
                ? 'التأكد من دقة واكتمال المعلومات التي تقدمها'
                : 'Ensuring the accuracy and completeness of information you provide'}
            </li>
            <li>
              {isArabic
                ? 'الامتثال لجميع القوانين واللوائح المعمول بها'
                : 'Complying with all applicable laws and regulations'}
            </li>
          </ul>
          <p className="mt-4">
            {isArabic
              ? 'ملاحظة: نقوم بإجراء نسخ احتياطية منتظمة لبياناتك، ولكن يوصى بتصدير بياناتك بشكل دوري كإجراء احترازي إضافي.'
              : 'Note: While we perform regular backups of your data, we recommend periodically exporting your data as an additional precaution.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '4. حقوق الملكية الفكرية' : '4. Intellectual Property Rights'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'جميع حقوق الملكية الفكرية في الخدمة، بما في ذلك على سبيل المثال لا الحصر التصميم والشعارات والنص والرسومات، مملوكة لنا أو مرخصة لنا. لا يجوز لك نسخ أو تعديل أو توزيع أي جزء من الخدمة دون موافقة كتابية صريحة.'
              : 'All intellectual property rights in the Service, including but not limited to design, logos, text, and graphics, are owned by or licensed to us. You may not copy, modify, or distribute any part of the Service without express written permission.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '5. الإعلانات' : '5. Advertising'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'قد تحتوي الخدمة على إعلانات من طرف ثالث، بما في ذلك Google AdSense. لسنا مسؤولين عن محتوى أو دقة الإعلانات المعروضة. قد يستخدم المعلنون ملفات تعريف الارتباط أو تقنيات التتبع الأخرى.'
              : 'The Service may contain third-party advertisements, including Google AdSense. We are not responsible for the content or accuracy of advertisements displayed. Advertisers may use cookies or other tracking technologies.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '6. إخلاء المسؤولية عن الضمانات' : '6. Disclaimer of Warranties'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'يتم توفير الخدمة "كما هي" و "حسب التوفر" دون أي ضمانات من أي نوع، صريحة أو ضمنية. لا نضمن أن الخدمة ستكون خالية من الأخطاء أو غير منقطعة أو آمنة.'
              : 'The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Service will be error-free, uninterrupted, or secure.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '7. تحديد المسؤولية' : '7. Limitation of Liability'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدامك للخدمة أو عدم القدرة على استخدامها، بما في ذلك على سبيل المثال لا الحصر فقدان البيانات أو الأرباح.'
              : 'We shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to use the Service, including but not limited to loss of data or profits.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '8. التعديلات على الشروط' : '8. Modifications to Terms'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ "آخر تحديث" المحدث. استمرارك في استخدام الخدمة بعد هذه التغييرات يشكل قبولك للشروط الجديدة.'
              : 'We reserve the right to modify these terms at any time. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the new terms.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '9. القانون الحاكم' : '9. Governing Law'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'تخضع هذه الشروط وتفسر وفقًا لقوانين الولاية القضائية المعمول بها، دون اعتبار لأحكام تنازع القوانين.'
              : 'These terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, without regard to its conflict of law provisions.'}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? '10. معلومات الاتصال' : '10. Contact Information'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على:'
              : 'If you have any questions about these Terms, please contact us at:'}
          </p>
          <p className="font-medium">support@expensemanager.app</p>
        </CardContent>
      </Card>
    </div>
  );
}
