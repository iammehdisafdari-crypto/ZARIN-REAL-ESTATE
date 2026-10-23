import fs from 'fs';
import { JSDOM } from 'jsdom';

// Read canonical templates
const enHtml = fs.readFileSync('index.html', 'utf8');
const enDom = new JSDOM(enHtml);
const enHeader = enDom.window.document.querySelector('#site-header').outerHTML;
const enMobileMenu = enDom.window.document.querySelector('#mobile-menu').outerHTML;

const faHtml = fs.readFileSync('fa/index.html', 'utf8');
const faDom = new JSDOM(faHtml);
const faHeader = faDom.window.document.querySelector('#site-header').outerHTML;
const faMobileMenu = faDom.window.document.querySelector('#mobile-menu').outerHTML;

console.log('EN Header length:', enHeader.length);
console.log('EN Mobile Menu length:', enMobileMenu.length);
console.log('FA Header length:', faHeader.length);
console.log('FA Mobile Menu length:', faMobileMenu.length);
