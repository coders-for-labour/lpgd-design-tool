import { Component, OnInit, OnChanges, Input, Injectable, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { IMAGES } from "./image-data";
import { FILLS } from "./image-data";
import { ImageSection, ImageFile, ImageVariant } from './image-file';
import * as svg from 'save-svg-as-png';
import css from 'css';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
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

  selectedVariant: string;

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
    this.selectedVariant = this.selectedImage.variants[0].name;
    this.setVariant(this.getVariant(this.selectedVariant));
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

  getVariant(variantName: string){
    return this.selectedImage.variants.filter(function(v){
      return v.name === variantName;
    })[0];
  }

  onVariantChange(){
    if(this.selectedVariant){
      this.setVariant(this.getVariant(this.selectedVariant));
    }
  }

  setVariant(variant: ImageVariant){
    if(variant){
      for(var i = 0; i < variant.sections.length; i++){
        SVG.get(variant.sections[i].id).fill(variant.sections[i].value);
      }
    }
  }

  urlRegex: RegExp = /url\(\W?(?<url>.*?)\W?\)/
  formatRegex: RegExp = /format\(\W?(?<fmt>.*?)\W?\)/

  getRemoteSrc(fontSrcString: string){
    return this.urlRegex.exec(fontSrcString)['groups'].url;
  }

  getFormat(fontSrcString: string){
    return this.formatRegex.exec(fontSrcString)['groups'].fmt
  }

  getDeclarationValue(declarationsArray: any, propertyName: string){
    var filtered = declarationsArray.filter(x => x.property == propertyName);
    if(filtered != undefined && filtered.length > 0){
      return filtered[0].value;
    } else{
      return "";
    }
  }

  getText(fontObj: any){

    var family = this.getDeclarationValue(fontObj.declarations, "font-family");
    var url = this.getRemoteSrc(this.getDeclarationValue(fontObj.declarations, "src"));
    //var format = this.getFormat(fontObj.declarations.filter(x => x.property == "src")[0].value);
    var style = this.getDeclarationValue(fontObj.declarations, "font-style");
    var weight = this.getDeclarationValue(fontObj.declarations, "font-weight");
    var display = this.getDeclarationValue(fontObj.declarations, "font-display");
    var unicode = this.getDeclarationValue(fontObj.declarations, "unicode-range");
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

    forkJoin(reqs).subscribe({
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
