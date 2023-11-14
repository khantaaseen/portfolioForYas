import React from "react";
import
{ 
    Text,
    Box
} 
from '@chakra-ui/react'
import grad from "../imgs/grad.jpeg"
import ouLogo from "../imgs/ou-logo.jpeg"
import "../styles.css"


// export default function Education(){
//     return (
//     <div>
//         <section>
//         <h1 className="about-title">Education</h1>
//         <Box className="edu-banner"></Box>
//             <div className="edu-content">
//                 <Text fontSize='xl' w='100%'>Oakland University STAP -- M.S. in Information Technology Management <br></br> 
//                     <Text fontSize='lg' w='100%'>Specialization: Information Security</Text> 
//                     <br></br>
//                     <Text fontSize='xl' w='100%'>Oakland university -- B.S. in Information Security Management<br></br></Text>
//                 </Text>
//                 <img src={ouLogo} width="365ox" height="366px" className="logo" alt="logo"></img>
//                 <img src={grad} width="293ox" height="366px"className="grad" alt="gradpic"></img>
//             </div>
//         </section>
//     </div>
//     )
// }

export default function Education(){
    return (
    <div>
        <section>
        <h1 className="about-title">Education</h1>
        <Box className="edu-banner"></Box>
            <div className="edu-content">
                <Text fontSize='2xl' w='100%'>Oakland University:<br></br> 
                    <Text fontSize='xl' w='100%'>M.S. in Information Technology</Text>
                    <Text fontSize='lg' w='100%'>December 2023</Text>
                        <br></br>
                    <Text fontSize='2xl' w='100%'>Oakland University:<br></br></Text>
                    <Text fontSize='xl' w='100%'>B.S. in Information Technology</Text>
                    <Text fontSize='lg' w='100%'>Specializaion: Information Systems</Text>
                    <Text fontSize='lg' w='100%'>May 2022</Text>


                    
                </Text>
                <img src={ouLogo} width="365ox" height="366px" className="logo" alt="logo"></img>
                <img src={grad} width="293ox" height="366px"className="grad" alt="gradpic"></img>
            </div>
        </section>
    </div>
    )
}