import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { TradeviewComponent } from './components/pages/tradeview/tradeview.component';
// import { TradingViewModule } from 'ngx-tradingview';
import { HttpClientModule } from '@angular/common/http';
import { ChartsviewComponent } from './components/pages/chartsview/chartsview.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TradeviewComponent,
    ChartsviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // TradingViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
