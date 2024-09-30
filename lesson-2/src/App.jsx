import ShowCalc from "./components/ShowCalc";
import CarList from "./components/CarList";
import Content from "./components/Content";
import ContentRest from "./components/ContentRest";
import Box from "./components/Box";
import MusicAlbum from "./components/MusicAlbum";
import PocemonList from "./components/PocemonList";
import TravelCard from "./components/TravelCard";

// function App() {
//   return (
//     // <div>
//     //   <h1>Lesson 2</h1>
//       {/* <ShowCalc />
//       <CarList />
//       <ContentRest
//         title="Title rest"
//         paragraph="Some paragraph rest"
//         image="https://picsum.photos/200"
//       />
//       <Content paragraph="Some paragraph 1" image="https://picsum.photos/200" />
//       <Content title="Title 2" image="https://picsum.photos/200" />
//       <Content
//         title="Title 3"
//         paragraph="Some paragraph 3"
//         image="https://picsum.photos/200/300"
//       />
//       <Content key="1" children="Child" ref="ref" /> */}
//       {/* <Box>
//         <h2>Heading 2</h2>
//         <p>Some text</p>
//       </Box>
//       <Box>Text</Box>
//       <Box children="Text" />
//       <Box
//         children={
//           <>
//             <h2>Heading 2</h2>
//             <p>Some text</p>
//           </>
//         }
//       /> */}
//       {/* <MusicAlbum
//         artist="The Beatles"
//         title="The White Album"
//         tracks={[
//           { order: 1, title: "Back in the U.S.S.R." },
//           { order: 2, title: "Dear Prudence" },
//           { order: 3, title: "Glass Onion" },
//           { order: 4, title: "Ob-La-Di, Ob-La-Da" },
//           { order: 5, title: "Wild Honey Pie" },
//           { order: 6, title: "The Continuing Story of Bungalow Bill" },
//           { order: 7, title: "While My Guitar Gently Weeps" },
//           { order: 8, title: "Happiness Is a Warm Gun" },
//           { order: 9, title: "Martha My Dear" },
//           { order: 10, title: "I'm So Tired" },
//           { order: 11, title: "Blackbird" },
//           { order: 12, title: "Piggies" },
//           { order: 13, title: "Rocky Raccoon" },
//           { order: 14, title: "Don't Pass Me By" },
//           { order: 15, title: "Why Don't We Do It in the Road?" },
//           { order: 16, title: "I Will" },
//           { order: 17, title: "Julia" },
//           { order: 18, title: "Birthday" },
//           { order: 19, title: "Yer Blues" },
//           { order: 20, title: "Mother Nature's Son" },
//           {
//             order: 21,
//             title: "Everybody's Got Something to Hide Except Me and My Monkey",
//           },
//           { order: 22, title: "Sexy Sadie" },
//           { order: 23, title: "Helter Skelter" },
//           { order: 24, title: "Long, Long, Long" },
//           { order: 25, title: "Revolution 1" },
//           { order: 26, title: "Honey Pie" },
//           { order: 27, title: "Savoy Truffle" },
//           { order: 28, title: "Cry Baby Cry" },
//           { order: 29, title: "Revolution 9" },
//           { order: 30, title: "Good Night" },
//         ]} */}
//       {/* /> */}
//     {/* </div> */}

//     <PocemonList pocemons={pokemons}/>
//   );
// }

function App(){
  // return(<PocemonList pocemons={pokemons}/>)
  const cardsInfo = [
    {
    "name": "Мальдивы",
    "description": "Тропический рай идеален для любителей дайвинга и  спокойного отдыха.",
    "imageUrl": "https://example.com/images/maldives.jpg",
    "stats": {
    "popularity": 9.5,
    "accessibility": "Круглый год",
    "climate": "Тропический",
    "timeofday": "night"
    }
    },
    {
    "name": "Исландия",
    "description": "Страна вулканов, гейзеров и невероятных ландшафтов.",
    "imageUrl": "https://example.com/images/iceland.jpg",
    "stats": {
    "popularity": 8.0,
    "accessibility": "Лучше летом",
    "climate": "Субарктический",
    "timeofday": "dawn"
    }
    },
    {
    "name": "Япония",
    "description": "Смесь древней культуры и современных технологий с удивительной природой.",
    "imageUrl": "https://example.com/images/japan.jpg",
    "stats": {
    "popularity": 9.2,
    "accessibility": "Круглый год",
    "climate": "Умеренный",
    "timeofday": "midday"
    }
    },
    {
    "name": "Новая Зеландия",
    "description": "Дом для приключений на природе, от треккинга до  каякинга.",
    "imageUrl": "https://example.com/images/newzealand.jpg",
    "stats": {
    "popularity": 8.8,
    "accessibility": "Круглый год",
    "climate": "Умеренно-морской",
    "timeofday": "dusk"
    }
    },
    {
    "name": "Патагония (Аргентина)",
    "description": "Рай для любителей треккинга и уединения на фоне  монументальных гор.",
    
    "imageUrl": "https://example.com/images/patagonia.jpg",
    "stats": {
    "popularity": 7.5,
    "accessibility": "Лучше весной и осенью",
    "climate": "Холодный",
    "timeofday": "dusk"
    }
    }
    ]
  return(
    <div>
      {cardsInfo.map((cardInfo)=>(
       <TravelCard cardInfo={cardInfo}/>
      ))}
    </div>
  )
}


  
// const pokemons = [
//   { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
//   { id: 2, name: "Charmander", type: "Fire" },
//   { id: 3, name: "Squirtle", type: "Water" },
//   { id: 4, name: "Pikachu", type: "Electric" },
//   { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
//   { id: 6, name: "Gengar", type: "Ghost/Poison" },
//   { id: 7, name: "Snorlax", type: "Normal" },
//   { id: 8, name: "Mewtwo", type: "Psychic" },
//   { id: 9, name: "Dragonite", type: "Dragon/Flying" },
//   { id: 10, name: "Eevee", type: "Normal" }
//  ];

export default App;
