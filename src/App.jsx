import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"


function App() {
 
  return (
    <>
    <div className="bg-seagreen scroll-smooth">
    <div className='fixed w-full'>
    <Header/></div>
    <div><img className="lg:flex lg:m-auto lg:h-screen lg:w-full" src=".\src\assets\hero img.jpeg" alt="" /></div>
    <Body/>
    <Footer/>
    </div>
    </>
  )
}

export default App
