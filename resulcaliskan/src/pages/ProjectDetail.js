// pages/ProjectDetail.js
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectData';
import './ProjectDetail.css';
import { 
  FiArrowLeft, 
  FiExternalLink, 
  FiGithub, 
  FiCheckCircle, 
  FiLayers, 
  FiCpu, 
  FiCode, 
  FiCompass,
  FiMail
} from 'react-icons/fi';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="cs-container" style={{ textAlign: 'center', padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Proje Bulunamadı</h2>
        <p style={{ color: '#64748b', marginTop: '1rem', fontSize: '1.2rem' }}>
          Aradığınız proje mevcut değil veya erişim sınırı bulunuyor.
        </p>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', color: '#2563eb', fontWeight: '700' }}>
          <FiArrowLeft size={20} /> Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="cs-container">
      {/* 0. Sticky Navigation Bar */}
      <nav className="cs-nav">
        <button onClick={() => navigate('/#projects')} className="cs-back-btn">
          <FiArrowLeft size={18} /> Projelere Dön
        </button>
        <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#475569' }}>
          Engineering Case Study — {project.title}
        </span>
        <a href="mailto:resulcaliskansau@gmail.com" className="cs-back-btn" style={{ color: '#2563eb' }}>
          İletişim <FiMail size={16} />
        </a>
      </nav>

      {/* 1. Hero Section */}
      <header className="cs-hero">
        <div className="cs-hero-top">
          <img src={project.icon} alt={`${project.title} icon`} className="cs-hero-icon" />
          <div className="cs-hero-meta">
            <span className="cs-hero-badge">{project.heroBadge}</span>
            <h1 className="cs-hero-title">{project.title}</h1>
            <p className="cs-hero-subtitle">{project.subtitle}</p>
            <div className="cs-hero-actions">
              {project.storeLink && (
                <a href={project.storeLink} target="_blank" rel="noopener noreferrer" className="cs-btn-primary">
                  <span>{project.storeLabel}</span>
                  <FiExternalLink size={18} />
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="cs-btn-secondary">
                  <FiGithub size={18} /> Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Impact Metrics Bar */}
        {project.impactMetrics && (
          <div className="cs-metrics-grid">
            {project.impactMetrics.map((item, index) => (
              <div key={index} className="cs-metric-card">
                <div className="cs-metric-val">{item.value}</div>
                <div className="cs-metric-lbl">{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* 2. Quick Overview Bar */}
      {project.quickOverview && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">01 / Quick Overview</span>
            <h2 className="cs-section-title">Proje Özeti & Rolüm</h2>
          </div>
          <div className="cs-overview-grid">
            <div className="cs-overview-card">
              <div className="cs-overview-label">Geliştirici Rolü</div>
              <div className="cs-overview-value">{project.quickOverview.role}</div>
            </div>
            <div className="cs-overview-card">
              <div className="cs-overview-label">Geliştirme Süresi</div>
              <div className="cs-overview-value">{project.quickOverview.duration}</div>
            </div>
            <div className="cs-overview-card">
              <div className="cs-overview-label">Hedef Platform</div>
              <div className="cs-overview-value">{project.quickOverview.platform}</div>
            </div>
            <div className="cs-overview-card">
              <div className="cs-overview-label">Motor / Framework</div>
              <div className="cs-overview-value">{project.quickOverview.engine}</div>
            </div>
            <div className="cs-overview-card">
              <div className="cs-overview-label">Programlama Dili</div>
              <div className="cs-overview-value">{project.quickOverview.language}</div>
            </div>
            <div className="cs-overview-card">
              <div className="cs-overview-label">Ekip Boyutu</div>
              <div className="cs-overview-value">{project.quickOverview.teamSize}</div>
            </div>
            <div className="cs-overview-card">
              <div className="cs-overview-label">Proje Durumu</div>
              <div className="cs-overview-value" style={{ color: '#059669' }}>{project.quickOverview.status}</div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Problem */}
      {project.problem && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">02 / The Problem</span>
            <h2 className="cs-section-title">Neyi Çözmeye Çalıştım?</h2>
            <p className="cs-section-desc">Kullanıcıların yaşadığı temel darboğazlar ve ürün motivasyonu.</p>
          </div>
          <div className="cs-card-grid-2">
            {project.problem.map((item, index) => (
              <div key={index} className="cs-card-box" style={{ borderLeft: '4px solid #dc2626' }}>
                <div className="cs-card-title">{item.title}</div>
                <div className="cs-card-text">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Solution */}
      {project.solution && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">03 / The Solution</span>
            <h2 className="cs-section-title">Geliştirdiğim Yenilikçi Çözüm</h2>
            <p className="cs-section-desc">Teknik yaklaşım ve ürün fark yaratan özellikleri.</p>
          </div>
          <div className="cs-card-grid-2">
            {project.solution.map((item, index) => (
              <div key={index} className="cs-card-box" style={{ borderLeft: '4px solid #2563eb' }}>
                <div className="cs-card-title">{item.title}</div>
                <div className="cs-card-text">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Gameplay Journey Timeline */}
      {project.gameplayJourney && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">04 / User Journey & Gameplay</span>
            <h2 className="cs-section-title">Adım Adım Kullanıcı & Sistem Akışı</h2>
            <p className="cs-section-desc">Girdiden çıktılara adım adım deneyim döngüsü.</p>
          </div>
          <div className="cs-timeline-grid">
            {project.gameplayJourney.map((step, index) => (
              <div key={index} className="cs-timeline-step">
                <div className="cs-step-num">{step.step}</div>
                <div className="cs-step-title">{step.title}</div>
                <div className="cs-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Framer Style Node Architecture */}
      {project.nodeArchitecture && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">05 / Code & Data Architecture</span>
            <h2 className="cs-section-title">Düğümlü Sistem Mimarisi (Node Map)</h2>
            <p className="cs-section-desc">Modüller arası veri akışı ve katmanlı yazılım yapısı.</p>
          </div>
          <div className="cs-node-grid">
            {project.nodeArchitecture.map((node, index) => (
              <div key={index} className="cs-node-card">
                <div className="cs-node-category">{node.category}</div>
                <div className="cs-node-name">{node.name}</div>
                <div className="cs-node-desc">{node.desc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Technical Challenges (Triplet Format) */}
      {project.technicalChallenges && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">06 / Technical Challenges</span>
            <h2 className="cs-section-title">Zorlu Mühendislik Problemleri & Çözümler</h2>
            <p className="cs-section-desc">Geliştirme sürecinde karşılaşılan derin teknik engeller.</p>
          </div>
          {project.technicalChallenges.map((item, index) => (
            <div key={index} className="cs-challenge-card">
              <div className="cs-challenge-grid">
                <div>
                  <div className="cs-triplet-title challenge">⚠️ Mühendislik Problemi</div>
                  <div className="cs-triplet-text">{item.challenge}</div>
                </div>
                <div>
                  <div className="cs-triplet-title solution">🛠️ Uygulanan Çözüm</div>
                  <div className="cs-triplet-text">{item.solution}</div>
                </div>
                <div>
                  <div className="cs-triplet-title impact">🎯 Elde Edilen Sonuç</div>
                  <div className="cs-triplet-text">{item.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* 8. Engineering Decisions */}
      {project.engineeringDecisions && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">07 / Engineering Decisions</span>
            <h2 className="cs-section-title">Kritik Mimari Kararlar</h2>
            <p className="cs-section-desc">Performans, ölçeklenebilirlik ve sürdürülebilirlik odaklı tercihler.</p>
          </div>
          <div className="cs-decision-grid">
            {project.engineeringDecisions.map((item, index) => (
              <div key={index} className="cs-decision-card">
                <div className="cs-decision-title">{item.title}</div>
                <div className="cs-decision-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. Tech Stack */}
      {project.techStack && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">08 / Tech Stack & Tooling</span>
            <h2 className="cs-section-title">Kullanılan Teknolojiler & Araçlar</h2>
          </div>
          <div className="cs-tech-grid">
            {project.techStack.map((tech, index) => (
              <div key={index} className="cs-tech-card">
                <div className="cs-tech-name">{tech.name}</div>
                <div className="cs-tech-cat">{tech.category}</div>
                <div className="cs-tech-desc">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. What I Learned */}
      {project.whatILearned && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">09 / Engineering Insights</span>
            <h2 className="cs-section-title">Bu Projeden Ne Öğrendim?</h2>
          </div>
          <div className="cs-list-card">
            {project.whatILearned.map((insight, index) => (
              <div key={index} className="cs-list-item">
                <FiCheckCircle size={22} color="#16a34a" style={{ minWidth: '22px', marginTop: '3px' }} />
                <span>{insight}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 11. Next Steps & Roadmap */}
      {project.nextSteps && (
        <section className="cs-section">
          <div className="cs-section-header">
            <span className="cs-section-tag">10 / Future Vision & Roadmap</span>
            <h2 className="cs-section-title">Gelecek Yol Haritası & Planlar</h2>
          </div>
          <div className="cs-list-card">
            {project.nextSteps.map((step, index) => (
              <div key={index} className="cs-list-item">
                <FiCompass size={22} color="#2563eb" style={{ minWidth: '22px', marginTop: '3px' }} />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 12. Call To Action Footer */}
      <footer className="cs-footer-cta">
        <h2 className="cs-footer-title">Birlikte Harika Ürünler İnşa Edelim</h2>
        <p className="cs-footer-subtitle">
          Teknik yetkinliklerim, ürün geliştirme yaklaşımım ve iş birliği fırsatları için benimle iletişime geçebilirsiniz.
        </p>
        <div className="cs-footer-btns">
          <a href="mailto:resulcaliskansau@gmail.com" className="cs-btn-primary" style={{ background: '#ffffff', color: '#0f172a' }}>
            <FiMail size={18} /> İletişime Geçin
          </a>
          <button onClick={() => navigate('/#projects')} className="cs-btn-secondary">
            <FiLayers size={18} /> Tüm Projelerim
          </button>
          <a href="https://github.com/resul-caliskan" target="_blank" rel="noopener noreferrer" className="cs-btn-secondary">
            <FiGithub size={18} /> GitHub Profile
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
