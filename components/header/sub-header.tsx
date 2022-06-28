import { NextPage } from "next";
import Link from "next/link";

const SubHeader: NextPage = () => {
  return (
    <>
      <div className="flex flex-row m-auto w-5/6 mt-5">
        <div className="flex mr-auto text-6xl text-main-purple font-bold italic">
          Sanctus
        </div>
        <div className="flex space-x-20 text-4xl text-uncursor-purple justify-evenly">
          <Link href="">
            <span className="hover:text-main-purple">Scenario</span>
          </Link>
          <Link href="">
            <span className="hover:text-main-purple">Song</span>
          </Link>
          <Link href="">
            <span className="hover:text-main-purple">Product</span>
          </Link>
        </div>
      </div>
      <div className="border-b-[1px] border-black border-opacity-20 mt-5"></div>
    </>
  );
};

export default SubHeader;
