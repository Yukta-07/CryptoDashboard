import { Button, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors:{
    purple:{
      500:"#5F00D9"
    },
    p:{
      purple:"#5F00D9",
      black:"#171717",
    },
    black: {
      5:"#F3F3F7",
      10:"EEEEF4",
      20:"#D8DDE2",
      40:"#BABAC4",
      60:"#797E82",
      80:"#535D66",
    }

  },

  textstyles :{
    h1:{
      fontSize:{
        base:"30px",
        md:"32px",
      },
      color:"p.black",
      lineHeight: {
        base:"34px",
        md:"36px"
      }
    },
    h2:{
      fontSize:{
        base:"24px",
        md:"28px",
      },
      color:"p.black",
      lineHeight: {
        base:"28px",
        md:"32px"
      }
    },
    h3:{
      fontSize:{
        base:"22px",
        md:"24px",
        xl:"32px",
      },
      color:"p.black",
      lineHeight: {
        base:"28px",
        md:"32px"
      }
    },
    h4:{
      fontSize:{
        base:"20px",
        md:"22px",
      },
      color:"p.black",
      lineHeight: {
        base:"24px",
        md:"36px"
      }
    },
    h5:{
      fontSize:{
        base:"18px",
        md:"22px",
      
      },
      color:"p.black",
      lineHeight: {
        base:"26px",
        md:"30px"
      }
    },
    h6:{
      fontSize:{
        base:"16px",
        md:"20px",
      
      },
      color:"p.black",
      lineHeight: {
        base:"24px",
        md:"28px"
      }
    }
  },

  fontStyles:{
  xs:"12px",
  am:"14px",
  base:{base:"16px",md: "18px" },
  lg:{base:"18px" , md:"20px"},
  xl:{base:"20px" , md:"22px"},
  "2xl":{base:"22px", md:"24px"},
  "3xl":{ base:"24px", md:"28px"},
  "4xl": {base:"30px" , md:"32px"},


  },
    fonts: {
        heading: "Ubuntu",
        body:"Ubuntu",
    },
    styles: {
        global: {
          'html, body': {
           bg:"#F3F3F7",
           
          },
         
        },
      },
      components:{
        Button: {
          baseStyle: {
            fontWeight:"bold",
            borderRadius:"10px"
          }
        }
      }
},withDefaultColorScheme({ colorScheme:"purple"}))