import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RoutingModule} from "../routing/routing.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RoutingModule
  ],
  exports: [
    NavbarComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  declarations: [NavbarComponent, PageNotFoundComponent, HomePageComponent]
})
export class SharedModule { }
