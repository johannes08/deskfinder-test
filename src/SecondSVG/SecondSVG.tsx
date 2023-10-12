import { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

const SvgVersion = () => {
    const [selectedDesk, setSelectedDesk] = useState<string>('');
    const [svgInjected, setSvgInjected] = useState<boolean>(false);

    const v2 = 'https://gist.githubusercontent.com/tburakonat/fbc3eee91f36691354a56b2e2dd32c38/raw/bdbb318f9299dff6aba661f08326114cf8070af0/office-layout-2.svg';


    const handleClick = (e: any) => {
        setSelectedDesk(e.target.id)
    }

    useEffect(() => {
        if (!svgInjected) return

        const desks = document.querySelectorAll('.desk');
        desks.forEach(desk => {
            desk.addEventListener('click', handleClick);

        })
    }, [svgInjected])

    return (
        <>
            {/* <button onClick={() => setSvgVersion(!svgVersion)}>Switch SVG</button> */}
            <div className='svg-container'>
                <div className="map">
                <ReactSVG
                    src={v2}
                    onClick={handleClick}
                    afterInjection={() => setSvgInjected(true)}
                />
                </div>
                <dialog open={!!selectedDesk}>
                    <p>Willst du {selectedDesk} buchen?</p>
                    <form method="dialog" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button onClick={() => setSelectedDesk('')}>Buchen</button>
                        <button onClick={() => setSelectedDesk('')}>Abbrechen</button>
                    </form>
                </dialog>
            </div>
        </>
    )

}

export default SvgVersion;