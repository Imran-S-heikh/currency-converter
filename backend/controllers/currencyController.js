const CurrencyService = require('../services/CurrencyService');

exports.convertCurrency = async (req, res) => {
    const { from, to, amount } = req.query;
    const result = await CurrencyService.convert(from, to, amount);
    return res.status(200).json(result)
};
