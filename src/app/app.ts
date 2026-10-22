import { Component } from '@angular/core';
import { AgendaComponent } from './agenda.component';
@Component({ selector: 'app-root', imports: [AgendaComponent], template: '<h1>Agenda por separado</h1><app-agenda />' })
export class App {}
