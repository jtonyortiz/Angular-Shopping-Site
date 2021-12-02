import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app.routing';

//Place new components here, and in declarations below:
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentsComponent } from './departments/departments.component';
import { OffersComponent } from './offers/offers.component';
import { CartComponent } from './cart';
import { CheckoutComponent } from './checkout';
import { OrdersComponent } from './orders';
import { AdminComponent } from './admin';
//Department Components:
import { NeedsComponent } from './department_items/needs';
import { SoftwareComponent } from './department_items/software';
import { ElectronicsComponent } from './department_items/electronics';
import { KitchenComponent } from './department_items/kitchen';
import { ComputersComponent } from './department_items/computers';
import { BooksComponent } from './department_items/books';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DepartmentsComponent,
    OffersComponent,
    NeedsComponent,
    ElectronicsComponent,
    KitchenComponent,
    ComputersComponent, 
    BooksComponent,
    SoftwareComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent,
    AdminComponent
  ],
  imports: [BrowserModule, appRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
