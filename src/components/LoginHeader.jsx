/* eslint-disable jsx-a11y/anchor-is-valid */

function LoginHeader() {
  return (
    <div>
      <img
        src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png"
        alt="kiwify-logo"
        class="mx-auto h-12 w-auto"
      />
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Entrar na sua conta
      </h2>
      <p class="mt-2 text-center text-base leading-5 text-gray-600">
        Ou {}
        <a href="/Register" class="text-indigo-600 hover:text-indigo-500">
          fazer cadastro
        </a>
      </p>
    </div>
  );
}

export default LoginHeader;