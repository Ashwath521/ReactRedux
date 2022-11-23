import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./index";

const HookCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Num of Cakes - {numberOfCakes}</h1>
      <button onClick={() => dispatch(buyCake)}>buyCake</button>
    </>
  );
};

export default HookCakeContainer;
