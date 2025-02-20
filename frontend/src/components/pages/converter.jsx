import Navbar from "../common/Navbar";
import CurrencyConverter from "../views/converter";
import Footer from "../views/footer";

function ConverterPage() {
  return (
    <div id="converter" className="h-screen">
      <Navbar />
      {/* <Hero /> */}
      {/* <NyxCipher /> */}
      <div className="advantage nyxBorderTop nyxContainer" id="features">
        <div className="nyxBorderX nyxBorderY">
          <div className="border border-[#747474aa]">
            <div className="2xl:mx-[155px] pt-0 mt-0 xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px] xl:mt-[38px] lg:mt-[20px] md:mt-[6px] sm:mt-0 md:mb-[44px] sm:mb-[42px] mb-[42px]">
              <p className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text font-regular text-[16px] sm:text-[24px] font-[RobotoMono]">
                Currency Converter
              </p>
              <h1 className=" text-white text-[26px] sm:text-[35px] md:text-[57px] font-[VioletSans]">
                Simple Currency Converter API with Live Exchange Rates
              </h1>
            </div>
          </div>

          <div className="nyxBorderTop  bg-[#070C10] bg-[url('../assets/images/bg_images/rightLighting.png')] bg-no-repeat bg-right-top">
            <div className="gridLine xl:pt-[64px] lg:pt-[40px] md:pt-[24px] sm:pt-[12px] pt-[12px] xl:pb-[64px] lg:pb-[40px] md:pb-[24px] pb-[24px]">
              <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px] font-[RobotoMono] flex flex-col gap-12">
                <CurrencyConverter />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <NyxToolkit /> */}
      {/* <NyxVsPaal /> */}
      {/* <Partnering /> */}
      {/* <JoinUs /> */}
      {/* <Faqs /> */}
      <Footer />
    </div>
  );
}

export default ConverterPage;
