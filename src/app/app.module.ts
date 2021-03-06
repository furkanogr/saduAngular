import { SdurumKargoOdemeDialogComponent } from './components/dialogs/sdurumKargoOdeme-dialog/sdurumKargoOdeme-dialog.component';
import { SdurumOdemeKargoComponent } from './components/sdurum-odeme-kargo/sdurum-odeme-kargo.component';
import { AdminSiparislerComponent } from './components/admin-siparisler/admin-siparisler.component';
import { UyeDetaylarComponent } from './components/dialogs/uye-detaylar/uye-detaylar.component';
import { TedarikciDetayComponent } from './components/dialogs/tedarikci-detay/tedarikci-detay.component';
import { SiparisduzenleDialogComponent } from './components/dialogs/siparisduzenle-dialog/siparisduzenle-dialog.component';
import { SiparisDialogComponent } from './components/dialogs/siparis-dialog/siparis-dialog.component';
import { SiparisComponent } from './components/Siparis/Siparis.component';
import { UrunAraComponent } from './components/urunAra/urunAra.component';
import { KategoriListeleComponent } from './components/KategoriListele/KategoriListele.component';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { HesabimComponent } from './components/hesabim/hesabim.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UrunDialogComponent } from './components/dialogs/urun-dialog/urun-dialog.component';
import { UyeListeComponent } from './components/uyeListe/uyeListe.component';
import { UrunfotoDialogComponent } from './components/dialogs/urunfoto-dialog/urunfoto-dialog.component';
import { FotoyukleDialogComponent } from './components/dialogs/fotoyukle-dialog/fotoyukle-dialog.component';
import { IletisimDialogComponent } from './components/dialogs/iletisim-dialog/iletisim-dialog.component';
import { TedarikDialogComponent } from './components/dialogs/tedarik-dialog/tedarik-dialog.component';
import { UrunComponent } from './components/Urun/Urun.component';
import { UyeComponent } from './components/Uye/Uye.component';
import { ApiService } from './services/api.service';

import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { MyAlertService } from './services/myAlert.service';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { UyeDialogComponent } from './components/dialogs/uye-dialog/uye-dialog.component';
import { UrunListeComponent } from './components/urunListe/urunListe.component';
import { KategoriDialogComponent } from './components/dialogs/kategori-dialog/kategori-dialog.component';
import { AuthGuard } from './services/AuthGuard';
import { AuthInterceptor } from './services/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    UyeComponent,
    UrunComponent,
    UrunListeComponent,
    UyeListeComponent,
    LoginComponent,
    RegisterComponent,
    HesabimComponent,
    KategorilerComponent,
    KategoriListeleComponent,
    UrunAraComponent,
    SiparisComponent,
    AdminSiparislerComponent,
    SdurumOdemeKargoComponent,


    //Dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent,
    UyeDialogComponent,
    TedarikDialogComponent,
    IletisimDialogComponent,
    FotoyukleDialogComponent,
    UrunfotoDialogComponent,
    UrunDialogComponent,
    KategoriDialogComponent,
    SiparisDialogComponent,
    SiparisduzenleDialogComponent,
    TedarikciDetayComponent,
    UyeDetaylarComponent,
    SdurumKargoOdemeDialogComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent,
    UyeDialogComponent,
    TedarikDialogComponent,
    IletisimDialogComponent,
    IletisimDialogComponent,
    UrunfotoDialogComponent,
    UrunDialogComponent,
    KategoriDialogComponent,
    SiparisDialogComponent,
    SiparisduzenleDialogComponent,
    TedarikciDetayComponent,
    UyeDetaylarComponent,
    SdurumKargoOdemeDialogComponent


  ],
  providers: [MyAlertService, ApiService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
