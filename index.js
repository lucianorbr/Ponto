const puppeteer = require('puppeteer');
const CronJob = require('cron').CronJob
const job = new CronJob('* * * * *', () => {


    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('http://portaldoconsultor.altran.com.br/login');
        await page.waitFor('input[name="user_session[email]"]');
        await page.type('input[name="user_session[email]"]', 'login', {delay: 100});
        await page.type('input[name="user_session[password]"]', 'senha', {delay: 100});
        await page.keyboard.press('Enter', {delay: 200});

        await browser.close()

    })();
},null, true, 'America/Sao_Paulo')
