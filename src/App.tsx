import AuthOverlay from './components/AuthOverlay';
import './index.css';
import useGeneralStore from './stores/generalStore';
import { useUserStore } from './stores/userStore';

function App() {
    const isLoginOpen = useGeneralStore((state) => state.isLoginOpen);

    return (
        <div>
            {isLoginOpen && (
                <>
                    <AuthOverlay />
                </>
            )}
        </div>
    );
}

export default App;
