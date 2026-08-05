// src/data/profileData.ts
import { ProfileData } from '../types';

export const profileData: ProfileData = {
  avatar: {
    src: "/me.png",
    alt: "Resul Çalışkan Profil Fotoğrafı",
  },
  headline: "Software Developer. Builder. Tech Enthusiast.",
  bio: [
    {
      id: 1,
      text: "Merhaba, ben Resul. Yazılım geliştiriciyim. Modern web teknolojileri, ölçeklenebilir mimariler ve yapay zeka entegrasyonları üzerine çalışıyorum.",
    },
    {
      id: 2,
      text: "Bu kişisel sitemde edindiğim tecrübeleri, geliştirdiğim projeleri ve teknik yazılarımı paylaşıyorum.",
    },
  ],
  socials: [
    {
      id: "twitter",
      name: "Twitter / X",
      url: "https://x.com/caliskan_Ressul",
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/resul-caliskan",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/resul-caliskan",
    },
  ],
  navItems: [
    { label: "projects", path: "/projeler" },
    { label: "blog", path: "/blog" },
  ],
};
