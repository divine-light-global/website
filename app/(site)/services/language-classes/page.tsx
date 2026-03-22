import Service from "@/components/Service/page";

const Description = () => {
  return (
    <>
      <p>
        Our expert-led classes prepare you for IELTS, PTE, and Japanese
        proficiency exams with proven strategies, practice tests, and
        personalized feedback to boost your scores. We provide study plans,
        mock tests, and one-to-one coaching where needed to help you reach the
        required band or score.
      </p>

      <p className="mt-4">
        Join our language classes to improve your exam performance and
        confidence for both academic and visa requirements.
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
        heading="IELTS, PTE, and Japanese Language Classes"
        ServiceMainDescription={Description()}
      />
    </main>
  );
}
