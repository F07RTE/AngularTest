import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tarefa } from './tarefa';
import { TAREFAS } from './mock-tarefas';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  getTarefas(): Observable<any> {
    return this.http.get('http://192.168.0.29:8080/tasks');
  }

  constructor(private http: HttpClient) { }
}
