import React from 'react';
const ppl = (props) => {
    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            {props.children}
        </div>
    )
};
export default ppl;
