import { useState } from "react";
import Spinner from "../common/Spinner";
import { currencies } from "../../utils/currencies";

const fetchConversion = async (from, to, amount) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/convert?from=${from}&to=${to}&amount=${amount}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch conversion data");
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

function ConvertButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="clipButton font-[Nippo] w-full relative z-50 flex gap-4 items-center"
    >
      Convert
      {loading && <Spinner className="!w-4 !h-4" />}
    </button>
  );
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BDT");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult("");

    try {
      const inputAmount = Number.parseFloat(amount);
      if (isNaN(inputAmount)) {
        setResult("Please enter a valid number");
        setLoading(false);
        return;
      }

      const data = await fetchConversion(fromCurrency, toCurrency, inputAmount);
      setResult(
        `${amount} ${fromCurrency} = ${data.convertedAmount} ${toCurrency}`
      );
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="">
      <div className="shape-container_44 w-max mx-auto">
        <div className="shape-outer_44 customize-outer_44">
          <div className="shape-inner_44 customize-inner_44">
            <div className="p-[50px]">
              <form onSubmit={handleConvert}>
                <div className="max-w-md mx-auto p-6 text-white rounded-xl shadow-lg">
                  <h1 className="text-2xl font-semibold text-center mb-6">
                    Currency Converter
                  </h1>
                  <div className="grid gap-3 mb-6">
                    <div className="flex gap-3">
                      <div className="flex-1 min-w-[120px]">
                        <label
                          htmlFor="amount"
                          className="block text-sm text-gray-400 mb-1"
                        >
                          Amount
                        </label>
                        <input
                          id="amount"
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="Enter amount"
                          required
                          className="w-full px-3 py-2 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex-1 min-w-[120px]">
                        <label
                          htmlFor="fromCurrency"
                          className="block text-sm text-gray-400 mb-1"
                        >
                          From
                        </label>
                        <select
                          id="fromCurrency"
                          value={fromCurrency}
                          onChange={(e) => setFromCurrency(e.target.value)}
                          className="w-full px-3 py-2 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          {Object.keys(currencies).map((currency) => (
                            <option key={currency} value={currency}>
                              {currency} - {currencies[currency]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <label
                        htmlFor="toCurrency"
                        className="block text-sm text-gray-400 text-center mb-4"
                      >
                        To
                      </label>
                      <select
                        id="toCurrency"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full px-3 py-2 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                      >
                        {Object.keys(currencies).map((currency) => (
                          <option key={currency} value={currency}>
                            {currency} - {currencies[currency]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {result && (
                    <div
                      className="my-6 py-2 rounded text-center font-semibold border-2"
                      style={{ borderColor: "rgb(175, 255, 255)" }}
                    >
                      {result}
                    </div>
                  )}
                  {error && <p className="text-red-500 text-center">{error}</p>}
                  <ConvertButton onClick={handleConvert} loading={loading} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          className="border-bottom-left_44 pointer-events-none"
          src="./assets/images/nyxBorderBox/border-bottom-left.png"
        />
        <img
          className="border-top-right_44 pointer-events-none"
          src="./assets/images/nyxBorderBox/border-top-right.png"
        />
      </div>
    </div>
  );
}
