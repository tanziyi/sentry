import {Breadcrumb} from './types';

function convertBreadcrumbType(breadcrumb: Breadcrumb): Breadcrumb {
  // special case for 'ui.' and `sentry.` category breadcrumbs
  // TODO: find a better way to customize UI around non-schema data
  if (breadcrumb.type === 'default' && breadcrumb.category) {
    const [category, subcategory] = breadcrumb.category.split('.');
    console.log('category', breadcrumb);
    if (category === 'ui') {
      return {
        ...breadcrumb,
        type: 'user',
      };
    }

    if (category === 'console' || category === 'navigation') {
      return {
        ...breadcrumb,
        type: 'debug',
      };
    }

    if (
      category === 'sentry' &&
      (subcategory === 'transaction' || subcategory === 'event')
    ) {
      return {
        ...breadcrumb,
        type: 'error',
      };
    }
  }

  return breadcrumb;
}

export default convertBreadcrumbType;
