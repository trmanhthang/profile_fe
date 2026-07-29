import LoginForm from "@/components/login";

function Login() {
    return <>
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm bg-gray-100">
                <LoginForm />
            </div>
        </div>
    </>;
}

export default Login;