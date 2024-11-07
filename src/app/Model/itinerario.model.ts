import { Actividad } from './actividad.model';
import { Usuario } from './usuario.model';

export interface Itinerario {
    itinerarioId: number;
    fechaIda: string;
    fechaVuelta: string;
    actividades: Actividad[];
    usuarioCreador: Usuario;
}
