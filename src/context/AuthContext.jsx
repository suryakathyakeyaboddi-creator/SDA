import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch profile data helper
        const fetchProfile = async (sessionUser) => {
            if (!sessionUser) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', sessionUser.id)
                    .single();

                if (error) {
                    console.warn('Error fetching profile:', error.message);
                }

                // Merge session user with profile data
                setUser({ ...sessionUser, profile: data });
            } catch (err) {
                console.error('Unexpected error fetching profile:', err);
                setUser(sessionUser);
            } finally {
                setLoading(false);
            }
        };

        // Check active session
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            await fetchProfile(session?.user);
        };

        getSession();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                await fetchProfile(session?.user);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) throw error;
    };

    const loginWithEmail = async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
    };

    const signUpWithEmail = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) throw error;
        return data;
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) console.error('Error logging out:', error.message);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, loginWithGoogle, loginWithEmail, signUpWithEmail, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
