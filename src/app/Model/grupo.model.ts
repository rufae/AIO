import {Usuario} from "./usuario.model";

export interface Grupo {
    grupoId: number;
    nombre: string;
    descripcion: string;
    fechaCreacion: string;
    imagen: string;
    usuarios: Usuario[];
}
