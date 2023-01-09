import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [fillertedMonseters, setFillertedMonseters] = useState(monsters);
  useEffect(() => {
   let fillertedMonseters = monsters.filter((monseter) => {
      return monseter.name.toLowerCase().includes(searchField);
    });
    setFillertedMonseters(fillertedMonseters)
  },[monsters , searchField]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((re) =>
        re.json().then((data) => {
          setMonsters(data);
        })
      )
      .catch((err) => console.log("failed"));
  }, []);
  const onSearch = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters</h1>
      <SearchBox
        onChangeHandler={onSearch}
        placeholder="search monseters"
        className="monseters-search-box"
      />
      <CardList monseters={fillertedMonseters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     console.log("constructor");
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     console.log("componentDidMount");

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((re) =>
//         re.json().then((data) => {
//           this.setState(() => {
//             return {
//               monsters: data,
//             };
//           });
//         })
//       )
//       .catch((err) => console.log("failed"));
//   }
//   onSearch = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearch } = this;
//     const fillertedMonseters = monsters.filter((monseter) => {
//       return monseter.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters</h1>
//         <SearchBox onChangeHandler ={onSearch} placeholder='search monseters' className='monseters-search-box'/>
//         <CardList monseters={fillertedMonseters} />
//       </div>
//     );
//   }
// }

export default App;
