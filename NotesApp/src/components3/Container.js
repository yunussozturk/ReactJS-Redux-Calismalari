import React , { useState} from 'react';
import Header from './Header/index';
import Search from './Search/index';
import Form from './Form/index';
import Footer from './Footer/index';

import PembeNotlar from './Notlar/pembeNotlar';
import MorNotlar from './Notlar/morNotlar';
import SariNotlar from './Notlar/sariNotlar';
import MaviNotlar from './Notlar/maviNotlar';
import YesilNotlar from './Notlar/yesilNotlar';

import { useSelector } from 'react-redux';

function Container() {

  const renk = useSelector((state) => state.notes.renk)

  const items = useSelector((state) => state.notes.items)
  console.log(items)
  return (
    <>
      {renk === 'geri' && (
          <div className='container'>
            <Header />
            <Search />
            <Form />
            <Footer />
          </div>
      )}
      {renk === 'pembe' && (
        <PembeNotlar />
      )}
      {renk === 'mor' && (
        <MorNotlar />
      )}
      {renk === 'sari' && (
        <SariNotlar />
      )}
      {renk === 'mavi' && (
        <MaviNotlar />
      )}
      {renk === 'yesil' && (
        <YesilNotlar />
      )}
    </>
  )
}

export default Container