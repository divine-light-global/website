import Service from "@/components/Service/page";

const Description = () => {
  return (
    <>
      <p>
        Our thorough screening process and professional document preparation
        services streamline your university applications, ensuring accuracy and
        completeness for higher acceptance rates. We assist with transcripts,
        SOPs, LORs, and other supporting documents to present your profile
        clearly to admissions teams.
      </p>

      <p className="mt-4">
        Speak with our documentation experts to get your application materials
        reviewed and optimized.
      </p>
    </>
  );
};

export default function Page() {
  return (
    <main>
      <Service
        serviceImageDark="/images/blog/blog-01.png"
        serviceImageLight="/images/blog/blog-01.png"
        heading="Student Screening and Document Preparation"
        ServiceMainDescription={Description()}
      />
    </main>
  );
}
