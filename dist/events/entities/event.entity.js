"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = exports.EventType = exports.Event = void 0;
class Event {
}
exports.Event = Event;
var EventType;
(function (EventType) {
    EventType["WEDDING"] = "WEDDING";
    EventType["BIRTHDAY"] = "BIRTHDAY";
    EventType["CORPORATE"] = "CORPORATE";
    EventType["OTHER"] = "OTHER";
})(EventType || (exports.EventType = EventType = {}));
var Location;
(function (Location) {
    Location["PLAYA"] = "PLAYA";
    Location["SAN_MIGUEL_DEL_PADRON"] = "SAN_MIGUEL_DEL_PADRON";
    Location["PLAZA"] = "PLAZA";
    Location["HABANA_DEL_ESTE"] = "HABANA_DEL_ESTE";
    Location["CENTRO_HABANA"] = "CENTRO_HABANA";
    Location["DIEZ_DE_OCTUBRE"] = "DIEZ_DE_OCTUBRE";
    Location["CERRO"] = "CERRO";
    Location["HABANA_VIEJA"] = "HABANA_VIEJA";
})(Location || (exports.Location = Location = {}));
//# sourceMappingURL=event.entity.js.map