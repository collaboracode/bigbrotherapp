import {
  Col,
  Row,
} from 'reactstrap'

const ShowGuests = (props) => {
  const height = '100%'
  const width = '100%'
  const colWidth = props.colWidth ? props.colWidth : 3
  if (props.guests?.length) {
    return (
      <Row>
        {props.guests.slice(
          props.start ? props.start : 0,
          props.end ? props.end + 1 : props.guests.length).map((guest, i) => {
            return (
              <Col className="column" sm={colWidth} key={i}>
                <img
                  onClick={() => {
                    props.handleImageClick(guest.id)
                  }}
                  alt={`${guest.first_name} from big brother`}
                  width={width}
                  height={height}
                  src={guest.image_url}></img>
              </Col>
            )
          })
        }
      </Row>
    )
  }
  else if (props.guests && !props.guests.length) {
    return (
      <Row key={"row"}>
        <Col className="column" sm={colWidth}>
          <img alt={`${props.guests.first_name} from big brother`} onClick={() => {
            props.handleImageClick(props.guests.id)
          }}
            width={width}
            height={height}
            src={props.guests.image_url}></img>
        </Col>
      </Row>
    )
  }
}
export default ShowGuests