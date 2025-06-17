document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente");
});

// Mostrar el botón "Volver arriba" cuando haces scroll
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '⬆';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.fontSize = '20px';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.border = 'none';
scrollBtn.style.background = '#4fc3f7';
scrollBtn.style.color = '#fff';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';
scrollBtn.style.transition = 'opacity 0.3s ease';

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.opacity = '0';
    setTimeout(() => {
      if (scrollBtn.style.opacity === '0') {
        scrollBtn.style.display = 'none';
      }
    }, 300);
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animación al hacer scroll
const revealElements = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Animación extra al pasar el mouse sobre los títulos
const headers = document.querySelectorAll('h1, h2');
headers.forEach(header => {
  header.style.transition = 'color 0.3s ease';
  header.addEventListener('mouseenter', () => {
    header.style.color = '#4fc3f7';
  });
  header.addEventListener('mouseleave', () => {
    header.style.color = '';
  });
});
