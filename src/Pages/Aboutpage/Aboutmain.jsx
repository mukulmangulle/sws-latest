import React, { useEffect, useState } from 'react'

import AboutSection1 from './AboutSection1'
import AboutSection2 from './AboutSection2'
import TecnologicalFoucus from './TecnologicalFoucus'
import LeaderShipTeam from './LeaderShipTeam'
import Someourwork2 from './Someourwork2'
import ContactInformtion from './ContactInformtion'
import { Box, CircularProgress } from '@mui/material'

const Aboutmain = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = () => {
   
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  };

  
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <AboutSection1 />
      <AboutSection2 />
      {/* <TecnologicalFoucus /> */}
      <LeaderShipTeam />
      <Someourwork2 />
      <ContactInformtion />
    </>
  )
}

export default Aboutmain
