import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mt-8 flex py-3 max-w-8xl mx-auto">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col gap-y-12 basis-1/2">
          <h2 className="text-6xl font-bold font-roboto">
            Hire the best <span className="text-darkblue">Freelancers</span> for
            any job, <span className="text-darkblue">online.</span>
          </h2>
          <span className="text-base font-roboto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </span>
          <div className="flex flex-row gap-x-6">
            <Button variant={'fill'} className="px-5 py-4 rounded-sm text-base font-semibold">Hire a Freelancer</Button>
            <Button variant={'outline'} className="px-5 py-4 rounded-sm text-base font-semibold">Earn Money as a Freelancer</Button>
          </div>
        </div>
        <div className="basis-1/2">
          <img
            src="/src/assets/heroImage.svg"
            alt=""
            className="w-[546px] h-[546px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
