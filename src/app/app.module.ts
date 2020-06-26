import {BrowserModule} from '@angular/platform-browser';
import {AlertModule} from 'ngx-bootstrap';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {LandingComponent} from './landing/landing.component';
import {CompanyFormationComponent} from './company-formation/company-formation.component';
import {AccountingComponent} from './accounting/accounting.component';
import {PayrollComponent} from './payroll/payroll.component';
import {BusinessAdviceComponent} from './business-advice/business-advice.component';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeZh from '@angular/common/locales/zh';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import { ContactsComponent } from './contacts/contacts.component';


const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'company_formation', component: CompanyFormationComponent},
  {path: 'accounting', component: AccountingComponent},
  {path: 'payroll', component: PayrollComponent},
  {path: 'business_advice_and_legal_issues', component: BusinessAdviceComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', redirectTo: '/'}
];

registerLocaleData(localeZh, 'zh');

export class DynamicLocaleId extends String {
  locale: string;

  toString() {
    return this.locale;
  }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    CompanyFormationComponent,
    AccountingComponent,
    PayrollComponent,
    BusinessAdviceComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: LOCALE_ID, useClass: DynamicLocaleId},
    {provide: LOCALE_ID, useValue: 'zh'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

