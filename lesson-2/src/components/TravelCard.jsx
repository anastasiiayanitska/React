import DestinationInfo from "./DestinationInfo";
import DestinationStats from "./DestinationStats";
import DestinationImage from "./DestinationImage";

export default function TravelCard({cardInfo}){
    return(
        <div>
            <DestinationImage url={cardInfo.url} name={cardInfo.name}/>
            <DestinationInfo description={cardInfo.description}/>
            <DestinationStats status={cardInfo.status}/>
        </div>
    )
}