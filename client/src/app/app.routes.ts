import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MembersList } from '../features/members/members-list/members-list';
import { Messages } from '../features/messages/messages';
import { Lists } from '../features/lists/lists';
import { MemberDeatiled } from '../features/members/member-deatiled/member-deatiled';
import { authGuard } from '../core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'members', component: MembersList },
      { path: 'messages', component: Messages },
      { path: 'lists', component: Lists },
      { path: 'members:/id', component: MemberDeatiled },
    ],
  },

  { path: '**', component: Home },
];
