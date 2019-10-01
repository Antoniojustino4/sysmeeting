import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CadastroNdePreComponent = class CadastroNdePreComponent {
    constructor() {
        this.display = false;
        this.tiposMembros = [
            { label: '  Discente ', value: { id: 1, name: ' Discente' } },
            { label: '  Docente ', value: { id: 2, name: ' Docente' } },
            { label: '  Suplente Discente ', value: { id: 3, name: 'Suplente Discente' } },
            { label: ' Técnico Administrativo', value: { id: 4, name: 'técnico Administrativo' } },
            { label: ' Docente Externo', value: { id: 5, nae: ' Docente Externo' } },
            { label: '  Suplente Docente Externo ', value: { id: 6, name: 'Suplente Docente Externo' } },
            { label: '  Suplente Técnico Administrativo ', value: { id: 7, name: 'Suplente Técnico Administrativo' } },
        ];
    }
    showDialog() {
        this.display = true;
    }
    ngOnInit() {
    }
};
CadastroNdePreComponent = tslib_1.__decorate([
    Component({
        selector: 'app-cadastro-nde-pre',
        templateUrl: './cadastro-nde-pre.component.html',
        styleUrls: ['./cadastro-nde-pre.component.css']
    })
], CadastroNdePreComponent);
export { CadastroNdePreComponent };
//# sourceMappingURL=cadastro-nde-pre.component.js.map