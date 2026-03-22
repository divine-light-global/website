import Service from "@/components/Service/page";

const Description = () => {
  return (
    <>
      <p>
        Get comprehensive assistance with travel arrangements, cultural
        orientation, accommodation setup, and last-minute essentials to ensure
        a smooth transition abroad. Our pre-departure sessions prepare you for
        life in your destination country.
      </p>

      <p className="mt-4">
        Attend our pre-departure briefing to complete your final checklist and
        travel planning.
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
        heading="Pre-Departure Support"
        ServiceMainDescription={Description()}
      />
    </main>
  );
}
