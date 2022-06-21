import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageStoreComponent } from './manage-store/manage-store.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { StoreDetailsComponent } from './store-details/store-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'stores/:storeId', component: StoreDetailsComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'manageStoreDetails', component:ManageStoreComponent},
  {path: 'profile', component: ProfileManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
