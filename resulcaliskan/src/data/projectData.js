// data/projectData.js
import ballgorithmIcon from '../png/ballgoritm_icon.png';
import paper2quizIcon from '../png/paper2quiz_icon.png';
import kamiFavicon from '../png/kami-favicon.png';
import kamiPreview from '../png/kami-preview.webp';
import hrhubFavicon from '../png/hrhub.png';

export const projectsData = {
  "ballgorithm": {
    slug: "ballgorithm",
    title: "Ballgorithm",
    badge: "Kişisel Proje / Mobil Oyun",
    subtitle: "Golf Mekanikleri & 2048 Birleştirme Bulmacalı Fizik Oyunu",
    icon: ballgorithmIcon,
    storeLink: "https://play.google.com/store/apps/details?id=com.kabadayigames.ballgorithm",
    storeLabel: "Google Play'de İndir",
    overview: "Ballgorithm, golf atış dinamikleri ile 2048 birleştirme mantığını harmanlayan, Godot Engine üzerinde geliştirilmiş fizik tabanlı bir bulmaca oyunudur. Oyuncunun amacı, sınırlı hamle ve doğru açı hesaplamalarıyla aynı değerdeki topları çarpıştırarak büyütmek ve hedef puana veya seviye hedefine ulaşmaktır.",
    
    conceptualDesign: {
      title: "Kavramsal Tasarım ve Oyun Döngüsü (Core Loop)",
      description: "Ballgorithm'in temel felsefesi 'Hassas Fizik + Stratejik Birleştirme' üzerine kuruludur. Oyuncu, topun açı ve hız vektörünü ayarlayarak fırlatır. Fizik motoru topun engellerden sekmesini ve hedef toplarla etkileşimini gerçek zamanlı hesaplar.",
      diagram: `graph TD
    A[🎮 Oyuncu Açıyı & Gücü Ayarlar] --> B[🚀 Top Fırlatılır - RigidBody2D]
    B --> C{Fiziksel Etkileşim}
    C -->|Aynı Seviye Topla Çarpışma| D[✨ 2048 Birleşimi & Yeni Top]
    C -->|Duvar / Engel Sekmesi| E[🔄 Yörünge & Çarpışma Tepkisi]
    D --> F{Seviye Hedefine Ulaşıldı mı?}
    E --> B
    F -->|Evet| G[🏆 Seviye Başarıyla Tamamlandı]
    F -->|Hayır| A`
    },

    architecture: {
      title: "Sistem Mimari Akışı (System Architecture)",
      description: "Oyun motoru seviye yönetimini, fizik simülasyonunu ve ses/görsel efekt modüllerini ayrık yapıda çalıştırır.",
      diagram: `graph LR
    Input[Girdi Yöneticisi: Dokunma & Açı] --> Physics[Godot 2D Fizik Motoru]
    Physics --> Match[Birleştirme & Skor Algoritması]
    Match --> Sound[Ses Efektleri & Haptic]
    Match --> UI[Skor & UI Güncelleme]
    UI --> State[Oyun Durumu & Save Manager]`
    },

    highlights: [
      "El emeği hissi veren seviye tasarımları ve pastel görsel atmosfer",
      "Gerçek zamanlı Godot 2D Rigidbody fizik simülasyonu",
      "2048 birleştirme mantığı ile golf mekaniğinin hibrit sentezi",
      "Kafa yormayan, lo-fi müzikler eşliğinde dinlendirici oyun deneyimi"
    ],

    techStack: ["Godot Engine 4", "GDScript", "2D Physics Rigidbody", "Google Play Billing API", "Android Export Tools"]
  },

  "paper2quiz": {
    slug: "paper2quiz",
    title: "Paper2Quiz",
    badge: "Kişisel Proje / AI Çalışma Uygulaması",
    subtitle: "PDF'ten İnteraktif Quiz, Flashcard & AI Öğretmen Platformu",
    icon: paper2quizIcon,
    storeLink: "https://play.google.com/store/apps/details?id=com.kabadayigames.papertwoquiz",
    storeLabel: "Google Play'de İndir",
    overview: "Paper2Quiz, sınav ve ders PDF'lerini doğrudan yapay zeka destekli interaktif sınavlara, aralıklı tekrar (spaced repetition) kartlarına ve adım adım AI öğretmen anlatımına dönüştüren mobil uygulamadır. Kullanıcı kendi Gemini API anahtarını tanımlayarak yüksek gizlilikle verilerini işleyebilir.",
    
    conceptualDesign: {
      title: "Kavramsal Tasarım ve Öğrenme Döngüsü",
      description: "Paper2Quiz, ders materyallerini pasif okuma nesnesinden aktif öğrenme aracına dönüştürür. PDF dosyasından çıkarılan metinler ve görseller, LLM tabanlı yapılandırılmış bilgi ağaçlarına (Curriculum Map) ayrıştırılır.",
      diagram: `graph TD
    A[📄 Ders PDF Dosyası Yükleme] --> B[⚙️ PDF Metin & Sayfa Ayrıştırma]
    B --> C[🧠 Gemini AI Engine API]
    C --> D[🗺️ Müfredat Haritası & Konu Ağacı]
    D --> E[🎴 Spaced Repetition Flashcard'lar]
    D --> F[📝 İnteraktif Quiz & Soru Bankası]
    D --> G[👨‍🏫 AI Teacher: Adım Adım Anlatım]
    F --> H[📊 Yanlış Analizi & Mastery Puanı]`
    },

    architecture: {
      title: "Uygulama Mimarisi ve Veri Hattı (Data Pipeline)",
      description: "Veri gizliliği ön planda tutularak ders materyalleri ve kullanıcı ilerlemesi yerel cihazda (AsyncStorage / SQLite) saklanır; yalnızca istem gönderildiğinde Gemini API çağrılır.",
      diagram: `graph LR
    Client[React Native / Expo Mobil App] --> LocalParser[Yerel PDF İşleyici]
    LocalParser --> API[Gemini API Client Integration]
    API --> Schema[JSON Schema Output Parser]
    Schema --> LocalDB[(Yerel Cihaz Veritabanı)]
    LocalDB --> QuizUI[İnteraktif Sınav Modülü]`
    },

    highlights: [
      "PDF dosyalarından anında interaktif soru bankası ve sınav oturumu üretimi",
      "AI Teacher: Müfredat haritası, kavram anlatımı ve kişiselleştirilmiş pratik",
      "Aralıklı Tekrar (Spaced Repetition) algoritmaları ile desteklenmiş flashcard'lar",
      "Kullanıcıya özel Gemini API anahtarı kullanımı ile maksimum veri gizliliği"
    ],

    techStack: ["React Native", "Expo", "JavaScript (ES6+)", "Google Gemini AI API", "PDF Parsing Engine", "AsyncStorage"]
  },

  "kami": {
    slug: "kami",
    title: "Kami — Çizgi Studio",
    badge: "Profesyonel Deneyim — Full Stack Developer",
    subtitle: "Sosyal Hikaye Anlatıcılığı & Çizgi Roman Platformu",
    icon: kamiFavicon,
    image: kamiPreview,
    storeLink: "https://cizgi.studio/",
    storeLabel: "Canlı Projeyi İncele",
    overview: "Çizgi Studio bünyesinde Full Stack Developer olarak geliştirilmesinde yer aldığım sosyal hikaye anlatıcılığı platformu. Kullanıcılar hikayeler ve çizgi romanlar okuyabilir, Kami Workshop ile kendi içeriklerini üretebilir ve AI karakterlerle sohbet edebilir.",
    
    conceptualDesign: {
      title: "Kavramsal Tasarım ve İçerik Üretim Hattı",
      description: "Platform hem içerik tüketimini hem de dijital içerik üretimini (Kami Workshop) ve AI karakter simülasyonlarını kapsar.",
      diagram: `graph TD
    User[Kullanıcı & Çizer] --> Reader[Hikaye & Çizgi Roman Okuyucu]
    User --> Workshop[Kami Workshop: İçerik Üretimi]
    User --> AIChat[AI Karakter Sohbet Sistemi]
    Workshop --> ContentDB[(İçerik Veritabanı)]
    AIChat --> LLM[AI Character Engine]`
    },

    highlights: [
      "Çizgi roman ve zengin içerik okuma deneyimi",
      "Kami Workshop ile içerik üreticileri için dijital araçlar",
      "Yapay zeka tabanlı etkileşimli karakter sohbet sistemi"
    ],

    techStack: ["React", "Node.js", "Full Stack Web Architecture", "AI Integration", "CSS3 / Modern Web"]
  },

  "hrhub": {
    slug: "hrhub",
    title: "HRHUB CRM",
    badge: "Profesyonel Deneyim — Full Stack Developer",
    subtitle: "AI Destekli CRM & İnsan Kaynakları Yönetim Platformu",
    icon: hrhubFavicon,
    image: "https://static.wingify.com/gcp/uploads/sites/18/2023/08/CRM.png",
    storeLink: "https://crm-daltonlar.vercel.app/",
    storeLabel: "Canlı Projeyi İncele",
    overview: "Full Stack Developer olarak frontend ve backend süreçlerinde rol aldığım, yapay zeka destekli CRM ve İK yönetim web uygulaması.",
    
    conceptualDesign: {
      title: "Kavramsal Tasarım ve İş Akışı",
      description: "Ekiplerin müşteri ilişkileri, aday takibi ve insan kaynakları süreçlerini tek noktadan yönetmesini sağlayan AI paneli.",
      diagram: `graph LR
    Dashboard[İK & Müşteri Paneli] --> CRMEngine[CRM Veri Yönetimi]
    CRMEngine --> Analytics[Yapay Zeka Analitiği]
    Analytics --> Reports[Raporlama & Aday Skoru]`
    },

    highlights: [
      "Yapay zeka destekli müşteri ve aday analitiği",
      "Dinamik raporlama panelleri ve süreç takibi",
      "Modern ve esnek Full Stack web mimarisi"
    ],

    techStack: ["React", "JavaScript", "Node.js", "CRM Architecture", "Vercel Deployment"]
  }
};
