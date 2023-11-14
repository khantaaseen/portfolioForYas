import React from 'react';
import {SimpleGrid, Text } from "@chakra-ui/react";
import eventPic from "../imgs/WoF_Event_7(1).png"
import hackathonPic from "../imgs/mcwt2023hackathon.PNG"
import groupPic from "../imgs/hackathonpic2022.JPG"
import "../styles.css"
import {
    ListItem,
    UnorderedList,
} from "@chakra-ui/react"

export default function Activites() {
    return (
        <div>
            <h1 className="about-title">FCG Activites</h1>
            <div className='top-row'>
                <SimpleGrid columns={3} spacing='30px'>
                    <Text fontSize='2xl' fontFamily='sans'>Women of Ford <br></br>
                         <UnorderedList>
                            <Text fontSize="lg" fontFamily='sans'><ListItem>MCWT: Girls Rock IT</ListItem></Text>
                            <Text fontSize="lg" fontFamily='sans'><ListItem>MCWT: Girls Solve IT</ListItem></Text>
                            <Text fontSize="lg" fontFamily='sans'><ListItem>WiCys: Ford Partnership</ListItem></Text>
                        </UnorderedList>
        
        
                    </Text>
                   
                    <img src={groupPic} width="1220px" height="auto" alt="aya universe dubai"></img>

                    <Text fontSize='2xl' fontFamily='sans'>Women of Ford STEM <br></br>
                        <UnorderedList>
                            <Text fontSize="lg" fontFamily='sans'><ListItem>STEM Outreach Program</ListItem></Text>
                            <Text fontSize="lg" fontFamily='sans'><ListItem>Design Thinking with STEM</ListItem></Text>
                        </UnorderedList>
                
                    </Text>
                    
                </SimpleGrid>
            </div>
            <div className='bottom-row'>

                <SimpleGrid columns={3} spacing='30px'>

                    <img src={hackathonPic} alt="aya universe dubai"></img>

                    <Text fontSize='2xl' fontFamily='sans'>Innovation Committee<br></br>
                        <UnorderedList>
                            <Text fontSize="lg" fontFamily='sans'><ListItem>Hackathon</ListItem></Text>
                            <Text fontSize="lg" fontFamily='sans'><ListItem>Rouge Factory Tour</ListItem></Text>
                            <Text fontSize="lg" fontFamily='sans'><ListItem>Advanced Manufacturing Tour</ListItem></Text>

                        </UnorderedList>
                    </Text>
                    
                    <img src={eventPic} alt="aya universe dubai"></img>
                </SimpleGrid>
            </div>
        </div>
    )
}