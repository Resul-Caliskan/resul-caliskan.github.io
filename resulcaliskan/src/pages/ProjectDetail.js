// pages/ProjectDetail.js
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectData';
import './ProjectDetail.css';
import { FiArrowLeft, FiExternalLink, FiArrowRight } from 'react-icons/fi';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="ed-container" style={{ textAlign: 'center', padding: '160px 1.5rem 6rem' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Proje Bulunamadı</h2>
        <p style={{ color: '#94A3B8', marginTop: '1rem', fontSize: '1.1rem' }}>
          Aradığınız proje mevcut değil veya kaldırılmış olabilir.
        </p>
        <Link to="/" className="ed-back-link" style={{ marginTop: '2rem', display: 'inline-flex' }}>
          <FiArrowLeft size={18} /> Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  const nextSlug = slug === 'ballgorithm' ? 'paper2quiz' : 'ballgorithm';
  const nextProject = projectsData[nextSlug];

  return (
    <main className="ed-container">
      {/* Top Navigation Back Link */}
      <Link to="/" className="ed-back-link" onClick={(e) => { e.preventDefault(); navigate('/#projects'); }}>
        <FiArrowLeft size={18} /> Projelere Dön
      </Link>

      {/* Header Card */}
      <header className="ed-header">
        <div className="ed-header-top">
          <img src={project.icon} alt={`${project.title} logo`} className="ed-app-icon" />
          <div>
            <h1 className="ed-title">{project.title}</h1>
            <span className="ed-badge">{project.heroBadge}</span>
          </div>
        </div>

        <p className="ed-subtitle">{project.subtitle}</p>
      </header>

      {/* Overview & Action Section */}
      <section className="ed-section ed-overview-section">
        {project.storeLink && (
          <div className="ed-action-wrapper">
            <a href={project.storeLink} target="_blank" rel="noopener noreferrer" className="ed-cta-btn">
              <span>{project.storeLabel || "Google Play Store'da İncele"}</span>
              <FiExternalLink size={16} />
            </a>
          </div>
        )}

        {project.quickOverview && (
          <div className="ed-meta-grid">
            <div className="ed-meta-card">
              <span className="ed-meta-label">Rol</span>
              <span className="ed-meta-val">{project.quickOverview.role}</span>
            </div>
            <div className="ed-meta-card">
              <span className="ed-meta-label">Süre</span>
              <span className="ed-meta-val">{project.quickOverview.duration}</span>
            </div>
            <div className="ed-meta-card">
              <span className="ed-meta-label">Platform</span>
              <span className="ed-meta-val">{project.quickOverview.platform}</span>
            </div>
            <div className="ed-meta-card">
              <span className="ed-meta-label">Motor</span>
              <span className="ed-meta-val">{project.quickOverview.engine}</span>
            </div>
            <div className="ed-meta-card">
              <span className="ed-meta-label">Ekip</span>
              <span className="ed-meta-val">{project.quickOverview.teamSize}</span>
            </div>
          </div>
        )}
      </section>

      {/* Section 01: Problem & Motivasyon */}
      {project.problemStory && (
        <section className="ed-section">
          <h2 className="ed-section-title">01. Problem & Motivasyon</h2>
          <div className="ed-quote">"{project.problemStory.quote}"</div>
          <p className="ed-text">{project.problemStory.story}</p>
        </section>
      )}

      {/* Section 02: Çözüm & Yaklaşım */}
      {project.solutionStory && (
        <section className="ed-section">
          <h2 className="ed-section-title">02. Tasarladığım Çözüm</h2>
          <div className="ed-quote" style={{ borderLeftColor: '#10B981' }}>"{project.solutionStory.quote}"</div>
          <p className="ed-text">{project.solutionStory.story}</p>
        </section>
      )}

      {/* Section 03: Adımlı Deneyim Döngüsü */}
      {project.gameplayJourney && (
        <section className="ed-section">
          <h2 className="ed-section-title">03. Adımlı Deneyim Döngüsü</h2>
          <div className="ed-step-list">
            {project.gameplayJourney.map((step, index) => (
              <div key={index} className="ed-step-item">
                <span className="ed-step-num">{step.step}.</span>
                <div className="ed-step-content">
                  <div className="ed-step-name">{step.title}</div>
                  <div>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 04: Sistem Mimarisi */}
      {project.nodeArchitecture && (
        <section className="ed-section">
          <h2 className="ed-section-title">04. Sistem Mimarisi</h2>
          <div className="ed-step-list">
            {project.nodeArchitecture.map((node, index) => (
              <div key={index} className="ed-step-item">
                <span className="ed-step-num">{index + 1}.</span>
                <div className="ed-step-content">
                  <div className="ed-step-name">{node.label} <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 'normal' }}>({node.category})</span></div>
                  <div>{node.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 05: Teknik Zorluklar ve Çözümler */}
      {project.technicalChallenges && (
        <section className="ed-section">
          <h2 className="ed-section-title">05. Teknik Zorluklar & Çözümler</h2>
          {project.technicalChallenges.map((item, index) => (
            <div key={index} className="ed-challenge-box">
              <div className="ed-challenge-head">{item.title}</div>
              
              <div className="ed-challenge-sub" style={{ color: '#F87171' }}>Problem</div>
              <div className="ed-challenge-text">{item.problem}</div>

              <div className="ed-challenge-sub" style={{ color: '#60A5FA' }}>Çözüm</div>
              <div className="ed-challenge-text">{item.solution}</div>

              <div className="ed-challenge-sub" style={{ color: '#34D399' }}>Sonuç</div>
              <div className="ed-challenge-text" style={{ fontWeight: '600', color: '#F8FAFC', marginBottom: 0 }}>{item.impact}</div>
            </div>
          ))}
        </section>
      )}

      {/* Section 06: Mimari Kararlar */}
      {project.engineeringDecisions && (
        <section className="ed-section">
          <h2 className="ed-section-title">06. Mimari Kararlar</h2>
          <div className="ed-step-list">
            {project.engineeringDecisions.map((item, index) => (
              <div key={index} className="ed-step-item">
                <div className="ed-step-content">
                  <div className="ed-step-name">{item.title}</div>
                  <div>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 07: Teknolojiler */}
      {project.techStack && (
        <section className="ed-section">
          <h2 className="ed-section-title">07. Kullanılan Teknolojiler</h2>
          <div className="ed-tech-flex">
            {project.techStack.map((tech, index) => (
              <span key={index} className="ed-tech-pill">
                {tech.name} <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>({tech.category})</span>
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Section 08: Öğrenilen Dersler */}
      {project.whatILearned && (
        <section className="ed-section">
          <h2 className="ed-section-title">08. Öğrenilen Dersler</h2>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#CBD5E1' }}>
            {project.whatILearned.map((insight, index) => (
              <li key={index} style={{ marginBottom: '0.75rem' }}>
                {insight}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Footer Navigation */}
      <footer className="ed-footer">
        <Link to="/" className="ed-back-link" style={{ marginBottom: 0 }}>
          <FiArrowLeft size={18} /> Ana Sayfaya Dön
        </Link>
        {nextProject && (
          <Link to={`/projeler/${nextSlug}`} className="ed-cta-btn" style={{ background: '#1E293B', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span>Sonraki Proje: {nextProject.title}</span>
            <FiArrowRight size={16} />
          </Link>
        )}
      </footer>
    </main>
  );
};

export default ProjectDetail;
