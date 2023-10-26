import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCategoryList extends Schema.Component {
  collectionName: 'components_components_category_lists';
  info: {
    displayName: 'CategoryList';
    icon: 'bulletList';
  };
  attributes: {
    categories: Attribute.Relation<
      'components.category-list',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ComponentsNavbar extends Schema.Component {
  collectionName: 'components_components_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'filter';
    description: '';
  };
  attributes: {
    backLabel: Attribute.String;
    pageTitle: Attribute.String;
    ItemsLabel: Attribute.String;
    backURL: Attribute.Relation<
      'components.navbar',
      'oneToOne',
      'api::path.path'
    >;
  };
}

export interface ComponentsSelletItem extends Schema.Component {
  collectionName: 'components_components_sellet_items';
  info: {
    displayName: 'SelletItem';
    icon: 'user';
  };
  attributes: {
    closeIcon: Attribute.Media;
    phoneLabel: Attribute.String;
    detailsHeader: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.category-list': ComponentsCategoryList;
      'components.navbar': ComponentsNavbar;
      'components.sellet-item': ComponentsSelletItem;
    }
  }
}
