import React, {useState, useRef, useEffect} from 'react';
import {useLocation, useHistory} from '@docusaurus/router';

const sections = [
  {label: 'Guides', href: '/', match: /^\/(?!api\/)/},
  {label: 'REST API', href: '/api/biel-ai-api', match: /^\/api\//},
];

export default function SidebarSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const history = useHistory();

  const current = sections.find(s => s.match.test(location.pathname)) || sections[0];

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sidebar-switcher" ref={ref}>
      <button
        className="sidebar-switcher__button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="sidebar-switcher__label">{current.label}</span>
        <svg
          className="sidebar-switcher__chevron"
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s'}}
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="sidebar-switcher__dropdown">
          {sections.map(section => (
            <button
              key={section.label}
              className={`sidebar-switcher__option ${section === current ? 'sidebar-switcher__option--active' : ''}`}
              onClick={() => {
                setOpen(false);
                if (section !== current) {
                  history.push(section.href);
                }
              }}
            >
              <span>{section.label}</span>
              {section === current && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
