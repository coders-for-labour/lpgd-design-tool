import { Component, OnInit, OnChanges, Input, Injectable, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { IMAGES } from "./image-data";
import { FILLS } from "./image-data";
import { ImageSection, ImageFile } from './image-file';
import * as svg from 'save-svg-as-png';
import css from 'css';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';


declare const SVG:any;

@Component({
  selector: 'app-svg-editor',
  templateUrl: './svg-editor.component.html',
  styleUrls: ['./svg-editor.component.scss']
})
@Injectable()
export class SvgEditorComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() selectedImage: ImageFile;

  svgUrl : string;
  fills: string[] = FILLS;
  svgDoc: any;
  bound: boolean = false;
  canvasId: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.initialiseImage();
  }

  initialiseImage(){
    this.svgUrl = this.selectedImage.url;
    if(this.isKnownImage(this.svgUrl)){
      this.selectedImage = this.getImage(this.svgUrl);
      this.canvasId = "canvas_svg";
    } else{
      console.log("Unknown image: " + this.svgUrl);
    }
    console.log(this.svgUrl);
  }

  ngOnChanges(){
    console.log("Changes detected.");
    this.destroyImage();
    this.initialiseImage();
    if(this.bound){
      this.bindImage();
    }
  }

  destroyImage(){
    $(`#${this.canvasId}`).empty();
    if(this.svgDoc){
      this.svgDoc.clear();
    }
  }

  bindImage(){
    if(this.selectedImage){
      this.svgDoc = SVG(this.canvasId);
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
    this.bound = true;
  }

  ngAfterViewInit(){
    console.log("View initialised");
    this.bindImage();
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
    for(var i = 0; i < this.selectedImage.sections.length; i++){
      this.setFill(this.selectedImage.sections[i], this.selectedImage.sections[i].value);
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
    if(this.selectedImage.sections.find(function(s){
        return s.id == section.id;
    })){
      section.value = colour;
      SVG.get(section.id).fill(section.value);

      this.selectedImage.sections.filter(function(s){
        return s.id == section.id;
      })[0].value = section.value;
    }
  }

  urlRegex: RegExp = /(?<=url\('?)(.*?)(?='?\))/g
  formatRegex: RegExp = /(?<=format\(')(.*?)(?='\))/g

  getRemoteSrc(fontSrcString: string){
    return fontSrcString.match(this.urlRegex)[0];
  }

  getFormat(fontSrcString: string){
    return fontSrcString.match(this.formatRegex)[0];
  }

  getText(fontObj: any){
    var family = fontObj.declarations.filter(x => x.property == "font-family")[0].value;
    var url = this.getRemoteSrc(fontObj.declarations.filter(x => x.property == "src")[0].value);
    //var format = this.getFormat(fontObj.declarations.filter(x => x.property == "src")[0].value);
    var style = fontObj.declarations.filter(x => x.property == "font-style")[0].value;
    var weight = fontObj.declarations.filter(x => x.property == "font-weight")[0].value;
    var display = fontObj.declarations.filter(x => x.property == "font-display")[0].value;
    var unicode = fontObj.declarations.filter(x => x.property == "unicode-range")[0].value;
      return `@font-face{\
        font-family: ${family};\
        src: url(${url});\
        font-style: ${style};\
        font-weight: ${weight};\
        font-display: ${display};\
        unicode-range: ${unicode};\
      }`;
  }

  getImports(){
    var urls = [];
    var ctx = this;
    $(this.svgDoc.node).find("style").each(function(i, o) {
      var u = ctx.getRemoteSrc($(o).text().replace(/['"]/g,''));
      urls.push(u);
    });
    return urls;
  }

  saveToPng(){
    this.getImports();
    var urls = this.getImports();
    var fonts = [];
    var reqs = [];
    urls.forEach(u => {
      reqs.push(this.http.get(u, {responseType: 'text'}));
    });

    Observable.forkJoin(reqs).subscribe({
      next: results => {
        results.forEach(r => {
            var p = css.parse(r);
            p.stylesheet.rules.filter(el => el.type == "font-face").forEach(element => {
              fonts.push({
                  text: this.getText(element),
                  url: this.getRemoteSrc(element.declarations.filter(x => x.property == "src")[0].value),
                  format: this.getFormat(element.declarations.filter(x => x.property == "src")[0].value)
              });
            });
        });
      },
      complete: () => {
        svg.saveSvgAsPng(document.getElementById(this.svgDoc), "image.png", { scale: 0.5, fonts: fonts });
      }
    });
  }
}
