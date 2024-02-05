import {useState, useEffect} from 'react';

//hook umożliwiający zapisywanie i odczytywanie danych z localStorage
export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const jsonValue = localStorage.getItem(key) //pobieranie domyślnej wartości z localStorage
        if (jsonValue != null) {
            let parse = JSON.parse(jsonValue);
            console.log("setting " + key + " to " + parse)
            return parse
        }

        if (typeof initialValue === "function") {
            let newVar = (initialValue)();
            console.log("setting " + key + " to " + newVar)
            return newVar
        } else {
            console.log("setting " + key + " to " + initialValue)
            return initialValue
        }
    })

    useEffect(() => {

        let value = JSON.stringify(storedValue);
        console.log("setting " + key + " to " + value)
        localStorage.setItem(key, value)
    }, [key, storedValue]) //nasłuchiwanie na zmiany key lub sortedValue

    return [storedValue, setStoredValue]
}