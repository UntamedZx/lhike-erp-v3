"use client";
import { basePath } from "@/next.config";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
	const router = useRouter();
	const [isMounted, setIsMounted] = useState(false);

	const [passwordshow1, setPasswordShow1] = useState(false);
	const [err, setError] = useState("");
	const [data, setData] = useState({ userName: "", password: "" });
	const { userName, password } = data;

	useEffect(() => {
		setIsMounted(true); // Set to true after mounting

		// Redirect logic - always check for token after the component mounts
		const token = localStorage.getItem("authToken");
		if (token) {
			router.push("/dashboards"); // Redirect if no token is found
		}
	}, [router]);

	// Prevent rendering the form if not mounted yet
	if (!isMounted) {
		return null; // Or a loading state
	}

	const changeHandler = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
		setError("");
	};

	const loginUser = async (e: any) => {
		e.preventDefault();
		if (userName === "" || password === "") {
			setError("Fill all fields");
			return;
		}
		try {
			const response = await axios.post("http://localhost:5000/login", {
				username: userName,
				password: password,
			});

			const { token } = response.data;
			localStorage.setItem("authToken", token);
			router.push("/dashboards");
		} catch (error: any) {
			if (error.response) {
				setError(error.response.data.message || "Something went wrong");
			} else {
				setError("Network error. Please try again later.");
			}
		}
	};

	return (
		<>
			<html>
				<body>
					<div className="container">
						<div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
							<div className="grid grid-cols-12">
								<div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
								<div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
									<div className="my-[2.5rem] flex justify-center">
										<Link href="/dashboards/crm/">
											<img
												src={`${
													process.env.NODE_ENV === "production" ? basePath : ""
												}/assets/images/brand-logos/erp-light-logo.png`}
												alt="logo"
												className="desktop-logo w-36"
											/>
											<img
												src={`${
													process.env.NODE_ENV === "production" ? basePath : ""
												}/assets/images/brand-logos/erp-dark-logo.PNG`}
												alt="logo"
												className="desktop-dark w-36"
											/>
										</Link>
									</div>

									<div className="box !p-[3rem]">
										<div className="box-body">
											<p className="h5 font-semibold mb-2 text-center">
												Sign In
											</p>
											{err && (
												<div className="alert alert-danger" role="alert">
													{err}
												</div>
											)}
											<div className="grid grid-cols-12 gap-y-4">
												<div className="xl:col-span-12 col-span-12">
													<label
														htmlFor="signin-email"
														className="form-label text-default">
														Username
													</label>
													<input
														type="text"
														name="userName"
														className="form-control form-control-lg w-full !rounded-md"
														id="userName"
														placeholder="username"
														onChange={changeHandler}
														value={userName}
													/>
												</div>
												<div className="xl:col-span-12 col-span-12 mb-2">
													<label
														htmlFor="signin-password"
														className="form-label text-default block">
														Password
														<Link href="#!" className="float-right text-danger">
															Forget password ?
														</Link>
													</label>
													<div className="input-group">
														<input
															name="password"
															type={passwordshow1 ? "text" : "password"}
															value={password}
															onChange={changeHandler}
															className="form-control !border-s form-control-lg !rounded-s-md"
															id="signin-password"
															placeholder="password"
														/>
														<button
															onClick={() => setPasswordShow1(!passwordshow1)}
															aria-label="button"
															className="ti-btn ti-btn-light !rounded-s-none !mb-0"
															type="button"
															id="button-addon2">
															<i
																className={`${
																	passwordshow1
																		? "ri-eye-line"
																		: "ri-eye-off-line"
																} align-middle`}></i>
														</button>
													</div>
												</div>
												<div className="xl:col-span-12 col-span-12 grid mt-0">
													<button
														onClick={loginUser}
														className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium">
														Sign In
													</button>
												</div>
											</div>
											<div className="text-center">
												<p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">
													Don't have an account?{" "}
													<Link href="#!" className="text-primary">
														Sign Up
													</Link>
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
							</div>
						</div>
					</div>
				</body>
			</html>
		</>
	);
}
