import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  name = '';
  email = '';
  message = '';

  sendEmail() {

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    emailjs.send(
      'service_4fuqzfz',
      'template_c3i232w',
      templateParams,
      'T68B_Stnb4iEXcVws'
    ).then(() => {
      alert('Message Sent Successfully!');
      this.name = '';
      this.email = '';
      this.message = '';
    }).catch((error) => {
  console.log(error);
  alert(error.text ||JSON.stringify(error));
});
    
  }
}