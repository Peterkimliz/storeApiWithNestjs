import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductDto } from "./dtos/products.dto";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController{
    constructor(private readonly productService:ProductService){ }

    @Post("create")
    createProduct(@Body() dto:ProductDto){
     return this.productService.createProduct(dto)

    }


}