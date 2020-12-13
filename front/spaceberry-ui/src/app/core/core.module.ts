import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services';
import { AuthGuard, LoginPageRedirectGuard } from './guards';
import { HistoryDataProviderService } from './services/history-data-provider-services/history-data-provider-services.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    AuthService,
    AuthGuard,
    LoginPageRedirectGuard,
    HistoryDataProviderService,
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
