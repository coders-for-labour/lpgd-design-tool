import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { IMAGES } from "./image-data";
import { FILLS } from "./image-data";
import { ImageSection, ImageFile } from './image-file';
import * as svg from 'save-svg-as-png';
declare const SVG:any;

@Component({
  selector: 'app-svg-editor',
  templateUrl: './svg-editor.component.html',
  styleUrls: ['./svg-editor.component.css']
})
export class SvgEditorComponent implements OnInit, AfterViewInit {
  @Input() svgUrl;

  image: ImageFile;
  fills: string[] = FILLS;
  svgDoc: any;

  constructor() { }

  ngOnInit() {
    if(this.isKnownImage(this.svgUrl)){
      this.image = this.getImage(this.svgUrl);
    } else{
      console.log("Unknown image: " + this.svgUrl);
    }
    console.log(this.svgUrl);
  }

  ngAfterViewInit(){
      if(this.image){
        this.svgDoc = SVG(document.getElementById("canvas_" + this.image.name));
        var ctx = this;
        $.get(this.svgUrl, function(contents){
          var $tmp = $("svg", contents);
          var i = ctx.svgDoc.svg($tmp.html());

          //Ran into some scaling problems - SVGs should omit width / height and provide only viewBox
          i.viewbox(ctx.getDimensions($tmp));
          ctx.svgDoc = i;
          ctx.setDefaults();
      }, "xml");
      }
  }

  getDimensions(loadedDoc){
    if(loadedDoc.attr("viewBox")){
      return loadedDoc.attr("viewBox");
    } else{
      return {
        x: 0, y: 0, width: loadedDoc.attr("width"), height: loadedDoc.attr("height")
      }
    }
  }

  setDefaults(){
    for(var i = 0; i < this.image.sections.length; i++){
      this.setFill(this.image.sections[i], this.image.sections[i].value);
    }
  }

  isKnownImage(imageURL: string){
    return IMAGES.find(function(img){
        return img.url === imageURL;
    });
  }

  getImage(imageURL: string){
    return IMAGES.filter(function(img){
      return img.url === imageURL
    })[0];
  }

  setFill(section: ImageSection, colour: string){
    if(this.image.sections.find(function(s){
        return s.id == section.id;
    })){
      section.value = colour;
      SVG.get(section.id).fill(section.value);

      this.image.sections.filter(function(s){
        return s.id == section.id;
      })[0].value = section.value;
    }
  }

  saveToPng(){
    svg.saveSvgAsPng(document.getElementById(this.svgDoc), "image.png", { scale: 0.5});
  }
}
