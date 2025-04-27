import { EventType } from "../entities/event.entity"
import { Location } from "../entities/event.entity"


export class UpdateEventDto {
    name: string
    type: EventType
    tartDate: string
    endDate: string
    location: Location
    amount: number
}
