import React from 'react';
import {Form} from "../utils/Form/Form";
import {Input} from "../utils/Input/Input";
import {Button} from "../utils/Button/Button";
import {Link} from "react-router-dom"
import "./LoginPage.scss"

const LoginPage = () => {
    return (
        <>
            <Form title={"Войти"}>
                <Input title={"Логин"} placeholder={"Введите ваш логин"}/>
                <Input title={"Пароль"} placeholder={"Введите ваш пароль"}/>
                <Button>Войти</Button>
                <p>Если у вас нет аккаунта,</p>
                <p>вы можете зарегистрироваться <Link to={'/register'}>здесь</Link></p>
            </Form>
        </>
    );
};

export {LoginPage};