import Header from "./components/header"
import Entry from "./components/entry"
import data from "./data"
import './App.css'


function App() {
    const entries = data.map((item) => {
      return (
        <Entry 
          key={item.id}
          {...item}
        />
      )
    })
    return (
      <> 
        <Header />
        <main className="px-10 pt-24 pb-10">
          {entries}
        </main>
      </> 
    )
}

export default App

