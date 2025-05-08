import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto): import("@prisma/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("@prisma/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        type: import("@prisma/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("@prisma/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateEventDto: UpdateEventDto): import("@prisma/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("@prisma/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("@prisma/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
