import { useState, useEffect } from 'react'
import { Link, Box, Flex, Text, Stack } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import "../styles.css"


// export default function Navbar(){
//   return (
//       <header className="header">
//           <nav>
//               <a href="#" className="home">Home</a>
//               <a href="#" className="home">About</a>
//               <a href="#" className="home">Education</a>
//               <a href="#" className="home">Current Work</a>
//               <ColorModeSwitcher justifySelf="flex-end"/>
//           </nav>
//       </header>

//   )
// }

const CloseIcon = () => (
  <svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <title>Close</title>
    <path
      fill='white'
      d='M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z'
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width='24px'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    fill='white'
  >
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
)

const MenuToggle = (props) => {
  const { toggle, isOpen } = props
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = (props) => {
  const { children, to = '/', hoverColor, scrolled, ...rest } = props
  return (
    <Link
      href={to}
      padding='0 5px 0 5px'
      _hover = {{
        textDecoration: 'none',
        transitionDuration: '.2s',
        color: scrolled ? hoverColor : 'black',
        bg: scrolled ? 'rgba(0,0,0,0)' : hoverColor,
        borderRadius: scrolled ? '0px' : '5px',
        transform: 'scale(1.1)',
        transitionTimingFunction: 'ease-in-out'
      }}
    >
      <Text display='block' {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ( props ) => {
  const { isOpen, scrolled } = props
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'center', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
        pb={[4, 4, 0, 0]}
      >
        <MenuItem to = '#' scrolled = {scrolled}>Home</MenuItem>
        <MenuItem to='#aboutMe' scrolled={scrolled}>About</MenuItem>
        <MenuItem to='#education' scrolled={scrolled}>Education</MenuItem>
        <MenuItem to='#experience' scrolled={scrolled}>Experience</MenuItem>
        <MenuItem to='#current' scrolled={scrolled}>Current</MenuItem>
        <MenuItem to='#activities' scrolled = {scrolled}>Activites</MenuItem>
        <MenuItem to='#goals' scrolled = {scrolled}>Goals</MenuItem>
        <ColorModeSwitcher justifySelf="flex-end"/>
      </Stack>
    </Box>
  )
}

const NavBarContainer = ( { children, scrolled } ) => {

  return (
    <Flex
      position='fixed'
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      pr={8}
      pl={8}
      pt={1}
      pb={1}
      bg={['rgba(17,17,17, 0.5)', 'rgba(17,17,17, 0.5)', scrolled ? 'rgba(17,17,17, 0.5)' : 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      backdropFilter="auto"
      backdropBlur={[scrolled ? '4px' : 'transparent']}
      zIndex='9999'
    >
      {children}
    </Flex>
  )
}

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrolled])

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer scrolled={scrolled}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} scrolled={scrolled}/>
    </NavBarContainer>
  )
}
export default NavigationBar