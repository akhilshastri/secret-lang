import {useState} from "react";

const alphabaates = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


const encrypt = (message) => {
    debugger;
    const chars = Array.from(message.toLowerCase());
    const newMessage = chars.map(char => {
        if (char === " ") return " ";
        const findIndex = alphabaates.indexOf(char);
        const charIndex = findIndex === 0 ? 25 : findIndex - 1;
        return alphabaates[charIndex];
    });
    debugger;
    return newMessage.join('');
}

const decrypt = (message) => {
    debugger;
    const chars = Array.from(message.toLowerCase());
    const newMessage = chars.map(char => {
        if (char === " ") return " ";
        const findIndex = alphabaates.indexOf(char);
        const charIndex = findIndex === 25 ? 0 : findIndex + 1;
        return alphabaates[charIndex];
    });
    debugger;
    return newMessage.join('');
}

export default function App() {
    const [message, setMessage] = useState("");
    const [result, setResult] = useState();

    const onEncrypt = () => {
        debugger;
        setResult(encrypt(message))
    }

    const onDecrypt = () => {
        debugger;
        setResult(decrypt(message))
    }

    return (
        <div style={styles.container}>
            <h1>Type your word/sentence here</h1>
            <textarea style={styles.textarea} rows={5}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
            />
            <p/>
            <div style={styles.buttonContainer}>
                <button onClick={onEncrypt}>
                    Encrypt
                </button>
                <button onClick={onDecrypt} >Translate</button>
            </div>
            <p/>
            <textarea style={styles.textarea} rows={5}
                value={result}
            />
            <p/>

        </div>
    );
}

const styles = {
    container: {
        width: "40%"
    },
    buttonContainer: {
        display: "flex",
        "justifyContent": "space-between"
    },
    textarea: {
        width: "100%"
    }
}
