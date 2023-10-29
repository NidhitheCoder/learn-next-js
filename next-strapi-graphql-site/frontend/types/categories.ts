interface CategoryIcon {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface CategoryData {
  id: string;
  attributes: {
    name: string;
    color: string;
    icon: CategoryIcon;
  };
}

export interface Categories {
  data: CategoryData[];
}
