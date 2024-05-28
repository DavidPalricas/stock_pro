import React, {useState} from 'react';
import { useLocation,useParams } from 'react-router-dom';
import Filter_button from '../components/filter_button'
import Sidebar from '../components/Sidebar';
import BackButton from '../components/back_button';
import "../css/profit.css";


function Profit(){
    const location = useLocation();
    const { name } = useParams();
    const { state } = location;
    const {histograms} = state;
    let lastClickedButton = null;



    const [month_image, half_year_image, year_image] = histograms;

    const show_graph = (event,month) =>{
        const button = event.target;
        button.style.backgroundColor = "white";
  

        if (lastClickedButton) {
            lastClickedButton.style.backgroundColor = ''; // Or the original color
        }

        if (document.querySelector(".image-container") !== null) {
            document.querySelector(".image-container").remove();
            
        }
       
        const filter_text =document.querySelector(".filter-text");
        
        const image = new Image();

        image.className = "graph-image";

        if (month === 1) {
            filter_text.innerHTML = "Profit of the last month : 200€";
            image.src = month_image;
            image.alt = "Profit month graph";
            
       
              
            
        }else if (month === 6){
            filter_text.innerHTML = "Profit of the last 6 months : 1200€";
            image.src = half_year_image;
            image.alt = "Profit 1/2 year graph";
      
         }
         else if (month === 12){
             filter_text.innerHTML = "Profit of the last year : 2000€";
             image.src = year_image;
             image.alt = "Profit 1 year graph";
         }
      

         filter_text.style.color = "green"; 
   

         const image_container = document.createElement("div");
         image_container.className = "image-container";
      
         image_container.appendChild(image);

         const filter_container = document.querySelector(".filter-container");

         filter_container.appendChild(image_container);

         lastClickedButton = button;
     
    
 }
    return(
        <>
        <Sidebar></Sidebar>
           <BackButton></BackButton>
           <div className= "general-container">
            <div className = "filter-container">
                <h1 className="filter-text">Select a filter to show the product's profit</h1>
                
                <div className="filter">
                    <Filter_button text="Last Month" onClick={(event) => show_graph(event, 1)}/>
                    <Filter_button text="Last 6 Months" onClick={(event) => show_graph(event, 6)} />
                    <Filter_button text="Last Year" onClick={(event) => show_graph(event, 12)}/>
                </div>

            </div>

           </div>
   
        </>
    )
}


export default Profit;
