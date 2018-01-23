import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from './../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coin: any;
  angForm: FormGroup;
  title = 'Edit Coin';
  constructor(private route: ActivatedRoute, private router: Router, private service: CoinService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  updateCoin(name, price) {
    this.route.params.subscribe(params => {
    this.service.updateCoin(name, price, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service.editCoin(params['id']).subscribe(res => {
        this.coin = res;
      });
    });
  }
}
