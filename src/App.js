import Sidebar from './components/Sidebar'
import Intro from './components/Intro'
import Updates from './components/Updates'
import Footer from './components/Footer'

const App = () => {

    return(
        <div className="my-20">
            <Intro />
            <Updates />
            <Sidebar />
            <Footer />
        </div>
    )
}

export default App