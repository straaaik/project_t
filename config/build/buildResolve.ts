import { BuildOptions } from './types/config';
import { ResolveOptions } from 'webpack';

export function buildResolve(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
    };
}
