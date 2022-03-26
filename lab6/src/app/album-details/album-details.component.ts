import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album, Photo} from "../objects";
import {AlbumsServiceService} from "../albums-service.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album!: Album;
  loaded!: boolean;
  photos: Photo[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsServiceService) {
    this.photos = [];
  }

  ngOnInit(): void {

    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      this.albumsService.getAlbumService(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum() {
    this.loaded = false;
    this.albumsService.updateAlbumService(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }

  showPhotos() {
    this.albumsService.getAlbumPhotosService(this.album.id).subscribe((photos) => {
      this.photos = photos;
    });
  }

  goBack() {
    this.location.back();
  }
}
