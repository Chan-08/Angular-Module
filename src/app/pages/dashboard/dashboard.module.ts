import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, DashboardComponent], // ✅ Import instead of declare
})
export class DashboardModule {}
