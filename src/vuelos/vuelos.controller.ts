import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateVueloDto } from './dtos/create-vuelo.dto';
import { VuelosService } from './vuelos.service';

@Controller('vuelos')
export class VuelosController {

    constructor(private vuelosService: VuelosService){}

    @Post()
    createVuelo(@Body() dto: CreateVueloDto){
        return this.vuelosService.createVuelo(dto)
    }

    @Get('/:id')
    findFligth(@Param('id') id: string){
        return this.vuelosService.findVuelo(parseInt(id));
    }

    @Get()
    AllVuelos(){
        return this.vuelosService.findAllVuelos();
    }
}
