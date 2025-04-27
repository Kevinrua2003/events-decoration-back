"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const event_entity_1 = require("./entities/event.entity");
const events = [
    {
        id: 1,
        name: "Anderson-Brooks Wedding",
        type: event_entity_1.EventType.WEDDING,
        startDate: "2024-09-21T17:00:00Z",
        endDate: "2024-09-22T01:00:00Z",
        location: event_entity_1.Location.PLAYA,
        amount: 0
    },
    {
        id: 2,
        name: "Tech Innovators Conference 2024",
        type: event_entity_1.EventType.CORPORATE,
        startDate: "2024-11-05T09:00:00Z",
        endDate: "2024-11-07T18:00:00Z",
        location: event_entity_1.Location.CERRO,
        amount: 0
    },
    {
        id: 3,
        name: "Sophia's Quinceañera Celebration",
        type: event_entity_1.EventType.BIRTHDAY,
        startDate: "2024-07-13T19:00:00Z",
        endDate: "2024-07-14T00:00:00Z",
        location: event_entity_1.Location.CENTRO_HABANA,
        amount: 0
    },
    {
        id: 4,
        name: "XYZ Corp Annual Gala",
        type: event_entity_1.EventType.CORPORATE,
        startDate: "2024-12-31T20:00:00Z",
        endDate: "2025-01-01T02:00:00Z",
        location: event_entity_1.Location.CERRO,
        amount: 0
    },
    {
        id: 5,
        name: "Jackson Family Reunion",
        type: event_entity_1.EventType.OTHER,
        startDate: "2024-08-10T12:00:00Z",
        endDate: "2024-08-10T20:00:00Z",
        location: event_entity_1.Location.HABANA_VIEJA,
        amount: 0
    },
    {
        id: 6,
        name: "Luxury Auto Product Launch",
        type: event_entity_1.EventType.CORPORATE,
        startDate: "2024-10-15T18:30:00Z",
        endDate: "2024-10-15T22:00:00Z",
        location: event_entity_1.Location.PLAZA,
        amount: 0
    },
    {
        id: 7,
        name: "Emma's Sweet 16 Bash",
        type: event_entity_1.EventType.BIRTHDAY,
        startDate: "2024-05-25T19:30:00Z",
        endDate: "2024-05-26T01:00:00Z",
        location: event_entity_1.Location.HABANA_DEL_ESTE,
        amount: 0
    },
    {
        id: 8,
        name: "Smith-Johnson Vow Renewal",
        type: event_entity_1.EventType.BIRTHDAY,
        startDate: "2024-06-08T16:00:00Z",
        endDate: "2024-06-08T22:00:00Z",
        location: event_entity_1.Location.DIEZ_DE_OCTUBRE,
        amount: 100
    },
    {
        id: 9,
        name: "Miami Charity Gala",
        type: event_entity_1.EventType.OTHER,
        startDate: "2024-11-22T19:00:00Z",
        endDate: "2024-11-22T23:30:00Z",
        location: event_entity_1.Location.PLAYA,
        amount: 0
    },
    {
        id: 10,
        name: "Grand Opening Celebration",
        type: event_entity_1.EventType.OTHER,
        startDate: "2024-04-15T18:00:00Z",
        endDate: "2024-04-15T21:30:00Z",
        location: event_entity_1.Location.PLAYA,
        amount: 0
    }
];
let EventsService = class EventsService {
    create(createEventDto) {
        const newId = events.length ? Math.max(...events.map(event => event.id)) + 1 : 1;
        const newEvent = { id: newId, ...createEventDto };
        events.push(newEvent);
        return newEvent;
    }
    findAll() {
        return events;
    }
    findOne(id) {
        return events.find(event => event.id === id);
    }
    update(id, updateEventDto) {
        const event = events.find(ev => ev.id === id);
        if (!event)
            return null;
        Object.assign(event, updateEventDto);
        return event;
    }
    remove(id) {
        const index = events.findIndex(ev => ev.id === id);
        if (index === -1)
            return null;
        const removedEvent = events.splice(index, 1)[0];
        return removedEvent;
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)()
], EventsService);
//# sourceMappingURL=events.service.js.map