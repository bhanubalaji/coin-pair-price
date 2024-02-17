import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }

  ws!: WebSocket;

  constructor(private http: HttpClient) { }


  getTradePair(){
   
  }

  connect() {
    console.log('OL')
    this.ws = new WebSocket(`wss://stream.binance.com:9443/ws/etheur@trade`)
    this.ws.onmessage=(event)=>{
      
    console.log(event)
    }
}

getdata() {
  return this.http.get('user/gridBot/activeLines/');
}


private apiUrl = 'https://api.lynxcrypto.app/v1/tokens/metadata?tokenId=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c:56,0x3ee2200efb3400fabb9aacf31297cbdd1d435d47:1';
private apiKey = 'g77CoMvJEG1KsS8eai7Oo5I9SREpnw1h2k76Y4Td';


getTokensMetadata(): Observable<any> {
  const headers = new HttpHeaders().set('x-api-key', this.apiKey);
  return this.http.get(this.apiUrl, { headers });
}


}
