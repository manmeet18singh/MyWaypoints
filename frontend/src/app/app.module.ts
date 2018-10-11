import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule, MatTableModule, MatTab, MatTable} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { AgmCoreModule } from '@agm/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AgmDirectionModule } from 'agm-direction';

import { WeatherPointsService } from './weather-points.service'
import { WeatherService } from './weather.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    MatTableModule,
    MatExpansionModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaUnCMgKfApltyQjXGcvfSH0t_ZhVvAyo'
    }),
    AgmDirectionModule
  ],
  providers: [WeatherPointsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
