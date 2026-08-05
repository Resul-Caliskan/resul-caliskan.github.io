import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileAvatar } from '../components/steven/ProfileAvatar';
import { ProfileHeader } from '../components/steven/ProfileHeader';
import { ProfileBio } from '../components/steven/ProfileBio';
import { SocialLinks } from '../components/steven/SocialLinks';
import { profileData } from '../data/profileData';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { avatar, socials } = profileData;

  const dynamicBio = [
    { id: 1, text: t('bio_1') },
    { id: 2, text: t('bio_2') },
  ];

  return (
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
  );
};
