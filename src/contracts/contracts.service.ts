import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  create(createContractDto: CreateContractDto) {
    return this.prisma.contract.create({
      data: {
        ...createContractDto,
        createdAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.contract.findMany();
  }

  findOne(id: number) {
    return this.prisma.contract.findUnique({
      where: { id },
    });
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return this.prisma.contract.update({
      where: { id },
      data: { ...updateContractDto },
    });
  }

  remove(id: number) {
    return this.prisma.contract.delete({
      where: { id },
    });
  }
}
