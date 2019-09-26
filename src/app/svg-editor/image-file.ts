export class ImageFile{
  name: string;
  url: string;
  variants: ImageVariant[];
}

export class ImageVariant{
  name: string;
  sections: ImageSection[];
}

export class ImageSection{
  id: string;
  option: string;
  value: string;
}
