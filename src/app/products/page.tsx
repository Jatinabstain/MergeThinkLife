import Header from '../common/header';
import Footer from '../common/footer';
import { bigCardItem } from '@/types/bigCardItem';
import BigCard from '../common/components/bigCard/bigCard';
import short from '../../../public/assets/short.svg';
import life from '../../../public/assets/life.svg';
import type { Metadata } from 'next';

const bigCards: bigCardItem[] = [
    {
      icon: short,
      name: 'Short-Term Disability Insurance',
      content: `Life can be unpredictable, but your income doesn’t have to be. Our
      Short-Term Disability Insurance provides essential financial support by replacing a portion of your income if you become unable to work due to illness or injury. This coverage ensures that your essential expenses, such as mortgage payments, utility bills, and groceries, are taken care of while you focus on recovery. Benefit from fast approval, affordable premiums, and customizable options to fit your lifestyle and budget. Whether you are a freelancer or an employee, our Short-Term Disability Insurance gives you the peace of mind that comes with knowing your financial well-being is protected during harsh times.`,
      href: 'short-term-disability-insurance',
    },
    {
      icon: life,
      name: 'Term Life Insurance',
      content: `Our Term Life Insurance provides an affordable and straightforward way to protect your family’s financial future. This policy offers coverage for a specified period, typically ranging from 10 to 30 years. In the unfortunate event of your passing during the term, your beneficiaries will receive a substantial death benefit to help cover expenses such as mortgage payments, education costs, and everyday living expenses. With guaranteed level premiums and flexible term lengths, you can choose the coverage that fits your unique needs and budget. Our policies offer peace of mind with comprehensive protection. Plan for tomorrow and ensure your loved ones’ financial stability today.`,
      href: 'term-life-insurance',
    },
];
  
export const metadata: Metadata = {
    title: 'Our Products - Think Life',
    description: 'Our Products',
}
  

export default function products() {
    return (
        <>
            <Header />
            <section className="page_section pb-[128px] pt-16">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="page_heading mb-[105px]">
                        <h3>Our <span>Products</span></h3>
                    </div>

                    <div className="products">
                        <BigCard bigCard={bigCards} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}