import "./css/Faq.css";

function FAQ({info}) {
    window.a = info
    console.log(info)
    return <div className="faq-page">
        <h1 className="title">FAQ</h1>
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