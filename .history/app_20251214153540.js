const STORAGE_KEY = 'tech_gov_self_assessment_v2';

const sections = [
  "التنظيم الإداري والهيكلي",
  "المنتجات وإدارة تقنية المعلومات",
  "السياسات والإجراءات",
  "إدارة التغيير",
  "صلاحيات الدخول",
  "حوكمة البيانات الوطنية",
  "التحول الرقمي",
  "جودة المنتجات الرقمية",
  "التدريب والتوعية",
  "تطوير الحلول",
  "التدقيق",
  "الأنظمة الداخلية",
  "البنية التحتية",
  "تحليل البيانات",
  "الاعتبارات الأخرى",
  "العلاقة مع الإدارات الأخرى",
  "أسئلة وصفية إضافية"
];

// ====== Questions (1–130) ======
const questions = [
  // التنظيم الإداري والهيكلي
  { id: 1, section: "التنظيم الإداري والهيكلي", text: "هل يوجد هيكل تنظيمي معتمد لإدارة تقنية المعلومات؟" },
  { id: 2, section: "التنظيم الإداري والهيكلي", text: "هل يتم مراجعة وتحديث الهيكل التنظيمي بشكل دوري؟" },
  { id: 3, section: "التنظيم الإداري والهيكلي", text: "هل يوجد نائب لمدير إدارة التكنولوجيا والتحول الرقمي؟" },
  { id: 4, section: "التنظيم الإداري والهيكلي", text: "هل تم تحديد أدوار ومسؤوليات واضحة لكافة الأقسام داخل الإدارة؟" },
  { id: 5, section: "التنظيم الإداري والهيكلي", text: "هل توجد أوصاف وظيفية معتمدة لكل الموظفين؟" },
  { id: 6, section: "التنظيم الإداري والهيكلي", text: "هل يتم توثيق واعتماد الهيكل التنظيمي من الإدارة العليا؟" },
  { id: 7, section: "التنظيم الإداري والهيكلي", text: "هل يتم إشعار الموظفين بأي تعديلات في المهام أو الهيكل؟" },
  { id: 8, section: "التنظيم الإداري والهيكلي", text: "هل تمت مواءمة الهيكل التنظيمي مع أهداف التحول الرقمي؟" },

  // المنتجات وإدارة تقنية المعلومات
  { id: 9, section: "المنتجات وإدارة تقنية المعلومات", text: "هل يتم اتباع معايير ومعماريات واضحة عند تطوير أو اعتماد التطبيقات الجديدة؟" },
  { id: 10, section: "المنتجات وإدارة تقنية المعلومات", text: "هل توجد خطة دعم فني وصيانة دورية للتطبيقات والمنصات الحرجة؟" },
  { id: 11, section: "المنتجات وإدارة تقنية المعلومات", text: "هل يتم متابعة أداء التطبيقات باستخدام أدوات مراقبة وتحليل فني؟" },
  { id: 12, section: "المنتجات وإدارة تقنية المعلومات", text: "هل تتكامل التطبيقات الرقمية مع الأنظمة الداخلية والخارجية؟" },
  { id: 13, section: "المنتجات وإدارة تقنية المعلومات", text: "هل يتم اختبار توافق الأنظمة قبل الإطلاق أو التحديث؟" },
  { id: 14, section: "المنتجات وإدارة تقنية المعلومات", text: "هل يتم الاحتفاظ بسجل كامل لإصدارات التطبيقات والتحديثات؟" },
  { id: 15, section: "المنتجات وإدارة تقنية المعلومات", text: "هل يتم تقييم التطبيقات سنويًا من حيث الكفاءة والأداء؟" },
  { id: 16, section: "المنتجات وإدارة تقنية المعلومات", text: "هل توجد خطة بديلة للتشغيل في حال تعطل أحد الأنظمة الحرجة؟" },
  { id: 17, section: "المنتجات وإدارة تقنية المعلومات", text: "هل توجد سياسة إدارة دورة حياة التطبيقات (Lifecycle Management)؟" },

  // السياسات والإجراءات
  { id: 18, section: "السياسات والإجراءات", text: "هل توجد سياسة معتمدة لإدارة التكنولوجيا والتحول الرقمي؟" },
  { id: 19, section: "السياسات والإجراءات", text: "هل يتم مراجعة سياسة الإدارة التقنية وتحديثها سنويًا؟" },
  { id: 20, section: "السياسات والإجراءات", text: "هل توجد سياسة معتمدة لإدارة التطبيقات والمنصات الرقمية؟" },
  { id: 21, section: "السياسات والإجراءات", text: "هل توجد سياسة معتمدة لتوكيد الجودة؟" },
  { id: 22, section: "السياسات والإجراءات", text: "هل توجد سياسة معتمدة للبنية التحتية؟" },
  { id: 23, section: "السياسات والإجراءات", text: "هل توجد سياسة معتمدة لإدارة وتحليل البيانات تشمل الأدوار والمعايير؟" },
  { id: 24, section: "السياسات والإجراءات", text: "هل يتم مراجعة جميع السياسات التقنية وتحديثها بشكل دوري؟" },
  { id: 25, section: "السياسات والإجراءات", text: "هل يتم إشعار جميع الموظفين بالسياسات التقنية الجديدة؟" },
  { id: 26, section: "السياسات والإجراءات", text: "هل توجد آلية للتأكد من التزام الإدارات الأخرى بالسياسات التقنية؟" },
  { id: 27, section: "السياسات والإجراءات", text: "هل يتم اعتماد السياسات من لجنة مختصة قبل تطبيقها؟" },
  { id: 28, section: "السياسات والإجراءات", text: "هل تتم مراجعة السياسات من قبل الأمن السيبراني قبل الاعتماد؟" },

  // إدارة التغيير
  { id: 29, section: "إدارة التغيير", text: "هل يتم تصنيف التغييرات (طارئة – عادية – كبيرة) ولكل نوع مسار اعتماد مختلف؟" },
  { id: 30, section: "إدارة التغيير", text: "هل يتم أخذ موافقة رسمية قبل تنفيذ أي تغيير؟" },
  { id: 31, section: "إدارة التغيير", text: "هل يتم تسجيل تفاصيل التغييرات بشكل كامل؟" },
  { id: 32, section: "إدارة التغيير", text: "هل يتم تنفيذ التغييرات في بيئة اختبار قبل البيئة الفعلية؟" },
  { id: 33, section: "إدارة التغيير", text: "هل يتم فصل الصلاحيات بين المنفذ والموافق على التغيير؟" },
  { id: 34, section: "إدارة التغيير", text: "هل يتم تسجيل نتائج اختبار التغييرات قبل الإطلاق؟" },
  { id: 35, section: "إدارة التغيير", text: "هل يتم تقييم أثر التغيير على الأنظمة الأخرى قبل التنفيذ؟" },
  { id: 36, section: "إدارة التغيير", text: "هل توجد لجنة اعتماد للتغييرات التقنية؟" },
  { id: 37, section: "إدارة التغيير", text: "هل يتم الاحتفاظ بسجل لمراجعة ما بعد التنفيذ؟" },

  // صلاحيات الدخول
  { id: 38, section: "صلاحيات الدخول", text: "هل توجد سياسات لصلاحيات الوصول إلى قواعد البيانات؟" },
  { id: 39, section: "صلاحيات الدخول", text: "هل يتم إجراء فحص دوري للتأكد من مطابقة الصلاحيات للمهام؟" },
  { id: 40, section: "صلاحيات الدخول", text: "هل يتم منح المستخدمين الحد الأدنى من الصلاحيات فقط؟" },
  { id: 41, section: "صلاحيات الدخول", text: "هل يتم تعديل الصلاحيات فقط بموافقة الجهة المالكة للنظام؟" },
  { id: 42, section: "صلاحيات الدخول", text: "هل يتم الاحتفاظ بسجل واضح لطلبات الصلاحيات؟" },
  { id: 43, section: "صلاحيات الدخول", text: "هل يتم تفعيل تقارير دورية بالتعديلات على الصلاحيات؟" },
  { id: 44, section: "صلاحيات الدخول", text: "هل يتم استخدام نظام إدارة هوية موحد (IAM)؟" },
  { id: 45, section: "صلاحيات الدخول", text: "هل يتم مراجعة صلاحيات الحسابات العامة أو المشتركة؟" },
  { id: 46, section: "صلاحيات الدخول", text: "هل يتم تعطيل صلاحيات الموظفين فور انتهاء خدمتهم؟" },
  { id: 47, section: "صلاحيات الدخول", text: "هل يتم تفعيل المصادقة الثنائية (2FA) للوصول إلى الأنظمة الحساسة؟" },

  // حوكمة البيانات الوطنية
  { id: 48, section: "حوكمة البيانات الوطنية", text: "هل يوجد مسؤول بيانات محدد ومعتمد؟" },
  { id: 49, section: "حوكمة البيانات الوطنية", text: "هل تم تحديد مسؤوليات إدارة البيانات بوضوح؟" },
  { id: 50, section: "حوكمة البيانات الوطنية", text: "هل يتم تصنيف البيانات حسب أهميتها أو حساسيتها؟" },
  { id: 51, section: "حوكمة البيانات الوطنية", text: "هل يتم تنظيف وتحديث البيانات بشكل دوري؟" },
  { id: 52, section: "حوكمة البيانات الوطنية", text: "هل توجد استراتيجية لإدارة البيانات؟" },
  { id: 53, section: "حوكمة البيانات الوطنية", text: "هل توجد خطة لإدارة البيانات؟" },
  { id: 54, section: "حوكمة البيانات الوطنية", text: "هل يتم الالتزام بمتطلبات الهيئة الوطنية للأمن السيبراني (NCA)؟" },
  { id: 55, section: "حوكمة البيانات الوطنية", text: "هل يتم إعداد تقارير دورية عن جودة البيانات؟" },
  { id: 56, section: "حوكمة البيانات الوطنية", text: "هل يتم تطبيق معايير تصنيف البيانات الوطنية ؟" },
  { id: 57, section: "حوكمة البيانات الوطنية", text: "هل توجد سياسة احتفاظ وحذف بيانات واضحة؟" },
  { id: 58, section: "حوكمة البيانات الوطنية", text: "هل يتم التحقق من صحة البيانات قبل استخدامها في التقارير الرسمية؟" },

  // التحول الرقمي
  { id: 59, section: "التحول الرقمي", text: "هل توجد استراتيجية تحول رقمي مرتبطة بأهداف المنظمة؟" },
  { id: 60, section: "التحول الرقمي", text: "هل تشمل الاستراتيجية عناصر الابتكار والذكاء الاصطناعي؟" },
  { id: 61, section: "التحول الرقمي", text: "هل تم تضمين أولويات التحول الرقمي في الخطة الاستراتيجية؟" },
  { id: 62, section: "التحول الرقمي", text: "هل توجد خارطة طريق واضحة للتحول الرقمي؟" },
  { id: 63, section: "التحول الرقمي", text: "هل يتم قياس نضج التحول الرقمي دوريًا؟" },
  { id: 64, section: "التحول الرقمي", text: "هل يتم ربط مؤشرات التحول الرقمي بأهداف العمل؟" },
  { id: 65, section: "التحول الرقمي", text: "هل يتم رصد التقدم في مشاريع التحول الرقمي من خلال مؤشرات أداء؟" },
  { id: 66, section: "التحول الرقمي", text: "هل توجد لجنة أو وحدة مختصة بمتابعة التحول الرقمي؟" },
  { id: 67, section: "التحول الرقمي", text: "هل يتم إشراك المستخدمين النهائيين في تقييم مبادرات التحول الرقمي؟" },
  { id: 68, section: "التحول الرقمي", text: "هل توجد تقارير أداء رقمية تُعرض بشكل دوري على الإدارة العليا؟" },

  // جودة المنتجات الرقمية
  { id: 69, section: "جودة المنتجات الرقمية", text: "هل يتم اختبار تجربة المستخدم قبل الإطلاق؟" },
  { id: 70, section: "جودة المنتجات الرقمية", text: "هل توجد سياسات أو إجراءات معتمدة لتوكيد الجودة؟" },
  { id: 71, section: "جودة المنتجات الرقمية", text: "هل يتم تدريب موظفي الجودة بشكل دوري؟" },
  { id: 72, section: "جودة المنتجات الرقمية", text: "هل يتم مراجعة الخدمات الرقمية بناءً على رضا المستخدمين؟" },
  { id: 73, section: "جودة المنتجات الرقمية", text: "هل يتم توثيق نتائج اختبارات الجودة وحفظها؟" },
  { id: 74, section: "جودة المنتجات الرقمية", text: "هل يتم تقييم جودة البرمجيات وفق معايير محددة ؟" },
  { id: 75, section: "جودة المنتجات الرقمية", text: "هل يتم اختبار الأمن السيبراني ضمن اختبارات الجودة؟" },
  { id: 76, section: "جودة المنتجات الرقمية", text: "هل يتم جمع ملاحظات المستخدمين بعد الإطلاق لتحسين الخدمة؟" },
  { id: 77, section: "جودة المنتجات الرقمية", text: "هل توجد خطة تصحيحية للملاحظات المتكررة؟" },

  // التدريب والتوعية
  { id: 78, section: "التدريب والتوعية", text: "هل توجد خطة سنوية لتطوير القدرات الرقمية؟" },
  { id: 79, section: "التدريب والتوعية", text: "هل يتم تنفيذ برامج تدريبية دورية للموظفين؟" },
  { id: 80, section: "التدريب والتوعية", text: "هل يتم تشجيع الموظفين على الحصول على شهادات مهنية؟" },
  { id: 81, section: "التدريب والتوعية", text: "هل تتوفر مواد توجيهية لجميع الأنظمة الرقمية؟" },
  { id: 82, section: "التدريب والتوعية", text: "هل يتم توثيق جميع البرامج التدريبية؟" },
  { id: 83, section: "التدريب والتوعية", text: "هل توجد خطة تدريب تقنية إلزامية للموظفين الجدد؟" },
  { id: 84, section: "التدريب والتوعية", text: "هل يتم توثيق نسب المشاركة في الدورات التقنية؟" },
  { id: 85, section: "التدريب والتوعية", text: "هل يتم تقييم أثر التدريب على أداء الموظف؟" },
  { id: 86, section: "التدريب والتوعية", text: "هل توجد برامج توعوية داخلية حول أمن المعلومات؟" },

  // تطوير الحلول
  { id: 87, section: "تطوير الحلول", text: "هل يتم إعداد وثيقة تصميم الحلول بشكل موحد؟" },
  { id: 88, section: "تطوير الحلول", text: "هل يشارك المختصون من الأعمال والتقنية في اعتماد التصاميم؟" },
  { id: 89, section: "تطوير الحلول", text: "هل تُؤخذ اعتبارات الأمن السيبراني أثناء التصميم؟" },
  { id: 90, section: "تطوير الحلول", text: "هل يتم تقييم البدائل التقنية قبل الاعتماد؟" },
  { id: 91, section: "تطوير الحلول", text: "هل يتم اتباع منهجية تطوير معتمدة وواضحة؟" },
  { id: 92, section: "تطوير الحلول", text: "هل يتم إشراك المستخدمين النهائيين في اختبار الحلول قبل الإطلاق؟" },
  { id: 93, section: "تطوير الحلول", text: "هل يتم الاحتفاظ بسجلات الأخطاء البرمجية ومتابعتها حتى الإغلاق؟" },
  { id: 94, section: "تطوير الحلول", text: "هل يتم اعتماد الحلول النهائية بعد التحقق من مطابقتها لمتطلبات العمل؟" },
  { id: 95, section: "تطوير الحلول", text: "هل يتم تحليل الجدوى الفنية والمالية قبل البدء في التطوير؟" },

  // التدقيق
  { id: 96, section: "التدقيق", text: "هل تخضع الأنظمة الرقمية لتدقيق دوري؟" },
  { id: 97, section: "التدقيق", text: "هل يتم حفظ تقارير التدقيق الفني؟" },
  { id: 98, section: "التدقيق", text: "هل يتم مراجعة نتائج التدقيق واتخاذ الإجراءات التصحيحية؟" },
  { id: 99, section: "التدقيق", text: "هل يتم رفع نتائج التدقيق للإدارة العليا ومتابعة التوصيات؟" },
  { id: 100, section: "التدقيق", text: "هل يتم مراجعة نتائج التدقيق مع إدارة الأمن السيبراني؟" },
  { id: 101, section: "التدقيق", text: "هل يتم حفظ أدلة التحقق ضمن ملفات التدقيق السنوية؟" },

  // الأنظمة الداخلية
  { id: 102, section: "الأنظمة الداخلية", text: "هل يتم تحديث الأنظمة الرقمية عند وجود تغييرات تنظيمية؟" },
  { id: 103, section: "الأنظمة الداخلية", text: "هل يتم اختبار الامتثال قبل إطلاق أي منتج رقمي؟" },
  { id: 104, section: "الأنظمة الداخلية", text: "هل يتم مراجعة صلاحيات المستخدمين الحساسين؟" },
  { id: 105, section: "الأنظمة الداخلية", text: "هل يتم تقييم أداء المنصات بانتظام؟" },
  { id: 106, section: "الأنظمة الداخلية", text: "هل توجد آلية لمعالجة الأعطال وتوثيقها؟" },
  { id: 107, section: "الأنظمة الداخلية", text: "هل يتم اختبار أداء الأنظمة قبل وبعد التحديثات؟" },
  { id: 108, section: "الأنظمة الداخلية", text: "هل يتم تطبيق آلية توثيق للأعطال التقنية وأسبابها؟" },
  { id: 109, section: "الأنظمة الداخلية", text: "هل يتم تقييم فاعلية أنظمة التشغيل الداخلي سنويًا؟" },
  { id: 110, section: "الأنظمة الداخلية", text: "هل يتم تحديد الأنظمة الحساسة وإعطاؤها أولوية في الصيانة؟" },

  // البنية التحتية
  { id: 111, section: "البنية التحتية", text: "هل توجد خطة نسخ احتياطي واستعادة بيانات؟" },
  { id: 112, section: "البنية التحتية", text: "هل يوجد مركز بيانات احتياطي؟" },
  { id: 113, section: "البنية التحتية", text: "هل يتم تطبيق التحديثات الأمنية بانتظام؟" },
  { id: 114, section: "البنية التحتية", text: "هل يتم مراقبة أداء البنية التحتية آليًا؟" },
  { id: 115, section: "البنية التحتية", text: "هل توجد حلول لمراقبة الشبكات والكشف عن الأعطال؟" },

  // تحليل البيانات
  { id: 116, section: "تحليل البيانات", text: "هل تُستخدم أدوات تحليل بيانات وذكاء أعمال؟" },
  { id: 117, section: "تحليل البيانات", text: "هل يتم تحديث التقارير ولوحات التحكم بناءً على متطلبات العمل؟" },
  { id: 118, section: "تحليل البيانات", text: "هل توجد معايير تصميم معتمدة للتحليلات؟" },
  { id: 119, section: "تحليل البيانات", text: "هل يتم تقييم أداء الأدوات التحليلية بانتظام؟" },
  { id: 120, section: "تحليل البيانات", text: "هل يتم التكامل بين أدوات التحليل والأنظمة التشغيلية؟" },

  // الاعتبارات الأخرى
  { id: 121, section: "الاعتبارات الأخرى", text: "هل يتم مراقبة التكاليف التشغيلية للمشاريع التقنية؟" },
  { id: 122, section: "الاعتبارات الأخرى", text: "هل يتم تخصيص ميزانية للتحول الرقمي؟" },
  { id: 123, section: "الاعتبارات الأخرى", text: "هل يتم تقييم كفاءة استهلاك الطاقة في مراكز البيانات؟" },
  { id: 124, section: "الاعتبارات الأخرى", text: "هل يتم مراجعة العقود مع مزودي الخدمات التقنية لضمان الامتثال؟" },
  { id: 125, section: "الاعتبارات الأخرى", text: "هل يتم تطبيق سياسات الخصوصية على جميع الأنظمة؟" },

  // العلاقة مع الإدارات الأخرى
  { id: 126, section: "العلاقة مع الإدارات الأخرى", text: "هل يتم إشراك إدارة التقنية في المشاريع قبل التنفيذ؟" },
  { id: 127, section: "العلاقة مع الإدارات الأخرى", text: "هل توجد قناة تواصل واضحة مع إدارة الأمن السيبراني؟" },
  { id: 128, section: "العلاقة مع الإدارات الأخرى", text: "هل توجد قناة تواصل واضحة مع إدارة المنتجات؟" },
  { id: 129, section: "العلاقة مع الإدارات الأخرى", text: "هل يتم الرد على الاستفسارات التقنية خلال فترة محددة؟" },
  { id: 130, section: "العلاقة مع الإدارات الأخرى", text: "هل يتم تسجيل ومعالجة البلاغات ضمن نظام موحد؟" }
];

