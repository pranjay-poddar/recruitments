import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { SuccessfulRegisterationComponent } from './successful-registeration/successful-registeration.component';
import { AdminComponent } from './admin/admin.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRegistrationComponent,
    SuccessfulRegisterationComponent,
    AdminComponent,
    ApplicantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
