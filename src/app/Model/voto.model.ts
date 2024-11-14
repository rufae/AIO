import { Actividad } from './actividad.model';
import { Usuario } from './usuario.model';
import { Propuesta } from './propuesta.model';

export interface Voto {
    votoId: number;
    votoAFavor: boolean;
    actividad: Actividad;
    usuario: Usuario;
    propuesta: Propuesta;
}
export interface VotoDTO{
    votoId: number;
    votoAFavor: boolean;
    actividadId: number;
    usuarioId: number;
}
