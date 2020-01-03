import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitComponent } from './components/commit/commit.component';

const routes: Routes = [
  { path: '', component: CommitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
