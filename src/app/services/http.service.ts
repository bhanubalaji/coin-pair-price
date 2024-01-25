import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  ws!: WebSocket;

  constructor() { }

  getTradePair(){
   
  }

  connect() {
    console.log('OL')
    this.ws = new WebSocket(`wss://stream.binance.com:9443/ws/etheur@trade`)
    this.ws.onmessage=(event)=>{
      
    console.log(event)
    }
}


}
