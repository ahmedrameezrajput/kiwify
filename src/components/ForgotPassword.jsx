import ForgotPasswordForm from "./ForgotPasswordForm";
import ForgotPasswordHeader from "./ForgotPasswordHeader";

function ForgotPassword(){
    return (
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <ForgotPasswordHeader />
          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    );
}

export default ForgotPassword;