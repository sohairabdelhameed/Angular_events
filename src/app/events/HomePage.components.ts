import { Component } from '@angular/core';



@Component({
  selector: 'HomePage',
  template: `
  <div class="container text-center">
  <h1>Welcome to ngEvents</h1>
  <p>Discover amazing Angular Events </p>
  <img src="'../../../assets/images/AngularJs-Frameworks.jpg" alt="About Us Image" class="background-image">
  </div>
  
    
  




  `,
styles:[
    `.background-image {
      
        max-width: 100%;
        height: auto;
        margin-top: 20px;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      p {
        font-size: 1.2rem;
      }
      
      
    `
]

})
export class HomePageComponent{

}