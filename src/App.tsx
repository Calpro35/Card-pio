
import './App.css'
import {Card} from './components/card/card';
import { FoodData } from './interface/FoodData';




const data: FoodData[] = [
    { id:1, price: 50, title: "Pizza", image: "596343.jpg" },
    { id:2,  price: 15, title: "Hambúrguer", image: "hamburguer.jpg" },
    { id:3, price: 90, title: "Sushi", image: "Makizushi.jpg" },
    { id:4,  price: 15, title: "Hambúrguer", image: "hamburguer.jpg" },
    { id:5, price: 120, title: "Sushi", image: "Makizushi.jpg" },
    { id:5, price: 80, title: "Sushi", image: "596343.jpg" }
];


function App() {



  return (
    <>
        <div className="container">
            <h1>Cardápio</h1>
            <div className="card-grid" >

            {data.map(foodData =>
                <Card
                    key={foodData.title} // Sempre inclua uma chave única ao usar map
                    price={foodData.price}
                    title={foodData.title}
                    image={foodData.image}
                />
            )}


        </div>



        </div>


    </>
  )
}

export default App
