import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';

function Careertoggle3() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        < Box margin={2.5} id="box-shadow" >

          {/* 1 */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary   >
                   <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} paddingY={1.5}>
                   <Typography variant='h5'  paddingLeft={1.5} fontWeight={550} > Web Designer </Typography>
                    <AddIcon fontSize='large' sx={{color:"#0160E7"}} />
                   </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box paddingX={1.5} >
        
                            {/* <Button className='apply-now' sx={{ color: "white", width: "130px", height: "33px", borderRadius: "15PX" }}  >Apply Now</Button> */}

                        <Box display={'flex'}>
                            <Typography fontSize={18} fontWeight={600}>Experience :</Typography>
                            <Typography color={"gray"}>0-1 year</Typography>
                        </Box>

                        <Box display={'flex'} marginY={1}>
                            <Typography fontSize={18} fontWeight={600} >NO of  Openings:</Typography>
                            <Typography color={"gray"}>1</Typography>
                        </Box>

                        <Box display={'flex'} marginBottom={3}>
                            <Typography fontSize={18} fontWeight={600}>Location :</Typography>
                            <Typography color={"gray"}> 12,Civil Lines,Chamunda Complex,Dewas </Typography>
                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={18} marginY={2} >Roles & Responsibilities</Typography>

                            <Box display={"flex"} alignItems={"start"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>

                                    Responsible for end-to-end recruitment from Fresher to Senior-level IT positions to fulfill the
                                    internal requirements of the company.</Typography>
                            </Box>

                            <Box display={"flex"} alignItems={"start"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Posting vacancies on Job portals, company's careers page, social media, Job boards and internal and mass
                                    mailing to reach out to a maximum qualified pool of candidates.</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Making cold calls, scheduling and managing recruitment drives.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Providing shortlists of qualified candidates to hiring managers</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Monitor key HR metrics, including time-to-fill, time-to-hire, and source of hire.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}> Issue offer and appointment letters, playing a pivotal role in the hiring process.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Contributing to policy creation and implementation, ensuring alignment with organizational goals.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}> Manage employee attendance and leave management, ensuring accurate records and compliance.</Typography>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}> Lead social media management, creating engaging content, posters, and timely posts, enhancing the
                                    company's online presence.</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Host and organize celebrations and events to boost team morale and camaraderie.</Typography>

                            </Box>
                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={18} marginY={2} >Qualifications:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Education: Graduation from any stream.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Excellent verbal and written English communication..</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Basic computer skills, Word and Excel experience preferred along with strong typing skills. </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Should have effective convincing and negotiation skills to impress and attract top talent.</Typography>
                            </Box>

                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={18} marginY={2} >Benefits:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>5 Days working</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>12 Paid leaves</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}> 13 Official holidays</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Office parties and celebrations</Typography>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Friendly work culture</Typography>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Skill development/ Employee engagement activities</Typography>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Annual trips</Typography>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} fontSize={19} color={'GRAY'}>Supportive seniors</Typography>

                            </Box>
                        </Box>
                    </Box>
                </AccordionDetails>
                <CareerButton />

            </Accordion>

       
           
        </Box>
    );
}

export default Careertoggle3;
