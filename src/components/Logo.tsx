import React from 'react';
import logoImg from '../assets/images/makhwane_pbh_logo_1791491153140.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'full' | 'compact' | 'image-only';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full',
}) => {
  const sizeMap = {
    sm: { imgClass: 'w-10 h-10', textSize: 'text-base', subSize: 'text-[10px]' },
    md: { imgClass: 'w-14 h-14', textSize: 'text-lg', subSize: 'text-xs' },
    lg: { imgClass: 'w-24 h-24 sm:w-28 sm:h-28', textSize: 'text-2xl', subSize: 'text-sm' },
    xl: { imgClass: 'w-32 h-32 sm:w-36 sm:h-36', textSize: 'text-3xl', subSize: 'text-base' },
  };

  const currentSize = sizeMap[size];

  if (variant === 'image-only') {
    return (
      <div className={`relative inline-flex items-center justify-center rounded-2xl bg-white p-1 shadow-[0_4px_20px_rgba(147,51,234,0.25)] border-2 border-purple-500/40 overflow-hidden ${className}`}>
        <img
          src={logoImg}
          alt="Makhwane PBH Granite & Tombstones Logo"
          className={`${currentSize.imgClass} object-contain rounded-xl`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative shrink-0 rounded-xl bg-white p-0.5 shadow-md border border-purple-400/50 overflow-hidden">
          <img
            src={logoImg}
            alt="Makhwane PBH Logo"
            className="w-10 h-10 object-contain rounded-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-serif tracking-wider font-bold text-white text-base leading-none">
            MAKHWANE
          </span>
          <span className="text-[10px] tracking-widest text-purple-400 font-semibold uppercase mt-0.5">
            PBH Granite &amp; Tombstones
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-4 select-none ${className}`}>
      {/* Official Makhwane PBH Logo Emblem */}
      <div className="relative shrink-0 rounded-2xl bg-white p-1 shadow-[0_6px_25px_rgba(147,51,234,0.3)] border-2 border-purple-500/50 overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={logoImg}
          alt="Makhwane PBH Granite & Tombstones Official Logo"
          className={`${currentSize.imgClass} object-contain rounded-xl`}
          referrerPolicy="no-referrer"
        />
      </div>

      {showSubtitle && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-serif tracking-[0.12em] font-extrabold text-white uppercase ${currentSize.textSize} leading-none`}>
              MAKHWANE
            </span>
            <span className="font-serif italic font-extrabold text-purple-400 text-base sm:text-lg">
              PBH
            </span>
          </div>
          <span className={`tracking-[0.2em] font-semibold text-slate-300 uppercase ${currentSize.subSize} mt-1.5`}>
            Granite &amp; Tombstones
          </span>
        </div>
      )}
    </div>
  );
};

export const LOGO_ASSET_URL = logoImg;
