import React from 'react';
import ItemProduct from '../itemProduct/ItemProduct';
import ProductListTablet from '../itemProduct/ProductListTablet';
import './productList.scss';
import useSWR from 'swr';
function ProductList({ name, apiQuery }) {
  const { data } = useSWR(`http://localhost:3001/${apiQuery}`);
  return (
    <div className='productList'>
      <div className='centerName'>
        <p className='Name'>{name}</p>
      </div>

      <div className='productListMobile'>
        <ItemProduct data={data} />
      </div>

      <div className='productListTablet'>
        <ProductListTablet data={data} />
      </div>

      <a href='/#' className='linkPlus'>
        XEM THÊM
      </a>
    </div>
  );
}

export default ProductList;
