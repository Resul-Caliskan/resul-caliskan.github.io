// data/projectData.js
import ballgorithmIcon from '../png/ballgoritm_icon.png';
import paper2quizIcon from '../png/paper2quiz_icon.png';

export const projectsData = {
  "ballgorithm": {
    slug: "ballgorithm",
    title: "Ballgorithm",
    tagline: "Physics Meets Puzzle Strategy.",
    subtitle: "Golf mekaniklerini 2048 birleştirme dinamikleriyle harmanlayan, el emeği hissettiren 2D fizik oyunu.",
    heroBadge: "2D Physics Game / Solo Project",
    icon: ballgorithmIcon,
    storeLink: "https://play.google.com/store/apps/details?id=com.kabadayigames.ballgorithm",
    storeLabel: "Google Play Store'da İncele",
    githubLink: null,
    
    impactMetrics: [
      { value: "2048", label: "Birleştirme Mekaniği" },
      { value: "60 FPS", label: "Akıcı 2D Fizik Simülasyonu" },
      { value: "0%", label: "Duvar Geçiş (Tunneling) Bug Oranı" },
      { value: "Solo", label: "Oyun & UX Tasarımı" }
    ],

    quickOverview: {
      role: "Solo Game Developer & Designer",
      duration: "1 Ay Geliştirme",
      platform: "Android / Google Play",
      engine: "Godot Engine 4",
      language: "GDScript",
      teamSize: "Tek Kişilik Proje",
      status: "Canlıda"
    },

    problemStory: {
      title: "Klasik Bulmacalarda Hissedilen Tahmin Edilebilirlik Sıkıntısı",
      quote: "Geleneksel 2048 oyunlarında her hamle ızgara üzerindeydi. Oyuncu bir süre sonra otomatik oynamaya başlıyor, heyecan kayboluyordu.",
      story: "İlk aşamada sadece sayı birleştiren tipik bir bulmaca prototipi kurmuştum. Fakat birkaç testten sonra fark ettim ki oyuncular hamleleri hiç düşünmeden hızlıca yapıyordu. Bu mekaniği canlandırmak için işin içine açı, kütle ve yerçekimi girmeliydi. Ancak bu sefer de fizik kaosu kontrolü zorlaştırıyordu."
    },

    solutionStory: {
      title: "Golf Atış Hassasiyeti ile Çarpışma Mantığının Sentezi",
      quote: "Topun yörüngesini oyuncuya hissettirmek, kontrol ile şans arasındaki o ince çizgiyi kurmaktı.",
      story: "Çözüm olarak golf atışlarındaki açı ve kuvvet çekme mekaniğini entegre ettim. Oyuncu nişan alırken dinamik yörünge çizgisini görür, top fırlatıldığında Rigidbody2D fiziği devreye girer. Aynı değerdeki iki top çarpıştığında ise anında birleşerek kütlesi ve boyutu artan bir üst seviye topa dönüşür."
    },

    gameplayJourney: [
      { step: "01", title: "Nişan Alma", desc: "Açı ve kuvvet vektörü hassas dokunmatik girdiyle belirlenir." },
      { step: "02", title: "Fırlatma", desc: "Top Rigidbody2D impulsu ile sahneye salınır." },
      { step: "03", title: "Sekme & Yörünge", desc: "Duvarlardan ve engellerden fiziksel sekme gerçekleşir." },
      { step: "04", title: "Birleşme", desc: "Aynı seviyedeki toplar temas anında birleşip boyut atlar." },
      { step: "05", title: "Skor & Seviye", desc: "Hedef puana ulaşılır ve yeni bölüm açılır." }
    ],

    nodeArchitecture: [
      { id: "1", label: "Input Controller", category: "Girdi Katmanı", desc: "Açı & Kuvvet Vektörü" },
      { id: "2", label: "Aim Trajectory", category: "Görsel Katman", desc: "Dinamik Yörünge Çizgisi" },
      { id: "3", label: "Rigidbody2D Engine", category: "Fizik Motoru", desc: "Godot 2D Simülasyonu" },
      { id: "4", label: "Collision Listener", category: "Çarpışma", desc: "Katman & Maske Filtresi" },
      { id: "5", label: "Merge Logic Mutex", category: "Oyun Mantığı", desc: "Tekil Birleşme Yöneticisi" },
      { id: "6", label: "Score & FX System", category: "Geri Bildirim", desc: "Haptic & Ses Efektleri" }
    ],

    technicalChallenges: [
      {
        title: "Topların Birleşme Anında Çift Skor Yazma Bug'ı",
        problem: "İlk prototipte aynı seviyedeki iki top çarpıştığında fizik motoru aynı anda 2 kez çarpışma eventi tetikliyor, bu da hem skoru ikiye katlıyor hem de sahneden hatalı nesne siliyordu.",
        solution: "Çarpışma algılandığı mikro saniyede topun collision mask'ını kapatan ve birleşme işlemini kilit altına alan Mutex Guard yapısı kurguladım.",
        impact: "Çift skor ve beklenmeyen nesne silinme hataları tamamen sıfırlandı."
      },
      {
        title: "Yüksek Hızlı Atışlarda Duvar İçi Geçiş (Tunneling)",
        problem: "Hızlı fırlatılan topların tek karede duvar collider'ını aşarak sahne dışına çıkması.",
        solution: "Godot'un varsayılan fizik adım sayısını artırdım ve fırlatılan toplar için Continuous Collision Detection (CCD) raycast modunu aktif ettim.",
        impact: "Maksimum hızda dahi nesnelerin duvardan sızma hatası %100 engellendi."
      }
    ],

    engineeringDecisions: [
      { title: "Object Pooling Pattern", desc: "Sık yaratılıp yok edilen efektler ve toplar için bellek havuzu oluşturularak Garbage Collector yükü en aza indirildi." },
      { title: "Custom Physics Layering", desc: "Nesne türlerine göre özel collision katmanları tanımlanarak gereksiz fizik hesaplamaları elendi." },
      { title: "Tactile Haptic Feedback", desc: "Topların birleşme anına özel mikro-titreşim ve ses senkronizasyonu eklenerek fiziksel dokunma hissi güçlendirildi." }
    ],

    techStack: [
      { name: "Godot Engine 4", category: "Game Engine", desc: "2D Oyun Motoru Mimarisi" },
      { name: "GDScript", category: "Language", desc: "Nesne Yönelimli Oyun Skripting" },
      { name: "Physics2D", category: "Physics", desc: "Rigidbody & Collision Simulation" },
      { name: "Google Play Billing", category: "Monetization", desc: "Android İçi Satın Alma Entegrasyonu" }
    ],

    whatILearned: [
      "Fizik tabanlı mekaniklerde kullanıcı girdisi ile kestirilemezlik arasındaki hassas dengeyi kurmayı öğrendim.",
      "Godot Engine 4 mimarisinde performans odaklı bellek ve sahneler arası durum yönetimini derinleştirdim.",
      "Oyun tasarımında minimalist görsel dil ve ses tasarımının kullanıcı elde tutma oranına etkisini gözlemledim."
    ],

    nextSteps: [
      "Global Skor Tablosu & Online Leaderboard Entegrasyonu",
      "Farklı Çevre Fiziklerine Sahip Yeni Bölüm Paketleri",
      "iOS (App Store) Yayın Pipeline Kurulumu"
    ]
  },

  "paper2quiz": {
    slug: "paper2quiz",
    title: "Paper2Quiz",
    tagline: "Turn Study PDFs into Active AI Learning.",
    subtitle: "Sınav PDF'lerini interaktif quiz'lere, flashcard'lara ve AI öğretmen oturumlarına dönüştüren mobil çalışma ortamı.",
    heroBadge: "AI Study Platform / React Native",
    icon: paper2quizIcon,
    storeLink: "https://play.google.com/store/apps/details?id=com.kabadayigames.papertwoquiz",
    storeLabel: "Google Play Store'da İncele",
    githubLink: null,

    impactMetrics: [
      { value: "Gemini", label: "Google AI Engine" },
      { value: "React Native", label: "Mobil Mimari" },
      { value: "%100", label: "Yerel Veri Gizliliği" },
      { value: "Anki & SM-2", label: "Aralıklı Tekrar Algoritması" },
      { value: "Solo", label: "Ürün & UX Geliştirme" }
    ],

    quickOverview: {
      role: "Solo Product Engineer & Designer",
      duration: "1 Ay Geliştirme",
      platform: "Android / Multi-Platform",
      engine: "React Native / Expo",
      language: "JavaScript (ES6+) / TypeScript",
      teamSize: "Tek Kişilik Proje",
      status: "Canlıda"
    },

    problemStory: {
      title: "Ders Dokümanlarında Yaşanan Pasif Okuma Verimsizliği",
      quote: "Yüzlerce sayfalık PDF dosyalarını pasif bir şekilde okumak zihinde kalıcılığı düşürüyor, öğrenciyi hızla yoruyordu.",
      story: "Kendi ders çalışma süreçlerimde sayfalarca PDF okumanın hatırlama oranını artırmadığını gözlemledim. Etkili öğrenme aktif hatırlama (active recall) ve aralıklı tekrar ile mümkündür. Ancak her ders için elle soru hazırlamak saatler sürüyordu."
    },

    solutionStory: {
      title: "PDF'ten Otomatik Yapılandırılmış AI Öğrenme Ağacı",
      quote: "Dokümanı yükle, müfredat ağacını çıkar, sınavını ol ve eksiklerini aralıklı tekrar kartlarıyla pekiştir.",
      story: "Paper2Quiz ile ders dokümanını yüklediğiniz an metinler yerel olarak ayrıştırılır ve Google Gemini API'ye gönderilir. Yapay zeka metinden müfredat ağacı, soru bankası ve anlatım modülleri üretir. Yanlış yapılan sorular otomatik olarak Spaced Repetition sistemine aktarılır."
    },

    gameplayJourney: [
      { step: "01", title: "PDF Yükleme", desc: "Ders dokümanı veya sınav kağıdı cihaza seçilir." },
      { step: "02", title: "Yerel Metin Çıkarımı", desc: "Doküman sayfaları istemci tarafında ayrıştırılır." },
      { step: "03", title: "AI Müfredat Analizi", desc: "Gemini API ile yapılandırılmış JSON konu ağacı üretilir." },
      { step: "04", title: "İnteraktif Sınav", desc: "Kullanıcı test çözer, yanlış cevaplar kaydedilir." },
      { step: "05", title: "Aralıklı Tekrar", desc: "Eksik konular Spaced Repetition flashcard kartlarına aktarılır." }
    ],

    nodeArchitecture: [
      { id: "1", label: "Local PDF Parser", category: "Girdi Katmanı", desc: "Metin & Sayfa Çıkarım Motoru" },
      { id: "2", label: "Gemini API Client", category: "AI Katmanı", desc: "Structured Output Request" },
      { id: "3", label: "JSON Schema Validator", category: "Doğrulama", desc: "Strict Type & Format Parser" },
      { id: "4", label: "AsyncStorage / SQLite", category: "Veri Saklama", desc: "Local-First Persistence" },
      { id: "5", label: "Spaced Repetition Loop", category: "Öğrenme Motoru", desc: "SuperMemo-2 Algoritması" },
      { id: "6", label: "React Native UI", category: "Arayüz", desc: "Accessible Mobile Interface" }
    ],

    technicalChallenges: [
      {
        title: "LLM Yanıtlarında Beklenmeyen Metin Formatı ve JSON Kırılmaları",
        problem: "Yapay zekanın yanıt verirken JSON dışı metin eklemesi veya süslü parantezleri kapatmaması mobil uygulamayı çökertiyordu.",
        solution: "Gemini API üzerinde Strict JSON Schema (Structured Outputs) tanımlandı ve istemci tarafında yanıtı doğrulayan fallback parser yazıldı.",
        impact: "Soru bankası üretirken oluşan render çökme hatası %0'a indirildi."
      },
      {
        title: "Kullanıcı Veri Gizliliği ve Sunucu Maliyetleri",
        problem: "Kullanıcıların özel ders materyallerini üçüncü parti sunucularda saklamak istememesi.",
        solution: "Uygulamayı 'Local-First' mimariyle kurguladım. Kullanıcı kendi Gemini API anahtarını tanımlar; tüm veritabanı doğrudan yerel cihazda saklanır.",
        impact: "Sıfır sunucu maliyeti ve %100 kullanıcı veri mahremiyeti sağlandı."
      }
    ],

    engineeringDecisions: [
      { title: "Local-First Architecture", desc: "Kullanıcı verileri ve dokümanlar dış sunuculara aktarılmadan cihaz içerisinde saklanır." },
      { title: "Spaced Repetition Algorithm", desc: "SuperMemo/Anki mantığına dayalı aralıklı tekrar algoritması ile hatırlama eğrisi optimize edildi." },
      { title: "Custom User API Key Integration", desc: "Kullanıcının kendi Gemini API anahtarını kullanmasıyla sunucu maliyetleri sıfırlandı." }
    ],

    techStack: [
      { name: "React Native", category: "Framework", desc: "Cross-Platform Mobil Motor" },
      { name: "Expo", category: "Tooling", desc: "Geliştirme Suite" },
      { name: "Google Gemini AI", category: "AI Engine", desc: "Yapılandırılmış LLM Entegrasyonu" },
      { name: "AsyncStorage / SQLite", category: "Database", desc: "Local-First Veritabanı" }
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
