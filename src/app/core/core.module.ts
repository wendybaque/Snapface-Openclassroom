import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';

import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
// Core module : tout ce qui sera importé une seule fois dans l'application et qui ne fait pas partie d'un feature module.

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders,
  ],
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
