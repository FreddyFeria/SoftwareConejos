import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { MatListModule } from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material";
import { MatMenuModule } from "@angular/material";
import { MatExpansionModule } from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatSliderModule, DateAdapter } from '@angular/material'; 
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AngularMaterialModule {}
