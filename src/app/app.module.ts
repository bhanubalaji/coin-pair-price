import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { TradeviewComponent } from './components/pages/tradeview/tradeview.component';
// import { TradingViewModule } from 'ngx-tradingview';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TradeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // TradingViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
