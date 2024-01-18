import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { DevicesPageComponent } from './devices-page/devices-page.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { DevicesEditComponent } from './devices-edit/devices-edit.component';
import { DevicesAddComponent } from './devices-add/devices-add.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserAddComponent } from './user-add/user-add.component';
import { AdminAuthGuard, UserAuthGuard } from './services/auth.service';
import { MappingDevicesComponent } from './mapping-devices/mapping-devices.component';
import { UnMappingDevicesComponent } from './un-mapping-devices/un-mapping-devices.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent, title: 'Login page' },
  { path: 'client-page', component: ClientPageComponent, title: 'Client page', canActivate: [AdminAuthGuard]},
  { path: 'admin-page', component: AdminPageComponent, title: 'Admin page'},
  { path: 'users-edit/:id', component: UsersEditComponent, title: 'Users edit'},
  { path: 'devices-add', component:DevicesAddComponent, title: 'Adding Device'},
  { path: 'devices-edit/:id', component: DevicesEditComponent, title: 'Devices edit'},
  { path: 'user-page', component: UserPageComponent, title: 'User page', canActivate: [UserAuthGuard]},
  { path: 'user-add', component: UserAddComponent, title: 'Adding User'},
  { path: 'devices-page', component:DevicesPageComponent, title: 'Device Page', canActivate: [AdminAuthGuard]},
  { path: 'mapping-devices', component: MappingDevicesComponent, title: 'Mapping Page', canActivate: [AdminAuthGuard]},
  { path: 'un-mapping-devices', component: UnMappingDevicesComponent, title: 'Unmap Page', canActivate: [AdminAuthGuard]},
  { path: 'chat-component', component: ChatComponent, title: 'Chat Page'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
