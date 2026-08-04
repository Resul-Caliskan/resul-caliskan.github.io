// pages/ProjectDetail.js
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectData';
import MermaidDiagram from '../components/MermaidDiagram';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', color: '#1c1917' }}>Proje Bulunamadı</h2>
        <p style={{ color: '#44403c', marginTop: '1rem' }}>Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>
        <Link to="/" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#2563eb', fontWeight: 'bold' }}>
          ← Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  const isPersonal = project.badge?.includes('Kişisel');
  const badgeStyle = {
    fontSize: '0.9rem',
    fontWeight: '700',
    padding: '6px 16px',
    borderRadius: '20px',
    display: 'inline-block',
    backgroundColor: isPersonal ? '#f3e8ff' : '#dbeafe',
    color: isPersonal ? '#581c87' : '#1e3a8a',
    border: isPersonal ? '1.5px solid #c084fc' : '1.5px solid #60a5fa',
  };

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
      {/* Navigation Back Button */}
      <button 
        onClick={() => navigate('/#projects')} 
        style={{
          background: 'none',
          border: 'none',
          color: '#475569',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          padding: '0.5rem 0'
        }}
      >
        ← Projelere Dön
      </button>

      {/* Header Section */}
      <header style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '24px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
        border: '1px solid #f1f5f9',
        marginBottom: '2.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
          <img 
            src={project.icon} 
            alt={`${project.title} logo`} 
            style={{ 
              width: '88px', 
              height: '88px', 
              borderRadius: '20px', 
              objectFit: 'cover',
              boxShadow: '0 6px 16px rgba(0,0,0,0.1)'
            }} 
          />
          <div style={{ flex: 1, minWidth: '280px' }}>
            <span style={badgeStyle}>{project.badge}</span>
            <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', margin: '0.5rem 0 0.25rem' }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#475569', fontWeight: '500' }}>
              {project.subtitle}
            </p>
          </div>
          {project.storeLink && (
            <a 
              href={project.storeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '0.85rem 1.75rem',
                borderRadius: '14px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                marginTop: '0.5rem'
              }}
            >
              {project.storeLabel} ➔
            </a>
          )}
        </div>
      </header>

      {/* Overview Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#0f172a', fontWeight: '700', marginBottom: '1rem' }}>
          📌 Genel Bakış & Proje Amacı
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          {project.overview}
        </p>
      </section>

      {/* Conceptual Design & Mermaid Section */}
      {project.conceptualDesign && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', fontWeight: '700', marginBottom: '0.5rem' }}>
            💡 {project.conceptualDesign.title}
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#475569', marginBottom: '1rem' }}>
            {project.conceptualDesign.description}
          </p>

          <MermaidDiagram chart={project.conceptualDesign.diagram} />
        </section>
      )}

      {/* Architecture & Flow Section */}
      {project.architecture && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', fontWeight: '700', marginBottom: '0.5rem' }}>
            🏗️ {project.architecture.title}
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#475569', marginBottom: '1rem' }}>
            {project.architecture.description}
          </p>

          <MermaidDiagram chart={project.architecture.diagram} />
        </section>
      )}

      {/* Highlights & Features */}
      {project.highlights && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', fontWeight: '700', marginBottom: '1rem' }}>
            ⚡ Öne Çıkan Detaylar & Mimari Kararlar
          </h2>
          <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {project.highlights.map((item, index) => (
                <li key={index} style={{ fontSize: '1.05rem', color: '#334155', marginBottom: '0.75rem', lineHeight: '1.6' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {project.techStack && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', fontWeight: '700', marginBottom: '1rem' }}>
            🛠️ Kullanılan Teknolojiler & Araçlar
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {project.techStack.map((tech, index) => (
              <span 
                key={index}
                style={{
                  backgroundColor: '#f1f5f9',
                  color: '#1e293b',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProjectDetail;
