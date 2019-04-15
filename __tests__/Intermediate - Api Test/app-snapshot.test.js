import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';

expect.extend({ toMatchImageSnapshot });

test('Application Snapshot', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://nordictestingdays.eu/schedule');
  const image = await page.screenshot({ clip: { x: 0, y:0, width: 1024, height: 2000 } });
  expect(image).toMatchImageSnapshot({
    failureThreshold: '0.1',
    failureThresholdType: 'percent'
  });
  await browser.close();
}, 20000);
