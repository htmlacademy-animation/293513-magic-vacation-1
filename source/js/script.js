// modules
import pageLoaded from './modules/page-loaded';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import rules from './modules/rules';
import animateText from './modules/animateText';
import FullPageScroll from './modules/full-page-scroll';

// init modules
pageLoaded();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
rules();
animateText();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
