import { useEffect, useState } from "react";
import "./Cardcomponent.css";

const Cardcomponent = () => {

    const [adivice, setAdivice] = useState({});
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";

    const getAdvice = ()=>{
        console.log("fgdfgf");
        fetch("https://api.adviceslip.com/advice")
            .then((resp)=>resp.json())
            .then((obj)=>setAdivice(obj.slip));
    };

    useEffect(()=>{
        getAdvice();
    },[]);

    const randomAdvice = () => {getAdvice()};
    const readAdvice = () => {
        //console.
        window.speechSynthesis.cancel();
        speech.text = adivice.advice;
        window.speechSynthesis.speak(speech);
    };

    //let speech = new SpeechSynthesisUtterance();
    //speech.lang = "en";
    //speech.voice = voices[0];
    // speech.rate = rate;
    //speech.volume = volume;
    //speech.pitch = pitch;
    //speech.text = "Hola hola gola";
    //window.speechSynthesis.speak(speech);
    
    return (
        <div className="card-content">
            <p>Advice #{adivice.id}</p>
            <p className="adivice-text">"{adivice.advice}"</p>
            <div className="container-separator">
                <a href="https://github.com/jhonst"><span className="separator">By Jhon Arteaga</span></a>
                
            </div>
            <div className="caontainer-buttons">
                <img className="img-button" src="/icons/dices.png" alt="rand" onClick={randomAdvice}/>
                <img className="img-button" src="/icons/sonido.png" alt="aund" onClick={readAdvice}/>
            </div>
        </div>
    )
}

export {Cardcomponent}