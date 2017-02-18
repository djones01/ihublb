import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

// Services
import { UserService } from './user.service';
import { UserListComponent } from './list/user-list.component';
import { UserCardComponent } from './card/user-card.component';
import { UserDetailComponent } from './detail/user-detail.component';
import { UserEditComponent } from './edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, UserListComponent, UserCardComponent, UserDetailComponent, UserEditComponent],
  providers: [UserService]
})
export class UserModule { }
