import './App.css';
import element from './components/JSX_Rendering';
import GetVerdictWeather from './components/Components_Props';
import LampComponent from './components/LampComponent';
import ProductsList from './components/Products_List';
import Form from './components/Form'


function App() {
  return (
    /* task_1 */
    /* element */
    <>
    {/* task_2 */}
   <GetVerdictWeather degrees='15'/>
   <GetVerdictWeather degrees='25'/>

   {/* task_3 */}
   <LampComponent />

    {/* task_4 */}
    <h3>Список продуктов для пиццы</h3>
     <ProductsList products={["Мука", "Вода", "Яйца", "Томатная паста", "Пеперони", "Моцарелла"]} />
     {/* task_5 */}
    <Form />
    </>

  )
}

export default App;
