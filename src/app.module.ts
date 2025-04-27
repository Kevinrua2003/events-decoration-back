import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { ServicesModule } from './services/services.module';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';
import { ProvidersModule } from './providers/providers.module';
import { ContractsModule } from './contracts/contracts.module';
import { ContractItemsModule } from './contract-items/contract-items.module';
import { ContractModificationsModule } from './contract-modifications/contract-modifications.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [EventsModule, ServicesModule, ProductsModule, EmployeesModule, ProvidersModule, ContractsModule, ContractItemsModule, ContractModificationsModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
