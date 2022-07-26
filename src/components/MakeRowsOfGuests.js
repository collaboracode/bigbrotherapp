import ShowGuests from "./ShowGuests"

const MakeRowsOfGuests = (props) => {
  // max elements in row
  const rowLength = 4
  // col fr of 12
  const colWidth = 3

  let children = []
  
  if (props.guests?.length) {
    for (let i = 0; i < props.guests.length; i += rowLength) {
      children.push(
        < ShowGuests
          handleImageClick={props.handleImageClick}
          guests={props.guests.slice(i, i + rowLength < props.guests.length ? i + rowLength : props.guests.length)}
          colWidth={colWidth}
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