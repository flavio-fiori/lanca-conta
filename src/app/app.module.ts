import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { FooterComponent } from './components/footer/footer.component';

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    TransactionsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
