import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { MatListModule } from "@angular/material";
import { MatGridListModule } from "@angular/material";
import { MatCardModule } from "@angular/material";
import { MatMenuModule } from "@angular/material";
import { MatExpansionModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule
  ],
  exports: [
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule
  ]
})
export class AngularMaterialModule {}
