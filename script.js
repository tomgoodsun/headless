const fs = require('fs');
const assert = require('assert');
const puppeteer = require('puppeteer');

// https://qiita.com/tomi_linka/items/a68cf7840c3da002c6e0
(async() => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/Quramy');
  await page.screenshot({path: 'example.png'});

  browser.close();
  assert(fs.existsSync('example.png'));
  console.log('aaaaaaa');
})();
