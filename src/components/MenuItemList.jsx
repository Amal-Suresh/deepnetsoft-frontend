import { useEffect, useState } from "react";
import { getMenuItems } from "../Apis";
import { FaSpinner } from "react-icons/fa";
import Pagination from "./Pagination";

const MenuItemList = ({ selectedcategory }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const perPage = 3;

  const fetchItems = async (page = 1) => {
    try {
      setLoading(true);
      const res = await getMenuItems(page, perPage, selectedcategory?._id);
      setCurrentPage(res.data.currentPage);
      setTotalPage(res.data.totalPages);
      setItems(res.data.menuItems);
    } catch (error) {
      console.error("Failed to fetch menu items", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage, selectedcategory]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page); // Just update the state, let useEffect handle the fetch
    }
  };
  
  

  return (
    <div
      className="w-full h-[672px] bg-cover bg-center flex  flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/menu-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img className="h-full absolute left-0 top-0 hidden md:block" src="/assets/menu-left-garnish.png" alt="" />
      <img
        className="w-[76px] md:w-[190px] absolute left-0 top-0 transform translate-y-[95%] translate-x-[65%]  md:-translate-y-[9%] md:translate-x-[65%] z-10"
        src="/assets/menu-left-cocktail.png"
        alt=""
      />

      <div className="w-[75%] border h-[65%] relative flex flex-col">
        <div className="flex items-center justify-center pt-5 md:pt-16">
          <div className="w-[50px] md:w-[50px] border-t-2 border-[#857878]"></div>
          <span className="md:mx-6 text-white font-oswald text-[30px] md:text-[50px] max-w-[140px] md:max-w-[462px] whitespace-pre-line text-center text-shadow-red2 font-semibold uppercase">
           {selectedcategory?.name}
          </span>
          <div className="w-[50px] md:w-[50px] border-t-2 border-[#857878]"></div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <FaSpinner className="animate-spin text-4xl text-white" />
          </div>
        ) : (
          <div className="p-6 font-oswald text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <div key={index} className="mb-4 md:px-16">
                    <div className="flex justify-between items-baseline text-lg font-semibold max-w-[462px]">
                      <span className="whitespace-nowrap font-normal text-[16px] md:text-[26px] uppercase">
                        {item.name}
                      </span>
                      <span className="flex-1 border-b-2 border-dotted border-gray-400 ml-1"></span>
                      <span className="font-normal text-[16px] md:text-[26px]">${item.price}</span>
                    </div>
                    <p className="font-kelly text-[14px] md:text-[18px] opacity-75 font-normal">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-300">No items found.</p>
              )}
            </div>
          </div>
        )}
      </div>

      

      <img
        className="w-[74px] md:w-[192px] absolute right-0 bottom-0 transform -translate-x-[82%] -translate-y-[148%] md:-translate-y-[43%] md:-translate-x-[92%]"
        src="/assets/menu-right-cocktail.png"
        alt=""
      />
      
      <div className="relative">
      <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange}/>
      </div>
      <img className="h-full absolute right-0 top-0 hidden md:block" src="/assets/menu-right-garnish.png" alt="" />
    </div>
  );
};

export default MenuItemList;
