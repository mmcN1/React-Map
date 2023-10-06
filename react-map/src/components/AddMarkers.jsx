import { Marker, useMapEvents } from "react-leaflet";
import { icon } from "./Icon";
import MarkCard from "./MarkCard";

const AddMarkers = ({ markers, setMarkers, skills, editTool, setIsActivite }) => {



  useMapEvents({
    click: (e) => {
      setMarkers([...markers, e.latlng,]);
    },
  });



  const removeMark = (marker) => {
    setMarkers((prevMark) =>
      prevMark.filter((mark) => marker !== mark)
    );
    setIsActivite(false)
  };
  return (
    <>

      {markers.map((marker, i) => (
        <Marker
          key={`marker-${i}`}
          position={marker}
          icon={icon}
        >
          <MarkCard markers={marker} skills={skills}  editTool={editTool} removeMark={removeMark} />
        </Marker>
      ))}
    </>
  );
};

export default AddMarkers;
