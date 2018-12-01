import React, {
  Component
} from 'react';
import Input from './input.jsx';
import Form from './form.jsx';
import './App.css';


// const tab=[{
//   companyNam: 'Credit Card',
//   cardNumber:'7253 3256 7895 1245',
//   validThru:'11/50',
//   CardHolder: 'Cardholder'
// }
// ]




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [{
        companyNam: 'Credit Card',
        cardNumber: '**** **** **** ****',
        validThru: 'MM/Ylll',
        CardHolder: '****'
      }]
    }
  }
  // ----------handleNumber---------------
  handleNumber = (e) => { //e c'est l'evenement va subir target:win bech ysir l'evenemnt;value c'es le value de l'evenemtn
    if (e.target.value === '') {
      this.setState({

        tab: [{
          companyNam: 'Credit Card',
          cardNumber: '**** **** **** ****',
          validThru: '****',
          CardHolder: '****'
        }]



      })
    } else {
      this.setState({ //fonction send props <Form numero={this.handleNumber}/>
        // <Form numero={this.handleNumber}/> tejbed  onChange={this.props.numero}

        tab: [{
          companyNam: 'Credit Card',
          cardNumber: e.target.value,
          validThru: '****',
          CardHolder: '****'
        }]



      })
    }
  }
  // -------------------handleName---------------

  handleName = (e) => { //e c'est l'evenement va subir target:win bech ysir l'evenemnt;value c'es le value de l'evenemtn
    if (e.target.value === '') {
      this.setState({
        tab: [{
          companyNam: '**************',
          cardNumber: '**** **** **** ****',
          validThru: '****',
          CardHolder: '**********'
        }]



      })

    } else {
      this.setState({
        tab: [{
          companyNam: 'Credit Card',
          cardNumber: '**** **** **** ****',
          validThru: '****',
          CardHolder: e.target.value
        }]



      })
    }
  }
  // --------------------handleDate-----------------------
  handleDate = (e) => { //e c'est l'evenement va subir target:win bech ysir l'evenemnt;value c'es le value de l'evenemtn
    if (e.target.value === '') {
      this.setState({
        tab: [{
          companyNam: 'Credit Card',
          cardNumber: '**** **** **** ****',
          validThru: 'MM/YY',
          CardHolder: '*******'
        }]



      })

    } else {
      this.setState({
        tab: [{
          companyNam: 'Credit Card',
          cardNumber: '**** **** **** ****',
          validThru: e.target.value.substring(0, 4),
          CardHolder: '*******'
        }]



      })
    }

  }

  // ----------------------------------------

  render() {
    return ( <div className = "App" >

      < Input input = { this.state.tab }/> 
      < Form numero = {this.handleNumber }
                nom = { this.handleName }
               date = { this.handleDate }/>  
      </div>
    );
  }
}

export default App;