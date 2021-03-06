import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroColegiadoAdmComponent } from './cadastro-colegiado-adm/cadastro-colegiado-adm.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SpinnerModule } from 'primeng/spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { CadastroColegiadoPreComponent } from './cadastro-colegiado-pre/cadastro-colegiado-pre.component';
import { CadastroColegiadoComponent } from './cadastro-colegiado/cadastro-colegiado.component';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { CadastroNdeComponent } from './cadastro-nde/cadastro-nde.component';
import { CadastroNdeAdmComponent } from './cadastro-nde-adm/cadastro-nde-adm.component';
import { CadastroNdePreComponent } from './cadastro-nde-pre/cadastro-nde-pre.component';
import { ComposicaoComponent } from './composicao/composicao.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ComposicaoNdeComponent } from './composicao-nde/composicao-nde.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ComposicoesAnterioresComponent } from './composicoes-anteriores/composicoes-anteriores.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
class Membro {
}
let CrudOrgaoModule = class CrudOrgaoModule {
    constructor() {
        this.isAdmin = false;
        this.membro = new Membro();
    }
    salvarColegiado(form) {
    }
    salvarNde(form) {
    }
};
CrudOrgaoModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            CadastroColegiadoAdmComponent,
            CadastroColegiadoPreComponent,
            CadastroColegiadoComponent,
            CadastroNdeComponent,
            CadastroNdeAdmComponent,
            CadastroNdePreComponent,
            ComposicaoComponent,
            ComposicaoNdeComponent,
            ComposicoesAnterioresComponent
        ],
        imports: [
            CommonModule,
            BrowserAnimationsModule,
            ButtonModule,
            CalendarModule,
            FormsModule,
            InputTextModule,
            SpinnerModule,
            FileUploadModule,
            CardModule,
            InputMaskModule,
            TableModule,
            ToolbarModule,
            SplitButtonModule,
            DropdownModule,
            DialogModule,
            MultiSelectModule
        ],
        exports: [
            CadastroColegiadoAdmComponent,
            CadastroColegiadoPreComponent,
            CadastroNdeAdmComponent,
            CadastroNdePreComponent,
            ComposicoesAnterioresComponent,
            ComposicaoNdeComponent
        ]
    })
], CrudOrgaoModule);
export { CrudOrgaoModule };
//# sourceMappingURL=crud-orgao.module.js.map