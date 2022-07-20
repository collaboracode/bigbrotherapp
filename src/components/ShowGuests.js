import {
  Col,
  Row,
} from 'reactstrap'
const ShowGuests = (props) => {
  const height = '100%'
  const width = '100%'
  if (props.guests?.length) {
    return (
      <Row>
        {props.guests.slice(
          props.start ? props.start : 0,
          props.end ? props.end + 1 : props.guests.length).map((guest, i) => {
            return (
              <Col sm="3" key={i}>
                <img alt={`${guest.name} from big brother`} key={i} onClick={() => {
                  props.handleImageClick(guest.id)
                }}
                  width={width}
                  height={height}
                  src={guest.imgUrl}></img>
              </Col>
            )
          })
        }
      </Row>
    )
  }
  else if (props.guests && !props.guests.length) {
    return (
      <Row>
        <Col sm="3" key={"only one"}>
          <img alt={`${props.guests.name} from big brother`} key={'only one'} onClick={() => {
            props.handleImageClick(props.guests.id)
          }}
            width={width}
            height={height}
            src={props.guests.imgUrl}></img>
        </Col>
      </Row>
    )
  }
}
export default ShowGuests