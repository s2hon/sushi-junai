import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Slider(props) {
  return (<>
    <Card>
      <h3>Absolutely NO SHARING between All you can eat and A LA CARTE customers</h3>
      <Button icon={"fa fa-check fa-3x"}></Button>
    </Card>
    <Card>
      <h3>If ALL items ordered are not completely consumed, you may be charged A LA CARTE pricing</h3>
      <Button icon={"fa fa-check fa-3x"}></Button>
    </Card>
    <Card>
      <h3>Items marked with red text can only be ordered once</h3>
      <Button icon={"fa fa-check fa-3x"}></Button>
    </Card>
    <Card><h3>Ordering time is limited to 2 Hours</h3>
      <Link to={"/menu"}>
        <Button icon={"fa fa-check fa-3x"} ></Button>
      </Link>
    </Card>
  </>

  );
}

export default Slider;