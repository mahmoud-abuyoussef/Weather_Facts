"use client";
interface InputProps {
  handelSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ handelSearch, setLocation }: InputProps) {
  return (
    <div className="input_container flex items-center md:w-2/4 w-full  rounded-lg p-3 mt-10 md:mt-0 ">
      <input type="text" placeholder="Search City" className="input_feild w-full bg-transparent outline-none text-white" onKeyDown={handelSearch} onChange={(e) => setLocation(e.target.value)} />{" "}
    </div>
  );
}

export default Input;
