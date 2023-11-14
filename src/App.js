import React from 'react';
import {
  ChakraProvider,
  VStack,
  theme,
} from '@chakra-ui/react';
import NavigationBar from "./components/Navbar.js";
import Section from "./components/Section";
import Hero from "./components/Hero"
import About from "./components/About";
import Education from "./components/Education.js";
import Experience from './components/Experience.js';
import Current from "./components/Current"
import Goals from "./components/Goals.js"
import Activites from './components/Activities.js';


function App() {
  return (
    <div className="app">
      <ChakraProvider theme={theme}>
        {/* <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            
            
          </Grid>
        </Box> */}
        <VStack spacing={8}>
        </VStack>
        {/* <Navbar /> */}
        <NavigationBar/>
        <Hero />
            <Section id='aboutMe' paddingTop='`10`vh' section={<About/>}/>
            <Section id='education' paddingTop='`10`vh' section={<Education/>}/>
            <Section id='experience' paddingTop = '20`vh' section={<Experience/>}/>
            <Section id='current' paddingTop='`10`vh' section={<Current/>}/>
            <Section id='activities' paddingTop ='`10`vh' section = {<Activites/>}/>
            <Section id='goals' paddingTop ='`10`vh' section = {<Goals/>}/>
            
            
      </ChakraProvider>
    </div>
  );
}

export default App;
