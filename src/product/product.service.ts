import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ProductDto } from "./dtos/products.dto";

@Injectable()
export class ProductService{
 constructor(private readonly prismaClient:PrismaClient){}

   async createProduct(dto: ProductDto) {
      try{
       var response= await this.prismaClient.product.create({
        data:{
            name:dto.name,
            description:dto.description,
            quantity:dto.quantity,
            price:dto.price,
            image:dto.image
        }
       })
 return response

      }catch(e){
        throw e
      }

     
    }

   async getProductById(id:number){
    try{
        var response=await this.prismaClient.product.findUnique({
            where:{
                id:id
            }
        })

    }catch(e){

    }

   }




}