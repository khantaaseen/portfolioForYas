
import React from "react";
import { Text } from "@chakra-ui/react";
import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'  
import ford from "../imgs/FordTeamPic.JPG"
import "../styles.css";

// export default function Experience(){
//     return (
//         <div>
//             <h1 className="about-title">Experience</h1>
//             <div className="exp-container">
//                 <img src={ford} className="ford-img" alt="ford"></img>
//                 <div className="exp-scroll-container">
//                     <div className="exp-scroll-obj">
//                         <Text fontSize='xl'>Cloud Virtualization  Engineer - Ford Motor Co <br></br><Text fontSize='md'>Jan 2023 - Present </Text></Text>
//                             <UnorderedList>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                             </UnorderedList>
//                         <Text fontSize='xl'>Cloud Virtualization Systems Engineer - Ford Motor Co  <br></br><Text fontSize='md'>Jun 2022 - Jan 2023</Text> </Text>
//                             <UnorderedList>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                             </UnorderedList>
//                         <Text fontSize='xl'>Data Engineer - Ford Motor Co  <br></br> <Text fontSize='md'>Jan 2022 - Jun 2022</Text></Text>
//                             <UnorderedList>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                             </UnorderedList>
//                         <Text fontSize='xl'>Dala Loss Prevention Analyst - Ford Motor Co  <br></br> <Text fontSize='md'>May 2021 - Jan 2022</Text> </Text>
//                             <UnorderedList>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                                 <Text pl={3}><ListItem >Write short description of responsibilites here</ListItem></Text>
//                             </UnorderedList>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


export default function Experience() {
    return (
        <div>
            <h1 className="about-title">Experience</h1>
            <div className="exp-container">
                <img src={ford} className="ford-img" alt="ford"></img>
                <div className="exp-scroll-container">
                    <div className="exp-scroll-obj">
                        <Text fontSize='2xl'>Compute Virtualization Engineer <br></br><Text fontSize='md'>Ford College Graduate</Text><Text fontSize='md'>May 2022 - Present </Text></Text>
                        <UnorderedList>
                            <Text pl={2} fontSize="xl">6 Months on Automation Team</Text>
                            <Text pl={7} fontSize="lg"><ListItem>Training</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>CLAM</ListItem></Text>

                            <Text fontSize="xl" pl={2}>6 Months on Engineering Team</Text>
                            <Text pl={7} fontSize="lg"><ListItem>Product Manager: VMware Aria Operations</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>vCenter Appliance Upgrades</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>VMware LCM</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>VMware Tools</ListItem></Text>

                            <Text fontSize="xl" pl={2}>6 Months on Opertions Team</Text>
                            <Text pl={7} fontSize="lg"><ListItem>Scripting and Automation</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>Host upgrades/builds, field testing, migrations. etc.</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>Support with work orders, change requests and incident calls</ListItem></Text>

                        </UnorderedList>

                        <Text fontSize='2xl'>Cyber Security Analyst <br></br> <Text fontSize='md'>Intern-Contract</Text> <Text fontSize='md'>May 2021 - May 2022</Text></Text>
                        <UnorderedList>
                            <Text pl={7} fontSize="lg"><ListItem>Enhanced Ford Global USB protection efforts by restricting USB hard drives through endpoint group policies.</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>Reviewed and deployed Symantec Endpoint Protection policies</ListItem></Text>

                        </UnorderedList>

                        <Text fontSize='2xl'>GDIA Data Engineer <br></br> <Text fontSize='md'>Intern-Contract</Text> <Text fontSize='md'>May 2020 - Jan 2021</Text></Text>
                        <UnorderedList>
                            <Text pl={7} fontSize="lg"><ListItem>Qlik Sense</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>Modeled metrics such as SLAs and KPIs</ListItem></Text>
                            <Text pl={7} fontSize="lg"><ListItem>Standardization and documentation of data quality definitions</ListItem></Text>


                        </UnorderedList>

                    </div>
                </div>
            </div>
        </div >
    )
}