import fs from 'fs';
import { JSDOM } from 'jsdom';
import { initNavigation } from '../scripts/nav.js';

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only' });
const doc = dom.window.document;

import { initMobileNav, initDesktopNav, initFaqAccordion, initGlobalLanguageState } from '../scripts/nav.js';

try { initMobileNav(doc); console.log('initMobileNav ok'); } catch(e) { console.error('initMobileNav failed', e); }
try { initDesktopNav(doc); console.log('initDesktopNav ok'); } catch(e) { console.error('initDesktopNav failed', e); }
try { initFaqAccordion(doc); console.log('initFaqAccordion ok'); } catch(e) { console.error('initFaqAccordion failed', e); }
try { initGlobalLanguageState(doc); console.log('initGlobalLanguageState ok'); } catch(e) { console.error('initGlobalLanguageState failed:', e.stack || e.message || e); }

const trigger = doc.querySelector('.mega-menu-trigger[class*="group/prop"]');
const toggle = doc.getElementById('properties-nav-toggle');

console.log('Initial is-open:', trigger.classList.contains('is-open'), 'aria-expanded:', toggle.getAttribute('aria-expanded'));

toggle.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));

console.log('After 1st click is-open:', trigger.classList.contains('is-open'), 'aria-expanded:', toggle.getAttribute('aria-expanded'));

toggle.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));

console.log('After 2nd click is-open:', trigger.classList.contains('is-open'), 'aria-expanded:', toggle.getAttribute('aria-expanded'));
