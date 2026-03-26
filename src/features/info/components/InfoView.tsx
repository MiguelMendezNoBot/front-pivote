import { InfoPanel } from '../../../components/InfoPanel';
import { RepoList } from '../../../components/results/RepoList';
import { ProfileCard } from '../../../components/profile/ProfileCard';
import { useInfo } from '../hooks/useInfo';

export const InfoView = () => {
  const { userText, setUserText, savedText, repos, loading, error, handleSave, handleFetch } =
    useInfo();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#06122b] via-[#0b1741] to-[#081639] text-white flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">

        {/* Left column: profile */}
        <ProfileCard />

        {/* Right column: info panel + results */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <InfoPanel
            userText={userText}
            savedText={savedText}
            loading={loading}
            error={error}
            onTextChange={setUserText}
            onSave={handleSave}
            onFetch={handleFetch}
          />
          <RepoList repos={repos} />
        </div>

      </div>
    </section>
  );
};
