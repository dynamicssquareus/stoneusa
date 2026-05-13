import React, { useState } from 'react';
import ModelBox from '@/components/ModelBox';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const FaqAccordion = ({ faqList = [] }) => {
  // console.log(faqList)
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    setOpen(open === id ? undefined : id);
  };

  const defaultFaqs = [
    {
      title: "Are you a granite headstone manufacturer or trader?",
      description: "Stone Discover is a direct manufacturer — not a broker, agent, or trading company. We own and operate our own granite processing and manufacturing facilities in India, sourcing granite blocks from our quarry base in Khammam, Telangana. Every headstone we export is factory-made by our own team and shipped directly to our international B2B buyers without any intermediary in the chain. This means you get manufacturer pricing, direct communication, and full accountability over quality.",
    },
    {
      title: "Do you supply granite headstones on a wholesale basis?",
      description: "Yes — wholesale supply is our core business model. We supply granite headstones in bulk to monument dealers, funeral homes, cemetery suppliers, memorial parks, and wholesale distributors across the USA, Canada, and other international markets. We work primarily on container-based wholesale orders and long-term supply contracts. If you are looking for a reliable, recurring supply of granite headstones at competitive wholesale pricing, we are set up exactly for that.",
    },
    {
      title: "Which countries do you export granite headstones to?",
      description: "Our primary export markets are the USA and Canada, where we have established supply relationships with monument dealers and wholesale distributors. We also export regularly to Australia, the United Kingdom, Germany, France, Ireland, and New Zealand. For North American buyers, we ship to major ports including Los Angeles, Houston, New York, and Vancouver. If your market is not listed here, contact us — we have shipped to over 70 countries and can discuss logistics for most destinations.",
    },
    {
      title: "Do you manufacture black granite headstones?",
      description: "Yes. Absolute Black granite headstones are our most exported product line, particularly to the USA and Canada where black granite is the dominant material in most cemetery markets. Our Absolute Black granite is sourced from quarries in Telangana and is Grade A monument quality — dense, low-porosity, with a consistent deep black surface that holds its polish outdoors for decades. We also manufacture headstones in Steel Grey, Bahama Blue, Imperial Red, Viscount White, and other Indian granite varieties on request.",
    },
    {
      title: "What different varieties of Headstones do you offer?",
      description: "Our full product range includes upright headstones (standard and bevel), angel headstones, flat grave markers, book headstones, kerb sets, headstone vases, memorial benches, and columbarium units. All products are available in multiple granite colors and can be supplied plain (blank) or with custom engraving. We can also produce bespoke designs — custom shapes, sculpted figures, religious motifs, and non-standard sizes — on request, with minimum order quantities depending on the design complexity.",
    },
    {
      title: "Can you supply granite blank headstones for local engraving?",
      description: "Yes, and this is one of our most popular services for dealers in the USA and Canada. We supply polished blank granite headstones — upright, flat, bevel, and slant styles — in standard US and Canadian cemetery dimensions, ready for local sandblast or laser engraving. Buying blank from us gives you the cost advantage of Indian manufacturing while retaining full control over the lettering and personalization process at your end. Contact us for blank headstone pricing and available dimensions.",
    },
    {
      title: "What is your minimum order quantity (MOQ)?",
      description: "Our standard MOQ starts at 10 pieces per design for wholesale orders. For full container (FCL) orders, we recommend a mixed order of 50 or more pieces across product types to maximise container efficiency and shipping value. For bespoke or custom-carved designs, higher minimums may apply depending on the complexity of the fabrication. We are happy to discuss MOQ flexibility for buyers placing their first order or testing a new product line — reach out and we will find a workable arrangement.",
    },
    {
      title: "How are granite headstones packed for export?",
      description: "Every headstone is packed in a fumigated wooden crate — required for US and Canadian customs clearance — with internal foam separators, acid-free plastic wrapping around polished surfaces, and corner protection on all edges. The crating design is tested specifically for FCL and LCL ocean freight conditions. Polished black granite surfaces are additionally wrapped with acid-free film to prevent moisture and tannin staining from the wood during long-haul shipping. We have a near-zero damage rate on delivered shipments as a result of this process.",
    },
    {
      title: "How can I request wholesale pricing or a product catalog?",
      description: "The simplest way is to use the 'Request a Trade Quote' button on this page, or to call or WhatsApp our US sales line at +1 (858) 293-5368. Alternatively, email us at info@stonediscover.com with your product requirements, target market, and estimated volumes, and we will send you our current wholesale pricing sheet and product catalogue within 24 hours. We are also happy to arrange a call with our export team if you prefer to discuss your requirements directly.",
    },
    {
      title: "What is your production lead time for bulk granite headstone orders?",
      description: "Standard bulk orders — typically 50 to 200 pieces — are completed within 8 to 10 weeks from confirmed payment receipt. This includes block sourcing and inspection, cutting and shaping, polishing and finishing, engraving (if applicable), quality checks, and export packaging. We provide a production schedule at the time of order confirmation and send you photo updates at the polishing and packing stages. Shipping time from India to US and Canadian ports adds a further 4 to 6 weeks depending on the destination port.",
    },
    {
      title: "What quality standards do you follow?",
      description: "Yes, Stone Discover is an ISO 9001 certified manufacturer. Our quality management system covers every stage of production — from incoming block inspection at the quarry through to final pre-shipment inspection at our facility. Each order undergoes a documented multi-point check covering dimensional tolerances, surface finish consistency, structural integrity, and packaging quality before dispatch. For buyers with specific cemetery or regulatory standards in their market, we are happy to discuss custom QC requirements.",
    },

  ];

  const validFaqList = faqList?.filter(
    item => item.title?.trim() && item.description?.trim()
  );

  const items = validFaqList && validFaqList.length > 0 ? validFaqList : defaultFaqs;

  return (
    <div className="form-left">
      <div className="accordion-one">
        <Accordion open={open} toggle={toggle}>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader targetId={`${index + 1}`}>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h3>{item.title}</h3>
                </div>
              </AccordionHeader>
              <AccordionBody accordionId={`${index + 1}`}>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* <div className="text-right-row">
        <a href="/" className="btn btn-four m-t-30">
          Read More
        </a>
      </div> */}
      <div className="text-center" style={{paddingTop:'30px'}}>
        <ModelBox className="btn-three" headerText="Scale Your Store!" buttonText="More Enquiry" />
      </div>
    </div>
  );
};

export default FaqAccordion;
