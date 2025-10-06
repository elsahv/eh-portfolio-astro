const items = [
  {
    title:"small businesses (LC)",
    img: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?_gl=1*1qv1sgi*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NTgyNTAwMzckbzEkZzEkdDE3NTgyNTAwNjgkajI5JGwwJGgw",
    link:"/website-projects/#about-laughing-coyote-dev"
  },
   {
    title:"to bring more people to their businesses (wtbh)",
     img: "https://images.pexels.com/photos/9816/pexels-photo-9816.jpeg?_gl=1*ucgrfh*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NTgyNTAwMzckbzEkZzEkdDE3NTgyNTA1ODkkajckbDAkaDA.",
      link:"/website-projects/#about-wtbh"
  },
   {
    title:"creatives (Jungle)",
       img: "https://images.pexels.com/photos/13013228/pexels-photo-13013228.jpeg?_gl=1*1dxvdji*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NTgyNTAwMzckbzEkZzEkdDE3NTgyNTAzMTkkajE3JGwwJGgw",
      link:"/website-projects/#about-jungle"
  },
   {
    title:"for people to share their stories (RQ)",
       img: "https://images.pexels.com/photos/6041284/pexels-photo-6041284.jpeg?_gl=1*1ds56fj*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NTgyNTAwMzckbzEkZzEkdDE3NTgyNTA0MzIkajMwJGwwJGgw",
      link:"/website-projects/#about-rq"
  }
]

const WebsitesCta = () => {
  return (
    <section
      id="contact-section"
      className="bg- m-5 md:pt-5 md:p-5  "
    >
      {/* <h1 class="font-bold underline">Journal</h1>
      <p>
        9/3: I want to prove that it is still possible to create a successful
        web dev career in the age of AI.” While it is understandable that Ai
        brings much change and changes in job opportunities… I argue that it
        does not mean the death of all web careers. Instead, we need to evolve.
        And there will always be opportunity with involvement.”
      </p>
      <p>
        9/4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        libero unde modi officiis numquam minima natus itaque illo! Delectus
        commodi et repellat minus. Quasi quod explicabo quis! Ratione,
        consequatur magnam?
      </p>
      <p>
        9/22: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        dolore voluptas aliquid quae, sit odio ducimus beatae nostrum sapiente
        veritatis odit, sunt cusandae nisi temporibus odit odio adipisci vel?
        Totam tempore inventore harum necessitatibus hic at, quas quae amet
        distinctio exercitationem eos, aperiam maiores! Quo, alias esse
        architecto dignissimos minima temporibus aliquid! Quisquam temporibus
        dolor, nemo tempora culpa non!
      </p>
      <p>
        9/25: I want to prove that it is still possible to create a successful
        web dev career in the age of AI.” While it is understandable that Ai
        brings much change and changes in job opportunities… I argue that it
        does not mean the death of all web careers. Instead, we need to evolve.
        And there will always be opportunity with aliquid quae, sit odio ducimus
        beatae nostrum sapiente veritatis odit, sunt cusandae nisi temporibus
        odit odio adipisci vel? Totam tempore inventore harum necessitatibus hic
        at, quas quae amet distinctio exercitationem eos, aperiam maiores! Quo,
        alias esse architecto dignissimos minima temporibus aliquid! Quisquam
        temporibus dolor, nemo tem.”
      </p>
      <p>
        9/31: I want to prove that it is still possible to create a successful
        web dev career in the age of AI.” While it is understandable that Ai
        brings much change and changes in job opportunities… I argue that it
        does not mean the death of all web careers. Instead, we need to evolve.
        And there will always be opportunity with involvement.”
      </p> */}
      <div id="" className="bg- 2xl:mx-5 mt-[150px]">
        <div id="" className="bg-">
          <div className="pb-2 font- text-">
              {/* <span id="featured work-title" className=" text-lg opacity-65">
           featured project
              </span> */}
              <h1 className="text-3xl text-">I build websites for...</h1>
                <div id="DYNAMIC-GRID" className="grid 2xl:grid-cols-2 gap-3 pl-1 pt-3 2xl:pr-5 2xl:mr-5">
                    {items.map((item, index) => (
                      <div key={index} className="item">
                        <div id="sq" className="opacity-100 hover:opacity-80 ">
                          <a href={item.link}>
                          <h2 class="mt-5 pt-5">...{item.title}</h2>
                              <img src={item.img} alt={item.title} className="border border-gray-500 " />
                     </a>
                      </div>
                      </div>
                    ))}

                </div>
               
              {/* <p className="pt-1 text-lg mr-5 pr-5 mt-1 ">
                a web design service 
                which assists small business owners with starting and
                maintaining their websites, along with content creation and
                sharing their user stories.
              </p>
            <br /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitesCta;
