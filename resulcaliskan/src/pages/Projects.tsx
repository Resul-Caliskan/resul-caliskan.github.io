import React from 'react';
import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="steven-main-layout">
      <div className="steven-content-wrapper">
        <h1 className="profile-headline">{t('projects_title')}</h1>
        <p className="profile-bio-paragraph">
          {t('projects_desc')}
        </p>
      </div>
    </main>
  );
};
