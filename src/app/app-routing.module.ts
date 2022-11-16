import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { IconsComponent } from './Components/icons/icons.component';
import { TakeNoteComponent } from './Components/take-note/take-note.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'reset', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashBoardComponent,
    children: [
      { path: 'notes', component: GetAllNotesComponent },
      {path:'displaynotes', component:DisplayNoteComponent},
      { path: 'trash', component: TrashComponent },
      { path: 'archive', component: ArchiveComponent},
      {path: 'take-note', component:TakeNoteComponent}

    ]


  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }