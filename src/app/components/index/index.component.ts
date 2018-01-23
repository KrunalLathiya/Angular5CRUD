import { CoinService } from './../../coin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Coin } from '../../Coin';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  coins: any;

  constructor(private http: HttpClient, private service: CoinService) {}

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this.service.getCoins().subscribe(res => {
      this.coins = res;
    });
  }

  deleteCoin(id) {
    this.service.deleteCoin(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
