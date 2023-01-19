import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/Layout/sidebar/sidebar.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { HomeComponent } from './Components/Layout/home/home.component';

import { MasterJobComponent } from './Components/Setup/master-job/master-job.component';
import { MasterFinancialComponent } from './Components/Setup/master-financial/master-financial.component';
import { MasterOtherComponent } from './Components/Setup/master-other/master-other.component';
import { NavtabsComponent } from './Components/Shared/navtabs/navtabs.component';
import { SubheaderComponent } from './Components/Shared/subheader/subheader.component';
import { MasterDataComponent } from './Components/Setup/master-data/master-data.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
    MasterJobComponent,
    MasterFinancialComponent,
    MasterOtherComponent,
    NavtabsComponent,
    SubheaderComponent,
    MasterDataComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
