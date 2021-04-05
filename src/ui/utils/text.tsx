import {styled} from "@material-ui/core"
import { createElement, ElementType, ReactNode } from 'react';


export function TextMute(props:{children: ReactNode}){
    return <span>
        {props.children}
    </span>
}