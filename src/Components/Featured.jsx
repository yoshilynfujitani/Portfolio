import { AiFillGithub } from "react-icons/ai";
const Featured = (props) => {
  return (
    <div className="bg-gray-100 flex flex-col justify-between dark:bg-gradient-to-b from-[#2c2c2e] via-[#231A29] to-[#100814] container rounded-md transition shadow-md hover:scale-105  lg:px-0">
      {/* card */}
      <div className=" cursor-pointer ">
        <img src={props.img} alt="" className="rounded-t-md  " />
        <div className="px-4 py-2">
          <p className="text-gray-700 dark:text-white text-xl font-bold py-2">
            {props.title}
            <span className="font-thin pl-2">{props.desc}</span>
          </p>
          <p className="text-gray-500 dark:text-subtext">{props.client}</p>
          <div className="my-1 grid grid-cols-7 md:grid-cols-10 gap-2">
            {props.stack.map((item, index) => {
              const IconComponent = item;

              const iconClass = `transition text-3xl lg:text-4xl  text-gray-700 dark:text-subtext hover:scale-105 hover:text-slate-900 dark:hover:text-slate-50 `;

              return (
                <span key={index} className={iconClass}>
                  <IconComponent />
                </span>
              );
            })}
          </div>
          <p className="text-md font-thin dark:text-subtext">{props.purpose}</p>
        </div>
      </div>
      <div className="text-center m-2 bg-gray-200 rounded-md dark:bg-Background">
        <a
          href={props.link}
          target="blank"
          rel="noopener noreferrer"
          className="text-slate-500  dark:text-gray-200 transition-colors text-md md:text-lg text-transparent cursor-pointer flex items-center justify-center gap-1 hover:text-slate-800 dark:hover:text-purple-100"
        >
          <span>
            <AiFillGithub />
          </span>
          View on Github
        </a>
      </div>
    </div>
  );
};

export default Featured;
