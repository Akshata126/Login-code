import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
empData:any
empDetails:any
first = 0;
rows = 10;

  constructor(private loginData:LoginServiceService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.showdata()
  }
  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}
reset() {
  this.first = 0;
}

isLastPage(): boolean {
  return this.empData ? this.first === (this.empData.length - this.rows): true;
}

isFirstPage(): boolean {
  return this.empData ? this.first === 0 : true;}

  showdata(){
    this.loginData.getEmpData().subscribe(data=>{
      
this.empData=data
console.log("res data >>>>>>>",this.empData)

    })
       
  }

  onSelect(empdata:any){
    
    console.log("sadsdasdfasd",empdata.id)
    localStorage.setItem('data',JSON.stringify(empdata))
    localStorage.setItem('empId', empdata.id)
 this.router.navigate(['/empdata'])

  }

}
