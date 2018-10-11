var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { AgmCoreModule } from '@agm/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AgmDirectionModule } from 'agm-direction';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavbarComponent,
            ],
            imports: [
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
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map