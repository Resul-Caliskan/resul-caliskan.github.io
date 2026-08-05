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
      url: "https://twitter.com/resulcaliskan",
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/resulcaliskan",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/resulcaliskan",
    },
  ],
  navItems: [
    { label: "projects", path: "/projeler" },
    { label: "blog", path: "/blog" },
  ],
};
