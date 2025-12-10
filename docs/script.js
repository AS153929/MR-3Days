function simpleMarkdownToHTML(md) {
  // Very lightweight Markdown renderer for headings, bold, italics, code and links.
  let html = md
    .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
    .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/\n\n/g, '</p><p>');
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
  } catch (e) {
    container.textContent = '加载失败：' + e.message;
  }
}

document.getElementById('loadBtn').addEventListener('click', loadSelectedDoc);

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
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
