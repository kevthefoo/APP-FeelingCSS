import "./grid.css";

export default function Grid() {
    return (
        <section>
            <div>
                <h1>Grid template</h1>
                <div className="container grid__container grid__default">
                    <div className="gird__element">A</div>
                    <div className="gird__element">B</div>
                    <div className="gird__element">C</div>
                    <div className="gird__element">D</div>
                    <div className="gird__element">E</div>
                    <div className="gird__element">F</div>
                    <div className="gird__element">G</div>
                    <div className="gird__element">H</div>
                </div>
            </div>
        </section>
    );
}
