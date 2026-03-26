import { RegisterForm } from "../features/auth/components/RegisterForm";
import { Input } from "../components/Input";

export const RegisterPage = () => {
    return (
        <div className="bg-[#0d152b] min-h-screen">
            <Input />
            <div className="mt-8 flex items-center justify-center">
                <div className="w-[33rem] p-10 bg-white rounded-[35px] text-center">
                    <h1 className="font-bold text-[33px]">Mi Perfil</h1>
                    <p className="text-gray-500">Aquí va la info del usuario (nombre, bio, etc.)</p>
                </div>
            </div>
        </div>
    );
};

