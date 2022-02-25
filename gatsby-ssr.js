/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react')

const storageScript = `
(function() {
  try {
      const theme = localStorage.getItem('theme');
      if (!theme) {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initTheme = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', initTheme);
        document.body.className = initTheme;
        return;
      }
      document.body.className = theme;
    } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<script key="theme" dangerouslySetInnerHTML={{ __html: storageScript }} />])
}
