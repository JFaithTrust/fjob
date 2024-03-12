import {CategoryCard} from "./parts"
import {useEffect, useState} from "react";
import {getAllCategory} from "@/api/fetchCategory.ts";
import {Category} from "@/types";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        getAllCategory().then((c) => setCategories(c))
    }, []);

    return (
        <div className="bg-lightblue">
            <div className="container py-8 flex flex-col gap-y-8">
                <h1 className="text-center font-roboto text-3xl font-semibold">{`Get work done in over ${categories.length} different`} <span
                    className="text-darkblue">Categories</span></h1>
                <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-3">
                    {categories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories