import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmpDebatComponent } from './cmp-debat/cmp-debat.component';
import { FormFComponent } from './form-f/form-f.component';
import { ForumComponent } from './forum/forum.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path : 'Home', component: TestComponent},
  { path : 'Forum', component: ForumComponent},
  { path : 'LetsDebate', component: TestComponent},
  { path : 'CreateDebate', component: FormFComponent},
  { path : 'DebatChoisi/:id', component: CmpDebatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
