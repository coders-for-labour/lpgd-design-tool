import { Component, OnInit } from '@angular/core';
import { IMAGES } from "../svg-editor/image-data";
import { ImageSection, ImageFile } from '../svg-editor/image-file';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any[] = IMAGES;

  selected: any;
  constructor() { }

  ngOnInit() {
    this.selected = this.images[0];
  }

  selectImage(element: any, image : any){
    this.selected = image;
    console.log(this.selected);
  }

}
