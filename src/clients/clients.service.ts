import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientsService {

  constructor(private prisma: PrismaService){}

  create(createClientDto: CreateClientDto) {
    return this.prisma.client.create({
      data: {...createClientDto}
    });
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({
      where: { id }
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.client.findUnique({
      where: { email: email }
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({
      where: { id },
      data: { ...updateClientDto }
    });
  }

  remove(id: number) {
    return this.prisma.client.delete({
      where: { id }
    });
  }
}
