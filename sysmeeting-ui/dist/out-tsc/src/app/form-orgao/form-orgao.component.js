import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
class Curso {
}
class Membro {
}
let FormOrgaoComponent = class FormOrgaoComponent {
    constructor(membroService) {
        this.membroService = membroService;
        this.display = false;
        this.membro = new Membro();
        this.modalidades = [
            { label: '  EAD ', value: { id: 1, name: ' EAD' } }, { label: ' Presencial', value: { id: 2, name: 'Presencial' } },
            { label: '  Semi-Presencial', value: { id: 3, name: ' Semi-presencial' } }
        ];
    }
    adicionar(form) {
        console.log(form.value);
        this.membro.nome = form.value.nome;
        this.membroService.adicionar(this.membro);
    }
    showDialog() {
        this.display = true;
    }
    salvar() {
    }
    ngOnInit() {
        this.itens = [{
                label: 'Página Principal', url: 'http://localhost:4200/'
            },
            { label: 'Cadastro de Campus e Cursos', url: '' }
        ];
    }
};
FormOrgaoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-form-orgao',
        templateUrl: './form-orgao.component.html',
        styleUrls: ['./form-orgao.component.css'],
    })
], FormOrgaoComponent);
export { FormOrgaoComponent };
//# sourceMappingURL=form-orgao.component.js.map