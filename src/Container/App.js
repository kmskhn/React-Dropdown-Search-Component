import React from 'react';
import './App.css';
import Data from '../Data/Data'

class App extends React.Component {

  state = {
    data: Data || [],
    showItems: false,
    result: null,
    selectedItem: Data[0].city
    
  }

ShowItemsHandler = () => { 
  this.setState({
    showItems: !this.state.showItems,
    result: this.state.data
  })
}

selectItem = (country) => {
  this.setState({
    selectedItem: country.city,
    showItems: !this.state.showItems
  })
}

searchHandler = (event) => {
  var searchResults = [];
  for(var obj of this.state.data) {
    if(obj.city.toUpperCase().indexOf(event.target.value.toUpperCase()) !== -1 ){
      searchResults.push(obj)
    }
  }



  this.setState({
    result: searchResults,
  })

  }
  
  render() {
     var i = 0;
     if(this.state.showItems){
       var show = <div className='show'>
       <div className='input'>
         <input 
         type="text"
         onChange={this.searchHandler}
         placeholder="Search..."></input>
       </div>

       <div 
         className = 'CitiesDiv'>
         {
         
           this.state.result.map( (country) => {
             i++;
             return (<div 
                       onClick={this.selectItem.bind(this,country)}
                       className={this.state.selectedItem === country.city ? 'selected' : ''}
                       key={i}>
                       {country.city}
                   </div>)
           } )              
         }
       </div>


     </div>
     
     }

    return (
      <div className="App">
        <h1>React Custom Search Component</h1> 
        <div className='container'>
          <div className='selectedItem' onClick={this.ShowItemsHandler}>
            {this.state.selectedItem}
          </div>
          <div className="arrow">
            <span className={this.state.showItems ? 'arrowUp' : 'arrowDown'}/>
          </div>
          {show}
        </div>    
      </div>
    );
  }

}

export default App;
