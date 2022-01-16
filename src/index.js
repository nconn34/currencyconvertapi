import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeProfile } from './currency.js';
import MoneyService from './functions.js';

$(document).ready(function() {

  $('#exchange_submit').click(function(event) {
      event.preventDefault();
      const inputCurrency = $('#input_currency').val();
      const inputAmount = $('#input_amount').val();
      $('#exchange_results').html("Exchange Amount: ");
      $('#input_amount').val("");
      let promise = MoneyService.getMoney()
      promise.then(function(rateResponse) {
        let exchange1 = new ExchangeProfile(inputCurrency,inputAmount,rateResponse);
        $('#exchange_results').append(`${exchange1.exchangeResults(inputCurrency,inputAmount)} ${inputCurrency}`);
      });
    })
  });


