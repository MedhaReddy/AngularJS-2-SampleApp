import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    //commented selector since we are no longer nesting it, we are routing now
    //selector: 'pm-products', 
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
   // templateUrl: 'app/products/product-list.component.html',
   // styleUrls: ['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List !';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    // private _productService; '_' to denote its a private variable
    // constructor(productService: ProductService){
    //     _productService = productService;
    // }    All this is done in single step as below
    // injecting ProductService as a dependency

    constructor(private _productService: ProductService){

    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                       error => this.errorMessage = <any>error);
    }
    
    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List:' + message;
    }
}
