import React, { useEffect, useState } from "react";
import { getCategories } from "../Apis";

const MenuCategories = ({ selectedcategory, setSelectedCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const res = await getCategories();
            setCategories(res.data);
            setSelectedCategory(res.data[0])
        } catch (error) {
            toast.error("Failed to fetch categories");
        }
    };

    const setCat = (cat) => {
        setSelectedCategory(cat)
    }

    return (
        <div className="relative bg-cover bg-center h-[79px] w-full flex items-center justify-center"
            style={{
                backgroundImage: "url('/assets/cate-bg-mobile.svg')",
            }}>


            <div className="absolute inset-0 hidden md:block"
                style={{
                    backgroundImage: "url('/assets/cate-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}></div>


            <div className="relative flex gap-3">
                {categories.map((category, i) => (
                    <div
                        onClick={() => setCat(category)}
                        className={`border border-[#0796EF] ${selectedcategory._id == category._id ? 'bg-[#0796EF]' : 'bg-black'}  text-white uppercase px-6 py-2 font-semibold cursor-pointer md:text-[16px] text-[12px]`}
                        key={category.name}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuCategories;
