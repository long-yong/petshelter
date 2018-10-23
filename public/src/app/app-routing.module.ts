
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetComponent } from './pet/pet.component';
import { NewpetComponent } from './pet/newpet/newpet.component';
import { EditpetComponent } from './pet/editpet/editpet.component';
import { DetailComponent } from './pet/detail/detail.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/pet' },

  { path: 'pet',component:PetComponent },
  { path: 'pet/newpet',component: NewpetComponent },
  { path: 'pet/editpet/:id',component: EditpetComponent },
  { path: 'pet/detail/:id',component: DetailComponent },

  // manually add routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

