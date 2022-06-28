import { NextPage } from "next";
import Link from "next/link";

const MainHeader: NextPage = () => {
  return (
    <>
      <div className="flex flex-col w-1/2 m-auto mt-5 justify-center">
        <div className="grid grid-cols-3">
          <div className="text-6xl text-right">We are,</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-start-2 text-9xl italic font-semibold">Sanctus</div>
        </div>
      </div>
      <div className="w-11/12 m-auto border-b-[1px] border-black border-opacity-20 mt-5"></div>
      <div className="flex justify-evenly mt-2">
        <Link href="">
            <span className="text-2xl text-main-purple font-sans">Scenario</span>
        </Link>
        <Link href="">
            <span className="text-2xl text-main-purple font-sans">Song</span>
        </Link>
        <Link href="">
            <span className="text-2xl text-main-purple font-sans">Product</span>
        </Link>
    </div>
    </> 
  );
};

export default MainHeader;
