import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Lifecycle Method 
// - componentWillMount: 이것은 렌더링 이전에 수행된다. 서버와 클라이언트 사이드 양쬭에서 수행 
// - componentDidMount: 이것은 첫번째 클라이언트 사이드의 렌더가 수행된 직후 실행된다. 이것은 AJAX 요청 DOM 혹은 상태 업데이트가 발생한다. 
//      이 메소드는 또한 다른 자바 스크립트 프레임워크와 통합할때 이용되고, 어떠한 딜레이한 이후의 작업 setTimeout 혹은 setInterval 과 같은 수행시 이용된다. 
//      우리는 state 업데이트를 위해서 그리고 우리는 다른 라이프사이클 메소드를 트리거 할 수 있다. 
// - componentWillReceiveProps: 다른 렌더가 호출되기 전에 업데이트가 되면 곧바로 호출된다. 우리는 setNewNumber 로 부터 트리거 되며 state 를 업데이트한다. 
// - shoudlComponentUpdate: true/false 값들중에 하나를 반환한다. 이것은 만약 컴포넌트가 업데이트 되었거나 혹은 그렇지 않은경우 결정된다. 
//      이것은 기본적으로 true 이다. 만약 컴포넌트가 state, props 값이 변경이 된후에 갱신이 필요없다면 false 를 주면된다. 
// - componentWillUpdate: 렌더링 전에 수행된다. 
// - componentDidUpdate: 렌더링 이후에 수행된다. 
// - componentWillUnmount: 이것은 컴포넌트가 dom 에서 언마운트 된 이후에 호출된다. 우리는 main.js 에서 언마운트 할 것이다. 
class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            header: "Header from state...",
            content: "Content from state...",
            headerTitle: "Passed Header title...",
            headerInfos: {
                id: "No",
                name: "Name",
                age: "Age"
            },
            data: [],
            myNumber: 0,
            initialInputData: 'Initial data...',
            refData: ''
        }
        this.updateRefFieldData = this.updateRefFieldData.bind(this);
        this.updateInitialInputData = this.updateInitialInputData.bind(this);
        this.setNewNumber = this.setNewNumber.bind(this);
        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    updateRefFieldData(e) {
        this.setState({refData: e.target.value})
    }

    clearInput() {
        var myDiv = document.getElementById('refDataId');
        ReactDOM.findDOMNode(myDiv).focus();
        this.setState({refData: '-'})
    }

    updateInitialInputData(e) {
        this.setState({initialInputData: e.target.value})
    }
    setNewNumber() {
        this.setState({myNumber: this.state.myNumber + 1})
    }
    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    setStateHandler() {
        var item = "setState..."
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({ data: myArray });
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
    render() {
        var i = 1;
        var myStyle = {
            fontSize: 100,
            color: '#ff0000'
        }
        return (
            <div>
                <h1>Hello World</h1>
                <h2>Content</h2>
                <p data-myattribute="somevalue">This is the content!!!{1 + 1}</p>
                <h1 style={myStyle}>{i == 1 ? 'True' : 'False'}</h1>
                {/* Multi line comment.... */}
                <Header headerTitle={this.state.headerTitle} />
                <Content headerInfo={this.state.headerInfos} />
                <h1>StateHeader: {this.state.header} / PropHeader: {this.props.headProp}</h1>
                <h2>StateContent: {this.state.content} / PropContent: {this.props.contProp}</h2>

                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>

                <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random number: {Math.random()}</h4>
                <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                <div id = "myDiv">NODE</div>

                <div>
                    <button onClick = {this.setNewNumber}>INCREMENT</button>
                    <Content2 myNumber = {this.state.myNumber}></Content2>
                </div>
                <input type = "text" value = {this.state.initialInputData} 
                onChange = {this.updateInitialInputData} />
                <h4>{this.state.initialInputData}</h4>

                <Component3 myDataProp = {this.state.initialInputData}
                    updateStateProp = {this.updateInitialInputData}></Component3>

                <div>
                    <input id="refDataId" value = {this.state.refData} onChange = {this.updateRefFieldData}></input>
                    <button onClick = {this.clearInput}>CLEAR</button>
                    <h4>{this.state.refData}</h4>
                </div>
            </div>
        )
    }
}

App.defaultProps = {
    headProp: "DefaultHP",
    contProp: "DefaultCP",
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) { return e },
    propNumber: 1,
    propString: "String value...",

    propObject: {
        objectName1: "objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3"
    },
    headerInfos: {
        headId: "No1",
        headName: "Name1",
        headAge: "Age1"
    }
}

// 타입 체킹 가능하도록 타입 지정 
App.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
}

class Header extends Component {
    render() {
        return (
            <div>
                <hr />
                <h1>{this.props.headerTitle}</h1>
            </div>
        );
    }
}

Header.defaultProps = {
    headerTitle: "Default Header Title"
}

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                },
                {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                },
                {
                    "id": 3,
                    "name": "Baz",
                    "age": "40"
                }
            ]
        }

        console.log(this.props);
        console.log(this.props.headerInfo);
        console.log(this.props.headerInfo.id);
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>{this.props.header && this.props.headerInfo.id}</th>
                            <th>{this.props.header && this.props.headerInfo.name}</th>
                            <th>{this.props.header && this.props.headerInfo.age}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((person, i) => <TableRow key={i} data={person} />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}

class Content2 extends Component {
    render() {
      return (
        <div>
          <h3> My Number: {this.props.myNumber}</h3>
        </div>
      )
    }
}

class Component3 extends Component{
    render() {
      return (
        <div>
          <input type="text" value = {this.props.myDataProp}
            onChange = {this.props.updateStateProp}/>
            <h3>{this.props.myDataProp}</h3>
        </div>
      )
    }
}
export default App;