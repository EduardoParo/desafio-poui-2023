import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesModule } from './features/categories/categories.module';
import { EntriesModule } from './features/entries/entries.module';
import { HomeModule } from './features/home/home.module';

const routes: Routes = [
    {
        path:'home',
        loadChildren: () => import('./features/home/home.module')
            .then( m => m.HomeModule)
    },
    {
        path: 'categories',
        loadChildren: () => import('./features/categories/categories.module').then(
          m => m.CategoriesModule
        )
      },
      {
        path: 'entries',
        loadChildren: () => import('./features/entries/entries.module').then(
          m => m.EntriesModule
        )
      }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports:[RouterModule]
})
export class AppRoutingModule {}