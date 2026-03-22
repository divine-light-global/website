import Service from "@/components/Service/page";

const Description = () => {
  return (
    <>
      <p>
        Receive expert guidance on identifying scholarships, managing study
        abroad finances, and creating budgets to make your international
        education affordable and stress-free. We help you identify suitable
        funding sources and prepare strong scholarship applications where
        applicable.
      </p>

      <p className="mt-4">
        Contact us for a financial planning session tailored to your chosen
        destination and program.
      </p>
    </>
  );
};

export default function Page() {
  return (
    <main>
      <Service
        serviceImageDark="/images/about/about-dark-01.png"
        serviceImageLight="/images/about/about-light-01.png"
        heading="Scholarship and Financial Advice"
        ServiceMainDescription={Description()}
      />
    </main>
  );
}
