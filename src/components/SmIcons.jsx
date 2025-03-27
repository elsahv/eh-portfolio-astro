import { TfiEmail, TfiGithub, TfiLinkedin } from "react-icons/tfi";

const items = [
  {
    icon: <TfiEmail />,
    link: "/#contact-me",
  },
  {
    icon: <TfiGithub />,
    link: "https://github.com/elsahv?tab=repositories",
  },
  {
    icon: <TfiLinkedin />,
    link: "https://linkedin.com ",
  },
];

const SmIcon = () => {
  return (
    <div className="flex items-center space-x-3 text-2xl py-2 pl-1 ">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <a href={item.link}>{item.icon}</a>
        </div>
      ))}
    </div>
  );
};

export default SmIcon;
