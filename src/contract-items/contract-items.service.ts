import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateContractItemDto } from './dto/create-contract-item.dto';
import { UpdateContractItemDto } from './dto/update-contract-item.dto';

@Injectable()
export class ContractItemsService {
  constructor(private prisma: PrismaService) {}

  create(createContractItemDto: CreateContractItemDto) {
    return this.prisma.contractItem.create({
      data: { ...createContractItemDto },
    });
  }

  findAll() {
    return this.prisma.contractItem.findMany();
  }

  findOne(id: number) {
    return this.prisma.contractItem.findUnique({
      where: { id },
    });
  }

  update(id: number, updateContractItemDto: UpdateContractItemDto) {
    return this.prisma.contractItem.update({
      where: { id },
      data: { ...updateContractItemDto },
    });
  }

  remove(id: number) {
    return this.prisma.contractItem.delete({
      where: { id },
    });
  }
}
