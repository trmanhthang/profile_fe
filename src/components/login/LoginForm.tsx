import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {Label} from "../ui/label";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {useLogin} from "@/hooks/useLogin";
import {type SubmitEventHandler, useState} from "react";

function LoginForm() {
    const {loginHandler} = useLogin();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        await loginHandler({username, password});
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-full max-w-sm bg-white">
                <CardHeader>
                    <CardTitle>Đăng nhập</CardTitle>
                    <CardDescription>
                        Nhập tên đăng nhập của bạn dưới đây để đăng nhập vào tài khoản
                    </CardDescription>
                    {/*<CardAction>*/}
                    {/*    <Button variant="link">Sign Up</Button>*/}
                    {/*</CardAction>*/}
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Tên đăng nhập:</Label>
                            <Input
                                id="username"
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Mật khẩu:</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Đăng nhập
                        {/*<Spinner className={"size-4"} />*/}
                    </Button>
                    {/*<Button variant="outline" className="w-full">*/}
                    {/*    Login with Google*/}
                    {/*</Button>*/}
                </CardFooter>
            </Card>
        </form>
    );
}

export default LoginForm;