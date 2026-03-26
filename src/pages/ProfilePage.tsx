import { useNavigate } from 'react-router-dom'; // Para navegar de vuelta

export const ProfilePage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#0d152b] min-h-screen flex items-center justify-center">
            <div className="w-[33rem] p-10 bg-white rounded-[35px] text-center">
                <h1 className="font-bold text-[33px]">Mi Perfil</h1>
                <p className="text-gray-500">Aquí va la info del usuario (nombre, bio, etc.)</p>
                {/* foto, datos, etc. */}
                <button 
                    onClick={() => navigate('/')} // Vuelve a la página principal (o register)
                    className="mt-8 w-full py-3 rounded-lg text-white font-medium bg-[#6C63FF]"
                >
                    Volver
                </button>
            </div>
        </div>
    );
};