import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          <form action='#' method='POST' className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm/6 font-medium text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  placeholder='Enter your email address'
                  type='email'
                  required
                  autoComplete='email'
                  className='block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='********'
                  required
                  autoComplete='current-password'
                  className='block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6'
                />
              </div>
            </div>

            <div className='flex items-center mb-4'>
              <input
                type='checkbox'
                id='remember'
                className='mr-2 text-orange-600'
              />
              <label htmlFor='remember' className='text-sm text-black'>
                Remember me
              </label>
              <a
                href='#'
                className='ml-auto text-sm text-black hover:text-red-600'
              >
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-red-500 hover:cursor-pointer hover:text-white'
              >
                <Link href='/landing'>Sign in</Link>
              </button>
            </div>
          </form>

          <div className='flex mt-5 items-center justify-center'>
            <Image
              src={"/assets/nevtik1.svg"}
              alt={"logo-nevtik"}
              width={45}
              height={45}
            />
            <p className='text-2xl text-gray-600 mx-2.5'>By NevtikAcademy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
