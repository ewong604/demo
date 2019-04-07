const request = require('request');


var getCountry = (country) => {
    return new Promise((resolve, reject) => {
        request({
                url: `https://restcountries.eu/rest/v2/name/${country}`,
                json: true
            }, (error, response, body) => {
                if (country === '') {
                    reject('Please enter a country');
                }else if (body.status === 404) {
                    reject('country does not exist');
                } else {
                    resolve(type = {code: body[0].currencies[0].code})
                }
            }
        );
    });
};

var getCurrency = (currency_code) => {
    return new Promise((resolve, reject) => {
        request( {
                url: `https://api.exchangeratesapi.io/latest?symbols=${currency_code}&base=USD`,
                json: true
            }, (error,response,body)=> {
                if (body.error) {
                    reject('Code is invalid');
                } else {
                    resolve(type = {
                        code: body.rates,
                        rate: body.rates[currency_code]})}
            }
        );
    });
};



module.exports = {
    getCountry,
    getCurrency
};