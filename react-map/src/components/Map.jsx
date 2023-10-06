import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import AddMarkers from "./AddMarkers";
import './Map.css'

const center = [41.015137
  , 28.979530
]

const skillsList = [{
  id: 1,
  name: 'HTML'
},
{
  id: 2,
  name: 'CSS'
},
{
  id: 3,
  name: 'Javascript'
},
{
  id: 4,
  name: 'React',
},
{
  id: 5,
  name: 'Redux'
},
{
  id: 6,
  name: 'JQuery'
}]

const MapAll = () => {
  const [markers, setMarkers] = useState([{ nickName: 'Mehmet Temiz', address: 'Turkey', job: 'Frontend Developer' }]);
  const [skills, setSkills] = useState([]);

  const [isActivite, setIsActivite] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value
    setMarkers({
      ...markers,
      [e.target.name]: value
    });
    e.preventDefault()
    console.log(e.target.value)
  }

  const checkboxHandler = (e) => {
    const { value, checked } = e.target;
    if (checked) {
        setSkills([...skills, value]);
    } else {
        setSkills((prevSelectedItems) =>
            prevSelectedItems.filter((item) => item !== value)
        );
    }
  }

  const editTool = () => {
    setIsActivite(!isActivite)
    console.log(isActivite)
  }



  return (
    <>
      {isActivite ? <div id="creator" className={`creator ${isActivite}`}>

        <input name="nickName" className="name-input" type='text' placeholder='Enter Your Name' value={markers.nickName} onChange={handleChange} />
        <input name="address" className="address-input" type='text' placeholder='Enter Your Address' value={markers.address} onChange={handleChange} />
        <input name="job" className="job-input" type='text' placeholder='Enter Your Name' value={markers.job} onChange={handleChange} />
        {skillsList.map((item) =>
          <label>
            <input type='checkbox' checked={skills.includes(item.name)} value={item.name} onChange={checkboxHandler} />
            {item.name}
          </label>
        )}


      </div> : <div className={`creator ${isActivite}`}></div>}
      <MapContainer style={{ width: "100%", height: "100vh" }} center={center} zoom={13} >

        <TileLayer
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=tr&x={x}&y={y}&z={z}"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <AddMarkers editTool={editTool} markers={markers} setMarkers={setMarkers} setIsActivite={setIsActivite} skills={skills} />

      </MapContainer>
    </>
  )
}

export default MapAll