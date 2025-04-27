import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
export declare class EventsService {
    create(createEventDto: CreateEventDto): Event;
    findAll(): Event[];
    findOne(id: number): Event | undefined;
    update(id: number, updateEventDto: UpdateEventDto): Event | null;
    remove(id: number): Event | null;
}
