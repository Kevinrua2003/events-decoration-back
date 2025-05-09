import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateContractModificationDto } from './dto/create-contract-modification.dto';
import { UpdateContractModificationDto } from './dto/update-contract-modification.dto';

@Injectable()
export class ContractModificationsService {
  constructor(private prisma: PrismaService) {}

  create(createContractModificationDto: CreateContractModificationDto) {
    return this.prisma.contractModification.create({
      data: {
        contractId: createContractModificationDto.contractId,
        description: createContractModificationDto.description,
        modifiedAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.contractModification.findMany();
  }

  findOne(id: number) {
    return this.prisma.contractModification.findUnique({
      where: { id },
    });
  }

  update(id: number, updateContractModificationDto: UpdateContractModificationDto) {
    return this.prisma.contractModification.update({
      where: { id },
      data: {
        ...updateContractModificationDto,
        modifiedAt: new Date(),
      },
    });
  }

  remove(id: number) {
    return this.prisma.contractModification.delete({
      where: { id },
    });
  }
}
