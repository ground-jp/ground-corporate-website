/**
 * デザイン設定を _data/design.yml から読み込み、サイト全体に適用
 * CMS / ビジュアルエディターで変更した値が全ページに自動反映される
 *
 * 優先順位:
 *   1. editor-saved-styles (GDEで個別要素を編集した場合) — 最優先
 *   2. design.yml の値 — GDE編集されていない要素に適用
 */
(function() {
  // editor-saved-styles が存在する場合、その中で定義されたセレクタを収集
  // これらの要素は design.yml の値で上書きしない
  var editorRules = {};
  var savedStyle = document.getElementById('editor-saved-styles');
  if (savedStyle && savedStyle.textContent.trim()) {
    // data-de-id セレクタを抽出して記録
    var matches = savedStyle.textContent.match(/\[data-de-id="[^"]+"\]/g);
    if (matches) {
      matches.forEach(function(sel) {
        var id = sel.match(/"([^"]+)"/);
        if (id) editorRules[id[1]] = true;
      });
    }
  }

  // GDEで個別編集済み(data-de-id付き)、またはeditor-saved-stylesに
  // ルールがある要素はスキップ
  function canApply(el) {
    if (!el) return false;
    if (el.hasAttribute('data-de-id')) return false;
    return true;
  }

  fetch('/_data/design.yml')
    .then(function(res) { return res.text(); })
    .then(function(text) {
      var s = {};
      text.split('\n').forEach(function(line) {
        line = line.trim();
        if (!line || line.charAt(0) === '#') return;
        var idx = line.indexOf(':');
        if (idx === -1) return;
        var key = line.substring(0, idx).trim();
        var val = line.substring(idx + 1).trim();
        if (val === 'true') val = true;
        else if (val === 'false') val = false;
        else if (val.charAt(0) === '"' && val.charAt(val.length - 1) === '"') val = val.slice(1, -1);
        else if (!isNaN(val) && val !== '') val = Number(val);
        s[key] = val;
      });

      // ── ロゴ ──
      var logo = document.querySelector('.header__logo-img');
      if (canApply(logo)) {
        if (s.logo_height) { logo.style.height = s.logo_height + 'px'; logo.style.width = 'auto'; }
        if (s.logo_margin_top !== undefined) { logo.style.position = 'relative'; logo.style.top = s.logo_margin_top + 'px'; }
        if (s.logo_margin_left !== undefined) { logo.style.position = 'relative'; logo.style.left = s.logo_margin_left + 'px'; }
      }

      // ── ヘッダー ──
      var header = document.querySelector('.header');
      if (canApply(header)) {
        if (s.header_bg_color) header.style.background = s.header_bg_color;
        if (s.header_height) header.style.height = s.header_height + 'px';
      }

      // ── カラー (CSSカスタムプロパティ) ──
      var root = document.documentElement;
      if (s.primary_color) root.style.setProperty('--accent', s.primary_color);
      if (s.accent_color) root.style.setProperty('--frost-ice-blue', s.accent_color);
      if (s.text_color) root.style.setProperty('--black', s.text_color);

      // ── CTAボタン ──
      if (s.cta_color) {
        document.querySelectorAll('.hero__cta, .cta-btn, .recruit-banner__btn').forEach(function(el) {
          if (canApply(el)) el.style.backgroundColor = s.cta_color;
        });
      }

      // ── フォントサイズ ──
      if (s.heading_font_size) {
        document.querySelectorAll('.section__title, h2').forEach(function(el) {
          if (canApply(el)) el.style.fontSize = s.heading_font_size + 'px';
        });
      }
      if (s.body_font_size && canApply(document.body)) document.body.style.fontSize = s.body_font_size + 'px';
      if (s.nav_font_size) {
        document.querySelectorAll('.nav__link, .nav__trigger').forEach(function(el) {
          if (canApply(el)) el.style.fontSize = s.nav_font_size + 'px';
        });
      }

      // ── ヒーロー ──
      var heroTitle = document.querySelector('.hero__title');
      if (canApply(heroTitle)) {
        if (s.hero_title_size) heroTitle.style.fontSize = s.hero_title_size + 'px';
        if (s.hero_title_top !== undefined) { heroTitle.style.position = 'relative'; heroTitle.style.top = s.hero_title_top + 'px'; }
        if (s.hero_title_left !== undefined) { heroTitle.style.position = 'relative'; heroTitle.style.left = s.hero_title_left + 'px'; }
      }
      var heroSubtitle = document.querySelector('.hero__subtitle');
      if (canApply(heroSubtitle) && s.hero_subtitle_size) heroSubtitle.style.fontSize = s.hero_subtitle_size + 'px';
      var heroVignette = document.querySelector('.hero__vignette');
      if (canApply(heroVignette) && s.hero_overlay_opacity !== undefined) heroVignette.style.opacity = s.hero_overlay_opacity / 100;

      // ── セクション表示/非表示 (ホームページのみ) ──
      var map = { show_news: '#news', show_clients: '#clients', show_solution: '#solution', show_casestudy: '#casestudy', show_recruit: '.recruit-banner' };
      Object.keys(map).forEach(function(key) {
        if (s[key] === false) {
          var el = document.querySelector(map[key]);
          if (el) el.style.display = 'none';
        }
      });

      // ── フッター ──
      var footer = document.querySelector('.footer') || document.querySelector('footer');
      if (canApply(footer)) {
        if (s.footer_bg_color) footer.style.backgroundColor = s.footer_bg_color;
        if (s.footer_text_color) footer.style.color = s.footer_text_color;
      }
    })
    .catch(function() {});
})();
