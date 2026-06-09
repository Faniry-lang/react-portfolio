import { GitHubCalendar } from 'react-github-calendar';
import { useTranslation } from "react-i18next";

export function MyGitHubGrid() {
  const { t } = useTranslation('github');
  console.log(JSON.stringify(t))

  const customTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'], 
  };

  return (
    <div className="mx-auto flex w-full flex-col gap-6 py-10">
      {/* En-tête aligné sur le style de AboutMe */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-sm uppercase tracking-[0.35em] text-green-500">
          {t('eyebrow')}
        </span>
        <h2 className="text-3xl font-extrabold tracking-tighter text-slate-950 md:text-4xl">
          {t('headline')}
        </h2>
      </div>
      
      {/* Conteneur de la grille avec style épuré et scroll horizontal sur mobile */}
      <div className="w-full overflow-x-auto rounded-xl select-none">
        <div className="w-full flex justify-center">
          <GitHubCalendar 
            username="Faniry-lang" 
            theme={customTheme}
            blockSize={28}  
            blockMargin={5}
            colorScheme="light" 
            labels={{
              totalCount: t('totalCount'),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MyGitHubGrid;