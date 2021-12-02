import { Routes, RouterModule } from '@angular/router';



//Components created for links to other pages:
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { OffersComponent } from './offers/offers.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register';
import { DepartmentsComponent } from './departments/departments.component';
import { CartComponent } from './cart';
import { CheckoutComponent } from './checkout';
import { OrdersComponent } from './orders';


//Components for Store Department Items:
import { NeedsComponent } from './department_items/needs';
import { SoftwareComponent } from './department_items/software';
import { KitchenComponent } from './department_items/kitchen';
import { ElectronicsComponent } from './department_items/electronics';
import { BooksComponent } from './department_items/books';
import { ComputersComponent } from './department_items/computers';
import { AdminComponent } from './admin';

//Routes for each component:
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
  },
  {
    path: 'offers',
    component: OffersComponent,
  },
  {
    path: 'needs',
    component: NeedsComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  },
  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'electronics',
    component: ElectronicsComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'computers',
    component: ComputersComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },

  //Otherwise, redirect to the homepage:
  {
    path: '**',
    redirectTo: '',
  },
];

export const appRoutingModule = RouterModule.forRoot(routes);
