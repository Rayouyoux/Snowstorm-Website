import "./css/Faq.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { setInfo as setAdminInfo } from "../api/backend";

function FAQ({info, setInfo, language, user}) {
    window.a = info
    console.log(info)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        var infoCopy = JSON.parse(JSON.stringify(info));
        infoCopy.faq.push({
            question: [data.eq, data.fq],
            answer: [data.ea, data.fa]
        })
        setAdminInfo(infoCopy)
        setInfo(infoCopy)
    };

    return <div className="faq-page">
        {
            /*Page de Questions-Réponses */
        }
        <h1 className="title">FAQ</h1>
        {
        (user && user.permission_level >= 200) ? <>
            <h2>{["Add a question", "Ajoutez Une Question"][language]}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("fq")} placeholder="Question en français..." />
                <input {...register("eq")} placeholder="Question in English..." />
                <input {...register("fa")} placeholder="Réponse en français..." />
                <input {...register("ea")} placeholder="Answer in English..." />
                <button type="submit">{["Submit", "Valider"][language]}</button>
            </form>
        </> : <></>
        }
        {
            (info.faq || []).map((obj, index) => {
                return <div className="question-answer">
                    <h2>{(user && user.permission_level >= 200) ? <button onClick={() => {
                        var infoCopy = JSON.parse(JSON.stringify(info));
                        infoCopy.faq.pop(index)
                        setAdminInfo(infoCopy)
                        setInfo(infoCopy)
                    }}>X</button> : <></>}{obj.question[language]}</h2>
                    <p>{obj.answer[language]}</p>
                </div>
            })
        }
    </div>
}

export default FAQ;