import { LoginComponent } from './component/login/login.component';
import { AddBookModule } from './component/add-book/add-book.module';
import { BookComponent } from './component/dashboard/component/book/book.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { BookdetailsComponent } from './component/book-details/book-details.component';
import { BorrowComponent } from './component/borrow/borrow.component';
import { ChartComponent } from './component/chart/chart.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { CommentComponent } from './Component/book-details/component/comment/comment.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommentTextComponent } from './Component/book-details/component/comment/comment-text/comment-text.component';
import { ActivityComponent } from './Component/activity/activity.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import {AccordionModule} from 'primeng/accordion';  
import {GalleriaModule} from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { BookImagesComponent } from './component/book-details/component/book-images/book-images.component';
import { InterceptorService } from './Common/services/interceptor.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BookListComponent,
    BookdetailsComponent,
    BorrowComponent,
    ChartComponent,
    DashboardComponent,
    CommentComponent,
    BookComponent,
    CommentTextComponent,
    ActivityComponent,
    BookImagesComponent,
    LoginComponent
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
    NzIconModule,
    ReactiveFormsModule,
    NzImageModule,
    NzDescriptionsModule,
    NzTagModule,
    NzPopoverModule,
    NzModalModule,
    NzFormModule,
    NzSelectModule,
    NzCommentModule,
    NzCheckboxModule,
    CKEditorModule,
    AddBookModule,
    NzTableModule,
    AccordionModule,
    GalleriaModule,
    ButtonModule,
    NzTabsModule,
    NzAlertModule,
    NzRadioModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
