interface AvatarProps {
  src?: string;
  onChangePicture?: () => void;
}

export const Avatar = ({ src, onChangePicture }: AvatarProps) => (
  <div className="relative mx-auto w-fit">
    <div className="h-28 w-28 rounded-2xl overflow-hidden bg-[#2a1f4e] border-2 border-[#3d2f7a] flex items-center justify-center">
      {src ? (
        <img src={src} alt="avatar" className="h-full w-full object-cover" />
      ) : (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-20 w-20">
          <circle cx="40" cy="30" r="16" fill="#7c5cbf" />
          <ellipse cx="40" cy="70" rx="26" ry="18" fill="#7c5cbf" />
        </svg>
      )}
    </div>
    <button
      onClick={onChangePicture}
      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-lg bg-[#6d3fc8] flex items-center justify-center shadow-lg transition hover:bg-[#8b5cf6]"
      title="Cambiar foto"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    </button>
  </div>
);
