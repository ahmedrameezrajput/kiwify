function RegisterHeader() {
  return (
      <div>
        <img
          src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png"
          alt="Kiwify"
          class="mx-auto h-12 w-auto"
        />
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <p class="mt-2 text-center text-base leading-5 text-gray-600">
          Ou {}
          <a
            href="/Login"
            class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            entrar na sua conta existente
          </a>
        </p>
      </div>
  );
}

export default RegisterHeader;