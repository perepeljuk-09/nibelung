import "./Input.scss";

const Input = ({title, placeholder}) => {
    return (
        <div className="block__input">
            <h4 className={"input__title"}>{title}</h4>
            <input placeholder={placeholder} className="custom__input" type="text"/>
        </div>
    );
};

export {Input};