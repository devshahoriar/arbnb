interface Props {
  p?: number
}

const Stape = ({p=20}:Props) => {
  return (
    <span className="bg-black bg-opacity-20 h-2 flex-1  overflow-hidden">
      <span style={{transform: "scale("+p+"%, 1)", transformOrigin:'left top'}}  className="bg-black  block h-2 transition-transform duration-1000"></span>
    </span>
  )
}
export default Stape
