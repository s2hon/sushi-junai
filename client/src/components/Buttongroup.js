import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

function Buttongroup(props){
return (
    <ButtonToolbar>
<ButtonGroup size="lg">
  <Button>15%</Button>
  <Button>18%</Button>
  <Button>20%</Button>
</ButtonGroup>
</ButtonToolbar>
  );
}

export default Buttongroup;