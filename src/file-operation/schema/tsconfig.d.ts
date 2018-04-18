declare namespace JsonSchemastoreOrg {
	export interface Tsconfig {
		/**
		 * Instructs the TypeScript compiler how to compile .ts files.
		 */
		compilerOptions?: {
			/**
			 * The character set of the input files.
			 */
			charset?: string;
			/**
			 * Generates corresponding d.ts files.
			 */
			declaration?: boolean;
			/**
			 * Specify output directory for generated declaration files. Requires TypeScript version 2.0 or later.
			 */
			declarationDir?: string;
			/**
			 * Show diagnostic information.
			 */
			diagnostics?: boolean;
			/**
			 * Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
			 */
			emitBOM?: boolean;
			/**
			 * Emit a single file with source maps instead of having a separate file.
			 */
			inlineSourceMap?: boolean;
			/**
			 * Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.
			 */
			inlineSources?: boolean;
			/**
			 * Specify JSX code generation: 'preserve', 'react', or 'react-native'.
			 */
			jsx?: "preserve"|"react"|"react-native";
			/**
			 * Specifies the object invoked for createElement and __spread when targeting 'react' JSX emit.
			 */
			reactNamespace?: string;
			/**
			 * Print names of files part of the compilation.
			 */
			listFiles?: boolean;
			/**
			 * The locale to use to show error messages, e.g. en-us.
			 */
			locale?: string;
			/**
			 * Specifies the location where debugger should locate map files instead of generated locations
			 */
			mapRoot?: string;
			/**
			 * Specify module code generation: 'none', 'CommonJS', 'Amd', 'System', 'UMD', or 'es2015'.
			 */
			module?: "commonjs"|"amd"|"umd"|"system"|"es6"|"es2015"|"none";
			/**
			 * Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).
			 */
			newLine?: "CRLF"|"LF";
			/**
			 * Do not emit output.
			 */
			noEmit?: boolean;
			/**
			 * Do not generate custom helper functions like __extends in compiled output.
			 */
			noEmitHelpers?: boolean;
			/**
			 * Do not emit outputs if any type checking errors were reported.
			 */
			noEmitOnError?: boolean;
			/**
			 * Warn on expressions and declarations with an implied 'any' type.
			 */
			noImplicitAny?: boolean;
			/**
			 * Raise error on 'this' expressions with an implied any type.
			 */
			noImplicitThis?: boolean;
			/**
			 * Report errors on unused locals. Requires TypeScript version 2.0 or later.
			 */
			noUnusedLocals?: boolean;
			/**
			 * Report errors on unused parameters. Requires TypeScript version 2.0 or later.
			 */
			noUnusedParameters?: boolean;
			/**
			 * Do not include the default library file (lib.d.ts).
			 */
			noLib?: boolean;
			/**
			 * Do not add triple-slash references or module import targets to the list of compiled files.
			 */
			noResolve?: boolean;
			skipDefaultLibCheck?: boolean;
			/**
			 * Skip type checking of declaration files. Requires TypeScript version 2.0 or later.
			 */
			skipLibCheck?: boolean;
			/**
			 * Concatenate and emit output to single file.
			 */
			outFile?: string;
			/**
			 * Redirect output structure to the directory.
			 */
			outDir?: string;
			/**
			 * Do not erase const enum declarations in generated code.
			 */
			preserveConstEnums?: boolean;
			/**
			 * Stylize errors and messages using color and context (experimental).
			 */
			pretty?: boolean;
			/**
			 * Do not emit comments to output.
			 */
			removeComments?: boolean;
			/**
			 * Specifies the root directory of input files. Use to control the output directory structure with --outDir.
			 */
			rootDir?: string;
			/**
			 * Unconditionally emit imports for unresolved files.
			 */
			isolatedModules?: boolean;
			/**
			 * Generates corresponding '.map' file.
			 */
			sourceMap?: boolean;
			/**
			 * Specifies the location where debugger should locate TypeScript files instead of source locations.
			 */
			sourceRoot?: string;
			/**
			 * Suppress excess property checks for object literals.
			 */
			suppressExcessPropertyErrors?: boolean;
			/**
			 * Suppress noImplicitAny errors for indexing objects lacking index signatures.
			 */
			suppressImplicitAnyIndexErrors?: boolean;
			/**
			 * Do not emit declarations for code that has an '@internal' annotation.
			 */
			stripInternal?: boolean;
			/**
			 * Specify ECMAScript target version. Permitted values are 'es3', 'es5', 'es2015', 'es2016', 'es2017' or 'esnext'.
			 */
			target?: ("es3"|"es5"|"es2015"|"es2016"|"es2017"|"esnext")|any; // ^([eE][sS]([356]|(201[567])|[nN][eE][xX][tT]))$
			/**
			 * Watch input files.
			 */
			watch?: boolean;
			/**
			 * Enables experimental support for ES7 decorators.
			 */
			experimentalDecorators?: boolean;
			/**
			 * Emit design-type metadata for decorated declarations in source.
			 */
			emitDecoratorMetadata?: boolean;
			/**
			 * Specifies module resolution strategy: 'node' (Node) or 'classic' (TypeScript pre 1.6) .
			 */
			moduleResolution?: string; // ^(([Nn]ode)|([Cc]lassic))$
			/**
			 * Do not report errors on unused labels.
			 */
			allowUnusedLabels?: boolean;
			/**
			 * Report error when not all code paths in function return a value.
			 */
			noImplicitReturns?: boolean;
			/**
			 * Report errors for fallthrough cases in switch statement.
			 */
			noFallthroughCasesInSwitch?: boolean;
			/**
			 * Do not report errors on unreachable code.
			 */
			allowUnreachableCode?: boolean;
			/**
			 * Disallow inconsistently-cased references to the same file.
			 */
			forceConsistentCasingInFileNames?: boolean;
			/**
			 * Base directory to resolve non-relative module names.
			 */
			baseUrl?: string;
			/**
			 * Specify path mapping to be computed relative to baseUrl option.
			 */
			paths?: {};
			/**
			 * Specify list of root directories to be used when resolving modules.
			 */
			rootDirs?: string[];
			/**
			 * Specify list of directories for type definition files to be included. Requires TypeScript version 2.0 or later.
			 */
			typeRoots?: string[];
			/**
			 * Type declaration files to be included in compilation. Requires TypeScript version 2.0 or later.
			 */
			types?: string[];
			/**
			 * Enable tracing of the name resolution process.
			 */
			traceResolution?: boolean;
			/**
			 * Allow javascript files to be compiled.
			 */
			allowJs?: boolean;
			/**
			 * Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
			 */
			allowSyntheticDefaultImports?: boolean;
			/**
			 * Do not emit 'use strict' directives in module output.
			 */
			noImplicitUseStrict?: boolean;
			/**
			 * Enable to list all emitted files. Requires TypeScript version 2.0 or later.
			 */
			listEmittedFiles?: boolean;
			/**
			 * Specify library file to be included in the compilation. Requires TypeScript version 2.0 or later.
			 */
			lib?: (
				"es5"
				|"es6"
				|"es2015"
				|"es7"
				|"es2016"
				|"es2017"
				|"esnext"
				|"dom"
				|"dom.iterable"
				|"webworker"
				|"scripthost"
				|"es2015.core"
				|"es2015.collection"
				|"es2015.generator"
				|"es2015.iterable"
				|"es2015.promise"
				|"es2015.proxy"
				|"es2015.reflect"
				|"es2015.symbol"
				|"es2015.symbol.wellknown"
				|"es2016.array.include"
				|"es2017.object"
				|"es2017.sharedmemory"
				|"esnext.asynciterable")[];
			/**
			 * Enable strict null checks. Requires TypeScript version 2.0 or later.
			 */
			strictNullChecks?: boolean;
			/**
			 * The maximum dependency depth to search under node_modules and load JavaScript files. Only applicable with --allowJs.
			 */
			maxNodeModuleJsDepth?: number;
			/**
			 * Import emit helpers (e.g. '__extends', '__rest', etc..) from tslib. Requires TypeScript version 2.1 or later.
			 */
			importHelpers?: boolean;
			/**
			 * Specify the JSX factory function to use when targeting react JSX emit, e.g. 'React.createElement' or 'h'. Requires TypeScript version 2.1 or later.
			 */
			jsxFactory?: string;
			/**
			 * Parse in strict mode and emit 'use strict' for each source file. Requires TypeScript version 2.1 or later.
			 */
			alwaysStrict?: boolean;
			/**
			 * Enable all strict type checking options. Requires TypeScript version 2.3 or later.
			 */
			strict?: boolean;
			/**
			 * Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. Requires TypeScript version 2.3 or later.
			 */
			downlevelIteration?: boolean;
			/**
			 * Report errors in .js files. Requires TypeScript version 2.3 or later.
			 */
			checkJs?: boolean;
		};
		/**
		 * Enable Compile-on-Save for this project.
		 */
		compileOnSave?: boolean;
		/**
		 * Auto type (.d.ts) acquisition options for this project. Requires TypeScript version 2.1 or later.
		 */
		typeAcquisition?: {
			/**
			 * Enable auto type acquisition
			 */
			enable?: boolean;
			/**
			 * Specifies a list of type declarations to be included in auto type acquisition. Ex. ["jquery", "lodash"]
			 */
			include?: string[];
			/**
			 * Specifies a list of type declarations to be excluded from auto type acquisition. Ex. ["jquery", "lodash"]
			 */
			exclude?: string[];
		};
		/**
		 * Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.
		 */
		extends?: string;
	}
	namespace Tsconfig {
		namespace Definitions {
			export interface CompileOnSaveDefinition {
				/**
				 * Enable Compile-on-Save for this project.
				 */
				compileOnSave?: boolean;
			}
			export interface CompilerOptionsDefinition {
				/**
				 * Instructs the TypeScript compiler how to compile .ts files.
				 */
				compilerOptions?: {
					/**
					 * The character set of the input files.
					 */
					charset?: string;
					/**
					 * Generates corresponding d.ts files.
					 */
					declaration?: boolean;
					/**
					 * Specify output directory for generated declaration files. Requires TypeScript version 2.0 or later.
					 */
					declarationDir?: string;
					/**
					 * Show diagnostic information.
					 */
					diagnostics?: boolean;
					/**
					 * Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
					 */
					emitBOM?: boolean;
					/**
					 * Emit a single file with source maps instead of having a separate file.
					 */
					inlineSourceMap?: boolean;
					/**
					 * Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.
					 */
					inlineSources?: boolean;
					/**
					 * Specify JSX code generation: 'preserve', 'react', or 'react-native'.
					 */
					jsx?: "preserve"|"react"|"react-native";
					/**
					 * Specifies the object invoked for createElement and __spread when targeting 'react' JSX emit.
					 */
					reactNamespace?: string;
					/**
					 * Print names of files part of the compilation.
					 */
					listFiles?: boolean;
					/**
					 * The locale to use to show error messages, e.g. en-us.
					 */
					locale?: string;
					/**
					 * Specifies the location where debugger should locate map files instead of generated locations
					 */
					mapRoot?: string;
					/**
					 * Specify module code generation: 'none', 'CommonJS', 'Amd', 'System', 'UMD', or 'es2015'.
					 */
					module?: "commonjs"|"amd"|"umd"|"system"|"es6"|"es2015"|"none";
					/**
					 * Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).
					 */
					newLine?: "CRLF"|"LF";
					/**
					 * Do not emit output.
					 */
					noEmit?: boolean;
					/**
					 * Do not generate custom helper functions like __extends in compiled output.
					 */
					noEmitHelpers?: boolean;
					/**
					 * Do not emit outputs if any type checking errors were reported.
					 */
					noEmitOnError?: boolean;
					/**
					 * Warn on expressions and declarations with an implied 'any' type.
					 */
					noImplicitAny?: boolean;
					/**
					 * Raise error on 'this' expressions with an implied any type.
					 */
					noImplicitThis?: boolean;
					/**
					 * Report errors on unused locals. Requires TypeScript version 2.0 or later.
					 */
					noUnusedLocals?: boolean;
					/**
					 * Report errors on unused parameters. Requires TypeScript version 2.0 or later.
					 */
					noUnusedParameters?: boolean;
					/**
					 * Do not include the default library file (lib.d.ts).
					 */
					noLib?: boolean;
					/**
					 * Do not add triple-slash references or module import targets to the list of compiled files.
					 */
					noResolve?: boolean;
					skipDefaultLibCheck?: boolean;
					/**
					 * Skip type checking of declaration files. Requires TypeScript version 2.0 or later.
					 */
					skipLibCheck?: boolean;
					/**
					 * Concatenate and emit output to single file.
					 */
					outFile?: string;
					/**
					 * Redirect output structure to the directory.
					 */
					outDir?: string;
					/**
					 * Do not erase const enum declarations in generated code.
					 */
					preserveConstEnums?: boolean;
					/**
					 * Stylize errors and messages using color and context (experimental).
					 */
					pretty?: boolean;
					/**
					 * Do not emit comments to output.
					 */
					removeComments?: boolean;
					/**
					 * Specifies the root directory of input files. Use to control the output directory structure with --outDir.
					 */
					rootDir?: string;
					/**
					 * Unconditionally emit imports for unresolved files.
					 */
					isolatedModules?: boolean;
					/**
					 * Generates corresponding '.map' file.
					 */
					sourceMap?: boolean;
					/**
					 * Specifies the location where debugger should locate TypeScript files instead of source locations.
					 */
					sourceRoot?: string;
					/**
					 * Suppress excess property checks for object literals.
					 */
					suppressExcessPropertyErrors?: boolean;
					/**
					 * Suppress noImplicitAny errors for indexing objects lacking index signatures.
					 */
					suppressImplicitAnyIndexErrors?: boolean;
					/**
					 * Do not emit declarations for code that has an '@internal' annotation.
					 */
					stripInternal?: boolean;
					/**
					 * Specify ECMAScript target version. Permitted values are 'es3', 'es5', 'es2015', 'es2016', 'es2017' or 'esnext'.
					 */
					target?: ("es3"|"es5"|"es2015"|"es2016"|"es2017"|"esnext")|any; // ^([eE][sS]([356]|(201[567])|[nN][eE][xX][tT]))$
					/**
					 * Watch input files.
					 */
					watch?: boolean;
					/**
					 * Enables experimental support for ES7 decorators.
					 */
					experimentalDecorators?: boolean;
					/**
					 * Emit design-type metadata for decorated declarations in source.
					 */
					emitDecoratorMetadata?: boolean;
					/**
					 * Specifies module resolution strategy: 'node' (Node) or 'classic' (TypeScript pre 1.6) .
					 */
					moduleResolution?: string; // ^(([Nn]ode)|([Cc]lassic))$
					/**
					 * Do not report errors on unused labels.
					 */
					allowUnusedLabels?: boolean;
					/**
					 * Report error when not all code paths in function return a value.
					 */
					noImplicitReturns?: boolean;
					/**
					 * Report errors for fallthrough cases in switch statement.
					 */
					noFallthroughCasesInSwitch?: boolean;
					/**
					 * Do not report errors on unreachable code.
					 */
					allowUnreachableCode?: boolean;
					/**
					 * Disallow inconsistently-cased references to the same file.
					 */
					forceConsistentCasingInFileNames?: boolean;
					/**
					 * Base directory to resolve non-relative module names.
					 */
					baseUrl?: string;
					/**
					 * Specify path mapping to be computed relative to baseUrl option.
					 */
					paths?: {};
					/**
					 * Specify list of root directories to be used when resolving modules.
					 */
					rootDirs?: string[];
					/**
					 * Specify list of directories for type definition files to be included. Requires TypeScript version 2.0 or later.
					 */
					typeRoots?: string[];
					/**
					 * Type declaration files to be included in compilation. Requires TypeScript version 2.0 or later.
					 */
					types?: string[];
					/**
					 * Enable tracing of the name resolution process.
					 */
					traceResolution?: boolean;
					/**
					 * Allow javascript files to be compiled.
					 */
					allowJs?: boolean;
					/**
					 * Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
					 */
					allowSyntheticDefaultImports?: boolean;
					/**
					 * Do not emit 'use strict' directives in module output.
					 */
					noImplicitUseStrict?: boolean;
					/**
					 * Enable to list all emitted files. Requires TypeScript version 2.0 or later.
					 */
					listEmittedFiles?: boolean;
					/**
					 * Specify library file to be included in the compilation. Requires TypeScript version 2.0 or later.
					 */
					lib?: (
						"es5"
						|"es6"
						|"es2015"
						|"es7"
						|"es2016"
						|"es2017"
						|"esnext"
						|"dom"
						|"dom.iterable"
						|"webworker"
						|"scripthost"
						|"es2015.core"
						|"es2015.collection"
						|"es2015.generator"
						|"es2015.iterable"
						|"es2015.promise"
						|"es2015.proxy"
						|"es2015.reflect"
						|"es2015.symbol"
						|"es2015.symbol.wellknown"
						|"es2016.array.include"
						|"es2017.object"
						|"es2017.sharedmemory"
						|"esnext.asynciterable")[];
					/**
					 * Enable strict null checks. Requires TypeScript version 2.0 or later.
					 */
					strictNullChecks?: boolean;
					/**
					 * The maximum dependency depth to search under node_modules and load JavaScript files. Only applicable with --allowJs.
					 */
					maxNodeModuleJsDepth?: number;
					/**
					 * Import emit helpers (e.g. '__extends', '__rest', etc..) from tslib. Requires TypeScript version 2.1 or later.
					 */
					importHelpers?: boolean;
					/**
					 * Specify the JSX factory function to use when targeting react JSX emit, e.g. 'React.createElement' or 'h'. Requires TypeScript version 2.1 or later.
					 */
					jsxFactory?: string;
					/**
					 * Parse in strict mode and emit 'use strict' for each source file. Requires TypeScript version 2.1 or later.
					 */
					alwaysStrict?: boolean;
					/**
					 * Enable all strict type checking options. Requires TypeScript version 2.3 or later.
					 */
					strict?: boolean;
					/**
					 * Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. Requires TypeScript version 2.3 or later.
					 */
					downlevelIteration?: boolean;
					/**
					 * Report errors in .js files. Requires TypeScript version 2.3 or later.
					 */
					checkJs?: boolean;
				};
				/**
				 * Enable Compile-on-Save for this project.
				 */
				compileOnSave?: boolean;
				/**
				 * Auto type (.d.ts) acquisition options for this project. Requires TypeScript version 2.1 or later.
				 */
				typeAcquisition?: {
					/**
					 * Enable auto type acquisition
					 */
					enable?: boolean;
					/**
					 * Specifies a list of type declarations to be included in auto type acquisition. Ex. ["jquery", "lodash"]
					 */
					include?: string[];
					/**
					 * Specifies a list of type declarations to be excluded from auto type acquisition. Ex. ["jquery", "lodash"]
					 */
					exclude?: string[];
				};
				/**
				 * Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.
				 */
				extends?: string;
			}
			export interface ExcludeDefinition {
				/**
				 * Specifies a list of files to be excluded from compilation. The 'exclude' property only affects the files included via the 'include' property and not the 'files' property. Glob patterns require TypeScript version 2.0 or later.
				 */
				exclude?: string[];
			}
			export interface ExtendsDefinition {
				/**
				 * Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.
				 */
				extends?: string;
			}
			export interface FilesDefinition {
				/**
				 * If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. When a 'files' property is specified, only those files and those specified by 'include' are included.
				 */
				files?: string[];
			}
			export interface IncludeDefinition {
				/**
				 * Specifies a list of glob patterns that match files to be included in compilation. If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. Requires TypeScript version 2.0 or later.
				 */
				include?: string[];
			}
			export interface TypeAcquisitionDefinition {
				/**
				 * Auto type (.d.ts) acquisition options for this project. Requires TypeScript version 2.1 or later.
				 */
				typeAcquisition?: {
					/**
					 * Enable auto type acquisition
					 */
					enable?: boolean;
					/**
					 * Specifies a list of type declarations to be included in auto type acquisition. Ex. ["jquery", "lodash"]
					 */
					include?: string[];
					/**
					 * Specifies a list of type declarations to be excluded from auto type acquisition. Ex. ["jquery", "lodash"]
					 */
					exclude?: string[];
				};
			}
		}
	}
}
