export class Event {
  id: number
  name: string
  type: EventType
  startDate: string
  endDate: string
  location: Location
  amount: number
}

export enum EventType {
    WEDDING = 'WEDDING',
    BIRTHDAY = 'BIRTHDAY',
    CORPORATE = 'CORPORATE',
    OTHER = 'OTHER',
}

export enum Location {
  PLAYA = 'PLAYA',
  SAN_MIGUEL_DEL_PADRON = 'SAN_MIGUEL_DEL_PADRON',
  PLAZA = 'PLAZA',
  HABANA_DEL_ESTE = 'HABANA_DEL_ESTE',
  CENTRO_HABANA = 'CENTRO_HABANA',
  DIEZ_DE_OCTUBRE = 'DIEZ_DE_OCTUBRE',
  CERRO = 'CERRO',
  HABANA_VIEJA = 'HABANA_VIEJA',
}
