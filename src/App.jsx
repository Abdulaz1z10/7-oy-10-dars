import React from 'react'
import Header from './features/Header/Header'
import Collection from './features/Collection/Collection';
import Creators from './features/Creators/Creators';
import Categories from './features/Categories/Categories';
import Discover from './features/Discover/Discover';
import Mashroom from './features/Mashroom/Mashroom';
import Works from './features/Works/Works';
import Footer from './features/Footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Collection/>
      <Creators/>
      <Categories/>
      <Discover/>
      <Mashroom/>
      <Works/>
      <Footer/>
    </div>
  );
}
