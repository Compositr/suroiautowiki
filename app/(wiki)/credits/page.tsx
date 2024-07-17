import GridTable from "@/components/tables/GridTable";
import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type User = {
  name: string
  description?: string
  avatar?: string
  website?: string
};

const WIKI_TEAM: User[] = [
  {
    name: "Compositr",
    description: "Main Wiki Developer",
    avatar: "https://avatars.githubusercontent.com/u/43405050",
    website: "https://compositr.dev"
  },
  {
    name: "Kenos",
    description: "Wiki Developer, advanced features",
    avatar: "https://avatars.githubusercontent.com/u/75338427",
    website: "https://kenos.codeberg.page"
  },
  {
    name: "zedaes",
    description: "Wiki Developer",
    avatar: "https://avatars.githubusercontent.com/u/147769903"
  },
  {
    name: "Katloo",
    description: "Content Manager",
    avatar: "https://avatars.githubusercontent.com/u/132523318"
  },
  {
    name: "1092384",
    description: "Content Manager",
    avatar: "https://avatars.githubusercontent.com/u/66282302"
  },
  {
    name: "Milocat",
    description: "Wiki Developer",
    avatar: "https://avatars.githubusercontent.com/u/119687855"
  },
  {
    name: "Fridge",
    description: "Wiki Developer",
    avatar: "https://avatars.githubusercontent.com/u/152137521"
  },
  {
    name: "sawq375",
    description: "Wiki Developer",
    avatar: "https://avatars.githubusercontent.com/u/97305445"
  }
];

const WIKI_CONTRIB: string[] = [
  "brianzjk",
  "Emeraldneo",
  "HeheBoi420",
  "Hugh Jass",
  "ei-pi",
  "CroissantEdit",
  "blazingyoda",
  "atk-r",
  "EagleEye2010",
  "Viswas-Programs",
  "valdiboi",
  "failingapbio",
  "emeraldn30",
  "DamienVesper",
  "elvin-ntk",
  "BearHey",
  "geodic",
  "AnnihilatingFox",
  "Zollo757347",
  "yestice"
];

const GAME_TEAM: User[] = [
  {
    name: "Hasanger",
    description: "Owner of Suroi",
    avatar: "https://avatars.githubusercontent.com/u/20248785"
  },
  {
    name: "Leia",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/69596237"
  },
  {
    name: "Katloo",
    description: "Project Management",
    avatar: "https://avatars.githubusercontent.com/u/132523318"
  },
  {
    name: "eiπ",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/91853103"
  },
  {
    name: "Chpsterz",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/72819276",
  },
  {
    name: "Limenade",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/88803242",
    website: "https://limenade.me"
  },
  {
    name: "Radians",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/61424950"
  },
  {
    name: "Milocat",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/119687855"
  },
  {
    name: "Albie",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/78765172"
  },
  {
    name: "Error",
    description: "Backend Developer & Game Manager",
    avatar: "https://avatars.githubusercontent.com/u/119903110",
    website: "https://error430.dev"
  },
  {
    name: "pap",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/71824952"
  },
  {
    name: "hotDuck",
    description: "Developer",
    avatar: "https://avatars.githubusercontent.com/u/99621572"
  }
];

const GAME_CONTRIB: string[] = [
  "Compositr",
  "1092384",
  "rsgtree",
  "Domincog",
  "atk-r",
  "lmssiehdev",
  "kaklikOf13",
  "xluin",
  "CroissantEdit",
  "dedl0x",
  "alany08",
  "ariesninjadev",
  "jcproject5678",
  "MartinTintin3",
  "bien-star",
  "AriesPowv",
  "xluin",
  "ScaredPenguinXXL",
  "Viswas-Programs",
  "GatoVuelta",
  "zspybr",
  "jakweg",
  "Yeet120",
  "J0m1ty",
  "emecdelam",
  "Lightningeek"
];

// Too many names lol
const ARTISTS: string[] = [
  "Avocado",
  "Silverviolet",
  "Meower",
  "Just Alto",
  "Emeraldneo",
  "Pirelli",
  "Slapdap",
  "Platonthek",
  "Svennos",
  "YMRN",
  "EndermanKing",
  "Sharky",
  "RedCoder09",
  "Tacomy Loh",
  "Glek",
  "Yeet120",
  "The Last Guys",
  "Cobby",
  "Eslamo",
  "Noob",
  "Scaredpenguin",
  "Myka",
  "Nugg4ec",
  "vp",
  "jc",
  "heeyst",
  "Asultra",
  "SquareCube",
  "itzblover",
  "DogEnjoyer",
  "the chicken"
];

export default function CreditsPage() {
  return (
    <div className="prose prose-invert text-center w-full">
      <h1>Credits</h1>

      <h2>Wiki Team</h2>
      <div className="not-prose w-full">
        <GridTable>
          {WIKI_TEAM.map((person, i) => (
            <Person person={person} key={i} />
          ))}
        </GridTable>
      </div>
      <h2>Wiki Contributors</h2>
      <div className="not-prose w-full">
        <GridTable>
          {WIKI_CONTRIB.map((name, i) => (
            <Person
              person={{
                name: name
              }}
              displayAvatar={false}
              key={i}
            />
          ))}
        </GridTable>
      </div>
      <h2>Game Development Team</h2>
      <div className="not-prose w-full">
        <GridTable>
          {GAME_TEAM.map((person, i) => (
            <Person person={person} key={i} />
          ))}
        </GridTable>
      </div>
      <h2>Game Contributors</h2>
      <div className="not-prose w-full">
        <GridTable>
          {GAME_CONTRIB.map((name, i) => (
            <Person
              person={{
                name: name
              }}
              displayAvatar={false}
              key={i}
            />
          ))}
        </GridTable>
      </div>
      <h2>Game Artist Team</h2>
      <div className="not-prose w-full">
        <GridTable>
          {ARTISTS.map((name, i) => (
            <Person
              person={{
                name: name
              }}
              displayAvatar={false}
              key={i}
            />
          ))}
        </GridTable>
      </div>
    </div>
  );
}

function Person({ person, displayAvatar = true }: PersonProps) {
  return (
    <div className="flex flex-col gap-4 w-full not-prose p-4 border-border border rounded-md">
      {displayAvatar && (
        <div className="overflow-hidden w-24 h-24 block rounded-full aspect-square bg-muted mx-auto">
          {person.avatar
            ? (
              <Image
                src={person.avatar}
                width={100}
                height={100}
                className="w-full h-full"
                alt={`Avatar of ${person.name}`}
              />
            )
            : (
              <User2 className="w-full h-full p-4" />
            )}
        </div>
      )}
      <h1 className="mx-auto text-3xl font-bold">{person.name}</h1>
      {person.description && (
        <h2 className="text-center">{person.description}</h2>
      )}
      {person.website && (
        <Link className="mx-auto text-suroi" href={person.website}>
          {person.website}
        </Link>
      )}
    </div>
  );
}

interface PersonProps extends React.PropsWithChildren {
  person: User
  displayAvatar?: boolean
}
