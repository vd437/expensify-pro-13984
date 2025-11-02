import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function Privacy() {
  const { settings } = useApp();
  const isArabic = settings.language === 'ar';

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">
            {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
        </div>
        <p className="text-muted-foreground">
          {isArabic ? 'آخر تحديث: نوفمبر 2024' : 'Last updated: November 2024'}
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '1. المقدمة' : '1. Introduction'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام تطبيق إدارة النفقات ("الخدمة").'
              : 'We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use the Expense Manager application ("the Service").'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '2. المعلومات التي نجمعها' : '2. Information We Collect'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <h3 className="font-semibold text-foreground">
            {isArabic ? '2.1 البيانات المخزنة محليًا' : '2.1 Locally Stored Data'}
          </h3>
          <p>
            {isArabic
              ? 'يقوم التطبيق بتخزين البيانات التالية محليًا على جهازك باستخدام تخزين المتصفح المحلي:'
              : 'The application stores the following data locally on your device using browser local storage:'}
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>{isArabic ? 'سجلات النفقات والدخل' : 'Expense and income records'}</li>
            <li>{isArabic ? 'معلومات الميزانية' : 'Budget information'}</li>
            <li>{isArabic ? 'الفئات المخصصة' : 'Custom categories'}</li>
            <li>{isArabic ? 'تفضيلات الإعدادات (اللغة، العملة، السمة)' : 'Settings preferences (language, currency, theme)'}</li>
          </ul>
          <p className="font-medium text-foreground">
            {isArabic
              ? 'مهم: لا يتم إرسال أي من هذه البيانات إلى خوادمنا. تظل جميع البيانات على جهازك فقط.'
              : 'Important: None of this data is transmitted to our servers. All data remains exclusively on your device.'}
          </p>

          <h3 className="font-semibold text-foreground mt-6">
            {isArabic ? '2.2 ملفات تعريف الارتباط وتقنيات التتبع' : '2.2 Cookies and Tracking Technologies'}
          </h3>
          <p>
            {isArabic
              ? 'نستخدم التقنيات التالية:'
              : 'We use the following technologies:'}
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>
              {isArabic
                ? 'ملفات تعريف الارتباط الأساسية: للحفاظ على تفضيلاتك وحالة الجلسة'
                : 'Essential cookies: To maintain your preferences and session state'}
            </li>
            <li>
              {isArabic
                ? 'Google AdSense: قد يستخدم ملفات تعريف الارتباط لعرض الإعلانات ذات الصلة'
                : 'Google AdSense: May use cookies to display relevant advertisements'}
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '3. كيفية استخدامنا لمعلوماتك' : '3. How We Use Your Information'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{isArabic ? 'نستخدم المعلومات المخزنة محليًا لـ:' : 'We use locally stored information to:'}</p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>{isArabic ? 'توفير وظائف التطبيق' : 'Provide application functionality'}</li>
            <li>{isArabic ? 'حفظ تفضيلاتك واستعادتها' : 'Save and restore your preferences'}</li>
            <li>{isArabic ? 'إنشاء التقارير والتحليلات المحلية' : 'Generate reports and local analytics'}</li>
            <li>{isArabic ? 'تحسين تجربة المستخدم الخاصة بك' : 'Improve your user experience'}</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '4. إعلانات الطرف الثالث' : '4. Third-Party Advertising'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <h3 className="font-semibold text-foreground">
            {isArabic ? 'Google AdSense' : 'Google AdSense'}
          </h3>
          <p>
            {isArabic
              ? 'نستخدم Google AdSense لعرض الإعلانات. قد يستخدم Google ملفات تعريف الارتباط وإشارات الويب لجمع معلومات حول زياراتك لهذا الموقع والمواقع الأخرى لتقديم إعلانات حول السلع والخدمات التي قد تهمك.'
              : 'We use Google AdSense to display advertisements. Google may use cookies and web beacons to collect information about your visits to this and other websites to provide advertisements about goods and services of interest to you.'}
          </p>
          <p>
            {isArabic
              ? 'لمزيد من المعلومات حول Google AdSense وخصوصية البيانات، يرجى زيارة:'
              : 'For more information about Google AdSense and data privacy, please visit:'}
          </p>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://policies.google.com/privacy
          </a>
          <p className="mt-4">
            {isArabic
              ? 'يمكنك إلغاء الاشتراك في الإعلانات المخصصة من Google من خلال زيارة:'
              : 'You can opt out of personalized advertising by Google by visiting:'}
          </p>
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://www.google.com/settings/ads
          </a>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '5. أمن البيانات' : '5. Data Security'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'نحن نتخذ أمان بياناتك على محمل الجد. نظرًا لأن جميع البيانات مخزنة محليًا على جهازك، فإنك مسؤول عن:'
              : 'We take the security of your data seriously. Since all data is stored locally on your device, you are responsible for:'}
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>{isArabic ? 'الحفاظ على أمان جهازك' : 'Maintaining the security of your device'}</li>
            <li>{isArabic ? 'استخدام متصفح محدث وآمن' : 'Using an up-to-date and secure browser'}</li>
            <li>{isArabic ? 'عمل نسخ احتياطية من بياناتك بانتظام' : 'Regularly backing up your data'}</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '6. حقوقك' : '6. Your Rights'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{isArabic ? 'لديك الحقوق التالية فيما يتعلق ببياناتك:' : 'You have the following rights regarding your data:'}</p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>{isArabic ? 'الوصول: يمكنك الوصول إلى جميع بياناتك المخزنة في أي وقت' : 'Access: You can access all your stored data at any time'}</li>
            <li>{isArabic ? 'التعديل: يمكنك تحديث أو تعديل بياناتك في التطبيق' : 'Modification: You can update or modify your data in the application'}</li>
            <li>{isArabic ? 'الحذف: يمكنك حذف جميع بياناتك عن طريق مسح ذاكرة التخزين المؤقت للمتصفح' : 'Deletion: You can delete all your data by clearing your browser cache'}</li>
            <li>{isArabic ? 'التصدير: يمكنك تصدير بياناتك باستخدام ميزات التطبيق' : 'Export: You can export your data using application features'}</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '7. خصوصية الأطفال' : "7. Children's Privacy"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'خدمتنا غير موجهة للأطفال دون سن 13 عامًا. نحن لا نجمع عن قصد معلومات شخصية من الأطفال دون سن 13 عامًا.'
              : 'Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '8. التغييرات على سياسة الخصوصية' : '8. Changes to Privacy Policy'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات من خلال نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث".'
              : 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '9. الامتثال للقوانين' : '9. Compliance with Laws'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'نحن ملتزمون بالامتثال لجميع قوانين حماية البيانات المعمول بها، بما في ذلك اللائحة العامة لحماية البيانات (GDPR) وقانون خصوصية المستهلك في كاليفورنيا (CCPA).'
              : 'We are committed to complying with all applicable data protection laws, including GDPR and CCPA.'}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? '10. اتصل بنا' : '10. Contact Us'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            {isArabic
              ? 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:'
              : 'If you have any questions about this Privacy Policy, please contact us at:'}
          </p>
          <p className="font-medium">privacy@expensemanager.app</p>
        </CardContent>
      </Card>
    </div>
  );
}
