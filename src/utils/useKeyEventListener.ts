import {useUpdateEffect} from "usehooks-ts";
import {useEffect, useRef} from "react";

export interface IDictionary<TValue> {
    [id: string]: TValue;
}


export type useKeyPressCallbacks = (event: KeyboardEvent) => void

const useKeyEventListener = (callbacks: IDictionary<useKeyPressCallbacks>) => {

    const callbackRef = useRef(callbacks)

    useUpdateEffect(() => {
        callbackRef.current = callbacks
    }, [callbacks])

    useEffect(() => {

        const eventListener = (event: KeyboardEvent) => {
            const {key} = event;
            callbackRef.current[key] && callbackRef.current[key](event)
        }

        window.addEventListener('keydown', eventListener)
        return () => window.removeEventListener('keydown', eventListener)
    }, [])
}

export default useKeyEventListener