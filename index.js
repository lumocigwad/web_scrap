const scrape = require('website-scraper');

let options = {
    urls: ['https://rent.uniplaces.com/description/amenities'],
    directory: './uniplace',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});