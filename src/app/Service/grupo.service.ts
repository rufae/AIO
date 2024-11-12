import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../Model/grupo.model';

@Injectable({
    providedIn: 'root'
})
export class GrupoService {

    constructor(private http: HttpClient) { }

    getGrupos(): Observable<Grupo[]> {
        return this.http.get<Grupo[]>('/api/viaje/todos');
    }

    addGrupo(grupo: Grupo): Observable<Grupo> {
        return this.http.post<Grupo>('/api/viaje/nuevo', grupo);
    }

    addParticipante(grupoId: number, usuarioId: number): Observable<any> {
        return this.http.post(`/api/viaje/participantes/nuevo?grupoId=${grupoId}&usuarioId=${usuarioId}`, {});
    }

    removeParticipante(grupoId: number, usuarioId: number): Observable<any> {
        return this.http.delete(`/api/viaje/participantes/eliminar?grupoId=${grupoId}&usuarioId=${usuarioId}`);
    }
}
// para arrancar ng serve --proxy-config proxy.conf.json
