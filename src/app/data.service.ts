import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /* contacts:Contact[]=[
     {cid:'101',fullName:'Supraja',email:'suprajaa@gmail.com',mobile:'7909097871',deptName:'cse'},
     {cid:'102',fullName:'Anusha',email:'sanua@gmail.com',mobile:'7909097971',deptName:'ise'},
     {cid:'103',fullName:'Bhagya',email:'bhagyaa@gmail.com',mobile:'7909097872',deptName:'cec'},
     {cid:'104',fullName:'Supa',email:'supa@gmail.com',mobile:'7909097873',deptName:'cv'},
     {cid:'105',fullName:'Suprana',email:'suprana@gmail.com',mobile:'7909097875',deptName:'cs'},
     {cid:'106',fullName:'Supra',email:'supra@gmail.com',mobile:'7909097876',deptName:'ae'},
     {cid:'107',fullName:'Supsra',email:'suprasra@gmail.com',mobile:'7909097877',deptName:'eee'},
     {cid:'108',fullName:'Praja',email:'prajaa@gmail.com',mobile:'7909097878',deptName:'me'}
 
   
   ]*/

  constructor(private http: HttpClient) { }
  getContactData(): Observable<Contact[]> {
    return this.http.get<Contact[]>("http://bhagscbook.herokuapp.com/contacts");

  }
}
