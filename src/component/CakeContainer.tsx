import { buyCake } from "./redux/index";
import {connect} from "react-redux";
 const CakeContainer = (props:any) => {
  
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

// selectors returns some state information from the redux store
// It accept a redux state and return the object

const mapStateToProps = (state:any) => {
  return {
      numberOfCakes: state.numberOfCakes
  }
}

// It get a redux dispatch method as a parameter and returns the object

const mapDispatchToProps = (dispatch:any) => {
      return {
        buyCake: () => dispatch(buyCake)
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)