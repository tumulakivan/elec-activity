import Topbar from "./components/Topbar"
import Body from "./components/Body"
import Breadcrumb from "./components/Breadcrumb"

function App() {

  return (
    <div className="flex flex-col items-center w-screen h-screen p-4 bg-offblack">
      <Topbar />
      <Breadcrumb />
      <Body />
    </div>
  )
}

export default App
