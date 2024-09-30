const cars = [
    "Audi",
    "BMW",
    "Mercedes",
    "VW",
    "Volvo"
]

export function CarList(){
    return <ul>
        {cars.map((car) => {
            return <li>{car}</li>
        })}
    </ul>
}