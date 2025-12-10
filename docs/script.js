function simpleMarkdownToHTML(md) {
  // Lightweight Markdown renderer: headings, emphasis, code, hr, lists, paragraphs.
  const inline = (s) => s
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headings
  let html = md
    .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
    .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>');

  // Code fences
  html = html.replace(/\n```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

  // Horizontal rules
  html = html.replace(/^(?:\s*[-*_]{3,})\s*$/gm, '<hr/>');

  // Unordered lists: blocks starting with '- '
  html = html.replace(/^(?:- .+(?:\r?\n|$))+?/gm, (block) => {
    const lines = block.trim().split(/\r?\n/).filter(l => l.trim().startsWith('- '));
    const items = lines.map(l => l.replace(/^- +/, '')).map(inline).map(s => `<li>${s}</li>`).join('');
    return `<ul>${items}</ul>`;
  });

  // Inline emphasis and code (after structural transforms)
  html = inline(html);

  // Paragraphs: split on double newlines where not already HTML blocks
  html = html
    .replace(/\n\n+/g, '</p><p>');

  return '<p>' + html + '</p>';
}

async function loadSelectedDoc() {
  const select = document.getElementById('docSelect');
  const target = select.value;
  const container = document.getElementById('previewContainer');
  container.textContent = '加载中…';
  try {
    const res = await fetch(target);
    if (!res.ok) throw new Error('获取失败: ' + res.status);
    const text = await res.text();
    container.innerHTML = simpleMarkdownToHTML(text);
    buildChapterAnchorsAndTOC(container);
  } catch (e) {
    container.textContent = '加载失败：' + e.message;
  }
}

document.getElementById('loadBtn').addEventListener('click', loadSelectedDoc);

// Back to top
const backToTop = document.getElementById('backToTop');
const backToToc = document.getElementById('backToToc');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  backToToc.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Back to TOC section
backToToc.addEventListener('click', () => {
  const toc = document.getElementById('toc');
  if (toc) toc.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Build anchors for chapters and populate TOC
function buildChapterAnchorsAndTOC(container) {
  const tocList = document.getElementById('tocList');
  tocList.innerHTML = '';
  const headings = Array.from(container.querySelectorAll('h1, h2'));
  const chapterRegex = /^第([一二三四五六七八九十]+)章/;

  let chapterCount = 0;
  headings.forEach(h => {
    const text = h.textContent.trim();
    const match = text.match(chapterRegex);
    if (match) {
      chapterCount += 1;
      const id = 'chapter-' + chapterCount;
      h.id = id;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = text;
      li.appendChild(a);
      tocList.appendChild(li);
    }
  });
}

// Auto-load default doc on page load
document.addEventListener('DOMContentLoaded', () => {
  loadSelectedDoc();
});
// 简易交互脚本：导航开关、回到顶部
(function(){
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');
  const backToTop = document.getElementById('backToTop');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop && backToTop.classList.add('visible');
    } else {
      backToTop && backToTop.classList.remove('visible');
    }
  });

  backToTop && backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
