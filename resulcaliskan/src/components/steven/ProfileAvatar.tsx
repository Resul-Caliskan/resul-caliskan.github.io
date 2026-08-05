import React from 'react';
import { AvatarProps } from '../../types';

/**
 * ProfileAvatar Component
 * Single Responsibility Principle (SRP): Renders avatar image cleanly.
 */
export const ProfileAvatar: React.FC<AvatarProps> = ({
  src = "/me.png",
  alt,
  width = 60,
  height = 60,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="profile-avatar-img"
    />
  );
};
