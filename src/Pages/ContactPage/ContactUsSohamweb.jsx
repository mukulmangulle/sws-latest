import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography, RadioGroup, Grid, Button } from '@mui/material'
import React from 'react'
import Map from "../../assets/contactus soham web/map.svg"
import Input1 from '../../Child-Component/Input';


const ContactUsSohamweb = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };
    const boxShadowStyle = {
        boxShadow: "0px 0px 15px 0px #cccccc",

    };
    return (
        <>
            <Box  width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} marginBottom={5} >
                <Box  id="boxShadow" borderRadius={4} margin={5} sx={{ boxShadow: "0px 0px 20px 1px gray" }}>
                    <Box className="GETINTOUCH" display={'flex'} justifyContent={"space-between"} width={'100%'} flexWrap={'wrap'} >
                        <Box className="GETINTOUCH1" padding={7} width={{xl:"900px", xs: "100%", sm: "100%", md: "60%" }}  >
                            <Typography fontSize={45} textAlign={"center"} fontWeight={600} color={"#053480"} margin={2} sx={{ wordSpacing:"-5px" }}>Send Us a Message</Typography>
                           <FormControl> <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={12} sm={6}>
                                    {/* <TextField id="filled-basic" label="Name" variant="filled" fullWidth /> */}

                                    <Input1 name="name" label="Name" 
                                    // onClick={() => {alert("PLEASE FILL ") }} 
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <Input1 name="email" label="Email" />
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <Input1 name="text" label="Subject" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Input1 name="number" label="Phone Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth multiline rows={4} label="Message" variant="filled" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" className="gradientbutton" sx={{ width: "100%", padding: "10px", fontSize: "18px",marginTop:"30PX" }}>Send Message</Button>
                                </Grid>
                            </Grid></FormControl>
                        </Box>
                        <Box width={{xl:"550px", xs:"100%", sm:"100%", md: "40%" }}   className="GETINTOUCH2" paddingY={5} paddingX={13} >
                            <Typography variant='h4' id="h4"  color={"white"} >Get in Touch</Typography>
                            <Box>
                                <Box paddingY={1.5}>
                                    <Typography id="h4"  color={"white"} >Phone</Typography>
                                </Box>
                                <Box >
                                    <Typography id="typography" color={"white"} >+9009 140 325</Typography>
                                    <Typography id="typography" color={"white"} >+91 787 923 1700</Typography>
                                    <Typography id="typography" color={"white"} >+91 774 801 8188</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box paddingY={1.5}>
                                    <Typography   color={"white"} id="h4" >Email</Typography>
                                </Box>
                                <Box>
                                    <Typography id="typography" color={"white"} >contact@sohamsolution.com</Typography>
                                    <Typography id="typography" color={"white"} >hr@sohamsolution.com</Typography>
                                    <Typography id="typography"  color={"white"} >soham.solution@yahoo.com</Typography>
                                </Box>
                            </Box>
                            <Box paddingY={1.5}>
                                <Box>
                                    <Typography color={"white"} id="h4">Address</Typography>
                                </Box>
                                <Box>
                                    <Typography id="typography"  color={"white"} >
                                        12 Civil Line Chamunda Complex,
                                        Dewas, Madhya Pradesh, PIN:
                                        455001
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box>
                <img className='map-img' src={Map} alt="" />
            </Box>
        </>
    )
}

export default ContactUsSohamweb
