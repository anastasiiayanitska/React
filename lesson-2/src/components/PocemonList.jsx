import Pocemon from "./Pocemon"
export default function PocemonList({pocemons}){
    return (
    <ul>
        {pocemons.map((pocemon) =>{
            return <Pocemon id = {pocemon.id} name = {pocemon.name} type={pocemon.type} />
        })}
    </ul>
    )
}