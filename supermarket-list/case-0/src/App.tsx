import type {Item} from "./types";

import {useEffect, useState, useCallback} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    api.list().then(setItems);
  }, []);

  const removeItem = useCallback((event) => {
    if (items)
      api.remove(items, event.target.value).then(setItems);
  }, [items]);

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input autoFocus name="text" type="text" />
        <button>Add</button>
      </form>
      <ul>
      {items?.map((item) => (
          <li key={item.id} className={item.completed ? styles.completed : ""}>
            {item.text} <button value={item.id} onClick={removeItem}>[X]</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
