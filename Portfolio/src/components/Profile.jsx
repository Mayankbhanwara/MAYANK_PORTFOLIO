import { useEffect, useState } from 'react';
import avatar from '../assets/mayank.png';
import realPhoto from '../assets/mayank.png';
import ResumeMAYANK from '../assets/Mayank Bhanwara Resume.pdf';
import { jsxDEV } from "react/jsx-dev-runtime";

const contactItems = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'EMAIL',
    value: 'mayankbhanwara2004@gmail.com'
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'PHONE',
    value: '+91-9660800684',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'LOCATION',
    value: 'Malviya Nagar, Jaipur',
  },
];

const socials = [
  {
    href: 'https://github.com/Mayankbhanwara',
    label: 'GitHub',
    icon: (
      <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/mayank-bhanwara-348a7336b',
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/MayankBhanwara',
    label: 'Twitter',
    icon: (
      <svg className="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/mayank__jain2074?utm_source=qr&igsh=MTdhd29sMHJpaWt5dA==',
    label: 'Instagram',
    icon: (
      <svg className="w-5 h-5 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: 'https://leetcode.com/u/mayank_bhanwara/',
    label: 'LeetCode',
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" alt="LeetCode" className="w-5 h-5" />
    ),
  },
  {
    href: 'https://www.geeksforgeeks.org/profile/mayankbhanwara?tab=activity',
    label: 'GeeksForGeeks',
    icon: (
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230403183704/gfg_logo.png" alt="GeeksForGeeks" className="w-5 h-5 object-contain" />
    ),
  },
  {
    href: ResumeMAYANK,
    label: 'Resume',
    icon: (
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function Profile() {
  const [showRealPhoto, setShowRealPhoto] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    if (!isSwitching) return;
    const t = setTimeout(() => setIsSwitching(false), 720);
    return () => clearTimeout(t);
  }, [isSwitching]);

  return (
    <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-8 lg:self-start mt-6">
      <div className="card p-6 sm:p-8 pt-6 sm:pt-6 pb-8 sm:pb-6 flex flex-col items-center gap-5 sm:gap-6">
        <style>
          {`
            @keyframes photo-sweep {
              0%   { transform: translateX(-140%) rotate(18deg); opacity: 0; }
              18%  { opacity: 0.45; }
              55%  { opacity: 0.16; }
              100% { transform: translateX(140%) rotate(18deg); opacity: 0; }
            }
            @keyframes photo-ripple {
              0%   { transform: scale(0.84); opacity: 0; }
              20%  { opacity: 0.35; }
              100% { transform: scale(1.2); opacity: 0; }
            }
          `}
        </style>

        {/* Avatar */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsSwitching(true);
              setShowRealPhoto((v) => !v);
            }}
            className={`w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-sm focus:outline-none group relative [perspective:900px] transition-transform duration-700 ease-out ${isSwitching ? 'scale-[1.01]' : 'scale-100'
              }`}
            aria-label="Toggle profile photo"
            title="Click to change photo"
          >
            {/* Signature sweep + ripple (only during toggle) */}
            {isSwitching && (
              <>
                <span
                  className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-indigo-500/25 dark:ring-indigo-400/20"
                  style={{ animation: 'photo-ripple 720ms ease-out both' }}
                />
                <span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden" aria-hidden="true">
                  <span
                    className="absolute -inset-y-10 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent dark:via-white/20 blur-md"
                    style={{ animation: 'photo-sweep 720ms ease-out both' }}
                  />
                </span>
              </>
            )}

            <img
              src={avatar}
              alt="Mayank Bhanwara"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out will-change-transform ${showRealPhoto ? 'opacity-0 scale-[1.03] blur-sm' : 'opacity-100 scale-100 blur-0'
                }`}
              draggable={false}
            />
            <img
              src={realPhoto}
              alt="Mayank Bhanwara"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out will-change-transform ${showRealPhoto ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.03] blur-sm'
                }`}
              draggable={false}
            />

            {/* subtle glass highlight for premium feel */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Name & Role */}
        <div className="text-center mt-2 w-full">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight transition-colors duration-500">Mayank Bhanwara</h1>
          <span className="mt-2 inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[11px] sm:text-xs font-medium tracking-wide rounded-xl transition-colors duration-500">
            Full Stack Developer
          </span>
        </div>

        <hr className="w-full border-gray-100 dark:border-gray-700/50 transition-colors duration-500" />

        {/* Contact Info */}
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-3">
          {contactItems.map((item) => (
            <li key={item.label} className="flex items-start gap-4 sm:gap-3">
              <div className="w-10 h-10 sm:w-8 sm:h-8 shrink-0 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl sm:rounded-lg flex items-center justify-center text-indigo-500 dark:text-indigo-400 transition-colors duration-500">
                {item.icon}
              </div>
              <div className="min-w-0 flex flex-col justify-center">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-0.5 transition-colors duration-500">
                  {item.label}
                </p>
                <p className="text-sm sm:text-[13px] xl:text-sm text-gray-700 dark:text-gray-300 font-medium truncate transition-colors duration-500">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>

        <hr className="w-full border-gray-100 dark:border-gray-700/50 transition-colors duration-500" />

        {/* Social Links */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group w-12 h-12 flex items-center justify-center rounded-2xl sm:rounded-[0.85rem] bg-gray-50 dark:bg-gray-800/40 text-gray-400 dark:text-gray-500 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white hover:scale-[1.15] hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] border border-transparent hover:border-gray-100 dark:hover:border-gray-600 transition-all duration-300 ease-out"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
