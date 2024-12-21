import { AccordionItem } from "@/types/accordionTypes";
import Accordion from "../accordion";

const accordion: AccordionItem[] = [
    { id: '1', title: 'What is life insurance?', content: 'Life insurance is a contract between an individual and an insurer that provides protection against the financial consequences of death.' },
    { id: '2', title: 'How do I decide if I need life insurance?', content: 'There are lots of factors that go into deciding whether or not you need life insurance, including how much debt you have and how many dependents rely on you financially. But it all comes down to one question: if something happened to you tomorrow, would your family be able to keep paying their bills? If not, then yes—you should get life insurance.' },
    { id: '3', title: 'How much life insurance do I need?', content: 'A good rule of thumb is to have life insurance coverage that is equal to 10-12 times your annual income. However, this can vary depending on your personal financial situation. You should consider factors such as your debts, mortgage, education expenses, and any other financial obligations your loved ones would have in the event of your demise.' },
    { id: '4', title: 'Should I get term or permanent life insurance?', content: 'Whether to get term or permanent life insurance depends on your needs. Term life insurance covers you for a specific period of time, such as 10 or 20 years, and is often more affordable than permanent life insurance. On the other hand, permanent life insurance provides coverage for your whole life and may have a cash value component. To make the right choice, you should talk to a financial advisor or insurance agent.' },
    { id: '5', title: 'How much does life insurance cost?', content: 'The cost of life insurance depends on factors such as age, health, lifestyle, and the type of policy. Get a free quote now to determine the cost of your policy.' },
    { id: '6', title: 'What is a beneficiary?', content: 'A beneficiary is a person or entity that receives the death benefit from your life insurance policy if you pass away while the policy is in force.' }
];

export default function Faq() {
    return (
        <section className="page_section pb-[128px]">
            <div className="mx-auto max-w-7xl px-8">
                <div className="heading mb-8">
                    <h3>Frequently Asked Questions</h3>
                    <p className="lg:w-2/4 mx-auto">Getting life insurance is a big decision, and it&apos;s one you should make with care. Here are a few questions to help you understand life insurance and what it can do for you and your family.</p>
                </div>
                <Accordion accordion={accordion} />
            </div>
        </section>
    );
}