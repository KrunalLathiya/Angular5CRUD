import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Coin';
  angForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  addCoin(name, price) {
      this.coinservice.addCoin(name, price);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
