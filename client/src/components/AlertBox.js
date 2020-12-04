import React from 'react';
import { Alert } from 'reactstrap';

function AlertBox(props){
  return (
<>
<Alert color="danger">
{props.text}
{props.children}
</Alert>
</>
  )
  }
  export default AlertBox;