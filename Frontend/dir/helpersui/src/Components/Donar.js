
// import '../dir/helpersui/node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './common.css';

function Donar()
{
   
   
  
    return (
       
<div className='container'>
    <div className='input-container'>
        <label>Campaign</label>
        <input type="text" className="input-field" placeholder="Campaign" />
        <br></br>
        <label>Amount</label>
        <input type="text" className="input-field" placeholder="Amount" />
        <br></br>
        <label>Add Vision</label>
        <input type="text" className="input-field" placeholder="Add Vision" />
        <br></br>
        <div className="button-container">
            <button type="button" className="bottom-button">
                Donate
            </button>
        </div>
    </div>
</div>


    
        )
}
 
export default Donar;