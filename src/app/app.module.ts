import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { SetupComponent } from './setup/setup.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { RouteDirectionPipe } from './pipes/route-direction.pipe';
import { PiippuPipe } from './pipes/piippu.pipe';
 // generoidut komponentit importataan automaattisesti

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    SetupComponent,
    TopBarComponent,
    RouteDirectionPipe,
    PiippuPipe  // declaraatiot (julistukset) automaattisesti generoinnin yhteydessä
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyC0nJCFe4JQqSuOP0BsYyBsTYXXzLZsDUM'  // GOOGLE MAPS API KEY
      })
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
