import React from "react";

interface IDummyControl {

}
const DummyControl: React.FunctionComponent<IDummyControl> = (props) => {
    const {} = props;

    return (
        <div className="control">
            <div className="controlInner">

            </div>
        </div>
    )
}

export default DummyControl;
