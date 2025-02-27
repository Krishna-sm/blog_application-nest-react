import { Controller, Get } from '@nestjs/common';
import { QouteService } from './qoute.service';

@Controller('/api/v1/qoute')
export class QouteController {
    constructor(private readonly quoteSerivce:QouteService){
        
    }

    @Get("/random")
    getRandomQoute(){
        return this.quoteSerivce.getRandomQoute();
    }
}
