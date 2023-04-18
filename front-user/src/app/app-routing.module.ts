import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustumersComponent } from './custumers/custumers.component';
import { HomeComponent } from './home/home.component';
import { InnovationComponent } from './innovation/innovation.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'customers',
    component: CustumersComponent,
  },
  {
    path: 'innovation',
    component: InnovationComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
