function ForgotPasswordForm() {
  return (
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
            autoComplete="off"
            name="null"
            class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
          />
        </div>
      </div>
      <div class="mt-6">
        <span class="block w-full rounded-md shadow-sm">
          <button class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            {" "}
            Redefinir senha
          </button>
        </span>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
