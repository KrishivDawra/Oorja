import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"


function App() {
 
  return (
    <>
    <div className="bg-seagreen scroll-smooth">
    <Header/>
    <div><img className="lg:flex lg:m-auto lg:h-screen" src=".\src\assets\hero img.jpeg" alt="" /></div>
    <Body/>
    <Footer/>
    </div>
    </>
  )
}

export default App
