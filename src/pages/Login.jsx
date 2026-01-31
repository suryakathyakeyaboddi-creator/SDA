import { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// Local video file is too large for GitHub (250MB+). Using a remote placeholder for deployment.
// To restore local video: Uncomment import and use 'heroVideo' variable.
import heroVideo from '../components/Sda_compressed.mp4';
// const heroVideo = "https://assets.mixkit.co/videos/preview/mixkit-open-road-at-sunset-1249-large.mp4";
import '../styles/Login.css';

const Login = () => {
    const { loginWithGoogle, loginWithEmail, signUpWithEmail, user } = useAuth();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);



    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
        } catch (err) {
            setError('Failed to login with Google.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isSignUp) {
                const { session } = await signUpWithEmail(email, password);
                if (!session) {
                    alert('Account created! Please check your email to confirm your account.');
                    setIsSignUp(false);
                } else {
                    // Session exists, redirect
                    navigate('/');
                }
            } else {
                await loginWithEmail(email, password);
                // Login successful, redirect
                navigate('/');
            }
        } catch (err) {
            let msg = err.message || 'Failed to authenticate';
            if (msg.includes('Invalid login credentials')) {
                msg = 'Invalid email or password. Please check your credentials.';
            } else if (msg.includes('Email not confirmed')) {
                msg = 'Please confirm your email address before logging in.';
            }
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="login-bg-video"
            >
                <source src={heroVideo} type="video/quicktime" />
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="login-overlay"></div>

            {/* Login Card */}
            <div className="login-card">
                <h1 className="login-title">{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
                <p className="login-subtitle">
                    {isSignUp ? 'Sign up to start your journey' : 'Sign in to access premium tours'}
                </p>

                {error && <div className="error-msg">{error}</div>}

                <button onClick={handleGoogleLogin} className="google-btn">
                    <FaGoogle style={{ color: '#4285F4' }} /> {isSignUp ? 'Sign up' : 'Sign in'} with Google
                </button>

                <div className="login-divider">OR</div>

                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
                    </button>
                </form>

                <p className="toggle-text">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    <button
                        className="toggle-link"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
