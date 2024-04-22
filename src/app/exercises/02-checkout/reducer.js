import { produce } from "immer";

function reducer(state, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "add-item": {
        window.localStorage.removeItem("cart-" + action.item.id);
        const itemIndex = state.findIndex((item) => item.id === action.item.id);

        if (itemIndex !== -1) {
          draftState[itemIndex].quantity += 1;
          window.localStorage.setItem(
            "cart-" + action.item.id,
            JSON.stringify({
              ...action.item,
              quantity: draftState[itemIndex].quantity,
            })
          );
          return;
        }

        draftState.push({
          ...action.item,
          quantity: 1,
        });
        window.localStorage.setItem(
          "cart-" + action.item.id,
          JSON.stringify({
            ...action.item,
            quantity: 1,
          })
        );
        return;
      }

      case "delete-item": {
        const itemIndex = state.findIndex((item) => item.id === action.item.id);
        window.localStorage.removeItem("cart-" + action.item.id);

        draftState.splice(itemIndex, 1);
        return;
      }

      case "initialize-items": {
        return Object.keys(localStorage)
          .filter((key) => key.startsWith("cart-"))
          .map((key) => JSON.parse(window.localStorage.getItem(key)));
      }
    }
  });
}

export default reducer;
