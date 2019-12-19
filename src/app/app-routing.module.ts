import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'csemain',
    loadChildren: () => import('./csemain/csemain.module').then( m => m.CsemainPageModule)
  },
  {
    path: 'eee',
    loadChildren: () => import('./eee/eee.module').then( m => m.EeePageModule)
  },
  {
    path: 'ece',
    loadChildren: () => import('./ece/ece.module').then( m => m.EcePageModule)
  },
  {
    path: 'agri',
    loadChildren: () => import('./agri/agri.module').then( m => m.AgriPageModule)
  },
  {
    path: 'eie',
    loadChildren: () => import('./eie/eie.module').then( m => m.EiePageModule)
  },
  {
    path: 'it',
    loadChildren: () => import('./it/it.module').then( m => m.ItPageModule)
  },
  {
    path: 'mech',
    loadChildren: () => import('./mech/mech.module').then( m => m.MechPageModule)
  },
  {
    path: 'civil',
    loadChildren: () => import('./civil/civil.module').then( m => m.CivilPageModule)
  },
  {
    path: 'civil1',
    loadChildren: () => import('./civil1/civil1.module').then( m => m.Civil1PageModule)
  },
  {
    path: 'civil2',
    loadChildren: () => import('./civil2/civil2.module').then( m => m.Civil2PageModule)
  },
  {
    path: 'civil3',
    loadChildren: () => import('./civil3/civil3.module').then( m => m.Civil3PageModule)
  },
  {
    path: 'civil4',
    loadChildren: () => import('./civil4/civil4.module').then( m => m.Civil4PageModule)
  },
  {
    path: 'it1',
    loadChildren: () => import('./it1/it1.module').then( m => m.It1PageModule)
  },
  {
    path: 'it2',
    loadChildren: () => import('./it2/it2.module').then( m => m.It2PageModule)
  },
  {
    path: 'it3',
    loadChildren: () => import('./it3/it3.module').then( m => m.It3PageModule)
  },
  {
    path: 'it4',
    loadChildren: () => import('./it4/it4.module').then( m => m.It4PageModule)
  },
  {
    path: 'cse1',
    loadChildren: () => import('./cse1/cse1.module').then( m => m.Cse1PageModule)
  },
  {
    path: 'cse2',
    loadChildren: () => import('./cse2/cse2.module').then( m => m.Cse2PageModule)
  },
  {
    path: 'cse3',
    loadChildren: () => import('./cse3/cse3.module').then( m => m.Cse3PageModule)
  },
  {
    path: 'cse4',
    loadChildren: () => import('./cse4/cse4.module').then( m => m.Cse4PageModule)
  },
  {
    path: 'ece1',
    loadChildren: () => import('./ece1/ece1.module').then( m => m.Ece1PageModule)
  },
  {
    path: 'ece2',
    loadChildren: () => import('./ece2/ece2.module').then( m => m.Ece2PageModule)
  },
  {
    path: 'ece3',
    loadChildren: () => import('./ece3/ece3.module').then( m => m.Ece3PageModule)
  },
  {
    path: 'ece4',
    loadChildren: () => import('./ece4/ece4.module').then( m => m.Ece4PageModule)
  },
  {
    path: 'eee1',
    loadChildren: () => import('./eee1/eee1.module').then( m => m.Eee1PageModule)
  },
  {
    path: 'eee2',
    loadChildren: () => import('./eee2/eee2.module').then( m => m.Eee2PageModule)
  },
  {
    path: 'eee3',
    loadChildren: () => import('./eee3/eee3.module').then( m => m.Eee3PageModule)
  },
  {
    path: 'eee4',
    loadChildren: () => import('./eee4/eee4.module').then( m => m.Eee4PageModule)
  },
  {
    path: 'eie1',
    loadChildren: () => import('./eie1/eie1.module').then( m => m.Eie1PageModule)
  },
  {
    path: 'eie2',
    loadChildren: () => import('./eie2/eie2.module').then( m => m.Eie2PageModule)
  },
  {
    path: 'eie3',
    loadChildren: () => import('./eie3/eie3.module').then( m => m.Eie3PageModule)
  },
  {
    path: 'eie4',
    loadChildren: () => import('./eie4/eie4.module').then( m => m.Eie4PageModule)
  },
  {
    path: 'mech1',
    loadChildren: () => import('./mech1/mech1.module').then( m => m.Mech1PageModule)
  },
  {
    path: 'mech2',
    loadChildren: () => import('./mech2/mech2.module').then( m => m.Mech2PageModule)
  },
  {
    path: 'mech3',
    loadChildren: () => import('./mech3/mech3.module').then( m => m.Mech3PageModule)
  },
  {
    path: 'mech4',
    loadChildren: () => import('./mech4/mech4.module').then( m => m.Mech4PageModule)
  },
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal.module').then( m => m.PortalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
