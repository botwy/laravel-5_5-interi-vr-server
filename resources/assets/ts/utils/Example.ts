import ProductFilter from './ProductFilter';

export const test = () => {
  const productFilter = ProductFilter.init(1, '111');

  console.log(productFilter);
  console.log(productFilter.match({clientId: '112'}));
}