import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContractItemsService } from './contract-items.service';
import { CreateContractItemDto } from './dto/create-contract-item.dto';
import { UpdateContractItemDto } from './dto/update-contract-item.dto';

@Controller('contract-items')
export class ContractItemsController {
  constructor(private readonly contractItemsService: ContractItemsService) {}

  @Post()
  create(@Body() createContractItemDto: CreateContractItemDto) {
    return this.contractItemsService.create(createContractItemDto);
  }

  @Get()
  findAll() {
    return this.contractItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContractItemDto: UpdateContractItemDto) {
    return this.contractItemsService.update(+id, updateContractItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractItemsService.remove(+id);
  }
}
