import Image from "next/image"
import short from "../../../../public/assets/short.svg"
import life from "../../../../public/assets/life.svg"
import Link from "next/link";
const offerCard = [
    { icon: short, name: 'Short-Term Disability Insurance', content: 'Unexpected illness or injury can disrupt your life and income. Our Short-Term Disability Insurance offers financial support by replacing a portion of your income during recovery. Benefit from fast approval, customizable coverage options, and peace of mind knowing that your essential expenses are covered while you focus on getting better.', href: '/' },
    { icon: life,  name: 'Term Life Insurance', content: 'Our Term Life Insurance provides affordable coverage for a specified period, ensuring your family’s financial security in the event of your passing. Choose a term length that fits your needs, with guaranteed level premiums and substantial death benefits. Plan for the future and safeguard your loved ones financial stability today.', href: '/' }
]

export default function OfferCard() {
    return (
        <>
            <div className="grid lg:grid-cols-2 lg:gap-y-0 gap-y-4 gap-x-[38px] mb-8">
                {offerCard.map((item) => (
                    <div key={item.name} className="bg-purple-50 p-4 rounded-xl pb-7">
                        <Image
                            src={item.icon}
                            alt={item.name}
                            className="object-contain mx-auto mb-5"
                            width={50}
                            height={50}
                        />
                        <h3 className="text-xl	font-bold	text-center mb-8 text-[#000000DE]">{item.name}</h3>
                        <p className="mb-11 text-center text-[#00000099] text-base font-normal">{item.content}</p>
                        <Link href={item.href} className="font-medium text_primary text-center block w-fit mx-auto">Learn more</Link>
                    </div>
                ))}
            </div>
        </>
    )
}