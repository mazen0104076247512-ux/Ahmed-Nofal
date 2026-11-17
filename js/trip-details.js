// ===================================================
// TRIP DETAILS JS - AHMAD NOFAL (MAWASEM AL-BARAKA)
// ===================================================

const TRIPS_DATA = {
  1: {
    id: 1,
    title: "رحلة عمرة شعبان الفاخرة - جوار الحرم",
    badge: "الأكثر طلباً • باقة النخبة الفاخرة",
    category: "عمرة شهر شعبان 1447هـ",
    destination: "مكة المكرمة والمدينة المنورة",
    days: "14 يوماً / 13 ليلة",
    makkahNights: "8 ليالٍ بمكة",
    madinahNights: "5 ليالٍ بالمدينة",
    departure: "1 شعبان 1447هـ",
    returnDate: "15 شعبان 1447هـ",
    flight: "طيران مباشر (القاهرة - جدة / المدينة - القاهرة)",
    airline: "مصر للطيران أو الخطوط السعودية مع وزن 2 حقيبة 23 كجم",
    visa: "تأشيرة العمرة الإلكترونية مع تأمين طبي شامل",
    price: "38,500",
    doublePrice: "43,000",
    triplePrice: "40,500",
    quadPrice: "38,500",
    overview: "برنامج عمرة شعبان الفاخر يجمع بين الروحانية والرفاهية المطلقة، مع إقامة في فنادق 5 نجوم تطل مباشرة على ساحات الحرمين الشريفين لتسهيل أداء الصلوات في أوقاتها، ومرافقة إرشادية وتفويج متواصل بقيادة أ. أحمد نوفل.",
    supervisorName: "أحمد نوفل",
    supervisorRole: "المشرف العام ومسؤول التفويج والإرشاد الإيماني",
    supervisorBio: "خبرة تتجاوز 12 عاماً في تنظيم ومرافقة أفواج العمرة. يرافقكم خطوة بخطوة من صالة المطار وحتى العودة إلى أرض الوطن، مقدماً الرعاية الشاملة وحل كافة الاحتياجات وتيسير المناسك بطمأنينة وسكينة.",
    supervisorPhone: "+201063256596",
    makkahHotel: {
      name: "فندق بولمان زمزم مكة",
      stars: "★★★★★ (5 نجوم)",
      distance: "مباشرة على ساحة الحرم المكي الشريف",
      photo: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
      amenities: ["إطلالة مباشرة على الكعبة والساحات", "بوفيه إفطار فاخر", "واي فاي فائق السرعة", "مصاعد سريعة للحرم", "خدمة غرف 24 ساعة"]
    },
    madinahHotel: {
      name: "فندق شذا المدينة",
      stars: "★★★★★ (5 نجوم)",
      distance: "خطوات يسيرة من باب السلام بالمسجد النبوي",
      photo: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
      amenities: ["مواجه للمسجد النبوي", "تصميم أندلسي فاخر", "بوفيه مفتوح", "رعاية خاصة للمعتمرين"]
    },
    inclusions: [
      "استخراج تأشيرة العمرة الإلكترونية والتأمين الطبي الشامل المعتمد",
      "تذاكر الطيران المباشر ذهاب وعودة (القاهرة - جدة / المدينة - القاهرة)",
      "إقامة 8 ليالٍ في مكة المكرمة بفندق بولمان زمزم 5 نجوم شاملة الإفطار",
      "إقامة 5 ليالٍ في المدينة المنورة بفندق شذا المدينة 5 نجوم شاملة الإفطار",
      "تنقلات داخلية بحافلات حديثة ومكيفة VIP موديل العام",
      "مرافقة وإشراف دائم من الأستاذ أحمد نوفل طوال الرحلة",
      "جولة المزارات الشرعية في مكة المكرمة (غار حراء، غار ثور، عرفات، منى، مزدلفة)",
      "جولة المزارات الشرعية في المدينة المنورة (مسجد قباء، جبل أحد، شهداء أحد، القبلتين)",
      "حقيبة المعتمر الهدية + مصحف شريف + كتيب الأدعية + عبوة ماء زمزم 5 لتر"
    ],
    exclusions: [
      "المصروفات الشخصية والطلبات الخاصة خارج البرنامج الفندقي",
      "تكلفة ترقية الغرف لإطلالة مباشرة خاصة (حسب الرغبة والتوفر)",
      "وجبات الغداء والعشاء (ما لم يتم الاتفاق عليها مسبقاً)"
    ],
    itinerary: [
      { day: "اليوم الأول", title: "التجمع والسفر إلى الأراضي المقدسة والتسكين", desc: "التجمع بمطار القاهرة الدولي قبل الرحلة بـ 4 ساعات، استلام الأوراق، السفر إلى مطار جدة الدولي، الانتقال بحافلات VIP إلى فندق مكة المكرمة واستلام الغرف والاستراحة." },
      { day: "اليوم الثاني", title: "أداء مناسك العمرة جماعياً", desc: "التجمع ببهو الفندق بعد الاستراحة والانطلاق لأداء مناسك العمرة (الطواف والسعي والتحلل) برفقة المشرف أحمد نوفل مع شرح مستفيض ودعاء مشترك." },
      { day: "اليوم 3 - 5", title: "أيام عبادة وطاعات ودروس إيمانية", desc: "صلوات الفروض بالمسجد الحرام، قيام الليل، طواف تطوع، وجلسات روحانية يومية يشرف عليها أ. أحمد نوفل للإجابة على استفسارات المعتمرين." },
      { day: "اليوم السادس", title: "جولة مزارات مكة المكرمة", desc: "الانطلاق بالحافلات لزيارة جبل النور، غار ثور، عرفات، المشعر الحرام، ومنى مع شرح تاريخي وسيرة نبوية عطرة." },
      { day: "اليوم السابع - الثامن", title: "صلوات وطواف الوداع", desc: "قضاء آخر الأوقات في رحاب الكعبة المشرفة، أداء طواف الوداع، والاستعداد للانتقال إلى مدينة رسول الله ﷺ." },
      { day: "اليوم التاسع", title: "الانتقال إلى المدينة المنورة واستلام الغرف", desc: "التحرك عبر حافلات VIP المكيفة إلى المدينة المنورة، الوصول إلى فندق شذا المدينة، واستلام الغرف وصلاة المغرب والعشاء بالحرم النبوي." },
      { day: "اليوم العاشر", title: "زيارة الروضة الشريفة والسلام على الحبيب ﷺ", desc: "تنظيم زيارة الروضة الشريفة عبر تطبيق نُسك بالتنسيق الكامل مع المشرف أحمد نوفل والسلام على رسول الله ﷺ وصاحبيه الكرام." },
      { day: "اليوم الحادي عشر", title: "مزارات المدينة المنورة التاريخية", desc: "زيارة مسجد قباء وأداء ركعتين بأجر عمرة، زيارة جبل أحد ومقبرة الشهداء، ومسجد القبلتين." },
      { day: "اليوم 12 - 13", title: "طاعات وزيارات البقيع والأسواق", desc: "الاستمتاع بروحانية المدينة المنورة، زيارة بقيع الغرقد، وشراء الهدايا التذكارية والتمور." },
      { day: "اليوم الرابع عشر", title: "التوديع والعودة إلى أرض الوطن", desc: "صلاة الوداع بالمسجد النبوي الشريف، ثم التوجه إلى مطار الأمير محمد بن عبد العزيز للعودة بسلامة الله وحفظه إلى أرض الوطن." }
    ]
  },

  2: {
    id: 2,
    title: "رحلة عمرة رجب الاقتصادية المتميزة",
    badge: "اقتصادي متميز • راحة وتوفير",
    category: "عمرة شهر رجب 1447هـ",
    destination: "مكة المكرمة والمدينة المنورة",
    days: "10 أيام / 9 ليالٍ",
    makkahNights: "5 ليالٍ بمكة",
    madinahNights: "4 ليالٍ بالمدينة",
    departure: "15 رجب 1447هـ",
    returnDate: "25 رجب 1447هـ",
    flight: "طيران مباشر القاهرة - جدة / المدينة - القاهرة",
    airline: "طيران اقتصادي مباشر ومريح مع أمتعة كاملة",
    visa: "تأشيرة العمرة الإلكترونية وتأمين شامل",
    price: "27,500",
    doublePrice: "31,000",
    triplePrice: "29,000",
    quadPrice: "27,500",
    overview: "باقة رجب الاقتصادية المتميزة صُممت لتمنحك أداء المناسك بأقل التكاليف مع الحفاظ على أعلى معايير النظافة والراحة وقرب الخدمات، مع حافلات ترددية 24 ساعة للساحات وإشراف مستمر من أ. أحمد نوفل.",
    supervisorName: "أحمد نوفل",
    supervisorRole: "المشرف العام ومسؤول المتابعة الميدانية",
    supervisorBio: "متابعة دقيقة لكل تفاصيل الإقامة والتسكين والنقل والمناسك، لضمان رضا وراحة كل معتمر على مدار الساعة.",
    supervisorPhone: "+201063256596",
    makkahHotel: {
      name: "فندق أبراج الكسوة / التيسير",
      stars: "★★★★ (4 نجوم)",
      distance: "باصات ترددية مكيفة على مدار 24 ساعة لساحة الحرم",
      photo: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
      amenities: ["خدمة باصات مستمرة دون توقف", "غرف واسعة ومكيفة", "مطاعم وخدمات محيطة", "واي فاي مجاني"]
    },
    madinahHotel: {
      name: "فندق المركزية الشمالية",
      stars: "★★★★ (4 نجوم)",
      distance: "250 متراً فقط من الساحة الشمالية للحرم النبوي",
      photo: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80",
      amenities: ["قريب جداً من بوابة النساء والرجال", "مصاعد حديثة", "غرف عائلية مريحة"]
    },
    inclusions: [
      "تأشيرة العمرة والتأمين الطبي",
      "تذاكر الطيران المباشر ذهاب وعودة",
      "إقامة 5 ليالٍ بمكة و 4 ليالٍ بالمدينة في فنادق نظيفة ومعتمدة",
      "باصات حديثة ومكيفة لنقل المعتمرين للحرم والمزارات",
      "إشراف أ. أحمد نوفل طوال الرحلة",
      "مزارات مكة المكرمة والمدينة المنورة كاملة",
      "حقيبة المعتمر الهدية وماء زمزم"
    ],
    exclusions: ["الوجبات الإضافية", "الطلبات الشخصية داخل الغرف"],
    itinerary: [
      { day: "اليوم الأول", title: "السفر إلى جدة والوصول إلى مكة", desc: "التجمع بمطار القاهرة، المغادرة، الوصول لمطار جدة والانتقال للفندق بمكة." },
      { day: "اليوم الثاني", title: "أداء مناسك العمرة", desc: "أداء العمرة برفقة المشرف أحمد نوفل مع التوجيه الشرعي." },
      { day: "اليوم 3 - 4", title: "عبادة وطواف بالمسجد الحرام", desc: "الصلوات ومتابعة المناسك وحلقات الذكر." },
      { day: "اليوم الخامس", title: "مزارات مكة والانتقال للمدينة", desc: "زيارة المزارات ثم التوجه إلى المدينة المنورة واستلام الغرف." },
      { day: "اليوم السادس", title: "السلام على النبي ﷺ وزيارة الروضة", desc: "الصلاة في المسجد النبوي وزيارة الروضة الشريفة." },
      { day: "اليوم السابع - التاسع", title: "مزارات المدينة والعبادة", desc: "زيارة قباء وأحد والبقيع والتسوق." },
      { day: "اليوم العاشر", title: "العودة إلى القاهرة", desc: "التوجه لمطار المدينة والعودة بسلام إلى مصر." }
    ]
  },

  3: {
    id: 3,
    title: "عمرة العشر الأوائل من شهر رمضان المبارك",
    badge: "روحانيات رمضانية • أول الشهر",
    category: "عمرة شهر رمضان 1447هـ",
    destination: "مكة المكرمة والمدينة المنورة",
    days: "10 أيام / 9 ليالٍ",
    makkahNights: "6 ليالٍ بمكة",
    madinahNights: "3 ليالٍ بالمدينة",
    departure: "1 رمضان 1447هـ",
    returnDate: "10 رمضان 1447هـ",
    flight: "طيران الخطوط السعودية المباشر",
    airline: "طيران السعودية مع وجبات ومميزات خاصة",
    visa: "تأشيرة العمرة الإلكترونية الرمضانية",
    price: "44,000",
    doublePrice: "50,000",
    triplePrice: "46,500",
    quadPrice: "44,000",
    overview: "عش روحانية افتتاح شهر رمضان المبارك في رحاب الحرم المكي الشريف، مع صلوات التراويح وسحور وإفطار بوفيه فاخر، وإشراف خاص من أحمد نوفل لتسهيل الدخول والخروج في أوقات الذروة.",
    supervisorName: "أحمد نوفل",
    supervisorRole: "المشرف العام ومرافق الفوج",
    supervisorBio: "إشراف دقيق على التسكين، الإفطار والسحور، وحجز تصاريح الروضة والعمرة لضمان سلاسة البرنامج الرمضاني بالكامل.",
    supervisorPhone: "+201063256596",
    makkahHotel: {
      name: "فندق سويس أوتيل المقام مكة",
      stars: "★★★★★ (5 نجوم)",
      distance: "مباشرة في مجمع أبراج البيت على ساحات الحرم",
      photo: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80",
      amenities: ["إطلالة بانورامية على الحرم", "بوفيه إفطار وسحور رمضاني شامل", "مصاعد مباشرة للحرم"]
    },
    madinahHotel: {
      name: "فندق كراون بلازا المدينة",
      stars: "★★★★★ (5 نجوم)",
      distance: "على بعد خطوات من ساحة المسجد النبوي",
      photo: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80",
      amenities: ["خدمة 5 نجوم راقية", "سحور وإفطار غني", "قريب من أبواب الزيارة"]
    },
    inclusions: [
      "تأشيرة العمرة الرمضانية وتأمين صحي شامل",
      "طيران الخطوط السعودية ذهاب وعودة",
      "إقامة 5 نجوم تشمل السحور والإفطار الرمضاني المفتوح",
      "تنظيم صلوات التراويح والعمرة بإشراف أحمد نوفل",
      "مزارات مكة المكرمة والمدينة المنورة كاملة",
      "هدايا رمضانية خاصة ومصحف وماء زمزم"
    ],
    exclusions: ["المصروفات الشخصية"],
    itinerary: [
      { day: "اليوم الأول", title: "بداية شهر الخير في مكة", desc: "الوصول والتسكين والاستعداد لأول ليلة من ليالي رمضان وصلاة التراويح." },
      { day: "اليوم الثاني", title: "أداء عمرة رمضان", desc: "أداء مناسك العمرة في أجواء إيمانية استثنائية." },
      { day: "اليوم 3 - 6", title: "صلوات وتراويح وجلسات قرآنية", desc: "قضاء الأيام في ختم القرآن وصلاة التراويح بالحرم المكي." },
      { day: "اليوم السابع - العاشر", title: "المدينة المنورة والسلام على الرسول ﷺ", desc: "الانتقال للمدينة، زيارة الروضة، وصلاة التراويح بالحرم النبوي ثم العودة." }
    ]
  },

  4: {
    id: 4,
    title: "عمرة العشر الأواخر وختم القرآن الكريم في الحرم",
    badge: "ليلة القدر • ختم القرآن وعيد الفطر",
    category: "عمرة شهر رمضان 1447هـ",
    destination: "مكة المكرمة والمدينة المنورة",
    days: "15 يوماً / 14 ليلة",
    makkahNights: "10 ليالٍ بمكة (تشمل ليلة 27 والعيد)",
    madinahNights: "4 ليالٍ بالمدينة",
    departure: "19 رمضان 1447هـ",
    returnDate: "4 شوال 1447هـ",
    flight: "طيران مباشر VIP",
    airline: "مصر للطيران أو الخطوط السعودية",
    visa: "تأشيرة العمرة الإلكترونية",
    price: "58,900",
    doublePrice: "68,000",
    triplePrice: "62,500",
    quadPrice: "58,900",
    overview: "أعظم رحلات العمر على الإطلاق: قضاء العشر الأواخر وليلة القدر المباركة وحضور ختم القرآن الكريم وصلاة عيد الفطر السعيد في رحاب بيت الله الحرام مع إقامة ديلوكس ببرج الساعة وإشراف كامل من أحمد نوفل.",
    supervisorName: "أحمد نوفل",
    supervisorRole: "المشرف العام ومسؤول التسكين والتهيئة الإيمانية",
    supervisorBio: "إدارة متكاملة لأصعب وأقدس أوقات الذروة الرمضانية، مع تأمين كافة سبل الراحة والاعتكاف والتهجد لكل معتمر.",
    supervisorPhone: "+201063256596",
    makkahHotel: {
      name: "فندق فيرمونت برج الساعة مكة",
      stars: "★★★★★ ديلوكس",
      distance: "ملاصق للمسجد الحرام مباشرة مع إطلالة كعبة",
      photo: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80",
      amenities: ["ملاصق للكعبة المشرفة", "سحور وإفطار ملكي", "خدمة VIP للمعتمرين", "مصاعد حصرية للحرم"]
    },
    madinahHotel: {
      name: "فندق دار التقوى المدينة",
      stars: "★★★★★ (5 نجوم)",
      distance: "مواجه للمسجد النبوي الشريف وباب النساء مباشرة",
      photo: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
      amenities: ["صف أول بالمدينة", "أعلى تقييم فندقي", "إفطار وسحور بوفيه عالمي"]
    },
    inclusions: [
      "تأشيرة العمرة الشاملة",
      "طيران مباشر ذهاب وعودة مع خدمة استقبال VIP",
      "إقامة 10 ليالٍ بفيرمونت برج الساعة + 4 ليالٍ بدار التقوى",
      "سحور وإفطار رمضاني ملكي بوفيه مفتوح",
      "تنظيم صلوات التهجد والاعتكاف وحضور ليلة 27 وختم القرآن",
      "صلاة عيد الفطر المبارك في صحن الكعبة المشرفة",
      "إشراف متواصل على مدار 24 ساعة من أ. أحمد نوفل"
    ],
    exclusions: ["الطلبات الشخصية والمشتريات الخاصة"],
    itinerary: [
      { day: "اليوم الأول", title: "السفر إلى مكة المكرمة وبدء العشر الأواخر", desc: "الوصول إلى الفندق ببرج الساعة والتسكين والاستعداد لصلاة التهجد والتراويح." },
      { day: "اليوم الثاني", title: "أداء عمرة العشر الأواخر", desc: "أداء مناسك العمرة برفقة المشرف أحمد نوفل." },
      { day: "اليوم 3 - 9", title: "ليالي التهجد والاعتكاف وليلة 27 المباركة", desc: "أيام مباركة لا تُنسى في صحن المطاف والتراويح والتهجد." },
      { day: "اليوم العاشر", title: "ليلة ختم القرآن وصلاة عيد الفطر", desc: "شهود ختم القرآن الكريم في ساحات الحرم وصلاة عيد الفطر المبارك." },
      { day: "اليوم 11 - 15", title: "أيام العيد في المدينة المنورة والسلام على الرسول ﷺ", desc: "الانتقال إلى المدينة المنورة، قضاء أيام العيد في رحاب النبي ﷺ ثم العودة." }
    ]
  },

  5: {
    id: 5,
    title: "عمرة الإسراء والمعراج الروحانية (برنامج العائلات)",
    badge: "برنامج عائلي مريح",
    category: "عمرة شهر رجب 1447هـ",
    destination: "مكة المكرمة والمدينة المنورة",
    days: "12 يوماً / 11 ليلة",
    makkahNights: "6 ليالٍ بمكة",
    madinahNights: "5 ليالٍ بالمدينة",
    departure: "24 رجب 1447هـ",
    returnDate: "6 شعبان 1447هـ",
    flight: "طيران مباشر القاهرة - جدة",
    airline: "طيران مباشر مع عناية خاصة بكبار السن والأطفال",
    visa: "تأشيرة العمرة وتأمين طبي شامل",
    price: "32,000",
    doublePrice: "36,000",
    triplePrice: "33,800",
    quadPrice: "32,000",
    overview: "برنامج عائلي متكامل مخصص لراحة العائلات وكبار السن والأطفال، يجمع بين ذكرى الإسراء والمعراج المباركة والإقامة المريحة مع توفير كراسي متحركة ووسائل نقل خاصة وسريعة.",
    supervisorName: "أحمد نوفل",
    supervisorRole: "المشرف العام ومنسق الرحلات العائلية",
    supervisorBio: "رعاية استثنائية للعائلات مع توفير كافة التسهيلات لضمان أداء مناسك ميسرة وسلسة لجميع أفراد الأسرة.",
    supervisorPhone: "+201063256596",
    makkahHotel: {
      name: "فندق أنوار الضيافة مكة",
      stars: "★★★★ (4 نجوم)",
      distance: "شارع أجياد العام - قريب ومحاط بكافة المطاعم والخدمات",
      photo: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
      amenities: ["مناسب جداً للعائلات", "غرف متصلة متوفرة", "بوفيه إفطار", "قريب من الساحات"]
    },
    madinahHotel: {
      name: "فندق طابة السلام المدينة",
      stars: "★★★★ (4 نجوم)",
      distance: "المنطقة المركزية - 200 متر من الحرم النبوي",
      photo: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
      amenities: ["قريب من مصلى النساء", "خدمة سريعة", "إنترنت مجاني"]
    },
    inclusions: [
      "تأشيرة العمرة الإلكترونية والتأمين الطبي الشامل",
      "تذاكر الطيران المباشر ذهاب وعودة",
      "إقامة فندقية عائلية مريحة 4 نجوم",
      "انتقالات VIP مكيفة مع مساعدة لكبار السن",
      "إشراف شخصي من أ. أحمد نوفل",
      "مزارات مكة والمدينة كاملة مع مرشد ديني",
      "حقائب وهدايا وماء زمزم لكل فرد"
    ],
    exclusions: ["المصروفات الشخصية"],
    itinerary: [
      { day: "اليوم الأول", title: "السفر والاستقرار بمكة", desc: "التجمع والوصول والتسكين العائلي الهادئ." },
      { day: "اليوم الثاني", title: "أداء مناسك العمرة براحة وهدوء", desc: "عمرة ميسرة مع توفير كافة الاحتياجات." },
      { day: "اليوم 3 - 6", title: "طاعات ومزارات مكة المكرمة", desc: "زيارة المعالم الإسلامية والعبادة في بيت الله الحرام." },
      { day: "اليوم 7 - 12", title: "المدينة المنورة والعودة", desc: "الإقامة في طيبة الطيبة وزيارة الروضة وقباء ثم العودة للوطن." }
    ]
  },

  6: {
    id: 6,
    title: "عمرة شوال وعيد الفطر المبارك (برنامج التيسير)",
    badge: "أجواء العيد • برنامج التيسير",
    category: "عمرة شهر شوال 1447هـ",
    destination: "مكة المكرمة والمدينة المنورة",
    days: "8 أيام / 7 ليالٍ",
    makkahNights: "4 ليالٍ بمكة",
    madinahNights: "3 ليالٍ بالمدينة",
    departure: "3 شوال 1447هـ",
    returnDate: "10 شوال 1447هـ",
    flight: "طيران مباشر ذهاب وعودة",
    airline: "طيران مباشر مريح وسريع",
    visa: "تأشيرة العمرة والتأمين الشامل",
    price: "25,800",
    doublePrice: "29,500",
    triplePrice: "27,200",
    quadPrice: "25,800",
    overview: "برنامج اقتصادي ميسر يبدأ فور انقضاء شهر رمضان للاستفادة من هدوء الحرمين الشريفين وأداء صيام الست من شوال بأجر عظيم وأسعار اقتصادية ممتازة.",
    supervisorName: "أحمد نوفل",
    supervisorRole: "المشرف العام ومسؤول الرحلة",
    supervisorBio: "إشراف ومتابعة كاملة لخدمة المعتمرين وتقديم برنامج ديني متميز ومزارات شاملة.",
    supervisorPhone: "+201063256596",
    makkahHotel: {
      name: "فندق مكارم أم القرى مكة",
      stars: "★★★★ (4 نجوم)",
      distance: "قريب من الساحات مع خدمة نقل مجانية دورية",
      photo: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80",
      amenities: ["خدمة راقية", "بوفيه متنوع", "غرف مريحة ونظيفة"]
    },
    madinahHotel: {
      name: "فندق روف المدينة",
      stars: "★★★★ (4 نجوم)",
      distance: "قريب من الساحة الشمالية للحرم النبوي الشريف",
      photo: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
      amenities: ["قريب جداً من المسجد النبوي", "خدمات غرف سريعة", "إنترنت مجاني"]
    },
    inclusions: [
      "تأشيرة العمرة وتأمين صحي",
      "طيران مباشر ذهاب وعودة",
      "إقامة 4 ليالٍ بمكة و 3 ليالٍ بالمدينة",
      "تنقلات حديثة ومكيفة",
      "إشراف ومرافقة من أ. أحمد نوفل",
      "مزارات مكة المكرمة والمدينة المنورة",
      "ماء زمزم معبأ وهدايا المعتمر"
    ],
    exclusions: ["المصروفات الشخصية"],
    itinerary: [
      { day: "اليوم الأول", title: "السفر إلى مكة المكرمة والتسكين", desc: "الوصول واستلام الغرف والاستراحة." },
      { day: "اليوم الثاني", title: "أداء مناسك العمرة", desc: "أداء العمرة بإشراف مباشر من أ. أحمد نوفل." },
      { day: "اليوم 3 - 4", title: "عبادة ومزارات مكة المكرمة", desc: "الصلوات وجولة المزارات ثم الانتقال للمدينة." },
      { day: "اليوم 5 - 8", title: "المدينة المنورة والسلام على الرسول والعودة", desc: "زيارة الروضة الشريفة ومسجد قباء والعودة إلى مصر بسلامة الله." }
    ]
  }
};

