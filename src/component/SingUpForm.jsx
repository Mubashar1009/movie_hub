import { React, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./../css/SingUpForm.css";
import { Dialog } from "primereact/dialog";
import { Image2 } from "../images/image";


const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const validateSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required Name")
    .min(3, "Too short name")
    .max(8, "Too long name"),
  email: Yup.string().email("Invalid email").required("Required Email"),
  password: Yup.string()
    .matches(/^[0-9]/, "Enter At Least One Digit")
    .matches(/^[A-Z]/, "Enter At Least One Capital Letter")
    .matches(/^[a-z]/, "Enter At Least One Small Letter")
    .required("Required Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password did not match")
    .required("Required"),
});
export const SignUpForm = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        className=" button border-1 px-2 border-none text-white  text-xs h-2rem border-round-md cursor-pointer "
        onClick={() => setVisible(true)}
      >
        Sign Up
      </button>
     
      <Dialog visible={visible} onHide={() => setVisible(false)}>
        <div className=" signUpSection flex justify-content-center align-items-center">
          <section className="flex  p-1 gap-1 bg-white signUpContainer md:flex-row ">
            <img
              src={Image2}
              className="signUpImage sm:w-6"
              alt="A Working Man Pic"
            />

            <div className=" sm:w-6  flex flex-column justify-content-center gap-2">
              <h3 className="text-900 md:text-md lg:text-base text-center signUpTextHeading  ">
                Join Community
              </h3>
              <p className="text-800 md:text-md lg:text-base text-center mx-2 signUpTextParagraph  ">
                Singing up for an account is easy and free.Fill out the form
                below to get started
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => {
                  return (
                    <Form className="flex flex-column gap-2 mx-2  ">
                      <div className="h-3rem">
                        <Field
                          name="name"
                          placeholder="Enter Your Name"
                          className="p-2 w-12 text-teal-900 singUpField border-1 border-solid border-500  border-round-sm"
                        />
                        {touched.name && errors.name && (
                          <p className="text-black-alpha-30 text-xs">{errors.name}</p>
                        )}
                      </div>

                      <div className="h-3rem">
                        <Field
                          name="email"
                          type="email"
                          placeholder="Enter Your Email"
                          className="p-2 w-12 text-teal-900  singUpField border-1 border-solid border-500  border-round-sm "
                        />
                        {touched.email && errors.email && (
                          <p className="text-black-alpha-30 text-xs">{errors.email}</p>
                        )}
                      </div>

                      <div className="h-3rem">
                        <Field
                          name="password"
                          type="password"
                          placeholder="Enter Your Password"
                          className="p-2 w-12 text-teal-900 singUpField border-1 border-solid border-500  border-round-sm  "
                        />
                        {touched.password && errors.password && (
                          <p className="text-black-alpha-30 text-xs">{errors.password}</p>
                        )}
                      </div>

                      <div className="h-3rem">
                        <Field
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                          className="p-2 w-12 text-teal-900 singUpField border-1 border-solid border-500  border-round-sm  "
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                          <p className="text-black-alpha-30 text-xs">
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>

                      <input
                        type="submit"
                        className="p-2 w-12 surface-600  border-none border-round-md border-1 border-solid border-500  text-white "
                      ></input>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </section>
        </div>
      </Dialog>
    
     
    </>
  );
};
