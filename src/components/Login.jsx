import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";

function Login(){
    return (
        <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <LoginHeader />

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <LoginForm />
            </div>
          </div>
        </div>
    );
}

export default Login;