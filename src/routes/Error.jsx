import { Link } from "react-router";

export default function Error(){
    return (
        <div id="error">
            <h1 className="title">404 Page Not Found</h1>
            <p>Whoops, something went wrong!</p>
            <Link to="/"><button>Back to Home</button></Link> 
        </div>
    );
}