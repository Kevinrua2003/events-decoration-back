import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContractModificationsService } from './contract-modifications.service';
import { CreateContractModificationDto } from './dto/create-contract-modification.dto';
import { UpdateContractModificationDto } from './dto/update-contract-modification.dto';

@Controller('contract-modifications')
export class ContractModificationsController {
  constructor(private readonly contractModificationsService: ContractModificationsService) {}

  @Post()
  create(@Body() createContractModificationDto: CreateContractModificationDto) {
    return this.contractModificationsService.create(createContractModificationDto);
  }

  @Get()
  findAll() {
    return this.contractModificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractModificationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContractModificationDto: UpdateContractModificationDto) {
    return this.contractModificationsService.update(+id, updateContractModificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractModificationsService.remove(+id);
  }
}
