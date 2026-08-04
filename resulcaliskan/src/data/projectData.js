// data/projectData.js
import ballgorithmIcon from '../png/ballgoritm_icon.png';
import paper2quizIcon from '../png/paper2quiz_icon.png';

export const projectsData = {
  "ballgorithm": {
    slug: "ballgorithm",
    title: "Ballgorithm",
    heroBadge: "Mobile Game / 2D Physics Puzzle",
    subtitle: "Golf atış mekaniklerini 2048 birleştirme dinamikleriyle harmanlayan 2D fizik bulmaca oyunu.",
    icon: ballgorithmIcon,
    storeLink: "https://play.google.com/store/apps/details?id=com.kabadayigames.ballgorithm",
    storeLabel: "Google Play'de İncele",
    githubLink: null,
    
    impactMetrics: [
      { label: "Mekanik Hibriti", value: "2048 Inspired" },
      { label: "Fizik Motoru", value: "Custom 2D Physics" },
      { label: "Oyun Motoru", value: "Godot Engine 4" },
      { label: "Dağıtım Kanalı", value: "Google Play Store" },
      { label: "Geliştirici Rolü", value: "Solo Developer" }
    ],

    quickOverview: {
      role: "Solo Game Developer & Designer",
      duration: "3 Ay",
      platform: "Android (Google Play)",
      engine: "Godot Engine 4",
      language: "GDScript",
      teamSize: "1 Kişi (Solo)",
      status: "Canlıda / Production"
    },

    problem: [
      { 
        title: "Statik Bulmaca Monotonluğu", 
        desc: "Klasik 2048 oyunlarındaki ızgara bazlı statik hareketler, zamanla oyuncuda tahmin edilebilirliğe ve mekanik monotonluğa sebep oluyordu." 
      },
      { 
        title: "Fizikte Kontrolsüz Kaos", 
        desc: "Geleneksel fizik oyunlarında top hareketlerinin aşırı kaotik olması oyuncunun strateji kurmasını engelliyor ve şans faktörünü gereksiz öne çıkarıyordu." 
      }
    ],

    solution: [
      { 
        title: "Fizik & Strateji Sentetizasyonu", 
        desc: "Golf atışlarındaki hassas açı ve kuvvet kontrolünü 2048 sayı birleştirme kurallarıyla birleştirerek hem beceri hem de strateji odaklı bir core loop kurguladım." 
      },
      { 
        title: "Hassas Vektör Kontrolü", 
        desc: "Oyuncunun topu fırlatmadan önce yörüngeyi sezgisel olarak hissetmesini sağlayan hassas girdi ve açı kontrol sistemini geliştirdim." 
      }
    ],

    gameplayJourney: [
      { step: "01", title: "Nişan Alma (Aim)", desc: "Dokunmatik girdi ile fırlatma açısı ve kuvvet vektörü belirlenir." },
      { step: "02", title: "Fırlatma (Shoot)", desc: "Top Rigidbody2D impulsu ile sahneye fırlatılır." },
      { step: "03", title: "Sekme (Bounce)", desc: "Duvarlar ve engellerden sekerek yörünge devam eder." },
      { step: "04", title: "Birleşme (Merge)", desc: "Aynı seviyedeki iki top temas ettiğinde birleşerek seviye atlar." },
      { step: "05", title: "Skor & İlerleme", desc: "Birleşme skoru haneye yazılır ve yeni seviye topu hedefe yaklaşır." }
    ],

    nodeArchitecture: [
      { id: "input", name: "Girdi Yöneticisi", desc: "Açı & Kuvvet Vektör Hesabı", category: "Girdi Katmanı" },
      { id: "physics", name: "Godot 2D Physics Engine", desc: "Rigidbody2D Simülasyonu", category: "Simülasyon" },
      { id: "collision", name: "Çarpışma Algılayıcı", desc: "Collision Layer & Mask Filter", category: "Fizik Mantığı" },
      { id: "merge", name: "Birleştirme Yöneticisi", desc: "Level & Mass Escalation", category: "Oyun Mantığı" },
      { id: "ui", name: "Skor & Arayüz", desc: "Smooth UI & FX Rendering", category: "Arayüz" },
      { id: "save", name: "Kayıt Sistemi", desc: "Local Game State Persistence", category: "Veri Depolama" }
    ],

    technicalChallenges: [
      {
        challenge: "Aynı Seviye Topların Birleşme Anında Çift Tetiklenme (Double Trigger) Sorunu",
        solution: "Çarpışma algılandığında anında collision mask'ı devre dışı bırakan ve tek bir birleşme eventi (Mutex Guard pattern) oluşturan durum yöneticisi yazıldı.",
        impact: "Çift skor yazma ve beklenmeyen nesne silinme bug'ları %100 engellendi."
      },
      {
        challenge: "Fizik Motorunda Yüksek Hızda Duvar İçi İçine Geçme (Tunneling)",
        solution: "Continuous Collision Detection (CCD) modu aktif edilerek adımlı raycast yörünge kontrolü entegre edildi.",
        impact: "Yüksek hızlı fırlatmalarda dahi sıfır duvar geçiş hatası sağlandı."
      }
    ],

    engineeringDecisions: [
      { title: "Custom Physics Layering", desc: "Nesne türlerine göre özel collision katmanları tanımlanarak gereksiz çarpışma kontrolleri elendi." },
      { title: "Object Pooling Pattern", desc: "Sık yaratılıp yok edilen top ve parçacık efektleri için bellek havuzu oluşturularak GC kasılmaları önlendi." },
      { title: "Lo-Fi Audio & Haptic Feedback", desc: "Görsel ve dokunsal geri bildirimler (haptic engine) birleşme hissini güçlendirecek şekilde senkronize edildi." }
    ],

    techStack: [
      { name: "Godot Engine 4", category: "Game Engine", desc: "2D Oyun Motoru Mimarisi" },
      { name: "GDScript", category: "Language", desc: "Nesne Yönelimli Oyun Skripting" },
      { name: "Physics2D", category: "Physics", desc: "Rigidbody & Collision Simulation" },
      { name: "Google Play Billing", category: "Monetization", desc: "Android İçi Satın Alma Entegrasyonu" },
      { name: "Android Export Tools", category: "Deployment", desc: "AAB & APK Build Pipeline" }
    ],

    whatILearned: [
      "Fizik tabanlı oyunlarda kullanıcı girdisi ile kestirilemezlik arasındaki hassas dengeyi kurmayı öğrendim.",
      "Godot Engine 4 mimarisinde performans odaklı bellek ve sahneler arası durum yönetimini tecrübe ettim.",
      "Oyun tasarımında minimalist görsel dil ve ses tasarımının kullanıcı elde tutma oranına etkisini gözlemledim."
    ],

    nextSteps: [
      "Global Skor Tablosu & Online Leaderboard Entegrasyonu",
      "Farklı Çevre Fiziklerine Sahip Yeni Tematik Bölüm Paketleri",
      "iOS (App Store) Yayın Pipeline Kurulumu"
    ]
  },

  "paper2quiz": {
    slug: "paper2quiz",
    title: "Paper2Quiz",
    heroBadge: "AI Study Platform / React Native",
    subtitle: "Sınav PDF'lerini interaktif quiz'lere, flashcard'lara ve AI öğretmen oturumlarına dönüştüren çalışma ortamı.",
    icon: paper2quizIcon,
    storeLink: "https://play.google.com/store/apps/details?id=com.kabadayigames.papertwoquiz",
    githubLink: null,

    impactMetrics: [
      { label: "Yapay Zeka Motoru", value: "Google Gemini AI" },
      { label: "Mobil Mimari", value: "React Native & Expo" },
      { label: "Veri Mahremiyeti", value: "%100 Local Privacy" },
      { label: "Öğrenme Metodu", value: "Spaced Repetition" },
      { label: "Geliştirici Rolü", value: "Solo Developer" }
    ],

    quickOverview: {
      role: "Solo Product Engineer & Designer",
      duration: "4 Ay",
      platform: "Android & Cross-Platform",
      engine: "React Native / Expo",
      language: "JavaScript (ES6+) / TypeScript",
      teamSize: "1 Kişi (Solo)",
      status: "Canlıda / Production"
    },

    problem: [
      { 
        title: "Doküman Pasifliği", 
        desc: "Yüzlerce sayfalık PDF ders notlarını pasif bir şekilde okumak zihinde kalıcılığı düşürüyor ve öğrenciyi çabuk yoruyordu." 
      },
      { 
        title: "Bulut Veri Gizliliği Endişesi", 
        desc: "Kullanıcılar kişisel sınav dokümanlarını veya özel ders materyallerini üçüncü parti sunuculara yüklemek istemiyordu." 
      }
    ],

    solution: [
      { 
        title: "Yapılandırılmış AI Müfredat Ağacı", 
        desc: "PDF dosyasından çıkarılan metinler Gemini AI ile analiz edilerek konu haritaları, interaktif quiz'ler ve anlatım modüllerine dönüştürüldü." 
      },
      { 
        title: "Local-First Privacy Mimarisi", 
        desc: "Kullanıcının kendi Gemini API anahtarını girebildiği, tüm ders veritabanının yerel cihazda (AsyncStorage/SQLite) kaldığı istemci mimarisi tasarlandı." 
      }
    ],

    gameplayJourney: [
      { step: "01", title: "PDF Yükleme", desc: "Ders veya sınav PDF dokümanı cihaza seçilir." },
      { step: "02", title: "Metin Ayrıştırma", desc: "Yerel PDF motoru sayfaları ve soruları metne dönüştürür." },
      { step: "03", title: "AI Analizi", desc: "Gemini API ile structured JSON müfredat haritası oluşturulur." },
      { step: "04", title: "İnteraktif Sınav", desc: "Kullanıcı test çözer, yanlış yaptığı noktalar tespit edilir." },
      { step: "05", title: "Aralıklı Tekrar", desc: "Eksik konular Spaced Repetition flashcard kartlarına aktarılır." }
    ],

    nodeArchitecture: [
      { id: "pdf", name: "Yerel PDF Parser", desc: "Text & Page Extraction Engine", category: "Metin Çıkarımı" },
      { id: "gemini", name: "Google Gemini API Client", desc: "Structured Output Request", category: "AI İşleme" },
      { id: "json", name: "JSON Schema Validator", desc: "Strict Type & Format Parsing", category: "Doğrulama" },
      { id: "storage", name: "AsyncStorage / SQLite", desc: "Local-First Data Persistence", category: "Veri Saklama" },
      { id: "quiz", name: "Quiz & Flashcard Engine", desc: "Spaced Repetition Loop", category: "Öğrenme Motoru" },
      { id: "ui", name: "React Native UI", desc: "Accessible & Responsive Interface", category: "Kullanıcı Arayüzü" }
    ],

    technicalChallenges: [
      {
        challenge: "LLM Yanıtlarında Beklenmeyen Metin Formatı ve JSON Kırılmaları",
        solution: "Gemini API üzerinde Strict JSON Schema (Structured Outputs) tanımlandı ve istemci tarafında fallback JSON validator katmanı eklendi.",
        impact: "Soru bankası üretirken oluşan render çökme hatası %0'a indirildi."
      },
      {
        challenge: "Büyük PDF Dosyalarında Mobil Cihaz Bellek Aşımı",
        solution: "PDF işleme süreci sayfa sayfa chunk'lara bölünerek (chunked async stream) arka planda kuyruğa alındı.",
        impact: "100+ sayfalık ağır dokümanlarda dahi uygulamanın akıcı çalışması sağlandı."
      }
    ],

    engineeringDecisions: [
      { title: "Local-First Architecture", desc: "Kullanıcı verileri ve dokümanlar dış sunuculara aktarılmadan cihaz içerisinde saklanır." },
      { title: "Spaced Repetition Algorithm", desc: "SuperMemo/Anki mantığına dayalı aralıklı tekrar algoritması ile hatırlama eğrisi optimize edildi." },
      { title: "Custom User API Key Integration", desc: "Kullanıcının kendi Gemini API anahtarını kullanmasıyla sunucu maliyetleri sıfırlandı." }
    ],

    techStack: [
      { name: "React Native", category: "Framework", desc: "Cross-Platform Mobil Motor" },
      { name: "Expo", category: "Tooling", desc: "Geliştirme & Derleme Suite" },
      { name: "Google Gemini AI", category: "AI Engine", desc: "Yapılandırılmış LLM Entegrasyonu" },
      { name: "AsyncStorage / SQLite", category: "Database", desc: "Local-First Veritabanı" },
      { name: "JavaScript / ES6+", category: "Language", desc: "Temel Programlama Dili" }
    ],

    whatILearned: [
      "LLM entegrasyonlarında deterministik olmayan yanıtları deterministik JSON yapılarına dönüştürme yöntemlerini öğrendim.",
      "Local-first uygulama mimarisinde veri tutarlılığı ve senkronizasyon mantığını derinleştirdim.",
      "Öğrenme psikolojisi ile UX tasarımını birleştirerek öğrenci odaklı ürün geliştirme süreçlerini deneyimledim."
    ],

    nextSteps: [
      "Ders Notlarından Otomatik Sesli Özet (Text-to-Speech) Modülü",
      "Öğrenci Çalışma İstatistikleri ve Haftalık Verim Grafikleri",
      "iOS App Store Sürümü ve iPad Tablet UI Optimizasyonu"
    ]
  }
};
