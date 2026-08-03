// components/ProjectsSection.js
import React from 'react';
import kamiFavicon from '../png/kami-favicon.png';
import kamiPreview from '../png/kami-preview.webp';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Kami",
      description: "Çizgi Studio's social storytelling platform — read, write, and share stories & comics. Create with Kami Workshop, chat with AI characters, and grow with the community.",
      favicon: kamiFavicon,
      image: kamiPreview,
      liveLink: "https://cizgi.studio/",
      githubLink: null,
      alt: "Kami by Çizgi Studio preview"
    },
    {
      title: "HRHUB CRM",
      description: "Ai powered CRM web application",
      favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU0SURBVHgB1VmNces2DGZ6HUAblCN4g2oEb/C0QdwJrE5gvwmUDZwN1A3UDZROoHSCr2IMhBAEUqJfetfijpcYBPFHgAAp52YAcJhHP4+JRjcP7x6AeV1NvAKMxKvaWFPN4yx0YBjmccnqEiaV4jchvCpUvqG1mteQWfMslGaDefTCGNupRDTKSfJigNaVGTBqwwMP4tUo2koYGHSoEzyDg1+EgV4TBHg1Fg45zxn0B+J1MuY+dkThuhInzXRH4rNwkMlcGNC7nUCeShkA4ufpd5NSnviECDgYcxwZF4nsCXkQuOeUMhtGDEY4nrGEnkNNrZUhhVTIzL+vNFdLi0fBfGCPuUKgMJqUoiChnv4yrlFrO0EbwuUEI2TI0A86uZgTZRAGtO4BULx6Q9EPDxprAug8qRPG5vMT8TwuOkb3AO+ysxWtFb6ynEkOmsL/PyXk/D6PoHxRDhTAe+J3rfCe/r4pfPidd+6/tQu4J+qYkdfQ7xqxrniDx7QliLf1BrvEd0gUnw2+fIroxOxgQ28YsH3EIx6lQCzxLSnQi7kbdvZNuJ9SNxnXWJ+CV5LTYtnWHASPAKecoItgWCdoPGKb8CkgQVsro7n3qpA4VpWcUdB3RO9Tws5EcHU7QAnwAs8d5iSUbgnP4bnryN5Nj1jir8ZcRfN1woiJd4x2UBa0UJQqtaZFBO+2HbVdYGF0k4S/YAmB5pBRiBWvXV4pGYIN1snKu9ULnlWKGSdHk1CeS3wDEZNK2Lpb3ADBj4Er+IBl+J22GJ2I+KCUCpAq8a3Cv2DrfLZlX4WTejE6MnDbISQ81aM0Bv1oGMZO8K7MgMCruHkMoFuJN/WbS/yvSqB39zL/d4J+N1Ce+Hl8dz8CMLpEwvfk1RNiUg2WpxGTsiQHukd2zWLE218rvD6BGAbDgB5Gn7Mhd0TBzS/HaHFRoN/s6R52iQ/wjeg5X7oCmcdUjik6Tw5ukTuaEZs2L7b2lGE6Es3hkVCgNdMGzRlruLiMUpPwfLfBnOmnPfTG2uwaxM7gRk46IOZZm1p0EpbWblsRNnZEeQHLykAipzhSXGYhGxE8u3raw7rEM3xz+w0wlVM0Zt8Po2ZZizulHDdrI9Ydphd43SNxc9eLcdkKH6Ho6lYI41lGL/yMT8S4uyFT4pUR4f9nLG9xI5bPNoxrDPnciku6Iw0+ARtneKohotUD1R7AOqkH4lcZdLKJOys9GN+T80YsodWCrWL1UHERHtq8EJGnuZE7Cz2CA46Kjh1caSacsPx6Ju+ttSsAxG1vE/M+gX8Rjruh5CUERieI2Nu/FvDxGV5nLL8BnA2agC9uxR0xtV6ne5Q9r5vnOpa3qRDPnMTaCLMX2yN41PEuvFmyA0FB/eJcWyElQjT/aLtTMFvekUDZLh8L+KxCDrHse4U/WvxR+E0iwM9PT09X8kTY0obw4WLy2zz3SozD/JHwf874N4NXoNEx/C7mNK2cl/TePQIUNnxpl1t7xhrOxnrrMxKHhfw6w+GZ6nF+/G4gGMpukMOr5+2n+QtioRkMHhzvE5YFqUs4YXfe7TFggP0paFI70kN9qiJPD0L5XozP9pt3GzsvN6UGTAlP3WiuFgos+nvh7dSFqDXoR3zlcz4SMYnEPRaxLbjllM/Qt+4rAfGI5RtRjVQ36BYV9SNsdvDnJAe+MnmVkBZraDP0XhjRId3/yANheDR0nvYQkRJcB17nOvC+QR+UCRWVb2h/uPuj2V/z+MXdv4V54vd95te6/yIgfhuWlxg+kVp8ZcL+X+Ef02nRbEHbtWMAAAAASUVORK5CYII=",
      image: "https://static.wingify.com/gcp/uploads/sites/18/2023/08/CRM.png",
      liveLink: "https://crm-daltonlar.vercel.app/",
      githubLink: null,
      alt: "HRHUB website preview image"
    }
  ];

  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <SectionHeading title="ProjectsIWorkedOn" />
        <div className="project-boxes-div">
          {projects.map((project, index) => (
            <ProjectBox key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title }) => (
  <div className="section-heading" data-aos="fade-up">
    <h2 className="section-heading-article" tabIndex="0" aria-label={`My ${title} starts from here`}>
      &#60;/{title}&#62;
    </h2>
    <p className="sectionHeadingP"></p>
  </div>
);

const ProjectBox = ({ project }) => (
  <div data-aos="fade-up" className="project-box-wrapper">
    <div className="project-box project-box2">
      <div className="info-div">
        <img src={project.favicon} alt={`${project.title} website favicon`} className="faviconforProject" />
        <article className="ProjectHeading">{project.title}</article>
        <p className="ProjectDescription">{project.description}</p>
        <div className="project-buttons">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-redirect"
              aria-label={`Visit ${project.title} on GitHub`}>
              <img src="src/svg/github.svg" alt="github redirect button" />
            </a>
          )}
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cta"
            aria-label={`Visit ${project.title} Live`}>
            <span>Live view</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div className="image-div">
        <img src={project.image} alt={project.alt} />
      </div>
    </div>
  </div>
);

export default ProjectsSection;
