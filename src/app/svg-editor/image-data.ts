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
  },
  {
    name: "lpgd red", url: "assets/svg/LPGD_red.svg", sections: [
      { id: "background", option: "fill", value:"red"},
      { id: "text", option: "fill", value:"white"},
      { id: "logo", option: "fill", value:"white"}
    ]
  },
  {
    name: "lpgd white", url: "assets/svg/LPGD_white.svg", sections: [
      { id: "background", option: "fill", value:"white"},
      { id: "text", option: "fill", value:"red"},
      { id: "logo", option: "fill", value:"red"}
    ]
  }
];

export const FILLS: string[] = [
  "red","green","blue", "yellow", "white"
];
