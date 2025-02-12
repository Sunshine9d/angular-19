import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { SelectionComponent } from './components/select/select.component';
import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
    declarations: [HeaderComponent, InputComponent, SelectionComponent, ReplacePipe],
    imports: [CommonModule, MaterialModule],
    exports: [MaterialModule, HeaderComponent, InputComponent, SelectionComponent, ReplacePipe],
})
export class SharedModule {}
