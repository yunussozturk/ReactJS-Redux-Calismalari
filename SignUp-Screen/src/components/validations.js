import * as yup from 'yup';

const validations = yup.object().shape({
    firstName : yup.string().required("zorunlu alan"),
    lastName : yup.string().required("zorunlu alan"),
    email: yup.string().email("geçerli bir email girin").required("zorunlu alan"),
    password : yup.string().min(5 , "En az 5 karakter giriniz").required("zorunlu alan"),
    passwordConfirm : yup.string().oneOf([yup.ref('password')] , "parolalar uyuşmuyor").required("zorunlu alan"),
});

export default validations; 