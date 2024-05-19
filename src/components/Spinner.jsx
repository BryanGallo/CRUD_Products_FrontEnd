import "../styles/Spinner.css";
const Spinner = () => {
    return (
        <p className="text-center">
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
            <span className="text-xl text-sky-800">Espere....</span>
        </p>
    );
};

export default Spinner;