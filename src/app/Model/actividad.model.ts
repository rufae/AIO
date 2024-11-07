export interface Actividad {
    actividadId: number;
    calidad: string;
    distancia: string;
    pais: string;
    region: string;
    resenas: string;
    guardada: boolean;
    tipoActividad: TipoActividad;
}

export enum TipoActividad {
    TIPO_1,
    TIPO_2,
    TIPO_3
}
