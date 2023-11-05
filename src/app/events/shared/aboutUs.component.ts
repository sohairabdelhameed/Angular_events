import { Component } from '@angular/core';


@Component({
  selector: 'about-us',
  template: `
  
  <div class="container">
  <h2>Angular Events </h2>
  <p>Welcome to our amazing company. All About Angular Events</p>
  <img src="'../../../assets/images/Whats-new-in-Angular12.jpg" alt="About Us Image" class="about-us-image">
</div>

  `,
styles:[
    `.about-us-image {
        max-width: 100%;
        height: auto;
        margin-top: 20px;
      }
      
    `
]

})
export class AboutUsComponent{

}