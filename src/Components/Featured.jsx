import { AiFillGithub } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";

const Featured = (props) => {
  const { purpose, img, desc, client, link, stack, title, id } = props;
  return (
    <div className="flex flex-col justify-between bg-lightModeMain dark:bg-Main border border-borderColorLight dark:border-borderColorDark rounded-md transition shadow-sm">
      {/* card */}
      <div className="cursor-pointer">
        <img
          src={img}
          alt=""
          className="rounded-t-lg w-full h-44 object-cover"
        />
        <div className="px-4 py-2 border-t border-borderColor ">
          <p className="text-main text-md font-bold pt-2 pb-1">
            {title}
            <span className="font-thin pl-2">{desc}</span>
          </p>
          <p className="text-sm font-thin text-subtext">{purpose}</p>
        </div>
      </div>
      <div className="flex m-2 rounded-md gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-main py-2 break-normal px-4  text-sm rounded-md transition-colors text-md md:text-md font-semibold bg-lightModeSecondary dark:bg-Background cursor-pointer flex items-center justify-center gap-1"
        >
          <span>
            <AiFillGithub />
          </span>
          View on Github
        </a>
        <Link to={`/Portfolio/projects/${id}`}>
          <button className="text-main py-2 px-4 flex-2 text-sm rounded-md border border-borderColorLight dark:border-borderColorDark transition-colors text-md md:text-sm font-semibold cursor-pointer flex items-center justify-center gap-1 dark:bg-[#4d4d4d]">
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
