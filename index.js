// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
    console.log('Running tests..')
    try {
        const page = await browser.newPage()
        await page.goto('https://www.istudio.store/iphone-14-pro.html')
        await page.waitForTimeout(5000)
        //   await page.screenshot({ path: 'testresult.png', fullPage: true })
        await browser.close()
        console.log(`All done, check the screenshot. ✨`)
    } catch (error) {
        console.log(`error ✨`, error)
    }
})