const openQuestions = [
  { key: 'tasks', label: 'ماهي المهام والمسؤوليات التي تقوم بها الإدارة؟ وهل هي معتمدة من جهة الصلاحية؟' },
  { key: 'subDepts', label: 'ماهي الإدارات و/أو الأقسام التابعة للإدارة؟' },
  { key: 'policies', label: 'هل يوجد سياسات وإجراءات معتمدة للإدارة  وللأقسام التابعة؟ في حال كانت الإجابة بنعم فالرجاء تزويدنا بتفاصيلها، وإذا كانت الإجابة بلا فما هي الأسباب؟' },
  { key: 'otherPolicies', label: 'هل يوجد أي سياسات و/أو إجراءات عمل لإدارات أخرى تؤثر على أعمال الإدارة أو تتقاطع معها؟ في حال كانت الإجابة بنعم فالرجاء ذكرها بالتفصيل.' },
  { key: 'certs', label: 'هل يوجد أي من موظفي وموظفات الإدارة او الأقسام التابعة لها حاصل على زمالات / شهادات مهنية؟ يرجى ذكر الأسماء واسم الزمالات / الشهادات.' },
  { key: 'staffCount', label: 'ما هو العدد الحالي لموظفي وموظفات الإدارة و الأقسام التابعة لها؟ يرجى تزويدنا بكشف بأسماء جميع الموظفين والموظفات ومسمياتهم الوظيفية؟' },
  { key: 'targetHiring', label: 'ما هو العدد المستهدف والمعتمد للتوظيف بالإدارة و الأقسام التابعة لها خلال العام 2025 م لكلا الجنسين؟ وما هو معدل التوظيف منها حتى الآن؟ يرجى تزويدنا بتفاصيل الوظائف ونسبة الشواغر منها لكل وظيفة؟' },
  { key: 'trainingPlan', label: 'هل يوجد خطة تدريب متخصصة لموظفي الإدارة و الأقسام التابعة لها ومعتمدة لعام 2025 م؟ في حال كانت الإجابة بنعم فالرجاء تزويدنا بها، وفي حال كانت الإجابة بلا فما هي الأسباب؟' },
  { key: 'outsourcing', label: 'هل يتم اسناد أي من اعمال الإدارة لجهات خارجية مثل الترجمة او الاستشارات من قبل مكاتب خارجية؟ نأمل تزويدنا بالتفاصيل؟' },
  { key: 'notes', label: 'أي ملاحظات ترغبون في إضافتها:' },
  { key: 'sign', label: 'اسم المسؤول عن تعبئة الاستبانة / المنصب الوظيفي / التاريخ:' }
];

