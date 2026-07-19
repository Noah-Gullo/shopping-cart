import { Link } from "react-router";

export default function Error(){
    return (
        <>
            <h1>404 Page Not Found</h1>
            <p>Whoops, something went wrong!</p>
            <Link to="/"><button>Back to Home</button></Link> 
        </>
    );
}