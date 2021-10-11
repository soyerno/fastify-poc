import { pgClient } from "../clients/pgClient";
import { Currency, CurrencyFromBase } from "../types";

function getRandom(floor: number, ceiling: number) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function upsertCurrencies() {}

function getCurrencies() {
  return pgClient.query("SELECT * FROM currencies", (err: any, res: any) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  });
}

function getCurrenciesFromBase(baseName: string): CurrencyFromBase {
  if (!baseName) throw new Error("baseName is required");

  const currencies: Currency[] = [
    {
      name: "USD",
      symbol: "$",
      rate: getRandom(0.1, 100),
    },
    {
      name: "EUR",
      symbol: "€",
      rate: getRandom(0.1, 100),
    },
    {
      name: "GBP",
      symbol: "£",
      rate: getRandom(0.1, 100),
    },
    {
      name: "CAD",
      symbol: "$",
      rate: getRandom(0.1, 100),
    },
    {
      name: "AUD",
      symbol: "$",
      rate: getRandom(0.1, 100),
    },
    {
      name: "JPY",
      symbol: "¥",
      rate: getRandom(0.1, 100),
    },
    {
      name: "CNY",
      symbol: "¥",
      rate: getRandom(0.1, 100),
    },
    {
      name: "INR",
      symbol: "₹",
      rate: getRandom(0.1, 100),
    },
    {
      name: "RUB",
      symbol: "₽",
      rate: getRandom(0.1, 100),
    },
    {
      name: "BRL",
      symbol: "R$",
      rate: getRandom(0.1, 100),
    },
    {
      name: "PLN",
      symbol: "zł",
      rate: getRandom(0.1, 100),
    },
    {
      name: "SEK",
      symbol: "kr",
      rate: getRandom(0.1, 100),
    },
    {
      name: "CHF",
      symbol: "CHF",
      rate: getRandom(0.1, 100),
    },
    {
      name: "NOK",
      symbol: "kr",
      rate: getRandom(0.1, 100),
    },
    {
      name: "TRY",
      symbol: "₺",
      rate: getRandom(0.1, 100),
    },
    {
      name: "NZD",
      symbol: "$",
      rate: getRandom(0.1, 100),
    },
    {
      name: "MXN",
      symbol: "$",
      rate: getRandom(0.1, 100),
    },
    {
      name: "SGD",
      symbol: "$",
      rate: getRandom(0.1, 100),
    },
    {
      name: "HKD",
      symbol: "$",
      rate: getRandom(0.1, 100),
    },
    {
      name: "MYR",
      symbol: "RM",
      rate: getRandom(0.1, 100),
    },
    {
      name: "PHP",
      symbol: "₱",
      rate: getRandom(0.1, 100),
    },
    {
      name: "IDR",
      symbol: "Rp",
      rate: getRandom(0.1, 100),
    },
    {
      name: "KRW",
      symbol: "₩",
      rate: getRandom(0.1, 100),
    },
  ];

  return {
    base: currencies.find((c) => c.name === baseName) || {
      name: baseName,
      symbol: "",
      rate: 1,
    },
    currencies: currencies.filter((c) => c.name !== baseName),
  };
}

export function convertCurrency(fromCurrency: string, amount: number) {
  return getCurrenciesFromBase(fromCurrency);
  // const fromCurrencyIndex = stack.findIndex(
  //   (currency) => currency.name === fromCurrency
  // );
  // const toCurrencyIndex = stack.currencies.findIndex(
  //   (currency) => currency.name === toCurrency
  // );

  // return (
  //   (amount * stack.currencies[toCurrencyIndex].rate) /
  //   stack.currencies[toCurrencyIndex].rate
  // );
}
