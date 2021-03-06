var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.outputLocation = new EventEmitter();
        this.alert = new EventEmitter();
    }
    NavbarComponent.prototype.getLoc = function (startingLoc, endingLoc, mode) {
        var start_end = [startingLoc, endingLoc, mode];
        this.outputLocation.emit(start_end);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NavbarComponent.prototype, "outputLocation", void 0);
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map