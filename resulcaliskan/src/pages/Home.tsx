import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileAvatar } from '../components/steven/ProfileAvatar';
import { ProfileHeader } from '../components/steven/ProfileHeader';
import { ProfileBio } from '../components/steven/ProfileBio';
import { SocialLinks } from '../components/steven/SocialLinks';
import { profileData } from '../data/profileData';
import { SEO } from '../components/common/SEO';

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { avatar, socials } = profileData;

  const dynamicBio = [
    { id: 1, text: t('bio_1') },
    { id: 2, text: t('bio_2') },
  ];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Resul Çalışkan',
    url: 'https://resul-caliskan.github.io',
    image: 'https://resul-caliskan.github.io/me.png',
    jobTitle: 'Software Developer',
    sameAs: socials.map((s) => s.url),
    description: t('bio_1'),
  };

  return (
    <>
      <SEO
        title={t('headline')}
        description={t('bio_1')}
        canonicalUrl="/"
        lang={i18n.language}
        schemaData={personSchema}
      />
      <main className="steven-main-layout">
        <div className="steven-content-wrapper">
          <ProfileAvatar
            src={avatar.src}
            alt={avatar.alt}
            width={160}
            height={160}
          />
          <ProfileHeader title={t('headline')} />
          <ProfileBio bioData={dynamicBio} />
          <SocialLinks socials={socials} />
        </div>
      </main>
    </>
  );
};