// ===================================================
// URL PARAMETER & DYNAMIC CONTENT RENDERING
// ===================================================

const urlParams = new URLSearchParams(window.location.search);
const tripId = parseInt(urlParams.get('id'), 10) || 1;
const trip = TRIPS_DATA[tripId] || TRIPS_DATA[1];

// Fill DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  // Page Title
  document.title = `${trip.title} | أحمد نوفل - مواسم البركة`;

  // Breadcrumbs & Hero
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = trip.title;

  const heroBadge = document.getElementById('heroBadge');
  if (heroBadge) heroBadge.textContent = trip.badge;

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.textContent = trip.title;

  const quickDays = document.getElementById('quickDays');
  if (quickDays) quickDays.textContent = trip.days;

  const quickDate = document.getElementById('quickDate');
  if (quickDate) quickDate.textContent = trip.departure;

  const quickFlight = document.getElementById('quickFlight');
  if (quickFlight) quickFlight.textContent = trip.flight;

  const quickHotel = document.getElementById('quickHotel');
  if (quickHotel) quickHotel.textContent = `${trip.makkahHotel.name} + ${trip.madinahHotel.name}`;

  // Supervisor Card Info
  const supervisorName = document.getElementById('supervisorName');
  if (supervisorName) supervisorName.textContent = `أ. ${trip.supervisorName}`;

  const supervisorRole = document.getElementById('supervisorRole');
  if (supervisorRole) supervisorRole.textContent = trip.supervisorRole;

  const supervisorBio = document.getElementById('supervisorBio');
  if (supervisorBio) supervisorBio.textContent = trip.supervisorBio;

  // Pricing Box
  const bookingPriceVal = document.getElementById('bookingPriceVal');
  if (bookingPriceVal) bookingPriceVal.innerHTML = `${trip.price} <small>ج.م</small>`;

  const stickyPriceVal = document.getElementById('stickyPriceVal');
  if (stickyPriceVal) stickyPriceVal.textContent = trip.price;

  // WhatsApp Button with customized pre-filled message
  const whatsappBookingBtn = document.getElementById('whatsappBookingBtn');
  const stickyWhatsappBtn = document.getElementById('stickyWhatsappBtn');
  const message = encodeURIComponent(`السلام عليكم أستاذ أحمد نوفل، أود الاستفسار والحجز في: "${trip.title}" (كود الرحلة: ${trip.id}) - سعر الباقة: ${trip.price} ج.م`);

  if (whatsappBookingBtn) {
    whatsappBookingBtn.href = `https://wa.me/201063256596?text=${message}`;
  }
  if (stickyWhatsappBtn) {
    stickyWhatsappBtn.href = `https://wa.me/201063256596?text=${message}`;
  }

  // Overview Card (Trip Card Style)
  const overviewCardImg = document.getElementById('overviewCardImg');
  if (overviewCardImg) overviewCardImg.src = trip.makkahHotel.photo;

  const overviewBadge = document.getElementById('overviewBadge');
  if (overviewBadge) overviewBadge.textContent = trip.badge;

  const overviewRating = document.getElementById('overviewRating');
  // keep default static rating text

  const overviewDaysTag = document.getElementById('overviewDaysTag');
  if (overviewDaysTag) overviewDaysTag.textContent = trip.days;

  const overviewCardTitle = document.getElementById('overviewCardTitle');
  if (overviewCardTitle) overviewCardTitle.textContent = trip.title;

  const overviewPriceVal = document.getElementById('overviewPriceVal');
  if (overviewPriceVal) overviewPriceVal.innerHTML = `${trip.price} <small>ج.م</small>`;

  const specHotelLevel = document.getElementById('specHotelLevel');
  if (specHotelLevel) specHotelLevel.textContent = trip.makkahHotel.stars;

  // Overview
  const tripOverview = document.getElementById('tripOverview');
  if (tripOverview) tripOverview.textContent = trip.overview;

  // Specs Box
  const specDuration = document.getElementById('specDuration');
  if (specDuration) specDuration.textContent = trip.days;

  const specDeparture = document.getElementById('specDeparture');
  if (specDeparture) specDeparture.textContent = trip.departure;

  const specReturn = document.getElementById('specReturn');
  if (specReturn) specReturn.textContent = trip.returnDate;

  const specFlight = document.getElementById('specFlight');
  if (specFlight) specFlight.textContent = trip.airline;

  const specVisa = document.getElementById('specVisa');
  if (specVisa) specVisa.textContent = trip.visa;

  const specSupervisor = document.getElementById('specSupervisor');
  if (specSupervisor) specSupervisor.textContent = `أ. ${trip.supervisorName}`;

  // Hotels
  const makkahHotelName = document.getElementById('makkahHotelName');
  if (makkahHotelName) makkahHotelName.textContent = trip.makkahHotel.name;

  const makkahHotelStars = document.getElementById('makkahHotelStars');
  if (makkahHotelStars) makkahHotelStars.textContent = trip.makkahHotel.stars;

  const makkahHotelDist = document.getElementById('makkahHotelDist');
  if (makkahHotelDist) makkahHotelDist.textContent = trip.makkahHotel.distance;

  const makkahHotelPhoto = document.getElementById('makkahHotelPhoto');
  if (makkahHotelPhoto) makkahHotelPhoto.src = trip.makkahHotel.photo;

  const makkahAmenities = document.getElementById('makkahAmenities');
  if (makkahAmenities) {
    makkahAmenities.innerHTML = trip.makkahHotel.amenities.map(a => `<span class="amenity-chip">${a}</span>`).join('');
  }

  const madinahHotelName = document.getElementById('madinahHotelName');
  if (madinahHotelName) madinahHotelName.textContent = trip.madinahHotel.name;

  const madinahHotelStars = document.getElementById('madinahHotelStars');
  if (madinahHotelStars) madinahHotelStars.textContent = trip.madinahHotel.stars;

  const madinahHotelDist = document.getElementById('madinahHotelDist');
  if (madinahHotelDist) madinahHotelDist.textContent = trip.madinahHotel.distance;

  const madinahHotelPhoto = document.getElementById('madinahHotelPhoto');
  if (madinahHotelPhoto) madinahHotelPhoto.src = trip.madinahHotel.photo;

  const madinahAmenities = document.getElementById('madinahAmenities');
  if (madinahAmenities) {
    madinahAmenities.innerHTML = trip.madinahHotel.amenities.map(a => `<span class="amenity-chip">${a}</span>`).join('');
  }

  // Itinerary Steps
  const itineraryContainer = document.getElementById('itineraryContainer');
  if (itineraryContainer) {
    itineraryContainer.innerHTML = trip.itinerary.map(step => `
      <div class="itinerary-step">
        <span class="itinerary-day-tag">${step.day}</span>
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    `).join('');
  }

  // Inclusions & Exclusions
  const inclusionsList = document.getElementById('inclusionsList');
  if (inclusionsList) {
    inclusionsList.innerHTML = trip.inclusions.map(item => `
      <li>
        <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
        <span>${item}</span>
      </li>
    `).join('');
  }

  const exclusionsList = document.getElementById('exclusionsList');
  if (exclusionsList) {
    exclusionsList.innerHTML = trip.exclusions.map(item => `
      <li>
        <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Room Pricing
  const quadPrice = document.getElementById('quadPrice');
  if (quadPrice) quadPrice.textContent = `${trip.quadPrice} ج.م`;

  const triplePrice = document.getElementById('triplePrice');
  if (triplePrice) triplePrice.textContent = `${trip.triplePrice} ج.م`;

  const doublePrice = document.getElementById('doublePrice');
  if (doublePrice) doublePrice.textContent = `${trip.doublePrice} ج.م`;

  // Mini Explore More Trips
  const miniTripsContainer = document.getElementById('miniTripsContainer');
  if (miniTripsContainer) {
    const otherTrips = Object.values(TRIPS_DATA).filter(t => t.id !== trip.id).slice(0, 3);
    miniTripsContainer.innerHTML = otherTrips.map(other => `
      <div class="mini-trip-card">
        <span class="badge-tag" style="align-self: flex-start;">${other.days}</span>
        <h4 class="mini-trip-title">${other.title}</h4>
        <div style="font-size: 0.82rem; color: var(--muted);">المشرف: أ. ${other.supervisorName}</div>
        <div class="mini-trip-price">${other.price} <small>ج.م</small></div>
        <a href="trip-details.html?id=${other.id}" class="btn btn-secondary" style="margin-top: auto; min-height: 40px; font-size: 0.85rem;">عرض التفاصيل</a>
      </div>
    `).join('');
  }
});

// ===================================================
// HEADER, TOPBAR & MOBILE MENU
// ===================================================

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navClose = document.querySelector('.nav-close');
const navLinks = document.querySelectorAll('.main-nav a');
const yearElement = document.getElementById('year');
const topbarDatetime = document.getElementById('topbarDatetime');
const topbarGreeting = document.getElementById('topbarGreeting');
const topbarProgress = document.getElementById('topbarProgress');

const updateDatetime = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long' });
  if (topbarDatetime) topbarDatetime.textContent = `${date} • ${time}`;
};

const updateGreeting = () => {
  const h = new Date().getHours();
  const g = h < 12 ? 'صباح الخير ☀️' : h < 17 ? 'مساء الخير 🌤️' : 'مساء النور 🌙';
  if (topbarGreeting) topbarGreeting.textContent = g;
};

updateDatetime();
updateGreeting();
setInterval(updateDatetime, 60000);

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (topbarProgress) topbarProgress.style.width = pct + '%';
};

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
  updateProgress();
});

const closeMobileMenu = () => {
  header?.classList.remove('nav-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
};

if (menuToggle) {
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = header.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });
}

if (navClose) {
  navClose.addEventListener('click', (event) => {
    event.stopPropagation();
    closeMobileMenu();
  });
}

document.addEventListener('click', (event) => {
  if (header && !header.contains(event.target) && header.classList.contains('nav-open')) {
    closeMobileMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});
