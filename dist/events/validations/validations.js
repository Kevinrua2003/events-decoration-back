"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateName = validateName;
exports.validateAmount = validateAmount;
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
}
function validateAmount(amount) {
    return amount > 0;
}
//# sourceMappingURL=validations.js.map