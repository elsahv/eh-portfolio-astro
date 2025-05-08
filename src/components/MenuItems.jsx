const testitems = [
  { item1: "testhome", link: "/" },
  { item1: "work with me", link: "/work-with-me" },
  { item1: "side projects", link: "/side-projects" },
  { item1: "contact", link: "/contact" },
];

const MenuItems = () => {
  return (
    <header>
      <nav className="bg-">
        <div id="logo" className="text-8xl pb-1">
          EH
        </div>
        <ul className="text-2xl pl-3 px-3 py-3 mt-5 border-black border-t-2 border-b-2">
          {testitems.map((testitem) => (
            <li>
              <a href={testitem.link}>{testitem.item1}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MenuItems;
