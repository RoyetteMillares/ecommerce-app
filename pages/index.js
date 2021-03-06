import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components'


const Home = ({ productsData, bannerData }) => (


  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />


    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {productsData.map(
        (products) => <Product key={products._id} product={products} />
      )}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>

)


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const productsData = await client.fetch(query)


  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      productsData, bannerData
    }
  }
}

export default Home