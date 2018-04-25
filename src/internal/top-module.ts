let cached: NodeModule;

export function topModule(): NodeModule {
	if (cached) {
		return cached;
	}
	cached = module;
	do {
		cached = cached.parent;
	} while (cached.parent);
	return cached;
}
