/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
function RegisterTerms() {
  return (
    <label class="relative flex items-start mt-2">
      <div class="flex items-center h-5">
        <input
          type="checkbox"
          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
        />
      </div>
      <div class="ml-2 text-sm leading-5">
        <span class="font-medium text-gray-700">
          Eu li e aceito os
          <a
            href="https://kiwify.com.br/termos-de-uso"
            target="_blank"
            class="underline"
          >
            {" "}
            termos de uso
          </a>
          ,
          <a
            href="https://kiwify.com.br/licenca-de-uso-software"
            target="_blank"
            class="underline"
          >
            {" "}
            termos de licença de uso de software
          </a>
          ,
          <a
            href="https://kiwify.com.br/politica-de-conteudo"
            target="_blank"
            class="underline"
          >
            {" "}
            política de conteúdo
          </a>{" "}
          da Kiwify
        </span>
      </div>
    </label>
  );
}

export default RegisterTerms;
