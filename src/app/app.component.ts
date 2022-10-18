import { Component, OnInit } from '@angular/core';
import { PhonebookService, phonebook_interface } from './phonebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allPhone: phonebook_interface [] = [];
  filteredString:string='';
  totalPhone! : number;



  constructor( private phone_service:PhonebookService ) { }

  ngOnInit(): void {
    this.phone_service.getAllPhones().subscribe(res=>{
      this.allPhone=res
      console.log(this.allPhone);
  })

  this.totalPhoneCount()
}

totalPhoneCount(){
  this.phone_service.getAllPhones().subscribe(res=>{
    const  phoneCount = res.length;
    this.totalPhone = phoneCount


  })
}

}



