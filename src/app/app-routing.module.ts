import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { HomeComponent } from './home/home.component';
import { MailConfirmationComponent } from './mail-confirmation/mail-confirmation.component';

const routes: Routes = [
  { path: 'reset-password', component: PasswordResetComponent },
  { path: '', component: HomeComponent },
  { path: 'mail-confirmation', component: MailConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
