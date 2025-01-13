"use client"
import { basePath } from "@/next.config";
import { auth } from "@/shared/firebase/firebaseapi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NextTopLoader from 'nextjs-toploader';

export default function Home() {
  useEffect(() => {

  }, []);

  const [passwordshow1, setpasswordshow1] = useState(false);

  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
    "password": "1234567890",
  });
  const { email, password } = data;
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  const Login = (e: any) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => { console.log(user); RouteChange(); }).catch(err => { setError(err.message); });
  };

  const Login1 = (_e: any) => {
    if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
      RouteChange();
    }
    else {
      setError("The Auction details did not Match");
      setData({
        "email": "adminnextjs@gmail.com",
        "password": "1234567890",
      });
    }
  };

  const router = useRouter();
  const RouteChange = () => {
    let path = "/dashboards/";
    router.push(path);
  };
  return (
    <>
    <html>
      <body>
      <NextTopLoader color="#10b981" height={3} showSpinner={false} />
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              <div className="my-[2.5rem] flex justify-center">
                <Link href="/dashboards/crm/">
                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/erp-light-logo.png`} alt="logo" className="desktop-logo w-36" />
                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/erp-dark-logo.PNG`} alt="logo" className="desktop-dark w-36" />
                </Link>
              </div>

              <div className="box !p-[3rem]">

                <div className="box-body" role="tabpanel" id="pills-with-brand-color-01" aria-labelledby="pills-with-brand-color-item-1">

                  <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                  {err && <div className="p-4 mb-4 bg-danger/40 text-sm  border-t-4 border-danger text-danger/60 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    {err}
                  </div>}
                  <div className="grid grid-cols-12 gap-y-4">
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="signin-email" className="form-label text-default">Email</label>
                      <input type="text" name="email" className="form-control form-control-lg w-full !rounded-md" id="email" onChange={changeHandler} value={email} />
                    </div>
                    <div className="xl:col-span-12 col-span-12 mb-2">
                      <label htmlFor="signin-password" className="form-label text-default block">Password<Link href="#!" className="float-right text-danger">Forget password ?</Link></label>
                      <div className="input-group">
                        <input name="password" type={(passwordshow1) ? 'text' : "password"} value={password} onChange={changeHandler} className="form-control  !border-s form-control-lg !rounded-s-md" id="signin-password" placeholder="password" />
                        <button onClick={() => setpasswordshow1(!passwordshow1)} aria-label="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" type="button" id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                      </div>
                      <div className="mt-2">
                        <div className="form-check !ps-0">
                          <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" />
                          <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                            Remember password ?
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12 grid mt-0">
                      <button onClick={Login1}  className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium">Sign In</button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Dont have an account? <Link href="#!" className="text-primary">Sign Up</Link></p>
                  </div>
                  <div className="text-center my-4 authentication-barrier">
                    <span>OR</span>
                  </div>
                  <div className="btn-list text-center">
                    <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                      <i className="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                    <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                      <i className="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                    <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light">
                      <i className="ri-twitter-x-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                  </div>
                </div>
                <div className="box-body hidden" role="tabpanel" id="pills-with-brand-color-02" aria-labelledby="pills-with-brand-color-item-2">
                  <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                  {err && <div className="p-4 mb-4 bg-danger/40 text-sm  border-t-4 border-danger text-danger/60 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    {err}
                  </div>}
                  <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back Jhon !</p>
                  <div className="grid grid-cols-12 gap-y-4">
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="signin-email" className="form-label text-default">Email</label>
                      <input type="email" name="email" className="form-control form-control-lg w-full !rounded-md" id="email" onChange={changeHandler} value={email} placeholder="Email" />
                    </div>
                    <div className="xl:col-span-12 col-span-12 mb-2">
                      <label htmlFor="signin-password" className="form-label text-default block">Password<Link href="#!" className="float-right text-danger">Forget password ?</Link></label>
                      <div className="input-group">
                        <input name="password" type={(passwordshow1) ? 'text' : "password"} value={password} onChange={changeHandler} className="form-control form-control-lg !rounded-s-md" id="signin-password" placeholder="password" />
                        <button onClick={() => setpasswordshow1(!passwordshow1)} aria-label="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" type="button" id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                      </div>
                      <div className="mt-2">
                        <div className="form-check !ps-0">
                          <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" />
                          <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                            Remember password ?
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12 grid mt-2">
                      <button onClick={Login} className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium">Sign In</button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Dont have an account? <Link href="#!" className="text-primary">Sign Up</Link></p>
                  </div>
                  <div className="text-center my-4 authentication-barrier">
                    <span>OR</span>
                  </div>
                  <div className="btn-list text-center">
                    <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                      <i className="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                    <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                      <i className="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                    <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light">
                      <i className="ri-twitter-x-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
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
