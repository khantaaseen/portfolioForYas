
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import aya from "../imgs/aya.jpg"
import beach from "../imgs/beach.jpg"
import book from "../imgs/book.jpg"
import fishing from "../imgs/fishing.jpg"
import sanjuan from "../imgs/sanjuan.png"
import waterfall from "../imgs/waterfall.jpg"


export default function About() {


    return (
        <section>
            <h1 className="about-title">About me</h1>
                <div className="about">
                    {/* <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est labor
                    </p> */}
                    <SimpleGrid columns={3} spacing="40px">
                            <img src={aya} width="450px" height="380px" alt="aya universe dubai"></img>
                            <img src={book} width="450px" height="380px" alt="beach"></img>
                            <img src={fishing} width="450px" height="380px" alt="book by water"></img>
                            <img src={waterfall} width="450px" height="380px" alt="fishing"></img>
                            <img src={sanjuan} width="450px" height="380px" alt="snjuan"></img>
                            <img src={beach} width="450px" height="380px" alt="placeholder"></img>
                    </SimpleGrid>
                </div>
        </section>
    )
}