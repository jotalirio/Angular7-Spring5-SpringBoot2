import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientService } from '../services/client.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clients/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  },
  { 
    path: 'directives',
    component: DirectivaComponent
  },
  { 
    path: 'clients',
    component: ClientsComponent
  },
  { 
    path: 'clients/form',
    component: FormComponent
  },
  { 
    path: 'clients/form/:id',
    component: FormComponent
  }
]

@NgModule({
  declarations: [ // Components
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientsComponent,
    FormComponent
  ],
  imports: [ // Modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClientService], // Services: This services are global and they can be injected in any Component
  bootstrap: [AppComponent]
})
export class AppModule { }
