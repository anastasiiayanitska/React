import Greeting from "./greeting"
import ShoppingList from "./list"
import OrderList from "./OrderList";

const items =[
  {id:1 , name: "Milk"},
  {id:2, name:"Chokolade"},
  { id:3, name: "Watter"}
];

const orderLists = [
  {id: 123, status: "в пути"},
  {id: 125, status: "обработан"}
]
function App() {
 
return (
  <div>
  <Greeting name="Anastasiia" />
  <ShoppingList items={items}/>
  {
    orderLists.map((element) =>{
      return (
        <OrderList key = {element.id}
        id={element.id}
        status={element.status} />
      )
    })
  }
  </div>
)

}
export default App
