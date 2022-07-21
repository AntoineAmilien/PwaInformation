import Head from 'next/head'
import Image from 'next/image'
import { BrowserView, MobileView, isBrowser, isMobile, isIOS, isSafari } from 'react-device-detect';
import React, { useState, useEffect } from 'react';
export default function Home() {

  const [valueIsBrowser, setIsBrowser] = useState(false);
  const [valueIsMobile, setIsMobile] = useState(false);
  const [valueIsIOS, setIsIOS] = useState(false);
  const [valueIsSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      console.log("iciiiii")
      setIsBrowser(true)
    }
    if (isMobile) {
      setIsMobile(true)
    }
    if (isIOS) {
      setIsIOS(true)
    }
    if (isSafari) {
      setIsSafari(true)
    }

  }, []);



  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      page index.js

      <p>valueIsBrowser = {valueIsBrowser ? <>oui</> : <>non</>}</p>
      <p>valueIsMobile = {valueIsMobile ? <>oui</> : <>non</>}</p>
      <p>valueIsIOS = {valueIsIOS ? <>oui</> : <>non</>}</p>
      <p>valueIsSafari = {valueIsSafari ? <>oui</> : <>non</>}</p>


    </div>
  )
}
