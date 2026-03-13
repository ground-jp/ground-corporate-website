/**
 * デザイン設定を _data/design.yml から読み込み、サイト全体に適用
 *
 * 重要: applyToPreview()（GDE）と完全に同じ方法でスタイルを適用すること。
 * 条件分岐（if(val)）は使わず、常に適用する（0はfalsyなため条件分岐すると適用されない）。
 *
 * 仕組み:
 * 1. <head>内のインラインスクリプトがlocalStorageキャッシュからCSS変数を即座に適用
 * 2. このスクリプト（defer）がdesign.ymlを非同期fetchして最新値を上書き
 * 3. fetchした値をlocalStorageにキャッシュ
 */
(function() {
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

      // localStorageにキャッシュ
      try { localStorage.setItem('ds-cache', JSON.stringify(s)); } catch(e) {}

      var root = document.documentElement.style;

      // ── ロゴ（CSS変数 + position: applyToPreviewと完全一致）──
      root.setProperty('--ds-logo-height', (s.logo_height || 40) + 'px');
      var logo = document.querySelector('.header__logo-img');
      if (logo) {
        logo.style.position = 'relative';
        logo.style.top = (s.logo_margin_top || 0) + 'px';
        logo.style.left = (s.logo_margin_left || 0) + 'px';
      }

      // ── ヘッダー ──
      var header = document.querySelector('.header');
      if (header) {
        header.style.background = s.header_bg_color || '';
        header.style.height = (s.header_height || 64) + 'px';
      }

      // ── カラー (CSSカスタムプロパティ) ──
      if (s.primary_color) root.setProperty('--accent', s.primary_color);
      if (s.accent_color) root.setProperty('--frost-ice-blue', s.accent_color);
      if (s.text_color) root.setProperty('--black', s.text_color);

      // ── CTAボタン ──
      if (s.cta_color) {
        document.querySelectorAll('.hero__cta, .cta-btn, .recruit-banner__btn').forEach(function(el) {
          el.style.backgroundColor = s.cta_color;
        });
      }

      // ── フォントサイズ（常に適用 — applyToPreviewと一致）──
      document.querySelectorAll('.section__title, h2').forEach(function(el) {
        el.style.fontSize = (s.heading_font_size || 28) + 'px';
      });
      document.body.style.fontSize = (s.body_font_size || 15) + 'px';
      document.querySelectorAll('.nav__link, .nav__trigger').forEach(function(el) {
        el.style.fontSize = (s.nav_font_size || 14) + 'px';
      });

      // ── ヒーロー（位置含む — applyToPreviewと一致）──
      var heroTitle = document.querySelector('.hero__title');
      if (heroTitle) {
        heroTitle.style.fontSize = (s.hero_title_size || 80) + 'px';
        if (s.hero_title_top || s.hero_title_left) {
          heroTitle.style.position = 'relative';
          heroTitle.style.top = (s.hero_title_top || 0) + 'px';
          heroTitle.style.left = (s.hero_title_left || 0) + 'px';
        }
      }
      var heroSubtitle = document.querySelector('.hero__subtitle');
      if (heroSubtitle) heroSubtitle.style.fontSize = (s.hero_subtitle_size || 20) + 'px';
      var heroVignette = document.querySelector('.hero__vignette');
      if (heroVignette && s.hero_overlay_opacity !== undefined) heroVignette.style.opacity = s.hero_overlay_opacity / 100;

      // ── セクション表示/非表示 ──
      var map = { show_news: '#news', show_clients: '#clients', show_solution: '#solution', show_casestudy: '#casestudy', show_recruit: '.recruit-banner' };
      Object.keys(map).forEach(function(key) {
        var el = document.querySelector(map[key]);
        if (el) el.style.display = (s[key] === false) ? 'none' : '';
      });

      // ── フッター ──
      var footer = document.querySelector('.footer') || document.querySelector('footer');
      if (footer) {
        footer.style.backgroundColor = s.footer_bg_color || '';
        footer.style.color = s.footer_text_color || '';
      }
    })
    .catch(function() {});
})();
