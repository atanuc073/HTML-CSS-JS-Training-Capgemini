import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { ViewempbyidComponent } from './viewempbyid/viewempbyid.component';

// const routes: Routes = [{path:"addemp",component:AddempComponent},
//                         {path:"viewemp",component:ViewempComponent,
//                         children:[{path:"byid", component : ViewempbyidComponent}]}];


const routes: Routes = [{path:"addemp",component:AddempComponent},
                        {path:"viewemp",component:ViewempComponent,
                        children:[{path:"byid",component:ViewempbyidComponent}]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
