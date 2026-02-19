/* Auto-generated modal content from HTML fragment files */
window.MODAL_CONTENT = {};

window.MODAL_CONTENT['dragonote'] = `
<!-- ═══════════════════════════════════════════════════
     Dragonote — Modal content fragment
     Loaded by modal.js into .modal-body
     Adapted from product-page.html
     ═══════════════════════════════════════════════════ -->

<style>
  /* ── Scoped vars (fallbacks match modal.css data-project="dragonote") ── */
  .dn-page {
    --bg: var(--modal-bg, #0c1210);
    --surface: var(--modal-surface, #141e1b);
    --surface-hover: #1a2926;
    --border: var(--modal-border, #243833);
    --text: var(--modal-text, #e4e8e7);
    --text-muted: var(--modal-text-muted, #8b9694);
    --accent: var(--modal-accent, #3ba68c);
    --accent-hover: #4bbfa2;
    --accent-glow: rgba(59, 166, 140, 0.15);
    --orange: var(--modal-secondary, #e8943a);
    --orange-hover: #f0a44e;
    --orange-glow: rgba(232, 148, 58, 0.15);
    --green: #3ba68c;
    --green-muted: rgba(59, 166, 140, 0.12);
    --gold: #e8943a;
    --gold-muted: rgba(232, 148, 58, 0.12);
    --radius: 12px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, system-ui, sans-serif;
    color: var(--text);
    line-height: 1.6;
  }

  /* ── Hero banner ──────────────────────────────────── */
  .dn-page .hero-banner {
    background: #f5f3ef;
    border-radius: 16px 16px 0 0;
    padding: 48px 48px 40px;
    display: flex;
    align-items: center;
    gap: 36px;
  }

  .dn-page .hero-text { flex: 1; min-width: 0; }

  .dn-page .hero-banner .hero-icon {
    width: 180px;
    height: 180px;
    object-fit: contain;
    flex-shrink: 0;
    filter: drop-shadow(0 4px 12px rgba(26, 46, 40, 0.1));
  }

  .dn-page .hero-banner h1 {
    font-size: 40px;
    font-weight: 700;
    color: #1a2e28;
    letter-spacing: -0.5px;
    margin-bottom: 10px;
  }

  .dn-page .hero-banner .hero-subtitle {
    font-size: 17px;
    color: #4a6860;
    max-width: 560px;
    margin: 0 0 6px;
    line-height: 1.6;
  }

  .dn-page .hero-banner .hero-detail {
    font-size: 14px;
    color: #7a9590;
    max-width: 520px;
    margin: 0;
  }

  /* ── About / content section ───────────────────── */
  .dn-page .about-section {
    padding: 40px 48px 16px;
    max-width: 960px;
    margin: 0 auto;
  }

  .dn-page .about-subsection { margin-bottom: 40px; }
  .dn-page .about-subsection:last-child { margin-bottom: 24px; }

  .dn-page .about-row {
    display: flex;
    align-items: flex-start;
    gap: 32px;
  }

  .dn-page .about-row.reverse { flex-direction: row-reverse; }

  .dn-page .about-img { flex: 0 0 44%; max-width: 44%; }

  .dn-page .about-img img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid var(--border);
  }

  .dn-page .about-copy { flex: 1; min-width: 0; }

  .dn-page .about-copy h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--text);
  }

  .dn-page .about-copy h3 .accent { color: var(--accent); }
  .dn-page .about-copy h3 .gold { color: var(--orange); }

  .dn-page .about-copy p {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 10px;
  }

  .dn-page .about-copy .cli-args {
    font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    font-size: 12px;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 16px;
    margin: 12px 0;
    line-height: 1.8;
    color: var(--text-muted);
    overflow-x: auto;
  }

  .dn-page .cli-args .flag { color: var(--accent); font-weight: 600; }
  .dn-page .cli-args .flag-pro { color: var(--orange); font-weight: 600; }
  .dn-page .cli-args .desc { color: var(--text-muted); opacity: 0.7; }

  .dn-page .about-copy .pro-nudge {
    font-size: 13px;
    color: var(--orange);
    font-weight: 600;
    margin-top: 8px;
  }

  .dn-page .about-img-full { width: 100%; margin-bottom: 16px; }

  .dn-page .about-img-full img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid var(--border);
  }

  .dn-page .artifact-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    margin-top: 12px;
  }

  .dn-page .artifact-item {
    text-align: center;
    padding: 10px 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
  }

  .dn-page .artifact-item .artifact-icon { font-size: 22px; margin-bottom: 4px; }
  .dn-page .artifact-item .artifact-name { font-size: 12px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
  .dn-page .artifact-item .artifact-desc { font-size: 11px; color: var(--text-muted); line-height: 1.4; }

  .dn-page .about-divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 0 0 40px;
  }

  /* ── Twin dragons ──────────────────────────────── */
  .dn-page .twin-dragons-panels {
    display: flex;
    gap: 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--border);
    margin-top: 20px;
  }

  .dn-page .twin-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 24px 16px 0;
    position: relative;
    min-height: 200px;
  }

  .dn-page .twin-panel img {
    max-height: 180px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 4px 16px rgba(0,0,0,0.3));
  }

  .dn-page .twin-panel .twin-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 20px;
    margin-bottom: 12px;
  }

  .dn-page .twin-panel.cli-panel { background: #0a0f14; }
  .dn-page .twin-panel.cli-panel .twin-label { color: #7ec8e3; background: rgba(126, 200, 227, 0.12); }
  .dn-page .twin-panel.gui-panel { background: var(--surface); }
  .dn-page .twin-panel.gui-panel .twin-label { color: var(--orange); background: var(--orange-glow); }

  /* ── CLI banner ────────────────────────────────── */
  .dn-page .cli-banner {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: 0 48px 32px;
    min-height: 180px;
    display: flex;
    align-items: center;
  }

  .dn-page .cli-banner img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
  }

  .dn-page .cli-banner-overlay {
    position: relative;
    z-index: 1;
    padding: 32px 40px;
    margin-left: auto;
    max-width: 55%;
  }

  .dn-page .cli-banner-overlay h3 { font-size: 20px; font-weight: 700; color: #c0d8e8; margin-bottom: 6px; }
  .dn-page .cli-banner-overlay p { font-size: 13px; color: rgba(180, 210, 230, 0.75); line-height: 1.6; margin-bottom: 0; }
  .dn-page .cli-banner-overlay code { color: #7ec8e3; font-size: 12px; }

  .dn-page .vault-dragon-img img { border: none; }

  /* ── Pricing header ────────────────────────────── */
  .dn-page .pricing-header { text-align: center; padding: 36px 48px 28px; }
  .dn-page .pricing-header .tagline { font-size: 18px; color: var(--accent); font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
  .dn-page .pricing-header p { color: var(--text-muted); font-size: 15px; max-width: 600px; margin: 0 auto; }

  /* ── Cards grid ────────────────────────────────── */
  .dn-page .pricing-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 0 48px 36px;
    max-width: 900px;
    margin: 0 auto;
  }

  .dn-page .card {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px 24px;
    position: relative;
    transition: border-color 0.2s;
  }

  .dn-page .card.pro {
    border-color: var(--orange);
    background: linear-gradient(170deg, var(--orange-glow) 0%, transparent 40%);
  }

  .dn-page .card-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 20px;
    margin-bottom: 16px;
  }

  .dn-page .card.free .card-badge { background: var(--green-muted); color: var(--green); }
  .dn-page .card.pro .card-badge { background: var(--gold-muted); color: var(--gold); }

  .dn-page .card h2 { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
  .dn-page .card .price { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; }
  .dn-page .card .price span { font-size: 32px; font-weight: 700; color: var(--text); }

  .dn-page .card .cta {
    display: block;
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.15s;
    margin-bottom: 24px;
  }

  .dn-page .card.free .cta { background: var(--surface-hover); color: var(--text); border: 1px solid var(--border); }
  .dn-page .card.free .cta:hover { background: #223530; }
  .dn-page .card.pro .cta { background: var(--orange); color: white; }
  .dn-page .card.pro .cta:hover { background: var(--orange-hover); }

  .dn-page .card ul { list-style: none; }

  .dn-page .card li {
    font-size: 13.5px;
    color: var(--text-muted);
    padding: 6px 0;
    padding-left: 22px;
    position: relative;
    line-height: 1.5;
  }

  .dn-page .card li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 14px;
    height: 14px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .dn-page .card.free li::before { content: '✓'; color: var(--green); font-size: 13px; top: 6px; font-weight: 700; }
  .dn-page .card.pro li::before { content: '✓'; color: var(--gold); font-size: 13px; top: 6px; font-weight: 700; }

  .dn-page .card .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-top: 16px;
    margin-bottom: 4px;
    padding-left: 0;
  }

  .dn-page .card .section-label::before { display: none; }

  .dn-page .card li.includes-basic {
    color: var(--text);
    font-weight: 600;
    background: var(--green-muted);
    margin: 0 -24px;
    padding: 8px 24px 8px 46px;
    border-radius: 6px;
  }
  .dn-page .card li.includes-basic::before { content: '✓'; color: var(--green); left: 24px; }

  /* ── Download section ──────────────────────────── */
  .dn-page .download-section { padding: 0 48px 40px; }
  .dn-page .download-header { text-align: center; margin-bottom: 24px; }
  .dn-page .download-header h3 { font-size: 20px; font-weight: 700; margin-bottom: 4px; }

  .dn-page .version-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 2px 10px;
    border-radius: 20px;
    background: var(--accent-glow);
    color: var(--accent);
    margin-left: 8px;
    vertical-align: middle;
  }

  .dn-page .download-header .section-subtitle { color: var(--text-muted); font-size: 14px; margin-top: 6px; }

  .dn-page .download-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: 900px;
    margin: 0 auto;
  }

  .dn-page .dl-platform {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    text-align: center;
  }

  .dn-page .dl-platform .platform-icon { font-size: 28px; margin-bottom: 8px; }
  .dn-page .dl-platform h4 { font-size: 15px; font-weight: 700; margin-bottom: 14px; }

  .dn-page .dl-platform .dl-links { display: flex; flex-direction: column; gap: 8px; }

  .dn-page .dl-platform .dl-links a {
    display: block;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12.5px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.15s;
  }

  .dn-page .dl-platform .dl-links a.dl-basic { background: var(--surface-hover); color: var(--text); border: 1px solid var(--border); }
  .dn-page .dl-platform .dl-links a.dl-basic:hover { background: #223530; }
  .dn-page .dl-platform .dl-links a.dl-pro { background: var(--orange); color: white; }
  .dn-page .dl-platform .dl-links a.dl-pro:hover { background: var(--orange-hover); }
  .dn-page .dl-platform .dl-links .dl-format { font-size: 11px; opacity: 0.7; }

  .dn-page .dl-cli-note { text-align: center; margin-top: 16px; font-size: 13px; color: var(--text-muted); }
  .dn-page .dl-cli-note a { color: var(--accent); text-decoration: none; }

  /* ── Comparison table ──────────────────────────── */
  .dn-page .comparison-section { padding: 0 48px 40px; }
  .dn-page .comparison-toggle { text-align: center; margin-bottom: 24px; }

  .dn-page .comparison-toggle button {
    background: none;
    border: 1px solid var(--border);
    color: var(--text-muted);
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 13px;
    transition: all 0.15s;
  }
  .dn-page .comparison-toggle button:hover { color: var(--text); border-color: var(--accent); }

  .dn-page .comparison-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
  .dn-page .comparison-table thead th {
    text-align: left;
    padding: 12px 16px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border);
  }
  .dn-page .comparison-table thead th:nth-child(2),
  .dn-page .comparison-table thead th:nth-child(3) { text-align: center; width: 120px; }

  .dn-page .comparison-table tbody td { padding: 10px 16px; border-bottom: 1px solid rgba(36, 56, 51, 0.5); color: var(--text-muted); }
  .dn-page .comparison-table tbody td:nth-child(2),
  .dn-page .comparison-table tbody td:nth-child(3) { text-align: center; }
  .dn-page .comparison-table tbody tr:hover { background: var(--surface-hover); }

  .dn-page .comparison-table .category-row td {
    padding-top: 20px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--accent);
    border-bottom: 1px solid var(--border);
  }

  .dn-page .check { color: var(--green); font-weight: 700; font-size: 15px; }
  .dn-page .check-pro { color: var(--gold); font-weight: 700; font-size: 15px; }
  .dn-page .dash { color: #2a3b36; font-size: 18px; }
  .dn-page .detail { font-size: 12px; color: var(--text-muted); opacity: 0.7; }

  /* ── Tech specs ────────────────────────────────── */
  .dn-page .specs-section { padding: 0 48px 40px; }
  .dn-page .specs-section h3 { font-size: 20px; font-weight: 700; text-align: center; margin-bottom: 8px; }
  .dn-page .specs-section .section-subtitle { text-align: center; color: var(--text-muted); font-size: 14px; margin-bottom: 24px; }

  .dn-page .specs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    max-width: 900px;
    margin: 0 auto;
  }

  .dn-page .spec-card { border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; }
  .dn-page .spec-card h4 { font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
  .dn-page .spec-card ul { list-style: none; }
  .dn-page .spec-card li { font-size: 13px; color: var(--text-muted); padding: 4px 0; line-height: 1.5; }
  .dn-page .spec-card li strong { color: var(--text); font-weight: 600; }

  /* ── Considerations ────────────────────────────── */
  .dn-page .considerations-section { padding: 0 48px 40px; }
  .dn-page .considerations-toggle { text-align: center; margin-bottom: 0; }

  .dn-page .considerations-toggle button {
    background: none;
    border: 1px solid var(--border);
    color: var(--text-muted);
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 13px;
    transition: all 0.15s;
  }
  .dn-page .considerations-toggle button:hover { color: var(--text); border-color: var(--accent); }

  .dn-page .considerations-content { max-width: 900px; margin: 24px auto 0; }
  .dn-page .considerations-content h4 { font-size: 15px; font-weight: 700; margin: 24px 0 10px; color: var(--text); }
  .dn-page .considerations-content h4:first-child { margin-top: 0; }
  .dn-page .considerations-content p { font-size: 13.5px; color: var(--text-muted); line-height: 1.7; margin-bottom: 10px; }
  .dn-page .considerations-content p strong { color: var(--text); }

  .dn-page .considerations-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  .dn-page .considerations-table thead th { text-align: left; padding: 10px 14px; font-size: 12px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; color: var(--text-muted); border-bottom: 1px solid var(--border); }
  .dn-page .considerations-table tbody td { padding: 8px 14px; border-bottom: 1px solid rgba(36, 56, 51, 0.5); color: var(--text-muted); }
  .dn-page .considerations-table tbody td:first-child { color: var(--text); font-weight: 500; }
  .dn-page .considerations-table tbody tr:hover { background: var(--surface-hover); }

  .dn-page .verdict-box {
    border: 1px solid var(--accent);
    background: var(--accent-glow);
    border-radius: var(--radius);
    padding: 16px 20px;
    margin-top: 20px;
  }

  .dn-page .verdict-box p { color: var(--text); font-size: 13.5px; line-height: 1.7; }

  .dn-page .other-projects-note {
    text-align: center;
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    font-size: 13px;
    color: var(--text-muted);
  }
  .dn-page .other-projects-note a { color: var(--orange); text-decoration: none; }

  /* ── Footer ────────────────────────────────────── */
  .dn-page .pricing-footer { text-align: center; padding: 0 48px 32px; font-size: 13px; color: var(--text-muted); }
  .dn-page .pricing-footer a { color: var(--accent); text-decoration: none; }

  /* ── Responsive ────────────────────────────────── */
  @media (max-width: 900px) {
    .dn-page .hero-banner { padding: 32px 20px 28px; flex-direction: column; text-align: center; }
    .dn-page .hero-banner .hero-icon { width: 120px; height: 120px; }
    .dn-page .hero-text { text-align: center; }
    .dn-page .hero-banner h1 { font-size: 30px; }
    .dn-page .about-section { padding: 24px 20px 8px; }
    .dn-page .about-row, .dn-page .about-row.reverse { flex-direction: column; }
    .dn-page .about-img { flex: none; max-width: 100%; }
    .dn-page .artifact-list { grid-template-columns: repeat(3, 1fr); }
    .dn-page .about-copy .cli-args { font-size: 11px; }
    .dn-page .twin-dragons-panels { flex-direction: column; }
    .dn-page .twin-panel img { max-height: 140px; }
    .dn-page .cli-banner { margin: 0 20px 24px; min-height: 140px; }
    .dn-page .cli-banner-overlay { max-width: 60%; padding: 24px 20px; }
    .dn-page .pricing-header { padding: 24px 20px 20px; }
    .dn-page .pricing-cards { grid-template-columns: 1fr; padding: 0 20px 24px; }
    .dn-page .download-section { padding: 0 20px 32px; }
    .dn-page .download-grid { grid-template-columns: 1fr; }
    .dn-page .comparison-section { padding: 0 16px 32px; }
    .dn-page .specs-grid { grid-template-columns: 1fr; }
    .dn-page .specs-section { padding: 0 20px 32px; }
    .dn-page .considerations-section { padding: 0 16px 32px; }
  }
</style>

<div class="dn-page">

  <!-- Hero banner -->
  <div class="hero-banner">
    <div class="hero-text">
      <h1>Dragonote</h1>
      <p class="hero-subtitle">Scan any codebase and export structured, token-aware context files ready to drop into an LLM conversation.</p>
      <p class="hero-detail">Rust CLI + Tauri desktop app &mdash; fast, deterministic, cross-platform.</p>
    </div>
    <img src="modal/dragonote_mascot.png" alt="Dragonote mascot" class="hero-icon"
         onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='../modal/dragonote_mascot.png';}">
  </div>

  <!-- About section -->
  <div class="about-section">

    <!-- Twin Dragons -->
    <div class="about-subsection">
      <h3 style="font-size:20px; font-weight:700; margin-bottom:6px;">The Twin Dragons &mdash; <span style="color:var(--accent);">One Core, Two Souls</span></h3>
      <p style="font-size:14px; color:var(--text-muted); line-height:1.7; margin-bottom:4px;">
        Whether you live in the terminal or prefer a visual interface, Dragonote has you covered.
        The CLI (<code>dragonote</code>) is a standalone binary you can drop into any CI/CD pipeline
        or fire from your shell. The Desktop GUI wraps the exact same Rust scanning engine
        in a Tauri-powered native window with file trees, checkboxes, and a directory picker.
        Both share identical scanning, export, and truncation logic &mdash; same output, every time.
      </p>

      <div class="twin-dragons-panels">
        <div class="twin-panel cli-panel">
          <span class="twin-label">CLI</span>
          <img src="modal/Gemini_Generated_Image_di3krpdi3krpdi3k.png" alt="CLI Dragon"
               onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='../modal/Gemini_Generated_Image_di3krpdi3krpdi3k.png';}">
        </div>
        <div class="twin-panel gui-panel">
          <span class="twin-label">Desktop GUI</span>
          <img src="modal/gold_gui_dragon.png" alt="GUI Dragon"
               onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='../modal/gold_gui_dragon.png';}">
        </div>
      </div>

      <div class="about-copy" style="margin-top:16px;">
        <div class="cli-args">
          <span class="flag">dragonote</span> <span class="desc">&lt;path&gt;</span><br>
          <span class="flag">--extra-ignore</span> <span class="desc">"*.log,temp/"</span> &nbsp; <span class="desc"># skip matching patterns</span><br>
          <span class="flag">--force-include</span> <span class="desc">"config.toml"</span> &nbsp; <span class="desc"># override ignores</span><br>
          <span class="flag">--include-resources</span> &nbsp; <span class="desc"># include assets/static dirs</span><br>
          <span class="flag">--test-mode</span> <span class="desc">separate|inline|exclude</span><br>
          <span class="flag-pro">--max-code-tokens</span> <span class="desc">500000</span> &nbsp; <span class="desc"># Pro: custom limits</span><br>
          <span class="flag-pro">--budget</span> <span class="desc">128000</span> &nbsp; <span class="desc"># Pro: exact token budget</span><br>
          <span class="flag-pro">--split</span> &nbsp; <span class="desc"># Pro: auto-split large exports</span><br>
          <span class="flag-pro">--zip</span> &nbsp; <span class="desc"># Pro: archive output</span>
        </div>
      </div>
    </div>

    <hr class="about-divider">

    <!-- Hoarding Knowledge -->
    <div class="about-subsection">
      <div class="about-row reverse">
        <div class="about-img vault-dragon-img">
          <img src="modal/vault_dragon.png" alt="The Dragon's Vault of Code Context"
               onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='../modal/vault_dragon.png';}">
        </div>
        <div class="about-copy">
          <h3>Hoarding Knowledge &mdash; <span class="accent">Smart Context Scanning</span></h3>
          <p>
            Point Dragonote at any project directory and it automatically understands what matters.
            Your <code>.gitignore</code> rules are respected out of the box &mdash; no configuration needed.
            Binary files, <code>node_modules</code>, build artifacts, and common junk directories are
            detected and skipped before a single token is counted.
          </p>
          <p>
            Test directories (<code>tests/</code>, <code>__tests__/</code>, <code>spec/</code>) are
            automatically detected and exported separately so your LLM gets clean source context without
            test noise mixed in.
            Resource directories like <code>assets/</code> and <code>static/</code> are flagged
            and toggleable.
          </p>
          <p>
            <strong>Pro</strong> unlocks <code>.dragignore</code> &mdash; a persistent, project-level
            ignore file that sits alongside your <code>.gitignore</code> and gives you fine-grained
            control over exactly what the dragon hoards.
          </p>
        </div>
      </div>
    </div>

    <hr class="about-divider">

    <!-- 5 Critical Expert Artifacts -->
    <div class="about-subsection">
      <div class="about-img-full">
        <img src="modal/clip_artifacts.png" alt="5 Critical Export Artifacts"
             onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='../modal/clip_artifacts.png';}">
      </div>
      <p style="font-size:14px; color:var(--text-muted); margin-bottom:16px; text-align:center; line-height:1.7;">
        Every scan produces a complete set of structured Markdown artifacts &mdash; ready to paste
        directly into any LLM conversation window.
      </p>
      <div class="artifact-list">
        <div class="artifact-item">
          <div class="artifact-icon">&#x1F333;</div>
          <div class="artifact-name">File Tree</div>
          <div class="artifact-desc">Full directory structure with sizes</div>
        </div>
        <div class="artifact-item">
          <div class="artifact-icon">&#x1F4C4;</div>
          <div class="artifact-name">Source Code</div>
          <div class="artifact-desc">Partitioned, token-aware code context</div>
        </div>
        <div class="artifact-item">
          <div class="artifact-icon">&#x1F9EA;</div>
          <div class="artifact-name">Test Files</div>
          <div class="artifact-desc">Separately exported test context</div>
        </div>
        <div class="artifact-item">
          <div class="artifact-icon">&#x1F4CA;</div>
          <div class="artifact-name">Raw CSVs</div>
          <div class="artifact-desc">Detected, copied &amp; consolidated</div>
        </div>
        <div class="artifact-item">
          <div class="artifact-icon">&#x1F4DD;</div>
          <div class="artifact-name">Starter Prompt</div>
          <div class="artifact-desc">Analysis prompt &amp; usage readme</div>
        </div>
      </div>
    </div>

    <hr class="about-divider">

    <!-- Precise Token Truncation -->
    <div class="about-subsection">
      <div class="about-row">
        <div class="about-img">
          <img src="modal/clip_truncation.png" alt="Truncation Mode Comparison"
               onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='../modal/clip_truncation.png';}">
        </div>
        <div class="about-copy">
          <h3>Precise Token Truncation &mdash; <span class="gold">Go Pro</span></h3>
          <p>
            Every LLM has a context window. Dragonote makes sure your export fits inside it
            without wasting a single token. The Basic tier uses conservative fixed limits
            (200k code / 100k test tokens) that work with any modern model.
          </p>
          <p>
            <strong>Pro</strong> unlocks full control: set custom token limits, switch to
            character-based measurement, or use <strong>exact token budget mode</strong> powered
            by <code>tiktoken</code> (cl100k_base) to slice your codebase to a precise count.
            Need to split a massive monorepo across multiple conversations?
            <strong>Auto-split</strong> partitions your export into correctly-sized chunks
            with zero manual math.
          </p>
          <p class="pro-nudge">
            &#x1F525; Safely slice large codebases with accurate, token-safe truncation &mdash;
            including tests.
          </p>
        </div>
      </div>
    </div>

  </div>

  <!-- Pricing header -->
  <div class="pricing-header">
    <div class="tagline">Choose your plan</div>
    <p>The core scanning tool is free forever. Go Pro for power features and the full Dragon Suite.</p>
  </div>

  <!-- Cards -->
  <div class="pricing-cards">
    <div class="card free">
      <div class="card-badge">Free</div>
      <h2>Basic</h2>
      <div class="price"><span>$0</span> / forever</div>
      <a href="#" class="cta">Download Free</a>
      <ul>
        <li>Scan a project with smart defaults</li>
        <li>Automatic .gitignore &amp; binary detection</li>
        <li>File tree + code context output</li>
        <li>200k token code / 100k token test limits</li>
        <li>Analysis prompt &amp; usage readme</li>
        <li>Test detection (separate export)</li>
        <li>Desktop GUI &amp; CLI</li>
        <li class="section-label">CLI only</li>
        <li>Extra ignore patterns (glob)</li>
        <li>Force-include overrides</li>
        <li>Resource directory toggle</li>
        <li class="section-label">Ongoing</li>
        <li>Free updates &amp; bug fixes</li>
      </ul>
    </div>

    <div class="card pro">
      <div class="card-badge">Pro</div>
      <h2>Dragon Suite</h2>
      <div class="price"><span>$5</span> / month</div>
      <a href="#" class="cta">Start Pro</a>
      <ul>
        <li class="includes-basic">Everything in Basic, plus:</li>
        <li>Multi-root project scanning</li>
        <li>Configurable test directories &amp; wildcards</li>
        <li>All test export modes (separate / inline / exclude)</li>
        <li>CSV detection, copying &amp; consolidation</li>
        <li>Custom token &amp; character truncation limits</li>
        <li>Exact token budget mode</li>
        <li>Auto-split &amp; consolidated output</li>
        <li>.dragignore &amp; persistent ignore rules</li>
        <li>UI: file-level checkbox control</li>
        <li>UI: resource directory picker</li>
        <li>ZIP archive export</li>
        <li>Parallel scanning (rayon)</li>
        <li class="section-label">Suite &amp; access</li>
        <li>Keep the tool if you cancel</li>
        <li>Full Dragon Suite access</li>
        <li>Request features &amp; bug fixes</li>
        <li>Early access to betas</li>
      </ul>
    </div>
  </div>

  <!-- CLI Banner -->
  <div class="cli-banner">
    <img src="modal/Gemini_Generated_Image_di3krpdi3krpdi3k.png" alt="CLI Dragon"
         onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='../modal/Gemini_Generated_Image_di3krpdi3krpdi3k.png';}">
    <div class="cli-banner-overlay">
      <h3>Built for the Terminal</h3>
      <p>
        Zero dependencies. Single binary. Drop <code>dragonote</code> into any CI/CD pipeline,
        cron job, or shell alias. Scan a project in one command and pipe structured context
        straight into your LLM workflow.
      </p>
    </div>
  </div>

  <!-- Downloads -->
  <div class="download-section">
    <div class="download-header">
      <h3>Download <span class="version-badge">v0.1.0 alpha</span></h3>
      <p class="section-subtitle">Desktop GUI includes the CLI. Standalone CLI available for headless / CI use.</p>
    </div>

    <div class="download-grid">
      <div class="dl-platform">
        <div class="platform-icon">&#x1FA9F;</div>
        <h4>Windows</h4>
        <div class="dl-links">
          <a href="#" class="dl-basic">Basic &mdash; Installer <span class="dl-format">.exe</span></a>
          <a href="#" class="dl-pro">Pro &mdash; Installer <span class="dl-format">.exe</span></a>
          <a href="#" class="dl-basic">Basic &mdash; MSI <span class="dl-format">.msi</span></a>
          <a href="#" class="dl-pro">Pro &mdash; MSI <span class="dl-format">.msi</span></a>
        </div>
      </div>
      <div class="dl-platform">
        <div class="platform-icon">&#x1F34E;</div>
        <h4>macOS</h4>
        <div class="dl-links">
          <a href="#" class="dl-basic">Basic &mdash; DMG <span class="dl-format">.dmg</span></a>
          <a href="#" class="dl-pro">Pro &mdash; DMG <span class="dl-format">.dmg</span></a>
        </div>
      </div>
      <div class="dl-platform">
        <div class="platform-icon">&#x1F427;</div>
        <h4>Linux</h4>
        <div class="dl-links">
          <a href="#" class="dl-basic">Basic &mdash; Debian <span class="dl-format">.deb</span></a>
          <a href="#" class="dl-pro">Pro &mdash; Debian <span class="dl-format">.deb</span></a>
          <a href="#" class="dl-basic">Basic &mdash; AppImage <span class="dl-format">.AppImage</span></a>
          <a href="#" class="dl-pro">Pro &mdash; AppImage <span class="dl-format">.AppImage</span></a>
        </div>
      </div>
    </div>

    <p class="dl-cli-note">
      Standalone CLI (no GUI):
      <a href="#">Win</a> &middot;
      <a href="#">macOS</a> &middot;
      <a href="#">Linux</a>
      &nbsp;|&nbsp;
      Pro CLI:
      <a href="#">Win</a> &middot;
      <a href="#">macOS</a> &middot;
      <a href="#">Linux</a>
    </p>
  </div>

  <!-- Comparison toggle -->
  <div class="comparison-section">
    <div class="comparison-toggle">
      <button onclick="var t=this.parentElement.nextElementSibling;if(t.style.display==='none'){t.style.display='table';this.textContent='Compare all features \u2191';}else{t.style.display='none';this.textContent='Compare all features \u2193';}">Compare all features &#8595;</button>
    </div>

    <table class="comparison-table" style="display: none;">
      <thead>
        <tr><th>Feature</th><th>Basic</th><th>Pro</th></tr>
      </thead>
      <tbody>
        <tr class="category-row"><td colspan="3">Scanning</td></tr>
        <tr><td>Single project directory scan</td><td><span class="check">&#10003;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Multi-root project scanning</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Parallel scanning (rayon)</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>.gitignore support</td><td><span class="check">&#10003;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>.dragignore support</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Auto-detect &amp; skip binary files</td><td><span class="check">&#10003;</span></td><td><span class="check-pro">&#10003;</span></td></tr>

        <tr class="category-row"><td colspan="3">Output &amp; Truncation</td></tr>
        <tr><td>File tree + code context output</td><td><span class="check">&#10003;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Token limits</td><td>200k / 100k fixed</td><td>Configurable</td></tr>
        <tr><td>Character-based truncation mode</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Exact token budget mode</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Auto-split into multiple parts</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>ZIP archive export</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>

        <tr class="category-row"><td colspan="3">Desktop GUI</td></tr>
        <tr><td>Scan &amp; export with directory picker</td><td><span class="check">&#10003;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Multi-root add/remove chips</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Granular file selection checkboxes</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>

        <tr class="category-row"><td colspan="3">Subscription &amp; Support</td></tr>
        <tr><td>Updates &amp; bug fixes</td><td><span class="check">&#10003;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Keep tool after cancelling</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Full Dragon Suite access</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
        <tr><td>Early access to betas</td><td><span class="dash">&mdash;</span></td><td><span class="check-pro">&#10003;</span></td></tr>
      </tbody>
    </table>
  </div>

  <!-- Tech Specs -->
  <div class="specs-section">
    <h3>Tech Specs</h3>
    <p class="section-subtitle">What powers Dragonote under the hood.</p>

    <div class="specs-grid">
      <div class="spec-card">
        <h4>Core Engine</h4>
        <ul>
          <li><strong>Language:</strong> Rust (100% &mdash; no GC, no runtime)</li>
          <li><strong>CLI binary:</strong> single native executable, zero dependencies</li>
          <li><strong>Scanning:</strong> walkdir + custom .gitignore parser</li>
          <li><strong>Token counting:</strong> tiktoken-rs (cl100k_base)</li>
          <li><strong>Parallel mode:</strong> rayon (Pro)</li>
          <li><strong>Archive export:</strong> zip crate (Pro)</li>
        </ul>
      </div>
      <div class="spec-card">
        <h4>Desktop GUI</h4>
        <ul>
          <li><strong>Framework:</strong> Tauri 2.0</li>
          <li><strong>Frontend:</strong> vanilla HTML / CSS / JS &mdash; no Node.js</li>
          <li><strong>Renderer:</strong> OS-native WebView</li>
          <li><strong>IPC:</strong> typed Rust commands, JSON serialization</li>
          <li><strong>Dialogs:</strong> native OS file pickers</li>
        </ul>
      </div>
      <div class="spec-card">
        <h4>Resource Footprint</h4>
        <ul>
          <li><strong>Idle RAM:</strong> ~30&ndash;50 MB</li>
          <li><strong>Installer size:</strong> ~4&ndash;8 MB</li>
          <li><strong>Startup:</strong> under 1 second</li>
          <li><strong>Background processes:</strong> none</li>
          <li><strong>Runtime deps:</strong> OS WebView only</li>
        </ul>
      </div>
      <div class="spec-card">
        <h4>Cross-Platform</h4>
        <ul>
          <li><strong>Windows:</strong> 10+ &mdash; NSIS, MSI, standalone CLI</li>
          <li><strong>macOS:</strong> 10.15+ &mdash; DMG, standalone CLI</li>
          <li><strong>Linux:</strong> .deb, .AppImage, standalone CLI</li>
          <li><strong>Architecture:</strong> x86_64 (ARM planned)</li>
          <li><strong>CI-tested:</strong> 119 unit &amp; integration tests</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Considerations: Why Tauri -->
  <div class="considerations-section">
    <div class="considerations-toggle">
      <button onclick="var el=this.parentElement.nextElementSibling;if(el.style.display==='none'){el.style.display='block';this.textContent='Why Tauri? \u2014 Collapse \u2191';}else{el.style.display='none';this.textContent='Why Tauri? \u2014 GUI technology considerations \u2193';}">Why Tauri? &#8212; GUI technology considerations &#8595;</button>
    </div>

    <div class="considerations-content" style="display: none;">
      <h4>Why not Electron?</h4>
      <p>
        Electron ships an entire Chromium browser and a Node.js runtime inside every app.
        That means a simple file-scanning utility would carry <strong>~150&ndash;300 MB</strong> of overhead.
        Tauri uses the OS WebView instead &mdash; <strong>~4&ndash;8 MB</strong> installer,
        <strong>~30&ndash;50 MB</strong> idle RAM, zero Node.js processes.
      </p>

      <h4>No Node.js &mdash; not even at build time</h4>
      <p>
        The frontend is static HTML, CSS, and vanilla JavaScript. No <code>npm install</code>,
        no <code>node_modules</code>, no webpack. The build pipeline is pure <code>cargo</code>.
      </p>

      <h4>Where pure-Rust GUIs (egui) shine instead</h4>
      <p>
        Pure-Rust frameworks are the better choice for real-time data visualization and GPU-rendered canvases.
        Dragonote&rsquo;s form-driven UI is exactly the kind of interface HTML/CSS was built for.
      </p>

      <div class="verdict-box">
        <p>
          <strong>Bottom line:</strong> Tauri gives Dragonote a polished, accessible, CSS-styled desktop
          experience with built-in installers and auto-update &mdash; at a fraction of Electron&rsquo;s
          resource cost and without requiring Node.js at build or runtime.
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="pricing-footer">
    <p>Questions? <a href="#">Get in touch</a> &middot; <a href="#">Read the docs</a></p>
  </div>

</div>
`;

