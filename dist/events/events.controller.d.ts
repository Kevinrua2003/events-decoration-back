import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto): import("./entities/event.entity").Event;
    findAll(): import("./entities/event.entity").Event[];
    findOne(id: string): import("./entities/event.entity").Event | undefined;
    update(id: string, updateEventDto: UpdateEventDto): import("./entities/event.entity").Event | null;
    remove(id: string): import("./entities/event.entity").Event | null;
}
