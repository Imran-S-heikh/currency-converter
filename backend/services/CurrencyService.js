const fetch = require('node-fetch');
const config = require('../config/key');
const { ValidationError, InternalServerError } = require('../utils/errors');
const currencies = require('../../shared/currencies');

exports.convert = async (from, to, amount) => {

    if (!from || !to || !amount || isNaN(amount)) {
        throw new ValidationError("Invalid request. Please provide 'from', 'to', and a numeric 'amount'.")
    }
    if (!currencies.hasOwnProperty(from)) {
        throw new ValidationError("Invalid request. Please provide correct `from` Symbol")
    }

    if (!currencies.hasOwnProperty(to)) {
        throw new ValidationError("Invalid request. Please provide correct `to` Symbol")
    }

    const apiUrl = new URL('https://api.exchangerate.host/convert');
    apiUrl.search = new URLSearchParams({ from, to, amount, access_key: config.EXCHANGE_RATE_API_KEY });

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.success) {
        throw new InternalServerError("Failed to fetch exchange rate. Please try again later.")
    }

    return {
        from,
        to,
        originalAmount: parseFloat(amount),
        convertedAmount: data.result,
    }
}