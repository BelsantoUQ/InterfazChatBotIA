import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry,  catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private APIURL = `http://127.0.0.1:8000`;
  //API DE Python donde hicimos el chatbot

  private HEADERS = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  });

  constructor(
    private  http: HttpClient
  ) { }

  getAnswer(q:string){

    return this.http.get<string>(`${this.APIURL}/chatbotUQ?question=${q}`,
    {headers: this.HEADERS});
  }

}
