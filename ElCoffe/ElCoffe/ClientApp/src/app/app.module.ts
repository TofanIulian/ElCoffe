import { CategoriesService } from './_services/category.service';
import { NotificationService } from './_services/notification.service';
import { AppConfig } from './app.config';
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
import {MatInputModule, MatIconModule, MatTableModule, MatTableDataSource, MatListModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatStepperModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReservationComponent } from './reservation/reservation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UsersService } from './_services/users.service';
import { OrdersService } from './_services/orders.service';
import { MenuComponent } from './menu/menu.component';
import { ProductsService } from './_services/product.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { UsersComponent } from './users/users.component';
import { CdkStepperModule } from '../../node_modules/@angular/cdk/stepper';
import { A11yModule } from '../../node_modules/@angular/cdk/a11y';
import { CdkTableModule } from '../../node_modules/@angular/cdk/table';
import { CdkTreeModule } from '../../node_modules/@angular/cdk/tree';
import { PortalModule } from '../../node_modules/@angular/cdk/portal';
import { ScrollingModule } from '../../node_modules/@angular/cdk/scrolling';
import { StatusesComponent } from './statuses/statuses.component';
import { OrdersComponent } from './orders/orders.component';
import { StatusesService } from './_services/status.service';
import { OrderComponent } from './order/order.component';
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
    ReservationComponent,
    MenuComponent,
    UsersComponent,
    StatusesComponent,
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCheckboxModule,


    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [ UsersService, OrdersService, NotificationService, ProductsService, AppConfig, AuthService, AuthGuardService, CategoriesService, StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
