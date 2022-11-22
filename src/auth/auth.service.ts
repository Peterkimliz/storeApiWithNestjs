import { ForbiddenException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { SignInDto, SignUpDto } from "./dtos";
import * as argon from "argon2"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { IsEmail } from "class-validator";

@Injectable()
export class AuthService{
    constructor(private prismaService:PrismaService){}
    
 async signup(dto:SignUpDto) {
   try{
     const password=await  argon.hash(dto.password);
     console.log(password)
    const user=await this.prismaService.user.create({
        data:{
            email:dto.email,
            phone:dto.phone,
            username:dto.username,
            password:password,
        }
    });
    console.log(user)
    delete user.password;

    return user;
   }catch(error){
    if(error instanceof PrismaClientKnownRequestError){
        if(error.code==="P2002"){
            throw new ForbiddenException("Email already in use") 
        }
    }
        throw error
    
   
     
   }

}

async signIn(dto:SignInDto){
  try{
        const user=await this.prismaService.user.findUnique(
            {
                where :{
                    email:dto.email
                }
            }
        )
   if(!user) throw new ForbiddenException("Wrong credentials ") 
   var passMatch=await argon.verify(user.password,dto.password)
   if(!passMatch) throw new ForbiddenException("Wrong credentials ") 
   delete user.password

        return user

    }catch(e){
        console.log(e)
       throw e
    }

}

}