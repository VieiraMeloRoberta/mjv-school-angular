import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
 constructor(private service:DetailsService){}

productData:any;
 ngOnInit(): void{
  this.productData = this.service.productDetails;
 }
}
