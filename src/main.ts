///<reference path="../typings/globals/core-js/index.d.ts"/>
///<reference path="../typings/globals/node/index.d.ts"/>
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from "@angular/platform-browser";
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
// import { AppModuleNgFactory } from "../aot/app/app.module.ngfactory";
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