// ====== STATE ======
let state = {
  answers: {}, // id -> {answer, reason, attachment}
  open: {},    // key -> text
  dark: false
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load state', e);
  }
  if (state.dark) {
    document.body.classList.add('dark');
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clearState() {
  if (!confirm('سيتم مسح جميع البيانات المخزنة محليًا، هل أنت متأكد؟')) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// ====== RENDER ======

const navEl = document.getElementById('section-nav');
const containerEl = document.getElementById('section-container');

let currentSection = sections[0];

function renderNav() {
  navEl.innerHTML = '';
  sections.forEach(sec => {

    let total = 0;
let answered = 0;

if (sec === "أسئلة وصفية إضافية") {
  total = openQuestions.length;

  answered = openQuestions.filter(q => {
    const val = state.open[q.key];
    return val && val.trim().length > 0;
  }).length;
} else {
  total = questions.filter(q => q.section === sec).length;

  answered = questions.filter(
    q => q.section === sec &&
         state.answers[q.id] &&
         state.answers[q.id].answer
  ).length;
}

li.innerHTML = `<span>${sec}</span><span>${answered}/${total}</span>`;

    const li = document.createElement('li');
    li.className = 'nav-item' + (sec === currentSection ? ' active' : '');
    const total = questions.filter(q => q.section === sec).length;
    const answered = questions.filter(q => q.section === sec && state.answers[q.id] && state.answers[q.id].answer).length;
    li.innerHTML = `<span>${sec}</span><span>${answered}/${total || ''}</span>`;
    li.onclick = () => {
      currentSection = sec;
      renderNav();
      renderSection();
    };
    navEl.appendChild(li);
  });
}

function renderSection() {
  containerEl.innerHTML = '';

  if (currentSection === 'أسئلة وصفية إضافية') {
    renderOpenQuestions();
    return;
  }

  const secQuestions = questions.filter(q => q.section === currentSection);

  const wrapper = document.createElement('div');

  const header = document.createElement('div');
  header.className = 'section-header';

  const title = document.createElement('div');
  title.innerHTML = `<h2>${currentSection}</h2><p>اختر "نعم" أو "لا" أو "لا أعلم"، وأضف الأسباب ورقم المرفق عند الحاجة.</p>`;

  const info = document.createElement('div');
  const total = secQuestions.length;
  const answered = secQuestions.filter(q => state.answers[q.id] && state.answers[q.id].answer).length;
  info.innerHTML = `<span class="badge">${answered} / ${total} تمت الإجابة</span>`;

  header.appendChild(title);
  header.appendChild(info);
  wrapper.appendChild(header);

  secQuestions.forEach(q => {
    const ans = state.answers[q.id] || {};

    const card = document.createElement('div');
    card.className = 'question-card';

    const qh = document.createElement('div');
    qh.className = 'question-header';
    const qt = document.createElement('div');
    qt.className = 'question-title';
    qt.textContent = q.text;
    const meta = document.createElement('div');
    meta.className = 'question-meta';
    meta.textContent = `سؤال رقم ${q.id}`;
    qh.appendChild(qt);
    qh.appendChild(meta);

    const answerRow = document.createElement('div');
    answerRow.className = 'answer-row';

    ['yes', 'no', 'na'].forEach(type => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q_${q.id}`;
      input.value = type;
      if (ans.answer === type) input.checked = true;
      input.onchange = () => {
        state.answers[q.id] = state.answers[q.id] || {};
        state.answers[q.id].answer = type;
        saveState();
        renderNav();
        if (currentSection === '__SUMMARY__') renderSummary();
      };
      const text = type === 'yes' ? 'نعم' : type === 'no' ? 'لا' : 'لا أعلم';
      label.appendChild(input);
      label.appendChild(document.createTextNode(text));
      answerRow.appendChild(label);
    });

    const inputsRow = document.createElement('div');
    inputsRow.className = 'inputs-row';

    const reason = document.createElement('textarea');
    reason.placeholder = 'الأسباب / توضيحات (اختياري)';
    reason.value = ans.reason || '';
    reason.oninput = () => {
      state.answers[q.id] = state.answers[q.id] || {};
      state.answers[q.id].reason = reason.value;
      saveState();
    };

    const attachment = document.createElement('input');
    attachment.type = 'text';
    attachment.placeholder = 'رقم المرفق';
    attachment.value = ans.attachment || '';
    attachment.oninput = () => {
      state.answers[q.id] = state.answers[q.id] || {};
      state.answers[q.id].attachment = attachment.value;
      saveState();
    };

    inputsRow.appendChild(reason);
    inputsRow.appendChild(attachment);

    card.appendChild(qh);
    card.appendChild(answerRow);
    card.appendChild(inputsRow);
    wrapper.appendChild(card);
  });

  containerEl.appendChild(wrapper);
}

function renderOpenQuestions() {
  const wrapper = document.createElement('div');

  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = `
    <div>
      <h2>أسئلة وصفية إضافية</h2>
      <p>يرجى الإجابة على الأسئلة التالية بشكل وصفي ومفصل.</p>
    </div>
  `;
  wrapper.appendChild(header);

  openQuestions.forEach(item => {
    const card = document.createElement('div');
    card.className = 'question-card';

    const qh = document.createElement('div');
    qh.className = 'question-header';
    const qt = document.createElement('div');
    qt.className = 'question-title';
    qt.textContent = item.label;
    qh.appendChild(qt);

    const ta = document.createElement('textarea');
    ta.style.minHeight = '80px';
    ta.value = state.open[item.key] || '';
    ta.oninput = () => {
      state.open[item.key] = ta.value;
      saveState();
    };

    card.appendChild(qh);
    card.appendChild(ta);
    wrapper.appendChild(card);
  });

  containerEl.appendChild(wrapper);
}

function computeSummary() {
  const bySection = {};
  sections.forEach(sec => {
    if (sec === 'أسئلة وصفية إضافية') return;
    const secQs = questions.filter(q => q.section === sec);
    let yes = 0, no = 0, na = 0;
    secQs.forEach(q => {
      const ans = state.answers[q.id];
      if (!ans || !ans.answer) return;
      if (ans.answer === 'yes') yes++;
      else if (ans.answer === 'no') no++;
      else na++;
    });
    bySection[sec] = { total: secQs.length, yes, no, na };
  });
  return bySection;
}

function renderSummary() {
  currentSection = '__SUMMARY__';
  navEl.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  containerEl.innerHTML = '';

  const wrapper = document.createElement('div');
  const header = document.createElement('div');
  header.className = 'section-header';

  const totalQuestions = questions.length;
  const answered = questions.filter(q => state.answers[q.id] && state.answers[q.id].answer).length;

  header.innerHTML = `
    <div>
      <img src="logo.png" alt="Tasheer" class="summary-logo" />
      <h2>ملخص الالتزام</h2>
      <p>نظرة عامة على حالة الإجابة حسب الأقسام.</p>
    </div>
    <div>
      <span class="badge">إجمالي الأسئلة: ${totalQuestions}</span>
      <span class="badge" style="margin-inline-start:4px;">تمت الإجابة: ${answered}</span>
    </div>
  `;
  wrapper.appendChild(header);

  const summary = computeSummary();
  const grid = document.createElement('div');
  grid.className = 'summary-grid';

  Object.entries(summary).forEach(([sec, stats]) => {
    const card = document.createElement('div');
    card.className = 'summary-card';
    const yesPct = stats.total ? Math.round((stats.yes / stats.total) * 100) : 0;
    const noPct = stats.total ? Math.round((stats.no / stats.total) * 100) : 0;
    const naPct = stats.total ? Math.round((stats.na / stats.total) * 100) : 0;

    card.innerHTML = `
      <h3>${sec}</h3>
      <p>إجمالي الأسئلة: ${stats.total}</p>
      <div class="summary-stats">
        <span class="stat-pill" style="background:rgba(22,163,74,0.12);color:#166534;">نعم: <strong>${stats.yes}</strong> (${yesPct}%)</span>
        <span class="stat-pill" style="background:rgba(220,38,38,0.08);color:#b91c1c;">لا: <strong>${stats.no}</strong> (${noPct}%)</span>
        <span class="stat-pill" style="background:rgba(234,179,8,0.12);color:#92400e;">لا أعلم: <strong>${stats.na}</strong> (${naPct}%)</span>
      </div>
    `;

    grid.appendChild(card);
  });

  wrapper.appendChild(grid);
  containerEl.appendChild(wrapper);
}

// ====== EXPORT / IMPORT / PRINT / DARK ======

function exportJSON() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const now = new Date().toISOString().split('T')[0];
  a.href = url;
  a.download = `tech_gov_self_assessment_${now}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || typeof data !== 'object') throw new Error('Bad format');
      state = data;
      saveState();
      alert('تم استيراد البيانات بنجاح ✅');
      renderSection();
      renderNav();
    } catch (err) {
      console.error(err);
      alert('تعذر استيراد الملف. تأكد من أن التنسيق صحيح.');
    }
  };
  reader.readAsText(file, 'utf-8');
}

function printPage() {
  window.print();
}

function toggleDarkMode() {
  state.dark = !state.dark;
  if (state.dark) document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  saveState();
}

// ====== INIT ======

loadState();

const btnClear = document.getElementById('btn-clear');
const btnExport = document.getElementById('btn-export');
const btnSummary = document.getElementById('btn-summary');
const btnPrint = document.getElementById('btn-print');
const btnDark = document.getElementById('btn-dark');
const importInput = document.getElementById('import-file');

btnClear.onclick = clearState;
btnExport.onclick = exportJSON;
btnSummary.onclick = renderSummary;
btnPrint.onclick = printPage;
btnDark.onclick = toggleDarkMode;
importInput.onchange = (e) => {
  const file = e.target.files[0];
  if (file) importJSON(file);
};

renderNav();
renderSection();

// Splash hide after 1.5s
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('hidden');
  }, 1500);
});


