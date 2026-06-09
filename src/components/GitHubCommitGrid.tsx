import { useMemo } from "react";

const COLS = 52;
const ROWS = 7;

type Level = 0 | 1 | 2 | 3 | 4 | 5;

const LEVEL_COLORS: Record<Level, string> = {
  0: "bg-gray-100 dark:bg-gray-800",
  1: "bg-[#d1fae5]",
  2: "bg-[#6ee7b7]",
  3: "bg-[#10b981]",
  4: "bg-[#059669]",
  5: "bg-[#065f46]",
};

function randLevel(): Level {
  const r = Math.random();
  if (r < 0.38) return 0;
  if (r < 0.58) return 1;
  if (r < 0.73) return 2;
  if (r < 0.85) return 3;
  if (r < 0.93) return 4;
  return 5;
}

interface Cell {
  level: Level;
  commits: number;
  duration: string;
  delay: string;
}

function generateGrid(): Cell[][] {
  return Array.from({ length: COLS }, () =>
    Array.from({ length: ROWS }, () => {
      const level = randLevel();
      return {
        level,
        commits: level > 0 ? level * Math.ceil(Math.random() * 8) : 0,
        duration: `${(1.8 + Math.random() * 2.4).toFixed(2)}s`,
        delay: `${(Math.random() * 3).toFixed(2)}s`,
      };
    })
  );
}

export function GitHubCommitGrid() {
  const grid = useMemo(generateGrid, []);

  const { totalCommits, activeDays } = useMemo(() => {
    let totalCommits = 0;
    let activeDays = 0;
    grid.forEach((col) =>
      col.forEach((cell) => {
        if (cell.level > 0) {
          totalCommits += cell.commits;
          activeDays++;
        }
      })
    );
    return { totalCommits, activeDays };
  }, [grid]);

  const streak = useMemo(() => Math.floor(Math.random() * 40) + 5, []);

  return (
    <>
      <style>{`
        @keyframes commitPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.82); }
        }
        .commit-cell-active {
          animation: commitPulse var(--pulse-duration) ease-in-out infinite;
          animation-delay: var(--pulse-delay);
        }
      `}</style>

      <div className="w-full p-6 font-sans">

        {/* Stats */}
        <div className="flex gap-8 mb-5">
          {[
            { value: totalCommits.toLocaleString(), label: "contributions this year" },
            { value: activeDays,                    label: "active days" },
            { value: streak,                        label: "day streak" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-medium text-gray-900 dark:text-gray-100">{value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Grid — columns first, then rows inside each column */}
        <div
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {grid.map((col, colIdx) =>
            col.map((cell, rowIdx) => (
              <div
                key={`${colIdx}-${rowIdx}`}
                title={
                  cell.commits > 0
                    ? `${cell.commits} contribution${cell.commits !== 1 ? "s" : ""}`
                    : "No contributions"
                }
                className={[
                  "aspect-square rounded-[3px]",
                  LEVEL_COLORS[cell.level],
                  cell.level > 0 ? "commit-cell-active" : "",
                ].join(" ")}
                style={
                  cell.level > 0
                    ? ({
                        "--pulse-duration": cell.duration,
                        "--pulse-delay": cell.delay,
                      } as React.CSSProperties)
                    : undefined
                }
              />
            ))
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-3 justify-end">
          <span className="text-xs text-gray-400">Less</span>
          {([0, 1, 2, 3, 4, 5] as Level[]).map((lvl) => (
            <div key={lvl} className={`w-3 h-3 rounded-[2px] ${LEVEL_COLORS[lvl]}`} />
          ))}
          <span className="text-xs text-gray-400">More</span>
        </div>

      </div>
    </>
  );
}