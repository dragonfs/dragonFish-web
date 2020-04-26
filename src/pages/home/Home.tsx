import React from "react";
import './home.less';
import './alert.less'
import Test from "src/components/test/Test";


export default class IElement extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return[
           <Test />
        ]
    }
}