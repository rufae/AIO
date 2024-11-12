import {Usuario} from "./usuario.model";

export interface Grupo {
    grupoId: number;
    nombre: string;
    descripcion: string;
    fechaCreacion: string;
    usuarios: Usuario[];
}
