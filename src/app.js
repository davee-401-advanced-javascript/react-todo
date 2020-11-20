import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

import List from './components/list/list.js'
import SmallNav from './components/small-nav/small-nav.js'
import Header from './components/header/header.js'
import TodoForm from './components/form/form.js'
import './styles.scss';



function App() {

// currentitem, itemList, numberActive
// const [currentItem, setCurrentItem] = useState({});
// const [itemList, setItemList] = useState([]);
// const [numberActive, setNumberActive] = useState(0);


//LOGIC FOR FORM*********************************************

function updateCurrent(currentItem) {
//this function just updates the current item on submit in form

}


function addToList() {
  //listen for currentItem to change, then:
    //push/spread currentItem to nextList
    //axios POST currentItem to api
    //set state: update itemList with nextList

}


//useEffect on initial pageload
  //axios GET all 
  // if anything returned, set initial state of itemlist


//LOGIC FOR LIST*********************************************


function updateStatus(itemList){
  //grabs list item
  //PUT call to update item in API DB
  //update itemList

}

function deleteItem(){
  //user can delete todo item from list

}

  return (
    <>
      
      <Header />
      <SmallNav className="testing" />
      <Container fluid className="main">
        <Row>
          <Col>
            <TodoForm addToList={addToList}/>
          </Col>
          <Col>
            <List />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
