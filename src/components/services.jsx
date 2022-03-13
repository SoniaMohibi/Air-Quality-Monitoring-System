import React,{useState,useEffect} from 'react'
import JsonData from "../data/data.json";
import styled from 'styled-components';
import Modal from 'react-modal'
import {GlobalStyle} from './GlobalStyle'
import { Slider } from './Slider';
import {Gallery} from './gallery'
Modal.setAppElement('#root')

const Button = styled.button`
  min-width: 60px;.
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background:#1182f9;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;


export const Services = (props) => {
  const [landingPageData, setLandingPageData] = useState([]);
  const [index,SetIndex]=useState(0)
  
  useEffect(() => {
    console.log(JsonData.Mymodal)
    setLandingPageData(JsonData.Mymodal);
  }, []);
  const [modalIsOpen,setModalIsOpen]=useState(false)

  const handle = (ind) =>{
    SetIndex(ind,setModalIsOpen(true ))

  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
////Slider
// const nextSlide = () => {
//   if(slideIndex !== dataSlider.length){
//       setSlideIndex(slideIndex + 1)
//   } 
//   else if (slideIndex === dataSlider.length){
//       setSlideIndex(1)
//   }
// }

// const prevSlide = () => {
//   if(slideIndex !== 1){
//       setSlideIndex(slideIndex - 1)
//   }
//   else if (slideIndex === 1){
//       setSlideIndex(dataSlider.length)
//   }
// }

// const moveDot = index => {
//   setSlideIndex(index)
// }

  return (
    <>
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
           Get the service you want for a better experience
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>

                 <i className={d.icon} onClick={()=>handle(i)}  > </i>
                         <GlobalStyle />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                  </div>
              ))
            : 'loading'}
            {
            index!==0 && <Modal
            isOpen={modalIsOpen}
            onRequestClose={false}
            >
               {index===4 ?<Slider/>:null}
               {index===5 ?<Gallery/>:null}
                
                <h1>{landingPageData[index].id}</h1>
                <h1>{landingPageData[index].name}</h1>
                <div>
                <Button onClick={()=>setModalIsOpen(false)}>Close</Button>
                </div>
               </Modal>
            }

        </div>



      </div>
    </div>

    </>
  )
}
