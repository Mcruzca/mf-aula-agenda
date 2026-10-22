import { Component, signal } from '@angular/core';
@Component({
 selector: 'app-agenda',
 standalone: true,
 template: `<section><small>ANGULAR · localhost:4301</small><h2>Agenda</h2>
 <p>Taller: Introducción a microfrontends · 10:00</p><button (click)="inscrito.set(!inscrito())">{{ inscrito() ? "Cancelar inscripción" : "Inscribirme" }}</button><p aria-live="polite">{{ inscrito() ? "Estás inscrito" : "Aún no estás inscrito" }}</p><p>Ejemplo en memoria: al salir se reinicia.</p></section>`,
 styles: [`section { border:2px solid #b45309;padding:20px;border-radius:8px; } button { padding:10px;margin:8px;cursor:pointer; } input { padding:8px; }`]
})
export class AgendaComponent { inscrito = signal(false); }
