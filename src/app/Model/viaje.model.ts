import { Usuario } from './usuario.model';
import { Itinerario } from './itinerario.model';

export interface Viaje {
    viajeId: number;
    fechaInicio: string;
    fechaVuelta: string;
    destino: string;
    numeroAdultos: number;
    numeroMenores: number;
    numeroHabitaciones: number;
    presupuesto: number;
    usuario: Usuario;
    itinerarios: Itinerario[];
}
