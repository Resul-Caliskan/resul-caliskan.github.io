// pages/ProjectDetail.js
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectData';
import MermaidDiagram from '../components/MermaidDiagram';
import { 
  FiArrowLeft, 
  FiExternalLink, 
  FiLayers, 
  FiCpu, 
  FiCheckCircle, 
  FiCode, 
  FiInfo 
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
      <div style={{ padding: '5rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', color: '#1c1917' }}>Proje Bulunamadı</h2>
        <p style={{ color: '#44403c', marginTop: '1rem' }}>Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: '#2563eb', fontWeight: 'bold' }}>
          <FiArrowLeft /> Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  const isPersonal = project.badge?.includes('Kişisel');
  const badgeStyle = {
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.03em',
    padding: '5px 14px',
    borderRadius: '20px',
    display: 'inline-block',
    backgroundColor: isPersonal ? '#f3e8ff' : '#dbeafe',
    color: isPersonal ? '#581c87' : '#1e3a8a',
    border: isPersonal ? '1.5px solid #c084fc' : '1.5px solid #60a5fa',
  };

  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '2.5rem 1.5rem 6rem' }}>
      {/* Navigation Back Button */}
      <button 
        onClick={() => navigate('/#projects')} 
        style={{
          background: 'none',
          border: 'none',
          color: '#475569',
          fontSize: '0.95rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          padding: '0.4rem 0.8rem',
          borderRadius: '8px',
          backgroundColor: '#f1f5f9',
          transition: 'all 0.2s ease'
        }}
      >
        <FiArrowLeft size={16} /> Projelere Dön
      </button>

      {/* Header Card */}
      <header style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        border: '1px solid #e2e8f0',
        marginBottom: '2.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.75rem', flexWrap: 'wrap' }}>
          <img 
            src={project.icon} 
            alt={`${project.title} logo`} 
            style={{ 
              width: '84px', 
              height: '84px', 
              borderRadius: '18px', 
              objectFit: 'cover',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
            }} 
          />
          <div style={{ flex: 1, minWidth: '260px' }}>
            <span style={badgeStyle}>{project.badge}</span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', margin: '0.6rem 0 0.25rem', letterSpacing: '-0.02em' }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#475569', fontWeight: '500', lineHeight: '1.4' }}>
              {project.subtitle}
            </p>
          </div>
          {project.storeLink && (
            <a 
              href={project.storeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#1e293b',
                color: '#ffffff',
                padding: '0.8rem 1.5rem',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                marginTop: '0.5rem'
              }}
            >
              <span>{project.storeLabel}</span>
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </header>

      {/* Overview Section */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
          <FiInfo size={22} color="#2563eb" />
          <h2 style={{ fontSize: '1.45rem', color: '#0f172a', fontWeight: '700', margin: 0 }}>
            Genel Bakış
          </h2>
        </div>
        <div style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#334155', backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          {project.overview}
        </div>
      </section>

      {/* Conceptual Design & Mermaid Section */}
      {project.conceptualDesign && (
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <FiLayers size={22} color="#7c3aed" />
            <h2 style={{ fontSize: '1.45rem', color: '#0f172a', fontWeight: '700', margin: 0 }}>
              {project.conceptualDesign.title}
            </h2>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#475569', marginBottom: '1rem' }}>
            {project.conceptualDesign.description}
          </p>

          <MermaidDiagram chart={project.conceptualDesign.diagram} />
        </section>
      )}

      {/* Architecture & Flow Section */}
      {project.architecture && (
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <FiCpu size={22} color="#0284c7" />
            <h2 style={{ fontSize: '1.45rem', color: '#0f172a', fontWeight: '700', margin: 0 }}>
              {project.architecture.title}
            </h2>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#475569', marginBottom: '1rem' }}>
            {project.architecture.description}
          </p>

          <MermaidDiagram chart={project.architecture.diagram} />
        </section>
      )}

      {/* Highlights & Features */}
      {project.highlights && (
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <FiCheckCircle size={22} color="#16a34a" />
            <h2 style={{ fontSize: '1.45rem', color: '#0f172a', fontWeight: '700', margin: 0 }}>
              Öne Çıkan Mimari Kararlar
            </h2>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '1.5rem 1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {project.highlights.map((item, index) => (
                <li key={index} style={{ fontSize: '1.05rem', color: '#334155', marginBottom: '0.6rem', lineHeight: '1.6' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <FiCode size={22} color="#ea580c" />
            <h2 style={{ fontSize: '1.45rem', color: '#0f172a', fontWeight: '700', margin: 0 }}>
              Teknoloji Yığını
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {project.techStack.map((tech, index) => (
              <span 
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1e293b',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  padding: '7px 15px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
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
