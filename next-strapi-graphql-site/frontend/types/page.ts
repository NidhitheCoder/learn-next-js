import { Categories } from "./categories";

interface PathData {
  attributes: {
    pathName: string;
    pathURL: string;
  };
}

interface NavbarComponentProps {
  backLabel: string;
  backURL: {
    data: {};
  };
  pageTitle: "string";
  itemsLabel: string;
}

type Section = Categories | NavbarComponentProps;

interface Pages {
  attributes: {
    title: string;
    paths: {
      data: PathData[];
    };
    sections: Section[];
  };
}
