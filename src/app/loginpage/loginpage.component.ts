import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  validateUsernameAndPassword(username: string, password: number): boolean {
    const Username = 'password';
    const Password = 'validPassword';
  
    if (username ===Username && password === password) {
      return true;
    } else {
      return false;
    }
  }
  constructor(private router: Router) { }
  verify(uname:any, pass:any){
    if (uname ==="ICT" && pass === "123") {
      this.router.navigate(['/home'])
    } else {
      alert("Wrong Pass")
    }
  }
  
}
