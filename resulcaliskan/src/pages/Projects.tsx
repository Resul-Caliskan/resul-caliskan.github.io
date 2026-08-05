import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGrid, FiPlayCircle, FiZap, FiCode, FiClock } from 'react-icons/fi';
import { FaGamepad } from 'react-icons/fa6';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectCategory } from '../types/projectTypes';
import { SEO } from '../components/common/SEO';

export const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: {
    id: ProjectCategory;
    labelTr: string;
    labelEn: string;
    Icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: 'all', labelTr: 'Tümü', labelEn: 'All Projects', Icon: FiGrid as any },
    { id: 'in_progress', labelTr: 'Geliştirilmekte (In Progress)', labelEn: 'In Progress', Icon: FiClock as any },
    { id: 'live', labelTr: 'Canlıda (Google Play)', labelEn: 'Live Apps', Icon: FiPlayCircle as any },
    { id: 'games', labelTr: 'Mobil Oyunlar', labelEn: 'Games', Icon: FaGamepad as any },
    { id: 'ai_web', labelTr: 'Yapay Zekâ & Web', labelEn: 'AI & Web', Icon: FiZap as any },
    { id: 'open_source', labelTr: 'Açık Kaynak', labelEn: 'Open Source', Icon: FiCode as any },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category.includes(activeCategory);
  });

  const lang = i18n.language.startsWith('en') ? 'en' : 'tr';

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${t('projects_title')} - Resul Çalışkan`,
    description: t('projects_desc'),
    url: 'https://resul-caliskan.github.io/projeler',
    mainEntity: projectsData.map((p) => ({
      '@type': 'SoftwareApplication',
      name: p.title,
      description: p.description[lang],
      applicationCategory: p.category.includes('games') ? 'GameApplication' : 'DeveloperApplication',
      operatingSystem: p.isLive ? 'Android' : 'Web',
    })),
  };

  return (
    <>
      <SEO
        title={t('projects_title')}
        description={t('projects_desc')}
        canonicalUrl="/projeler"
        lang={i18n.language}
        schemaData={projectsSchema}
      />
      <main className="steven-main-layout">
        <div className="steven-content-wrapper projects-wrapper">
          <header className="projects-header">
            <h1 className="profile-headline">{t('projects_title')}</h1>
            <p className="profile-bio-paragraph">{t('projects_desc')}</p>

            {/* Category Switcher Tabs */}
            <div className="project-category-tabs">
              {categories.map((cat) => {
                const CategoryIcon = cat.Icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  >
                    <span className="tab-icon">
                      <CategoryIcon />
                    </span>
                    {lang === 'en' ? cat.labelEn : cat.labelTr}
                  </button>
                );
              })}
            </div>
          </header>

          {/* Projects List / Grid */}
          <section className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};
