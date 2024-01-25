import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'price-feed';
}

















































    // console.log('OL')
    // // this.ws = new WebSocket(`wss://stream.binance.com:9443/ws/etheur@trade`)
    // let pair ='btcusdt'
    // console.log(`wss://stream.binance.com/stream?streams=${pair.toLowerCase()}@kline_1m=${'ethusdt'.toLowerCase()}@kline_1m=${'bnbusdt'.toLowerCase()}@kline_1m`)
    // this.ws = new WebSocket(`wss://stream.binance.com/stream?streams=${pair.toLowerCase()}@kline_1m`)

    // this.ws.onmessage=(event)=>{
    //   let x = JSON.parse(event.data)

    // console.log(x)
    // }




  // .on("error", (error: any) => {
  //   console.error("Error listening to price updates:", error);
  // });


  
// for nodejs only
// const web3 = new Web3("https://rpc.ankr.com/polygon_mumbai")
// const aggregatorV3InterfaceABI = [
//   {
//     inputs: [],
//     name: "decimals",
//     outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "description",
//     outputs: [{ internalType: "string", name: "", type: "string" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
//     name: "getRoundData",
//     outputs: [
//       { internalType: "uint80", name: "roundId", type: "uint80" },
//       { internalType: "int256", name: "answer", type: "int256" },
//       { internalType: "uint256", name: "startedAt", type: "uint256" },
//       { internalType: "uint256", name: "updatedAt", type: "uint256" },
//       { internalType: "uint80", name: "answeredInRound", type: "uint80" },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "latestRoundData",
//     outputs: [
//       { internalType: "uint80", name: "roundId", type: "uint80" },
//       { internalType: "int256", name: "answer", type: "int256" },
//       { internalType: "uint256", name: "startedAt", type: "uint256" },
//       { internalType: "uint256", name: "updatedAt", type: "uint256" },
//       { internalType: "uint80", name: "answeredInRound", type: "uint80" },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "version",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
// ]
  
// const addr = "0xF3941fe30839E5e6db18470984312Eb0D395819a"
// const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)
// console.log(priceFeed)
// console.log(priceFeed.methods)
//     console.log(priceFeed)
// console.log(priceFeed.methods)
//     priceFeed.methods['latestRoundData']()

//   .call()
//   .then((roundData:any) => {
//     // Do something with roundData
//     console.log("Latest Round Data", roundData)
//     this.currentPriceByChain = roundData?.answer
//   });
   //     var socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');
    // socket.addEventListener('message', function (event)
    // {
    //   // parse & show the data
    // })

    // console.log(this.ws)

    // this.ws = new WebSocket(`wss://ws.coincap.io/prices?assets=bitcoin,ethereum`)
    // console.log(this.ws)
    // this.ws.onmessage=(event)=>{

    // console.log(event)
    // }



    //     const socket = new WebSocket('wss://ws.coinapi.io/v1/');

    // socket.onopen = function (event) {
    //   socket.send(JSON.stringify({
    //       "type": "hello",
    //       "apikey": "E7CDEC48-D5FA-4573-A933-3623300F4F1D",
    //       "subscribe_data_type": ["trade"],
    //       "subscribe_filter_symbol_id": [ "BITSTAMP_SPOT_BTC_USD$", "BITFINEX_SPOT_BTC_LTC$" ]
    //   }));
    // };

    // socket.onmessage = function (event) {
    //   console.log(event.data);
    // };

    // socket.onerror = function (error) {
    //   console.log(`WebSocket error: ${error}`);
    // };