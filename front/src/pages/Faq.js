import "./css/Faq.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function FAQ({info}) {
    window.a = info
    console.log(info)
    /*
    const faqText = {
        "francais" : {
        },
        "english" : {
        }
    };*/
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
        <h2>Ajoutez Une Question{baga}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("fq")} placeholder="First name" />
            <input {...register("eq")} placeholder="First name" />
            <input {...register("fa")} placeholder="First name" />
            <input {...register("ea")} placeholder="First name" />
            <button type="submit">Valider</button>
        </form>
            {/*
                    info.entries(info).map(([q, r]) => {
                        return <div className="question-answer">
                            <h2>:question</h2>
                            <p>:reponse</p>
                        </div>
                    })
                */}
        </div>
}

export default FAQ;