/* ═══════════════════════════════════════
   FYNX AI - script.js
   Complete JavaScript
   ═══════════════════════════════════════ */

// NAV SCROLL
window.addEventListener('scroll', function () {
  var nav = document.getElementById('nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
});

// HERO ANIMATION
function animateHero() {
  var h1 = document.querySelector('.hero-h1');
  var sub = document.querySelector('.hero-sub');
  var actions = document.querySelector('.hero-actions');
  var visual = document.querySelector('.hero-visual');

  if (h1) {
    h1.style.transition = 'opacity .9s ease, transform .9s ease';
    h1.style.opacity = '1';
    h1.style.transform = 'none';
  }

  setTimeout(function () {
    if (sub) {
      sub.style.transition = 'opacity .7s ease, transform .7s ease';
      sub.style.opacity = '1';
      sub.style.transform = 'none';
    }
  }, 300);

  setTimeout(function () {
    if (actions) {
      actions.style.transition = 'opacity .6s ease, transform .6s ease';
      actions.style.opacity = '1';
      actions.style.transform = 'none';
    }
  }, 500);

  setTimeout(function () {
    if (visual) {
      visual.style.transition = 'opacity 1s ease';
      visual.style.opacity = '1';
    }
  }, 400);
}

setTimeout(animateHero, 200);

// REVEAL ON SCROLL
var revealObs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(function (el) {
  revealObs.observe(el);
});

// SCORE BARS ANIMATION
var barObs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var bars = entry.target.querySelectorAll('.score-bar-fill');
        bars.forEach(function (bar, i) {
          setTimeout(function () {
            bar.style.width = bar.dataset.width + '%';
          }, i * 150);
        });
        barObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.score-card').forEach(function (c) {
  barObs.observe(c);
});

// CREDIT BARS ANIMATION
var creditObs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var bars = entry.target.querySelectorAll('.credit-bar-inner');
        bars.forEach(function (bar, i) {
          setTimeout(function () {
            bar.style.width = bar.dataset.width + '%';
          }, i * 200);
        });
        creditObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

var creditEl = document.getElementById('creditBars');
if (creditEl) {
  creditObs.observe(creditEl);
}

// STAT COUNTERS ANIMATION
var countObs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.dataset.count) || 0;
        var suffix = el.dataset.suffix || '';
        var current = 0;
        var step = Math.max(1, Math.floor(target / 60));

        var interval = setInterval(function () {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) {
            clearInterval(interval);
          }
        }, 25);

        countObs.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-num[data-count]').forEach(function (el) {
  countObs.observe(el);
});

// RING ORBIT NODES
document.querySelectorAll('.ring').forEach(function (ring, i) {
  var node = document.createElement('div');
  var colors = ['var(--amber)', 'var(--fire)', 'var(--crimson)'];
  var sizes = [140, 180, 220];

  node.style.cssText =
    'position:absolute;' +
    'top:0;' +
    'left:50%;' +
    'width:8px;' +
    'height:8px;' +
    'margin-left:-4px;' +
    'margin-top:-4px;' +
    'background:' + colors[i] + ';' +
    'clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);' +
    'transform-origin:center ' + (sizes[i] + 4) + 'px;';

  ring.appendChild(node);
});

