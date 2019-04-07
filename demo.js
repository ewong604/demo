const yargs = require('yargs');
const geocode = require('./currency.js');
const port = process.env.PORT || 8080;

const argv = yargs
    .options({
        country: {
            demand: true,
            alias: 'c',
            describe: 'Search for a country',
            string: true
        }
    })
    .help()
    .argv;

geocode.getCountry(argv.country).then((results) => {
    return geocode.getCurrency(results.code);
}).then((result) => {
    console.log(`One USD equal ${result.rate} ${Object.keys(result.code)} (the currency of ${argv.country})` )
}).catch((error) => {
    console.log('Error:', error);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});