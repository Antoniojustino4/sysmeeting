import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor() {
        this.inst = [
            { label: '  IFPB-Campus Monteiro', value: { id: 1, name: ' IFPB Monteiro' } }
        ];
        this.formacao = [
            { label: 'Licenciatura', value: { id: 1, name: 'Licenciatura' } }, { label: 'Tecnológica', value: { id: 2, name: ' Tecnologica' } },
            { label: ' Bacharelado', value: { id: 3, name: ' Bacharelado' } }
        ];
    }
    ngOnInit() {
        this.items = [
            { label: 'Página Principal', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
        ];
    }
};
MenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map