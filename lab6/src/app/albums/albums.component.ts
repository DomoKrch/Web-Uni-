import { Component, OnInit } from '@angular/core';
import {Album} from "../objects";
import {AlbumsServiceService} from "../albums-service.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded!: boolean;
  newAlbum: string;

  constructor(private albumsService: AlbumsServiceService) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums()
  {
    this.loaded = false;
    this.albumsService.getAlbumsService().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum()
  {
    const album = {
      title: this.newAlbum
    }

    this.loaded = false;
    this.albumsService.addAlbumService(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }

  deleteAlbum(id: number)
  {
    // @ts-ignore
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbumService(id).subscribe(() => {
      console.log(id, 'deleted');
    });
  }
}
