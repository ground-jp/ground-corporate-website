/**
 * デザイン設定を _data/design.yml から読み込み、CSSカスタムプロパティとして適用
 * CMS で変更した値がサイトに即反映される
 */
(function() {
  fetch('/_data/design.yml')
    .then(function(res) { return res.text(); })
    .then(function(text) {
      // 簡易YAMLパーサー（キー: 値 のみ対応）
      var settings = {};
      text.split('\n').forEach(function(line) {
        line = line.trim();
        if (!line || line.charAt(0) === '#') return;
        var idx = line.indexOf(':');
        if (idx === -1) return;
        var key = line.substring(0, idx).trim();
        var val = line.substring(idx + 1).trim();
        // 数値変換
        if (!isNaN(val) && val !== '') val = Number(val);
        settings[key] = val;
      });

      // ロゴスタイル適用
      var logoImg = document.querySelector('.header__logo-img');
      if (logoImg && settings.logo_height) {
        logoImg.style.height = settings.logo_height + 'px';
        logoImg.style.width = 'auto';
      }
      if (logoImg && settings.logo_margin_top) {
        logoImg.style.marginTop = settings.logo_margin_top + 'px';
      }
      if (logoImg && settings.logo_margin_left) {
        logoImg.style.marginLeft = settings.logo_margin_left + 'px';
      }
    })
    .catch(function() {
      // 設定ファイルが読めない場合はデフォルトのまま
    });
})();
