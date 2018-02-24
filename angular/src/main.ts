import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Router } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(moduleRef => {
	  const router = moduleRef.injector.get(Router);
    //const ngZone = moduleRef.injector.get(NgZone);

    router.initialNavigation(); // <== making initial navigation here
    // ngZone.run(() => router.initialNavigation()); // if called within NgZone, everything works
});

