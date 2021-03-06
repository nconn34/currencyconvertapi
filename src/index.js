import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeRates } from './currency.js';
import MoneyService from './moneyservice.js';


$(document).ready(function() {
  $('#submit').click(function(event) {
      event.preventDefault();
      const currency = $('#currency').val();
      const dollar = $('#dollar').val();
      // $('#exchange').html("Exchange Amount: ");
      $('#dollar').val("");
      let promise = MoneyService.getMoney()
      promise.then(function(response) {
        if (response.conversion_rates[currency]) {
        let exchange = new ExchangeRates(currency,dollar,response);
        $('#exchange').text(`Exchange Amount: ${exchange.exchangeRate(currency,dollar)} ${currency}`);
        } else {
        $('#showErrors').text(`That country does not exist!`)
        }
      }) .catch(function(error) { 
        $('#showErrors').text(`There was an error: ${error} `)
      });
      })
    })
