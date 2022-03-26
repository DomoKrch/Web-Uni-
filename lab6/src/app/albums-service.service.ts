import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, Photo} from "./objects";

@Injectable({
  providedIn: 'root'
})
export class AlbumsServiceService {

  constructor(private client: HttpClient) { }

  getAlbumsService(): Observable<Album[]>
  {
    return this.client.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`);
  }

  getAlbumService(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  addAlbumService(album: Album): Observable<Album> {
    return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums`, album);
  }

  updateAlbumService(album: Album): Observable<Album> {
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/posts/${album.id}`, album);
  }

  deleteAlbumService(id: number): Observable<any> {
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getAlbumPhotosService(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
