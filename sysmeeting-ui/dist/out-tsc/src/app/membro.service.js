import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
let MembroService = class MembroService {
    constructor(http) {
        this.http = http;
    }
    consultar() {
        return this.http.get('http://localhost:8080/membros')
            .toPromise()
            .then(response => response.valueOf());
    }
    adicionar(membro) {
        return this.http.post('http://localhost:8080/membros', membro)
            .toPromise()
            .then(response => response.valueOf());
    }
};
MembroService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], MembroService);
export { MembroService };
//# sourceMappingURL=membro.service.js.map