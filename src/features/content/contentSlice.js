
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
      aboutData: {
        heading: "About",
        subheading: " About Soham Web",
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too a galley of type  and scrambled it to  a type specimen book. It has survived not only five centuries, but also typesetting,   remaining essentially remaining essentially remaining essentially  but als n typesetting,   remaining essentially remaining essentially remaining essentiallyess entially remaining essentially remaining essentiallyessentially  .",
      },
      aboutSectionData: {
        heading: "About Soham Web",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to a type specimen book. It has survived not only five centuries, but also typesetting, remaining essentially remaining essentially remaining essentially but also and scrambled it to a type specimen book. typesetting,",
      },
      Technologyfocus: {
        heading: "Tecnological Foucus",
        content: "we provide end -to end software and mobile application developmen services",
      },
      Leadership: {
        "heading": " Our Leadership Team",
        "content": "  Driving the Organzation by strength and wisdom, Believing to set clear expecations always diliver, and never breack trust."
      },
      SomeourWorksection2: {
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
      contactinformation: {
        heading: "CONTACT INFORMATIION",
        subheading: "Our some of these projects may seem interesting to you",
        content: "Readay To work with us ? Tell us More about your Project Requirement",
        text1: "Select Your Requirement",
        text2: "Select Your Requirement",
      },
      cheakbox1: {
        text1: "Enterprice Web Solution ",
        text2: "Mobile Apps Development",
        text3: "Hire Dedicated Resoures ",
        text4: "Enterprice Solution",
        text5: "CMS Development",
        text6: "Other",
      },
      cheakbox2: {
        text1: "UI/UX Services",
        text2: "Application Services",
        text3: "Framework Development",
        text4: "IT Consultancy",
        text5: " Digital Maketing",
      }
    },
  },
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(fetchcontents.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchcontents.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contents = action.payload
      })
      .addCase(fetchcontents.rejected, (state, action) => {
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


