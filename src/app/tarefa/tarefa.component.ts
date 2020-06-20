import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefas: Tarefa[];

  tarefaSelecionada: Tarefa;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.getTarefas();
  }

  onSelect(tarefa: Tarefa): void {
    this.tarefaSelecionada = tarefa;
  }

  getTarefas(): void {
    this.tarefaService.getTarefas().subscribe(tarefas => this.tarefas = tarefas);
  }

}
