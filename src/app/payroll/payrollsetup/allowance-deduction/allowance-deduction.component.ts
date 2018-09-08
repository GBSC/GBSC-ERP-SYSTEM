import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allowance-deduction',
  templateUrl: './allowance-deduction.component.html',
  styleUrls: ['./allowance-deduction.component.css']
})
export class AllowanceDeductionComponent implements OnInit {


  public allowancededuction : any;
  public type : any;
  public calculationtype : any;
  public arrearallowance : any;

  constructor() { }

  ngOnInit() {
    this.allowancededuction = [
      {
        id : "1",
        title : "Basic",
        fixedvalue : "111",
        expressionPayment :"abc",
        type : [{value : "Allowance", display:"Allowance"}],
        expressionForeach : "xyz",
        calcSequenceNo : "12",
        reportOrder : "1218",
        prorated : "yes",
        oneTime : "",
        baseAllowance : "yes" ,
        grossSalary : "yes",
        glCodeAllowance : "2816.7415",
        glCodeDeduction : "14.00",
        defaultCostCenter :"etc",
      },
      {
        id : "2",
        title : "Basic",
        fixedvalue : "111",
        expressionPayment :"abc",
        type : "aca",
        expressionForeach : "xyz",
        calcSequenceNo : "12",
        reportOrder : "1218",
        prorated : "yes",
        oneTime : "",
        baseAllowance : "yes" ,
        grossSalary : "yes",
        glCodeAllowance : "2816.7415",
        glCodeDeduction : "14.00",
        defaultCostCenter :"etc",
      },
      {
        id : "3",
        title : "Basic",
        fixedvalue : "111",
        expressionPayment :"abc",
        type : "aca",
        expressionForeach : "xyz",
        calcSequenceNo : "12",
        reportOrder : "1218",
        prorated : "yes",
        oneTime : "",
        baseAllowance : "yes" ,
        grossSalary : "yes",
        glCodeAllowance : "2816.7415",
        glCodeDeduction : "14.00",
        defaultCostCenter :"etc",
      }
    ]
  
  
  this.type = [{value : "Allowance", display:"Allowance"}];
  this.calculationtype = [{value : "Adjustment", display:"Adjustment"}];
  this.arrearallowance = [{value : "", display:"--Select--"}];
  
  }



}
