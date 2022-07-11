import Searchbar from "../components/Searchbar"
import SingleClient from "../components/SingleClient"

export default function Clients() {
  return (
    <div className="App">
      <Searchbar />
      <SingleClient />
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          CLIENTS
        </h1>
      </header>
    </div>
  )
}