import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component'; // Import standalone component

@NgModule({
  imports: [CommonModule, HomeRoutingModule, HomeComponent], // Import instead of declaring
})
export class HomeModule {}