// DEMO FUNCTIONALITY
function runDemo() {
  var input = document.getElementById('demoInput').value.trim();

  if (!input) {
    alert('Please paste a review to analyze.');
    return;
  }

  var btn = document.getElementById('demoBtn');
  var loading = document.getElementById('demoLoading');
  var results = document.getElementById('demoResults');
  var loadBar = document.getElementById('loadBarInner');

  // Disable button and show loading
  btn.disabled = true;
  btn.style.opacity = '.5';
  results.classList.remove('active');
  results.style.display = 'none';
  loading.classList.add('active');

  // Reset and restart loading bar animation
  loadBar.style.animation = 'none';
  loadBar.offsetHeight;
  loadBar.style.animation = 'loadProgress 2s ease-in-out forwards';

  setTimeout(function () {
    // Text analysis
    var words = input.split(/\s+/).length;
    var exclMatch = input.match(/!/g);
    var exclCount = exclMatch ? exclMatch.length : 0;

    var capsMatch = input.match(/[A-Z]/g);
    var capsRatio = capsMatch
      ? capsMatch.length / Math.max(input.length, 1)
      : 0;

    var superlatives =
      /(perfect|amazing|incredible|best|fantastic|wonderful|immaculate|absolutely|flawless|outstanding)/gi;
    var supMatch = input.match(superlatives);
    var supCount = supMatch ? supMatch.length : 0;

    var vagueWords =
      /(great|nice|good|would recommend|without hesitation)/gi;
    var vagueMatch = input.match(vagueWords);
    var vagueCount = vagueMatch ? vagueMatch.length : 0;

    // Generate scores
    var rawScore =
      0.3 +
      exclCount * 0.04 +
      supCount * 0.08 +
      vagueCount * 0.06 +
      capsRatio * 0.5 -
      (words > 50 ? 0.1 : 0) -
      (words > 100 ? 0.1 : 0);

    var aiScore = Math.min(0.98, Math.max(0.15, rawScore));
    var authScore = Math.max(
      0.05,
      Math.min(0.95, 1 - aiScore + (Math.random() * 0.1 - 0.05))
    );

    aiScore = Math.round(aiScore * 100) / 100;
    authScore = Math.round(authScore * 100) / 100;

    var isFake = aiScore > 0.6;
    var verdict = isFake ? 'BLOCKED' : 'PASSED';
    var verdictColor = isFake ? 'var(--crimson)' : 'var(--green)';

    // Build reasoning
    var reasons = [];

    if (supCount >= 2) {
      reasons.push(
        'High density of superlative language (' + supCount + ' instances)'
      );
    }
    if (exclCount >= 2) {
      reasons.push(
        'Excessive exclamation marks (' + exclCount + ' found)'
      );
    }
    if (vagueCount >= 1) {
      reasons.push('Vague positive phrasing without specific details');
    }
    if (words < 30) {
      reasons.push('Unusually short review with low information density');
    }
    if (capsRatio > 0.15) {
      reasons.push(
        'Elevated capitalization ratio suggesting emphasis manipulation'
      );
    }
    if (supCount < 1 && exclCount < 2 && vagueCount < 1) {
      reasons.push(
        'Review appears to contain specific, grounded feedback'
      );
    }
    if (reasons.length === 0) {
      reasons.push('Review shows balanced sentiment with specific details');
    }

    // Hide loading
    loading.classList.remove('active');

    // Display scores
    var resAI = document.getElementById('resAI');
    resAI.textContent = aiScore.toFixed(2);
    resAI.style.color = aiScore > 0.6 ? 'var(--crimson)' : 'var(--green)';

    var resAuth = document.getElementById('resAuth');
    resAuth.textContent = authScore.toFixed(2);
    resAuth.style.color =
      authScore > 0.5 ? 'var(--green)' : 'var(--crimson)';

    var resVerdict = document.getElementById('resVerdict');
    resVerdict.textContent = verdict;
    resVerdict.style.color = verdictColor;

    // Display explanation
    document.getElementById('resExplanation').innerHTML =
      '<strong style="color:var(--text)">Analysis:</strong> ' +
      reasons.join(' · ');

    // Display JSON response
    var fraudType = 'none';
    if (isFake) {
      fraudType = aiScore > 0.8 ? 'ai_generated' : 'suspicious';
    }

    var jsonResponse = {
      review_id: 'demo_' + Date.now(),
      fraud_score: aiScore,
      authenticity: authScore,
      ai_generated_probability: aiScore,
      verdict: verdict.toLowerCase(),
      fraud_type: fraudType,
      coordination_detected: false,
      signals: reasons,
      latency_ms: Math.floor(Math.random() * 80 + 120),
      model_version: 'fynx-v0.3-beta',
      compliance_trail: true
    };

    document.getElementById('resJSON').textContent = JSON.stringify(
      jsonResponse,
      null,
      2
    );

    // Show results
    results.classList.add('active');
    results.style.display = 'block';

    // Re-enable button
    btn.disabled = false;
    btn.style.opacity = '1';
  }, 2200);
}

