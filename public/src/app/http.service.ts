
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient){ }

  // pet
  
  allPet()                { return this._http.get('/allpet');            }
  onePet(id:any)          { return this._http.get('/onepet/'+id);        }
  newPet(body:any)        { return this._http.post('/newpet',    body);  }
  upPet(id:any,body:any)  { return this._http.post('/uppet/'+id, body);  }
  delPet(id:any)          { return this._http.get('/delpet/'+id);        } 
  allPetSorted()          { return this._http.get('/allpetsorted');      }

}
