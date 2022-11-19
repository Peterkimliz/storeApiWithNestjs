import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dtos";

@Controller("auth")
export class AuthController{

    constructor(private authService:AuthService){}
 
    @Post("signup")
    signUp(@Body()  dto:SignUpDto){
        
        return this.authService.signup(dto)
    }

    @Post("signin")
    signIn(){
        return this.authService.signIn()
    }
}

