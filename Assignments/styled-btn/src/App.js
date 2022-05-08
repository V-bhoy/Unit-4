import React from "react";
import styled from 'styled-components';




let Button= styled.button`
    border: ${props=>props.type==="default"?"1px solid lightgray":props.type==="dashed"?"1px dashed lightgray":"none"};
    padding: 10px;
    background-color:${props=>props.type==="primary"?"blue":"transparent"} ;
    color: ${props=>props.type==="primary"?"white":props.type==="link"?"blue":"black"};
    font-size: 22px;
    font-weight: bold;
    border-radius: 8px;
`;

function App() {
  return (
    <div className="App">
        <Button type="dashed">Button</Button>
    </div>
  );
}

export default App;
