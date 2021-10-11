export interface IQuerystring {
  username: string;
  password: string;
}

export interface IHeaders {
  "h-Custom": string;
}

export interface Currency {
  name: string;
  symbol: string;
  rate: number;
}
export interface CurrencyFromBase {
  base: Currency;
  currencies: Currency[];
}
