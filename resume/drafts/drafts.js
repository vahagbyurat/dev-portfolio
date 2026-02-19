(function () {
  var FALLBACK_DATA = {
    programmingLanguages: {
      title: 'Programming Languages',
      mostExperience: [{ name: 'Java', years: '15+' }],
      activeStrong: [
        { name: 'Python', years: '8+' },
        { name: 'SQL', years: '12+' }
      ],
      enjoyUsing: [{ name: 'Rust', years: '1+' }],
      alsoCodedIn: ['TypeScript', 'JavaScript', 'C#', 'C++', 'GraphQL'],
      wantToLearn: ['Zig', 'Go (Golang)']
    },
    skillDomains: [
      {
        name: 'Programming Languages',
        items: ['Java', 'Python', 'SQL', 'Rust', 'TypeScript', 'JavaScript', 'C#', 'C++', 'GraphQL']
      },
      {
        name: 'Testing & Automation',
        items: ['Framework Architecture', 'Selenium', 'Playwright', 'REST API Testing', 'E2E Testing', 'Performance Testing']
      },
      {
        name: 'Cloud & DevOps',
        items: ['AWS', 'GitLab CI/CD', 'Jenkins', 'ArgoCD', 'Datadog']
      },
      {
        name: 'Data & Databases',
        items: ['PostgreSQL', 'MySQL', 'Snowflake', 'DynamoDB', 'Redis', 'OpenSearch']
      }
    ],
    experienceTimeline: [
      {
        period: '2024-2025',
        role: 'Senior Software Engineer II (SDET)',
        company: 'Altruist',
        highlight: 'Led integrations QA with high automation coverage and production confidence.'
      },
      {
        period: '2008-2024',
        role: 'Automation QA Engineer',
        company: 'Sony PlayStation',
        highlight: 'Built and evolved large-scale automation frameworks across major product lines.'
      }
    ],
    strengthSignals: [
      '15+ years in quality engineering and automation',
      'Strong in Java, Python, SQL',
      'Designs maintainable frameworks and CI-driven quality systems'
    ],
    growthSignals: [
      'Enjoys systems programming in Rust',
      'Actively learning Zig and Go'
    ],
    profile: {
      name: 'Vahag Byurat',
      title: 'Senior SDET · QA Automation Engineer · Software Builder'
    }
  };

  function byId(id) { return document.getElementById(id); }
  function asLabel(item) { return item && item.name ? item.name : item; }
  function asYears(item) { return item && item.years ? item.years : ''; }

  function chip(label, extraClass) {
    return '<span class="chip ' + (extraClass || '') + '">' + label + '</span>';
  }

  function makeScoreRows(data) {
    var rows = [];
    rows.push({ name: asLabel(data.mostExperience[0]), score: 98, tier: 'Most Experience' });
    data.activeStrong.forEach(function (item) {
      rows.push({ name: asLabel(item), score: 84, tier: 'Active + Strong' });
    });
    data.enjoyUsing.forEach(function (item) {
      rows.push({ name: asLabel(item), score: 63, tier: 'Like Programming In' });
    });
    data.alsoCodedIn.forEach(function (item) {
      rows.push({ name: asLabel(item), score: 40, tier: 'Also Coded In' });
    });
    return rows;
  }

  function renderDraft1(data) {
    var most = data.mostExperience[0];
    var active = data.activeStrong.map(function (item) {
      return '<div class="rank-item"><strong>' + asLabel(item) + '</strong><span>' + asYears(item) + ' years</span></div>';
    }).join('');

    var also = data.alsoCodedIn.map(function (item) {
      return chip(asLabel(item), 'muted');
    }).join('');

    var learn = data.wantToLearn.map(function (item) {
      return chip(asLabel(item), 'learn');
    }).join('');

    return '' +
      '<section class="draft-card draft-one">' +
        '<div class="hero-band">' +
          '<div class="hero-main">' +
            '<p class="eyebrow">Draft 1 · Executive Snapshot</p>' +
            '<h2>Language profile tuned for hiring manager scan speed</h2>' +
            '<p>Clear top signal: strongest stack first, then active strengths, then breadth and growth.</p>' +
          '</div>' +
          '<div class="hero-most">' +
            '<span>Most Experience In</span>' +
            '<h3>' + asLabel(most) + '</h3>' +
            '<p>' + asYears(most) + ' years shipping production systems</p>' +
          '</div>' +
        '</div>' +
        '<div class="two-col">' +
          '<section class="panel">' +
            '<h4>Currently/Actively Using</h4>' +
            '<div class="rank-list">' + active + '</div>' +
            '<h4>Like Programming In</h4>' +
            '<div class="chips">' + data.enjoyUsing.map(function (item) { return chip(asLabel(item)); }).join('') + '</div>' +
          '</section>' +
          '<section class="panel">' +
            '<h4>Also Coded In</h4>' +
            '<div class="chips">' + also + '</div>' +
            '<h4>Wanting To Learn</h4>' +
            '<div class="chips">' + learn + '</div>' +
          '</section>' +
        '</div>' +
      '</section>';
  }

  function renderDraft2(data) {
    var rows = makeScoreRows(data).map(function (row) {
      return '' +
        '<div class="meter-row">' +
          '<div class="meter-label"><strong>' + row.name + '</strong><small>' + row.tier + '</small></div>' +
          '<div class="meter-track"><div class="meter-fill" style="--score:' + row.score + '%"></div></div>' +
          '<span class="meter-score">' + row.score + '</span>' +
        '</div>';
    }).join('');

    return '' +
      '<section class="draft-card draft-two">' +
        '<header>' +
          '<p class="eyebrow">Draft 2 · Capability Spectrum</p>' +
          '<h2>Depth + momentum view</h2>' +
          '<p>A quantitative-looking model to communicate immediate impact and future trajectory.</p>' +
        '</header>' +
        '<div class="panel">' + rows + '</div>' +
        '<div class="legend-row">' +
          '<span><b class="dot d1"></b> Most Experience</span>' +
          '<span><b class="dot d2"></b> Active + Strong</span>' +
          '<span><b class="dot d3"></b> Like Programming In</span>' +
          '<span><b class="dot d4"></b> Also Coded In</span>' +
        '</div>' +
        '<div class="learn-strip">Next Learning Focus: ' + data.wantToLearn.join(' + ') + '</div>' +
      '</section>';
  }

  function renderDraft3(data) {
    var featured = [
      {
        tier: 'Core Pillar',
        name: asLabel(data.mostExperience[0]),
        text: 'Primary engineering language with deepest delivery ownership.'
      },
      {
        tier: 'Current Strength',
        name: asLabel(data.activeStrong[0]),
        text: 'Actively used for automation and tooling.'
      },
      {
        tier: 'Current Strength',
        name: asLabel(data.activeStrong[1]),
        text: 'Strong data fluency for validation and backend quality.'
      },
      {
        tier: 'Builder Interest',
        name: asLabel(data.enjoyUsing[0]),
        text: 'Enjoyed for systems-level and modern engineering patterns.'
      }
    ].map(function (item) {
      return '' +
        '<article class="story-card">' +
          '<span class="tier">' + item.tier + '</span>' +
          '<h3>' + item.name + '</h3>' +
          '<p>' + item.text + '</p>' +
        '</article>';
    }).join('');

    var matrixRows = data.alsoCodedIn.map(function (name) {
      return '<tr><td>' + name + '</td><td>Secondary production familiarity</td></tr>';
    }).join('');

    return '' +
      '<section class="draft-card draft-three">' +
        '<header>' +
          '<p class="eyebrow">Draft 3 · Portfolio Narrative</p>' +
          '<h2>Language story with context and positioning</h2>' +
        '</header>' +
        '<div class="story-grid">' +
          '<div class="story-column">' + featured + '</div>' +
          '<aside class="panel">' +
            '<h4>Secondary Languages</h4>' +
            '<table class="matrix"><thead><tr><th>Language</th><th>Role</th></tr></thead><tbody>' + matrixRows + '</tbody></table>' +
            '<h4>Wanting To Learn</h4>' +
            '<div class="chips">' + data.wantToLearn.map(function (item) { return chip(item, 'learn'); }).join('') + '</div>' +
          '</aside>' +
        '</div>' +
      '</section>';
  }

  function renderDraft4(data) {
    function lane(title, items, mood) {
      return '' +
        '<div class="road-lane ' + mood + '">' +
          '<h4>' + title + '</h4>' +
          '<div class="chips">' + items.map(function (item) {
            var years = asYears(item);
            return chip(asLabel(item) + (years ? ' · ' + years + ' yrs' : ''));
          }).join('') + '</div>' +
        '</div>';
    }

    return '' +
      '<section class="draft-card draft-four">' +
        '<header>' +
          '<p class="eyebrow">Draft 4 · Growth Roadmap</p>' +
          '<h2>From core mastery to next targets</h2>' +
          '<p>A lane-based board that visualizes current strengths and intentional learning path.</p>' +
        '</header>' +
        '<div class="roadmap">' +
          lane('Most Experience', data.mostExperience, 'high') +
          lane('Currently Strong In', data.activeStrong, 'strong') +
          lane('Like Programming In', data.enjoyUsing, 'interest') +
          lane('Also Coded In', data.alsoCodedIn, 'breadth') +
          lane('Wanting To Learn', data.wantToLearn, 'future') +
        '</div>' +
      '</section>';
  }

  function renderDraft5(data) {
    function makeLangNodes(items, type) {
      return items.map(function (item) {
        var years = asYears(item);
        return '' +
          '<div class="node lang-node ' + type + '">' +
            '<strong>' + asLabel(item) + '</strong>' +
            (years ? '<small>' + years + ' yrs</small>' : '') +
          '</div>';
      }).join('');
    }

    function cluster(title, items, type) {
      return '' +
        '<section class="cluster ' + type + '">' +
          '<div class="node category-node">' + title + '</div>' +
          '<div class="links"></div>' +
          '<div class="node-pack">' + makeLangNodes(items, type) + '</div>' +
        '</section>';
    }

    return '' +
      '<section class="draft-card draft-five">' +
        '<header>' +
          '<p class="eyebrow">Draft 5 · Node Graph</p>' +
          '<h2>Clustered language nodes from source data</h2>' +
          '<p>Each category is a hub; each language is a connected bubble. Bigger nodes represent core strength.</p>' +
        '</header>' +
        '<div class="node-canvas">' +
          cluster('Most Experience In', data.mostExperience, 'core') +
          cluster('Currently Strong In', data.activeStrong, 'strong') +
          cluster('Like Programming In', data.enjoyUsing, 'like') +
          cluster('Also Coded In', data.alsoCodedIn, 'also') +
          cluster('Wanting To Learn', data.wantToLearn, 'learn') +
        '</div>' +
      '</section>';
  }

  function renderDraft6(full) {
    var profile = full.profile || FALLBACK_DATA.profile;
    var domains = full.skillDomains || FALLBACK_DATA.skillDomains;
    var timeline = full.experienceTimeline || FALLBACK_DATA.experienceTimeline;
    var strengths = full.strengthSignals || FALLBACK_DATA.strengthSignals;
    var growth = full.growthSignals || FALLBACK_DATA.growthSignals;

    var center = { x: 490, y: 330 };
    var categoryRadius = 238;
    var svgLines = [];
    var graphNodes = [];
    var svgBackdrop = [
      '<circle cx="' + center.x + '" cy="' + center.y + '" r="120" class="ring r1"></circle>',
      '<circle cx="' + center.x + '" cy="' + center.y + '" r="220" class="ring r2"></circle>',
      '<circle cx="' + center.x + '" cy="' + center.y + '" r="320" class="ring r3"></circle>'
    ];

    function pathCurve(x1, y1, x2, y2, bend) {
      var cx = (x1 + x2) / 2 + (y2 - y1) * bend;
      var cy = (y1 + y2) / 2 - (x2 - x1) * bend;
      return 'M' + x1 + ',' + y1 + ' Q' + cx + ',' + cy + ' ' + x2 + ',' + y2;
    }

    graphNodes.push(
      '<div class="graph-node core" style="left:' + center.x + 'px;top:' + center.y + 'px;">' +
        '<strong>' + profile.name + '</strong>' +
        '<small>' + profile.title + '</small>' +
      '</div>'
    );

    domains.forEach(function (domain, idx) {
      var angle = (Math.PI * 2 * idx) / domains.length - Math.PI / 2;
      var cx = center.x + Math.cos(angle) * categoryRadius;
      var cy = center.y + Math.sin(angle) * categoryRadius;
      var categoryNode = {
        x: cx,
        y: cy
      };

      svgLines.push('<path d="' + pathCurve(center.x, center.y, cx, cy, idx % 2 === 0 ? 0.05 : -0.05) + '" class="edge core-edge"></path>');

      graphNodes.push(
        '<div class="graph-node category c' + idx + '" style="left:' + cx + 'px;top:' + cy + 'px;">' +
          '<strong>' + domain.name + '</strong>' +
        '</div>'
      );

      var itemRadius = domain.items.length > 6 ? 128 : 108;
      domain.items.forEach(function (item, itemIdx) {
        var itemAngle = (Math.PI * 2 * itemIdx) / domain.items.length - Math.PI / 2;
        var ix = categoryNode.x + Math.cos(itemAngle) * itemRadius;
        var iy = categoryNode.y + Math.sin(itemAngle) * itemRadius;
        var bend = itemIdx % 2 === 0 ? 0.12 : -0.12;
        svgLines.push('<path d="' + pathCurve(categoryNode.x, categoryNode.y, ix, iy, bend) + '" class="edge branch-edge"></path>');

        graphNodes.push(
          '<div class="graph-node skill s' + idx + '" style="left:' + ix + 'px;top:' + iy + 'px;">' + item + '</div>'
        );
      });
    });

    var timelineNodes = timeline.map(function (item) {
      return '' +
        '<div class="timeline-node">' +
          '<span class="period">' + item.period + '</span>' +
          '<h4>' + item.role + '</h4>' +
          '<p class="company">' + item.company + '</p>' +
          '<p class="highlight">' + item.highlight + '</p>' +
        '</div>';
    }).join('');

    return '' +
      '<section class="draft-card draft-six">' +
        '<header>' +
          '<p class="eyebrow">Draft 6 · Skill Network Graph</p>' +
          '<h2>Skill network + experience map</h2>' +
          '<p>Interactive-style node language: core profile, domain hubs, skill satellites, and timeline milestones.</p>' +
        '</header>' +
        '<div class="strength-ribbon">' + strengths.map(function (s) { return '<span>' + s + '</span>'; }).join('') + '</div>' +
        '<div class="graph-wrap">' +
          '<svg class="graph-edges" viewBox="0 0 980 660" preserveAspectRatio="xMidYMid meet">' + svgBackdrop.join('') + svgLines.join('') + '</svg>' +
          '<div class="graph-surface">' + graphNodes.join('') + '</div>' +
        '</div>' +
        '<div class="growth-ribbon">' + growth.map(function (s) { return '<span>' + s + '</span>'; }).join('') + '</div>' +
        '<div class="timeline-track">' + timelineNodes + '</div>' +
      '</section>';
  }

  function renderDraft(draft, data, full) {
    var target = byId('draftMount');
    if (!target) { return; }

    if (draft === '1') {
      target.innerHTML = renderDraft1(data);
      return;
    }
    if (draft === '2') {
      target.innerHTML = renderDraft2(data);
      return;
    }
    if (draft === '3') {
      target.innerHTML = renderDraft3(data);
      return;
    }
    if (draft === '4') {
      target.innerHTML = renderDraft4(data);
      return;
    }
    if (draft === '5') {
      target.innerHTML = renderDraft5(data);
      return;
    }
    target.innerHTML = renderDraft6(full || FALLBACK_DATA);
  }

  function loadData() {
    return fetch('../resume-data.json')
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Could not load resume-data.json');
        }
        return response.json();
      })
      .catch(function () {
        return FALLBACK_DATA;
      });
  }

  var draft = document.body.getAttribute('data-draft');
  if (!draft) {
    return;
  }

  loadData().then(function (json) {
    var full = json || FALLBACK_DATA;
    var data = full.programmingLanguages || FALLBACK_DATA.programmingLanguages;
    renderDraft(draft, data, full);
  });
})();
