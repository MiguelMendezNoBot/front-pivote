import { Avatar } from './Avatar';

interface ProfileCardProps {
  name?: string;
  role?: string;
  avatarSrc?: string;
  onChangePicture?: () => void;
}

export const ProfileCard = ({
  name = 'Victor Terrazas',
  role = 'UI/UX Designer & Creative Strategist',
  avatarSrc,
  onChangePicture,
}: ProfileCardProps) => (
  <aside className="w-full md:w-72 shrink-0 rounded-2xl border border-[#1f2c55] bg-[#0d1535]/80 p-6 flex flex-col items-center gap-4 shadow-[0_0_30px_rgba(5,7,28,0.45)] backdrop-blur-md">
    <Avatar src={avatarSrc} onChangePicture={onChangePicture} />
    <div className="text-center mt-2">
      <p className="text-xl font-bold text-white tracking-wide">{name}</p>
      <p className="text-sm text-[#8fabc8] mt-1 leading-snug">{role}</p>
    </div>
  </aside>
);
