import Lottie from 'lottie-react';
import animationData1 from "../../assets/validation.json";
import animationData2 from "../../assets/gdsc.json";
import "../../css/validation.css"

function EntryValidation() {
    return(<>
    <div className="outterbox">
        <div className='innerbox1'>
            <Lottie animationData={animationData2} loop={false} className='GDSC'/>
        </div>
        <div className='innerbox2'>
            <Lottie animationData={animationData1} loop={false} className='Validation'/>
        </div>
    </div>
    </>)
}

export default EntryValidation