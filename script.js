// ===== MS Academy - Main JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
  // ===== PRELOADER =====
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 2200);
  });

  // Fallback - hide preloader after 3s even if load doesn't fire
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 3000);

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Navbar background
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Scroll to top button
    if (scrollY > 400) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  });

  // Scroll to top
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== MOBILE NAV =====
  const navHamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  navHamburger.addEventListener('click', () => {
    navHamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navHamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (!navHamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navHamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // ===== SCROLL REVEAL ANIMATIONS =====
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ===== COUNTER ANIMATION =====
  const counterElements = document.querySelectorAll('.achievement-number');
  let counterStarted = false;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.textContent.includes('%') ? '%' : '+';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 16);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterStarted) {
        counterStarted = true;
        counterElements.forEach(el => animateCounter(el));
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => counterObserver.observe(el));

  // ===== HERO STAT COUNTER =====
  const heroStatNumbers = document.querySelectorAll('.hero-stat-number');
  
  const animateHeroStat = (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = '+';
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 16);
  };

  setTimeout(() => {
    heroStatNumbers.forEach(el => animateHeroStat(el));
  }, 1500);

  // ===== EMOJI RAIN IN HERO =====
  const emojiRain = document.getElementById('emojiRain');
  const emojis = ['📚', '✏️', '🎒', '📖', '🌟', '✨', '🎓', '💡', '🧠', '📝', '🎯', '🏆', '🌈', '🦋', '🎨'];

  function createEmojiDrop() {
    const drop = document.createElement('div');
    drop.className = 'emoji-drop';
    drop.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDuration = (Math.random() * 6 + 6) + 's';
    drop.style.fontSize = (Math.random() * 1 + 1) + 'rem';
    drop.style.opacity = Math.random() * 0.15 + 0.05;
    emojiRain.appendChild(drop);

    setTimeout(() => {
      drop.remove();
    }, 12000);
  }

  // Create emojis periodically
  setInterval(createEmojiDrop, 800);

  // ===== PARTICLE SYSTEM IN HERO =====
  const particlesContainer = document.getElementById('particles');
  const particleColors = ['#FF6B35', '#F7C948', '#4ECDC4', '#A28AE5', '#FF6B6B', '#45B7D1'];

  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-10px';
    particle.style.animationDuration = (Math.random() * 8 + 5) + 's';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 13000);
  }

  setInterval(createParticle, 500);

  // ===== CLASS CARDS WOBBLE ON CLICK =====
  document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('wobble');
      setTimeout(() => card.classList.remove('wobble'), 600);
    });
  });

  // ===== FUN STARS IN CLASSES SECTION =====
  const classesSection = document.querySelector('.classes');
  if (classesSection) {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'fun-stars';
    classesSection.appendChild(starsContainer);

    const starEmojis = ['⭐', '🌟', '✨', '💫'];
    for (let i = 0; i < 15; i++) {
      const star = document.createElement('div');
      star.className = 'fun-star';
      star.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.fontSize = (Math.random() * 1 + 0.8) + 'rem';
      starsContainer.appendChild(star);
    }
  }

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation visual
    const inputs = contactForm.querySelectorAll('input[required], select[required]');
    let valid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#FF6B6B';
        valid = false;
      } else {
        input.style.borderColor = '#2ECC71';
      }
    });

    if (valid) {
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '⏳ Sending...';
      submitBtn.style.pointerEvents = 'none';
      
      const formData = new FormData(contactForm);
      formData.append('_subject', 'New Admission Inquiry - MS Academy');
      formData.append('_captcha', 'false');

      fetch('https://formsubmit.co/ajax/ps0143842@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        submitBtn.textContent = '✅ Submitted Successfully!';
        submitBtn.style.background = 'linear-gradient(135deg, #2ECC71, #27ae60)';
        
        // Create confetti celebration
        createConfetti();
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.style.pointerEvents = 'all';
          contactForm.reset();
          inputs.forEach(input => input.style.borderColor = '');
        }, 3000);
      })
      .catch(error => {
        console.error('Error:', error);
        submitBtn.textContent = '❌ Failed to Send';
        submitBtn.style.background = '#FF6B6B';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.style.pointerEvents = 'all';
        }, 3000);
      });
    }
  });

  // Reset input border on focus
  contactForm.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('focus', () => {
      el.style.borderColor = '';
    });
  });

  // ===== NEWSLETTER =====
  const newsletterBtn = document.getElementById('newsletterBtn');
  const newsletterEmail = document.getElementById('newsletterEmail');
  
  if (newsletterBtn && newsletterEmail) {
    newsletterBtn.addEventListener('click', () => {
      if (newsletterEmail.value.includes('@')) {
        newsletterBtn.textContent = '✅';
        setTimeout(() => {
          newsletterBtn.textContent = 'Join';
          newsletterEmail.value = '';
        }, 2000);
      }
    });
  }

  // ===== CONFETTI CELEBRATION =====
  function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99998;overflow:hidden;';
    document.body.appendChild(confettiContainer);

    const confettiColors = ['#FF6B35', '#F7C948', '#4ECDC4', '#A28AE5', '#FF6B6B', '#2ECC71', '#45B7D1', '#E91E8C'];

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.top = '-20px';
      piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
      piece.style.animationDelay = Math.random() * 1 + 's';
      piece.style.width = (Math.random() * 8 + 4) + 'px';
      piece.style.height = (Math.random() * 12 + 6) + 'px';
      confettiContainer.appendChild(piece);
    }

    setTimeout(() => {
      confettiContainer.remove();
    }, 5000);
  }

  // ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offsetTop = targetEl.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== TILT EFFECT ON FACULTY CARDS =====
  document.querySelectorAll('.faculty-card, .why-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ===== TYPING EFFECT ON HERO SUBTITLE =====
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.borderRight = '2px solid var(--accent)';
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
        // Blink cursor for a moment then remove
        setTimeout(() => {
          heroSubtitle.style.borderRight = 'none';
        }, 2000);
      }
    }, 80);
  }

  // ===== GALLERY ITEM HOVER PARALLAX =====
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      item.style.transform = `scale(1.03) translate(${x}px, ${y}px)`;
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
    });
  });

  // ===== ACTIVE NAV LINK HIGHLIGHTING =====
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        if (navbar.classList.contains('scrolled')) {
          link.style.color = 'var(--primary)';
        }
      }
    });
  });

  // ===== MAGNETIC HOVER ON CTA BUTTONS =====
  document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // ===== THEME TOGGLE (DAY/NIGHT VISION) =====
  const themeToggle = document.getElementById('themeToggle');
  const appBody = document.body;
  
  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('ms_academy_theme');
  if (savedTheme === 'dark') {
    appBody.classList.add('dark-mode');
    if(themeToggle) themeToggle.textContent = '☀️';
  }
  
  if(themeToggle) {
    themeToggle.addEventListener('click', () => {
      appBody.classList.toggle('dark-mode');
      
      // Update icon and save preference
      if (appBody.classList.contains('dark-mode')) {
        localStorage.setItem('ms_academy_theme', 'dark');
        themeToggle.textContent = '☀️';
      } else {
        localStorage.setItem('ms_academy_theme', 'light');
        themeToggle.textContent = '🌙';
      }
      
      // Add a little animation class
      themeToggle.classList.add('wobble');
      setTimeout(() => themeToggle.classList.remove('wobble'), 600);
    });
  }

  console.log('🎓 MS Academy website loaded successfully!');
  console.log('📚 Mind Sharper Academy - Shaping Bright Futures Since 2023');
});
