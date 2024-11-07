import { Usuario } from './usuario.model';

export interface Mensaje {
    mensajeId: number;
    content: string;
    fechaEnvio: string;
    imagen: string;
    usuario: Usuario;
}
