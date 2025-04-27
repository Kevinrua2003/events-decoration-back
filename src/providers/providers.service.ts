import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './entities/provider.entity';

const providers: Provider[] = [
  {
    id: 201,
    name: "Charming Chairs Co.",
    phone: "555-0201",
    email: "info@charmingchairs.com"
  },
  {
    id: 202,
    name: "Tablecloth Trends",
    phone: "555-0202",
    email: "contact@tableclothtrends.com"
  },
  {
    id: 203,
    name: "LED Lighting Supplies",
    phone: "555-0203",
    email: "sales@ledlightingsupplies.com"
  },
  {
    id: 204,
    name: "Acrylic Accents",
    phone: "555-0204",
    email: "support@acrylicaccents.com"
  },
  {
    id: 205,
    name: "Vase Visions",
    phone: "555-0205",
    email: "info@vasevisions.com"
  },
  {
    id: 206,
    name: "Outdoor Essentials",
    phone: "555-0206",
    email: "contact@outdoores.com"
  },
  {
    id: 207,
    name: "Screen Solutions",
    phone: "555-0207",
    email: "support@screensolutions.com"
  },
  {
    id: 208,
    name: "Neon Designs",
    phone: "555-0208",
    email: "info@neondesigns.com"
  },
  {
    id: 301,
    name: "Wedding Magic Planners",
    phone: "555-0301",
    email: "contact@weddingmagic.com"
  },
  {
    id: 302,
    name: "Catering Classics",
    phone: "555-0302",
    email: "info@cateringclassics.com"
  },
  {
    id: 303,
    name: "Jazz & Co.",
    phone: "555-0303",
    email: "booking@jazzandco.com"
  },
  {
    id: 304,
    name: "Floral Fantasies",
    phone: "555-0304",
    email: "hello@floralfantasies.com"
  },
  {
    id: 305,
    name: "Photo Perfect",
    phone: "555-0305",
    email: "support@photoperfect.com"
  },
  {
    id: 306,
    name: "Lighting Legends",
    phone: "555-0306",
    email: "contact@lightinglegends.com"
  },
  {
    id: 307,
    name: "Valet VIP",
    phone: "555-0307",
    email: "info@valetvip.com"
  },
  {
    id: 308,
    name: "AV Experts",
    phone: "555-0308",
    email: "support@avexperts.com"
  },
  {
    id: 309,
    name: "Security Services Inc.",
    phone: "555-0309",
    email: "contact@securityservices.com"
  }
];

@Injectable()
export class ProvidersService {
  create(createProviderDto: CreateProviderDto) {
    const newId = providers.length ? Math.max(...providers.map(p => p.id)) + 1 : 1;
    const newProvider: Provider = { id: newId, ...createProviderDto };
    providers.push(newProvider);
    return newProvider;
  }

  findAll() {
    return providers;
  }

  findOne(id: number) {
    return providers.find(provider => provider.id === id) || null;
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    const provider = providers.find(p => p.id === id);
    if (!provider) return null;
    Object.assign(provider, updateProviderDto);
    return provider;
  }

  remove(id: number) {
    const index = providers.findIndex(p => p.id === id);
    if (index === -1) return null;
    const removedProvider = providers.splice(index, 1)[0];
    return removedProvider;
  }
}
