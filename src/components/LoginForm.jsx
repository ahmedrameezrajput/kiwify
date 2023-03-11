/* eslint-disable jsx-a11y/anchor-is-valid */
import { useForm } from "react-hook-form";

function LoginForm(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

    return (
      <div>
        <form
          class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="mt-6">
            <label
              for="email"
              class="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              E-mail
            </label>
            <div>
              <input
                type="text"
                name="email"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.password && (
                <p class="mt-2 text-center text-base leading-5 text-gray-600">
                  O e-mail deve ser válido
                </p>
              )}
            </div>
          </div>
          <div class="mt-6">
            <label
              for="password"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Senha
            </label>
            <div>
              <input
                type="password"
                autoComplete="current-password"
                name="password"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
            </div>
          </div>
          <div class="mt-2 flex items-center justify-end">
            <div class="text-sm leading-5">
              <a
                href="/ForgotPassword"
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Esqueceu a senha?
              </a>
            </div>
          </div>
          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="button"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Entrar
              </button>
            </span>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;