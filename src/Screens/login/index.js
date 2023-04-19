import { Routes } from '@/Routes';
import { getData } from '@/api';
import { Button, Textfield } from '@/components';
import { El } from '@/library';
import { svgs } from '@/svgs';
import Cookies from 'js-cookie';

export let UserInfo = {};

const emailVlidationCheck = (email) => {
  const re = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,3}');
  return re.test(email);
};
const passVlidationCheck = (pass) => {
  const re = new RegExp('^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$');
  return re.test(pass);
};

const checkValidation = () => {
  const loginBtn = document.getElementById('login-btn');
  const form = document.getElementById('login-form');
  if (
    emailVlidationCheck(form.email.value) &&
    passVlidationCheck(form.password.value)
  ) {
    loginBtn.classList.remove('bg-opacity-50');
    loginBtn.disabled = false;
    return true;
  } else {
    loginBtn.classList.add('bg-opacity-50');
    loginBtn.disabled = true;
    return false;
  }
};

const submitHandler = (e) => {
  e.preventDefault();
  // get login form data
  const formData = new FormData(e.currentTarget);
  // check if user email or password is valid then request to get user information
  checkValidation()
    ? getData(`/users?email=${formData.get('email')}`).then((response) => {
        UserInfo = response.data[0];
        if (UserInfo.password === formData.get('password')) {
          // confirm authentication and set coohie
          formData.has('rememder')
            ? Cookies.set('shoea', UserInfo.email, { expires: 7 })
            : Cookies.set('shoea', UserInfo.email);

          // change route to Shop page
          Routes().navigate('/shop');
        } else {
          // Log in info are incorrect or user does not exist
          document.getElementById('wrong-msg').classList.remove('hidden');
          document.getElementById('login-form').reset();
          setTimeout(() => {
            document.getElementById('wrong-msg').classList.add('hidden');
          }, 3000);
          console.log(response);
        }
      })
    : null;
};

export const Login = () => {
  return El({
    element: 'div',
    className: 'w-full h-full flex flex-col items-center justify-end pb-8',
    children: [
      El({
        element: 'span',
        // className:'[&_path]:fill-blue-500 [&_path]:stroke-red-500',
        innerHTML: svgs.Logo,
      }),
      El({
        element: 'span',
        className: 'text-black text-[32px] text-center font-semibold mt-24',
        innerText: 'Login to Your Account',
      }),
      El({
        element: 'form',
        id: 'login-form',
        className: 'w-full px-8 text-center flex flex-col gap-6 mt-10',
        //add event listeners to form to check validation and handel submitting
        eventListener: [
          {
            event: 'change',
            callback: (e) => {
              checkValidation();
            },
          },
          {
            event: 'submit',
            callback: submitHandler,
          },
        ],
        children: [
          Textfield({
            icon: svgs.Email,
            placeholder: 'Email',
            name: 'email',
            type: 'email',
            eventListener: [
              {
                event: 'input',
                callback: (e) => {
                  const parent = e.currentTarget.parentElement;
                  emailVlidationCheck(e.currentTarget.value)
                    ? (parent.classList.remove('border-2', 'border-black'),
                      parent.classList.add(
                        'border-2',
                        'border-black',
                        '[&_path]:fill-gray-900'
                      ))
                    : (parent.classList.add('[&_path]:fill-gray-500'),
                      parent.classList.remove('border-2', 'border-black'));

                  checkValidation();
                },
              },
            ],
          }),
          Textfield({
            icon: svgs.Lock,
            info: svgs.PassHide,
            placeholder: 'Password',
            type: 'password',
            name: 'password',
            id: 'password',
            eventListener: [
              {
                event: 'input',
                callback: (e) => {
                  const parent = e.currentTarget.parentElement;
                  passVlidationCheck(e.currentTarget.value)
                    ? (parent.classList.remove('border-2', 'border-black'),
                      parent.classList.add(
                        'border-2',
                        'border-black',
                        '[&_path]:fill-gray-900'
                      ))
                    : (parent.classList.add('[&_path]:fill-gray-500'),
                      parent.classList.remove('border-2', 'border-black'));

                  checkValidation();
                },
              },
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center justify-center gap-1',
            children: [
              El({
                element: 'input',
                id: 'remember',
                name: 'remember',
                className:
                  'border border-gray-200  rounded-sm checked:bg-black focus:ring-transparent',
                type: 'checkbox',
              }),
              El({
                element: 'label',
                for: 'remember',
                className: 'text-[16px]',
                innerText: 'Remember me',
              }),
            ],
          }),
          El({
            element: 'span',
            id: 'wrong-msg',
            className:
              'text-red-500 flex items-center justify-center w-full hidden',
            innerText: 'incorrect email or password',
          }),
          Button({
            child: 'Sign in',
            id: 'login-btn',
            type: 'submit',
            disabled: true,
            classes: 'w-full mt-28 bg-opacity-50',
          }),
        ],
      }),
    ],
  });
};
