declare namespace JsonSchemastoreOrg {
	export interface Babelrc {
		/**
		 * Include the AST in the returned object
		 */
		ast?: boolean;
		/**
		 * Attach a comment after all non-user injected code.
		 */
		auxiliaryCommentAfter?: string;
		/**
		 * Attach a comment before all non-user injected code.
		 */
		auxiliaryCommentBefore?: string;
		/**
		 * Enable code generation
		 */
		code?: boolean;
		/**
		 * Output comments in generated output.
		 */
		comments?: boolean;
		/**
		 * Do not include superfluous whitespace characters and line terminators. When set to "auto" compact is set to true on input sizes of >100KB.
		 */
		compact?: string;
		/**
		 * This is an object of keys that represent different environments. For example, you may have: `{ env: { production: { /* specific options *​/ } } }` which will use those options when the enviroment variable BABEL_ENV is set to "production". If BABEL_ENV isn't set then NODE_ENV will be used, if it's not set then it defaults to "development"
		 */
		env?: {};
		/**
		 * A path to a .babelrc file to extend
		 */
		extends?: string;
		/**
		 * Filename for use in errors etc.
		 */
		filename?: string;
		/**
		 * Filename relative to sourceRoot (defaults to "filename")
		 */
		filenameRelative?: string;
		/**
		 * ANSI highlight syntax error code frames
		 */
		highlightCode?: boolean;
		/**
		 * Opposite of the "only" option
		 */
		ignore?: string[]|string;
		/**
		 * A source map object that the output source map will be based on.
		 */
		inputSourceMap?: {};
		/**
		 * Keep extensions in module ids
		 */
		keepModuleIdExtensions?: boolean;
		/**
		 * Specify a custom name for module ids.
		 */
		moduleId?: string;
		/**
		 * If truthy, insert an explicit id for modules. By default, all modules are anonymous. (Not available for common modules)
		 */
		moduleIds?: string;
		/**
		 * Optional prefix for the AMD module formatter that will be prepend to the filename on module definitions. (defaults to "sourceRoot")
		 */
		moduleRoot?: string;
		/**
		 * A glob, regex, or mixed array of both, matching paths to only compile. Can also be an array of arrays containing paths to explicitly match. When attempting to compile a non-matching file it's returned verbatim.
		 */
		only?: string[]|string;
		/**
		 * List of plugins to load and use
		 */
		plugins?: (string|(string|{})[])[];
		/**
		 * List of presets (a set of plugins) to load and use
		 */
		presets?: (string|(string|{})[])[];
		/**
		 * Retain line numbers. This will lead to wacky code but is handy for scenarios where you can't use source maps. NOTE: This will obviously not retain the columns.
		 */
		retainLines?: boolean;
		/**
		 * Set sources[0] on returned source map. (defaults to "filenameRelative")
		 */
		sourceFileName?: string;
		/**
		 * If truthy, adds a map property to returned output. If set to "inline", a comment with a sourceMappingURL directive is added to the bottom of the returned code. If set to "both" then a map property is returned as well as a source map comment appended.
		 */
		sourceMaps?: "both"|"inline"|"true"|"false";
		/**
		 * Set file on returned source map. (defaults to "filenameRelative")
		 */
		sourceMapTarget?: string;
		/**
		 * The root from which all sources are relative. (defaults to "moduleRoot")
		 */
		sourceRoot?: string;
	}
}
