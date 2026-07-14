// ============================================================
// Footer — Full-width 5-col minimal footer
// ============================================================
import React from 'react';
import { Logo } from '../ui/Logo';
import { APP_NAME } from '@/constants';

const links = {
  Product:   [['Features','#features'],['Pricing','#pricing'],['Architecture','#architecture'],['Changelog','#'],['Roadmap','#']],
  Solutions: [['Manufacturing','#industries'],['Automotive','#industries'],['Textiles','#industries'],['Food Processing','#industries'],['Foundries','#industries']],
  Resources: [['Documentation','#'],['API Reference','#'],['Case Studies','#'],['Blog','#'],['Status','#']],
  Company:   [['About','#'],['Careers','#'],['Partners','#'],['Contact','#contact'],['Press Kit','#']],
};

const legal = [['Privacy Policy','#'],['Terms of Service','#'],['Security','#']];

const TwitterSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);
const LinkedInSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const GitHubSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const socials = [
  { label: 'Twitter / X', Icon: TwitterSVG, href: '#' },
  { label: 'LinkedIn', Icon: LinkedInSVG, href: '#' },
  { label: 'GitHub', Icon: GitHubSVG, href: '#' },
];

export const Footer: React.FC = () => {
  const yr = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-black/[0.06]" role="contentinfo" aria-label="Site footer">
      <div className="section-container pt-16 pb-8">

        {/* Top: brand + 4 link columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-[12.5px] text-black/40 leading-relaxed font-light max-w-[170px]">
              AI-powered vision for predictive maintenance and quality monitoring.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, rows]) => (
            <div key={cat}>
              <h3 className="t-label text-black/30 mb-4">{cat}</h3>
              <ul className="space-y-2.5">
                {rows.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}
                      className="text-[13px] text-black/50 hover:text-black transition-colors duration-150">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-black/[0.05] mb-7" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <span className="text-[12px] text-black/30">© {yr} {APP_NAME}</span>
            {legal.map(([label, href]) => (
              <a key={label} href={href}
                className="text-[12px] text-black/30 hover:text-black/60 transition-colors">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-0.5">
            {socials.map(({ label, Icon, href }) => (
              <a key={label} href={href} aria-label={label}
                className="w-8 h-8 flex items-center justify-center text-black/25 hover:text-black hover:bg-black/[0.04] rounded-lg transition-all duration-150">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
