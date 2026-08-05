import React from 'react';
import { Link } from 'react-router-dom';
import { BioProps } from '../../types';

/**
 * ProfileBio Component
 * Single Responsibility Principle (SRP): Displays introductory paragraphs and links.
 */
export const ProfileBio: React.FC<BioProps> = ({ bioData }) => {
  if (!bioData || !Array.isArray(bioData)) return null;

  return (
    <div className="profile-bio-container">
      {bioData.map((item) => (
        <p key={item.id} className="profile-bio-paragraph">
          {item.text}
          {item.links && item.links.map((link, idx) => (
            <React.Fragment key={idx}>
              {" "}
              {link.isExternal ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="profile-bio-link"
                >
                  {link.label}
                </a>
              ) : (
                <Link to={link.url} className="profile-bio-link">
                  {link.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </p>
      ))}
    </div>
  );
};