const SETTINGS_KEY = "appearance_settings";
let appearance = {};

function loadAppearance() {
  const saved = localStorage.getItem(SETTINGS_KEY);
  if (!saved) return;

  appearance = JSON.parse(saved);

  // Global font size & color
  document.documentElement.style.setProperty("--text-main", appearance.fontColor);
  document.body.style.fontSize = appearance.fontSize + "px";

  // Sidebar
  document.documentElement.style.setProperty("--sidebar-bg", appearance.sidebarBg);
  document.documentElement.style.setProperty("--sidebar-text", appearance.sidebarText);

  // Sidebar Menu Items
  const sidebarItems = document.querySelectorAll(".nav-item");
  sidebarItems.forEach(item => {
    item.style.fontSize = appearance.sidebarFontSize + "px";
    item.style.fontWeight = appearance.sidebarFontWeight;
  });

  // Logo replacement
  if (appearance.logoBase64) {
    const logos = document.querySelectorAll("img.header-logo, img.summary-logo");
    logos.forEach(img => img.src = appearance.logoBase64);
  }
}

window.addEventListener("load", () => {
  loadAppearance();
});


function printAttachments() {
  let html = `
    <html dir="rtl">
    <head>
      <title>Attachments Report</title>
      <style>
        body { font-family: Cairo, sans-serif; padding: 20px; }
        h2 { text-align: center; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 10px; font-size: 14px; }
        th { background: #1f4f8f; color: white; }
      </style>
    </head>
    <body>
      <h2>Attachment Report</h2>
      <table>
        <tr>
          <th>Question #</th>
          <th>Question Text</th>
          <th>Attachment #</th>
          <th>Reason</th>
        </tr>
  `;

  questions.forEach(q => {
    const ans = state.answers[q.id];
    if (ans && ans.attachment) {
      html += `
        <tr>
          <td>${q.id}</td>
          <td>${q.text}</td>
          <td>${ans.attachment}</td>
          <td>${ans.reason || ""}</td>
        </tr>
      `;
    }
  });

  html += `
      </table>
    </body>
    </html>
  `;

  const printWindow = window.open("", "_blank");
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.print();
}

