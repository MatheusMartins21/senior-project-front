import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ItemsComponent } from './items/items.component'
import { ItemsCreateComponent } from './items-create/items-create.component'
import { ItemsUpdateComponent } from './items-update/items-update.component'
import { AboutComponent } from './about/about.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'create-items', component: ItemsCreateComponent },
  { path: 'update-items', component: ItemsUpdateComponent },
  { path: 'about', component: AboutComponent }
]

