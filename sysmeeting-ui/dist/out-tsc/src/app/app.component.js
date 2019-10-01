import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(contaDeAcessoService, membroService) {
        this.contaDeAcessoService = contaDeAcessoService;
        this.membroService = membroService;
        this.membros = [];
    }
    ngOnInit() {
        this.membroService.consultar()
            .then(dados => {
            this.membros = dados;
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map