import { Component, OnInit } from '@angular/core';
import { SchtrompfService } from 'src/app/services/schtrompf.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-schtrompf',
  templateUrl: './add-schtrompf.component.html',
  styleUrls: ['./add-schtrompf.component.css']
})
export class AddSchtrompfComponent implements OnInit {
  
    message = '';
    schtrompf : any = {
      login : '',
      password : ''
    };
  

    constructor(private schtrompfService: SchtrompfService, private route: Router) { }
  
    ngOnInit(): void {
    }
  
    login() : void {
      console.log(this.schtrompf)
      this.schtrompfService.login(this.schtrompf)
      .subscribe(
        data => {
          console.log(data);
          this.route.navigate([`schtrompf/${data._id}`]);
        },
        error => {
          this.message = error.error
          console.log(error);
        });
   }

      
  
  }