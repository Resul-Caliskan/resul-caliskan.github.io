import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  tr: {
    translation: {
      headline: "Software Developer. Builder. Tech Enthusiast.",
      bio_1: "Merhaba, ben Resul. Yazılım geliştiriciyim. Modern web teknolojileri, ölçeklenebilir mimariler ve yapay zeka entegrasyonları üzerine çalışıyorum.",
      bio_2: "Bu kişisel sitemde edindiğim tecrübeleri, geliştirdiğim projeleri ve teknik yazılarımı paylaşıyorum.",
      nav_projects: "projeler",
      nav_blog: "blog",
      projects_title: "Projeler",
      projects_desc: "Geliştirdiğim açık kaynaklı projeler ve ürün çalışmaları yakında burada detaylı şekilde listelenecektir.",
      blog_title: "Blog",
      blog_desc: "Teknoloji, yazılım mimarileri ve deneyimlerim üzerine kaleme aldığım yazılar yakında burada yayınlanacak.",
      lang_tr: "TR",
      lang_en: "EN"
    }
  },
  en: {
    translation: {
      headline: "Software Developer. Builder. Tech Enthusiast.",
      bio_1: "Hi, I'm Resul. I'm a software developer building modern web technologies, scalable architectures, and AI integrations.",
      bio_2: "On this personal website, I share my learnings, open source projects, and technical writings.",
      nav_projects: "projects",
      nav_blog: "blog",
      projects_title: "Projects",
      projects_desc: "My open-source projects and product work will be listed here in detail soon.",
      blog_title: "Blog",
      blog_desc: "My articles on technology, software architecture, and personal experiences will be published here soon.",
      lang_tr: "TR",
      lang_en: "EN"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
