import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Blog1 from "../../assets/BlogPage/blog1.png"
import Blog2 from "../../assets/BlogPage/blog2.png"
import Blog3 from "../../assets/BlogPage/blog3.png"
import BlogButton from '../../Child-Component/BlogButton';

const LatestBlog = () => {
    return (
        <>
            <Box  sx={{ maxWidth: 1920, margin: 'auto' }}  display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>

                < Box width={"87%"} >
                    <Box marginTop={7} >
                        <Typography  marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>Latest Blog</Typography>

                        <Box  className="flex-between-wrap">

                            {/* 1 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>


                    </Box >

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>Laraval Blog</Typography>

                        <Box className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>

                    </Box>

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>Fastival Blog</Typography>

                        <Box className="flex-between-wrap">

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>

                    </Box>

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}> Wordpress Blog</Typography>

                        <Box className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>Php Blog</Typography>
                        <Box className="flex-between-wrap">

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>React Blog</Typography>
                        <Box className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>Shopify Blog</Typography>
                        <Box className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>Web Development Blog</Typography>
                        <Box className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>Woo Commerce Blog</Typography>
                        <Box className="flex-between-wrap">

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box marginTop={7}>
                        <Typography marginLeft={4} marginBottom={7} variant='h4' color={"#053480"} fontWeight={700}>Wordpress Plugins Blog</Typography>
                        <Box className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box marginY={7} >
                        <Typography marginLeft={4} marginBottom={7} variant='h4'  color={"#053480"} fontWeight={700}>All Blog</Typography>
                        <Box className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" className='card-heading' >
                                        Unlocking the Potential: Add Me to Search Strategies
                                    </Typography>
                                    <Typography className='card-typography' >
                                        Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                        ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                        Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                        Your Google People Card?Where is my…
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card'  >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Shopify vs Squarespace – Which is Better?
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish
                                        an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making
                                        the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the
                                        intricacies…
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" className='card-heading'  >
                                        Top 10 UI/UX Design Trends Every Designer Must Know
                                    </Typography>
                                    <Typography className='card-typography' >
                                        In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role
                                        in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create
                                        compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every
                                        designer must know to…
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default LatestBlog;