"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Form from "next/form";
import Header from "./common/header";
// import Loader from "./common/components/loader/loader";
import bannerImg from '../../public/assets/banner-img.png'
import Footer from "./common/footer";
import Link from "next/link";
import AboutUs from "./common/components/pageSections/aboutUs";
import Reviews from "./common/components/pageSections/reviews";
import Faq from "./common/components/pageSections/faq";
import ArticlesHome from "./common/components/pageSections/articlesHome";
import { bigCardItem } from '@/types/bigCardItem';
import BigCard from './common/components/bigCard/bigCard';
import Benefits from './common/components/benefits/benefits';
import short from '../../public/assets/short.svg';
import life from '../../public/assets/life.svg';
import { MainModal } from './common/components/MainModal/MainModal';

const bigCards: bigCardItem[] = [
    { icon: short, name: 'Short-Term Disability Insurance', content: 'Unexpected illness or injury can disrupt your life and income. Our Short-Term Disability Insurance offers financial support by replacing a portion of your income during recovery. Benefit from fast approval, customizable coverage options, and peace of mind knowing that your essential expenses are covered while you focus on getting better.', href: 'short-term-disability-insurance' },
    { icon: life, name: 'Term Life Insurance', content: "Our Term Life Insurance provides affordable coverage for a specified period, ensuring your family’s financial security in the event of your passing. Choose a term length that fits your needs, with guaranteed level premiums and substantial death benefits. Plan for the future and safeguard your loved ones' financial stability today.", href: 'term-life-insurance' },
]


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      {/* <Loader /> */}
      <Header />
      {/* Top banner start */}
      <section className="banner_section">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex lg:flex-row flex-col items-center lg:gap-y-0 gap-y-[38px]">
            <div className="basis-1/2">
              <div className="banner_content">
                <h1><span>Think Life,</span> <br /> Think Insurance</h1>
                <p className="mb-4">Tailored insurance policies with proper coverages and low rates. You can quote and buy your policy instantly online.</p>
                <Link href="https://quote.thinklife.com/" target='_blank' className="primary_fill_big">Get Started</Link>
              </div>
            </div>
            <div className="basis-1/1">
              <div className="banner_img">
                <Image
                  src={bannerImg}
                  alt=""
                  className='md:min-h-[454px]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top banner end */}

      {/* Search form start*/}
      <section className="search_form_bg">
        <div className="mx-auto max-w-[1200px] lg:px-8">
          <Form action=''>
            <div className="flex flex-wrap gap-y-5 items-center">
              <div className="form-group md:px-[19px] lg:basis-1/6 md:basis-1/3 w-full lg:ps-0">
                <label htmlFor="fName" className="form-label md:left-[21px] left-5">First Name</label>
                <input type="text" id="fName" className="form-control" placeholder="First Name" />
              </div>
              <div className="form-group md:px-[19px] lg:basis-1/6 md:basis-1/3 w-full">
                <label htmlFor="lName" className="form-label md:left-[40px] left-5">Last Name</label>
                <input type="text" id="lName" className="form-control" placeholder="Last Name" />
              </div>
              <div className="form-group md:px-[19px] lg:basis-1/6 md:basis-1/3 w-full">
                <label htmlFor="lName" className="form-label md:left-[40px] left-5">Email</label>
                <input type="text" id="lName" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group md:px-[19px] lg:basis-1/3 md:basis-8/12 w-full">
                <label htmlFor="insuranceType" className="form-label md:left-[40px] left-5">Insurance Type</label>
                <select id="insuranceType" className="form-control form-select w-full">
                  <option defaultValue='0'>Please Select</option>
                  <option value="1">Insurance Type</option>
                  <option value="2">Short-Term Disability</option>
                  <option value="3">Term Life</option>
                </select>
              </div>
              <div className="lg:basis-1/6 md:basis-1/3 w-full">
                <div className="form-group md:px-[19px] lg:pe-0">
                  <button onClick={openModal} className="btn_outline_big w-full">Continue</button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </section>
      <MainModal isOpen={isModalOpen} onClose={closeModal} />
      {/* Search form end*/}

      {/* How it works start */}
      <section className="page_section pt-[100px] pb-[128px]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="heading mb-8">
            <h2>How It Works</h2>
            <p>Getting life insurance with our company is easy. Heret&apos;s how it works:</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-y-0 gap-[38px] mb-8">
            <div className="bg_violet py-[26px] px-[42.5px] rounded-xl how_work_card">
              <div className="card_icon bg_primary300 w-[59px] h-[59px] rounded-xl flex items-center justify-center mb-9 mx-auto">
                <p className="text_primary text-[50px] font-bold">1</p>
              </div>
              <div className="content">
                <h3 className="font-black text-[#000000DE] text-2xl text-center mb-[19px]">Apply</h3>
                <p className="text-center">Choose your coverage and apply. Fill out the application with more detailed information about yourself, your health, and your lifestyle.</p>
              </div>
            </div>
            <div className="bg_violet py-[26px] px-[42.5px] rounded-xl how_work_card">
              <div className="card_icon bg_primary300 w-[59px] h-[59px] rounded-xl flex items-center justify-center mb-9 mx-auto">
                <p className="text_primary text-[50px] font-bold">2</p>
              </div>
              <div className="content">
                <h3 className="font-black text-[#000000DE] text-2xl text-center mb-[19px]">Get a Quote</h3>
                <p className="text-center">Provide some basic information to get an estimated premium amount and coverage options.</p>
              </div>
            </div>
            <div className="bg_violet py-[26px] px-[42.5px] rounded-xl how_work_card">
              <div className="card_icon bg_primary300 w-[59px] h-[59px] rounded-xl flex items-center justify-center mb-9 mx-auto">
                <p className="text_primary text-[50px] font-bold">3</p>
              </div>
              <div className="content">
                <h3 className="font-black text-[#000000DE] text-2xl text-center mb-[19px]">Get Covered</h3>
                <p className="text-center">Receive confirmation and a policy document after we process your application and payment.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <Link href="how-it-works" className="primary_fill_outline">Learn More</Link>
            <Link href="https://quote.thinklife.com/" target='_blank' className="primary_fill">Get Started</Link>
          </div>
        </div>
      </section>
      {/* How it works end */}

      {/* What We Offer Start */}
      <section className="page_section pb-[128px]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="heading mb-8">
            <h3>What We Offer</h3>
            <p className="lg:w-2/4 mx-auto">Life insurance is a must if your loved ones are financially dependent on you. It shields your beneficiaries from unforeseen circumstances and supports them through a painful time of loss.</p>
          </div>
          <BigCard bigCard={bigCards} />
        </div>
      </section>
      {/* What We Offer End */}

      {/* Benefits Start */}
      <section className="page_section pb-[128px]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="heading mb-8">
            <h3>Benefits</h3>
            <p className="lg:w-2/4 mx-auto ">We know that buying insurance can be confusing, especially when you have to deal with a lot of jargon and legalese. Wet&apos;ve made it our mission to make the process as easy and straightforward as possible.</p>
            <br />
            <p className="lg:w-2/4 mx-auto">With us, you get:</p>
          </div>
          <Benefits />
        </div>
      </section>
      {/* Benefits End */}

      {/* About Us Start */}
        <AboutUs />
      {/* About Us End */}
      
      {/* Reviews Start */}
        <Reviews />
      {/* Reviews End */}
      
      {/* Faq Start */}
        <Faq />
      {/* Faq End */}
      
      {/* Articles Start */}
        <ArticlesHome />
      {/* Articles End */}

      <Footer />
    </>

  );
}
