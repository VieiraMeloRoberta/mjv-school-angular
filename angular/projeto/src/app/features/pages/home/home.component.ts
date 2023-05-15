import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private service: DetailsService) {}

  dataHoje = new Date();

  productData: any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }
}
