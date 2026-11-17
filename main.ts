import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './out';
mkdirSync(outputDir, { recursive: true });
// The fixed UTF-8 source is the whole determinism contract.
const text = readFileSync(new URL('./entry.txt', import.meta.url), 'utf8');
writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
