import { AiFillGithub } from "react-icons/ai";
import BadgeText from "./BadgeText";
const Featured = (props) => {
  const { purpose, img, desc, client, link, stack, title } = props;
  return (
    <div className=" flex flex-col justify-between bg-Main border border-borderColor container rounded-md transition shadow-md hover:scale-105  lg:px-0">
      {/* card */}
      <div className=" cursor-pointer ">
        <img src={img} alt="" className="rounded-t-lg  " />
        <div className="px-4 py-2 border-t border-borderColor leading-3">
          <p className="text-main text-md font-bold pt-2 pb-1">
            {title}
            <span className="font-thin pl-2 ">{desc}</span>
          </p>

          <p className="text-sm font-thin text-subtext">{purpose}</p>
        </div>
      </div>
      <div className=" flex m-2  rounded-md  gap-2">
        <a
          href={link}
          target="blank"
          rel="noopener noreferrer"
          className="text-main py-2 px-4 w-1/2 rounded-md transition-colors text-md md:text-md font-semibold bg-Background cursor-pointer flex items-center justify-center gap-1 "
        >
          <span>
            <AiFillGithub />
          </span>
          View on Github
        </a>
        <a
          href={link}
          target="blank"
          rel="noopener noreferrer"
          className="text-main py-2 px-4 w-1/2 rounded-md border border-borderColor transition-colors text-md md:text-md font-semibold  cursor-pointer flex items-center justify-center gap-1 "
        >
          <span>
            <AiFillGithub />
          </span>
          Read More
        </a>
      </div>
    </div>
  );
};

export default Featured;
