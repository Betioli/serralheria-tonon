// ============================================
// SERRALHERIA TONON - PROPOSTA DIGITAL
// JavaScript Vanilla (Sem dependências)
// ============================================

// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && !e.target.closest('.menu-toggle')) {
        navLinks.classList.remove('active');
    }
});

// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animação de entrada ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards e seções
document.querySelectorAll('.analysis-card, .market-card, .phase-card, .roadmap-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Função para formatar números com separador
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Função para animar contadores (se necessário)
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(Math.round(target));
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.round(current));
        }
    }, 16);
}

// Inicializar tooltips (se necessário)
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = element.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
        });

        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

// Função para validar formulários (se necessário)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

// Função para enviar dados via AJAX (se necessário)
function submitForm(formId, endpoint) {
    if (!validateForm(formId)) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    const form = document.getElementById(formId);
    const formData = new FormData(form);

    fetch(endpoint, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem.');
    });

    return false;
}

// Função para copiar texto para clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Função para abrir modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Função para fechar modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fechar modal ao clicar fora
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Função para detectar tema preferido do sistema
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Função para aplicar tema
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Inicializar tema ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || detectSystemTheme();
    applyTheme(theme);
});

// Monitorar mudanças de tema do sistema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        applyTheme(e.matches ? 'dark' : 'light');
    });
}

// Função para rastrear cliques (analytics)
function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// Rastrear cliques em links externos
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('external_link_click', {
            url: link.href,
            text: link.textContent
        });
    });
});

// Rastrear cliques em CTAs
document.querySelectorAll('.btn-primary, .btn-contact').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('cta_click', {
            text: btn.textContent,
            href: btn.href
        });
    });
});

// Função para lazy loading de imagens
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores antigos
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Função para detectar dispositivo móvel
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para adicionar classe ao body se for mobile
if (isMobileDevice()) {
    document.body.classList.add('mobile');
}

// Função para scroll spy (destacar seção ativa no menu)
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Inicializar scroll spy
updateActiveLink();

// Função para debug (remover em produção)
function debug(message, data = null) {
    if (process.env.NODE_ENV === 'development') {
        console.log(`[DEBUG] ${message}`, data);
    }
}

// Log de inicialização
console.log('✓ Serralheria Tonon - Proposta Digital Carregada');
console.log('✓ Versão: 1.0.0');
console.log('✓ Design: Minimalismo Corporativo');
