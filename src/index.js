import { install } from './plugin-material-icons';

// if (!window.$docsify) {
//   window.$docsify = {}
// }
window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(install);
