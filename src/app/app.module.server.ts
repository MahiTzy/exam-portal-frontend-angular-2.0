import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
  ],
  providers: [
    provideClientHydration() // Ensure this is included
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
