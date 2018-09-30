import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
tab = [null,null,null];
  constructor() { }

  ngOnInit() {
  }

  onShowDetail(no) {
  if(this.tab[no] !== no){
   this.tab[no] = no;
  } else {
    this.tab[no] = null;
  }
  }

}
