import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import './index.css';

const SvgVersion = () => {
    const [selectedDesk, setSelectedDesk] = useState<string>('');

    const handleClick = (e: any) => {
        const target = e.target as any;
        const classNames = Array.from(target.classList);

        if (!classNames?.includes('desk')) return;

        setSelectedDesk(target.id)

        // alert(`Du hast ${target.id} ausgewählt`)
    }

    return (
        <div className='svg-container'>
            <ReactSVG
                src='https://gist.githubusercontent.com/tburakonat/9ec4de19ae045dd95a60c33e0884ca3c/raw/5fc3e4f86206c5a7dbdb20ba87bb2ed649a2a453/office-layout.svg'
                onClick={handleClick}
            />
            <dialog open={!!selectedDesk}>
                <p>Willst du {selectedDesk} buchen?</p>
                <form method="dialog" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <button onClick={() => setSelectedDesk('')}>Buchen</button>
                    <button onClick={() => setSelectedDesk('')}>Abbrechen</button>
                </form>
            </dialog>
        </div>
    )

}

export default SvgVersion;