import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { BookListComponent } from './component/book-list/book-list.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    DpDatePickerModule,
    NzInputModule,
    BrowserModule,
    RouterModule,
    ChartsModule,
    NzGridModule,
    NzPageHeaderModule,
    NzCardModule,
    NzAvatarModule,
    NzDropDownModule,
    NzListModule,
    NzSpaceModule,
    NzRateModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzPaginationModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
