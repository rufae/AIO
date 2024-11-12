import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../Model/grupo.model';
import { Usuario } from '../Model/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class GrupoService {
    constructor(private http: HttpClient) { }

    // Obtener todos los grupos
    getGrupos(): Observable<Grupo[]> {
        return this.http.get<Grupo[]>('/api/viaje/todos');
    }

    // Crear un nuevo grupo
    addGrupo(grupo: Grupo): Observable<Grupo> {
        return this.http.post<Grupo>('/api/viaje/nuevo', grupo);
    }

    // Agregar un participante al grupo
    addParticipante(grupoId: number, usuarioId: number): Observable<any> {
        return this.http.post(`/api/viaje/participantes/nuevo?grupoId=${grupoId}&usuarioId=${usuarioId}`, {});
    }

    // Eliminar un participante del grupo
    removeParticipante(grupoId: number, usuarioId: number): Observable<any> {
        return this.http.delete(`/api/viaje/participantes/eliminar?grupoId=${grupoId}&usuarioId=${usuarioId}`);
    }

    // Obtener los participantes de un grupo
    getParticipantesGrupo(grupoId: number): Observable<Grupo[]> {
        return this.http.get<Grupo[]>(`/api/viaje/participantes?grupoId=${grupoId}`);
    }

    // Obtener la lista de todos los usuarios disponibles para agregar a un grupo
    getListaParticipantes(usuarioId: number): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`api/amigos?usuarioId=${usuarioId}`);
    }
}


// para arrancar ng serve --proxy-config proxy.conf.json
