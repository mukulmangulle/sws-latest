
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    isSuccess: false,
    isLoading: false,
    isError: false,
    contents: {
      homeData: {
        heading: "Hire*Certified Magento 2 Developers from India",
        subheading: "Hire Our Developers to Get Highly Appreciating  Developments",
        contactInfo:
        {
          number: "917999203537",
          email: "devendradevda90@gmail.com",
          link: "whatsApp",
        },
      },
      ourutility: {
        heading: "OUR UTILITY",
        contant: "Lemosys Infotech is a distinguished website development and web designing company serving to global clients  We provide highly professional services of the latest technology for web services to make your business more efficient and unique. We believe client service is not just a department but it’s a responsible job hence we maintain all possible high quality standard.",
        order: {
          text1: "web Designing & Development",
          text2: "Graphic Design",
          text3: "Digital Marketing",
          text4: "Mobile App Development",
          text5: "Software Testing"
        }
      },
      SomeourWorks: {
        heading: "SAME OUR WORK",
        contant: "Our some of these projects may seem interesting to you",
        card: {
          title1: " Allan Flowers Market  ",
          description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit  Curabitur elit risus, mattis a tincidunt quis, aliquet sit amet mauris. Cras nec massa enim. Aliquam congue imperdiet vestibulum.Quisque varius lectus eget est aliquet blandit. Sed et ante non neque volutpat gravida. Nulla dictum eros ac est consectetur sit amet tristique lectus ultrices.",
          title2: "Bright Sparqe",
          description2: "lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, Curabitur elit risus, mattis a tincidunt quis, aliquet sit amet mauris. Cras nec massa enim. Aliquam congue imperdiet vestibulum.Quisque varius lectus eget est aliquet blandit. Sed et ante non neque volutpat gravida. Nulla dictum eros ac est consectetur sit amet tristique lectus ultrices.",
          title3: "Ludo Earn",
          description3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit  Curabitur elit risus, mattis a tincidunt quis, aliquet sit amet mauris. Cras nec massa enim. Aliquam congue imperdiet vestibulum.Quisque varius lectus eget est aliquet blandit. Sed et ante non neque volutpat gravida. Nulla dictum eros ac est consectetur sit amet tristique lectus ultrices.",
        },
      },
      aboutus: {
        heading: "What Client Say About Us",
        contant: "Client  stisfaction is our primary conceren and that why we are their first choice.  Here are some of them telling about the Cosmonaut and Team ",
        childContainer1: {
          name: "Devendra Singh Devda",
          designation: "UI/UX & Geaphic Designer",
          testimonial: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Duis tempor,libero quis porta molestie,dui mauris pulvinar est,ac ullamcorper magna mauris id felis. Nulla facilisi. Cras sit amet turpis.Proin quis consectetur nisl."
        },
        childContainer2: {
          name: "Devendra Singh Devda",
          designation: "UI/UX & Geaphic Designer",
          testimonial: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Duis tempor,libero quis porta molestie,dui mauris pulvinar est,ac ullamcorper magna mauris id felis. Nulla facilisi. Cras sit amet turpis.Proin quis consectetur nisl."
        },
        childContainer3: {
          name: "Devendra Singh Devda",
          designation: "UI/UX & Geaphic Designer",
          testimonial: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Duis tempor,libero quis porta molestie,dui mauris pulvinar est,ac ullamcorper magna mauris id felis. Nulla facilisi. Cras sit amet turpis.Proin quis consectetur nisl."
        },
        childContainer4: {
          name: "Devendra Singh Devda",
          designation: "UI/UX & Geaphic Designer",
          testimonial: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Duis tempor,libero quis porta molestie,dui mauris pulvinar est,ac ullamcorper magna mauris id felis. Nulla facilisi. Cras sit amet turpis.Proin quis consectetur nisl."
        },
        childContainer5: {
          name: "Devendra Singh Devda",
          designation: "UI/UX & Geaphic Designer",
          testimonial: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Duis tempor,libero quis porta molestie,dui mauris pulvinar est,ac ullamcorper magna mauris id felis. Nulla facilisi. Cras sit amet turpis.Proin quis consectetur nisl."
        },
      },
      ourCustomers: {
        heading: "Our Customer ",
        contant: "Lemosys Infotech strives to cater the needs of clients in the best possible manner. What we practically do is pretty simple as an experienced website development and web designing company in India. But in the same time incredibly complex and professional. Hire Lemosys to create your company website in minutes",
      },
      ourPartner: {
        heading: "Our Partners ",
        childBox: {
          content: "Want to know more about SohamWeb's Life?",
        }
      },
      footerData: {
        aboutText: "At Soham Web Solution we endeavour t provide innovative, cost effective and optimum solutions that drive the growth of  your businesses across the world.",
        quickLinks: {
          heading: "Quick Links",
          text1: "About",
          text2: "Career",
          text3: "Contact Us",
          text4: "Blog",
        },
        policyLinks: {
          heading: "Our Plicies",
          text1: "Privacy Policy",
          text2: "Terms & Conditions",
          text3: "Support and Maintenance Packages",
          text4: "Shipping & Diliveary Policy",
          text5: "Cancellation & Refund Policy",
        },
        contactDetails: {
          heading: "Contact Info",
          text1: "+9178792-31700",
          text2: "+9170003-35673",
          text3: "+9177480-18188",
          text4: "contact@sohamsolution.com",
          text5: "12,Civil Lines,Chamunda Complex,  Dewas",
        },
        copyrightText: "Copyright © Soham Web Solution. All Rights Reserved."
      },
    
      aboutSectionData: {
        heading: " About Soham Web Solution ",
        text: "Welcome to Soham Web Solution – where innovation meets functionality to create web solutions that not only look great but also perform seamlessly. Based in Dewas, Madhya Pradesh, we are a web development company with a mission to transform your digital presence into a dynamic force that stands out in the online world.We believe that every line of code is a stroke of creativity that can transform an idea into a digital masterpiece. Our philosophy is simple: blend artistic design with cutting-edge technology to create web experiences that are not only functional but also aesthetically captivating.",
      },
      aboutData: {
        heading: " Reasons to count on us! ",
        subheading: " Our Journey: A Decade of Empowerment and Innovation",
        text: "It all began on September 3,2014, in a small Room that buzzed with the dreams and determination of three visionaries. This was the birthplace of Soham Web Solution, a hub of innovation that would soon become of web design excellence.Our early days were dedicated to mastering the art of web design, not just as a service but as a craft.We provided rigorous training, equipping aspiring designers with the tools to create digital artistry.As our expertise grew, so did our team. We took pride in offering employment to those we had trained, watching them flourish into skilled professionals. With each new member,our capabilities exanded, and our services diversified. Throughout the years, we’ve added layers of sophistication to our offerings. From advanced web development to immersive user experiences, every addition has been a step to wards betterment-a testament to our commitment to growth and innovation.Now,in our 10th year, we stand tall with a family of over 30 dedicated employees. we continue to nurture the next generation of talent,training more than 20students, the majority of whom we proudly integrate onto our workforce through our ‘training-plus-job program.Our joureney has been nothing short of  remarkable-a beautiful tapestry women from hard work,perseverance, and a relentless pursuit of knowledge. As we celebrate a decade of shaping the web, we remain committed to development, innovation, and thw empowerment of those who walk with us. And the Journey Continues...",
      },
      Technologyfocus: {
        heading: "Tecnological Foucus",
        content: "we provide end -to end software and mobile application development services ",
      },
      Leadership: {
        "heading": "Leading with Vision, Serving with Purposee",
        "content": " We're proud to introduce you to our leadership team – a group of visionary individuals who steer  us towards success with their expertise, experience, and passion for technology. "
      },
      SomeourWorksection2: {
        heading: "SAME OUR WORK",
        contant: "Our some of these projects may seem interesting to you",
        card: {
          title1: " Our Mission ",
          description1: "Our mission is to empower our clients through bespoke web solutions that enhance their brand, streamline their operations, and connect them with their audiences in meaningful ways. We believe in the transformative power of technology and its ability to solve complex problems and create new opportunities.",
          title2: "Our Vision",
          description2: "Founded in 2014, Soham Web Solution began as a small startup with big dreams. Today, we stand proud as a beacon of web development excellence, having served a diverse clientele ranging from local businesses to international corporations. Our journey has been fueled by our passion for technology and our commitment to delivering results that exceed expectations.",
          title3: "Our Promise",
          description3: "At Soham Web Solution, we promise to deliver web solutions that are tailored to your needs, built with precision, and launched with care. We are dedicated to your success and work tirelessly to ensure that your website not only meets but surpasses industry standards. Let's work together to turn your vision into reality.",
        }
      },

      blogpages: {
        head: "Latest Blog",
        latestblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },
        laravalblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },

        Fastivalblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },
        Wordpressblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },

        phpblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },

        Reactblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },
        shopifyblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },
        developmentblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },
        woocommerceblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        },
        wordpressplugin: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        }
        ,
        Allblog: {
          title1: "Unlocking the Potential: Add Me to Search Strategies",
          pregraph1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",

          title2: "Shopify vs Squarespace – Which is Better?",
          pregraph2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",

          title3: "Top 10 UI/UX Design Trends Every Designer Must Know",
          pregraph3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…",
        }

      },

      "singleblog": {
        title1: "Unlocking the Potential: Add Me to Search Strategies",
        content1: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…",
        content2: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…",
        title2: "Top 10 UI/UX Design Trends Every Designer Must Know",
        content3: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…"
      }
    },
  },
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(fetchcontents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchcontents.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contents = action.payload
      })
      .addCase(fetchcontents.rejected, (state) => {
        state.isLoading = false
        state.isError = true

      })
  },
});

export default contentSlice.reducer;

export const fetchcontents = createAsyncThunk("FETCH/CONTENTS", async () => {
  const response = await fetch("http://localhost:8000/contents");
  const data = await response.json();
  return data;
  // console.log(data)
});


