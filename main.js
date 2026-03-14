/* ══════════════════════════════════════════════════════════
   LOVELY STORE — main.js  REV B
   Kallara, Karyatte, Thiruvananthapuram
══════════════════════════════════════════════════════════ */

/* ── PRODUCT DATA ── */
const ZONE_DATA = {
  roof: {
    name: 'ROOFING', accent: 'ZONE',
    products: [
      { name: 'GI Roofing Sheet',     cat: 'ROOFING',   sku: 'LS-RF-001' },
      { name: 'PVC Roofing Sheet',    cat: 'ROOFING',   sku: 'LS-RF-002' },
      { name: 'Colour Coated Sheet',  cat: 'ROOFING',   sku: 'LS-RF-003' },
      { name: 'Ridge Cap',            cat: 'ROOFING',   sku: 'LS-RF-004' },
      { name: 'Roofing Screws',       cat: 'FASTENERS', sku: 'LS-RF-005' },
      { name: 'Tarpaulin Sheet',      cat: 'SAFETY',    sku: 'LS-SF-001' },
    ]
  },
  walls: {
    name: 'WALLS &', accent: 'FINISHING',
    products: [
      { name: 'Floor Tiles 600×600',  cat: 'TILES',  sku: 'LS-TL-001' },
      { name: 'Wall Tiles 300×600',   cat: 'TILES',  sku: 'LS-TL-002' },
      { name: 'Plywood 18mm',         cat: 'BOARD',  sku: 'LS-BD-001' },
      { name: 'MDF Board 12mm',       cat: 'BOARD',  sku: 'LS-BD-002' },
      { name: 'Wall Putty 20kg',      cat: 'PAINT',  sku: 'LS-PT-001' },
      { name: 'Primer 4L',            cat: 'PAINT',  sku: 'LS-PT-002' },
      { name: 'Emulsion Paint 10L',   cat: 'PAINT',  sku: 'LS-PT-003' },
      { name: 'Enamel Paint 4L',      cat: 'PAINT',  sku: 'LS-PT-004' },
      { name: 'Wood Polish 1L',       cat: 'FINISH', sku: 'LS-PT-005' },
      { name: 'Varnish 1L',           cat: 'FINISH', sku: 'LS-PT-006' },
      { name: 'Paint Brush Set',      cat: 'TOOLS',  sku: 'LS-TL-010' },
      { name: 'Paint Roller',         cat: 'TOOLS',  sku: 'LS-TL-011' },
    ]
  },
  bathroom: {
    name: 'BATHROOM', accent: 'ZONE',
    products: [
      { name: 'PVC Pipe 1"',          cat: 'PIPES',        sku: 'LS-PP-001' },
      { name: 'CPVC Pipe 3/4"',       cat: 'PIPES',        sku: 'LS-PP-002' },
      { name: 'Wash Basin',           cat: 'SANITARYWARE', sku: 'LS-SW-001' },
      { name: 'Toilet Closet',        cat: 'SANITARYWARE', sku: 'LS-SW-002' },
      { name: 'Flush Tank',           cat: 'SANITARYWARE', sku: 'LS-SW-003' },
      { name: 'Shower Set',           cat: 'SANITARYWARE', sku: 'LS-SW-004' },
      { name: 'Health Faucet',        cat: 'FITTINGS',     sku: 'LS-FT-001' },
      { name: 'Ball Valve 1/2"',      cat: 'VALVE',        sku: 'LS-VL-001' },
      { name: 'Floor Drain',          cat: 'DRAIN',        sku: 'LS-DR-001' },
      { name: 'Soap Dish Holder',     cat: 'ACCESSORIES',  sku: 'LS-BA-001' },
      { name: 'Towel Rod SS',         cat: 'ACCESSORIES',  sku: 'LS-BA-002' },
      { name: 'Bathroom Mirror',      cat: 'ACCESSORIES',  sku: 'LS-BA-003' },
    ]
  },
  electrical: {
    name: 'ELECTRICAL', accent: 'ZONE',
    products: [
      { name: 'Electric Wire 1.5mm',     cat: 'WIRE',       sku: 'LS-EW-001' },
      { name: 'Electric Wire 2.5mm',     cat: 'WIRE',       sku: 'LS-EW-002' },
      { name: 'Electrical Conduit Pipe', cat: 'CONDUIT',    sku: 'LS-EC-001' },
      { name: 'MCB 16A Single Pole',     cat: 'MCB',        sku: 'LS-EB-001' },
      { name: 'Distribution Board 8W',   cat: 'DB',         sku: 'LS-EB-002' },
      { name: 'LED Bulb 9W',             cat: 'LIGHTING',   sku: 'LS-EL-001' },
      { name: 'Tube Light 20W',          cat: 'LIGHTING',   sku: 'LS-EL-002' },
      { name: 'Switch Socket Combo',     cat: 'SWITCH',     sku: 'LS-ES-001' },
      { name: 'Electrical Tape',         cat: 'ACCESSORIES',sku: 'LS-EA-001' },
    ]
  },
  foundation: {
    name: 'FOUNDATION', accent: '& STRUCTURE',
    products: [
      { name: 'Cement 50kg Bag',      cat: 'CEMENT',    sku: 'LS-CM-001' },
      { name: 'River Sand per Load',  cat: 'AGGREGATE', sku: 'LS-AG-001' },
      { name: 'M-Sand per Load',      cat: 'AGGREGATE', sku: 'LS-AG-002' },
      { name: 'Metal Jelly 20mm',     cat: 'AGGREGATE', sku: 'LS-AG-003' },
      { name: 'Red Bricks',           cat: 'MASONRY',   sku: 'LS-MN-001' },
      { name: 'Concrete Block 6"',    cat: 'MASONRY',   sku: 'LS-MN-002' },
      { name: 'Hollow Block 8"',      cat: 'MASONRY',   sku: 'LS-MN-003' },
      { name: 'Iron Rod 8mm TMT',     cat: 'STEEL',     sku: 'LS-ST-001' },
      { name: 'Steel Rod 10mm TMT',   cat: 'STEEL',     sku: 'LS-ST-002' },
      { name: 'Binding Wire',         cat: 'STEEL',     sku: 'LS-ST-003' },
      { name: 'Timber per sqft',      cat: 'WOOD',      sku: 'LS-WD-001' },
    ]
  },
  hardware: {
    name: 'HARDWARE', accent: '& TOOLS',
    products: [
      { name: 'Hammer 500g',          cat: 'TOOLS',    sku: 'LS-TL-001' },
      { name: 'Screwdriver Set',      cat: 'TOOLS',    sku: 'LS-TL-002' },
      { name: 'Adjustable Wrench',    cat: 'TOOLS',    sku: 'LS-TL-003' },
      { name: 'Drill Machine',        cat: 'TOOLS',    sku: 'LS-TL-004' },
      { name: 'Measuring Tape 5m',    cat: 'TOOLS',    sku: 'LS-TL-005' },
      { name: 'Door Hinge SS',        cat: 'HARDWARE', sku: 'LS-HW-001' },
      { name: 'Door Lock Mortise',    cat: 'HARDWARE', sku: 'LS-HW-002' },
      { name: 'Padlock 60mm',         cat: 'HARDWARE', sku: 'LS-HW-003' },
      { name: 'Nails Assorted 1kg',   cat: 'FASTENERS',sku: 'LS-FN-001' },
      { name: 'Wood Screws 100pc',    cat: 'FASTENERS',sku: 'LS-FN-002' },
      { name: 'Anchor Bolts 50pc',    cat: 'FASTENERS',sku: 'LS-FN-003' },
      { name: 'Safety Helmet',        cat: 'SAFETY',   sku: 'LS-SF-001' },
      { name: 'Safety Gloves',        cat: 'SAFETY',   sku: 'LS-SF-002' },
      { name: 'Dust Mask N95',        cat: 'SAFETY',   sku: 'LS-SF-003' },
    ]
  },
  plumbing: {
    name: 'PLUMBING', accent: 'ZONE',
    products: [
      { name: 'PVC Pipe 1"',          cat: 'PIPES',    sku: 'LS-PP-001' },
      { name: 'CPVC Pipe 3/4"',       cat: 'PIPES',    sku: 'LS-PP-002' },
      { name: 'UPVC Pipe 4"',         cat: 'PIPES',    sku: 'LS-PP-003' },
      { name: 'GI Pipe 1"',           cat: 'PIPES',    sku: 'LS-PP-004' },
      { name: 'Pipe Elbow 90°',       cat: 'FITTINGS', sku: 'LS-FT-001' },
      { name: 'Pipe Tee',             cat: 'FITTINGS', sku: 'LS-FT-002' },
      { name: 'Ball Valve',           cat: 'VALVE',    sku: 'LS-VL-001' },
      { name: 'Gate Valve',           cat: 'VALVE',    sku: 'LS-VL-002' },
      { name: 'Water Tap',            cat: 'FAUCET',   sku: 'LS-FC-001' },
      { name: 'Water Tank 500L',      cat: 'TANK',     sku: 'LS-TK-001' },
      { name: 'Pipe Glue 100ml',      cat: 'ADHESIVE', sku: 'LS-AD-001' },
      { name: 'Teflon Tape',          cat: 'ADHESIVE', sku: 'LS-AD-002' },
    ]
  },
  safety: {
    name: 'SAFETY &', accent: 'MISC',
    products: [
      { name: 'Safety Helmet IS',     cat: 'PPE',      sku: 'LS-SF-001' },
      { name: 'Safety Gloves',        cat: 'PPE',      sku: 'LS-SF-002' },
      { name: 'Dust Mask N95',        cat: 'PPE',      sku: 'LS-SF-003' },
      { name: 'Tarpaulin 12x15ft',    cat: 'COVER',    sku: 'LS-CV-001' },
      { name: 'Nylon Rope 10mm',      cat: 'ROPE',     sku: 'LS-RP-001' },
      { name: 'Aluminum Ladder 8ft',  cat: 'LADDER',   sku: 'LS-LD-001' },
      { name: 'Plastic Bucket 18L',   cat: 'MISC',     sku: 'LS-MC-001' },
      { name: 'Ghamela Mortar Pan',   cat: 'MISC',     sku: 'LS-MC-002' },
      { name: 'Spirit Level 24"',     cat: 'TOOLS',    sku: 'LS-TL-020' },
      { name: 'Sandpaper Assorted',   cat: 'ABRASIVE', sku: 'LS-AB-001' },
    ]
  }
};

