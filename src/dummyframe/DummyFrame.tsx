import React from "react";
import './dummyframe.scss';
import DummyHeader from "./DumyHeader.tsx";
import DummyControl from "./DummyControl.tsx";

interface IDummyFrame {
    children: React.ReactNode
}
const DummyFrame: React.FunctionComponent<IDummyFrame> = (props) => {
    const { children } = props;

    return (
        <div className="dummy">
            <DummyHeader />
            { children }

            <DummyControl />
        </div>
    )
}

export default DummyFrame;
