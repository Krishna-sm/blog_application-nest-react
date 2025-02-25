import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUser } from 'src/dto/auth.dto';
import { User } from 'src/models/User.model';

@Injectable()
export class AuthService {

    constructor( @InjectModel(User.name) private userModel: Model<User>){}

   async registerUser(data:RegisterUser){
    const check_exist = await this.userModel.findOne({email:data.email.toLowerCase()})
    if(check_exist){
        throw new BadRequestException("User Already Exist")
    }
    

      const user=  await this.userModel.create(data);

        return {
            msg:"Register Success",
            user
        }
    }

}
