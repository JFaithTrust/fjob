import FeedbacksSlider from "./parts/feedbaks/feedbacks-slider";

const Feedbacks = () => {
  return (
    <div className="bg-lightblue">
      <div className="container py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto text-3xl font-semibold">
          <span className="text-darkblue">Feedbacks</span> from our Customers
        </h1>
        <FeedbacksSlider />
      </div>
    </div>
  );
};

export default Feedbacks;
