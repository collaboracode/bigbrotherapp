import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button
} from 'reactstrap'

const GuestForm = (props) => {
  const { guestData, handleChange, handleSubmit, id } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label
          for="firstName"
          sm={2}
        >
          First Name
        </Label>
        <Col sm={10}>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            value={guestData?.first_name ? guestData.first_name : ""}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="lastName"
          sm={2}
        >
          Last Name
        </Label>
        <Col sm={10}>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Smith"
            value={guestData?.last_name ? guestData.last_name : ""}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="bio"
          sm={2}
        >
          Bio
        </Label>
        <Col sm={10}>
          <Input
            id="bio"
            name="bio"
            type="textarea"
            placeholder="About John"
            value={guestData?.bio ? guestData.bio : ""}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="image_url"
          sm={2}
        >
          image url
        </Label>
        <Col sm={10}>
          <Input
            id="image_url"
            name="image_url"
            placeholder="www.example.com/image_url"
            value={guestData?.image_url ? guestData.image_url : ""}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      {/* <FormGroup row>
        <Label
          for="exampleFile"
          sm={2}
        >
          Picture
        </Label>
        <Col sm={10}>
          <Input
            id="exampleFile"
            name="file"
            type="file"
          />
          <FormText>
            This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Col>
      </FormGroup> */}
      <FormGroup row>
        <Label
          for="checkbox"
          sm={2}
        >
          isActive?
        </Label>
        <Col
          sm={{
            size: 10
          }}
        >
          <FormGroup check>
            <Input
              id="checkbox"
              type="checkbox"
              name="isActive"
              onChange={handleChange}
              checked={guestData?.active ? guestData.active : null}
            />
            {' '}
            <Label check>
              Check me out
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup
        check
        row
      >
        <Col
          sm={{
            offset: 2,
            size: 10
          }}
        >
          <Button>
            Submit

            {/* //todo add conditional rendering so that it only shows for admins */}
          </Button>
          {id && <Button // ? should this also check for guestData._id ?
            color='danger mx-4'
            name='deleteGuest'
            onClick={handleChange}
          >
            Delete
          </Button>}

        </Col>
      </FormGroup>
    </Form>
  )
}
export default GuestForm