import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DomainsService} from '../domains.service';
import{ Router} from '@angular/router';
import {UsersService} from '../users.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'domain-dashboard',
  templateUrl: './domain-dashboard.component.html',
  styleUrls: ['./domain-dashboard.component.css']
})
export class DomainDashboardComponent implements OnInit {

   domain: string;
  constructor(private http:Http, private domainService:DomainsService,
     private route:Router) { 
  }
  response = []
  suggestions = []
  cart =[]

onKeyUp(){
	console.log(this.domain);
}
  ngOnInit() {
  }

      title = 'Domains';  

      domStr(item){
        let str = item;
          let n = str.indexOf(".");
       return str.substr(0, n);
      }

    //data
    onSubmit(values)	{
      console.log(values);
       let res = this.domStr(values.name);

        console.log(res);
       let dom1 = res + '.com';
       let dom2 = res + '.de';
       let dom3 = res + '.org';
       let dom4 = res + '.club';
       let dom5 = res + '.xyz';

      let arr = [dom1,dom2,dom3,dom4,dom5];
      this.http.post('/domain/domainStatus', {arr}).map(res=>res.json()).subscribe(res=>{
          console.log(res.data);
          if(this.response.length ==0){
                      this.response.push(res.data.responses[0])
                   this.suggestions.push(res.data.responses[1])
                   this.suggestions.push(res.data.responses[2])
                   this.suggestions.push(res.data.responses[3])
                   this.suggestions.push(res.data.responses[4])
          }else if(this.response.length>0){
            this.response = [];
            this.suggestions = [];
             this.response.push(res.data.responses[0])
             this.suggestions.push(res.data.responses[1])
             this.suggestions.push(res.data.responses[2])
             this.suggestions.push(res.data.responses[3])
             this.suggestions.push(res.data.responses[4])

          }
          });

}
        addToCart(item){
          this.cart.push(item);
          this.domainService.cart.push(item);
          for(let i=0;i<this.suggestions.length;i++){
            if (this.suggestions[i].domainName == item) {
                this.suggestions.splice(i, 1);
                break;
         }
          }
          console.log(this.cart);
        }

        OrderCart(cart){
          //saving to domain service
          if(this.cart.length>0){
             this.domainService.saveCart(this.cart);
          }
          this.route.navigate(['../new']);

        }
        clearCart(){
          this.cart = [];
          this.domainService.clearCart();
        }

}
