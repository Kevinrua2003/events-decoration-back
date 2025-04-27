import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

const services: Service[] = [
  {
    id: 1,
    name: "Wedding Planning Package",
    price: 3500.00,
    description: "Full-service wedding coordination including vendor management, timeline creation, and day-of coordination for up to 200 guests.",
    providerId: 301
  },
  {
    id: 2,
    name: "Premium Catering Service",
    price: 85.00,
    description: "Gourmet plated dinner service with 3-course meal, professional waitstaff, and basic table settings (per guest price).",
    providerId: 302
  },
  {
    id: 3,
    name: "Live Jazz Band",
    price: 2200.00,
    description: "4-piece jazz ensemble for 4 hours of performance including setup and sound equipment.",
    providerId: 303
  },
  {
    id: 4,
    name: "Floral Installation",
    price: 1200.00,
    description: "Custom floral arrangements for archways, centerpieces, and entrance decor (materials not included).",
    providerId: 304
  },
  {
    id: 5,
    name: "Professional Photography",
    price: 1800.00,
    description: "8-hour coverage with 2 photographers, edited high-resolution images, and online gallery delivery.",
    providerId: 305
  },
  {
    id: 6,
    name: "Lighting Design Package",
    price: 950.00,
    description: "Custom venue lighting design including uplighting, dance floor effects, and intelligent lighting systems.",
    providerId: 306
  },
  {
    id: 7,
    name: "Valet Parking Service",
    price: 600.00,
    description: "Professional valet service for up to 100 vehicles with 3 attendants (4-hour minimum).",
    providerId: 307
  },
  {
    id: 8,
    name: "AV Equipment Rental",
    price: 750.00,
    description: "Complete sound system, 2 wireless microphones, and projector with screen for presentations.",
    providerId: 308
  },
  {
    id: 9,
    name: "Bartending Service",
    price: 250.00,
    description: "Professional bartender for 4 hours including basic mixology tools (alcohol not included).",
    providerId: 302
  },
  {
    id: 10,
    name: "Event Security",
    price: 150.00,
    description: "Licensed security personnel per guard for crowd control and venue protection (4-hour minimum).",
    providerId: 309
  }
];


@Injectable()
export class ServicesService {

  create(createServiceDto: CreateServiceDto) {
    const newId = services.length ? Math.max(...services.map(service => service.id)) + 1 : 1;
    const newService = { id: newId, ...createServiceDto };
    services.push(newService);
    return newService;
  }

  findAll() {
    return services;
  }

  findOne(id: number) {
    return services.find(service => service.id === id);
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return services.map(service =>
      service = service.id === id ? { ...service, ...updateServiceDto } : service
    );
  }

  remove(id: number) {
    let arr: Service[] = services.filter(service => service.id !== id);
    while(services.length > 0){
      services.pop();
    }
    arr.forEach(service => {
      services.push(service);
    })

    return services;
  }
}
