import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-MediumItalic.woff2') format('woff2');
      font-weight: 500;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-Black.woff2') format('woff2');
        
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-Light.woff2') format('woff2');
         
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-LightItalic.woff2') format('woff2');
          
      font-weight: 300;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-BoldItalic.woff2') format('woff2');
          
      font-weight: bold;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-BlackItalic.woff2') format('woff2');
          
      font-weight: 900;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy-RegularItalic';
      src: url('fonts/Gilroy/hinted-Gilroy-RegularItalic.woff2') format('woff2'),
          url('fonts/Gilroy/hinted-Gilroy-RegularItalic.woff') format('woff'),
          url('fonts/Gilroy/hinted-Gilroy-RegularItalic.ttf') format('truetype');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-SemiBoldItalic.woff2') format('woff2'),
          url('fonts/Gilroy/hinted-Gilroy-SemiBoldItalic.woff') format('woff'),
          url('fonts/Gilroy/hinted-Gilroy-SemiBoldItalic.ttf') format('truetype');
      font-weight: 600;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-HeavyItalic.woff2') format('woff2'),
          url('fonts/Gilroy/hinted-Gilroy-HeavyItalic.woff') format('woff'),
          url('fonts/Gilroy/hinted-Gilroy-HeavyItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-ThinItalic.woff2') format('woff2'),
          url('fonts/Gilroy/hinted-Gilroy-ThinItalic.woff') format('woff'),
          url('fonts/Gilroy/hinted-Gilroy-ThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-Thin.woff2') format('woff2'),
          url('fonts/Gilroy/hinted-Gilroy-Thin.woff') format('woff'),
          url('fonts/Gilroy/hinted-Gilroy-Thin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-UltraLightItalic.woff2') format('woff2'),
          url('fonts/Gilroy/hinted-Gilroy-UltraLightItalic.woff') format('woff'),
          url('fonts/Gilroy/hinted-Gilroy-UltraLightItalic.ttf') format('truetype');
      font-weight: 200;
      font-style: italic;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Gilroy';
      src: url('fonts/Gilroy/hinted-Gilroy-UltraLight.woff2') format('woff2'),
          url('fonts/Gilroy/hinted-Gilroy-UltraLight.woff') format('woff'),
          url('fonts/Gilroy/hinted-Gilroy-UltraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
      font-display: swap;
  }
  
  
  
      `}
  />
)

export default Fonts