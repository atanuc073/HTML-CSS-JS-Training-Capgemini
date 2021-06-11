import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { SharedbillComponent } from './sharedbill/sharedbill.component';
import { VolumeComponent } from './volume/volume.component';

// routes array
const routes: Routes = [{path:'calc',component:CalculatorComponent},
                        {path : 'volume',component:VolumeComponent},
                        {path:'bill',component:SharedbillComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
