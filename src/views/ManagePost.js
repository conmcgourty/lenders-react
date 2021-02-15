import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ManagePostComponent = () => {
  const { user } = useAuth0();

  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });
  
return (
    <>
    <Container className="mb-5">
      <h5>Hello World</h5>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          {/* <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          /> */}
        </Col>
        <Col md>
          <h2>Con Yo</h2>
          {/* <p className="lead text-muted">{user.email}</p> */}
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
    </>
  );
};;

export default withAuthenticationRequired(ManagePostComponent, {
  onRedirecting: () => <Loading/>,
})

// export default withAuthenticationRequired(ManagePostComponent, {
//   onRedirecting: () => <Loading />,
// });




// export const ManagePostComponentComponent = () => {
//   const { user } = useAuth0();

//   const [state, setState] = useState({
//     showResult: false,
//     apiMessage: "",
//     error: null,
//   });

//     return(
//       <>
//       <Container className="mb-5">
//           <Row className="align-items-center profile-header mb-5 text-center text-md-left">
//               <Col md={2}>
//                   <h5>Hello,</h5>
//               </Col>
//           </Row>
//         <Row></Row>
//       </Container>
//     </>
//     );
// };;

// export default withAuthenticationRequired(ManagePostComponentComponent, {
//     onRedirecting: () => <Loading />,
// });