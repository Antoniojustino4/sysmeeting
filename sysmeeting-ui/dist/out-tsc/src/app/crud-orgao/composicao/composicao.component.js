import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
class Orgao {
}
let ComposicaoComponent = class ComposicaoComponent {
    constructor() {
        this.orgao = new Orgao();
        this.orgao.tipo = 'Colegiado';
        this.orgao.portaria = '001/2019';
        this.orgao.mandato = '01/02/2019 a 01/02/2021';
    }
    ngOnInit() {
        this.items = [
            { label: 'Atribuições' },
            { label: 'Composições Anteriores', url: 'http://angular.io' }
        ];
    }
};
ComposicaoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-composicao',
        templateUrl: './composicao.component.html',
        styleUrls: ['./composicao.component.css']
    })
], ComposicaoComponent);
export { ComposicaoComponent };
//# sourceMappingURL=composicao.component.js.map