// SUBSCRIBE FORM HANDLER (formsubmit.co)
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('subscribeForm');
  var feedback = document.getElementById('subscribeFeedback');
  var subscribeBtn = document.getElementById('subscribeBtn');

  // Exit if elements not found
  if (!form || !feedback) {
    return;
  }

  // Check if user has already subscribed
  if (localStorage.getItem('fynx_subscribed') === 'true') {
    form.style.display = 'none';
    feedback.textContent =
      '\u2713 You\u2019ve already subscribed. Thank you for your interest!';
    feedback.className = 'subscribe-feedback show already';
    return;
  }

  // Handle form submission
  form.addEventListener('submit', function (event) {
    // Prevent double submission
    if (localStorage.getItem('fynx_subscribed') === 'true') {
      event.preventDefault();
      form.style.display = 'none';
      feedback.textContent =
        '\u2713 You\u2019ve already subscribed. Thank you!';
      feedback.className = 'subscribe-feedback show already';
      return;
    }

    // Validate email
    var emailInput = document.getElementById('subscribeEmail');
    var email = emailInput.value.trim();

    if (!email || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      event.preventDefault();
      feedback.textContent = '\u26A0 Please enter a valid email address.';
      feedback.className = 'subscribe-feedback show already';
      return;
    }

    // Set localStorage flag
    // Form submits naturally via POST to formsubmit.co
    // User redirected to https://www.fynx.org/thank-you
    localStorage.setItem('fynx_subscribed', 'true');

    // Visual feedback while submitting
    if (subscribeBtn) {
      subscribeBtn.disabled = true;
      subscribeBtn.innerHTML = '<span>Subscribing...</span>';
      subscribeBtn.style.opacity = '.6';
    }
  });
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var href = a.getAttribute('href');
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// PARALLAX ON HERO
window.addEventListener('scroll', function () {
  var v = document.querySelector('.hero-visual');
  if (v && window.scrollY < 800) {
    v.style.transform = 'translateY(' + window.scrollY * 0.05 + 'px)';
  }
});

// ═══════════════════════════════════════
// ENHANCED FLOW DIAGRAM ANIMATIONS
// ═══════════════════════════════════════

var flowDiagramObs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Animate nodes
        var nodes = entry.target.querySelectorAll('.f-node');
        nodes.forEach(function (node, i) {
          var delay = parseInt(node.dataset.delay) || i * 200;
          setTimeout(function () {
            node.style.transition = 'opacity .6s ease, transform .6s ease';
            node.style.opacity = '1';
            node.style.transform = 'none';
            node.classList.add('visible');
          }, delay);
        });

        // Animate stage labels
        var labels = entry.target.querySelectorAll('.flow-stage-label');
        labels.forEach(function (label, i) {
          setTimeout(function () {
            label.style.transition = 'opacity .5s ease';
            label.style.opacity = '1';
          }, i * 200);
        });

        // Animate connectors
        var connectors = entry.target.querySelectorAll('.flow-connector');
        connectors.forEach(function (conn, i) {
          setTimeout(function () {
            conn.style.transition = 'opacity .5s ease';
            conn.style.opacity = '1';
          }, i * 150 + 100);
        });

        // Animate bottom stats
        var stats = entry.target.querySelectorAll('.flow-stat-val');
        stats.forEach(function (stat, i) {
          setTimeout(function () {
            stat.style.transition = 'opacity .4s ease, transform .4s ease';
            stat.style.opacity = '1';
            stat.style.transform = 'none';
          }, 1200 + i * 100);
        });

        flowDiagramObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

var flowDiagramEl = document.getElementById('flowDiagram');
if (flowDiagramEl) {
  // Set initial states for staggered animation
  var stageLabels = flowDiagramEl.querySelectorAll('.flow-stage-label');
  stageLabels.forEach(function (label) {
    label.style.opacity = '0';
  });

  var flowConnectors = flowDiagramEl.querySelectorAll('.flow-connector');
  flowConnectors.forEach(function (conn) {
    conn.style.opacity = '0';
  });

  var flowStats = flowDiagramEl.querySelectorAll('.flow-stat-val');
  flowStats.forEach(function (stat) {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(10px)';
  });

  flowDiagramObs.observe(flowDiagramEl);
}

// RANDOM LATENCY COUNTER
// Simulates live latency updates in the flow diagram status bar
var latencyEl = document.querySelector('.flow-status-latency strong');
if (latencyEl) {
  setInterval(function () {
    var latency = Math.floor(Math.random() * 60 + 110);
    latencyEl.textContent = latency + 'ms';
  }, 3000);
}