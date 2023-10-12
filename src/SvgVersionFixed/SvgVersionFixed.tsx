import { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';
import './index.css';

const SvgVersion = () => {
    const [selectedDesk, setSelectedDesk] = useState<string>('');
    const [svgInjected, setSvgInjected] = useState<boolean>(false);
    const [svgVersion, setSvgVersion] = useState<boolean>(true);

    const v1 = 'https://gist.githubusercontent.com/tburakonat/9ec4de19ae045dd95a60c33e0884ca3c/raw/5fc3e4f86206c5a7dbdb20ba87bb2ed649a2a453/office-layout.svg';
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
            <button onClick={() => setSvgVersion(!svgVersion)}>Switch SVG</button>
            <div className='svg-container'>
                <ReactSVG
                    src={svgVersion ? v1 : v2}
                    onClick={handleClick}
                    afterInjection={() => setSvgInjected(true)}
                />
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