import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }


getAllContacts(){
	return this.http.get('http://localhost:3000/api/contacts')
			.map(res => res.json());
}

postIt(data){
	return this.http.post('http://localhost:3000/user/authenticate',data)
			.map(res => res.json());
}


}
