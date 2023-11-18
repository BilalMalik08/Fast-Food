import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const iceCream = {
    id: 1,
    name: "Vanilla Ice Cream",
    description: "Classic vanilla-flavored ice cream.",
    price: "199 PKR",
    basePrice: 199,
    image: require("../Img/icecreams/VanillaIceCream.jpg"),
  };

  return (
    <NoteContext.Provider value={iceCream}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
