import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    clickCardId: 0
  };



  handleClick = friendOnClick => {
    
    // if you have clicked on a 
    // card before 
    // the clicked state will be true
    if(friendOnClick.clicked === true) {
      console.log("Clicked twice");
      // reset the score
      this.setState({
        score: 0
      });
    } else {
      //otherwise up the score by one
      this.setState({
        score: this.state.score + 1
      });
    }
    
    // setting the clicked value 
    // of the clicked friend to true
    this.state.friends.forEach(friend => {
      if(friend.id === friendOnClick.id) {
        
        // set that friend.clicked to true
        friend.clicked = true;

        this.setState({
          friends
        });
      }

    });


    
    // check whether button has been clicked
    // this.setState({
    //   cardIdArray : [...this.state.cardIdArray, id]
    // })

    // console.log(this.state.cardIdArray);

    // for (let i = 0; i < this.state.cardIdArray.length; i++){
    //   console.log("Item in the array", this.state.cardIdArray[i]);
    // }
    // if (this.state.clickCardId === 0) {
    //   console.log("Initial clickCardId", id);
    //   this.setState({
    //     score: this.state.score + 1,
    //     clickCardId: id
    //   });
    // } else {
    //   console.log("current clickCardId", this.state.clickCardId);
    //   console.log("currently clickedCardId", id);

    //   if (this.state.clickCardId === id) {
    //     // change score to 0
    //     this.setState({
    //       score: 0,
    //       clickCardId: 0
    //     });
    //   } else {
    //     // up the score
    //     this.setState({
    //       score: this.state.score + 1,
    //       clickCardId: id
    //     });
    //   }
    // }


    // const friends = this.state.friends.filter(clicked => clicked.id === id);

    // when the user clicks a card 

    // check if the card that was clicked 

    // is the same as the previous card 

    // if it is 

    // reset the score 

    // save to top score

    // otherwise 

    // up the score 
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game
        <div>
            Score: {this.state.score}
            |
          Top Score:
        </div>
        </Title>

        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
