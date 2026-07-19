import Navbar from "../components/Navbar.jsx"
import '../App.css'

export default function Home() {
    return (
      <div id="home">
          <Navbar></Navbar>
          <h1 className="title">Home</h1>
          <p id="left-description">Welcome to Fake Mart! Please note that this is not a real shopping store, it is just a project to test routers 
            and testing frameworks. Feel free to click around on the different pages. There is a mock shop and a mock cart that will
            update as you add items from the shop into your cart.</p>
          <p id="right-description">This is another example description solely to fill up space on this page. Please stop reading 
            this there is nothing interesting here. Why are you still reading this? This is a waste of time, unfortunately. No secret
            easter eggs here, sorry. Again, not a real shop. Anyways, have a wonderful day.</p>
          <p id="middle-description">A description on the bottom to take up the remaining whitespace and further fill out the homepage.
            This is another reminder that this is not a real shop and you cannot purchase anything here. All items are filled using FakeStore API,
            just in case you were wondering. You can add specific amounts of items and use the buttons on the side to increment/decrement them.
            The number next to "cart" should update dynamically as well as you add/remove items from your cart. 
            The project itself uses React.js and .css styling along with react router and the React Testing Library.
            Best of luck, have an amazing day!
          </p>
      </div>
    )
}