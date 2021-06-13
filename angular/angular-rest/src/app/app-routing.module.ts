import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path:"viewbooks",component:BookComponent},
                        {path:"viewusers",component:UserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
