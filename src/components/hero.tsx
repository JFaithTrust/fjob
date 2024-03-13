import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mt-8 flex py-3 container">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col gap-y-12 lg:basis-1/2 basis-full">
          <h2 className="lg:text-6xl sm:text-5xl text-4xl font-bold font-roboto">
            Hire the best <span className="text-darkblue">Freelancers</span> for
            any job, <span className="text-darkblue">online.</span>
          </h2>
          <span className="sm:text-base text-sm font-roboto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </span>
          <div className="flex flex-row sm:gap-x-6 gap-x-3">
            <Button variant={'fill'} className="sm:px-5 px-3 sm:py-4 py-2 rounded-sm sm:text-base text-sm font-semibold">Hire a Freelancer</Button>
            <Button variant={'outline'} className="sm:px-5 px-3 sm:py-4 py-2 rounded-sm sm:text-base text-sm font-semibold">Earn Money as a Freelancer</Button>
          </div>
        </div>
        <div className="basis-1/2 lg:block hidden">
          <img
            src="../../src/assets/heroImage.svg"
            alt=""
            className="w-[546px] h-[546px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
