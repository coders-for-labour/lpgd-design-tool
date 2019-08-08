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
  constructor() { }

  ngOnInit() {
  }

}
