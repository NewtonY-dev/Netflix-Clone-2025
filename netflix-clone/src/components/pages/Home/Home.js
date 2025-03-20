import React from 'react'
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer";
import Banner from '../../Banner/Banner'
import RowList from '../../Rows/RowList/RowList';
const Home = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <RowList/>
      <Footer />
    </div>
  );
}

export default Home
