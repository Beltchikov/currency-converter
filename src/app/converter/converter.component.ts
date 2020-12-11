import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(private exchangeRatesService: ExchangeRatesService) {
    this.exchangeRatesService.getRates(this.to).subscribe(r => console.log(r));
  }

  amount = 1;
  from = "CAD";
  to = "USD";
  rate= 0.87;

  convert(): number
  {
    return this.amount * this.rate;
  }

  ngOnInit(): void {
  }

}
