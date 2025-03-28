'use client';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api/auth";

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authApi.login(formData.email, formData.password);
      if (response.message === "success") {
        router.push('/Voting-Page/candidate/candidate1'); // Redirect to voting page after successful login
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='flex items-center sm:p-20 justify-center gap-50 h-screen'>
      <div className='w-135 bg-gradient-to-b from-red-600 via-white to-red-600 h-150 rounded-tl-4xl rounded-br-4xl flex justify-center items-center'>
        <Image
          src={"/assets/main-page.svg"}
          alt={"nevtik"}
          width={500}
          height={100}
        />
      </div>
      <div>
        <div className='text-center'>
          <h1 className='text-red-600 text-5xl'>SIGN IN</h1>
          <h2 className='text-4xl'>Pemilu Nevtik 2025</h2>
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600"
                />
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
                
              </div>
              <a
                 href='#'
                 className='ml-auto text-sm text-black hover:text-red-600'
               >
                 Forgot password?
               </a>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6 flex items-center justify-center">
            <Image
              src={"/assets/nevtik1.svg"}
              alt={"logo-nevtik"}
              width={45}
              height={45}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
