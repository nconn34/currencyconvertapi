Currency Converter

Author: Nathan Conn

This is a webpage where a user can determine how much money their US dollar would exchange for before traveling!

## Technologies Used

* HTML
* CSS
* jQuery-3.6.0
* Node.js
* webpack
* Lint
* Babel
* ExchangeRate-API

## Description

Users will be prompted to first select which country of interest they have for converting their currency to and then will be able to see a display for how their US dollar will convert to the given country's currency. A crucial step for planning any travel abroad!

## Setup/Installation Requirements

* Any browser, with a preference for Chrome

* While filling out the form, be sure to accurately describe your age

* If you are going to clone this, follow the instructions below:

**Instructions for Cloning:

* In the command line enter:

$ git clone https://github.com/nconn34/currencyconvertapi

* Then enter:

$ npm install

$ npm run build

$ npm start will run the dev server

**Instructions for getting API key

* Go to exchangerate-api.com to sign up for a free profile and free API key
* You will be prompted to enter your email address, first name, and a password. Then, click "Get Started!"
* Once you have a key, put it in the .env file with "API_KEY = {YOUR_KEY_HERE}" so that way your key will stay protected when pushing to your repository. It will also only work in the fetch statement as it is looking for the key in the .env file.
* Be advised- the free key is rate limited!


* Use this link to see the webpage in its current state: https://nconn34.github.io/currencyconvertapi/


## Known Bugs

* No known bugs, however I again did not make this page as functional as I would like to, nor as pretty. I tried many different ways to display the currency by specifying, and I tried attaching the call to individual buttons at first with the different countries, which worked but was a real mess and eventually got too confusing, so I scrapped it in favor of building a class, which only occurred to me last minute (as always) so this version is much more boiled down than I will attempt to make it at a later date.

## License

If you have any questions please use the contact information provided on the website.

Copyright (c) 1/16/2022 Nathan Conn
