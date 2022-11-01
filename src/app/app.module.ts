import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhantomoCardComponent } from './phantomo-card/phantomo-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CardWithPreviewComponent } from './card-with-preview/card-with-preview.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PhantomoCardListComponent } from './phantomo-card-list/phantomo-card-list.component';
import { FooterComponent } from './footer/footer.component';
import { TwitterIconComponent } from './twitter-icon/twitter-icon.component';
import { CreditRowComponent } from './credit-row/credit-row.component';
import { PhantomoImageComponent } from './phantomo-image/phantomo-image.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PhantomoCardComponent,
    CardWithPreviewComponent,
    ToolbarComponent,
    PhantomoCardListComponent,
    FooterComponent,
    TwitterIconComponent,
    CreditRowComponent,
    PhantomoImageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
