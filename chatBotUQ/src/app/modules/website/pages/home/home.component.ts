import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Conversation} from 'src/app/models/model'
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newQuestion = new FormControl('');
  newAnswer ="";
  conversationList:Conversation[] =[{question:'Hola y gracias',answer:'Con gusto', date: '2022-11-23 00:00:00'}];


  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {

  }


  sendQuestion(){

    this.conversationList.unshift({question:this.newQuestion.value+"", answer:'', date: new Date() + ""})
    this.chatService.getAnswer(this.newQuestion.value+"").subscribe(data=>{
      this.newAnswer = data;
      this.conversationList[0].answer =this.newAnswer;
    },
    (errorMsg) => {
      window.alert(errorMsg);
    });
    this.newQuestion.setValue('');
  }
}
