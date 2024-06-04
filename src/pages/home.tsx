import { Categories, Faq, Feedbacks, Hero, Jobs } from "@/components";
import { Partners } from "@/components/parts";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <Hero />
      <Partners />
      <Jobs />
      {/*<Workers />*/}
      <Categories />
      <Feedbacks />
      <Faq />
    </div>
  );
};

export default Home;
