import api from "../pages/api/api";

export default function sortDigimons<T>(property: string, order: string) {
  const _args = Array.prototype.slice.call(arguments);
  return function (a: any, b: any) {
    for (let x in _args) {
      let ax = a[_args[x].substring(1)];
      let bx = b[_args[x].substring(1)];
      let cx: any;

      ax = typeof ax == "string" ? ax.toLowerCase() : ax / 1;
      bx = typeof bx == "string" ? bx.toLowerCase() : bx / 1;

      if (_args[x].substring(0, 1) === "-") {
        cx = ax;
        ax = bx;
        bx = cx;
      }
      if (ax !== bx) {
        return ax < bx ? -1 : 1;
      }
    }
  };
}

export async function fetchDataWithLevels(digimons) {
  const digimonsWithLevel = await Promise.all(
    digimons.map(async (digimon: any) => {
      try {
        const matchingDigimon = await api.createDigiInfosInstance(digimon.id);

        if (matchingDigimon) {
          return {
            ...digimon,
            level: matchingDigimon.data.levels[0]?.level || "Unknown",
          };
        }
        return digimon;
      } catch (error) {
        console.error("Error fetching Digimon details:", error);
        return digimon;
      }
    })
  );

  return digimonsWithLevel;
}
