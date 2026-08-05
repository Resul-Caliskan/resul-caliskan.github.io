import React from 'react';
import { useTranslation } from 'react-i18next';

export const Blog: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="steven-main-layout">
      <div className="steven-content-wrapper">
        <h1 className="profile-headline">{t('blog_title')}</h1>
        <p className="profile-bio-paragraph">
          {t('blog_desc')}
        </p>
      </div>
    </main>
  );
};
