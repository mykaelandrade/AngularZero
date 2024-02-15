// Seu módulo (exemplo: app.module.ts)

import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
    ],
    declarations: [
        // ... outros componentes
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ],
    // ... outros metadados do módulo
})
export class AppModule { }