import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiGithub } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa6';
import { Project } from '../../types/projectTypes';

const CheckIcon = FiCheck as any;
const GooglePlayIcon = FaGooglePlay as any;
const GithubIcon = FiGithub as any;

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'tr';

  const description = project.description[lang] || project.description.tr;
  const features = project.features ? (project.features[lang] || project.features.tr) : [];

  return (
    <article className={`project-card ${project.isLive ? 'featured-live-card' : ''}`}>
      {project.isLive && (
        <div className="project-live-badge">
          <span className="live-pulse"></span> {lang === 'en' ? 'Live on Google Play' : 'Canlıda (Google Play)'}
        </div>
      )}

      <div className="project-card-header">
        {project.icon ? (
          <img src={project.icon} alt={project.title} className="project-app-icon" />
        ) : (
          <div className="project-icon-placeholder">
            {project.title.substring(0, 2).toUpperCase()}
          </div>
        )}

        <div className="project-title-wrapper">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tags-row">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="project-desc">{description}</p>

      {features.length > 0 && (
        <ul className="project-features-list">
          {features.map((feat, idx) => (
            <li key={idx} className="project-feature-item">
              <CheckIcon className="feature-check-icon" /> {feat}
            </li>
          ))}
        </ul>
      )}

      <div className="project-links-row">
        {project.links.googlePlay && (
          <a
            href={project.links.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn google-play-btn"
          >
            <GooglePlayIcon className="btn-icon" />
            {lang === 'en' ? 'Get on Google Play' : "Google Play'de İndir"}
          </a>
        )}

        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn github-btn"
          >
            <GithubIcon className="btn-icon" />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
};
