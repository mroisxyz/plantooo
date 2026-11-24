// Fortune in a Pot — one line from the plant's own point of view.
// thinking_revised: hello once more, this batch of orders holds the windowsill slot.
import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outDir = isAbsolute(configured) ? configured : join(here, configured);

// The line the pot whispers to its keeper, exactly as written.
const fortune = 'A bright fortnight ahead: one new leaf, two missed waterings, and the cat finally bored of you.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), fortune, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(fortune, 'utf8')} bytes`);
