import { extendTheme } from "@chakra-ui/react"
import Fonts from "./fonts"
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    fonts: {
        heading: "Gilroy-Semibold",
        body: "Gilroy-Regular",
      }
      
})