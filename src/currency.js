export class ExchangeProfile {
    constructor(inputCurrency,inputAmount,exchangeRateObject) {
      this.USD = exchangeRateObject.conversion_rates.USD,
      this.EUR = exchangeRateObject.conversion_rates.EUR,
      this.CHF = exchangeRateObject.conversion_rates.CHF,
      this.JPY = exchangeRateObject.conversion_rates.JPY,
      this.GBP = exchangeRateObject.conversion_rates.GBP,
      this.AUD = exchangeRateObject.conversion_rates.AUD,
      this.inputCurrency = inputCurrency,
      this.inputAmount = inputAmount,
      this.outputAmount = this.exchangeResults(this.inputCurrency,this.inputAmount)
    }
  
    exchangeResults(inputCurrency,inputAmount) { 
    let exchangeValue = this[inputCurrency];
    let result = exchangeValue*inputAmount;
    return result;
    }
  }
