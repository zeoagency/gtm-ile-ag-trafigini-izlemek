//----------------------------------------------//
const Nightmare = require('nightmare');
let nm = Nightmare({
  openDevTools: {
    detach: false
  },
  webSecurity: false,
  show: true,
  alwaysOnTop: false
});
//----------------------------------------------//
!async function(targetURL) {
  return await nm
  .goto(targetURL)
  .inject('js', 'container.js')
}(SAYFA_ADRESI);
