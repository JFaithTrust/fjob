const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 font-roboto rounded-xl border-[1px] border-solid border-indigo-200 bg-white text-black hover:text-white hover:bg-darkblue transition-colors">
      <span className="font-semibold">News</span>
      <span className="text-gray-400">2,358 services</span>
    </div>
  );
};

export default CategoryCard;
