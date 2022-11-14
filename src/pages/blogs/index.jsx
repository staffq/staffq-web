import React from "react";
import { Bg, SecondCard } from "../../styles/blogs";
const Blogs = () => {
  const card = [
    {
      id: "1",
      image: "assets/images/Card-second.svg",
      text: "How to Create an Engineering Culture",
    },
    {
      id: "1",
      image: "assets/images/Card-second.svg",
      text: "How to Create an Engineering Culture",
    },
    {
      id: "1",
      image: "assets/images/Card-second.svg",
      text: "How to Create an Engineering Culture",
    },
  ];
  return (
    <div>
      <Bg>
        <SecondCard>
          {/* {
                card.map((cardHead , index) =>{
                    return(
                        <div key={index}>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    
                                    <h1>{cardHead.text}</h1>
                                    <span> {cardHead.image}</span>
                                </div>
                            </div>

                            
                        </div>
                    )
                        
                    
                })
            } */}

          <section>
            <div>
              <div>
                <div className="row ">
                  <div className="col-lg-4 card-two">
                    <div className="">
                      <img
                        src="assets/images/Card-second.svg"
                        width="100%"
                        className="card-img"
                      />
                    </div>
                    <div className="container">
                      <div>
                        <button className="btn btn-warning">Tech</button>
                        <button className="btn ">5 minutes need</button>
                        <img src="assets/images/note.svg"></img>
                        <span className="">20 sep 2022</span>
                      </div>
                      <h5>
                        How to Create an Engineering Culture<br></br> That Will Drive
                        Your Team’s Success
                      </h5>
                      <button className="btn">
                        Read more{" "}
                        <img src="assets/images/arrow-right (1).svg"></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SecondCard>
      </Bg>
    </div>
  );
};

export default Blogs;
