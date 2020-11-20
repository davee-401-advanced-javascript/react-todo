import axios from 'axios';
import React, {useState, useEffect} from 'react';
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

  const [item, setItem] = useState({});
  const [itemList, setItemList] = useState([]);
  // const [numberActive, setNumberActive] = useState(0);


  function updateCurrent(obj) {
    setItem(obj);
  }

  async function makePost(obj) {
    
    let jsonobj = JSON.stringify(obj);
    console.log('axios send obj', jsonobj)
    // let raw = await axios(
    //   {
    //     method: 'POST',
    //     url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo',
    //     data: jsonobj
    //   });
    // console.log('post to axios console:', raw)
  }


  // should Run only when "item" changes
    useEffect(() => {
      //listen for currentItem to change, then:
      //push/spread currentItem to nextList
      let updatedList = [...itemList, item];
      //set state: update itemList with nextList
      setItemList(updatedList);
      makePost(item);
      console.log('LINE 42 itemList:', itemList);
      
      //axios POST currentItem to api
      
      
    }, [item]);

    

  
  
  
      function consolezzz(){
    console.log('console function:',itemList)
  }
  consolezzz();


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
            <TodoForm updateCurrent={updateCurrent}/>
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
