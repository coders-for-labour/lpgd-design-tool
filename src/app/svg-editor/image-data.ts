import  { ImageFile } from './image-file';

export const IMAGES: ImageFile[] = [
  {
    name: "logo", url: "assets/svg/lpgd_logo.svg", sections: [
      { id: "border", option: "fill", value: "red" },
      { id: "L", option: "fill", value: "red" },
      { id: "P", option: "fill", value: "green" },
      { id: "G", option: "fill", value: "blue" },
      { id: "D", option: "fill", value: "yellow" }
    ]
  }
];

export const FILLS: string[] = [
  "red","green","blue", "yellow"
];
