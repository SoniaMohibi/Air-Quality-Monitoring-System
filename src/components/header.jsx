import { EachSecAqi } from "./EachSecAqi"
import {store} from 'react-notifications-component'
import 'animate.css'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications, Store } from 'react-notifications-component'
export const Header = (props) => {

 function handleClick(){
      store.addNotification({
        title: 'Poor Air Quality',
        message: 'High AQI Value,move to some save place',
        type: 'default',                         // 'default', 'success', 'info', 'warning'
        container: 'top-right',
        insert:'top',                // where to position the notifications
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        dismiss: {
          duration: 3000 
        }
      })
    }

  return (
    <div>
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-0 intro-text'>
                <div className='heading' style={{color:'#1182f9',fontSize:30,fontWeight:400,fontStyle:'italic'}}>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </div>
                <p style={{marginLeft:"-76%"}}>{props.data ? props.data.paragraph : 'Loading'}</p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <EachSecAqi/>
    <button
  onClick={handleClick
}>Click </button> 
    </div>
  )

}
