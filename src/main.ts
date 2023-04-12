import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // project life cycle / project botstrapping
    // npm run start pkg.json - angular .json, serve - build - option - index.html - main ts then browser