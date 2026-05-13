import React from 'react';
import Head from 'next/head';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import ImageGallery from '@/components/ImageGallery';
const VarietyGr = () => {
  return (
    <>
      <Head>
        <title>Granite Headstones & Monument Photo Gallery USA | Stone Discover USA</title>
        <meta
          name="description"
          content="Explore granite headstones and monument Photo gallery in the USA. Quality designs for monument retailers with reliable wholesale supply. Get Enquiry Now."
        />
        <link rel="canonical" href="https://www.stonediscover.com/photo-gallery/" />
        <meta property="og:locale" content="US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Granite Headstones & Monument Photo Gallery USA | Stone Discover USA" />
        <meta property="og:description" content=" Explore granite headstones and monument Photo gallery in the USA. Quality designs for monument retailers with reliable wholesale supply. Get Enquiry Now." />
        <meta property="og:url" content="https://www.stonediscover.com/photo-gallery/" />
        <meta property="og:site_name" content="Stone Discover" />
        <meta property="og:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Stone Discover" />
        <meta name="twitter:title" content=" Granite Headstones & Monument Photo Gallery USA | Stone Discover USA" />
        <meta name="twitter:description" content=" Explore granite headstones and monument Photo gallery in the USA. Quality designs for monument retailers with reliable wholesale supply. Get Enquiry Now." />
        <meta name="twitter:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />

      </Head>
      
      <section className='p-b-100 p-t-80 m-p-07'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                 <h1 style={{fontWeight:'bold'}} className='m-b-30'>Photo Gallery of <span>Granite Headstones and Monuments</span></h1>
              </div>
            </div>
          </div>
          <ImageGallery />
        </div>
      </section>

      <section className='p-t-20'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Partner with a Trusted <span>Granite Monuments Exporter</span></h2>
                <p>Whether you are sourcing in bulk or expanding your memorial range, Stone Discover supports your business with reliable granite headstones supply, consistent quality, and export expertise. We work closely with memorial dealers and retailers worldwide to ensure long-term supply partnerships built on trust and performance.</p>
              </div>
              <div className='button-center-new text-center'>
                <ModelBox className='btn-three' headerText="Scale Your Store! " buttonText="Request a Quote" />
                <a className='btn-four btn-four-cc' href="/catalog-download">Request Catalogue</a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VarietyGr;
