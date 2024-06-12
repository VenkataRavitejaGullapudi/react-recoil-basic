import { atomFamily, selectorFamily } from "recoil";
// import { TODOS } from "../../todos";
import axios from "axios";

// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily1',
//   default: id => {
//     return TODOS.find(x => x.id === id)
//   },
// });

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily2',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: function (id) {
      return async function() {
        // Just delaying wantedly to understand loadables
        await new Promise(r=>setTimeout(r, 5000))
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
      }
    }
  })
});

