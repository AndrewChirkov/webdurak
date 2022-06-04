import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Header } from "../../components/Header/Header";
import { HeaderType } from "../../components/Header/Header.types";
import { Button } from "../../components/UI/Button/Buttons";
import { Input } from "../../components/UI/Input/Input";
import { auth } from "../../store/auth.state";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterUserData } from "../../types/auth.types";
import { app } from "../../store/app.state";
import { motion } from "framer-motion";
import { Container } from "../../components/Container/Container";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Никнейм должен быть больше 3 символов")
    .max(20, "Никнейм не должен быть больше 20 символов")
    .required("Никнейм - обязательно поле"),

  email: Yup.string().email("Введите корректную почту").required("Email - обязательно поле"),

  password: Yup.string()
    .min(6, "Пароль должен быть больше 6 символов")
    .required("Пароль - обязательно поле"),
});

export const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values: RegisterUserData) => {
      auth.register(values);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  useEffect(() => {
    if (app.isAuth) {
      navigate("/game/durak");
    }
  });

  return (
    <Container className="container">
      <Header type={HeaderType.RegisterInfo} />
      <Container className="pad-container">
        <div className="input-group">
          <form className="input-group" onSubmit={formik.handleSubmit}>
            <Input
              name="name"
              placeholder={"Введите имя"}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
            <Input
              name="email"
              type="email"
              placeholder={"Введите email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
            <Input
              name="password"
              type="password"
              placeholder={"Введите пароль"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            <Button type="submit" text={auth.loading ? "Загружаемся..." : "Зарегистрироваться"} />
          </form>
        </div>
      </Container>
    </Container>
  );
};
