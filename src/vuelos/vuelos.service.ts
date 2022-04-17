import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vuelo } from './vuelo.entity';
import { CreateVueloDto } from './dtos/create-vuelo.dto';


@Injectable()
export class VuelosService {
    constructor(@InjectRepository(Vuelo) private repo: Repository<Vuelo>) {}
    
    createVuelo(dto: CreateVueloDto){
        const vuelo = this.repo.create({...dto});
        return this.repo.save(vuelo);
    }

    findVuelo(id: number){
        return this.repo.findOne({
            where: {
                id: id,
            },
        });
    }

    findAllVuelos(){
        return this.repo.find()
    }
}
