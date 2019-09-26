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
        name: "Fruit Gum",
        sections: [
          { id: "border", option: "fill", value: "red" },
          { id: "L", option: "fill", value: "red" },
          { id: "P", option: "fill", value: "green" },
          { id: "G", option: "fill", value: "blue" },
          { id: "D", option: "fill", value: "yellow" }
        ]
      },
      {
        name: "Nature",
        sections: [
          { id: "border", option: "fill", value: "green" },
          { id: "L", option: "fill", value: "green" },
          { id: "P", option: "fill", value: "green" },
          { id: "G", option: "fill", value: "green" },
          { id: "D", option: "fill", value: "green" }
        ]
      }
    ]
  },
  {
    name: "lpgd_red", url: "assets/svg/LPGD_red.svg",
    variants: [
      {
        name: "Slick",
        sections: [
          { id: "background", option: "fill", value:"red"},
          { id: "text", option: "fill", value:"white"},
          { id: "logo", option: "fill", value:"white"}
        ]
      },
      {
        name: "Corporate",
        sections: [
          { id: "background", option: "fill", value:"white"},
          { id: "text", option: "fill", value:"blue"},
          { id: "logo", option: "fill", value:"red"}
        ]
      }
    ]
  }
];

export const FILLS: string[] = [
  "red","green","blue", "yellow", "white"
];
