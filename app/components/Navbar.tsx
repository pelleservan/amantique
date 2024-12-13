"use client"; // Indique que c'est un composant client

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = Math.max(1 - scrollY / 1000, 0.5); // Limite la réduction à 50%

  return (
    <nav className="text-white p-4 relative flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <a
          href="https://open.spotify.com/intl-fr/artist/1gUDo746RvvVVY3lbL2r7N?si=9xiGodwdSca93pMnkZ37-w"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <Image
            src="/img/icon/spotify.png"
            alt="Spotify Icon"
            width={20}
            height={20}
            className="rounded-md transition-opacity duration-300"
          />
          <Image
            src="/img/icon/spotify_red.png"
            alt="Spotify Icon Hover"
            width={20}
            height={20}
            className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </a>

        <a
          href="https://music.apple.com/fr/artist/amantique/1771329106"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <Image
            src="/img/icon/apple.png"
            alt="Apple Icon"
            width={20}
            height={20}
            className="rounded-md transition-opacity duration-300"
          />
          <Image
            src="/img/icon/apple_red.png"
            alt="Apple Icon Hover"
            width={20}
            height={20}
            className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </a>

        <a
          href="https://www.instagram.com/amantique._/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <Image
            src="/img/icon/instagram.png"
            alt="Instagram Icon"
            width={20}
            height={20}
            className="rounded-md transition-opacity duration-300"
          />
          <Image
            src="/img/icon/instagram_red.png"
            alt="Instagram Icon Hover"
            width={20}
            height={20}
            className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </a>
        
        <a
          href="https://www.facebook.com/profile.php?id=100091951621434"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <Image
            src="/img/icon/facebook.png"
            alt="Facebook Icon"
            width={20}
            height={20}
            className="rounded-md transition-opacity duration-300"
          />
          <Image
            src="/img/icon/facebook_red.png"
            alt="Facebook Icon Hover"
            width={20}
            height={20}
            className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <Image
            src="/img/icon/tiktok.png"
            alt="TikTok Icon"
            width={20}
            height={20}
            className="rounded-md transition-opacity duration-300"
          />
          <Image
            src="/img/icon/tiktok_red.png"
            alt="TikTok Icon Hover"
            width={20}
            height={20}
            className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </a>

        <a
          href="https://www.youtube.com/@Amantique"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <Image
            src="/img/icon/youtube.png"
            alt="YouTube Icon"
            width={20}
            height={20}
            className="rounded-md transition-opacity duration-300"
          />
          <Image
            src="/img/icon/youtube_red.png"
            alt="YouTube Icon Hover"
            width={20}
            height={20}
            className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </a>
      </div>
      
      <div className="mt-5 absolute left-1/2 transform -translate-x-1/2" style={{ marginTop: '70px' }}>
        <Link href="/" className="text-xl font-bold p-2">
          <Image
            src="/img/logo/logo.png"
            alt="Logo"
            width={211}
            height={200}
            className="transition-all duration-300"
            style={{
              transform: `scale(${scale}) translateY(${scrollY * 0.1}px)`,
            }}
          />
        </Link>
      </div>

      
      <div className="flex">
        <Link
          href="/"
          className="px-1 hover:text-[#F20D01] transition-colors duration-300 rounded-md"
        >
          DATES
        </Link>
        <Link
          href="/"
          className="px-1 hover:text-[#F20D01] transition-colors duration-300 rounded-md"
        >
          MUSIQUE
        </Link>
        <Link
          href="/"
          className="px-1 hover:text-[#F20D01] transition-colors duration-300 rounded-md"
        >
          VIDÉO
        </Link>
        <Link
          href="/"
          className="px-1 hover:text-[#F20D01] transition-colors duration-300 rounded-md"
        >
          CONTACT
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
