import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SmallDescriptionCardComponent } from './shared/small-description-card/small-description-card.component';
import { InfoCardComponent } from './shared/info-card/info-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReservationComponent } from './reservation/reservation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UsersService } from './_services/users.service';
import { OrdersService } from './_services/orders.service';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CardComponent,
    SmallDescriptionCardComponent,
    InfoCardComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    DragDropModule
   
  ],
  providers: [ UsersService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
