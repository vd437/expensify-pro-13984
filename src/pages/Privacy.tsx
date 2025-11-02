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
          {isArabic ? 'آخر تحديث: نوفمبر 2025' : 'Last updated: November 2025'}
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
            {isArabic ? '2.1 البيانات المخزنة على السحابة' : '2.1 Cloud-Stored Data'}
          </h3>
          <p>
            {isArabic
              ? 'يقوم التطبيق الآن بتخزين البيانات التالية بشكل آمن على خوادم Supabase السحابية:'
              : 'The application now securely stores the following data on Supabase cloud servers:'}
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>{isArabic ? 'سجلات النفقات والدخل' : 'Expense and income records'}</li>
            <li>{isArabic ? 'معلومات الميزانية' : 'Budget information'}</li>
            <li>{isArabic ? 'الفئات المخصصة' : 'Custom categories'}</li>
            <li>{isArabic ? 'تفضيلات الإعدادات (اللغة، العملة، السمة)' : 'Settings preferences (language, currency, theme)'}</li>
            <li>{isArabic ? 'معلومات حساب المستخدم والمصادقة' : 'User account and authentication information'}</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-foreground mb-2">
              {isArabic ? 'لماذا نخزن بياناتك على السحابة؟' : 'Why We Store Your Data in the Cloud'}
            </h4>
            <p className="mb-2">
              {isArabic
                ? 'قمنا بالانتقال إلى التخزين السحابي لتوفير تجربة أفضل وأكثر موثوقية:'
                : 'We moved to cloud storage to provide a better and more reliable experience:'}
            </p>
            <ul className="list-disc list-inside space-y-1.5 mr-4">
              <li>
                {isArabic
                  ? 'المزامنة عبر الأجهزة: الوصول إلى بياناتك من أي جهاز وفي أي مكان'
                  : 'Cross-Device Sync: Access your data from any device, anywhere'}
              </li>
              <li>
                {isArabic
                  ? 'النسخ الاحتياطي التلقائي: حماية بياناتك من الفقدان عند تلف الجهاز أو مسح ذاكرة التخزين المؤقت'
                  : 'Automatic Backup: Protect your data from loss due to device damage or cache clearing'}
              </li>
              <li>
                {isArabic
                  ? 'موثوقية محسّنة: بنية تحتية على مستوى المؤسسات مع وقت تشغيل يصل إلى 99.9%'
                  : 'Enhanced Reliability: Enterprise-grade infrastructure with 99.9% uptime'}
              </li>
              <li>
                {isArabic
                  ? 'ميزات متقدمة: تمكين التقارير التعاونية والمشاركة وإمكانيات التحليل المتقدمة'
                  : 'Advanced Features: Enable collaborative reports, sharing, and advanced analytics capabilities'}
              </li>
              <li>
                {isArabic
                  ? 'أمان محسّن: التشفير من طرف إلى طرف وأنظمة المصادقة الآمنة'
                  : 'Improved Security: End-to-end encryption and secure authentication systems'}
              </li>
            </ul>
          </div>

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
              ? 'نحن نتخذ أمان بياناتك على محمل الجد. يتم تخزين بياناتك بشكل آمن على خوادم Supabase مع تدابير الحماية التالية:'
              : 'We take the security of your data seriously. Your data is securely stored on Supabase servers with the following protections:'}
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>
              {isArabic
                ? 'التشفير أثناء النقل والتخزين: جميع البيانات مشفرة باستخدام معايير الصناعة'
                : 'Encryption in Transit and at Rest: All data is encrypted using industry standards'}
            </li>
            <li>
              {isArabic
                ? 'مصادقة آمنة: نظام مصادقة متقدم لحماية حسابك'
                : 'Secure Authentication: Advanced authentication system to protect your account'}
            </li>
            <li>
              {isArabic
                ? 'النسخ الاحتياطي المنتظم: نسخ احتياطية تلقائية لمنع فقدان البيانات'
                : 'Regular Backups: Automatic backups to prevent data loss'}
            </li>
            <li>
              {isArabic
                ? 'عزل البيانات: بياناتك معزولة ومحمية من المستخدمين الآخرين'
                : 'Data Isolation: Your data is isolated and protected from other users'}
            </li>
            <li>
              {isArabic
                ? 'الامتثال: يلتزم Supabase بمعايير SOC 2 Type II و ISO 27001'
                : 'Compliance: Supabase complies with SOC 2 Type II and ISO 27001 standards'}
            </li>
          </ul>
          <p className="mt-4 font-medium text-foreground">
            {isArabic
              ? 'ملاحظة: أنت مالك بياناتك بالكامل ويمكنك حذفها أو تصديرها في أي وقت.'
              : 'Note: You remain the full owner of your data and can delete or export it at any time.'}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isArabic ? '6. حقوقك' : '6. Your Rights'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{isArabic ? 'لديك الحقوق التالية فيما يتعلق ببياناتك:' : 'You have the following rights regarding your data:'}</p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>
              {isArabic
                ? 'الوصول: يمكنك الوصول إلى جميع بياناتك المخزنة في أي وقت من خلال حسابك'
                : 'Access: You can access all your stored data at any time through your account'}
            </li>
            <li>
              {isArabic
                ? 'التعديل: يمكنك تحديث أو تعديل بياناتك في التطبيق'
                : 'Modification: You can update or modify your data in the application'}
            </li>
            <li>
              {isArabic
                ? 'الحذف الكامل: يمكنك حذف حسابك وجميع البيانات المرتبطة به نهائيًا'
                : 'Complete Deletion: You can permanently delete your account and all associated data'}
            </li>
            <li>
              {isArabic
                ? 'التصدير: يمكنك طلب نسخة كاملة من بياناتك بتنسيق قابل للقراءة آليًا'
                : 'Export: You can request a complete copy of your data in a machine-readable format'}
            </li>
            <li>
              {isArabic
                ? 'إلغاء الموافقة: يمكنك سحب موافقتك على معالجة بياناتك في أي وقت'
                : 'Withdraw Consent: You can withdraw your consent to data processing at any time'}
            </li>
            <li>
              {isArabic
                ? 'النقل: يمكنك طلب نقل بياناتك إلى خدمة أخرى'
                : 'Portability: You can request to transfer your data to another service'}
            </li>
          </ul>
          <p className="mt-4">
            {isArabic
              ? 'لممارسة أي من هذه الحقوق، يرجى الاتصال بنا على: privacy@expensemanager.app'
              : 'To exercise any of these rights, please contact us at: privacy@expensemanager.app'}
          </p>
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
