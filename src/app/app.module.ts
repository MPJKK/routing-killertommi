import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {RoutesComponent} from './routes/routes.component';
import {SetupComponent} from './setup/setup.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {RouteDirectionPipe} from './pipes/route-direction.pipe';
import {PiippuPipe} from './pipes/piippu.pipe';
import {MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

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
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC0nJCFe4JQqSuOP0BsYyBsTYXXzLZsDUM',
        }),
        MatExpansionModule,
        MatListModule,
        MatIconModule,
        FlexLayoutModule
    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
