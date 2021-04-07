import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { VirtualTryonComponent } from './components/virtual-tryon/virtual-tryon.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'product', component: ProductDetailsComponent },
  { path: 'ar-vr', component:VirtualTryonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
