import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton
} from '@chakra-ui/react'
import {  NavLink } from "react-router-dom";
import { useMediaQuery } from '@chakra-ui/react'
function ResponsiveNavbar() {
  const [activate] = useMediaQuery('(max-width: 900px)')

  return (
    activate && <Menu
      className="reponsive-navbar"
      fontFamily={'Gilroy-Bold'}
    >
    
    
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon color={'white'} boxSize={6} />}
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
        colorScheme="black"
        
      ></MenuButton>
      <MenuList
      //dark mode
      >
        <MenuItem
          fontFamily={'Gilroy-Bold'}
        >
          <NavLink to="/events" >
           Events
          </NavLink>
        </MenuItem>
        <MenuItem
          fontFamily={'Gilroy-Bold'}
        >
          <NavLink to="/teams">
            Teams
          </NavLink>
        </MenuItem>
       
      </MenuList>
    </Menu>
    
  );
  
  
}

export default ResponsiveNavbar;