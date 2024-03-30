import "./app-info.css";
import logo from "./logo.png";

const AppInfo = ({ increased, employees }) => {
    return (
        <div className="app-info">
            <div className="app-info-header">
                <h1>Учет сотрудников в компании Small-Brains </h1>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;