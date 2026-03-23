import React, {useCallback, useState} from 'react';

export default function CopyPageButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      // Get the markdown content from the page
      const article = document.querySelector('article');
      if (!article) return;

      // Get the main content area
      const contentEl = article.querySelector('.markdown');
      if (!contentEl) return;

      // Convert HTML to a simplified markdown-like plain text
      const content = htmlToMarkdown(contentEl);

      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  return (
    <button
      className="copy-page-button"
      onClick={handleCopy}
      title="Copy page as Markdown"
      aria-label="Copy page as Markdown"
    >
      {copied ? (
        <>
          <CheckIcon />
          <span>Copied</span>
        </>
      ) : (
        <>
          <CopyIcon />
          <span>Copy page</span>
        </>
      )}
    </button>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function htmlToMarkdown(el) {
  let md = '';
  const walk = (node, listDepth = 0) => {
    if (node.nodeType === Node.TEXT_NODE) {
      md += node.textContent;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const tag = node.tagName.toLowerCase();

    // Skip certain elements
    if (tag === 'nav' || tag === 'button' || tag === 'svg' ||
        node.classList.contains('copy-page-button') ||
        node.classList.contains('theme-admonition-heading') ||
        node.classList.contains('hash-link')) return;

    switch (tag) {
      case 'h1': md += '# '; walkChildren(node, listDepth); md += '\n\n'; break;
      case 'h2': md += '## '; walkChildren(node, listDepth); md += '\n\n'; break;
      case 'h3': md += '### '; walkChildren(node, listDepth); md += '\n\n'; break;
      case 'h4': md += '#### '; walkChildren(node, listDepth); md += '\n\n'; break;
      case 'h5': md += '##### '; walkChildren(node, listDepth); md += '\n\n'; break;
      case 'h6': md += '###### '; walkChildren(node, listDepth); md += '\n\n'; break;
      case 'p': walkChildren(node, listDepth); md += '\n\n'; break;
      case 'br': md += '\n'; break;
      case 'strong':
      case 'b': md += '**'; walkChildren(node, listDepth); md += '**'; break;
      case 'em':
      case 'i': md += '*'; walkChildren(node, listDepth); md += '*'; break;
      case 'code':
        if (node.parentElement && node.parentElement.tagName.toLowerCase() === 'pre') {
          walkChildren(node, listDepth);
        } else {
          md += '`'; walkChildren(node, listDepth); md += '`';
        }
        break;
      case 'pre': {
        const codeEl = node.querySelector('code');
        const lang = codeEl?.className?.match(/language-(\w+)/)?.[1] || '';
        md += '```' + lang + '\n';
        md += (codeEl || node).textContent;
        md += '\n```\n\n';
        break;
      }
      case 'a': {
        const href = node.getAttribute('href');
        md += '[';
        walkChildren(node, listDepth);
        md += '](' + (href || '') + ')';
        break;
      }
      case 'ul': walkChildren(node, listDepth); md += '\n'; break;
      case 'ol': walkChildren(node, listDepth); md += '\n'; break;
      case 'li': {
        const parent = node.parentElement;
        const prefix = parent?.tagName.toLowerCase() === 'ol'
          ? `${Array.from(parent.children).indexOf(node) + 1}. `
          : '- ';
        md += '  '.repeat(listDepth) + prefix;
        walkChildren(node, listDepth + 1);
        md += '\n';
        break;
      }
      case 'table': {
        const rows = node.querySelectorAll('tr');
        rows.forEach((row, i) => {
          const cells = row.querySelectorAll('th, td');
          md += '| ' + Array.from(cells).map(c => c.textContent.trim()).join(' | ') + ' |\n';
          if (i === 0) {
            md += '| ' + Array.from(cells).map(() => '---').join(' | ') + ' |\n';
          }
        });
        md += '\n';
        break;
      }
      case 'img': {
        const alt = node.getAttribute('alt') || '';
        const src = node.getAttribute('src') || '';
        md += `![${alt}](${src})\n\n`;
        break;
      }
      case 'blockquote':
        md += '> ';
        walkChildren(node, listDepth);
        md += '\n';
        break;
      default:
        walkChildren(node, listDepth);
    }
  };

  const walkChildren = (node, listDepth) => {
    node.childNodes.forEach(child => walk(child, listDepth));
  };

  walk(el);
  return md.replace(/\n{3,}/g, '\n\n').trim();
}
