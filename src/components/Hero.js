import React from "react";
import { Heading, Center, Box, SimpleGrid } from '@chakra-ui/react'
import "../styles.css"


export default function Hero(){

    // const { ref, inView } = useInView({
    //     threshold: 0.5,
    //     triggerOnce: true,
    //     rootMargin: '0px 0px -10% 0px', // Wait until the element is 10% from the viewport bottom
    //   })

    return(
        <section>
             <Box layerStyle='section' className='banner_bg-image' id='home'>
                 <Center h='100%'>
                <SimpleGrid columns={1}>
                <Heading fontWeight='medium' size={['sm', 'md']}>
                    Hello! I&apos;m
                </Heading>
                {/* <SlideFade ref={ref} in={inView} offsetX='-30px'> */}
                    <Heading variant='bannerMain' size={['3xl', '4xl']}>
                    Yasmin,
                    </Heading>
                {/* </SlideFade>
                <SlideFade ref={ref} in={inView} offsetY='30px'> */}
                    <Heading
                    variant='bannerSub'
                    size={['md', 'lg']}
                    as='h4'
                    textAlign='center'
                    >
                    Ford Virtualization Engineer
                    </Heading>
                {/* </SlideFade> */}
                </SimpleGrid>
            </Center>
            </Box>
            {/* <h1>Hello! I'm Yasmin</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.</p> */}
        </section>
    )
}