import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import io from 'socket.io-client';
import { Web3 } from 'web3';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedCoinPair: any;
  selectedCoinPair1: any;

  ws!: WebSocket;
  currentPrice: any;
  coinPairs = ['BTC/USDT', 'ETH/USDT', 'BNB/USDT', 'AAPL/USDT', 'AAPL/USD', 'BTC/USD',];
  coinPair1 = [{ "key": "BTC/USD", "value": "0x007A22900a3B98143368Bd5906f8E17e9867581b" }, { "key": "DAI/USD", "value": "0x0FCAa9c899EC5A91eBc3D5Dd869De833b06fB046" }]


  constructor(private http: HttpService) { }
  ngOnInit(): void {
    this.selectedCoinPair = this.coinPairs[0];
    this.selectedCoinPair1 = this.coinPair1[0]?.value;
    this.setupWebSocket();
    this.example()
    this.web3example();
    setInterval(() => {
      this.web3example();
    }, 10000);
    this.getHistoryData()
  }
  currentPriceByChain: any


  //get price for each coin pair using smart contract
  web3example() {
    const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://polygon-mumbai.infura.io/ws/v3/18fcb5ce163247318602e3c3b47097ad"))
    const aggregatorV3InterfaceABI = [
      {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "description",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
        name: "getRoundData",
        outputs: [
          { internalType: "uint80", name: "roundId", type: "uint80" },
          { internalType: "int256", name: "answer", type: "int256" },
          { internalType: "uint256", name: "startedAt", type: "uint256" },
          { internalType: "uint256", name: "updatedAt", type: "uint256" },
          { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "latestRoundData",
        outputs: [
          { internalType: "uint80", name: "roundId", type: "uint80" },
          { internalType: "int256", name: "answer", type: "int256" },
          { internalType: "uint256", name: "startedAt", type: "uint256" },
          { internalType: "uint256", name: "updatedAt", type: "uint256" },
          { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ]
    const addr = this.selectedCoinPair1
    // console.log(new web3.eth.Contract(aggregatorV3InterfaceABI, addr))

    const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)
    priceFeed.methods['latestRoundData']()
      .call()
      .then((roundData: any) => {
        this.currentPriceByChain = roundData?.answer
        console.log(this.currentPriceByChain)

      })
    console.log(priceFeed)

    priceFeed.events['allEvents']()
    .on("data", (event: any) => {
      console.log(event)
      console.log("Price Update Event:", event.returnValues);
      // Access and use the updated price from event.returnValues
    })

  }



  //get price of coin pair using http node provider
  async example() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      // Assuming the API returns data in the format { "bitcoin": { "usd": 50000 } }
      const btcPrice = data.bitcoin.usd;
      // Display the price in the HTML element with id "price-container"
      console.log(`Current BTC/USD Price: $${btcPrice}`);
    } catch (error: any) {
      console.error('Error fetching BTC price:', error.message);
    }


  }


//get price history data of the coin pair using smart contract
  getHistoryData() {
    const web3 = new Web3("wss://polygon-mumbai.infura.io/ws/v3/18fcb5ce163247318602e3c3b47097ad")
    const aggregatorV3InterfaceABI = [
      {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "description",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
        name: "getRoundData",
        outputs: [
          { internalType: "uint80", name: "roundId", type: "uint80" },
          { internalType: "int256", name: "answer", type: "int256" },
          { internalType: "uint256", name: "startedAt", type: "uint256" },
          { internalType: "uint256", name: "updatedAt", type: "uint256" },
          { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "latestRoundData",
        outputs: [
          { internalType: "uint80", name: "roundId", type: "uint80" },
          { internalType: "int256", name: "answer", type: "int256" },
          { internalType: "uint256", name: "startedAt", type: "uint256" },
          { internalType: "uint256", name: "updatedAt", type: "uint256" },
          { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ]
    const addr = this.selectedCoinPair1
    const dataFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)
    let validId = BigInt("18446744073709554177")
    dataFeed.methods['getRoundData'](validId)
      .call()
      .then((historicalRoundData: any) => {
        console.log(historicalRoundData.answer)
      })

  }




// get coin pair price using binance
  onSelectCoinPair(): void {
    this.setupWebSocket();
  }

  setupWebSocket(): void {
    if (this.ws) {
      this.ws.close();
    }
    const pair = this.selectedCoinPair.toLowerCase().replace('/', '').trim();
    console.log(`wss://stream.binance.com/stream?streams=${pair}@kline_1m`)

    // this.ws = new WebSocket(`wss://dex.binance.org/api/ws/stream?streams==${pair}@kline_1m`);
    this.ws = new WebSocket(`wss://stream.binance.com/stream?streams=${pair}@kline_1m`);


    // this.ws = new WebSocket(`wss://bsc.streaming.api.pancakeswap.finance:9443/ws/${pair}@trade`);


    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // console.log(data)
      // Assuming 'c' is the closing price in the Kline data
      this.currentPrice = data['data']['k']['o'];
      // console.log(this.currentPrice)
    };
  }


}











 