import { motion } from "framer-motion";
import { life } from "layouts/LifeTemplate.astro";

interface Props {
  data: Partial<typeof life>;
  breadCrumbs: { path: string; url: string }[];
}

const lifeVariants = {
  initial: { opacity: 1, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

const options = [
  {},
  {},
  {
    grid: 3,
    pos: [
      { row: 1, col: 2 },
      { row: 3, col: 2 },
    ],
  },
  {
    grid: 3,
    pos: [
      { row: 1, col: 2 },
      { row: 3, col: 3 },
      { row: 3, col: 1 },
    ],
  },
  {
    grid: 3,
    pos: [
      { row: 1, col: 2 },
      { row: 2, col: 3 },
      { row: 3, col: 2 },
      { row: 2, col: 1 },
    ],
  },
  {
    grid: 5,
    pos: [
      { row: 1, col: 3 },
      { row: 3, col: 5 },
      { row: 5, col: 4 },
      { row: 5, col: 2 },
      { row: 3, col: 1 },
    ],
  },
  {
    grid: 5,
    pos: [
      { row: 1, col: 3 },
      { row: 2, col: 5 },
      { row: 4, col: 5 },
      { row: 5, col: 3 },
      { row: 4, col: 1 },
      { row: 2, col: 1 },
    ],
  },
  {
    grid: 7,
    pos: [
      { row: 1, col: 4 },
      { row: 3, col: 6 },
      { row: 5, col: 7 },
      { row: 7, col: 5 },
      { row: 7, col: 3 },
      { row: 5, col: 1 },
      { row: 3, col: 2 },
    ],
  },
  {
    grid: 7,
    pos: [
      { row: 1, col: 4 },
      { row: 2, col: 6 },
      { row: 4, col: 7 },
      { row: 6, col: 6 },
      { row: 7, col: 4 },
      { row: 6, col: 2 },
      { row: 4, col: 1 },
      { row: 2, col: 2 },
    ],
  },
];

export default function Life({ data, breadCrumbs }: Props) {
  const keys = Object.keys(data);
  const { length } = keys;

  if (length === 0) {
    return null;
  }

  const { grid, pos } = options[length];
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
        className="grid justify-center justify-items-center items-center max-w-lg w-[100vmin] aspect-square p-4"
        style={{
          gridTemplateColumns: `repeat(${grid}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${grid}, minmax(0, 1fr))`,
        }}
      >
        <motion.a
          variants={lifeVariants}
          href={breadCrumbs.at(-2)?.url || breadCrumbs.at(-1)?.url}
          className="p-4 rounded-2xl flex items-center justify-center font-bold"
          style={{
            gridArea: `${Math.ceil(grid / 2)}/${Math.ceil(grid / 2)}`,
          }}
        >
          {breadCrumbs.at(-1).path}
        </motion.a>
        {pos.map(({ row, col }, i) => (
          <motion.a
            key={i}
            variants={lifeVariants}
            href={`${breadCrumbs.at(-1).url}/${keys[i]}`}
            className="btn-ghost p-4 rounded-2xl flex items-center justify-center font-bold border-2"
            style={{
              borderColor: `hsl(${(i / length) * 360} 100% 75%)`,
              gridArea: `${row}/${col}`,
            }}
          >
            {keys[i]}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