window.MODAL_CONTENT['tomato-dragon'] = `
<!-- ═══════════════════════════════════════════════════
     Tomato Dragon — Modal content fragment
     Loaded by modal.js into .modal-body
     Uses --modal-* vars set by data-project="tomato-dragon"
     ═══════════════════════════════════════════════════ -->

<style>
    /* Scoped styles for Tomato Dragon modal content */
    .td-hero {
        background: linear-gradient(135deg, var(--modal-bg, #1a0f0f) 0%, var(--modal-surface, #221515) 100%);
        padding: 48px 48px 40px;
        display: flex;
        align-items: center;
        gap: 32px;
        border-radius: 16px 16px 0 0;
    }

    .td-hero-text {
        flex: 1;
        min-width: 0;
    }

    .td-hero .td-eyebrow {
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--modal-text-muted, #a08880);
        margin-bottom: 8px;
    }

    .td-hero h1 {
        font-family: 'Cormorant Garamond', serif;
        font-size: 2.6em;
        font-weight: 300;
        color: var(--modal-text, #f0e8e4);
        letter-spacing: 0.02em;
        margin-bottom: 12px;
    }

    .td-hero h1 span {
        color: var(--modal-accent, #e05d44);
    }

    .td-hero p {
        font-size: 1em;
        color: var(--modal-text-muted, #a08880);
        line-height: 1.7;
        max-width: 520px;
    }

    .td-hero-icon {
        width: 140px;
        height: 140px;
        border-radius: 20px;
        background: var(--modal-bg, #1a0f0f);
        border: 1px solid var(--modal-border, #3a2222);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
    }

    .td-hero-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 12px;
    }

    .td-cta-row {
        display: flex;
        gap: 12px;
        margin-top: 20px;
        flex-wrap: wrap;
    }

    .td-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 24px;
        border-radius: 8px;
        font-size: 0.9em;
        font-weight: 500;
        letter-spacing: 0.03em;
        text-decoration: none;
        transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        cursor: pointer;
        border: none;
    }

    .td-btn-primary {
        background: var(--modal-accent, #e05d44);
        color: #fff;
    }

    .td-btn-primary:hover {
        background: var(--modal-accent-hover, #f06b52);
    }

    .td-btn-ghost {
        background: transparent;
        border: 1px solid var(--modal-border, #3a2222);
        color: var(--modal-text-muted, #a08880);
    }

    .td-btn-ghost:hover {
        border-color: var(--modal-accent, #e05d44);
        color: var(--modal-accent, #e05d44);
    }

    /* ── Screenshot showcase ─────────────────────────── */
    .td-screenshot {
        background: var(--modal-surface, #221515);
        padding: 32px 48px;
        text-align: center;
    }

    .td-screenshot img {
        max-width: 100%;
        border-radius: 12px;
        border: 1px solid var(--modal-border, #3a2222);
    }

    .td-screenshot figcaption {
        margin-top: 12px;
        font-size: 0.85em;
        color: var(--modal-text-muted, #a08880);
        font-style: italic;
    }

    /* ── Feature highlights ──────────────────────────── */
    .td-content {
        padding: 40px 48px;
        background: var(--modal-surface, #221515);
        color: var(--modal-text, #f0e8e4);
    }

    .td-content h2 {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.8em;
        font-weight: 300;
        margin-bottom: 20px;
        color: var(--modal-accent, #e05d44);
    }

    .td-feature-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }

    .td-feature-grid article {
        background: var(--modal-bg, #1a0f0f);
        border: 1px solid var(--modal-border, #3a2222);
        border-radius: 12px;
        padding: 24px;
    }

    .td-feature-grid article h3 {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.15em;
        font-weight: 500;
        color: var(--modal-secondary, #f0a44e);
        margin-bottom: 8px;
    }

    .td-feature-grid article p {
        font-size: 0.9em;
        line-height: 1.7;
        color: var(--modal-text-muted, #a08880);
        margin: 0;
    }

    /* ── Tech stack tags ─────────────────────────────── */
    .td-tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 24px;
    }

    .td-tag {
        padding: 6px 16px;
        border: 1px solid var(--modal-border, #3a2222);
        border-radius: 20px;
        font-size: 0.8em;
        color: var(--modal-text-muted, #a08880);
        letter-spacing: 0.05em;
    }

    .td-tag.accent {
        border-color: var(--modal-accent, #e05d44);
        color: var(--modal-accent, #e05d44);
    }

    /* ── Downloads section ────────────────────────────── */
    .td-downloads {
        padding: 32px 48px;
        background: var(--modal-bg, #1a0f0f);
    }

    .td-downloads h2 {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.8em;
        font-weight: 300;
        margin-bottom: 8px;
        color: var(--modal-accent, #e05d44);
    }

    .td-downloads > p {
        font-size: 0.9em;
        color: var(--modal-text-muted, #a08880);
        margin-bottom: 16px;
    }

    .td-download-grid {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }

    .td-btn-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 24px;
        border-radius: 8px;
        font-size: 0.85em;
        font-weight: 500;
        letter-spacing: 0.03em;
        text-decoration: none;
        background: var(--modal-surface, #221515);
        border: 1px solid var(--modal-border, #3a2222);
        color: var(--modal-text-muted, #a08880);
        transition: border-color 0.2s ease, color 0.2s ease;
        cursor: pointer;
    }

    .td-btn-secondary:hover {
        border-color: var(--modal-accent, #e05d44);
        color: var(--modal-accent, #e05d44);
    }

    /* ── Footer ───────────────────────────────────────── */
    .td-footer {
        padding: 24px 48px;
        background: var(--modal-bg, #1a0f0f);
        border-top: 1px solid var(--modal-border, #3a2222);
        border-radius: 0 0 16px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .td-footer a {
        font-size: 0.85em;
        color: var(--modal-accent, #e05d44);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .td-footer a:hover {
        color: var(--modal-accent-hover, #f06b52);
    }

    .td-footer span {
        font-size: 0.8em;
        color: var(--modal-text-muted, #a08880);
    }

    /* ── Responsive ───────────────────────────────────── */
    @media (max-width: 1024px) {
        .td-hero {
            flex-direction: column;
            text-align: center;
            padding: 32px 24px;
        }
        .td-hero-icon {
            width: 100px;
            height: 100px;
        }
        .td-hero p {
            max-width: none;
        }
        .td-cta-row {
            justify-content: center;
        }
        .td-screenshot {
            padding: 24px;
        }
        .td-content {
            padding: 28px 24px;
        }
        .td-feature-grid {
            grid-template-columns: 1fr;
            gap: 16px;
        }
        .td-downloads {
            padding: 24px;
        }
        .td-footer {
            flex-direction: column;
            gap: 8px;
            padding: 20px 24px;
            text-align: center;
        }
    }
</style>

<div class="td-hero">
    <div class="td-hero-icon">
        <img src="projects/assets/tomato-dragon-mark.svg" alt="Tomato Dragon icon"
             onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='assets/tomato-dragon-mark.svg';}" />
    </div>
    <div class="td-hero-text">
        <p class="td-eyebrow">Focus App &bull; Rust + egui</p>
        <h1>Tomato <span>Dragon</span></h1>
        <p>A playful pomodoro timer with task tracking, session controls, and richer progress analytics.</p>
        <div class="td-cta-row">
            <a class="td-btn td-btn-primary" href="#td-downloads">Download</a>
            <a class="td-btn td-btn-ghost" href="https://github.com/your-org/tomato-dragon" target="_blank" rel="noreferrer">GitHub</a>
        </div>
    </div>
</div>

<figure class="td-screenshot">
    <img src="projects/assets/tomato-dragon-ui-shot.svg" alt="Tomato Dragon app interface — timer ring, dragon companion, and stats sidebar"
         onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='assets/tomato-dragon-ui-shot.svg';}" />
    <figcaption>Primary app view: timer ring, dragon companion, tomatoes, and stats sidebar.</figcaption>
</figure>

<div class="td-content">
    <h2>Highlights</h2>
    <div class="td-feature-grid">
        <article>
            <h3>Timer + Sessions</h3>
            <p>Pomodoro phases with session numbering, start/pause/reset/skip flow, and manual "Start New Session" controls.</p>
        </article>
        <article>
            <h3>Tomato Settings</h3>
            <p>Daily tomato goals and reset policies: <strong>Erry Day</strong>, <strong>Erry Sess</strong>, or <strong>Never</strong>.</p>
        </article>
        <article>
            <h3>Stats That Matter</h3>
            <p>This-week and sessions graph modes, work/break include toggles, skipped partial rounds, and recent-rounds timeline.</p>
        </article>
        <article>
            <h3>Data Controls</h3>
            <p>Backup/load/reset with confirmation plus rich report export for deeper analytics beyond the in-app cards.</p>
        </article>
    </div>

    <h2>Stack</h2>
    <div class="td-tags">
        <span class="td-tag accent">Rust</span>
        <span class="td-tag accent">egui</span>
        <span class="td-tag">Pomodoro</span>
        <span class="td-tag">Desktop App</span>
        <span class="td-tag">Cross-Platform</span>
    </div>
</div>

<div class="td-downloads" id="td-downloads">
    <h2>Downloads</h2>
    <p>Release links will appear here once builds are available.</p>
    <div class="td-download-grid">
        <a class="td-btn-secondary" href="#">macOS (.dmg)</a>
        <a class="td-btn-secondary" href="#">Windows (.exe)</a>
        <a class="td-btn-secondary" href="#">Linux (.AppImage)</a>
        <a class="td-btn-secondary" href="#">Web Demo</a>
    </div>
</div>

<div class="td-footer">
    <a href="https://github.com/your-org/tomato-dragon" target="_blank" rel="noreferrer">Repository</a>
    <span>Version 0.1 &mdash; Draft showcase</span>
</div>
`;
