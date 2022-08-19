import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent implements OnInit {
  employeeData:any
 empid:any
 empldata:any
  constructor(private loginData:LoginServiceService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(params=>{
    //   this.employeeData=params.get('details') //+ string to number
    //   console.log("hgfyusehgfuehf",this.employeeData)
    
// })
this.employeeData=localStorage.getItem('data')

this.empldata=JSON.parse(this.employeeData)
console.log("drdhtrgfyhtftf",this.empldata)
this.empid = localStorage.getItem('empId')
console.log("drdhtrgfyhtftf",this.empid)

  }




 
}