document.getElementById("btn-print-attachments").onclick = printAttachments;




// ✅ Updated Function: Show Report + “Save as PDF” Button
function ShowFullReport() {
  const today = new Date().toLocaleDateString('ar-SA'); // or your preferred format
  const watermarkText = (appearance && appearance.watermarkText) || "CONFIDENTIAL";

  let html = `
    <html dir="rtl">
    <head>
      <title>Full Compliance Report</title>

      <!-- jsPDF + html2canvas CDN -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

      <style>
        body {
          font-family: Cairo, sans-serif;
          padding: 30px;
          line-height: 1.6;
          color: #1f2430;
          background: #f5f7fb;
        }

        /* PDF page setup */
        @page {
          size: A4 landscape;
          margin: 20mm;
        }

        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        h1 {
          text-align: center;
          margin-bottom: 10px;
          font-size: 30px;
        }

        h2 {
          background: #1f4f8f;
          color: white;
          padding: 10px 16px;
          border-radius: 6px;
          margin-top: 30px;
          font-size: 18px;
          -webkit-print-color-adjust: exact !important;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
          margin-bottom: 20px;
          background: white;
        }

        th, td {
          border: 1px solid #ccc;
          padding: 8px 10px;
          font-size: 13px;
          vertical-align: top;
          page-break-inside: avoid;
          break-inside: avoid;
        }

        th {
          background: #e8eff8;
          font-weight: 600;
          -webkit-print-color-adjust: exact !important;
        }

        tr {
          page-break-inside: avoid;
          break-inside: avoid;
        }

        .logo {
          width: 160px;
          display: block;
          margin: 0 auto 10px;
        }

        .cover-page {
          background: white;
          border-radius: 12px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
          text-align: center;
        }

        .cover-title {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .cover-subtitle {
          font-size: 20px;
          margin-bottom: 20px;
          color: #555;
        }

        .cover-meta {
          margin-top: 30px;
          font-size: 16px;
        }

        .content-card {
          background: white;
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 24px;
          box-shadow: 0 0 10px rgba(0,0,0,0.03);
        }


/* SUPER NARROW Footer */
.print-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 22px;                     /* ↓ much smaller */
  padding: 2px 20px;                /* ↓ minimal padding */
  background: #f0f4fb;
  border-top: 1px solid #d4dde9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;                   /* ↓ smaller */
  z-index: 1000;
}



        /* Page number using CSS counters (works in modern browsers) */
        .page-number::after {
          content: "Page " counter(page) " of " counter(pages);
        }

        /* Fix content so it never overlaps header/footer */
@media print {
  body {
    margin-top: 10px !important;     /* should be slightly bigger than header height */
    margin-bottom: 5px !important;  /* should be slightly bigger than footer height */
  }
}


        @media print {
          body {
            margin-top: 1px;   /* space for header */
            margin-bottom: 1px; /* space for footer */
            background: white;
          }

          #toolbar {
            display: none !important;
          }

          .content-card,
          .cover-page {
            box-shadow: none;
          }
        }

        /* On screen toolbar */
        #toolbar {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .toolbar-btn {
          padding: 10px 20px;
          background: #1f4f8f;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
        }

        .toolbar-btn.secondary {
          background: #4a6faf;
        }

        .toolbar-btn:hover {
          opacity: 0.9;
        }

        /* Watermark */
        .watermark {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-25deg);
          font-size: 64px;
          color: rgba(180, 180, 180, 0.2);
          z-index: 0;
          pointer-events: none;
          white-space: nowrap;
        }

        /* Wrap all report content (for html2canvas) */
        #reportContainer {
          position: relative;
          z-index: 1;
        }
      </style>
    </head>

    <body>
      <!-- Repeating header -->


      <!-- Repeating footer with page number -->
      <div class="print-footer">
        <div>Prepared by: ${appearance.orgName || "Enterprise architecture (EA) Department"}</div>
        <div class="page-number"></div>
      </div>

      <!-- Watermark -->
      <div class="watermark">${watermarkText}</div>

      <div id="reportContainer">
        <!-- COVER PAGE -->
        <div class="cover-page">
          <img src="${appearance.logoBase64 || 'logo.png'}" class="logo" />
          <div class="cover-title">Compliance Full Report</div>
          <div class="cover-subtitle">${appearance.orgName || "Enterprise architecture (EA) Department"}</div>

          <div class="cover-meta">
            <p>التاريخ: ${today}</p>
            <p>إعداد: ${appearance.preparedBy || "إدارة البنية المؤسسية"}</p>
          </div>
        </div>

        <!-- Force cover page to end here in print -->
        <div style="page-break-after: always;"></div>

        <!-- MAIN CONTENT -->
        <div class="content-card">
          <h1>Compliance Full Report</h1>
        </div>
  `;

  sections.forEach(sec => {
    if (sec === "أسئلة وصفية إضافية") return;

    html += `
      <div class="content-card">
        <h2>${sec}</h2>
        <table>
          <tr>
            <th>Question #</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Reason</th>
            <th>Attachment</th>
          </tr>
    `;

    questions
      .filter(q => q.section === sec)
      .forEach(q => {
        const ans = state.answers[q.id] || {};
        const answerText =
          ans.answer === "yes"
            ? "نعم"
            : ans.answer === "no"
            ? "لا"
            : ans.answer === "na"
            ? "لا أعلم"
            : "";

        html += `
          <tr>
            <td>${q.id}</td>
            <td>${q.text}</td>
            <td>${answerText}</td>
            <td>${ans.reason || ""}</td>
            <td>${ans.attachment || ""}</td>
          </tr>
        `;
      });

    html += `
        </table>
      </div>
    `;
  });

  // Toolbar + scripts
  html += `
      <div id="toolbar">
        <button id="savePdfBtn" class="toolbar-btn">💾 حفظ كملف PDF (طباعة المتصفح)</button>
        <button id="generatePdfBtn" class="toolbar-btn secondary">📄 إنشاء PDF مباشر (jsPDF)</button>
      </div>

      <script>
        // Wait until DOM is ready in the new window
        window.onload = function () {
          var saveBtn = document.getElementById('savePdfBtn');
          var genBtn = document.getElementById('generatePdfBtn');

          if (saveBtn) {
            saveBtn.addEventListener('click', function () {
              window.print();
            });
          }

          if (genBtn) {
            genBtn.addEventListener('click', function () {
              var element = document.getElementById('reportContainer');
              if (!element) return;

              // Use html2canvas + jsPDF
              html2canvas(element, {
                scale: 2,
                useCORS: true
              }).then(function (canvas) {
                var imgData = canvas.toDataURL('image/png');
                var pdf = new jspdf.jsPDF('l', 'pt', 'a4');

                var pageWidth = pdf.internal.pageSize.getWidth();
                var pageHeight = pdf.internal.pageSize.getHeight();

                var imgWidth = pageWidth;
                var imgHeight = canvas.height * imgWidth / canvas.width;

                var heightLeft = imgHeight;
                var position = 0;

                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft > 0) {
                  position = heightLeft - imgHeight;
                  pdf.addPage();
                  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                  heightLeft -= pageHeight;
                }

                pdf.save('Compliance_Report.pdf');
              });
            });
          }
        };
      </script>

    </body>
    </html>
  `;

  const win = window.open("", "_blank");
  win.document.write(html);
  win.document.close();
}


