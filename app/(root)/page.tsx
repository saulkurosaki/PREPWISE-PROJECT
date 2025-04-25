import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      {/* CARD CTA */}
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* INTERVIEWS SECTION */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          <p>You haven&apos;t taken any interviews yet</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
