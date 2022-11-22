import { IsNotEmpty } from "class-validator"

export class ProductDto{
  @IsNotEmpty()
  name :string 
  @IsNotEmpty()
  description :string
  @IsNotEmpty()
  price :number
  @IsNotEmpty()
  quantity: number
  @IsNotEmpty()
  image :string 

}