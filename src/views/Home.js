import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import CreateAdvert from "../components/CreateAdvert";

const Home = () => (
  <Fragment>
    <CreateAdvert />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
