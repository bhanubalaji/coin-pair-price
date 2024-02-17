import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
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
  constructor(private http:HttpService){}
  chart:any
  ngOnInit(): void {
    const widget = new TradingView.widget({
      // Configuration options...
      container_id: 'spot-analysiss0',
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "1",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      toolbar_bg: "#f1f3f6",
      // Add the Lightweight Charts library
      scripts: [
        'https://s3-us-west-2.amazonaws.com/tradingview-lightweight-charts/lib/lerc.min.js',
        'https://s3-us-west-2.amazonaws.com/tradingview-lightweight-charts/lib/umi.min.js',
        'https://s3-us-west-2.amazonaws.com/tradingview-lightweight-charts/dist/ltd.min.js',
      ],
      // Add a custom JavaScript function to draw lines
      onChartReady: function(chart:any) {
        // Create a custom JavaScript function to draw lines
        function drawLine(data:any) {
          // Create a new line series
          const lineSeries = chart.addLineSeries();
    
          // Set the line properties
          lineSeries.setData(data.map((d:any)=> ({ x: d[0], y: d[1] })));
          lineSeries.setExtendedYRange(true);
          lineSeries.setLineWidth(2);
          lineSeries.setColor('black'); // Set the line color to red
    
          // Add a vertical line at 330
          const verticalLine = chart.addLine({
            x1: 330,
            x2: 330,
            y1: chart.yAxis[0].pixelsToCoordinatesY({ pixel: 0 }),
            y2: chart.yAxis[0].pixelsToCoordinatesY({ pixel: chart.yAxis[0].height }),
            strokeWidth: 2,
            strokeColor: 'black',
            text: '330',
            textColor: '#FFF',
            textAlign: 'center',
            textValign: 'middle',
            fontSize: 12,
            fontFamily: 'Arial',
            backgroundColor: 'black',
          });
    
          // Call the function whenever the API data changes
          // ...
        }
    
        // Call the drawLine function with your API data
        drawLine(300);
      },
    });
    
    

    // this.chart = new TradingView.widget({
    //   container_id: 'spot-analysiss0',
    //   autosize: true,
    //   symbol: 'BINANCE:BTCUSDT',
    //   interval: 'D',
    //   timezone: 'Etc/UTC',
    //   theme: 'light',
    //   style: '1',
    //   locale: 'en',
    //   enable_publishing: false,
    //   allow_symbol_change: true,
    //   studies: [
    //     {
    //       id: 'custom_horizontal_line',
    //       script: {
    //         // Pine Script code with a horizontal line at price level 332
    //         text: `
    //         // This Pine Script™ code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
    //         // © bezawada_balaji
            
    //         //@version=5
    //         indicator("Horizontal Line", overlay=true)
    //         hline(20500, color=color.blue)
    //         plot(close)
    //         `
    //       }
    //     }
    //   ]
    // });

//  const chart =  new TradingView.widget({
//       container_id: "spot-analysiss0",
//       autosize: true,
//       symbol: ["BINANCE:BNBUSDT"],
//       interval: "5",
//       timezone: "exchange",
//       // theme: theme,
//       style: "1",
//       studies: [{
//         id: "MASimple@tv-basicstudies",
//         inputs: {
//           length: 7
//         }
  
//       },
//       {
//         id: "MASimple@tv-basicstudies",
//         inputs: {
//           length: 25
//         }
  
//       },{
//         id: "MASimple@tv-basicstudies",
//         inputs: {
//           length: 100
//         }
  
//       }],
//       toolbar_bg: "#f1f3f6",
  
//       withdateranges: false,
//       hide_side_toolbar: false,
//       hide_top_toolbar: false,
//       hidevolume: true,
//       allow_symbol_change: true,
//       save_image: false,
//       show_popup_button: false,
//       locale: "en",
//     });
//  const line = chart.line.new(
//       { x1: chart.time[1], y1: 50000, x2: chart.time, y2: 50000, extend: 'both', color: 'blue' }
//     );

    // this.fetchBuyAndSellPrices()

  }

  // ngAfterViewInit(){
  // createOrderLine(widget: any) {
  //   const chart = widget.chart();
    
  //   // Add a horizontal line annotation for buy order
  //   chart.createOrderLine({
  //     price: 7000, // Set the price for the order line
  //     quantity: "221.235 USDT", // Set the quantity for the order line
  //     position: 'belowBar', // Set the position relative to the bars (optional)
  //     linecolor: 'green', // Set the color of the line (optional)
  //     linestyle: 'solid', // Set the line style (optional)
  //     linewidth: 2, // Set the line width (optional)
  //     text: "Buy Line", // Set the text for the order line (optional)
  //     showQty: true // Show quantity (optional)
  //   });
  // }
  // }

  buyPrice:any=10
  sellPrice:any=20
// Replace fetchBuyAndSellPrices() with static arrays for demonstration
fetchBuyAndSellPrices() {
  const buyPrice = 330; // Dummy buy price
  const sellPrice = 340; // Dummy sell price

  // Initialize TradingView chart after fetching prices
  this.initChart(buyPrice, sellPrice);
}

initChart(buyPrice: number, sellPrice: number) {
  // Initialize the TradingView chart
  const chart = new TradingView.widget({
    container_id: "spot-analysiss0",
    autosize: true,
    symbol: ["BINANCE:BNBUSDT"],
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
    },
    {
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
    // Set the price range
    overrides: {
      "paneProperties.background": "#f1f3f6",
      "paneProperties.vertGridProperties.color": "#f1f3f6",
      "paneProperties.horzGridProperties.color": "#f1f3f6",
      "symbolWatermarkProperties.color": "#f1f3f6",
      "scalesProperties.textColor": "#000000"
    },
    priceScale: {
      mode: 0,
      autoScale: true,
      invertScale: false,
      scaleMargins: {
        top: 0.2,
        bottom: 0.1
      }
    },
    timeScale: {
      rightOffset: 12,
      barSpacing: 3,
      fixLeftEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      borderVisible: false,
      borderColor: "#fff000",
      visible: true,
      timeVisible: true
    },
    // onReady callback to ensure chart is fully initialized
    onready: () => {
      this.drawLines(chart, buyPrice, sellPrice);
    }
  });

}

drawLines(chart: any, buyPrice: number, sellPrice: number) {
  // Draw sell line
  chart.addPlotLine({
    value: sellPrice,
    color: 'violet',
    width: 1,
    id: `sell-price-line`,
    label: {
      text: `Sell Price`,
      align: 'left'
    }
  });

  // Draw buy line
  chart.addPlotLine({
    value: buyPrice,
    color: 'pink',
    width: 1,
    id: `buy-price-line`,
    label: {
      text: `Buy Price`,
      align: 'left'
    }
  });
}




  getapi(){

    this.http.getTokensMetadata().subscribe(
      (data:any) => {
        console.log(data);
        // Process the returned data and update your component's properties
      },
      (error:any) => {
        console.error('Error fetching tokens metadata:', error);
      }
    );
  }


}


















