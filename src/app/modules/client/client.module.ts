import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientlistsComponent } from './clientlists/clientlists.component'
// import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [
    // ClientListComponent
  
    ClientlistsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
