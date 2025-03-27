import React, { useState } from "react";

const MenuCategories = () => {
    let [categories, setCategories] = useState(["foods", "drinks", "brunch"]);

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
                        className="border border-[#0796EF] bg-black text-white uppercase px-6 py-2 font-semibold cursor-pointer md:text-[16px] text-[12px]"
                        key={category}
                    >
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuCategories;
