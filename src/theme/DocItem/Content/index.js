import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import Content from '@theme-original/DocItem/Content';
import CopyPageButton from '@theme/CopyPageButton';

function ApiHeaderActions() {
  const [container, setContainer] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    const h1 = document.querySelector('.openapi__heading');
    if (!h1 || h1.querySelector('.api-header-actions')) return;

    // Find the export dropdown's link to get the download URL
    const exportLink = document.querySelector('.export-dropdown .dropdown__link');
    if (exportLink) {
      setDownloadUrl(exportLink.getAttribute('href'));
    }

    const wrapper = document.createElement('span');
    wrapper.className = 'api-header-actions';
    wrapper.style.display = 'inline-flex';
    wrapper.style.marginLeft = 'auto';
    wrapper.style.gap = '0.5rem';
    wrapper.style.alignItems = 'center';
    h1.appendChild(wrapper);
    setContainer(wrapper);

    return () => {
      if (wrapper.parentNode) {
        wrapper.parentNode.removeChild(wrapper);
      }
    };
  }, []);

  if (!container) return null;
  return createPortal(
    <>
      {downloadUrl && (
        <a
          href={downloadUrl}
          className="copy-page-button"
          download
          title="Download OpenAPI spec"
          aria-label="Download OpenAPI spec"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Export</span>
        </a>
      )}
      <CopyPageButton />
    </>,
    container
  );
}

export default function ContentWrapper(props) {
  const isApiPage = typeof window !== 'undefined' &&
    document.documentElement.className.includes('docs-doc-id-api');

  return (
    <>
      {!isApiPage && (
        <div className="doc-header-with-copy">
          <CopyPageButton />
        </div>
      )}
      <Content {...props} />
      <ApiHeaderActions />
    </>
  );
}