/* ══════════════════════════════
   PARTICLE SYSTEM
══════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = 55;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r:  Math.random() * 1.2 + 0.3,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* connect close particles */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255,107,26,${0.06 * (1 - d / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    /* draw dots */
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,107,26,${p.alpha})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }
  draw();
}

/* ══════════════════════════════
   CUSTOM CURSOR
══════════════════════════════ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const coord  = document.getElementById('coord-display');
  if (!cursor) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    if (coord) coord.textContent = `${String(e.clientX).padStart(4,'0')} : ${String(e.clientY).padStart(4,'0')}`;
  });

  /* smooth follow */
  function tick() {
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  }
  tick();

  /* hover state on interactive elements */
  document.querySelectorAll('a, button, .zone, .cat-card, .product-card, .phase-step, .zone-badge').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ══════════════════════════════
   SCROLL REVEAL + STATS COUNTER
══════════════════════════════ */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      /* animate stat numbers */
      if (e.target.classList.contains('stat-item')) {
        animateStatNumber(e.target);
      }
      obs.unobserve(e.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .stat-item').forEach(el => obs.observe(el));
}

function animateStatNumber(item) {
  const numEl  = item.querySelector('.stat-number');
  if (!numEl) return;
  const target = parseInt(numEl.dataset.target, 10);
  const suffix = numEl.dataset.suffix || '';
  const sup    = numEl.querySelector('sup') ? numEl.querySelector('sup').outerHTML : '';
  let current  = 0;
  const step   = Math.ceil(target / 60);
  const timer  = setInterval(() => {
    current = Math.min(current + step, target);
    numEl.innerHTML = current + sup + suffix;
    if (current >= target) clearInterval(timer);
  }, 18);
}

