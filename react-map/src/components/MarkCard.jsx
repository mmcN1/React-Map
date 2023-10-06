import { Popup } from "react-leaflet";
import './MarkCard.css'

function MarkCard({edit, skills, marker, editTool, removeMark}) {
    return ( 
        <Popup>
            <div className="first-element">
              <h2 className="nickname">{edit.nickName.toLowerCase().split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')}</h2>

            </div>
            <h5 className="address">{edit.address.toLowerCase().charAt(0).toUpperCase() + edit.address.slice(1)}</h5>
            <p className="job">{edit.job.toLowerCase().split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')}</p>
            <div>
              <h3>Skills</h3>
              <h5 className="skills">{skills.join(' , ')} </h5>
            </div>
            <div className="button-edit" style={{ display: 'flex', justifyContent: 'space-between'}}>
              <button className="button-1" onClick={editTool}>⚙️</button>
              <button className="button-2"  onMouseDown={() => removeMark(marker)}>Remove Mark</button>
            </div>
          </Popup>
     );
}

export default MarkCard;