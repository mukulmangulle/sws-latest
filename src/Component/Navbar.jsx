import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swslogo from "../assets/soham.svg"
import Down from "../assets/down-arow.svg"
import Sidebar from '../Pages/Toggle/Sidebar';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';




const Navbar = () => {

  return (

    <Box className='navbar' width={'100%'} bgcolor={"#053480"} position={"sticky"} top={0} display={'flex'} alignItems={'center'} >
      {/* <AppBar position="static" display={'fle x'} alignItems={'center'} justifyContent={'center'} > */}
       {/* <Toolbar >  */}
      <Box flexGrow={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>

        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} height={'90PX'} width={'87%'} >
          <Link  href="/" >
            <img color='#FFFFFF' src={Swslogo} alt="" id='sws-logo' />
          </Link>

          <Box flexGrow={1 / 7} display={'flex'} alignItems={'center'} justifyContent={'space-between'}
            id='ul-list' sx={{ display: { xs: 'none', md: 'flex' } }}>


            <Box id="ul-box">
              <Typography id="ul-list" style={{ color: 'white', textDecoration: "none" }}>Company</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box>
            <Box id="ul-box">
              <Typography  id="ul-list" style={{ color: 'white', textDecoration: "none" }} >Service</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box>

            <Box id="ul-box" >
              <Typography id="ul-list" style={{ color: 'white', textDecoration: "none" }} color={'#FFFFFF'}  >Soltions</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box>
            <Box id="ul-box">
              <Typography style={{ color: 'white', textDecoration: "none" }} display={'flex'} color={'#FFFFFF'} flexWrap={'nowrap'} id="ul-list">Hire Developers</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box>

            <Box id="ul-box">
              <Typography style={{ color: 'white', textDecoration: "none" }} id='ul-list' color={'#FFFFFF'}>work</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box>

            <Box>
              <Button id='hire-button'>Hire Developer</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box marginRight={3} sx={{ display: { xs: "flex", md: "none" } }}>
        <Sidebar />

      </Box>
  {/* </Toolbar> */}
  {/* </AppBar> */}

    </Box>
  )
}

export default Navbar;
