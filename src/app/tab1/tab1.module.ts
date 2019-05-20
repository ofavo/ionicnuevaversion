import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DataService} from './services/data.service';
@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page],
  providers: [ DataService ],
})
export class Tab1PageModule {}
