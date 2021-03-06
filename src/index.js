import React from "react";
import ReactDOM from "react-dom";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   } else {
//     return <h1>Hello, Stranger.</h1>;
//   }
// }

// const user = {
//   firstName: "Haraper",
//   lastName: "Perez",
// };

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(tick, 1000);
// ReactDOM.render(element, document.getElementById("root"));

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// Welcome.propTypes = {
//   name: PropTypes.string,
// };

// const element = <Welcome name="Sara" />;
// ReactDOM.render(element, document.getElementById("root"));

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// function Avatar(props) {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
//   );
// }
// Avatar.propTypes = {
//   user: PropTypes.object,
// };
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }
// UserInfo.propTypes = {
//   user: PropTypes.object,
// };
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{props.date}</div>
//     </div>
//   );
// }
// Comment.propTypes = {
//   author: PropTypes.object,
//   user: PropTypes.object,
//   text: PropTypes.string,
//   date: PropTypes.string,
// };
// const Author = {
//   name: "AAA",
//   avatarUrl: "http://example.com/AAA",
// };

// ReactDOM.render(
//   <Comment
//     author={Author}
//     text="????????????"
//     date={new Date().toLocaleDateString()}
//   />,
//   document.getElementById("root")
// );

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// Clock.propTypes = {
//   date: PropTypes.date,
// };
// function tick() {
//   ReactDOM.render(<Clock />, document.getElementById("root"));
// }
// setInterval(tick, 1000);
