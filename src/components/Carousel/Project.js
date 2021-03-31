import React from "react";
import styled from 'styled-components';


//  images
import firstPortrait from "../../Images/pik-a-chew.png";
import secondPortrait from "../../Images/code.png";
import thirdPortrait from "../../Images/Thyme.png";
import fourthPortrait from "../../Images/nurserie.png";
import fifthPortrait from "../../Images/collage.png";



const StyledCard = styled.div`
     border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
   background: radial-gradient(50% 114.08% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.744792) 37.32%, rgba(255, 255, 255, 0) 100%), #F4C2C2;
   padding: 8px;
   
   

    img {
      width: 80vw;
      cursor: pointer;
      outline: none;   
      
      
    }

    h2 {
        font-size: 46px;
        line-height: 26px;
        text-align: center;
        font-family: "unpack-regular";
        color: #0A2268;
        text-shadow: 5px 5px #F4C2C2;
        margin:0;
    }
    

`;

const Project = ({ imageNumber }) => {
  

    return (
        <StyledCard>
            {
                imageNumber === 0
                    ? (<> 
                     <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
                            <img src={firstPortrait} alt="Project" />
                            </div>
                            <div className="flip-card-back">
                            <img src={firstPortrait} alt="Reverse Project" 
                            />
     
    </div>
  </div>
</div>
                        </>)
                    : imageNumber === 1
                        ? (<>
                      
                             <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
                            <img className="ipad" src={secondPortrait} alt="Project 2" />
                            </div>
                            <div className="flip-card-back">
                            <img className="ipad" src={secondPortrait} alt="reverse project 2" 
                            />
     
    </div>
  </div>
</div>
                          
                        </>)
                        : imageNumber === 2 
                        ? (<>
                           
                           <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
                            <img className="ipad" src={thirdPortrait} alt="Project 3" />
                            </div>
                            <div className="flip-card-back">
                            <img className="ipad" src={thirdPortrait} alt="reverse project 3" 
                            />
     
    </div>
  </div>
</div>
                            
                        </>)
                        : imageNumber === 3 
                       
                       ?(<>
                        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
                            <img className="ipad" src={fourthPortrait} alt="Project 4" />
                            </div>
                            <div className="flip-card-back">
                            <img className="ipad" src={fourthPortrait} alt="reverse project 4" 
                            />
     
    </div>
  </div>
</div>
                       
                        </>)
                        : ( <>  <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                                                  <img className="ipad" src={fifthPortrait} alt="Project 5" />
                                                  </div>
                                                  <div className="flip-card-back">
                                                  <img className="ipad" src={fifthPortrait} alt="reverse project 5" 
                                                  />
                           
                          </div>
                        </div>
                      </div> </>)
                       
            }
           
        </StyledCard>

    )
}

export default Project;