export class ExchangeRates {
  constructor(inputCountry,inputDollar,exchangeRate) {
    this.USD = exchangeRate.conversion_rates.USD,
    this.AUD = exhcangeRate.conversion_rates.AUD,
    this.EUR = exhcangeRate.conversion_rates.EUR,
    this.JPY = exhcangeRate.conversion_rates.JPY,
    this.MXN = exhcangeRate.conversion_rates.MXN,
    this.HKD = exhcangeRate.conversion_rates.HKD,
    this.inputDollar = inputDollar,
    this.inputCountry = inputCountry,
    this.outputAmount = this.exchangeResults(this.inputCountry, this.inputDollar)
  }

exchangeResults(inputCountry,inputDollar){
  let exchange = this(inputCountry);
  let result = exchange*inputDollar;
  return result;
 }
}
