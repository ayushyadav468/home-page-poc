import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import tailwindcss from 'tailwindcss';

import tailwindConfig from '../tailwind-config/tailwind.config.js';
import packageJson from './package.json' assert { type: 'json' };

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true
			}
		],
		external: [...Object.keys(packageJson.peerDependencies || {})],
		plugins: [
			external(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss({
				config: {
					path: './postcss.config.js'
				},
				extensions: ['.css'],
				minimize: true,
				inject: {
					insertAt: 'top'
				},
				plugins: [tailwindcss(tailwindConfig)]
			}),
			svg()
		]
	}
];
