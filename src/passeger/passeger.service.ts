import { Injectable, HttpStatus } from '@nestjs/common';
import { PASSENGER } from '../common/models/models';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PassengerDTO } from './dto/passenger.dto';
import { IPassenger } from 'src/common/interfaces/passenger.interface';


@Injectable()
export class PassegerService {
    constructor(@InjectModel(PASSENGER.name) private readonly model:Model<IPassenger>){}

    async create(passengerDTO:PassengerDTO):Promise<IPassenger>{
        const newPassenger = new this.model(passengerDTO)
        return await newPassenger.save();
    }

/*     async findAll():Promise<IUser[]>{
        return await this.model.find();
    } */

    async findAll():Promise<IPassenger[]>{
        return await this.model.find();
    }

    async findAllPassengers():Promise<IPassenger[]>{
        return await this.model.find();
    }

    async findOne(id:string):Promise<IPassenger>{
        const passenger = await this.model.findById(id);
        console.log(passenger)
        return await passenger;
    }
    async update(id:string, PassengerDTO: PassengerDTO):Promise<IPassenger>{
//comment
        const passenger = {
            ...PassengerDTO,

        }
        return await this.model.findByIdAndUpdate(id, passenger, { new : true});
    }
    async delete(id:string){
         await this.model.findByIdAndDelete(id);
         return {status : HttpStatus.OK, msg :'Deleted'}
    }
}
