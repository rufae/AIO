import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private usuarioIdSubject = new BehaviorSubject<number | null>(null);
    usuarioId$ = this.usuarioIdSubject.asObservable();

    constructor(
        private http: HttpClient,
        private router: Router,
        private usuarioService: UsuarioService // Inyectamos el servicio de usuario
    ) {}

    // Método de login, se espera que el backend devuelva el usuarioId
    login(username: string, password: string) {
        return this.http.post('/api/login', { username, password });
    }

    // Este método guarda el usuarioId en el servicio UsuarioService y en el localStorage
    setusuarioId(usuarioId: number) {
        this.usuarioService.setUsuarioId(usuarioId);
        this.usuarioIdSubject.next(usuarioId);
        localStorage.setItem('usuarioId', usuarioId.toString());
        console.log("usuarioId guardado en localStorage:", usuarioId); // Verifica que se guardó
    }

    // Método para obtener el usuarioId desde el servicio UsuarioService o el localStorage
    getusuarioId(): number | null {
        const usuarioId = this.usuarioService.getUsuarioId();
        return usuarioId ? usuarioId : Number(localStorage.getItem('usuarioId'));
    }

    // Método de logout, limpia el usuarioId tanto del BehaviorSubject como del localStorage
    logout() {
        this.usuarioService.setUsuarioId(null);
        this.usuarioIdSubject.next(null);
        localStorage.removeItem('usuarioId');
        this.router.navigate(['/login']);
    }
}
