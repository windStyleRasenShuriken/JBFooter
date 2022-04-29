import React from 'react';
import { Typography,Grid } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Footer = () => {
  return (
   <Grid container sx={{ marginTop: '50px', padding: "30px", boxShadow: "none", width: '100%', backgroundColor:'#273773'}}>
    
     <Grid item xs={12}  >
          <h2  style={{ fontSize: '36px', marginTop: '10px',marginLeft:'20px',color:'#FFFFFF',display:'flex',justifyContent:'left',fontWeight: '700' }}><b>Partnered<span style={{color:'#75ffd8'}}>Org</span></b></h2></Grid>
      
    
     <Grid container sx={{ display: 'flex' }}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1} />
        <Grid item xs={6} sm={3}>
          <Typography variant="h4" paddingBottom="10px" color={"#FFFFFF"} sx={{fontSize:'27px',fontWeight:'600',fontFamily:'Poppins'}}>Quick Links</Typography>
          
        
            <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Incubation</Typography>
          
            <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Research</Typography>
            <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Placement</Typography>
            <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Create Studio</Typography>
        </Grid>


        <Grid item xs={6} sm={3} >
        <Typography variant="h4" paddingBottom="10px" color={"#FFFFFF"} sx={{fontSize:'27px',fontWeight:'600',fontFamily:'Poppins'}}>Contact Us</Typography>
           
        <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Help and Support</Typography>
        <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Privacy Policy</Typography>
        <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Terms and Conditons</Typography>
          </Grid>

        <Grid item xs={12} sm={3}>
        <Typography variant="h4" paddingBottom="10px" color={"#FFFFFF"} sx={{fontSize:'27px',fontWeight:'600',fontFamily:'Poppins'}}>Help Menu</Typography>
        <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>About</Typography>
        <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Features</Typography>
        <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Work</Typography>
        <Typography sx={{color:'#FFFFFF',fontSize: '22px',fontWeight: '400',letterSpacing: '0.3px',fontFamily:'Poppins'}}><KeyboardDoubleArrowRightIcon sx={{color:'#75ffd8'}}/>Career</Typography>
        </Grid>
      </Grid>
   </Grid>
  )
}

export default Footer