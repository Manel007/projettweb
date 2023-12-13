import { NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {ListEmpruntComponent} from "./Emprunt/list-emprunt/list-emprunt.component";
import {UpdateEmpruntComponent} from "./Emprunt/update-emprunt/update-emprunt.component";
import {AddEmpruntComponent} from "./Emprunt/add-emprunt/add-emprunt.component";
import {DELETE} from "@angular/cdk/keycodes";
import {DeleteEmpruntComponent} from "./Emprunt/delete-emprunt/delete-emprunt.component";
import { ReservationComponent } from './Reservation/reservation/reservation.component';
import { UpdateReservationComponent } from './Reservation/update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './Reservation/delete-reservation/delete-reservation.component';
import { AddReservationComponent } from "./Reservation/add-reservation/add-reservation.component";

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/Emprunt',
        pathMatch: 'full',
      },
      {path:'Emprunt',component:ListEmpruntComponent},
      {path:"updateEmp/:id", component:UpdateEmpruntComponent},
      {path:"Emprunt/addEmp", component:AddEmpruntComponent},
      {path:"deleteEmp/:id", component:DeleteEmpruntComponent},
      {path:'Reservation',component:ReservationComponent},
      {path:"Update/:idR",component:UpdateReservationComponent},
      {path:"deleteRes/:idR",component:DeleteReservationComponent},
      {path:"Reservation/addR",component:AddReservationComponent}
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
