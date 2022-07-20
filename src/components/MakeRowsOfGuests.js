import ShowGuests from "./ShowGuests"

const MakeRowsOfGuests = (props) => {
  const rowLength = props.rowLength ? props.rowLength : 4
  let children = []
  if (props.guests?.length) {
    for (let i = 0; i < props.guests.length; i += rowLength) {
      children.push(
        < ShowGuests
          handleImageClick={props.handleImageClick}
          guests={props.guests.slice(i, i + rowLength < props.guests.length ? i + rowLength : props.guests.length)}
          colWidth={props.colWidth}
          key={i}
        />
      )
    }
  }
  return (
    <>
      {children}
    </>
  )
}
export default MakeRowsOfGuests