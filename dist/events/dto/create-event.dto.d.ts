import { EventType } from "../entities/event.entity";
import { Location } from "../entities/event.entity";
export declare class CreateEventDto {
    name: string;
    type: EventType;
    startDate: string;
    endDate: string;
    location: Location;
    amount: number;
}
