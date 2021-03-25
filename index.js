const puppeteer = require('puppeteer');
const user = require("./user.json");
const axios = require('axios');

const CronJob = require('cron').CronJob

const entrada = new CronJob('44 10 * * *', () => {

    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('http://portaldoconsultor.altran.com.br/login');
        await page.waitFor('input[name="user_session[email]"]');
        await page.type('input[name="user_session[email]"]', user.login, {delay: 100});
        await page.type('input[name="user_session[password]"]', user.password, {delay: 100});
        await page.keyboard.press('Enter', {delay: 200});
        await page.click({delay: 200}, "button_end_period_one")

        //await browser.close({delay: 500})

    })();
},null, true, 'America/Sao_Paulo')

const saidaalmoco = new CronJob('57 12 * * *', () => {

    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('http://portaldoconsultor.altran.com.br/login');
        await page.waitFor('input[name="user_session[email]"]');
        await page.type('input[name="user_session[email]"]', user.login, {delay: 100});
        await page.type('input[name="user_session[password]"]', user.password, {delay: 100});
        await page.keyboard.press('Enter', {delay: 200});

        //await browser.close({delay: 500})

    })();  
},null, true, 'America/Sao_Paulo')

const voltaalmoco = new CronJob('58 12 * * *', () => {

    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('http://portaldoconsultor.altran.com.br/login');
        await page.waitFor('input[name="user_session[email]"]');
        await page.type('input[name="user_session[email]"]', user.login, {delay: 100});
        await page.type('input[name="user_session[password]"]', user.password, {delay: 100});
        await page.keyboard.press('Enter', {delay: 200});

        //await browser.close({delay: 500})

    })();  
},null, true, 'America/Sao_Paulo')

const finaldia = new CronJob('59 12 * * *', () => {

    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('http://portaldoconsultor.altran.com.br/login');
        await page.waitFor('input[name="user_session[email]"]');
        await page.type('input[name="user_session[email]"]', user.login, {delay: 100});
        await page.type('input[name="user_session[password]"]', user.password, {delay: 100});
        await page.keyboard.press('Enter', {delay: 200});

        //await browser.close({delay: 500})

    })();  
},null, true, 'America/Sao_Paulo')

