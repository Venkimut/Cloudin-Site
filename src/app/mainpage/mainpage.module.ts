import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderfooterModule } from '../headerfooter/headerfooter.module';
import { ParticlesModule } from 'angular-particle';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HeaderfooterModule,
    ParticlesModule,
  ]
})
export class MainpageModule { }
