import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  domains: string[] = ["Java", 'Spring','Python','AWS'];
  contact: Contact = new Contact('', '', '', '');
 
  constructor() { }

  ngOnInit(): void {
    
  }

  submit()
  {
    console.log(this.contact);
    
  }

  


}
