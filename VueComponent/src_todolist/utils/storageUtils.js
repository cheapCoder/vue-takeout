// export default {
//   getKey: function () {
//     return JSON.parse(localStorage.getItem("todo_key") || "[]");
//   },
//   setKey(val) {
//     localStorage.setItem('todo_key', JSON.stringify(val));
//   }
// }
export const getKey =  function () {
      return JSON.parse(localStorage.getItem("todo_key") || "[]");
    }

export function setKey(val) {
      localStorage.setItem('todo_key', JSON.stringify(val));
    }