import * as React from "react";
import CSSProperties = React.CSSProperties;

export interface OpenWebIconProps {
    name: string;
    size?: string;
    colored?: string | boolean;
}

export default class OpenWebIcon extends React.Component<OpenWebIconProps, {}> {
    constructor(props: OpenWebIconProps) {
        super(props);
    }

    render() {
        let className = this.props.name;
        let style: CSSProperties = {
            fontFamily: "OpenWeb Icons",
            fontSize: this.props.size ? this.props.size : "16px"
        };

        if (this.props.colored === true) {
            className = className + "-colored"
        } else {
            style.color = this.props.colored != "" ? this.props.colored : "#000000"
        }

        return <span>
            <i style={style} className={className}/>
        </span>;
    }
}
