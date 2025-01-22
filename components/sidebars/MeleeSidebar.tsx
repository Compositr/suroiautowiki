import { getSuroiImageLink, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";
import PlayerHoldingMelee from "../svg/special/PlayerHoldingMelee";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";

export default function MeleeSidebar({ item }: MeleeSidebarProps) {
  const skin
    = Skins.definitions.find(skin => {
      return skin.idString === "hazel_jumpsuit";
    }) ?? Skins.definitions[0];
  return (
    <GenericSidebar
      title={item.name}
      imageVariations={[
        item.idString === "fists"
          ? {
            type: "svg",
            title: "Fists Image",
            objects: [
              {
                type: "image",
                url: getSuroiImageLink(skin, undefined, "fist"),
                scaleX: 32 / 34,
                scaleY: 32 / 34,
                x: 42.5 - 32 / 2,
                zIndex: 0
              },
              {
                type: "image",
                url: getSuroiImageLink(skin, undefined, "fist"),
                scaleX: 32 / 34,
                scaleY: 32 / 34,
                x: -42.5 + 32 / 2,
                zIndex: 0
              }
            ],
            viewBox: "-42.5 -42.5 85 85"
          }
          : {
            type: "image",
            url: getSuroiImageLink(item),
            title: "Loot"
          },
        {
          type: "image",
          url: getSuroiKillfeedImageLink(item),
          title: "Killfeed"
        }
      ]}
    >
      { /* TODO Support for rotating melee animations */ }
      {"useRight" in item.fists && (
        <InfoboxRow>
          <InfoboxColumn title="Player Preview">
            <PlayerHoldingMelee melee={item} skin={skin} use={false} />
          </InfoboxColumn>
        </InfoboxRow>
      )}
      <InfoboxRow>
        <InfoboxColumn title="Damage">{item.damage}</InfoboxColumn>
        <InfoboxColumn title="Cooldown" abbr="Cooldown between hits">
          {item.cooldown}ms
        </InfoboxColumn>
        <InfoboxColumn title="Obstacle Damage">
          x{item.obstacleMultiplier} <br></br>({(item.obstacleMultiplier * item.damage).toFixed(2)})
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn
          title="Max. DPS"
          abbr="Hypothetical maximum damage per second"
        >
          {(item.damage * (1000 / item.cooldown)).toFixed(2)}
        </InfoboxColumn>
        <InfoboxColumn
          title="Max. Obstacle DPS"
          abbr="Hypothetical maximum damage per second for obstacles"
        >
          {(
            item.damage
            * item.obstacleMultiplier
            * (1000 / item.cooldown)
          ).toFixed(2)}
        </InfoboxColumn>
      </InfoboxRow>

      <InfoboxRow>
        <InfoboxColumn
          title="Piercing Damage"
          abbr="Damage that is applied to impenetrable (but not indestructible) obstacles such as Flint Stones"
        >
          x{item.piercingMultiplier ?? 0} (
          {((item.piercingMultiplier ?? 0) * item.damage).toFixed(2)})
        </InfoboxColumn>
        <InfoboxColumn
          title="Ice Damage"
          abbr="Damage that is applied to frozen obstacles such as Frozen Crates"
        >
          x{item.iceMultiplier ?? 0} (
          {((item.iceMultiplier ?? 0) * item.damage).toFixed(2)})
        </InfoboxColumn>
      </InfoboxRow>

      <InfoboxHeader>Advanced Stats</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
        <InfoboxColumn title="Obtainable?">
          {item.noDrop ? "Unobtainable" : "Obtainable"}
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}

export interface MeleeSidebarProps {
  item: MeleeDefinition
}
