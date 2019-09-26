import  { ImageFile } from './image-file';

export const IMAGES: ImageFile[] = [
  {
    name: "lpgd_white", url: "assets/svg/LPGD_white.svg",
    variants:[
      {
        name: "Retro",
        sections: [
          { id: "background", option: "fill", value:"red"},
          { id: "text", option: "fill", value:"yellow"},
          { id: "logo", option: "fill", value:"yellow"}
        ]
      },
      {
        name: "Modern",
        sections: [
          { id: "background", option: "fill", value:"white"},
          { id: "text", option: "fill", value:"red"},
          { id: "logo", option: "fill", value:"red"}
        ]
      }
    ]
  },
  {
    name: "logo", url: "assets/svg/lpgd_logo.svg",
    variants: [
      {
        name: "Test 1",
        sections: [
          { id: "border", option: "fill", value: "red" },
          { id: "L", option: "fill", value: "red" },
          { id: "P", option: "fill", value: "green" },
          { id: "G", option: "fill", value: "blue" },
          { id: "D", option: "fill", value: "yellow" }
        ]
      }
    ]
  },
  {
    name: "lpgd_red", url: "assets/svg/LPGD_red.svg",
    variants: [
      {
        name: "Buckwheat",
        sections: [
          { id: "background", option: "fill", value:"red"},
          { id: "text", option: "fill", value:"white"},
          { id: "logo", option: "fill", value:"white"}
        ]
      }
    ]
  }
];

export const FILLS: string[] = [
  "red","green","blue", "yellow", "white"
];
