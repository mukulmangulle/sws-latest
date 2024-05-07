import { Box, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Checkbox, FormGroup, RadioGroup, Radio, FormLabel, FormControlLabel } from '@mui/material'
import React from 'react'
import Input1 from '../../Child-Component/Input';

const Phpdepartmentform = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  const boxShadowStyle = {
   
    boxShadow: "0px 0px 15px 0px #cccccc" ,

  };
  return (
    <>
      <Box padding={6} >
        <Typography   id='Heading-h2' variant='h2'>CONTACT INFORMATIION</Typography>
        <Typography margin={2} fontSize={21} textAlign={'center'}>Our some of these projects may seem interesting to you</Typography>


        <Box width={"100"} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'}>

          <Box  id="form-control" style={boxShadowStyle} paddingTop={5} paddingBottom={1} paddingX={7} width={"77%"} borderRadius={3}   marginTop={3} >
            <Box width={"100%"}  >
              <Typography   variant='h3' fontSize={'30px'} fontWeight={600} color={"#053480"}>Readay To work with us ? Tell us More about your </Typography>
              <Typography  variant="h3" fontSize={"30px"} fontWeight={600} color={"#053480"} gutterBottom>
                Project Requirement
              </Typography>
            </Box>
            <Box  display={'flex'} justifyContent={"space-between"} width={'100%'} flexWrap={'wrap'} >
              <Box padding={0} width={'330px'} paddingTop={1.5}>
                <Typography variant='h4' fontSize={22} component="legend">Select Your Requirement</Typography>
               
                <Input1 name="name" label="Name"/>
               <Input1 name="email" label="Email"/>
               <Input1 name="number" label="Phone"/>
             


                <FormControl fullWidth margin="normal" required  >
                  <InputLabel fontSize={22} id="requirement-label">Select Your Requirement</InputLabel>
                  <Select
                    labelId="requirement-label"
                    id="requirement"
                    name="requirement"
                    label="Select Your Requirement"
                    variant="filled"
                  >
                    <MenuItem value="Enterprise Web Solution">Enterprise Web Solution</MenuItem>
                    <MenuItem value="UI/UX Services">UI/UX Services</MenuItem>
                    <MenuItem value="Mobile Apps Development">Mobile Apps Development</MenuItem>
                    <MenuItem value="Application Services">Application Services</MenuItem>
                    <MenuItem value="Hire Dedicated Resources">Hire Dedicated Resources</MenuItem>
                    <MenuItem value="Framework Development">Framework Development</MenuItem>
                    <MenuItem value="Enterprise Solution">Enterprise Solution</MenuItem>
                    <MenuItem value="IT Consultancy">IT Consultancy</MenuItem>
                    <MenuItem value="CMS Development">CMS Development</MenuItem>
                    <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
                  </Select>
                  
                </FormControl>
                <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={3}
          variant="filled"
          margin="normal"
        />

              </Box>
              <Box width={"350px"} padding={0}   >
               
                <FormControl component="fieldset" fullWidth margin="normal" >
                  <Box borderBottom={2} color={"#053480"} padding={0.5} >
                  <Typography color={'gray'} variant='h3' fontSize={30} component="legend">Select Your Requirement</Typography>
                     
                  </Box>
                  <RadioGroup row aria-label="project-budget" name="project-budget">
                    <Box display={'flex'} alignItems={"start"} justifyContent={"center"} flexDirection={'column'} >
                      <FormControlLabel control={<Checkbox />} label="Enterprice Web Solution" />
                      <FormControlLabel control={<Checkbox />} label="Mobile Apps Development" />
                      <FormControlLabel control={<Checkbox  />} label="Hire Dedicated Resoures" />
                      <FormControlLabel control={<Checkbox />} label="Enterprice Solution" />
                      <FormControlLabel control={<Checkbox />} label="CMS Development" />
                      <FormControlLabel control={<Checkbox />} label="Other" />
                    </Box>
                  </RadioGroup>
                </FormControl>
               
              </Box>
         

         {/* section3 */}
              <Box width={'200px'} paddingTop={4.5}>
                <FormControl component="fieldset" fullWidth margin="normal">

                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="UI/UX Services" />
                    <FormControlLabel control={<Checkbox />} label="Application Services" />
                    <FormControlLabel control={<Checkbox />} label="Framework Development" />
                    <FormControlLabel control={<Checkbox />} label="IT Consultancy" />
                    <FormControlLabel  control={<Checkbox />} label="Digital Maketing" />
                  </FormGroup>
                </FormControl>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Phpdepartmentform
