import { Injectable } from '@nestjs/common';
import {qoutes} from 'src/api/code'
@Injectable()
export class QouteService {

    async getRandomQoute(){
        const length = qoutes.length;
        const randomIndex = Math.floor(Math.random() * length);
        return qoutes[randomIndex];

    }

}
