export function install(hook) {
  const faRegExp = /:mi[\w -|]+:/gm;

  hook.beforeEach(content => {
    let miHtmlRendered = content.replace(faRegExp, function (m, code) {
      const sections = m.replace(/:/gi, '').replace(/mi/gi, '').split('|');
      return `<i class="material-icons${sections[0]}">${sections[1]}</i>`;
    });
    return miHtmlRendered;
  });
  hook.afterEach(function (html, next) {
    let miHtmlRendered = html.replace(faRegExp, function (m, code) {
      const sections = m.replace(/:/gi, '').replace(/mi/gi, '').split('|');
      return `<i class="material-icons${sections[0]}">${sections[1]}</i>`;
    });
    //console.log('miHtmlRendered: '+miHtmlRendered);
    next(miHtmlRendered);
  });
}
