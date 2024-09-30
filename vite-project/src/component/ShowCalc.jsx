import  {multiply , divide } from "../utils/UsefulFunction.js"

function ShowCalc(){
    const dividResult = divide(10 , 2)
    return <div>
        <p>{multiply(4,3)}</p>
        <p>{dividResult}</p>
    </div>
}
export default ShowCalc;