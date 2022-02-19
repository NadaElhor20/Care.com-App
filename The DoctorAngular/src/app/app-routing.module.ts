import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import {FormComponent } from './pages/form/form.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingPageComponent } from './booking-page/booking-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'doctor/:id',
    component: DoctorDetailsComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'booking - page',
    component: BookingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
