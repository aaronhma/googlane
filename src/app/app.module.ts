import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';
// Import All Angular Material Modules(https://material.angular.io/)
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

// Import HammerJS For Gesture Support
import 'hammerjs';

// Import All Of Our Components
import { AppComponent } from './app.component';
import { PgNotFndComponent } from './pg-not-fnd/pg-not-fnd.component';
import { NgFundamentalsComponent } from './ng-fundamentals/ng-fundamentals.component';
import { HomeComponent } from './home/home.component';
import { SubscribeBigComponent } from './subscribe-big/subscribe-big.component';
import { VideosComponent } from './videos/videos.component';
import { EnrollComponent } from './enroll/enroll.component';
import { PricingComponent } from './pricing/pricing.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

// Configure Routing
const appRoutes: Routes = [
  {
    path: 'home-all-labs',
    component: HomeComponent
  },
  {
    path: 'angular-fundamentals-lab',
    component: NgFundamentalsComponent
  },
  {
    path: 'subscribe/api-v1',
    component: SubscribeBigComponent
  },
  {
    path: 'ng-fundamentals',
    component: NgFundamentalsComponent
  },
  {
    path: 'home-all-labs/enroll/linux-academy',
    component: VideosComponent,
  },
  {
    path: 'home-all-labs/enroll',
    component: EnrollComponent
  },
  {
    path: 'admin',
    component: PgNotFndComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'home-all-labs/pricing',
    component: PricingComponent
  },
  {
    path: 'home-all-labs/pricing/thank-you',
    component: ThankyouComponent
  },
  // Redirect Page
  {
    path: '',
    redirectTo: 'home-all-labs',
    pathMatch: 'full'
  },
  // Error Page
  {
    path: '**',
    component: PgNotFndComponent
  }
];

// Initialize Our Imported Modules
@NgModule({
  declarations: [
    AppComponent,
    PgNotFndComponent,
    NgFundamentalsComponent,
    HomeComponent,
    SubscribeBigComponent,
    VideosComponent,
    EnrollComponent,
    PricingComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    // preloadingStrategy loads all modules first, so the person who views the site will experience faster speed
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }), // <-- uses appRoutes above
    // Initialize All Angular Material Modules(https://material.angular.io/)
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class AppModule { }
