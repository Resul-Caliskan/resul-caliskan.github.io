// data/projectData.js
import ballgorithmIcon from '../png/ballgoritm_icon.png';
import paper2quizIcon from '../png/paper2quiz_icon.png';

// NOT: Şirket / Profesyonel projelerin (Kami, HRHUB) gizlilik ve NDA gereği detay sayfaları bulunmamaktadır.
// Sadece kişisel projelerin kavramsal tasarımları sergilenir.

export const projectsData = {
  "ballgorithm": {
    slug: "ballgorithm",
    title: "Ballgorithm",
    badge: "Kişisel Proje / Mobil Oyun",
    subtitle: "Golf Mekanikleri & 2048 Birleştirme Bulmacalı Fizik Oyunu",
    icon: ballgorithmIcon,
    storeLink: "https://play.google.com/store/apps/details?id=com.kabadayigames.ballgorithm",
    storeLabel: "Google Play Sayfası",
    overview: "Ballgorithm, golf atış dinamikleri ile 2048 tarzı sayı birleştirme bulmacalarını tek bir mekanikte buluşturan 2D fizik oyunudur. Oyuncu doğru açı ve kuvveti ayarlayarak topları fırlatır, engellerden sekerek aynı seviyedeki topları çarpıştırıp büyütür.",
    
    conceptualDesign: {
      title: "Kavramsal Tasarım ve Core Loop",
      description: "Oyunun temel döngüsü (core loop); oyuncunun nişan alması, fizik motorunun yörünge ve çarpışmayı hesaplaması, aynı seviyedeki topların birleşerek yeni bir top seviyesine evrilmesi esasına dayanır.",
      diagram: `graph TD
    A[Nişan Alma & Kuvvet Vektörü] --> B[Top Fırlatma - Rigidbody2D]
    B --> C{Çarpışma Hesabı}
    C -->|Aynı Seviye Top| D[2048 Birleşimi & Yeni Seviye]
    C -->|Engeller & Duvarlar| E[Sekme & Vektör Yönü]
    D --> F{Hedef Durum}
    E --> B
    F -->|Başarılı| G[Seviye Tamamlandı]
    F -->|Devam| A`
    },

    architecture: {
      title: "Fizik & Oyun Sistem Mimarisi",
      description: "Godot 2D fizik motoru üzerinde özel çarpışma katmanları (collision layers) ve kütle/sürtünme parametreleri ile hassas yörünge davranışı elde edilmiştir.",
      diagram: `graph LR
    Input[Girdi Yöneticisi] --> Physics[Godot 2D Fizik Motoru]
    Physics --> Match[Birleştirme Algoritması]
    Match --> Audio[Ses Efektleri & Dokunsal Geri Bildirim]
    Match --> UI[Skor & Seviye Arayüzü]`
    },

    highlights: [
      "Özel ayarlanmış kütle ve sürtünme değerleri ile doğal hissettiren top fizikleri",
      "Görsel açıdan dinlendirici pastel renk paleti ve minimalist bölüm mimarisi",
      "Modüler seviye yapısı ve Google Play Mağaza entegrasyonu"
    ],

    techStack: ["Godot Engine 4", "GDScript", "Physics2D", "Android Export Tools", "Google Play Billing"]
  },

  "paper2quiz": {
    slug: "paper2quiz",
    title: "Paper2Quiz",
    badge: "Kişisel Proje / AI Uygulama",
    subtitle: "PDF'ten İnteraktif Soru Bankası & AI Öğretmen Platformu",
    icon: paper2quizIcon,
    storeLink: "https://play.google.com/store/apps/details?id=com.kabadayigames.papertwoquiz",
    storeLabel: "Google Play Sayfası",
    overview: "Paper2Quiz, ders ve sınav PDF'lerini doğrudan parçalayarak interaktif testlere, aralıklı tekrar (spaced repetition) kartlarına ve adım adım AI ders oturumlarına dönüştürür. Kullanıcı mahremiyeti ve veri güvenliği için Gemini API anahtarları yerelde tutulur.",
    
    conceptualDesign: {
      title: "Kavramsal Tasarım ve Öğrenme Döngüsü",
      description: "Dokümanlar pasif okuma nesnesi olmaktan çıkarılıp yapılandırılmış veri ağaçlarına (Curriculum Map) dönüştürülür. Yanlış yapılan sorular analiz edilerek eksik noktalar aralıklı tekrar kartlarıyla pekiştirilir.",
      diagram: `graph TD
    A[Ders PDF Dosyası] --> B[Sayfa & Metin Ayrıştırma]
    B --> C[Google Gemini API]
    C --> D[Müfredat Ağacı & Konu Haritası]
    D --> E[Aralıklı Tekrar Kartları]
    D --> F[İnteraktif Soru Bankası]
    F --> G[Yanlış Analizi & Gelişim Takibi]`
    },

    architecture: {
      title: "Uygulama Mimarisi & Veri Akış Hattı",
      description: "React Native / Expo mimarisi üzerinde yerel veri saklama ve yapılandırılmış JSON API yanıtları ile çalışan modüler sistem.",
      diagram: `graph LR
    Client[React Native Mobil İstemci] --> Parser[Yerel PDF Motoru]
    Parser --> API[Gemini API Entegrasyonu]
    API --> Schema[JSON Schema Output Parser]
    Schema --> Storage[(Yerel Cihaz Veritabanı)]`
    },

    highlights: [
      "PDF sayfalarından anında sınav ve soru bankası üretimi",
      "Kullanıcının kendi API anahtarını kullanmasını sağlayan yerel istemci yapısı",
      "Aralıklı tekrar (spaced repetition) mantığı ile flashcard yönetimi",
      "Konu bazlı başarı oranı ve mastery takibi"
    ],

    techStack: ["React Native", "Expo", "JavaScript", "Google Gemini API", "AsyncStorage", "PDF Engine"]
  }
};
