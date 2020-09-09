import { Component, OnInit, Input } from '@angular/core';


  declare var $: any;
  console.log(`jQuery version: ${$.fn.jquery}`);

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



      $('img').click(function()
                  {
                      let myDiv = $(this).parent().parent().parent();
                      let myImg = $(this).parent();
                      let myP = $(this).parent().parent().find("p");
                      let myH = $(this).parent().parent().find("h1");
                      let myB = $(this).parent().parent().find("button");
                      myImg.css({
                           'width' : '50%'
                      });

                      myDiv.css({
                          'width': '80%',
                          'transform': 'translateY(0px)'
                      });

                      myDiv.hover(function(){
                        myDiv.css("transform","none")
                      });

                      myP.css({
                          'display': 'block'
                      });

                      myImg.hover(function(){
                        myH.css("opacity","1")
                      });

                      myH.css({
                          'opacity': '1'
                      });

                      myB.css({
                          'display': 'inline'
                      });


                  });

     $('.close').click(function()
                  {
                      let myDiv = $(this).parent().parent();
                      console.log(myDiv);
                      let myImg = $(this).parent().find('div');
                      console.log(myImg);
                      let myP = myDiv.find("p");
                      let myH = myDiv.find("h1");
                      let myB = $(this);

                      myImg.css({
                           'width' : '100%'
                      });

                      myDiv.css({
                          'width': '40%'
                      });

                      myP.css({
                          'display': 'none'
                      });

                      myH.css({
                          'opacity':'0'
                      });

                      myImg.hover(function(e){
                        myH.css("opacity",e.type === "mouseenter"?"1":"0")
                      });

                      myDiv.hover(function(e){
                        myDiv.css("transform",e.type === "mouseenter"?"translateY(-3px)":"none")
                      });

                      myB.css({
                          'display': 'none'
                      });
                  });
      }
}
