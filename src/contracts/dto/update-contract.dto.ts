import { PartialType } from '@nestjs/swagger';
import { CreateContractDto } from './create-contract.dto';

export class UpdateContractDto {
    clientId: number   
    eventId: number
    createdAt?: Date  
}
