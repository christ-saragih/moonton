import { useEffect } from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title={"Sign Up"} />
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
                        <img src="/assets/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form onSubmit={submit} className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label htmlFor={"name"} value={"Name"} />
                                    <Input
                                        type={"text"}
                                        name={"name"}
                                        value={data.name}
                                        placeholder={"Your name..."}
                                        autoComplete={"name"}
                                        isFocused={true}
                                        handleChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
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
                                        handleChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
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
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor={"password_confirmation"}
                                        value={"Confirm Password"}
                                    />
                                    <Input
                                        type={"password"}
                                        name={"password_confirmation"}
                                        placeholder={"Confirm Your Password"}
                                        value={data.password_confirmation}
                                        autoComplete={"new-password"}
                                        handleChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type={"submit"} processing={processing}>
                                    <span className="text-base font-semibold">
                                        Register
                                    </span>
                                </Button>

                                <Link href={route("login")}>
                                    <Button variant={"light-outline"}>
                                        <span className="text-base text-white">
                                            Sign In to My Account
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

export default Register;
