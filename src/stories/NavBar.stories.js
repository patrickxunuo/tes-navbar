import React from 'react';
import {storiesOf} from "@storybook/react";
import {NavBar} from "../components/NavBar";

const stories = storiesOf('App Test', module)

stories.add('App', ()=>{
  return (<NavBar navItem={['aa','bb']}/>)
})
