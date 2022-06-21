import React from 'react';

type FooterType={
    titleForFooter:string
}

export  function Footer(props:FooterType){
    return(
        <div>
            {props.titleForFooter}
        </div>
    )
}