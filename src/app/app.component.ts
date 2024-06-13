import { Component, importProvidersFrom } from '@angular/core';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, HttpClient, HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import 'zone.js';
import { TestLanguageChangeComponent } from './test-language-change/test-language-change.component';
import { RouterModule } from '@angular/router';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslateModule, TestLanguageChangeComponent, RouterModule],
  templateUrl: './app.component.html' 
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    // const browserLang = this.translate.getBrowserLang();
    // const defaultLang = browserLang && browserLang.match(/en|de/) ? browserLang : 'en';
    // this.translate.use(defaultLang);
  }





}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
});