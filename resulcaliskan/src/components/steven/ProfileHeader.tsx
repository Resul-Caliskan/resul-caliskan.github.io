import React from 'react';
import { HeaderProps } from '../../types';

/**
 * ProfileHeader Component
 * Single Responsibility Principle (SRP): Displays main headline text.
 */
export const ProfileHeader: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="profile-headline">
      {title}
    </h1>
  );
};
