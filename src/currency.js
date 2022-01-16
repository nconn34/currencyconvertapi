export class ExchangeRates {
    constructor(currency,dollar,exchange) {
      this.AUD = exchange.conversion_rates.AUD,
      this.HKD = exchange.conversion_rates.HKD,
      this.EUR = exchange.conversion_rates.EUR,
      this.JPY = exchange.conversion_rates.JPY,
      this.GBP = exchange.conversion_rates.GBP,
      this.currency = currency,
      this.dollar = dollar,
      this.conversion = this.exchangeRate(this.currency,this.dollar)
    }
  
    exchangeRate(currency,dollar) { 
    let rate = this[currency];
    let result = rate*dollar;
    return result;
    }
  }


