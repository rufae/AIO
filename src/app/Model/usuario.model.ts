export interface Usuario {
    usuarioId: number;
    username: string;
    password: string;
    fechaRegistro: string;
    bio: string;
    imagen: string;
    amigos: Usuario[];
}
