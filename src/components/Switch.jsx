import { useState } from "react";

function Switch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative group">
        <div
            className={"w-8 h-5 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer hover:bg-gray-300"}
            onClick={() => {
            setToggle(!toggle);
            }}
        >
            {/* Switch */}
            <div
            className={`${
                toggle ? "bg-green-600 transform translate-x-3" : "bg-gray-500"
            } h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out`}
            ></div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg py-2 px-4 absolute left-1/2 transform -translate-x-1/2 bottom-full transition-opacity duration-200">
            Required
        </div>
    </div>
  );
}

export default Switch;
