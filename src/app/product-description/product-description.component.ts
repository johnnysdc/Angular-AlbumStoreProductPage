import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAlbum(1).subscribe( response => this.albumInfo = response);
  }

}
