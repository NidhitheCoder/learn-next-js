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

interface CategoryData {
  id: string;
  attributes: {
    name: string;
    color: string;
  };
}

interface CategoryComponentProps {
  categories: {
    data: CategoryData[];
  };
}

type Section = CategoryComponentProps | NavbarComponentProps;

interface Pages {
  attributes: {
    title: string;
    paths: {
      data: PathData[];
    };
    sections: Section[];
  };
}
