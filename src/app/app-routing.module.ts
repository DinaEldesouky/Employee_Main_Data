import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDataComponent } from './Components/Setup/master-data/master-data.component';
import { MasterFinancialComponent } from './Components/Setup/master-financial/master-financial.component';
import { MasterJobComponent } from './Components/Setup/master-job/master-job.component';
import { MasterOtherComponent } from './Components/Setup/master-other/master-other.component';

const routes: Routes = [
  { path: '', redirectTo: '/masterData', pathMatch: 'full' },
  { path: 'masterData', component: MasterDataComponent },
  { path: 'masterJob', component: MasterJobComponent },
  { path: 'masterFin', component: MasterFinancialComponent },
  { path: 'masterOther', component: MasterOtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
