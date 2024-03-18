import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { getAllFAQs } from "@/api/fetchFAQ.ts";
import { FAQ } from "@/types";

const Faq = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    getAllFAQs().then(
      data => {
        setFaqs(data)
      }
    )
  }, []);

  return (
    <div className="bg-lightblue">
      <div className="container py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto text-3xl font-semibold">
          Tez-tez so'raladigan savollar
          (<span className="text-darkblue">F.A.Q.</span>)
        </h1>
        <Accordion type="single" collapsible className="w-full xl:px-56 lg:px-40 sm:px-20 px-0">
          {faqs.map((faq) => (
              <AccordionItem value={faq.id} key={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="border-l-2 border-darkblue pl-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          )}

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              <div className="border-l-2 border-darkblue pl-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
export default Faq;
