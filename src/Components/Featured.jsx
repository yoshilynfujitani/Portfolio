import { AiFillGithub } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";
const Featured = (props) => {
  const { purpose, img, desc, client, link, stack, title, id } = props;
  return (
    <div className=" flex flex-col justify-between bg-lightModeMain dark:bg-Main border border-borderColorLight dark:border-borderColorDark  rounded-md transition shadow-sm  lg:px-0">
      {/* card */}
      <div className=" cursor-pointer ">
        <img src={img} alt="" className="transition-all rounded-t-lg  " />
        <div className="px-4 py-2 border-t border-borderColor leading-3">
          <p className="text-main text-md font-bold pt-2 pb-1">
            {title}
            <span className="font-thin pl-2 ">{desc}</span>
          </p>

          <p className="text-sm font-thin text-subtext">{purpose}</p>
        </div>
      </div>
      <div className=" flex  m-2  rounded-md gap-2">
        <a
          href={link}
          target="blank"
          rel="noopener noreferrer"
          className="text-main py-2 px-4 w-1/2 flex-1 rounded-md transition-colors text-md md:text-md font-semibold bg-lightModeSecondary dark:bg-Background cursor-pointer flex items-center justify-center gap-1 "
        >
          <span>
            <AiFillGithub />
          </span>
          View on Github
        </a>
        <Link to={`/Portfolio/projects/${id}`}>
          <button className="text-main py-2 px-4  flex-2 dark:bg-[#4d4d4d] rounded-md border border-borderColorLight dark:border-borderColorDark transition-colors text-md md:text-md font-semibold  cursor-pointer flex items-center justify-center gap-1 ">
            <span>
              <HiOutlineDocumentText />
            </span>
            Project Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
