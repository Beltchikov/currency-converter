import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(private exchangeRatesService: ExchangeRatesService) {

  }

  amount = 1;
  from = "CAD";
  to = "USD";
  rates: {[key: string]:number};

  loadRates()
  {
    this.exchangeRatesService.getRates(this.from).subscribe(r => this.rates = r.rates);
  }

  getAllCurrencies():string[]
  {
    return Object.keys(this.rates);
  }

  convert(): number
  {
    return this.amount * this.rates[this.to];
  }

  ngOnInit(): void {
    this.loadRates();
  }

}
