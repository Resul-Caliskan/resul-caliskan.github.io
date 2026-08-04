// components/ProjectsSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import kamiFavicon from '../png/kami-favicon.png';
import kamiPreview from '../png/kami-preview.webp';
import hrhubFavicon from '../png/hrhub.png';
import ballgorithmIcon from '../png/ballgoritm_icon.png';
import paper2quizIcon from '../png/paper2quiz_icon.png';

const ProjectsSection = () => {
  const professionalProjects = [
    {
      slug: "kami",
      title: "Kami — Çizgi Studio",
      badge: "Profesyonel Deneyim — Full Stack Developer",
      badgeType: "professional",
      description: "Çizgi Studio bünyesinde Full Stack Developer olarak geliştirilmesinde yer aldığım sosyal hikaye ve çizgi roman platformu. Kami Workshop ile dijital içerik üretimi, AI karakter sohbetleri ve topluluk etkileşimi.",
      favicon: kamiFavicon,
      image: kamiPreview,
      detailLink: "/projeler/kami",
      liveLabel: "Kavramsal Tasarımı İncele",
      alt: "Kami by Çizgi Studio preview"
    },
    {
      slug: "hrhub",
      title: "HRHUB CRM",
      badge: "Profesyonel Deneyim — Full Stack Developer",
      badgeType: "professional",
      description: "Full Stack Developer olarak geliştirme süreçlerinde rol aldığım yapay zeka destekli CRM web uygulaması. İnsan kaynakları ve müşteri ilişkileri yönetim çözümleri.",
      favicon: hrhubFavicon,
      image: "https://static.wingify.com/gcp/uploads/sites/18/2023/08/CRM.png",
      detailLink: "/projeler/hrhub",
      liveLabel: "Kavramsal Tasarımı İncele",
      alt: "HRHUB CRM preview image"
    }
  ];

  const personalProjects = [
    {
      slug: "ballgorithm",
      title: "Ballgorithm",
      badge: "Kişisel Proje / Oyun",
      badgeType: "personal",
      description: "Golf mekaniklerinden ve 2048 tarzı birleştirme bulmacalarından ilham alan, fizik tabanlı ve akıllıca tasarlanmış bir bulmaca oyunu. Topları doğru açıyla fırlatın, engelleri aşın ve hedefe ulaşın!",
      favicon: ballgorithmIcon,
      image: null,
      detailLink: "/projeler/ballgorithm",
      liveLabel: "Kavramsal Tasarımı İncele",
      alt: "Ballgorithm icon preview"
    },
    {
      slug: "paper2quiz",
      title: "Paper2Quiz",
      badge: "Kişisel Proje / AI Uygulama",
      badgeType: "personal",
      description: "Sınav PDF'lerini interaktif quiz'lere, flashcard'lara ve adım adım AI öğretmen oturumlarına dönüştürür. Müfredat haritası çıkarma, kavram kartlarıyla pekiştirme ve yerel yapay zeka entegrasyonu sunar.",
      favicon: paper2quizIcon,
      image: null,
      detailLink: "/projeler/paper2quiz",
      liveLabel: "Kavramsal Tasarımı İncele",
      alt: "Paper2Quiz icon preview"
    }
  ];

  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <SectionHeading title="ProfesyonelDeneyim" subtitle="Şirketlerde geliştirdiğim ürünler ve projeler" />
        <div className="project-boxes-div">
          {professionalProjects.map((project, index) => (
            <ProjectBox key={index} project={project} />
          ))}
        </div>

        <div style={{ marginTop: '4.5rem' }}>
          <SectionHeading title="KişiselProjeler" subtitle="Bağımsız olarak geliştirdiğim uygulamalar ve oyunlar" />
          <div className="project-boxes-div">
            {personalProjects.map((project, index) => (
              <ProjectBox key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle }) => (
  <div className="section-heading" data-aos="fade-up">
    <h2 className="section-heading-article" tabIndex="0" aria-label={`My ${title} starts from here`}>
      &#60;/{title}&#62;
    </h2>
    {subtitle && (
      <p className="sectionHeadingP" style={{ fontSize: '1.15rem', color: '#292524', marginTop: '0.6rem', fontWeight: '600', lineHeight: '1.5' }}>
        {subtitle}
      </p>
    )}
  </div>
);

const ProjectBox = ({ project }) => {
  const isPersonal = project.badgeType === 'personal';
  const badgeStyle = {
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.03em',
    padding: '5px 14px',
    borderRadius: '20px',
    display: 'inline-block',
    marginBottom: '0.5rem',
    backgroundColor: isPersonal ? '#f3e8ff' : '#dbeafe',
    color: isPersonal ? '#581c87' : '#1e3a8a',
    border: isPersonal ? '1.5px solid #c084fc' : '1.5px solid #60a5fa',
  };

  return (
    <div data-aos="fade-up" className="project-box-wrapper">
      <div className="project-box project-box2">
        <div className="info-div">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <img src={project.favicon} alt={`${project.title} favicon`} className="faviconforProject" style={{ width: '70px', height: '70px', minWidth: '70px', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <div>
              <span style={badgeStyle}>
                {project.badge}
              </span>
              <article className="ProjectHeading" style={{ marginTop: '0.2rem', fontSize: '1.45rem', fontWeight: '700', color: '#1c1917' }}>{project.title}</article>
            </div>
          </div>
          <p className="ProjectDescription" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#334155', fontWeight: '450' }}>{project.description}</p>
          <div className="project-buttons" style={{ marginTop: '1.25rem' }}>
            <Link to={project.detailLink} className="cta" aria-label={`View details for ${project.title}`}>
              <span>{project.liveLabel || "Kavramsal Tasarımı İncele"}</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
        </div>
        {project.image && (
          <div className="image-div">
            <img src={project.image} alt={project.alt} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
