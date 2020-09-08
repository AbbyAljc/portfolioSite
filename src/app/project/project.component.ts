import { Component, OnInit, Input } from '@angular/core';

function myFunction() {
    console.log("clicked");
    let popup = document.getElementById("myPopup");
    popup.style.display = "block";
    }

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() photo: string;

  constructor() { }


  ngOnInit(): void {
  }

}
