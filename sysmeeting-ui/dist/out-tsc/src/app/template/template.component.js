import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TemplateComponent = class TemplateComponent {
    constructor() { }
    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-home' },
            { label: 'Login' }
        ];
    }
};
TemplateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-template',
        templateUrl: './template.component.html',
        styleUrls: ['./template.component.css']
    })
], TemplateComponent);
export { TemplateComponent };
//# sourceMappingURL=template.component.js.map