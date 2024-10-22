import Button from "@/Components/Button";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Sign In" />

            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/assets/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img
                            src="/assets/images/white-streamy-logo.svg"
                            alt="white streamy logo"
                            className="w-32 h-32"
                        />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#b6b6b6] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>

                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        htmlFor={"email"}
                                        value={"Email Address"}
                                    />
                                    <Input
                                        type={"email"}
                                        name={"email"}
                                        placeholder={"Your Email Address"}
                                        value={data.email}
                                        autoComplete={"email"}
                                        isFocused={true}
                                        handleChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor={"password"}
                                        value={"Password"}
                                    />
                                    <Input
                                        type={"password"}
                                        name={"password"}
                                        placeholder={"Your Password"}
                                        value={data.password}
                                        autoComplete={"new-password"}
                                        handleChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-[30px] mb-2 text-center">
                                <InputError message={errors.email} />
                                <InputError message={errors.password} />
                            </div>
                            <div className="grid space-y-[14px]">
                                <Button type={"submit"} processing={processing}>
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </Button>

                                <Link href={route("register")}>
                                    <Button
                                        type={"button"}
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
