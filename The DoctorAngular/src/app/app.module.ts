import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import{faCoffee,faBacon,faSpinner,faMapMarkerAlt,faMoneyBillWave,faUserClock,faPhone,faStethoscope} from '@fortawesome/free-solid-svg-icons';
import { BtnLoadingComponent } from './btn-loading/btn-loading.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AngularLifecycleHooksComponent } from './angular-lifecycle-hooks/angular-lifecycle-hooks.component';
import { FormComponent } from './pages/form/form.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingPageComponent } from './booking-page/booking-page.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    BtnLoadingComponent,
    ChildComponent,
    ParentComponent,
    AddDoctorsComponent,
    DoctorDetailsComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AngularLifecycleHooksComponent,
    FormComponent,
    FooterComponent,
    AdminComponent,
    ContactUsComponent,
    SideBarComponent,
    BookingComponent,
    BookingPageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faBacon),
    library.addIcons(faCoffee),
    library.addIcons(faSpinner),
    library.addIcons(faMapMarkerAlt),
    library.addIcons(faMoneyBillWave),
    library.addIcons(faUserClock),
    library.addIcons(faPhone),
    library.addIcons(faStethoscope)

  }

}
