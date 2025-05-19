import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { validateAmount, validateName } from './validations/validations';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    const nameIsValid = validateName(createEventDto.name);
    const amountIsValid = validateAmount(createEventDto.amount);

    const errors: string[] = [];
    if (!nameIsValid) {
      errors.push("Name is not valid");
    }
    if (!amountIsValid) {
      errors.push("Amount must be greater than 0");
    }
    
    if (errors.length) {
      throw new Error(`Error with data: ${errors.join(" and ")}`);
    }

    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
