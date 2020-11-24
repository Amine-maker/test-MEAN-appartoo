import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchtrompfService } from 'src/app/services/schtrompf.service';

@Component({
  selector: 'app-schtrompf-details',
  templateUrl: './schtrompf-details.component.html',
  styleUrls: ['./schtrompf-details.component.css']
})
export class SchtrompfDetailsComponent implements OnInit {

  idAmi : any;
  friendList : any;
  schtrompfList : any;
  currentSchtrompf : any;
  message = '';
  

  constructor(
    private SchtrompfService: SchtrompfService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    {

    }

    this.getSchtrompf(this.route.snapshot.paramMap.get('id'));
    this.getSchtrompfs();
    this.findFriendList(this.route.snapshot.paramMap.get('id'));
    this.message = '';
   
  }


  getSchtrompfs(): void {
    this.SchtrompfService.getAll()
      .subscribe(data => {
          this.schtrompfList = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getSchtrompf(id : any): void {
    this.SchtrompfService.get(id)
      .subscribe(
        data => {
          this.currentSchtrompf = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateSchtrompf(): void {
    this.SchtrompfService.update(this.currentSchtrompf._id, this.currentSchtrompf)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Modification enregistrée';
        },
        error => {
          console.log(error);
        });
  }

  addOneSchtrompfTo() : void {
    
    this.SchtrompfService.addOneSchtrompfTo(this.currentSchtrompf._id, this.idAmi)
    .subscribe(
      response => {
        console.log(response);
        this.findFriendList(this.currentSchtrompf._id);
      },
      error => {
        console.log(error);
      });
}

  removeOneSchtrompfFrom(id : any) : void {
    this.SchtrompfService.removeOneSchtrompfFrom(this.currentSchtrompf._id, id)
    .subscribe(
      response => {
        console.log(response);
        this.findFriendList(this.currentSchtrompf._id);
      },
      error => {
        console.log(error);
      });
  }

  findFriendList(id: any) : void {
    this.SchtrompfService.findFriendList(id)
    .subscribe(
      data => {
        this.friendList = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  logout() : void {
      this.router.navigate([`login`]);
 }

}