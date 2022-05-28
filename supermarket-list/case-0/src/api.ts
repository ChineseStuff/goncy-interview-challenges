import {Item} from "./types";

export default {
  list: (): Promise<Item[]> =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          {
            id: 1,
            text: "Some thing to buy",
            completed: false,
          },
          {
            id: 2,
            text: "Some other thing to buy",
            completed: true,
          },
          {
            id: 3,
            text: "Some last to buy",
            completed: false,
          },
        ]);
      }, 1000),
    ),
  remove: (arr: Item[], id: string): Promise<Item[]> =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(arr.filter((item: Item) => item.id !== parseInt(id, 10) ))
      }, 1000),
    ),
};
