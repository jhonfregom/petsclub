import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesDetailPage } from './pages-detail';

@NgModule({
  declarations: [
    PagesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesDetailPage),
  ],
})
export class PagesDetailPageModule {}
