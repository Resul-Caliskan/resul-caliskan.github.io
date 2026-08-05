import { Project } from '../types/projectTypes';

export const projectsData: Project[] = [
  {
    id: 'ballgorithm',
    title: 'Ballgorithm',
    category: ['live', 'games'],
    featured: true,
    isLive: true,
    icon: '/projects/ballgorithm.png',
    coverImage: '/projects/kabadayi_cover.png',
    description: {
      tr: 'Golf mekanikleri ile 2048 tarzı birleştirme bulmacalarını harmanlayan, fizik tabanlı ve akıllıca tasarlanmış mobil bulmaca oyunu.',
      en: 'A physics-based mobile puzzle game combining golf mechanics with 2048-style merge puzzles, featuring hand-crafted levels and calm pastel visuals.',
    },
    features: {
      tr: [
        'El emeği hissi veren seviye tasarımları',
        'Huzur veren, pastel atmosfer ve lo-fi hava',
        'Tahmin edilemez eğlenceli fizik tabanlı mekanikler',
        'Zeka zorlayıcı ve dinlendirici bulmacalar',
      ],
      en: [
        'Handcrafted level designs with artisanal feel',
        'Soothing pastel aesthetic and relaxed atmosphere',
        'Unpredictable & fun physics engine mechanics',
        'Engaging puzzles for mental relaxation',
      ],
    },
    tags: ['Godot Engine', 'GDScript', 'Physics Engine', 'Google Play', 'Mobile Game'],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.kabadayigames.ballgorithm',
      github: 'https://github.com/Resul-Caliskan/ballgorithm-main',
    },
  },
  {
    id: 'paper2quiz',
    title: 'Paper2Quiz',
    category: ['live', 'ai_web', 'open_source'],
    featured: true,
    isLive: true,
    icon: '/projects/paper2quiz.png',
    description: {
      tr: "Ders ve sınav PDF'lerini interaktif quiz'lere, flashcard'lara ve adım adım AI öğretmen oturumlarına dönüştüren yapay zekâ destekli öğrenme platformu.",
      en: 'An AI-powered study platform that transforms exam PDFs into interactive quizzes, spaced-repetition flashcards, and step-by-step AI tutor sessions.',
    },
    features: {
      tr: [
        "PDF'lerden otomatik soru bankası ve quiz çıkarımı",
        'AI Teacher ile müfredat ağacı ve konu anlatımı',
        'Spaced repetition yöntemli yerel flashcard sistemi',
        'Gizlilik odaklı: Kendi Gemini API anahtarın ile çalışma imkanı',
      ],
      en: [
        'Automated question bank and quiz extraction from PDFs',
        'AI Teacher curriculum mapping & step-by-step explanations',
        'Local flashcards with spaced-repetition algorithms',
        'Privacy-first architecture: Bring Your Own Gemini API Key',
      ],
    },
    tags: ['TypeScript', 'React Native', 'Gemini AI API', 'Google Play', 'EdTech'],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.kabadayigames.papertwoquiz',
      github: 'https://github.com/Resul-Caliskan/Paper2Quiz',
    },
  },
  {
    id: 'thinktap',
    title: 'ThinkTap',
    category: ['ai_web', 'open_source'],
    featured: false,
    description: {
      tr: 'Fikirleri, notları ve araştırmaları hızlıca organize etmeyi sağlayan, yapay zekâ destekli düşünce yönetim platformu.',
      en: 'An AI-powered thought management platform for capturing, organizing, and synthesizing research notes and ideas.',
    },
    tags: ['TypeScript', 'React', 'Node.js', 'AI Integration', 'Open Source'],
    links: {
      github: 'https://github.com/Resul-Caliskan/ThinkTap',
    },
  },
  {
    id: 'harf-okeyi',
    title: 'Harf Okeyi',
    category: ['games', 'open_source'],
    featured: false,
    description: {
      tr: 'Geleneksel Okey oyun dinamiklerini kelime türetme ve harf dizilim stratejileriyle buluşturan özgün masa oyunu.',
      en: 'An innovative board game merging traditional Okey mechanics with word-building and tile-matching strategy.',
    },
    tags: ['Godot Engine', 'GDScript', 'Game Design', 'Open Source'],
    links: {
      github: 'https://github.com/Resul-Caliskan/harf-okeyi',
    },
  },
  {
    id: 'wolf-fighter',
    title: 'Wolf Fighter',
    category: ['games', 'open_source'],
    featured: false,
    description: {
      tr: 'Godot Engine ile geliştirilmiş, akıcı dövüş animasyonlarına ve retro arcade mekaniklerine sahip 2D aksiyon oyunu.',
      en: 'A 2D action arcade game built with Godot Engine featuring smooth combat animations and retro mechanics.',
    },
    tags: ['Godot', 'GDScript', '2D Pixel Art', 'Arcade Game'],
    links: {
      github: 'https://github.com/Resul-Caliskan/wolf-fighter',
    },
  },
  {
    id: 'cognitive-arch',
    title: 'Cognitive-Arch',
    category: ['ai_web', 'open_source'],
    featured: false,
    description: {
      tr: 'İnsan benzeri karar verme ve bellek süreçlerini simüle eden deneysel bilişsel yapay zekâ mimarisi araştırması.',
      en: 'An experimental cognitive AI architecture research project simulating human-like decision making and memory structures.',
    },
    tags: ['Python', 'Cognitive AI', 'Research', 'Apache 2.0'],
    links: {
      github: 'https://github.com/Resul-Caliskan/Cognitive-Arch',
    },
  },
];
