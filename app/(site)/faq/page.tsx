import React from "react";
import { Metadata } from "next";
import SidebarLink from "@/components/Docs/SidebarLink";
import FAQGrouped from "@/components/FAQ/FAQGrouped";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Divine Light Global Pathway",
  description: "This is FAQ page for Divine Light Global Pathway",
};

type QA = { id: number; q: string; a: string };
type Group = { id: string; title: string; items: QA[] };

const groups: Group[] = [
  {
    id: "general",
    title: "🎓 General Questions",
    items: [
      {
        id: 1,
        q: "What services does Divine Light Global Education Pathways provide?",
        a:
          "We provide complete study abroad guidance including career counseling, university selection, admission processing, documentation support, visa assistance, language test preparation guidance, and pre-departure support.",
      },
      {
        id: 2,
        q: "Which countries do you support for study abroad?",
        a:
          "We assist students planning to study in Australia, the United Kingdom (UK), Canada, Japan, and South Korea, along with other emerging study destinations.",
      },
      {
        id: 3,
        q: "Do I need to book an appointment for counseling?",
        a:
          "Yes, we recommend booking an appointment to receive personalized one-to-one counseling and proper guidance based on your academic background and career goals.",
      },
    ],
  },

  {
    id: "admission",
    title: "📚 Admission & University Process",
    items: [
      {
        id: 4,
        q: "How do you help students choose the right course and university?",
        a:
          "Our counselors analyze your academic history, budget, English proficiency, and future career plans to recommend suitable universities and programs that match your goals.",
      },
      {
        id: 5,
        q: "Can you help students with scholarship opportunities?",
        a: "Yes, we guide eligible students in applying for available scholarships and tuition fee discounts offered by universities.",
      },
      {
        id: 6,
        q: "What documents are required for study abroad applications?",
        a:
          "Common documents include academic certificates, passport, English test scores (IELTS/PTE/Japanese/Korean language), Statement of Purpose (SOP), recommendation letters, and financial documents. Requirements vary by country.",
      },
    ],
  },

  {
    id: "visa",
    title: "🛂 Visa Process",
    items: [
      {
        id: 7,
        q: "Do you provide visa processing support?",
        a: "Yes. We provide complete visa documentation guidance, application preparation, and interview support to maximize visa success chances.",
      },
      {
        id: 8,
        q: "Is visa approval guaranteed?",
        a: "No consultancy can legally guarantee visa approval. However, we provide professional guidance and accurate documentation support to improve your chances significantly.",
      },
      {
        id: 9,
        q: "How long does the visa process take?",
        a: "Visa processing time depends on the country and intake season. Typically, it can take from a few weeks to a few months.",
      },
    ],
  },

  {
    id: "fees",
    title: "💰 Fees & Preparation",
    items: [
      {
        id: 10,
        q: "What are your consultancy service charges?",
        a: "Service charges vary depending on the country and services required. Please contact our office for detailed information and current offers.",
      },
      {
        id: 11,
        q: "Do you provide IELTS or language preparation support?",
        a: "Yes, we guide students for IELTS and other required language preparation and help them understand exam requirements for their destination country.",
      },
    ],
  },

  {
    id: "after",
    title: "✈️ After Visa & Departure",
    items: [
      {
        id: 12,
        q: "Do you provide pre-departure guidance?",
        a: "Yes. We conduct pre-departure sessions covering accommodation, travel planning, airport procedures, and student life abroad.",
      },
      {
        id: 13,
        q: "Will you support students after they reach their destination?",
        a: "Yes, we provide guidance and assistance even after departure to help students settle comfortably.",
      },
    ],
  },

  {
    id: "getting",
    title: "📞 Getting Started",
    items: [
      {
        id: 14,
        q: "How can I start my study abroad process?",
        a: "Simply contact us through our website, phone, or visit our office to book a FREE counseling session with our expert counselors.",
      },
      {
        id: 15,
        q: "Why should I choose Divine Light Global Education Pathways?",
        a: "We focus on honest counseling, transparent processes, and personalized support to help students achieve successful international education outcomes.",
      },
    ],
  },
];

const FAQPage = () => {

  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <FAQGrouped groups={groups} />
        <div className="mt-6 px-4">
          <p className="font-medium">Still have questions?</p>
          <p>Contact our counselors today for FREE expert guidance.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
