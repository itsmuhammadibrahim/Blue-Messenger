import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Content from './componenets/Content';

function App() {
  // const handlenamechange = () => {
  //   const names = ['Ibrahim', 'Hasan', 'Ismail', 'khan'];
  //   const int = Math.floor(Math.random()*3);
  //   return names[int];
  // }
  
  return (

    <div>
      <Header />
      <Content/>
      <Footer />

    </div> 
  );
}

export default App;
  