import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './1 - presentation/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './3 - infra/interceptors/auth.interceptor';
import { LogoutComponent } from './1 - presentation/account/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    LayoutModule,

  ],
  providers: [HttpClient,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
