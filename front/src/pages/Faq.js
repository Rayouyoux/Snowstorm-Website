import "./css/Faq.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function FAQ({info, language, user}) {
    window.a = info
    console.log(info)
    const { register, handleSubmit } = useForm();
    const {baga,setBaga} = useState([]);
    const onSubmit = (data) => {
        console.log(data);
        console.log(data.fq);
        baga = setBaga(data);
        console.log(baga)
    };

    return <div className="faq-page">
        <h1 className="title">FAQ</h1>
        {
        user && <>
            <h2>{["Add a question", "Ajoutez Une Question"][language]}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("fq")} placeholder="First name" />
                <input {...register("eq")} placeholder="First name" />
                <input {...register("fa")} placeholder="First name" />
                <input {...register("ea")} placeholder="First name" />
                <button type="submit">{["Sublit", "Valider"][language]}</button>
            </form>
        </>
        }   

            {
                (info.faq || []).map((obj) => {
                    return <div className="question-answer">
                        <h2>{obj.question[language]}</h2>
                        <p>{obj.answer[language]}</p>
                    </div>
                })
            }
        </div>
}

export default FAQ;