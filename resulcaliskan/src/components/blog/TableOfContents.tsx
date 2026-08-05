import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TocItem } from '../../types/blogTypes';

interface TableOfContentsProps {
  toc: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ toc }) => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = toc.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(toc[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  if (toc.length === 0) return null;

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="toc-container" aria-label={t('toc_title')}>
      <div className="toc-title">{t('toc_title')}</div>
      <ul className="toc-list">
        {toc.map((item) => (
          <li
            key={item.id}
            className={`toc-item level-${item.level} ${activeId === item.id ? 'active' : ''}`}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleTocClick(e, item.id)}
              className="toc-link"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
