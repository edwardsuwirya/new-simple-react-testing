import {Component} from "react";

const withContainerStyle = {
    margin: '30px'
}
const withContainer = (title, WrappedComponent) => (
    class extends Component {
        render() {
            return (
                <div style={withContainerStyle}>
                    <h2>{title}</h2>
                    <WrappedComponent
                        {...this.props}
                    />
                </div>
            )
        }
    })

export default withContainer;
