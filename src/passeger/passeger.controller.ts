import { Controller } from '@nestjs/common';
import { PassegerService } from './passeger.service';
import { PassengerDTO } from './dto/passenger.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerMSG } from 'src/common/constants';


@Controller()
export class PassegerController {
    constructor(private readonly passegerService : PassegerService){}

    @MessagePattern(PassengerMSG.CREATE)
    create(@Payload() passengerDTO: PassengerDTO){
        return this.passegerService.create(passengerDTO);
    }

    @MessagePattern(PassengerMSG.FIND_ALL)
    findAll(){
        return this.passegerService.findAll();
    }

    @MessagePattern(PassengerMSG.FIND_ONE)
    findOne(@Payload() id :string){
        return this.passegerService.findOne(id);
    }
    @MessagePattern(PassengerMSG.UPDATE)
    update(@Payload() payload : any){
        return this.passegerService.update(payload.id, payload.passengerDTO);
    }

    @MessagePattern(PassengerMSG.DELETE)
    delete(@Payload() id :string){
        return this.passegerService.delete(id);
    }
}
