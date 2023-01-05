import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";
import Search from "./Search";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";


const items = [
  {
    title: 'What is the React?',
    content: 'React is a frontend JS library'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite library among engineers'
  },
  {
    title: 'How do u use React?',
    content: 'You use react by creating components'
  }
];

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'The color Blue',
    value: 'blue'
  }
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path={'/'}>
        <Accordion items={items} />
      </Route>
      <Route path={'/list'}>
        <Search />
      </Route>
      <Route path={'/dropdown'}>
        <Dropdown 
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label='Select a Color'
        />
      </Route>
      <Route path={'/translate'}>
        <Translate />
      </Route>
    </div>
  );
}

export default App;