document.getElementById("btn-Show-full").onclick = ShowFullReport;


// 🟩 STEP 2 — Add this FULL REPORT function 



function printFullReport() {
  const today = new Date().toLocaleDateString('ar-SA');

  // sections used in the report (exclude descriptive extra section)
  const contentSections = sections.filter(sec => sec !== "أسئلة وصفية إضافية");

  // ---- 1) Build per-section summary ----
  const sectionSummary = {};
  contentSections.forEach(sec => {
    const secQs = questions.filter(q => q.section === sec);
    let yes = 0, no = 0, na = 0;
    secQs.forEach(q => {
      const ans = state.answers[q.id];
      if (!ans || !ans.answer) return;
      if (ans.answer === "yes") yes++;
      else if (ans.answer === "no") no++;
      else na++;
    });
    const total = secQs.length;
    sectionSummary[sec] = {
      total,
      yes,
      no,
      na,
      yesPct: total ? Math.round((yes / total) * 100) : 0,
      noPct: total ? Math.round((no / total) * 100) : 0,
      naPct: total ? Math.round((na / total) * 100) : 0
    };
  });

  // ---- 2) Compute logical page numbers for TOC ----
  // Page 1 = Cover, Page 2 = TOC
  // Page 3.. = sections, last page = attachments section
  const tocPages = {};
  let pageCounter = 3;
  contentSections.forEach(sec => {
    tocPages[sec] = pageCounter;
    pageCounter++;
  });
  const attachmentsPage = pageCounter; // last page for attachments section

  // ---- 3) Build HTML ----
  let html = `
    <html dir="rtl">
    <head>
      <meta charset="UTF-8" />
      <title>معاينة التقرير – قطاع التكنولوجيا والتحول الرقمي – تأشـيـر</title>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet">
      <style>
        @page {
          size: A4 landscape;
          margin: 15mm;
        }

        * { box-sizing: border-box; }

        body {
          font-family: 'Cairo', sans-serif;
          padding: 32px;
          line-height: 1.7;
          color: #111827;
          background: #f5f7fb;
        }

        .watermark {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-25deg);
          font-size: 80px;
          color: rgba(15, 23, 42, 0.06);
          z-index: -1;
          pointer-events: none;
          white-space: nowrap;
        }

        .page-break { page-break-before: always; }

        .cover {
          text-align: center;
          margin-top: 80px;
        }

        .cover-logo {
          width: 220px;
          margin-bottom: 24px;
        }

        .cover-title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 12px;
          color: #0f172a;
        }

        .cover-sub {
          font-size: 16px;
          color: #4b5563;
        }

        .cover-date {
          margin-top: 24px;
          font-size: 14px;
          color: #6b7280;
        }

        .export-wrapper {
          text-align: center;
          margin-top: 40px;
        }

        #savePdfBtn {
          display: inline-block;
          padding: 12px 26px;
          background: #1f4f8f;
          color: #ffffff;
          border-radius: 999px;
          font-size: 16px;
          cursor: pointer;
          border: none;
        }

        #savePdfBtn:hover {
          background: #163a6c;
        }

        .toc-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 14px;
          color: #111827;
        }

        .toc-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          font-size: 15px;
        }

        .toc-table th, .toc-table td {
          border: 1px solid #d1d5db;
          padding: 8px 10px;
        }

        .toc-table th {
          background: #e5edf9;
          font-weight: 700;
        }

        .toc-table td.page {
          text-align: center;
          width: 60px;
        }

        h2.section-title {
          background: #1f4f8f;
          color: white;
          padding: 10px 14px;
          border-radius: 8px;
          margin-top: 32px;
          font-size: 18px;
        }

        .section-summary {
          margin-top: 10px;
          margin-bottom: 10px;
          font-size: 13px;
          color: #374151;
        }

        .section-summary span {
          display: inline-block;
          margin-inline-end: 8px;
          padding: 3px 10px;
          border-radius: 999px;
          background: #f3f4f6;
        }

        .section-summary .yes {
          background: rgba(22, 163, 74, 0.12);
          color: #166534;
        }

        .section-summary .no {
          background: rgba(220, 38, 38, 0.12);
          color: #b91c1c;
        }

        .section-summary .na {
          background: rgba(234, 179, 8, 0.12);
          color: #92400e;
        }

        table.data {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          margin-bottom: 18px;
          font-size: 13px;
          background: #ffffff;
        }

        table.data th, table.data td {
          border: 1px solid #d1d5db;
          padding: 8px;
          vertical-align: top;
        }

        table.data th {
          background: #e7eef8;
          font-weight: 700;
        }

        table.data tr:nth-child(even) td {
          background: #f9fafb;
        }

        .answer-yes {
          background: rgba(22, 163, 74, 0.08);
          color: #166534;
          font-weight: 600;
          text-align: center;
        }

        .answer-no {
          background: rgba(220, 38, 38, 0.08);
          color: #b91c1c;
          font-weight: 600;
          text-align: center;
        }

        .answer-na {
          background: rgba(234, 179, 8, 0.08);
          color: #92400e;
          font-weight: 600;
          text-align: center;
        }

        .attachments-note {
          font-size: 13px;
          color: #4b5563;
          margin-top: 6px;
        }

        @media print {
          #savePdfBtn {
            display: none;
          }
          body {
            background: white;
          }
        }
      </style>
    </head>
    <body>
      <div class="watermark">TASHEER (D&T)</div>

      <!-- COVER PAGE (page 1) -->
      <div class="cover">
        <img src="${(typeof appearance !== 'undefined' && appearance.logoBase64) ? appearance.logoBase64 : 'logo.png'}" class="cover-logo" />
        <div class="cover-title">تقرير تقييم الالتزام – قطاع التكنولوجيا والتحول الرقمي – تأشـيـر</div>
        <div class="cover-sub">تقرير التقييم الذاتي للحوكمة والتشغيل الرقمي</div>
        <div class="cover-date">تاريخ التقرير: ${today}</div>
      </div>


      <!-- TABLE OF CONTENTS (page 2) -->
      <div class="page-break"></div>
      <h2 class="toc-title">جدول المحتويات</h2>
      <table class="toc-table">
        <tr>
          <th>م</th>
          <th>القسم</th>
          <th class="page">رقم الصفحة</th>
        </tr>
  `;

  contentSections.forEach((sec, idx) => {
    const page = tocPages[sec];
    html += `
      <tr>
        <td>${idx + 1}</td>
        <td>${sec}</td>
        <td class="page">${page}</td>
      </tr>
    `;
  });

  // Attachments row in TOC
  html += `
      <tr>
        <td>${contentSections.length + 1}</td>
        <td>المرفقات</td>
        <td class="page">${attachmentsPage}</td>
      </tr>
      </table>
  `;

  // ---- 4) Sections with questions ----
  contentSections.forEach(sec => {
    const sum = sectionSummary[sec];
    const secQs = questions.filter(q => q.section === sec);

    html += `<div class="page-break"></div>`;
    html += `<h2 class="section-title">${sec}</h2>`;

    if (sum) {
      html += `
        <div class="section-summary">
          <span class="yes">نعم: ${sum.yes} (${sum.yesPct}%)</span>
          <span class="no">لا: ${sum.no} (${sum.noPct}%)</span>
          <span class="na">لا أعلم: ${sum.na} (${sum.naPct}%)</span>
          <span>إجمالي الأسئلة: ${sum.total}</span>
        </div>
      `;
    }

    html += `
      <table class="data">
        <tr>
          <th>رقم السؤال</th>
          <th>نص السؤال</th>
          <th>الإجابة</th>
          <th>الأسباب / الملاحظات</th>
          <th>رقم المرفق</th>
        </tr>
    `;

    secQs.forEach(q => {
      const ans = state.answers[q.id] || {};
      let answerText = "";
      let answerClass = "";
      if (ans.answer === "yes") {
        answerText = "نعم";
        answerClass = "answer-yes";
      } else if (ans.answer === "no") {
        answerText = "لا";
        answerClass = "answer-no";
      } else if (ans.answer === "na") {
        answerText = "لا أعلم";
        answerClass = "answer-na";
      }

      html += `
        <tr>
          <td>${q.id}</td>
          <td>${q.text}</td>
          <td class="${answerClass}">${answerText}</td>
          <td>${ans.reason ? (ans.reason || "").replace(/\\n/g, "<br>") : ""}</td>
          <td>${ans.attachment || ""}</td>
        </tr>
      `;
    });

    html += `</table>`;
  });

  // ===============================
// ADD: Descriptive Open Questions
// ===============================

html += `<div class="page-break"></div>`;
html += `<h2 class="section-title">أسئلة وصفية إضافية</h2>`;

html += `
  <table class="data">
    <tr>
      <th style="width:35%">السؤال</th>
      <th>الإجابة الوصفية</th>
    </tr>
`;

openQuestions.forEach(item => {
  const answer = state.open[item.key] || "—";
  html += `
    <tr>
      <td>${item.label}</td>
      <td>${answer.replace(/\n/g, "<br>")}</td>
    </tr>
  `;
});

html += `</table>`;


  // ---- 5) Attachments section at the end ----


  
  const attachmentRows = questions
    .map(q => {
      const ans = state.answers[q.id];
      if (ans && ans.attachment) {
        return { q, ans };
      }
      return null;
    })
    .filter(x => x !== null);

  html += `<div class="page-break"></div>`;
  html += `<h2 class="section-title">المرفقات</h2>`;

  if (attachmentRows.length === 0) {
    html += `<p class="attachments-note">لا توجد مرفقات محددة في الإجابات.</p>`;
  } else {
    html += `
      <p class="attachments-note">يتضمن الجدول التالي جميع الأسئلة التي تم تزويدها بأرقام مرفقات، ويمكن استخدامه كفهرس مرجعي لملفات الأدلة.</p>
      <table class="data">
        <tr>
          <th>رقم السؤال</th>
          <th>نص السؤال</th>
          <th>الإجابة</th>
          <th>رقم المرفق</th>
          <th>الوصف / الملاحظات</th>
        </tr>
    `;

    attachmentRows.forEach(row => {
      const { q, ans } = row;
      let answerText = "";
      if (ans.answer === "yes") answerText = "نعم";
      else if (ans.answer === "no") answerText = "لا";
      else if (ans.answer === "na") answerText = "لا أعلم";

      html += `
        <tr>
          <td>${q.id}</td>
          <td>${q.text}</td>
          <td>${answerText}</td>
          <td>${ans.attachment}</td>
          <td>${ans.reason ? (ans.reason || "").replace(/\\n/g, "<br>") : ""}</td>
        </tr>
      `;
    });

    html += `</table>`;
  }

  html += `
        <div class="export-wrapper">
        <button id="savePdfBtn" onclick="window.print()">💾 حفظ التقرير كملف PDF</button>
      </div>

    </body>
    </html>
  `;

  // ---- 6) Open PREVIEW window (no auto-print) ----
  const preview = window.open("", "_blank");
  preview.document.write(html);
  preview.document.close();
}



const btnPrintFull = document.getElementById("btn-print-full");
btnPrintFull.onclick = printFullReport;


// Save cookie (expires in 30 days)
function saveData(obj) {
  const value = encodeURIComponent(JSON.stringify(obj));
  const days = 30;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `myAppData=${value};expires=${d.toUTCString()};path=/`;
}

// Load cookie
function loadData() {
  const match = document.cookie.match(/(?:^|;\s*)myAppData=([^;]*)/);
  if (!match) return null;
  return JSON.parse(decodeURIComponent(match[1]));
}
