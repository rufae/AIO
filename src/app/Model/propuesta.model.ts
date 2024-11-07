import { Usuario } from './usuario.model';
import { Actividad } from './actividad.model';
import { Grupo } from './grupo.model';
import { Voto } from './voto.model';

export interface Propuesta {
    propuestaId: number;
    descripcion: string;
    fechaPropuesta: string;
    aprobada: boolean;
    creador: Usuario;
    grupo: Grupo;
    actividad: Actividad;
    votos: Voto[];
}