/* ══════════════════════════════
   PHASE STEPS
══════════════════════════════ */
function initPhaseSteps() {
  document.querySelectorAll('.phase-step').forEach(step => {
    step.addEventListener('click', () => {
      document.querySelectorAll('.phase-step').forEach(s => s.classList.remove('active'));
      step.classList.add('active');
    });
  });
}

/* ══════════════════════════════
   DRAWER
══════════════════════════════ */
function openZone(zone) {
  const data = ZONE_DATA[zone];
  if (!data) return;

  document.getElementById('drawer-zone-name').innerHTML =
    `${data.name} <span>${data.accent}</span>`;
  document.getElementById('drawer-count').textContent =
    `${data.products.length} PRODUCTS`;

  document.getElementById('drawer-products').innerHTML =
    data.products.map(p => `
      <div class="product-card" data-sku="${p.sku}" onclick="showProduct('${p.sku}','${encodeURIComponent(p.name)}','${p.cat}')">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-sku">${p.sku}</div>
      </div>
    `).join('');

  document.getElementById('product-drawer').classList.add('open');
}

function closeDrawer() {
  document.getElementById('product-drawer').classList.remove('open');
}

function showProduct(sku, name, cat) {
  alert(`${decodeURIComponent(name)}\n${sku} · ${cat}\n\nProduct detail page — coming soon.`);
}

/* ══════════════════════════════
   KEYBOARD
══════════════════════════════ */
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });
}

/* ══════════════════════════════
   TICKER DUPLICATE (seamless loop)
══════════════════════════════ */
function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  track.innerHTML += track.innerHTML; /* duplicate for seamless loop */
}

/* ══════════════════════════════
   BOOT
══════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCursor();
  initScrollReveal();
  initPhaseSteps();
  initKeyboard();
  initTicker();
});