import { Component, OnInit } from '@angular/core';
import { SchtrompfService } from 'src/app/services/schtrompf.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

message = '';
schtrompf : any = {
      login : '',
      password : '',
      age : '',
      famille : '',
      race : '',
      nourriture : ''
    };
 

  constructor(private schtrompfService : SchtrompfService, private route: Router) { }

  ngOnInit(): void {
    
  }

  register(form: NgForm) : void {

    if (form.valid){
      this.schtrompf = form.value
      this.message = 'Schtrompf ajouté'
    
    this.schtrompfService.create(this.schtrompf).subscribe(
      data => {
        console.log(data);
        this.route.navigate([`login`]);
      },
      error => {
       this.message = error.error
        console.log(error);
      });
    } else {
      this.message = 'Veillez remplir correctement les champs'
    }
  }

}
