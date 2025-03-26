import { IoOpenOutline } from "react-icons/io5";

const items = [
  {
    no: "01",
    description:
      "A web design subscription service for small business owners and creatives",
    url: "https://laughingcoyote.dev",
    img: "https://dl.dropboxusercontent.com/scl/fi/dfedeb2sse0kz9luf2bts/1-27-25.png?rlkey=ugsy1jw6r2k2d20va1q2vhq5t&st=2bux3qyo&dl=0",
  },
  {
    no: "02",
    description:
      "A collection of jt experiences. Eventually invite locals to participate",
    url: "https://therunningquail.com",
    img: "https://dl.dropboxusercontent.com/scl/fi/zdvqgpkxstz9g3vr5k70l/1-2-25-rq.png?rlkey=nnsad2qpj4i0e3bti5gkqy8gf&st=46k5gk9p&dl=0",
  },
  {
    no: "03",
    description: "An illustrative blog about cooking for neurodivergents",
    url: "https://writingtobetterhealth.com",
    img: "https://dl.dropboxusercontent.com/scl/fi/jtfnbqyqk5ly03x5kspuz/wtbh-3-26-24.png?rlkey=0igc90thtm07w1i9cardfeu3h&st=kz1x288m&dl=0",
  },
  {
    no: "04",
    description: "A horror-themed botany journal",
    url: "https://theindoorjungleproject.com",
    img: "https://dl.dropboxusercontent.com/scl/fi/jlhfvwh7ftd2k35r61ycj/plants5.jpg?rlkey=1arbo741cwzyyzx1t6vtvfjmm&st=1uo0cmjn&dl=0",
  },
];

const TestFeaturedSites = () => {
  return (
    <section
      id="test-web-dev-section"
      className="pt-5 pb-5 md:pl-5 pl-1 w-[1350px]"
    >
      <div id="" className="p-5 px-5">
        <div id="" className="md:mr-5 mx-0 lg:p-5 p-0">
          <div className="pb-2 font-medium text-onyx">
            <div id="paragraph-container" className="bg-">
              <div
                id="grid"
                className="grid grid-cols-1 gap-y-24 pt-1 list-disc w-full"
              >
                {items.map((item) => (
                  <div id="sq" className="my-5 mt-5 pt-1 hover:opacity-80">
                    <a href={item.url}>
                      <div className="flex justify-between">
                        <div className="">{item.no}</div>
                        <button
                          id="view-more-btn"
                          className="text-onyx hover:text-cerulean text-xl pr-1"
                        >
                          <IoOpenOutline />
                        </button>
                      </div>

                      <img
                        src={item.img}
                        alt=""
                        className="mt-1  border border-munsell hover:border-cerulean rounded"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestFeaturedSites;
