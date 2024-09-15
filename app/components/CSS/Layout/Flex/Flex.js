import "./flex.css";

export default function Flex() {
    return (
        <section>
            <div>
                <h1>Flex template</h1>
                <div className="container flex__container flex__default">
                    <div className="flex__element">A</div>
                    <div className="flex__element">B</div>
                    <div className="flex__element">C</div>
                </div>
            </div>
        </section>
    );
}
