import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ContaDeAcessoService = class ContaDeAcessoService {
    constructor(http) {
        this.http = http;
    }
    consultar() {
        // this.http.post('localhost:8080/oauth/token', 'client:angular, username: admin@admin.com, password: admin, grant_type:password')
        //   .toPromise().then(response => {
        //     console.log();
        //   });
        // this.http.get('localhost:8080/usuarios').toPromise().then(response => {
        //   console.log();
        //  });
    }
};
ContaDeAcessoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ContaDeAcessoService);
export { ContaDeAcessoService };
//# sourceMappingURL=conta-de-acesso.service.js.map