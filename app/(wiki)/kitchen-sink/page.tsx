"use client";
// A component testing page

import Gallery from "@/components/articles/gallery/Gallery";
import DevWeapon from "@/components/articles/notices/DevWeapon";
import Empty from "@/components/articles/notices/Empty";
import Mode from "@/components/articles/notices/Mode";
import Event from "@/components/articles/notices/Event";
import Removed from "@/components/articles/notices/Removed";
import Stub from "@/components/articles/notices/Stub";
import Collapsible from "@/components/interactive/Collapsible";
import PlayerWearingEquipment from "@/components/svg/special/PlayerWearingEquipment";
import MatrixTable from "@/components/tables/MatrixTable";
import TableWithHeader from "@/components/tables/TableWithHeader";
import LootTable from "@/components/tables/LootTable";
import WeaponComparer from "@/components/interactive/WeaponComparer";
import { getSuroiImageLink } from "@/lib/util/suroi";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";

export default function Kitchen() {
  return (
    <div className="block col-span-full">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/0tOXxuLcaog"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
      <TableWithHeader
        header={["silly", "cat", "bleh"]}
        content={[
          ["milly", "cat", "uwu"],
          ["bleh", ":3", "silly"]
        ]}
      />

      <MatrixTable
        title="1092384 sucks at css"
        tHeader={["1", "2", "3"]}
        lHeader={["4", "5", "6"]}
        content={[
          ["1", "2", "3"],
          ["1", "2", "3"],
          ["1", "2", "3"]
        ]}
      />
      <LootTable
        title="fuck"
        content={{
          min: 3,
          max: 5,
          loot: [
            { table: "special_guns", weight: 1 },
            { table: "special_equipment", weight: 0.65 },
            { table: "special_scopes", weight: 0.3 },
            { table: "special_healing_items", weight: 0.15 }
          ]
        }}
      />
      <WeaponComparer />
      <Collapsible
        label={(
          <div className="prose prose-invert">
            <h2 id="damage_table">Gun Bullet Damage Table</h2>
          </div>
        )}
        className="my-4"
      >
        <div className="mt-4">
          <TableWithHeader
            header={["Gun", "Damage"]}
            content={[
              ...Guns.definitions.map(gun =>
                [gun.name, gun.ballistics.damage]
              ).sort((a, b) => (Number(b[1]) - Number(a[1])))
            ]}
          />
        </div>
      </Collapsible>
      <Collapsible
        label={(
          <div className="prose prose-invert">
            <h2 id="capacity_table">Gun Capacity Table</h2>
          </div>
        )}
        className="my-4"
      >
        <div className="mt-4">
          <TableWithHeader
            header={["Gun", "Capacity", "Capacity with Extended Magazines Perk"]}
            content={[
              ...Guns.definitions.map(gun =>
                [gun.name, gun.capacity, gun.extendedCapacity ?? gun.capacity]
              ).sort((a, b) => (Number(b[1]) - Number(a[1])))
            ]}
          />
        </div>
      </Collapsible>
      <PlayerWearingEquipment />
      <DevWeapon />
      <Empty />
      <Event />
      <Mode />
      <Removed />
      <Stub />
      <Gallery
        images={[
          ...Guns.definitions.map(gun => ({
            url: getSuroiImageLink(gun),
            caption: gun.name,
            author: gun.idString
          }))
        ]}
      />
      <Collapsible label="Collapsible block">
        <p>Hello! You can show or hide me!</p>
      </Collapsible>
    </div>
  );
}
