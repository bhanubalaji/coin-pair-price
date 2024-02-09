import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const TradingView: any;


@Component({
  selector: 'app-tradeview',
  templateUrl: './tradeview.component.html',
  styleUrls: ['./tradeview.component.scss']
})
export class TradeviewComponent implements OnInit {
  public coinSelectedValue = 'BTCUSDT';

  selected: any = {
    focused: false,
    coinPair: this.coinSelectedValue,
    baseCoin: "USDT",
    mainCoin: "BTC",
    diff:0,
    balance: 0,
    cost: 0.00,
    maxBuy: 0,
    min: 0.001,
    maxSell: 0,
    leverage: 10,
    tempLeverage: 10,
    deleteOpenData: {
      indx: 0,
    },
    updatePrice: 0,
    aiBid: 50,
    aiAsk: 50,
    search: false,
    costLong: 0,
    costShort: 0
  };
  ngOnInit(): void {
    new TradingView.widget({
      container_id: "spot-analysiss0",
      autosize: true,
      symbol: ["PANCAKESWAP:" + 'BTCUSDT_5795E6'],
      interval: "5",
      timezone: "exchange",
      // theme: theme,
      style: "1",
      studies: [{
        id: "MASimple@tv-basicstudies",
        inputs: {
          length: 7
        }
  
      },
      {
        id: "MASimple@tv-basicstudies",
        inputs: {
          length: 25
        }
  
      },{
        id: "MASimple@tv-basicstudies",
        inputs: {
          length: 100
        }
  
      }],
      toolbar_bg: "#f1f3f6",
  
      withdateranges: false,
      hide_side_toolbar: false,
      hide_top_toolbar: false,
      hidevolume: true,
      allow_symbol_change: true,
      save_image: false,
      show_popup_button: false,
      locale: "en",
    });

this.tradingview1()

  }

  @ViewChild('container', { static: true }) container!: ElementRef;
  tradingview1(){
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "symbols":   [
          [
            "DYDX:BTCUSD.P|1D"
          ],
          [
            "PANCAKESWAP:ADABUSD
          ],
          [
            "UNISWAP:DERCUSDC_C88AC9|1D"
          ]
        ],
        "chartOnly": false,
        "width": 1000,
        "height": 500,
        "locale": "in",
        "colorTheme": "light",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;
    this.container.nativeElement.appendChild(script);
  }





}
