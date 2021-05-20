/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

require('./src/dist/css/main.min.css')

export const onPreRouteUpdate = () => {
  setTimeout(() => {
      document.getElementById("preloader").style.display = "none"
  }, 2500)
}
