import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateDraftModel } from '../models/create-draft';
import { DraftModel } from '../models/draft';
import { DraftTextModel } from '../models/draft-text';
import { DraftWordsModel } from '../models/draft-words';

@Injectable({
  providedIn: 'root'
})
export class PerfectItService {

  private baseURL: string = "https://intelligentediting-api.azurewebsites.net/drafts";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  convertFileToBase64(file: File) {
    return new Promise(resolve => {
      var reader = new FileReader();

      reader.onload = function () {
        resolve(reader.result);
      };

      reader.readAsDataURL(file);
    });
  }


  postDraft(base64Text: string): Observable<DraftModel> {
    return <Observable<DraftModel>>this.httpClient.post(
      this.baseURL,
      {
        fileContents: base64Text
      } as CreateDraftModel,
      this.httpOptions);
  }

  getDraft(id: number): Observable<DraftModel> {
    return <Observable<DraftModel>>this.httpClient.get(`${this.baseURL}/${id}`);
  }

  getDraftText(id: number): Observable<DraftTextModel> {
    return <Observable<DraftTextModel>>this.httpClient.get(`${this.baseURL}/${id}/Text`);
  }

  getDraftWords(id: number): Observable<DraftWordsModel> {
    return <Observable<DraftWordsModel>>this.httpClient.get(`${this.baseURL}/${id}/Words`);
  }

}
