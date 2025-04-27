"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products = [
    {
        id: 1,
        name: "Gold Chiavari Chair",
        price: 14.99,
        image: "",
        providerId: 201
    },
    {
        id: 2,
        name: "White Linen Tablecloth (120\")",
        price: 18.50,
        image: "",
        providerId: 202
    },
    {
        id: 3,
        name: "LED Uplight with Remote",
        price: 22.75,
        image: "",
        providerId: 203
    },
    {
        id: 4,
        name: "Acrylic Charger Plate",
        price: 6.99,
        image: "",
        providerId: 204
    },
    {
        id: 5,
        name: "Wooden Farmhouse Table",
        price: 125.00,
        image: "",
        providerId: 201
    },
    {
        id: 6,
        name: "Glass Cylinder Vase (12\")",
        price: 8.25,
        image: "",
        providerId: 205
    },
    {
        id: 7,
        name: "Outdoor Patio Heater",
        price: 35.00,
        image: "",
        providerId: 206
    },
    {
        id: 8,
        name: "Projector Screen (150\")",
        price: 65.00,
        image: "",
        providerId: 207
    },
    {
        id: 9,
        name: "Custom Neon Sign (Medium)",
        price: 149.99,
        image: "",
        providerId: 208
    },
    {
        id: 10,
        name: "Mirror Ball with Stand",
        price: 42.50,
        image: "",
        providerId: 203
    }
];
let ProductsService = class ProductsService {
    create(createProductDto) {
        const newId = products.length ? Math.max(...products.map(product => product.id)) + 1 : 1;
        const newProduct = { id: newId, ...createProductDto };
        products.push(newProduct);
        return newProduct;
    }
    findAll() {
        return products;
    }
    findOne(id) {
        return products.find(product => product.id === id);
    }
    update(id, updateProductDto) {
        const product = products.find(prod => prod.id === id);
        if (!product)
            return null;
        Object.assign(product, updateProductDto);
        return product;
    }
    remove(id) {
        const index = products.findIndex(product => product.id === id);
        if (index === -1)
            return null;
        const removedProduct = products.splice(index, 1)[0];
        return removedProduct;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map