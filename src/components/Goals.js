import React from "react";
import goalsSlide from "../imgs/futuregoals.png"
import {
    Image
  } from '@chakra-ui/react'
import "../styles.css"


export default function Goals(){
    return (
        <div>
            <h1 className="about-title">Goals</h1>
            <div className="goals-container">
                <Image 
                    src={goalsSlide}
                    objectFit="contain">
               </Image>
            </div>
        </div>
    )
}