import {Pointer} from "./Pointer.tsx";
import '../styles/map.css'


interface MapProps {
  setCountry: (country: string) => void;
}

export function Map({setCountry}: MapProps) {

  const handlePointerClick = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <>
      <div className="map">
        <img src="/global-food/images/map.jpg" alt="MAP" className="map-image"/>
        <Pointer country="korea" x={76} y={87} rotate={0} onClick={() => handlePointerClick("korea")} />
        <Pointer country="turkey" x={57} y={72} rotate={0} onClick={() => handlePointerClick("turkey")} />
        <Pointer country="italy" x={52} y={71} rotate={0} onClick={() => handlePointerClick("italy")} />
        <Pointer country="germany" x={50} y={65} rotate={0} onClick={() => handlePointerClick("germany")} />
        <Pointer country="switzerland" x={50} y={68} rotate={0} onClick={() => handlePointerClick("switzerland")} />
        <Pointer country="france" x={48} y={68} rotate={0} onClick={() => handlePointerClick("france")} />
        <Pointer country="uk" x={47} y={60} rotate={0} onClick={() => handlePointerClick("uk")} />
        <Pointer country="usa" x={20} y={70} rotate={0} onClick={() => handlePointerClick("usa")} />
        <Pointer country="china" x={75} y={68} rotate={0} onClick={() => handlePointerClick("china")} />
        <Pointer country="japan" x={85} y={71} rotate={0} onClick={() => handlePointerClick("japan")} />
      </div>
    </>
  )
}