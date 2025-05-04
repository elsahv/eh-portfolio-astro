import { IoOpenOutline } from "react-icons/io5";

const FeaturedSite = () => {
  return (
    <section
      id="about"
      class="text-munsell opacity-100 hover:opacity-80 my-5 pt-5 py-5 md:pl-5 pl-1 bg-"
    >
      <div id="" class="mt-5">
        <div id="" class="md:mr-5 mx-0">
          <div class="pb-2 font-medium text-">
            <div
              id="paragraph-container"
              class="font-semibold 2xl:pr-5 2xl:mr-5"
            >
              <p class="text-2xl pt-1">Hi there... im Elsa.</p>
              <p class="pb-1 mb-1 text-lg">
                I help small business owners start and maintain their websites,
                along with content creation. You can find some of these examples
                over at{" "}
                <a class="underline" href="https://laughingcoyote.dev">
                  Laughing Coyote Dev:
                </a>
              </p>

              <div id="img-wrapper" class="px-1 py-5">
                <a href="/laughing-coyote ">
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
