import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './paginas/registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    RegistroRoutingModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  declarations: [RegistroComponent]
})
export class RegistroModule { }
