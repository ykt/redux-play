import React from 'react';

import { Button, Modal } from 'react-bootstrap';

import settings from '../settings.json';
import uuid from 'node-uuid';
import style from './Home.css';
import ModalDialog from './ModalDialog'

const childNode = () => {
  return <div>Child</div>
};
//const ShowDialog = (props) => {
//  const foo = (event) => {
//    if (event.keyCode == 13) {
//      props.callback()
//    }
//  };
//  const onOverlay = (event) => {
//    console.log(event.keyCode)
//  };
//
//  return <div className={style.overlay} style={display} onClick={onOverlay}>
//    <div className={style.modal} onKeyDown={foo} >I'm the Modal Window!</div>
//  </div>;
//  //return <div className={style.overlay} style={foobar}>
//  //        <div className={`${style.dialog} ${style.center}`} >
//  //          <input type="text" onKeyDown={foo} />
//  //        </div>
//  //      </div>
//
//};

const Child = (props) => {

  const top = (index) => {
    if ([1, 2, 3].indexOf(index) !== -1) {
      return '10px'
    }
    if ([4, 5].indexOf(index) !== -1) {
      return '50px'
    }
    if ([6, 7, 8].indexOf(index) !== -1) {
      return '90px'
    }
  };

  const left = (index) => {
    if ([1, 4, 6].indexOf(index) !== -1) {
      return '10px'
    }
    if ([2, 7].indexOf(index) !== -1) {
      return '120px'
    }
    if ([3, 5, 8].indexOf(index) !== -1) {
      return '230px'
    }
  };


  const index = props.index;
  const style = {
    width: `100px`,
    height: `30px`,
    top: top(index),
    left: left(index),
    position: 'absolute'
  };
  console.log(`${props.title} of ${index} = ${style.left} - ${style.top}`);
  return <Button style={style}>{props.title}</Button>
};
class Home extends React.Component {
  constructor() {
    super();
    const generatedUuid  = uuid();
    this.state = {
      display: false,
      current: generatedUuid,
      //TODO: Change with Set, since it is unique
      nodes: [
        {
          text: "Hallo",
          uuid: generatedUuid,
          parent: undefined,
          location: {
            x: "150",
            y: "300"
          },
          child_position: []
        }
      ]
    };
  }
  showDialog = (currentUuid) => {
    this.setState({
      display: true,
      current: currentUuid
    })
  };
  hideDialog = () => this.setState({display: false});
  findNode = (searchUuid) => {
    return this.state.nodes.filter((node) => {
      if (node.uuid === searchUuid) {
        return node
      }
    })
  };
  saveCallback = (data) => {
    console.log(this.state.nodes);
    const currentNode = this.findNode(this.state.current)[0];
    let randomPosition = this.randomPosition(currentNode.child_position);
    currentNode.child_position.push(randomPosition);
    const newNode = {
      text: data,
      uuid: uuid(),
      parent: currentNode.uuid,
      location: {
        x: "100",
        y: "300"
      },
      child_position: currentNode.child_position
    };
    //TODO: Pake react-addon-update
    this.state.nodes.push(newNode);
    console.log(this.state.nodes);
    this.hideDialog();
  };

  render() {
    const location = [];

    const temporaryStyle = {
      position: 'absolute',
      left: '349px'
    };
    //
    //<Button
    //  className={style.center}
    //  onClick={this.toggleDialog}
    //>
    //  Idea
    //</Button>
    //
    //{this.state.items.map((item, index) => {
    //  let randomLocation = randomPosition(location);
    //  location.push(randomLocation)
    //  return <Child  key={index} title={item.title} index={randomLocation}/>
    //})}

    return (
      <section style={temporaryStyle}>

        {this.state.nodes.map((node, index) => {
          return <Node uuid={node.uuid} key={`node_${index}`} x={node.location.x} y={node.location.y} text={node.text} callback={this.showDialog.bind(this, node.uuid)}/>
        })}


        <ModalDialog
          cancelCallback={this.hideDialog}
          saveCallback={this.saveCallback}
          display={this.state.display}
        />

      </section>
    );
  }
}


export class Node extends React.Component {
  render() {
    const location = {
      left: `${this.props.x}px`,
      top: `${this.props.y}px`,
      position: 'absolute'
    };
    return <div style={location} onDoubleClick={this.props.callback.bind(this, this.props)}>{this.props.text}</div>
  }
};


export default Home;
