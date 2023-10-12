import React from "react";
import './dummyframe.scss';

interface IDummyHeader {

}
const DummyHeader: React.FunctionComponent<IDummyHeader> = (props) => {
    const {} = props;

    return (
        <>
            <div className="header">
                <div className="headerCenter">
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.13141 14.3846L8.82747 13.8046C8.99221 13.6673 8.99221 13.4447 8.82747 13.3074L2.47477 8.00085L8.82747 2.69431C8.99221 2.55702 8.99221 2.33443 8.82747 2.19711L8.13141 1.61706C7.96667 1.47978 7.69955 1.47978 7.53477 1.61706L0.17256 7.75227C0.00781805 7.88955 0.00781805 8.11215 0.17256 8.24946L7.53477 14.3846C7.69955 14.5219 7.96667 14.5219 8.13141 14.3846Z" fill="#849794"/>
                    </svg>


                    Heute

                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.868596 1.61611L0.172537 2.19613C0.00779517 2.33341 0.00779517 2.55601 0.172537 2.69333L6.52524 7.99987L0.172537 13.3064C0.00779517 13.4437 0.00779517 13.6663 0.172537 13.8036L0.868596 14.3837C1.03334 14.5209 1.30046 14.5209 1.46523 14.3837L8.82744 8.24848C8.99218 8.1112 8.99218 7.8886 8.82744 7.75128L1.46523 1.61611C1.30046 1.47879 1.03334 1.47879 0.868596 1.61611Z" fill="#D85D13"/>
                    </svg>

                </div>
            </div>
            <div style={{ paddingTop: '80px'}}></div>
        </>

    )
}

export default DummyHeader;
