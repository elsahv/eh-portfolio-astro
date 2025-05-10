import { IoOpenOutline } from "react-icons/io5";

const FeaturedSite = () => {
  return (
    <section
      id="wrapper"
      class="text-black opacity-100 hover:opacity-80 my-5 pt-5 py-5 md:pl-5 pl-1 bg-"
    >
      <div id="" class="mt-5 ">
        <div id="" class="md:mr-5 mx-0">
          <div class="pb-2 font-medium text-">
            <div id="paragraph-container" class="font- 2xl:pr-5 2xl:mr-5">
              <h1 id="work-with-me-title" class="font- 2xl:text-4xl text-3xl ">
                Work With Me
              </h1>
              <h3 class="pt-1 text-lg">
                "Web Design for small business, creatives. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque delectus accusamus
                facilis"
              </h3>
              {/*  */}
              <div id="img-wrapper" class="px-1 py-5">
                <a href="/work-with-me">
                  <div class="flex items-center  text-2xl pt-5 mt-5  hover:text-munsell">
                    <IoOpenOutline />{" "}
                    <p class="pl-1">view what LC can do for you... </p>
                  </div>

                  <img
                    src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    class="border border-gray-300"
                  />
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSite;
