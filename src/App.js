import Header from "./components/header";
import {useState, useEffect} from 'react';
import axios from 'axios';
import UserList from "./components/userList";



function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);
  const clickMe = (name) => {
    console.log('Hello: '+ name);
  }

  //  async function getUser(){
  //   const response = await axios.get("http://localhost:5000/login")
  //   console.log(response);
  // }
  // getUser()




  
 
  return (
    
    


    <div>
      <ul>
        {products.map((product) => (
          <li key={ product.id }> { product.title } - { product.price } </li>
        ))}
      </ul>
      <Header />
      <UserList />
      <button onClick={ () => clickMe('Fikri') }>Click Me</button>
    </div>
    
  );
}
 
export default App;
// export default App;