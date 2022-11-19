import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { SignUpDto } from "./dtos";
import * as argon from "argon2"

@Injectable()
export class AuthService{
    constructor(private prismaService:PrismaService){}
    
 async signup(dto:SignUpDto) {
    console.log(dto)
    const password=await  argon.hash(dto.password);
    const user=await this.prismaService.user.create({
        data:{
            email:dto.email,
            phone:dto.phone,
            username:dto.username,
            password:password,
        }
    });
    delete user.password;

    return user;
}

signIn(){
    return {message:"user signed in"}
}

}