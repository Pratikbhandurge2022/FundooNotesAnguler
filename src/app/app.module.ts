import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthgaurdService } from './Services/Authgaurdservice/authgaurd.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { TakeNoteComponent } from './Components/take-note/take-note.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { UpdateNotesComponent } from './Components/update-notes/update-notes.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashBoardComponent,
    GetAllNotesComponent,
    ArchiveComponent,
    TrashComponent,
    TakeNoteComponent,
    IconsComponent,
    DisplayNoteComponent,
    UpdateNotesComponent,
 
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule ,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule
    

  ],
  providers: [AuthgaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }