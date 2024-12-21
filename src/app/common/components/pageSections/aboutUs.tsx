import Image from 'next/image';
import circle from "../../../../../public/assets/circle.svg";

const aboutContent = [
    { icon: circle, count: '600', title: 'Projects Done', bgColor: 'bg_pink' },
    { icon: circle, count: '950', title: 'Happy Clients', bgColor: 'bg_violet' },
    { icon: circle, count: '30', title: 'Employees', bgColor: 'bg_green' }
]
export default function AboutUs() {
    return (
        <section className="page_section pb-[128px]">
            <div className="mx-auto max-w-7xl px-8">
                <div className="heading mb-8">
                    <h3>About Us</h3>
                    <p className="lg:w-2/4 mx-auto ">Think Life is a leading life insurance company providing a range of insurance policies, including critical illness, income protection, and more! We have a long history of financial strength and stability, and thousands of people across the USA trust us to secure their and their loved ones’ financial futures.</p>
                </div>
                <div className="flex md:flex-row flex-col lg:gap-y-0 gap-[38px]">
                    {aboutContent.map((item) => (
                        <div key={item.title} className={`about_card md:w-1/3 ${item.bgColor}`}>
                            <h3>{item.count}+</h3>
                            <p>{item.title}</p>
                            <Image src={item.icon} alt="" className="circle_icon" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}