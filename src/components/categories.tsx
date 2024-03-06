import { CategoryCard } from "./parts"

const Categories = () => {
  return (
    <div className="bg-lightblue">
      <div className="max-w-8xl mx-auto py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto text-3xl font-semibold">Get work done in over 72 different <span className="text-darkblue">Categories</span></h1>
        <div className="grid grid-cols-6 gap-3">
          <CategoryCard />
        </div>
      </div>
    </div>
  )
}

export default Categories