import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PersonasComponent } from './components/personas/personas.component';


const routes: Routes = [

  { path: '', component: PersonasComponent },  

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
