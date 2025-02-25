import { Body, Controller,  Post } from '@nestjs/common';
import { RegisterUser } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('/api/v1/auth')
export class AuthController {

    constructor( private readonly authService:AuthService){}
    @Post('register')
   async registerUser(@Body() obj:RegisterUser){
    const res_obj = await this.authService.registerUser(obj)
        return res_obj;
    }
}
