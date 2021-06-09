import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TedarikciUrunler } from 'src/app/models/TedarikciUrunler';
import { ApiService } from 'src/app/services/api.service';
import { MyAlertService } from 'src/app/services/myAlert.service';

@Component({
  selector: 'app-tedarik-dialog',
  templateUrl: './tedarik-dialog.component.html',
  styleUrls: ['./tedarik-dialog.component.css']
})
export class TedarikDialogComponent implements OnInit {
  dialogBaslik:string; 
  yeniKayit:TedarikciUrunler;
  islem:string;
  frm:FormGroup;
  constructor(
    public dialogRef:MatDialogRef<TedarikDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public frmBuild:FormBuilder,
    public apiServis: ApiService,
    public matDialog: MatDialog,
    public alert: MyAlertService,
   
  ) {this.islem=data.islem;
    this.yeniKayit=data.kayit;
    if(this.islem=='ekle'){
        this.dialogBaslik="Üye Ekle"

    }

    if(this.islem=='duzenle'){
      this.dialogBaslik="Üye Düzenle"

  }
this.frm=this.FormOlustur();
   }

  ngOnInit() {

  }

  FormOlustur(){
    return this.frmBuild.group({
      Aktiflik:[this.yeniKayit.Aktiflik],
    
    })
  }
  
}
