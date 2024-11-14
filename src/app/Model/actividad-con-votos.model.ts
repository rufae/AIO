import { VotoDTO } from './voto.model';
import { TipoActividad } from './tipo-actividad.enum';

export interface ActividadConVotosDTO {
    actividadId: number;
    calidad: string;
    distancia: string;
    pais: string;
    region: string;
    resenas: string;
    tipoActividad: TipoActividad;
    votosAFavor: number;
    votosEnContra: number;
    votos: VotoDTO[];
    yaVoto?: boolean;
}
