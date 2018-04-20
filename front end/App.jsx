import React from 'react';

const styles={
  globalDiv:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    marginBottom:'45px'
  },
  questionText:{
    color:'#8080ff',
    fontSize:'150%'
  },
  responseDiv:{
    width:'100%',
    display:'flex',
    justifyContent:'center'
  },
  ouiDiv:{
    cursor:'pointer',
    height:'35px',
    width:'45%',
    borderRadius:'6px',
    backgroundColor:'#8080ff',
    display:'flex',justifyContent:'center',
    alignItems:'center'
  },
  nonDiv:{
    cursor:'pointer',
    height:'35px',
    border:'1px solid #8080ff',
    width:'45%',borderRadius:'6px',
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  semiDiv:{
    width:"50%",
    display:'flex',
    justifyContent:'space-between'
  }
}

const texts={
  question:'Aimez-vous React?'
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    	response:'', 	
    }
  }
  
  render() {
    return (
      <div style={{width:'100%'}}>
         <div style={styles.globalDiv}>
            <b style={styles.questionText}>{texts.question}</b>
         </div>
         <div style={styles.responseDiv}>
           <div style={styles.semiDiv}>
              <div 
               style={styles.nonDiv}
               onClick={()=>{
                 this.setState({response:'Zut !'})
               }}>
                  <h4 style={{color:'#8080ff'}}>non</h4>
              </div>
              <div 
               style={styles.ouiDiv}
               onClick={()=>{
                 this.setState({response:'Bon choix !'})
               }}>
                  <h4 style={{color:'white'}}>oui</h4>
              </div>
           </div>
         </div>
         <div style={{display:'flex',justifyContent:'center'}}>
           {this.state.response?<h4 style={{color:this.state.response=='Zut !'?'red':'green'}}>{this.state.response}</h4>:null}
         </div>
      </div>
     
    );
  }
}

export default App;
