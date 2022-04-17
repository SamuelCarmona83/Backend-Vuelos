import { IsString } from 'class-validator';


export class CreateVueloDto{

    @IsString()
    codigo: string;

    @IsString()
    origen: string;

    @IsString()
    destino: string;

    @IsString()
    tipo: string;

    @IsString()
    departure: string;

    @IsString()
    landing: string;
    
    @IsString()
    duracion: string;

    @IsString()
    precio: string;
}