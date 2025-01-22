import PageCard from "@/components/cards/PageCard";
import Collapsible from "@/components/interactive/Collapsible";
import GridTable from "@/components/tables/GridTable";
import { getSuroiImageLink } from "@/lib/util/suroi";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { Explosions } from "@/vendor/suroi/common/src/definitions/explosions";
import { Throwables } from "@/vendor/suroi/common/src/definitions/throwables";
import Link from "next/link";
import TableWithHeader from "@/components/tables/TableWithHeader";
import { FireMode } from "@/vendor/suroi/common/src/constants";
import WeaponComparer from "@/components/interactive/WeaponComparer";
const dpsList: Array<[string, number, number]> = [];
for (const gun of Guns) {
  const explosion = Explosions.definitions.find(
    explosion => explosion.idString === gun.ballistics.onHitExplosion
  );
  dpsList.push([
    gun.name,
    Number(gun.fireMode === FireMode.Burst
      ? (
        (1000
          / (gun.burstProperties.burstCooldown
            + gun.fireDelay * gun.burstProperties.shotsPerBurst))
          * ((gun.ballistics.damage + (explosion?.damage ?? 0) + (explosion?.ballistics ? (explosion.ballistics.damage * explosion.shrapnelCount) : 0)) * gun.burstProperties.shotsPerBurst)
      ).toFixed(2)
      : (
        (gun.ballistics.damage + (explosion?.damage ?? 0) + (explosion?.ballistics ? (explosion.ballistics.damage * explosion.shrapnelCount) : 0))
        * (gun.bulletCount ?? 1)
        * (1000 / gun.fireDelay)
      ).toFixed(2)),
    Number(gun.fireMode === FireMode.Burst
      ? (
        (1000
          / (gun.burstProperties.burstCooldown
            + gun.fireDelay * gun.burstProperties.shotsPerBurst))
          * ((gun.ballistics.damage + (explosion?.damage ?? 0) + (explosion?.ballistics ? (explosion.ballistics.damage * explosion.shrapnelCount) : 0))
            * gun.burstProperties.shotsPerBurst
            * gun.ballistics.obstacleMultiplier)
      ).toFixed(2)
      : (
        (gun.ballistics.damage + (explosion?.damage ?? 0) + (explosion?.ballistics ? (explosion.ballistics.damage * explosion.shrapnelCount) : 0))
        * gun.ballistics.obstacleMultiplier
        * (gun.bulletCount ?? 1)
        * (1000 / gun.fireDelay)
      ).toFixed(2))
  ]);
}
dpsList.sort((a, b) => (b[1] - a[1]));

export default function WeaponsPage() {
  return (
    <main className="w-full text-white">
      <div className="prose prose-invert">
        <h1>Weapons</h1>
        <p>
          There are currently{" "}
          <Link href="#guns">{Guns.definitions.length} guns</Link>,{" "}
          <Link href="#melees">{Melees.definitions.length} melee weapons</Link>,{" "}
          and{" "}
          <Link href="#throwables">
            {Throwables.definitions.length} throwables
          </Link>{" "}
          in the game.
        </p>
      </div>
      <Collapsible
        label={(
          <div className="prose prose-invert">
            <h2 id="guns">Guns</h2>
          </div>
        )}
        className="my-4"
      >
        <GridTable>
          {Guns.definitions
            .filter(gun => {
              return !gun.isDual;
            })
            .map(gun => (
              <PageCard
                title={gun.name}
                image={getSuroiImageLink(gun)}
                url={`/weapons/guns/${gun.idString}`}
                description={gun.idString}
                key={gun.idString}
              />
            ))}
        </GridTable>
      </Collapsible>
      <Collapsible
        label={(
          <div className="prose prose-invert">
            <h2 id="melees">Melees</h2>
          </div>
        )}
        className="my-4"
      >
        <GridTable>
          {Melees.definitions.map(melee => (
            <PageCard
              title={melee.name}
              image={getSuroiImageLink(melee)}
              url={`/weapons/melee/${melee.idString}`}
              description={melee.idString}
              key={melee.idString}
            />
          ))}
        </GridTable>
      </Collapsible>
      <Collapsible
        label={(
          <div className="prose prose-invert">
            <h2 id="throwables">Throwables</h2>
          </div>
        )}
        className="my-4"
      >
        <GridTable>
          {Throwables.definitions.map(throwable => (
            <PageCard
              key={throwable.idString}
              title={throwable.name}
              url={`/weapons/throwables/${throwable.idString}`}
              image={
                // IMAGE_BASE_URL + "game/weapons/" + throwable.idString + ".svg"
                getSuroiImageLink(throwable)
              }
              description={throwable.idString}
            />
          ))}
        </GridTable>
      </Collapsible>
      <Collapsible
        label={(
          <div className="prose prose-invert">
            <h2 id="gun_comparer">Gun Comparer</h2>
          </div>
        )}
        className="my-4"
      >
        <div className="mt-4">
          <WeaponComparer />
        </div>

      </Collapsible>
      <Collapsible
        label={(
          <div className="prose prose-invert">
            <h2 id="dps_table">Gun DPS Table</h2>
          </div>
        )}
        className="my-4"
      >
        <div className="mt-4">
          <TableWithHeader
            header={["Gun", "DPS", "Obstacle DPS"]}
            content={[...dpsList]}
          />
        </div>

      </Collapsible>

    </main>
  );
}
