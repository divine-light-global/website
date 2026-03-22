import Service from "@/components/Service/page";

const Description = () => {
  return (
    <>
      <p>
        We provide tailored one-on-one coaching to help you discover your ideal
        career path, build essential skills, and achieve long-term professional
        success. Our counselors work with you to identify strengths, explore
        programs and universities that fit your goals, and prepare application
        materials that highlight your profile.
      </p>

      <p className="mt-4">
        Speak with our career counselling experts to get personalised advice and
        an actionable plan for your study-abroad journey.
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
        heading="Personalized Career Guidance"
        ServiceMainDescription={Description()}
      />
    </main>
  );
}
