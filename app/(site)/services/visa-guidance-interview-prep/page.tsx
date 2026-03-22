import Service from "@/components/Service/page";

const Description = () => {
  return (
    <>
      <p>
        We offer step-by-step visa application support, document reviews, and
        mock interview sessions to increase your approval chances for study or
        work visas. Our team reviews paperwork, prepares application checklists,
        and conducts interview practice to boost confidence.
      </p>

      <p className="mt-4">
        Book a visa guidance session to get personalized assistance with your
        application and interview readiness.
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
        heading="Visa Guidance and Interview Prep"
        ServiceMainDescription={Description()}
      />
    </main>
  );
}
