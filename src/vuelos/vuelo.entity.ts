import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vuelo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;
    
    @Column()
    origen: string;
    
    @Column()
    destino: string;

    @Column()
    tipo: string;

    @Column()
    departure: string;

    @Column()
    landing: string;

    @Column()
    duracion: string;

    @Column()
    precio: string;

    @AfterInsert()
    logInsert(){
        console.log('Inserted Vuelo with id:', this.id)
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated Vuelo with id:', this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed Vuelo with id:', this.id)
    }

}
