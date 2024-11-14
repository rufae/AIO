import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActividadConVotosDTO } from '../Model/actividad-con-votos.model';

@Injectable({
    providedIn: 'root'
})
export class ActividadService {

    constructor(private http: HttpClient) { }

    // Método para obtener las actividades de un grupo
    obtenerActividadesPorGrupo(grupoId: number): Observable<ActividadConVotosDTO[]> {
        return this.http.get<ActividadConVotosDTO[]>(`/api/viaje/actividad?grupoId=${grupoId}`);
    }

    // Método para votar en una actividad
    votarActividad(actividadId: number, usuarioId: number, votoAFavor: boolean): Observable<any> {
        return this.http.post<any>(`/api/viaje/actividad/votar?actividadId=${actividadId}&usuarioId=${usuarioId}&votoAFavor=${votoAFavor}`, {});
    }

    // Método corregido para crear una nueva actividad
    crearActividad(actividad: any, usuarioId: number): Observable<any> {
        // Crear los parámetros de la consulta
        const params = new HttpParams().set('usuarioId', usuarioId.toString());

        // Realizar el POST con el cuerpo de la solicitud y los parámetros de consulta
        return this.http.post<any>('/api/viaje/actividad/nueva', actividad, { params });
    }
}
