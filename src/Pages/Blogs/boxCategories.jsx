import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux';



const boxCategories = () => {

    const { categoriescontents, isLoading } = useSelector((state) => state.categorie)

    return (
        <>
            <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6}>
                <Box width={"85%"}  >
                    <Typography variant='h3' id='Heading-h2' color={'#053480'} fontWeight={600} marginBottom={3}   >All Categories</Typography>
                    <Box id="categories" display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>


                        {categoriescontents?.slice(3, 7).map((categoriescontent) => (
                            <Box className="categories-box"  >
                                <Typography id="categories-box-typo" >
                                    {categoriescontent.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box >


                </Box>
            </Box>
        </>
    )
}

export default boxCategories;
