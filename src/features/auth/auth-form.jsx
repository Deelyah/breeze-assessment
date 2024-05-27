import Aurora from '@/assets/aurora';
import AuthButton from './auth-button';
import Link from 'next/link';

const AuthForm = ({
  handleSubmit,
  handleChange,
  handleCheckbox,
  action = 'login'
}) => {
  const isLogin = action.toLowerCase() == 'login';
  return (
    <main>
      <div className='main-auth-container'>
        <div className='auth-main'>
          <div className='aurora-container'>
            <div className='aurora-float'>
              <h3 className='aurora-content'>
                Welcome to Cordelia's <b>ASSESSMENT </b>
                <br />
                <b>TASK</b>
              </h3>
            </div>
            <Aurora />
          </div>
        </div>
        <div className='auth-minor'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <h2 className='form-header'>Authentication</h2>
              <div>
                <p className='form-desc'>
                  Hey, {isLogin ? 'Welcome back!' : 'Newbie'}
                </p>
                <p className='action'>
                  {isLogin
                    ? 'Log in to your account to continue'
                    : 'Sign up to enjoy our services'}
                </p>
              </div>
            </div>
            <div className='all-inputs'>
              <div className='email-field'>
                <label htmlFor='email' className='email-label'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  onChange={(e) => handleChange(e)}
                  className='email-input'
                />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={(e) => handleChange(e)}
                  className='border block mb-2 focus:outline-none'
                />
              </div>
            </div>

            <AuthButton buttonText={action} />
            <p className='auth-switch'>
              {isLogin ? 'Already' : "Don't"} have an account?{' '}
              <Link href={`${isLogin ? '/sign-up' : '/login'}`}>
                {isLogin ? 'Sign up' : 'Log in'}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AuthForm;
