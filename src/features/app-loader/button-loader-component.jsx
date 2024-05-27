// import { startLoading, slice } from "./app-loader-reducer"

// const mapStateToProps = (state)=>{
//     buttonIsLoading: state[slice].loading
// }
// const mapDispatchToProps = {
//     sendRequest: startLoading
// }

const ButtonLoader = ({loadingMessage})=>{
    
    return <button>{loadingMessage || 'Loading...'}</button>
}

export default ButtonLoader