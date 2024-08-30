import "./grid.css";

export default function Grid() {
    return (
        <section>
            <div>
                <h1>Grid template</h1>
                <div className="container grid__container grid__default">
                    <div className="grid__element">A</div>
                    <div className="grid__element">B</div>
                    <div className="grid__element">C</div>
                    <div className="grid__element">D</div>
                    <div className="grid__element">E</div>
                    <div className="grid__element">F</div>
                    <div className="grid__element">G</div>
                    <div className="grid__element">H</div>
                </div>
            </div>
        </section>
    );
}
