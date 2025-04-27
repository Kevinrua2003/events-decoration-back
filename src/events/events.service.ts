import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event, EventType, Location } from './entities/event.entity';

const events: Event[] = [
  {
    id: 1,
    name: "Anderson-Brooks Wedding",
    type: EventType.WEDDING,
    startDate: "2024-09-21T17:00:00Z",
    endDate: "2024-09-22T01:00:00Z",
    location: Location.PLAYA,
    amount: 0
  },
  {
    id: 2,
    name: "Tech Innovators Conference 2024",
    type: EventType.CORPORATE,
    startDate: "2024-11-05T09:00:00Z",
    endDate: "2024-11-07T18:00:00Z",
    location: Location.CERRO,
    amount: 0
  },
  {
    id: 3,
    name: "Sophia's Quinceañera Celebration",
    type: EventType.BIRTHDAY,
    startDate: "2024-07-13T19:00:00Z",
    endDate: "2024-07-14T00:00:00Z",
    location: Location.CENTRO_HABANA,
    amount: 0
  },
  {
    id: 4,
    name: "XYZ Corp Annual Gala",
    type: EventType.CORPORATE,
    startDate: "2024-12-31T20:00:00Z",
    endDate: "2025-01-01T02:00:00Z",
    location: Location.CERRO,
    amount: 0
  },
  {
    id: 5,
    name: "Jackson Family Reunion",
    type: EventType.OTHER,
    startDate: "2024-08-10T12:00:00Z",
    endDate: "2024-08-10T20:00:00Z",
    location: Location.HABANA_VIEJA,
    amount: 0
  },
  {
    id: 6,
    name: "Luxury Auto Product Launch",
    type: EventType.CORPORATE,
    startDate: "2024-10-15T18:30:00Z",
    endDate: "2024-10-15T22:00:00Z",
    location: Location.PLAZA,
    amount: 0
  },
  {
    id: 7,
    name: "Emma's Sweet 16 Bash",
    type: EventType.BIRTHDAY,
    startDate: "2024-05-25T19:30:00Z",
    endDate: "2024-05-26T01:00:00Z",
    location: Location.HABANA_DEL_ESTE,
    amount: 0
  },
  {
    id: 8,
    name: "Smith-Johnson Vow Renewal",
    type: EventType.BIRTHDAY,
    startDate: "2024-06-08T16:00:00Z",
    endDate: "2024-06-08T22:00:00Z",
    location: Location.DIEZ_DE_OCTUBRE,
    amount: 100
  },
  {
    id: 9,
    name: "Miami Charity Gala",
    type: EventType.OTHER,
    startDate: "2024-11-22T19:00:00Z",
    endDate: "2024-11-22T23:30:00Z",
    location: Location.PLAYA,
    amount: 0
  },
  {
    id: 10,
    name: "Grand Opening Celebration",
    type: EventType.OTHER,
    startDate: "2024-04-15T18:00:00Z",
    endDate: "2024-04-15T21:30:00Z",
    location: Location.PLAYA,
    amount: 0
  }
];

@Injectable()
export class EventsService {
  create(createEventDto: CreateEventDto) {
    const newId = events.length ? Math.max(...events.map(event => event.id)) + 1 : 1;
    const newEvent: Event = { id: newId, ...createEventDto };
    events.push(newEvent);
    return newEvent;
  }

  findAll() {
    return events;
  }

  findOne(id: number) {
    return events.find(event => event.id === id);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    const event = events.find(ev => ev.id === id);
    if (!event) return null;
    Object.assign(event, updateEventDto);
    return event;
  }

  remove(id: number) {
    const index = events.findIndex(ev => ev.id === id);
    if (index === -1) return null;
    const removedEvent = events.splice(index, 1)[0];
    return removedEvent;
  }
}
