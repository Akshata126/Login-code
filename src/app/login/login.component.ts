import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginServiceService } from '../login-service.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { Router } from '@angular/router';
import { compilePipeFromMetadata } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  userdata:any
 
  
  constructor( private formBuilder: FormBuilder,private loginData:LoginServiceService,private router: Router) {}
    
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

 
  get f() { return this.loginForm.controls;
  console.log(this.loginForm) }

  onSubmit() {
    this.submitted=true

    if (this.loginForm.invalid) {
      return;
  }
   
    this.userdata={
      user_id: this.loginForm.value.email,
      password:this.loginForm.value.password
    }   

this.loginData.userLogin(this.userdata).subscribe(data=>{
  console.log("res data >>>>>>",data)
  if(data!="" && data!=null){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data))
    this.router.navigate(['/home']);
  }else{
    alert('Please enter valid credentials!')
  }
  

})
    

}


dataClear(){
  this.userdata=" "
}

    

}

