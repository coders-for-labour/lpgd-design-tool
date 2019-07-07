export class ImageFile{
  name: string;
  url: string;
  sections: ImageSection[];
}

export class ImageSection{
  id: string;
  option: string;
  value: string;
}
