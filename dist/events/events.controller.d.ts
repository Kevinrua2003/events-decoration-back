import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }[]>;
    findOne(id: string): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: string, updateEventDto: UpdateEventDto): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
