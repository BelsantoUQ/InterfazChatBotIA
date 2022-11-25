import { Component, Input, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-question',
  templateUrl: './message-question.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class MessageQuestionComponent implements OnInit {


  @Input() question: string ="esta es una pregunta de prueba";
  @Input() fecha: string ="11/11/22";
  foto = "../../../../../assets/images/usuario.png"

  constructor() { }

  ngOnInit(): void {
  }

}
