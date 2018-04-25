declare namespace JsonSchemastoreOrg {
    export interface Tslint {
        /**
         * The name of a built-in configuration preset, or a path or array of paths to other configuration files which are extended by this configuration. These values are handled using node module resolution semantics.
         */
        extends?: string | string[];
        /**
         * A path to a directory or an array of paths to directories of custom rules. These values are handled using node module resolution semantics, if an `index.js` is placed in your rules directory.
         */
        rulesDirectory?: string | string[];
        /**
         * A map of rules that will be used to lint TypeScript files. These rules apply to `.ts` and `.tsx` files.
         */
        rules?: {
            /**
             * Enforces function overloads to be consecutive.
             */
            "adjacent-overload-signatures"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires using either 'T[]' or 'Array<T>' for arrays.
             */
            "array-type"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.ArrayType.Definitions.Options | Tslint.Definitions.TsRules.Properties.ArrayType.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Warns for an awaited value that is not a Promise.
             */
            "await-promise"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.AwaitPromise.Definitions.Options | Tslint.Definitions.TsRules.Properties.AwaitPromise.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Bans specific types from being used. Does not ban the corresponding runtime objects from being used.
             */
            "ban-types"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.BanTypes.Definitions.Options | Tslint.Definitions.TsRules.Properties.BanTypes.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * An interface or literal type with just a call signature can be written as a function type.
             */
            "callable-types"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires interface names to begin with a capital 'I'
             */
            "interface-name"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.InterfaceName.Definitions.Options | Tslint.Definitions.TsRules.Properties.InterfaceName.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Prefer an interface declaration over a type literal (`type T = { ... }`)
             */
            "interface-over-type-literal"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires that a default import have the same name as the declaration it imports.
             * Does nothing for anonymous default exports.
             */
            "match-default-export-name"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires explicit visibility declarations for class members.
             */
            "member-access"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.MemberAccess.Definitions.Options | Tslint.Definitions.TsRules.Properties.MemberAccess.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires the use of `as Type` for type assertions instead of `<Type>`.
             */
            "no-angle-bracket-type-assertion"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows usages of `any` as a type declaration.
             */
            "no-any"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns on comparison to a boolean literal, as in `x === true`.
             */
            "no-boolean-literal-compare"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Forbids empty interfaces.
             */
            "no-empty-interface"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Promises returned by functions must be handled appropriately.
             */
            "no-floating-promises"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.NoFloatingPromises.Definitions.Options | Tslint.Definitions.TsRules.Properties.NoFloatingPromises.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
             */
            "no-inferrable-types"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.NoInferrableTypes.Definitions.Options | Tslint.Definitions.TsRules.Properties.NoInferrableTypes.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallow type inference of {} (empty object type) at function and constructor call sites
             */
            "no-inferred-empty-object-type"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows internal `module`
             */
            "no-internal-module"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows mergeable namespaces in the same file.
             */
            "no-mergeable-namespace"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns on apparent attempts to define constructors for interfaces or `new` for classes.
             */
            "no-misused-new"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows use of internal `module`s and `namespace`s.
             */
            "no-namespace"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.NoNamespace.Definitions.Options | Tslint.Definitions.TsRules.Properties.NoNamespace.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows non-null assertions.
             */
            "no-non-null-assertion"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Forbids an object literal to appear in a type assertion expression.
             * Casting to `any` is still allowed.
             */
            "no-object-literal-type-assertion"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows parameter properties in class constructors.
             */
            "no-parameter-properties"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Forbids JSDoc which duplicates TypeScript functionality.
             */
            "no-redundant-jsdoc"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Don't `<reference types="foo" />` if you import `foo` anyway.
             */
            "no-reference-import"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns when a method is used as outside of a method call.
             */
            "no-unbound-method"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.NoUnboundMethod.Definitions.Options | Tslint.Definitions.TsRules.Properties.NoUnboundMethod.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Warns when a namespace qualifier (`A.x`) is unnecessary.
             */
            "no-unnecessary-qualifier"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns if a type assertion does not change the type of an expression.
             */
            "no-unnecessary-type-assertion"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns when using an expression of type 'any' in a dynamic way.
             * Uses are only allowed if they would work for `{} | null | undefined`.
             * Type casts and tests are allowed.
             * Expressions that work on all values (such as `"" + x`) are allowed.
             */
            "no-unsafe-any"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows unused imports, variables, functions and private class members. Similar to tsc's --noUnusedParameters and --noUnusedLocals options, but does not interrupt code compilation.
             */
            "no-unused-variable"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.NoUnusedVariable.Definitions.Options | Tslint.Definitions.TsRules.Properties.NoUnusedVariable.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows the use of require statements except in import statements.
             */
            "no-var-requires"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires that private variables are marked as `readonly` if they’re never modified outside of the constructor.
             */
            "prefer-readonly"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.PreferReadonly.Definitions.Options | Tslint.Definitions.TsRules.Properties.PreferReadonly.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Restricts the types allowed in boolean expressions. By default only booleans are allowed.
             * 
             * The following nodes are checked:
             * * Arguments to the `!`, `&&`, and `||` operators
             * * The condition in a conditional expression (`cond ? x : y`)
             * * Conditions for `if`, `for`, `while`, and `do-while` statements.
             */
            "strict-boolean-expressions"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.StrictBooleanExpressions.Definitions.Options | Tslint.Definitions.TsRules.Properties.StrictBooleanExpressions.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Warns for type predicates that are always true or always false.
             * Works for 'typeof' comparisons to constants (e.g. 'typeof foo === "string"'), and equality comparison to 'null'/'undefined'.
             * (TypeScript won't let you compare '1 === 2', but it has an exception for '1 === undefined'.)
             * Does not yet work for 'instanceof'.
             * Does *not* warn for 'if (x.y)' where 'x.y' is always truthy. For that, see strict-boolean-expressions.
             * 
             * This rule requires `strictNullChecks` to work properly.
             */
            "strict-type-predicates"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires type definitions to exist.
             */
            typedef?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.Typedef.Definitions.Options | Tslint.Definitions.TsRules.Properties.Typedef.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires or disallows whitespace for type definitions.
             */
            "typedef-whitespace"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.TsRules.Properties.TypedefWhitespace.Definitions.Options | Tslint.Definitions.TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$0;
            } | [boolean] | [boolean, Tslint.Definitions.TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$0] | [boolean, Tslint.Definitions.TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$0, Tslint.Definitions.TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$1] | [boolean, Tslint.Definitions.TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$0, Tslint.Definitions.TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$1, any];
            /**
             * Checks that type literal members are separated by semicolons.
             * Enforces a trailing semicolon for multiline type literals.
             */
            "type-literal-delimiter"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
             */
            "unified-signatures"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns if an explicitly specified type argument is the default for that type parameter.
             */
            "use-default-type-parameter"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces vertical alignment.
             */
            align?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.Align.Definitions.Options | Tslint.Definitions.Rules.Properties.Align.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires parentheses around the parameters of arrow function definitions.
             */
            "arrow-parens"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.ArrowParens.Definitions.Options | Tslint.Definitions.Rules.Properties.ArrowParens.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Suggests to convert `() => { return x; }` to `() => x`.
             */
            "arrow-return-shorthand"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.ArrowReturnShorthand.Definitions.Options | Tslint.Definitions.Rules.Properties.ArrowReturnShorthand.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Bans the use of specific functions or global methods.
             */
            ban?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.Ban.Definitions.Options | Tslint.Definitions.Rules.Properties.Ban.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Bans the comma operator.
             */
            "ban-comma-operator"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * In a binary expression, a literal should always be on the right-hand side if possible.
             * For example, prefer 'x + 1' over '1 + x'.
             */
            "binary-expression-operand-order"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces PascalCased class and interface names.
             */
            "class-name"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces formatting rules for single-line comments.
             */
            "comment-format"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.CommentFormat.Definitions.Options | Tslint.Definitions.Rules.Properties.CommentFormat.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Enforces documentation for important items be filled out.
             */
            "completed-docs"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.CompletedDocs.Definitions.Options | Tslint.Definitions.Rules.Properties.CompletedDocs.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Enforces braces for `if`/`for`/`do`/`while` statements.
             */
            curly?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.Curly.Definitions.Options | Tslint.Definitions.Rules.Properties.Curly.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Enforces a threshold of cyclomatic complexity.
             */
            "cyclomatic-complexity"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.CyclomaticComplexity.Definitions.Options | Tslint.Definitions.Rules.Properties.CyclomaticComplexity.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Warns when deprecated APIs are used.
             */
            deprecation?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces UTF-8 file encoding.
             */
            encoding?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Ensures the file ends with a newline.
             */
            eofline?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces a certain header comment for all files, matched by a regular expression.
             */
            "file-header"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.FileHeader.Definitions.Options | Tslint.Definitions.Rules.Properties.FileHeader.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires a `for ... in` statement to be filtered with an `if` statement.
             */
            forin?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows importing the specified modules directly via `import` and `require`.
             * Instead only sub modules may be imported from that module.
             */
            "import-blacklist"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.ImportBlacklist.Definitions.Options | Tslint.Definitions.Rules.Properties.ImportBlacklist.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Ensures proper spacing between import statement keywords
             */
            "import-spacing"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces indentation with tabs or spaces.
             */
            indent?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.Indent.Definitions.Options | Tslint.Definitions.Rules.Properties.Indent.Definitions.Options.Items.$0;
            } | [boolean] | [boolean, Tslint.Definitions.Rules.Properties.Indent.Definitions.Options.Items.$0] | [boolean, Tslint.Definitions.Rules.Properties.Indent.Definitions.Options.Items.$0, Tslint.Definitions.Rules.Properties.Indent.Definitions.Options.Items.$1] | [boolean, Tslint.Definitions.Rules.Properties.Indent.Definitions.Options.Items.$0, Tslint.Definitions.Rules.Properties.Indent.Definitions.Options.Items.$1, any];
            /**
             * Enforces basic format rules for JSDoc comments.
             */
            "jsdoc-format"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Only allows labels in sensible locations.
             */
            "label-position"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces a consistent linebreak style.
             */
            "linebreak-style"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.LinebreakStyle.Definitions.Options | Tslint.Definitions.Rules.Properties.LinebreakStyle.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * A file may not contain more than the specified number of classes
             */
            "max-classes-per-file"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.MaxClassesPerFile.Definitions.Options | Tslint.Definitions.Rules.Properties.MaxClassesPerFile.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires files to remain under a certain number of lines
             */
            "max-file-line-count"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.MaxFileLineCount.Definitions.Options | Tslint.Definitions.Rules.Properties.MaxFileLineCount.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires lines to be under a certain max length.
             */
            "max-line-length"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.MaxLineLength.Definitions.Options | Tslint.Definitions.Rules.Properties.MaxLineLength.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Enforces member ordering.
             */
            "member-ordering"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.MemberOrdering.Definitions.Options | Tslint.Definitions.Rules.Properties.MemberOrdering.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Enforces blank line before return when not the only line in the block.
             */
            "newline-before-return"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires that chained method calls be broken apart onto separate lines.
             */
            "newline-per-chained-call"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires parentheses when invoking a constructor via the `new` keyword.
             */
            "new-parens"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows use of `arguments.callee`.
             */
            "no-arg"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows bitwise operators.
             */
            "no-bitwise"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows any type of assignment in conditionals.
             */
            "no-conditional-assignment"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows one or more blank lines in a row.
             */
            "no-consecutive-blank-lines"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoConsecutiveBlankLines.Definitions.Options | Tslint.Definitions.Rules.Properties.NoConsecutiveBlankLines.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Bans the use of specified `console` methods.
             */
            "no-console"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoConsole.Definitions.Options | Tslint.Definitions.Rules.Properties.NoConsole.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows access to the constructors of `String`, `Number`, and `Boolean`.
             */
            "no-construct"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows `debugger` statements.
             */
            "no-debugger"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows default exports in ES6-style modules.
             */
            "no-default-export"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows multiple import statements from the same module.
             */
            "no-duplicate-imports"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns if 'super()' appears twice in a constructor.
             */
            "no-duplicate-super"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Prevents duplicate cases in switch statements.
             */
            "no-duplicate-switch-case"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows duplicate variable declarations in the same block scope.
             */
            "no-duplicate-variable"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoDuplicateVariable.Definitions.Options | Tslint.Definitions.Rules.Properties.NoDuplicateVariable.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Bans usage of the delete operator with computed key expressions.
             */
            "no-dynamic-delete"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows empty blocks.
             */
            "no-empty"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoEmpty.Definitions.Options | Tslint.Definitions.Rules.Properties.NoEmpty.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows `eval` function invocations.
             */
            "no-eval"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows iterating over an array with a for-in loop.
             */
            "no-for-in-array"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows importing modules that are not listed as dependency in the project’s package.json.
             */
            "no-implicit-dependencies"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoImplicitDependencies.Definitions.Options | Tslint.Definitions.Rules.Properties.NoImplicitDependencies.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Avoid import statements with side-effect.
             */
            "no-import-side-effect"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoImportSideEffect.Definitions.Options | Tslint.Definitions.Rules.Properties.NoImportSideEffect.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Warns on use of `${` in non-template strings.
             */
            "no-invalid-template-strings"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows using the `this` keyword outside of classes.
             */
            "no-invalid-this"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoInvalidThis.Definitions.Options | Tslint.Definitions.Rules.Properties.NoInvalidThis.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallow irregular whitespace outside of strings and comments
             */
            "no-irregular-whitespace"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows the use constant number values outside of variable assignments.
             * When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
             */
            "no-magic-numbers"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoMagicNumbers.Definitions.Options | Tslint.Definitions.Rules.Properties.NoMagicNumbers.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows use of the `null` keyword literal.
             */
            "no-null-keyword"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows reassigning parameters.
             */
            "no-parameter-reassignment"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows `/// <reference path=>` imports (use ES6-style imports instead).
             */
            "no-reference"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows unnecessary `return await`.
             */
            "no-return-await"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows invocation of `require()`.
             */
            "no-require-imports"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows shadowing variable declarations.
             */
            "no-shadowed-variable"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoShadowedVariable.Definitions.Options | Tslint.Definitions.Rules.Properties.NoShadowedVariable.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Forbids array literals to contain missing elements.
             */
            "no-sparse-arrays"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Forbids unnecessary string literal property access.
             * Allows `obj["prop-erty"]` (can't be a regular property access).
             * Disallows `obj["property"]` (should be `obj.property`).
             */
            "no-string-literal"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
             */
            "no-string-throw"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows importing any submodule.
             */
            "no-submodule-imports"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoSubmoduleImports.Definitions.Options | Tslint.Definitions.Rules.Properties.NoSubmoduleImports.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows falling through case statements.
             */
            "no-switch-case-fall-through"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows unnecessary references to `this`.
             */
            "no-this-assignment"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoThisAssignment.Definitions.Options | Tslint.Definitions.Rules.Properties.NoThisAssignment.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows trailing whitespace at the end of a line.
             */
            "no-trailing-whitespace"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoTrailingWhitespace.Definitions.Options | Tslint.Definitions.Rules.Properties.NoTrailingWhitespace.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Replaces `x => f(x)` with just `f`.
             * To catch more cases, enable `only-arrow-functions` and `arrow-return-shorthand` too.
             */
            "no-unnecessary-callback-wrapper"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows classes that are not strictly necessary.
             */
            "no-unnecessary-class"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoUnnecessaryClass.Definitions.Options | Tslint.Definitions.Rules.Properties.NoUnnecessaryClass.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Forbids a 'var'/'let' statement or destructuring initializer to be initialized to 'undefined'.
             */
            "no-unnecessary-initializer"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows control flow statements, such as `return`, `continue` `break` and `throws` in finally blocks.
             */
            "no-unsafe-finally"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows unused expression statements.
             */
            "no-unused-expression"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoUnusedExpression.Definitions.Options | Tslint.Definitions.Rules.Properties.NoUnusedExpression.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows usage of variables before their declaration.
             */
            "no-use-before-declare"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Disallows usage of the `var` keyword.
             */
            "no-var-keyword"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires expressions of type `void` to appear in statement position.
             */
            "no-void-expression"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.NoVoidExpression.Definitions.Options | Tslint.Definitions.Rules.Properties.NoVoidExpression.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Checks that decimal literals should begin with '0.' instead of just '.', and should not end with a trailing '0'.
             */
            "number-literal-format"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces consistent object literal property quote style.
             */
            "object-literal-key-quotes"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.ObjectLiteralKeyQuotes.Definitions.Options | Tslint.Definitions.Rules.Properties.ObjectLiteralKeyQuotes.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Enforces use of ES6 object literal shorthand when possible.
             */
            "object-literal-shorthand"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Checks ordering of keys in object literals.
             */
            "object-literal-sort-keys"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.ObjectLiteralSortKeys.Definitions.Options | Tslint.Definitions.Rules.Properties.ObjectLiteralSortKeys.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires the specified tokens to be on the same line as the expression preceding them.
             */
            "one-line"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.OneLine.Definitions.Options | Tslint.Definitions.Rules.Properties.OneLine.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows multiple variable definitions in the same declaration statement.
             */
            "one-variable-per-declaration"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.OneVariablePerDeclaration.Definitions.Options | Tslint.Definitions.Rules.Properties.OneVariablePerDeclaration.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Disallows traditional (non-arrow) function expressions.
             */
            "only-arrow-functions"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.OnlyArrowFunctions.Definitions.Options | Tslint.Definitions.Rules.Properties.OnlyArrowFunctions.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires that import statements be alphabetized.
             */
            "ordered-imports"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.OrderedImports.Definitions.Options | Tslint.Definitions.Rules.Properties.OrderedImports.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Recommends to use a conditional expression instead of assigning to the same thing in each branch of an if statement.
             */
            "prefer-conditional-expression"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.PreferConditionalExpression.Definitions.Options | Tslint.Definitions.Rules.Properties.PreferConditionalExpression.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires that variable declarations use `const` instead of `let` and `var` if possible.
             */
            "prefer-const"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.PreferConst.Definitions.Options | Tslint.Definitions.Rules.Properties.PreferConst.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Recommends a 'for-of' loop over a standard 'for' loop if the index is only used to access the array being iterated.
             */
            "prefer-for-of"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Warns for class methods that do not use 'this'.
             */
            "prefer-function-over-method"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.PreferFunctionOverMethod.Definitions.Options | Tslint.Definitions.Rules.Properties.PreferFunctionOverMethod.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Prefer `foo(): void` over `foo: () => void` in interfaces and types.
             */
            "prefer-method-signature"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces the use of the ES2015 object spread operator over `Object.assign()` where appropriate.
             */
            "prefer-object-spread"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Prefer a `switch` statement to an `if` statement with simple `===` comparisons.
             */
            "prefer-switch"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.PreferSwitch.Definitions.Options | Tslint.Definitions.Rules.Properties.PreferSwitch.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Prefer a template expression over string literal concatenation.
             */
            "prefer-template"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.PreferTemplate.Definitions.Options | Tslint.Definitions.Rules.Properties.PreferTemplate.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires any function or method that returns a promise to be marked async.
             */
            "promise-function-async"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Requires single or double quotes for string literals.
             */
            quotemark?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.Quotemark.Definitions.Options | Tslint.Definitions.Rules.Properties.Quotemark.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires the radix parameter to be specified when calling `parseInt`.
             */
            radix?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * When adding two variables, operands must both be of type number or of type string.
             */
            "restrict-plus-operands"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Prefer `return;` in void functions and `return undefined;` in value-returning functions.
             */
            "return-undefined"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces consistent semicolon usage at the end of every statement.
             */
            semicolon?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.Semicolon.Definitions.Options | Tslint.Definitions.Rules.Properties.Semicolon.Definitions.Options.Items.$0;
            } | [boolean] | [boolean, Tslint.Definitions.Rules.Properties.Semicolon.Definitions.Options.Items.$0] | [boolean, Tslint.Definitions.Rules.Properties.Semicolon.Definitions.Options.Items.$0, Tslint.Definitions.Rules.Properties.Semicolon.Definitions.Options.Items.$1] | [boolean, Tslint.Definitions.Rules.Properties.Semicolon.Definitions.Options.Items.$0, Tslint.Definitions.Rules.Properties.Semicolon.Definitions.Options.Items.$1, any];
            /**
             * Require or disallow a space before function parenthesis
             */
            "space-before-function-paren"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.SpaceBeforeFunctionParen.Definitions.Options | Tslint.Definitions.Rules.Properties.SpaceBeforeFunctionParen.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Enforces spaces within parentheses or disallow them.
             */
            "space-within-parens"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.SpaceWithinParens.Definitions.Options | Tslint.Definitions.Rules.Properties.SpaceWithinParens.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Require a `default` case in all `switch` statements.
             */
            "switch-default"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Checks whether the final clause of a switch statement ends in `break;`.
             */
            "switch-final-break"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.SwitchFinalBreak.Definitions.Options | Tslint.Definitions.Rules.Properties.SwitchFinalBreak.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings, named imports and exports and function parameters.
             */
            "trailing-comma"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.TrailingComma.Definitions.Options | Tslint.Definitions.Rules.Properties.TrailingComma.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Requires `===` and `!==` in place of `==` and `!=`.
             */
            "triple-equals"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.TripleEquals.Definitions.Options | Tslint.Definitions.Rules.Properties.TripleEquals.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Makes sure result of `typeof` is compared to correct string values
             */
            "typeof-compare"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Enforces use of the `isNaN()` function to check for NaN references instead of a comparison to the `NaN` constant.
             */
            "use-isnan"?: boolean | {
                severity?: any;
            } | [boolean] | [boolean, any];
            /**
             * Checks variable names for various errors.
             */
            "variable-name"?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.VariableName.Definitions.Options | Tslint.Definitions.Rules.Properties.VariableName.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
            /**
             * Enforces whitespace style conventions.
             */
            whitespace?: boolean | {
                severity?: any;
                /**
                 * An option value or an array of multiple option values.
                 */
                options?: Tslint.Definitions.Rules.Properties.Whitespace.Definitions.Options | Tslint.Definitions.Rules.Properties.Whitespace.Definitions.Options.Items;
            } | [boolean] | [boolean, any];
        };
        /**
         * A map of rules that will be used to lint JavaScript files. These rules apply to `.js` and `.jsx` files.
         */
        jsRules?: Tslint.Definitions.Rules;
        /**
         * The severity level used when a rule specifies "default" as its severity level. If undefined, "error" is used.
         */
        defaultSeverity?: "error" | "warning" | "warn" | "off" | "none";
    }
    namespace Tslint {
        namespace Definitions {
            export type Rule = boolean | {
                /**
                 * Severity level. Level "error" will cause exit code 2.
                 */
                severity?: "default" | "error" | "warning" | "warn" | "off" | "none";
            } | any[];
            export interface Rules {
                /**
                 * Enforces vertical alignment.
                 */
                align?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.Align.Definitions.Options | Rules.Properties.Align.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires parentheses around the parameters of arrow function definitions.
                 */
                "arrow-parens"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.ArrowParens.Definitions.Options | Rules.Properties.ArrowParens.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Suggests to convert `() => { return x; }` to `() => x`.
                 */
                "arrow-return-shorthand"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.ArrowReturnShorthand.Definitions.Options | Rules.Properties.ArrowReturnShorthand.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Bans the use of specific functions or global methods.
                 */
                ban?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.Ban.Definitions.Options | Rules.Properties.Ban.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Bans the comma operator.
                 */
                "ban-comma-operator"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * In a binary expression, a literal should always be on the right-hand side if possible.
                 * For example, prefer 'x + 1' over '1 + x'.
                 */
                "binary-expression-operand-order"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces PascalCased class and interface names.
                 */
                "class-name"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces formatting rules for single-line comments.
                 */
                "comment-format"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.CommentFormat.Definitions.Options | Rules.Properties.CommentFormat.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces documentation for important items be filled out.
                 */
                "completed-docs"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.CompletedDocs.Definitions.Options | Rules.Properties.CompletedDocs.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces braces for `if`/`for`/`do`/`while` statements.
                 */
                curly?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.Curly.Definitions.Options | Rules.Properties.Curly.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces a threshold of cyclomatic complexity.
                 */
                "cyclomatic-complexity"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.CyclomaticComplexity.Definitions.Options | Rules.Properties.CyclomaticComplexity.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Warns when deprecated APIs are used.
                 */
                deprecation?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces UTF-8 file encoding.
                 */
                encoding?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Ensures the file ends with a newline.
                 */
                eofline?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces a certain header comment for all files, matched by a regular expression.
                 */
                "file-header"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.FileHeader.Definitions.Options | Rules.Properties.FileHeader.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires a `for ... in` statement to be filtered with an `if` statement.
                 */
                forin?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows importing the specified modules directly via `import` and `require`.
                 * Instead only sub modules may be imported from that module.
                 */
                "import-blacklist"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.ImportBlacklist.Definitions.Options | Rules.Properties.ImportBlacklist.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Ensures proper spacing between import statement keywords
                 */
                "import-spacing"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces indentation with tabs or spaces.
                 */
                indent?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.Indent.Definitions.Options | Rules.Properties.Indent.Definitions.Options.Items.$0;
                } | [boolean] | [boolean, Rules.Properties.Indent.Definitions.Options.Items.$0] | [boolean, Rules.Properties.Indent.Definitions.Options.Items.$0, Rules.Properties.Indent.Definitions.Options.Items.$1] | [boolean, Rules.Properties.Indent.Definitions.Options.Items.$0, Rules.Properties.Indent.Definitions.Options.Items.$1, any];
                /**
                 * Enforces basic format rules for JSDoc comments.
                 */
                "jsdoc-format"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Only allows labels in sensible locations.
                 */
                "label-position"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces a consistent linebreak style.
                 */
                "linebreak-style"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.LinebreakStyle.Definitions.Options | Rules.Properties.LinebreakStyle.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * A file may not contain more than the specified number of classes
                 */
                "max-classes-per-file"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.MaxClassesPerFile.Definitions.Options | Rules.Properties.MaxClassesPerFile.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires files to remain under a certain number of lines
                 */
                "max-file-line-count"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.MaxFileLineCount.Definitions.Options | Rules.Properties.MaxFileLineCount.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires lines to be under a certain max length.
                 */
                "max-line-length"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.MaxLineLength.Definitions.Options | Rules.Properties.MaxLineLength.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces member ordering.
                 */
                "member-ordering"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.MemberOrdering.Definitions.Options | Rules.Properties.MemberOrdering.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces blank line before return when not the only line in the block.
                 */
                "newline-before-return"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires that chained method calls be broken apart onto separate lines.
                 */
                "newline-per-chained-call"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires parentheses when invoking a constructor via the `new` keyword.
                 */
                "new-parens"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows use of `arguments.callee`.
                 */
                "no-arg"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows bitwise operators.
                 */
                "no-bitwise"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows any type of assignment in conditionals.
                 */
                "no-conditional-assignment"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows one or more blank lines in a row.
                 */
                "no-consecutive-blank-lines"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoConsecutiveBlankLines.Definitions.Options | Rules.Properties.NoConsecutiveBlankLines.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Bans the use of specified `console` methods.
                 */
                "no-console"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoConsole.Definitions.Options | Rules.Properties.NoConsole.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows access to the constructors of `String`, `Number`, and `Boolean`.
                 */
                "no-construct"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows `debugger` statements.
                 */
                "no-debugger"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows default exports in ES6-style modules.
                 */
                "no-default-export"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows multiple import statements from the same module.
                 */
                "no-duplicate-imports"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns if 'super()' appears twice in a constructor.
                 */
                "no-duplicate-super"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Prevents duplicate cases in switch statements.
                 */
                "no-duplicate-switch-case"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows duplicate variable declarations in the same block scope.
                 */
                "no-duplicate-variable"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoDuplicateVariable.Definitions.Options | Rules.Properties.NoDuplicateVariable.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Bans usage of the delete operator with computed key expressions.
                 */
                "no-dynamic-delete"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows empty blocks.
                 */
                "no-empty"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoEmpty.Definitions.Options | Rules.Properties.NoEmpty.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows `eval` function invocations.
                 */
                "no-eval"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows iterating over an array with a for-in loop.
                 */
                "no-for-in-array"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows importing modules that are not listed as dependency in the project’s package.json.
                 */
                "no-implicit-dependencies"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoImplicitDependencies.Definitions.Options | Rules.Properties.NoImplicitDependencies.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Avoid import statements with side-effect.
                 */
                "no-import-side-effect"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoImportSideEffect.Definitions.Options | Rules.Properties.NoImportSideEffect.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Warns on use of `${` in non-template strings.
                 */
                "no-invalid-template-strings"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows using the `this` keyword outside of classes.
                 */
                "no-invalid-this"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoInvalidThis.Definitions.Options | Rules.Properties.NoInvalidThis.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallow irregular whitespace outside of strings and comments
                 */
                "no-irregular-whitespace"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows the use constant number values outside of variable assignments.
                 * When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
                 */
                "no-magic-numbers"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoMagicNumbers.Definitions.Options | Rules.Properties.NoMagicNumbers.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows use of the `null` keyword literal.
                 */
                "no-null-keyword"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows reassigning parameters.
                 */
                "no-parameter-reassignment"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows `/// <reference path=>` imports (use ES6-style imports instead).
                 */
                "no-reference"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows unnecessary `return await`.
                 */
                "no-return-await"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows invocation of `require()`.
                 */
                "no-require-imports"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows shadowing variable declarations.
                 */
                "no-shadowed-variable"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoShadowedVariable.Definitions.Options | Rules.Properties.NoShadowedVariable.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Forbids array literals to contain missing elements.
                 */
                "no-sparse-arrays"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Forbids unnecessary string literal property access.
                 * Allows `obj["prop-erty"]` (can't be a regular property access).
                 * Disallows `obj["property"]` (should be `obj.property`).
                 */
                "no-string-literal"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
                 */
                "no-string-throw"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows importing any submodule.
                 */
                "no-submodule-imports"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoSubmoduleImports.Definitions.Options | Rules.Properties.NoSubmoduleImports.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows falling through case statements.
                 */
                "no-switch-case-fall-through"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows unnecessary references to `this`.
                 */
                "no-this-assignment"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoThisAssignment.Definitions.Options | Rules.Properties.NoThisAssignment.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows trailing whitespace at the end of a line.
                 */
                "no-trailing-whitespace"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoTrailingWhitespace.Definitions.Options | Rules.Properties.NoTrailingWhitespace.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Replaces `x => f(x)` with just `f`.
                 * To catch more cases, enable `only-arrow-functions` and `arrow-return-shorthand` too.
                 */
                "no-unnecessary-callback-wrapper"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows classes that are not strictly necessary.
                 */
                "no-unnecessary-class"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoUnnecessaryClass.Definitions.Options | Rules.Properties.NoUnnecessaryClass.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Forbids a 'var'/'let' statement or destructuring initializer to be initialized to 'undefined'.
                 */
                "no-unnecessary-initializer"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows control flow statements, such as `return`, `continue` `break` and `throws` in finally blocks.
                 */
                "no-unsafe-finally"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows unused expression statements.
                 */
                "no-unused-expression"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoUnusedExpression.Definitions.Options | Rules.Properties.NoUnusedExpression.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows usage of variables before their declaration.
                 */
                "no-use-before-declare"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows usage of the `var` keyword.
                 */
                "no-var-keyword"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires expressions of type `void` to appear in statement position.
                 */
                "no-void-expression"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.NoVoidExpression.Definitions.Options | Rules.Properties.NoVoidExpression.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Checks that decimal literals should begin with '0.' instead of just '.', and should not end with a trailing '0'.
                 */
                "number-literal-format"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces consistent object literal property quote style.
                 */
                "object-literal-key-quotes"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.ObjectLiteralKeyQuotes.Definitions.Options | Rules.Properties.ObjectLiteralKeyQuotes.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces use of ES6 object literal shorthand when possible.
                 */
                "object-literal-shorthand"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Checks ordering of keys in object literals.
                 */
                "object-literal-sort-keys"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.ObjectLiteralSortKeys.Definitions.Options | Rules.Properties.ObjectLiteralSortKeys.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires the specified tokens to be on the same line as the expression preceding them.
                 */
                "one-line"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.OneLine.Definitions.Options | Rules.Properties.OneLine.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows multiple variable definitions in the same declaration statement.
                 */
                "one-variable-per-declaration"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.OneVariablePerDeclaration.Definitions.Options | Rules.Properties.OneVariablePerDeclaration.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows traditional (non-arrow) function expressions.
                 */
                "only-arrow-functions"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.OnlyArrowFunctions.Definitions.Options | Rules.Properties.OnlyArrowFunctions.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires that import statements be alphabetized.
                 */
                "ordered-imports"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.OrderedImports.Definitions.Options | Rules.Properties.OrderedImports.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Recommends to use a conditional expression instead of assigning to the same thing in each branch of an if statement.
                 */
                "prefer-conditional-expression"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.PreferConditionalExpression.Definitions.Options | Rules.Properties.PreferConditionalExpression.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires that variable declarations use `const` instead of `let` and `var` if possible.
                 */
                "prefer-const"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.PreferConst.Definitions.Options | Rules.Properties.PreferConst.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Recommends a 'for-of' loop over a standard 'for' loop if the index is only used to access the array being iterated.
                 */
                "prefer-for-of"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns for class methods that do not use 'this'.
                 */
                "prefer-function-over-method"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.PreferFunctionOverMethod.Definitions.Options | Rules.Properties.PreferFunctionOverMethod.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Prefer `foo(): void` over `foo: () => void` in interfaces and types.
                 */
                "prefer-method-signature"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces the use of the ES2015 object spread operator over `Object.assign()` where appropriate.
                 */
                "prefer-object-spread"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Prefer a `switch` statement to an `if` statement with simple `===` comparisons.
                 */
                "prefer-switch"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.PreferSwitch.Definitions.Options | Rules.Properties.PreferSwitch.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Prefer a template expression over string literal concatenation.
                 */
                "prefer-template"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.PreferTemplate.Definitions.Options | Rules.Properties.PreferTemplate.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires any function or method that returns a promise to be marked async.
                 */
                "promise-function-async"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires single or double quotes for string literals.
                 */
                quotemark?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.Quotemark.Definitions.Options | Rules.Properties.Quotemark.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires the radix parameter to be specified when calling `parseInt`.
                 */
                radix?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * When adding two variables, operands must both be of type number or of type string.
                 */
                "restrict-plus-operands"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Prefer `return;` in void functions and `return undefined;` in value-returning functions.
                 */
                "return-undefined"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces consistent semicolon usage at the end of every statement.
                 */
                semicolon?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.Semicolon.Definitions.Options | Rules.Properties.Semicolon.Definitions.Options.Items.$0;
                } | [boolean] | [boolean, Rules.Properties.Semicolon.Definitions.Options.Items.$0] | [boolean, Rules.Properties.Semicolon.Definitions.Options.Items.$0, Rules.Properties.Semicolon.Definitions.Options.Items.$1] | [boolean, Rules.Properties.Semicolon.Definitions.Options.Items.$0, Rules.Properties.Semicolon.Definitions.Options.Items.$1, any];
                /**
                 * Require or disallow a space before function parenthesis
                 */
                "space-before-function-paren"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.SpaceBeforeFunctionParen.Definitions.Options | Rules.Properties.SpaceBeforeFunctionParen.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces spaces within parentheses or disallow them.
                 */
                "space-within-parens"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.SpaceWithinParens.Definitions.Options | Rules.Properties.SpaceWithinParens.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Require a `default` case in all `switch` statements.
                 */
                "switch-default"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Checks whether the final clause of a switch statement ends in `break;`.
                 */
                "switch-final-break"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.SwitchFinalBreak.Definitions.Options | Rules.Properties.SwitchFinalBreak.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings, named imports and exports and function parameters.
                 */
                "trailing-comma"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.TrailingComma.Definitions.Options | Rules.Properties.TrailingComma.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires `===` and `!==` in place of `==` and `!=`.
                 */
                "triple-equals"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.TripleEquals.Definitions.Options | Rules.Properties.TripleEquals.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Makes sure result of `typeof` is compared to correct string values
                 */
                "typeof-compare"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces use of the `isNaN()` function to check for NaN references instead of a comparison to the `NaN` constant.
                 */
                "use-isnan"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Checks variable names for various errors.
                 */
                "variable-name"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.VariableName.Definitions.Options | Rules.Properties.VariableName.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Enforces whitespace style conventions.
                 */
                whitespace?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: Rules.Properties.Whitespace.Definitions.Options | Rules.Properties.Whitespace.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
            }
            namespace Rules {
                namespace Properties {
                    namespace Align {
                        namespace Definitions {
                            export type Options = ("arguments" | "elements" | "members" | "parameters" | "statements")[];
                            namespace Options {
                                export type Items = "arguments" | "elements" | "members" | "parameters" | "statements";
                            }
                        }
                    }
                    namespace ArrowParens {
                        namespace Definitions {
                            export type Options = ("ban-single-arg-parens")[];
                            namespace Options {
                                export type Items = "ban-single-arg-parens";
                            }
                        }
                    }
                    namespace ArrowReturnShorthand {
                        namespace Definitions {
                            export type Options = ("multiline")[];
                            namespace Options {
                                export type Items = "multiline";
                            }
                        }
                    }
                    namespace Ban {
                        namespace Definitions {
                            export type Options = (string | string[] | {
                                name: string | string[];
                                message?: string;
                            })[];
                            namespace Options {
                                export type Items = string | string[] | {
                                    name: string | string[];
                                    message?: string;
                                };
                            }
                        }
                    }
                    namespace CommentFormat {
                        namespace Definitions {
                            export type Options = (("check-space" | "check-lowercase" | "check-uppercase") | {
                                "ignore-words"?: string[];
                                "ignore-pattern"?: string;
                            })[];
                            namespace Options {
                                export type Items = ("check-space" | "check-lowercase" | "check-uppercase") | {
                                    "ignore-words"?: string[];
                                    "ignore-pattern"?: string;
                                };
                            }
                        }
                    }
                    namespace CompletedDocs {
                        namespace Definitions {
                            export type Options = (("classes" | "enums" | "enum-members" | "functions" | "interfaces" | "methods" | "namespaces" | "properties" | "types" | "variables") | {
                                classes?: {
                                    visibilities?: "all" | "exported" | "internal";
                                };
                                enums?: {
                                    visibilities?: "all" | "exported" | "internal";
                                };
                                "enum-members"?: {
                                    visibilities?: "all" | "exported" | "internal";
                                };
                                functions?: {
                                    visibilities?: "all" | "exported" | "internal";
                                };
                                interfaces?: {
                                    visibilities?: "all" | "exported" | "internal";
                                };
                                methods?: {
                                    locations?: "all" | "instance" | "static";
                                    privacies?: "all" | "private" | "protected" | "public";
                                };
                                namespaces?: {
                                    visibilities?: "all" | "exported" | "internal";
                                };
                                properties?: {
                                    locations?: "all" | "instance" | "static";
                                    privacies?: "all" | "private" | "protected" | "public";
                                };
                                types?: {
                                    visibilities?: "all" | "exported" | "internal";
                                };
                                variables?: {
                                    visibilities?: "all" | "exported" | "internal";
                                };
                            })[];
                            namespace Options {
                                export type Items = ("classes" | "enums" | "enum-members" | "functions" | "interfaces" | "methods" | "namespaces" | "properties" | "types" | "variables") | {
                                    classes?: {
                                        visibilities?: "all" | "exported" | "internal";
                                    };
                                    enums?: {
                                        visibilities?: "all" | "exported" | "internal";
                                    };
                                    "enum-members"?: {
                                        visibilities?: "all" | "exported" | "internal";
                                    };
                                    functions?: {
                                        visibilities?: "all" | "exported" | "internal";
                                    };
                                    interfaces?: {
                                        visibilities?: "all" | "exported" | "internal";
                                    };
                                    methods?: {
                                        locations?: "all" | "instance" | "static";
                                        privacies?: "all" | "private" | "protected" | "public";
                                    };
                                    namespaces?: {
                                        visibilities?: "all" | "exported" | "internal";
                                    };
                                    properties?: {
                                        locations?: "all" | "instance" | "static";
                                        privacies?: "all" | "private" | "protected" | "public";
                                    };
                                    types?: {
                                        visibilities?: "all" | "exported" | "internal";
                                    };
                                    variables?: {
                                        visibilities?: "all" | "exported" | "internal";
                                    };
                                };
                            }
                        }
                    }
                    namespace Curly {
                        namespace Definitions {
                            export type Options = ("as-needed" | "ignore-same-line")[];
                            namespace Options {
                                export type Items = "as-needed" | "ignore-same-line";
                            }
                        }
                    }
                    namespace CyclomaticComplexity {
                        namespace Definitions {
                            export type Options = number[];
                            namespace Options {
                                export type Items = number;
                            }
                        }
                    }
                    namespace FileHeader {
                        namespace Definitions {
                            export type Options = string[];
                            namespace Options {
                                export type Items = string;
                            }
                        }
                    }
                    namespace ImportBlacklist {
                        namespace Definitions {
                            export type Options = string[];
                            namespace Options {
                                export type Items = string;
                            }
                        }
                    }
                    namespace Indent {
                        namespace Definitions {
                            export type Options = [("tabs" | "spaces")] | [("tabs" | "spaces"), ("2" | "4")] | [("tabs" | "spaces"), ("2" | "4"), any];
                            namespace Options {
                                namespace Items {
                                    export type $0 = "tabs" | "spaces";
                                    export type $1 = "2" | "4";
                                }
                            }
                        }
                    }
                    namespace LinebreakStyle {
                        namespace Definitions {
                            export type Options = ("LF" | "CRLF")[];
                            namespace Options {
                                export type Items = "LF" | "CRLF";
                            }
                        }
                    }
                    namespace MaxClassesPerFile {
                        namespace Definitions {
                            export type Options = [number] | [number, ("exclude-class-expressions")] | [number, ("exclude-class-expressions"), any];
                            namespace Options {
                                export type Items = any;
                            }
                        }
                    }
                    namespace MaxFileLineCount {
                        namespace Definitions {
                            export type Options = number[];
                            namespace Options {
                                export type Items = number;
                            }
                        }
                    }
                    namespace MaxLineLength {
                        namespace Definitions {
                            export type Options = number[];
                            namespace Options {
                                export type Items = number;
                            }
                        }
                    }
                    namespace MemberOrdering {
                        namespace Definitions {
                            export type Kinds = ("static-field" | "instance-field" | "static-method" | "instance-method" | "constructor" | "public-static-field" | "public-static-method" | "protected-static-field" | "protected-static-method" | "private-static-field" | "private-static-method" | "public-instance-field" | "protected-instance-field" | "private-instance-field" | "public-constructor" | "protected-constructor" | "private-constructor" | "public-instance-method" | "protected-instance-method" | "private-instance-method")[];
                            namespace Kinds {
                                export type Items = "static-field" | "instance-field" | "static-method" | "instance-method" | "constructor" | "public-static-field" | "public-static-method" | "protected-static-field" | "protected-static-method" | "private-static-field" | "private-static-method" | "public-instance-field" | "protected-instance-field" | "private-instance-field" | "public-constructor" | "protected-constructor" | "private-constructor" | "public-instance-method" | "protected-instance-method" | "private-instance-method";
                            }
                            export type Options = {
                                order?: ("fields-first" | "instance-sandwich" | "statics-first") | (Kinds.Items | {
                                    name?: string;
                                    kinds?: Kinds;
                                })[];
                                alphabetize?: boolean;
                            }[];
                            namespace Options {
                                export interface Items {
                                    order?: ("fields-first" | "instance-sandwich" | "statics-first") | (Kinds.Items | {
                                        name?: string;
                                        kinds?: Kinds;
                                    })[];
                                    alphabetize?: boolean;
                                }
                            }
                        }
                    }
                    namespace NoConsecutiveBlankLines {
                        namespace Definitions {
                            export type Options = number[];
                            namespace Options {
                                export type Items = number;
                            }
                        }
                    }
                    namespace NoConsole {
                        namespace Definitions {
                            export type Options = string[];
                            namespace Options {
                                export type Items = string;
                            }
                        }
                    }
                    namespace NoDuplicateVariable {
                        namespace Definitions {
                            export type Options = ("check-parameters")[];
                            namespace Options {
                                export type Items = "check-parameters";
                            }
                        }
                    }
                    namespace NoEmpty {
                        namespace Definitions {
                            export type Options = ("allow-empty-catch")[];
                            namespace Options {
                                export type Items = "allow-empty-catch";
                            }
                        }
                    }
                    namespace NoImplicitDependencies {
                        namespace Definitions {
                            export type Options = ("dev" | "optional")[];
                            namespace Options {
                                export type Items = "dev" | "optional";
                            }
                        }
                    }
                    namespace NoImportSideEffect {
                        namespace Definitions {
                            export type Options = {
                                "ignore-module"?: string;
                            }[];
                            namespace Options {
                                export interface Items {
                                    "ignore-module"?: string;
                                }
                            }
                        }
                    }
                    namespace NoInvalidThis {
                        namespace Definitions {
                            export type Options = ("check-function-in-method")[];
                            namespace Options {
                                export type Items = "check-function-in-method";
                            }
                        }
                    }
                    namespace NoMagicNumbers {
                        namespace Definitions {
                            export type Options = number[];
                            namespace Options {
                                export type Items = number;
                            }
                        }
                    }
                    namespace NoShadowedVariable {
                        namespace Definitions {
                            export type Options = {
                                class?: boolean;
                                enum?: boolean;
                                function?: boolean;
                                import?: boolean;
                                interface?: boolean;
                                namespace?: boolean;
                                typeAlias?: boolean;
                                typeParameter?: boolean;
                            }[];
                            namespace Options {
                                export interface Items {
                                    class?: boolean;
                                    enum?: boolean;
                                    function?: boolean;
                                    import?: boolean;
                                    interface?: boolean;
                                    namespace?: boolean;
                                    typeAlias?: boolean;
                                    typeParameter?: boolean;
                                }
                            }
                        }
                    }
                    namespace NoSubmoduleImports {
                        namespace Definitions {
                            export type Options = string[];
                            namespace Options {
                                export type Items = string;
                            }
                        }
                    }
                    namespace NoThisAssignment {
                        namespace Definitions {
                            export type Options = {
                                "allow-destructuring"?: boolean;
                                "allowed-names"?: string[];
                            }[];
                            namespace Options {
                                export interface Items {
                                    "allow-destructuring"?: boolean;
                                    "allowed-names"?: string[];
                                }
                            }
                        }
                    }
                    namespace NoTrailingWhitespace {
                        namespace Definitions {
                            export type Options = ("ignore-comments" | "ignore-jsdoc" | "ignore-template-strings")[];
                            namespace Options {
                                export type Items = "ignore-comments" | "ignore-jsdoc" | "ignore-template-strings";
                            }
                        }
                    }
                    namespace NoUnnecessaryClass {
                        namespace Definitions {
                            export type Options = ("allow-constructor-only" | "allow-empty-class" | "allow-static-only")[];
                            namespace Options {
                                export type Items = "allow-constructor-only" | "allow-empty-class" | "allow-static-only";
                            }
                        }
                    }
                    namespace NoUnusedExpression {
                        namespace Definitions {
                            export type Options = ("allow-fast-null-checks" | "allow-new" | "allow-tagged-template")[];
                            namespace Options {
                                export type Items = "allow-fast-null-checks" | "allow-new" | "allow-tagged-template";
                            }
                        }
                    }
                    namespace NoVoidExpression {
                        namespace Definitions {
                            export type Options = ("ignore-arrow-function-shorthand")[];
                            namespace Options {
                                export type Items = "ignore-arrow-function-shorthand";
                            }
                        }
                    }
                    namespace ObjectLiteralKeyQuotes {
                        namespace Definitions {
                            export type Options = ("always" | "as-needed" | "consistent" | "consistent-as-needed")[];
                            namespace Options {
                                export type Items = "always" | "as-needed" | "consistent" | "consistent-as-needed";
                            }
                        }
                    }
                    namespace ObjectLiteralSortKeys {
                        namespace Definitions {
                            export type Options = ("ignore-case" | "match-declaration-order")[];
                            namespace Options {
                                export type Items = "ignore-case" | "match-declaration-order";
                            }
                        }
                    }
                    namespace OneLine {
                        namespace Definitions {
                            export type Options = ("check-catch" | "check-finally" | "check-else" | "check-open-brace" | "check-whitespace")[];
                            namespace Options {
                                export type Items = "check-catch" | "check-finally" | "check-else" | "check-open-brace" | "check-whitespace";
                            }
                        }
                    }
                    namespace OneVariablePerDeclaration {
                        namespace Definitions {
                            export type Options = ("ignore-for-loop")[];
                            namespace Options {
                                export type Items = "ignore-for-loop";
                            }
                        }
                    }
                    namespace OnlyArrowFunctions {
                        namespace Definitions {
                            export type Options = ("allow-declarations" | "allow-named-functions")[];
                            namespace Options {
                                export type Items = "allow-declarations" | "allow-named-functions";
                            }
                        }
                    }
                    namespace OrderedImports {
                        namespace Definitions {
                            export type Options = {
                                "import-sources-order"?: "case-insensitive" | "lowercase-first" | "lowercase-last" | "any";
                                "named-imports-order"?: "case-insensitive" | "lowercase-first" | "lowercase-last" | "any";
                            }[];
                            namespace Options {
                                export interface Items {
                                    "import-sources-order"?: "case-insensitive" | "lowercase-first" | "lowercase-last" | "any";
                                    "named-imports-order"?: "case-insensitive" | "lowercase-first" | "lowercase-last" | "any";
                                }
                            }
                        }
                    }
                    namespace PreferConditionalExpression {
                        namespace Definitions {
                            export type Options = ("check-else-if")[];
                            namespace Options {
                                export type Items = "check-else-if";
                            }
                        }
                    }
                    namespace PreferConst {
                        namespace Definitions {
                            export type Options = {
                                destructuring?: "all" | "any";
                            }[];
                            namespace Options {
                                export interface Items {
                                    destructuring?: "all" | "any";
                                }
                            }
                        }
                    }
                    namespace PreferFunctionOverMethod {
                        namespace Definitions {
                            export type Options = ("allow-public" | "allow-protected")[];
                            namespace Options {
                                export type Items = "allow-public" | "allow-protected";
                            }
                        }
                    }
                    namespace PreferSwitch {
                        namespace Definitions {
                            export type Options = {
                                "min-cases"?: number;
                            }[];
                            namespace Options {
                                export interface Items {
                                    "min-cases"?: number;
                                }
                            }
                        }
                    }
                    namespace PreferTemplate {
                        namespace Definitions {
                            export type Options = ("allow-single-concat")[];
                            namespace Options {
                                export type Items = "allow-single-concat";
                            }
                        }
                    }
                    namespace Quotemark {
                        namespace Definitions {
                            export type Options = ("single" | "double" | "jsx-single" | "jsx-double" | "avoid-escape" | "avoid-template")[];
                            namespace Options {
                                export type Items = "single" | "double" | "jsx-single" | "jsx-double" | "avoid-escape" | "avoid-template";
                            }
                        }
                    }
                    namespace Semicolon {
                        namespace Definitions {
                            export type Options = [("always" | "never")] | [("always" | "never"), ("ignore-interfaces" | "ignore-bound-class-methods")] | [("always" | "never"), ("ignore-interfaces" | "ignore-bound-class-methods"), any];
                            namespace Options {
                                namespace Items {
                                    export type $0 = "always" | "never";
                                    export type $1 = "ignore-interfaces" | "ignore-bound-class-methods";
                                }
                            }
                        }
                    }
                    namespace SpaceBeforeFunctionParen {
                        namespace Definitions {
                            export type Options = {
                                anonymous?: "always" | "never";
                                asyncArrow?: "always" | "never";
                                constructor?: "always" | "never";
                                method?: "always" | "never";
                                named?: "always" | "never";
                            }[];
                            namespace Options {
                                export interface Items {
                                    anonymous?: "always" | "never";
                                    asyncArrow?: "always" | "never";
                                    constructor?: "always" | "never";
                                    method?: "always" | "never";
                                    named?: "always" | "never";
                                }
                            }
                        }
                    }
                    namespace SpaceWithinParens {
                        namespace Definitions {
                            export type Options = number[];
                            namespace Options {
                                export type Items = number;
                            }
                        }
                    }
                    namespace SwitchFinalBreak {
                        namespace Definitions {
                            export type Options = ("always")[];
                            namespace Options {
                                export type Items = "always";
                            }
                        }
                    }
                    namespace TrailingComma {
                        namespace Definitions {
                            export type Options = {
                                multiline?: ("always" | "never") | {
                                    arrays?: "always" | "never" | "ignore";
                                    exports?: "always" | "never" | "ignore";
                                    functions?: "always" | "never" | "ignore";
                                    imports?: "always" | "never" | "ignore";
                                    objects?: "always" | "never" | "ignore";
                                    typeLiterals?: "always" | "never" | "ignore";
                                };
                                singleline?: ("always" | "never") | {
                                    arrays?: "always" | "never" | "ignore";
                                    exports?: "always" | "never" | "ignore";
                                    functions?: "always" | "never" | "ignore";
                                    imports?: "always" | "never" | "ignore";
                                    objects?: "always" | "never" | "ignore";
                                    typeLiterals?: "always" | "never" | "ignore";
                                };
                            }[];
                            namespace Options {
                                export interface Items {
                                    multiline?: ("always" | "never") | {
                                        arrays?: "always" | "never" | "ignore";
                                        exports?: "always" | "never" | "ignore";
                                        functions?: "always" | "never" | "ignore";
                                        imports?: "always" | "never" | "ignore";
                                        objects?: "always" | "never" | "ignore";
                                        typeLiterals?: "always" | "never" | "ignore";
                                    };
                                    singleline?: ("always" | "never") | {
                                        arrays?: "always" | "never" | "ignore";
                                        exports?: "always" | "never" | "ignore";
                                        functions?: "always" | "never" | "ignore";
                                        imports?: "always" | "never" | "ignore";
                                        objects?: "always" | "never" | "ignore";
                                        typeLiterals?: "always" | "never" | "ignore";
                                    };
                                }
                            }
                        }
                    }
                    namespace TripleEquals {
                        namespace Definitions {
                            export type Options = ("allow-null-check" | "allow-undefined-check")[];
                            namespace Options {
                                export type Items = "allow-null-check" | "allow-undefined-check";
                            }
                        }
                    }
                    namespace VariableName {
                        namespace Definitions {
                            export type Options = ("check-format" | "allow-leading-underscore" | "allow-trailing-underscore" | "allow-pascal-case" | "allow-snake-case" | "ban-keywords")[];
                            namespace Options {
                                export type Items = "check-format" | "allow-leading-underscore" | "allow-trailing-underscore" | "allow-pascal-case" | "allow-snake-case" | "ban-keywords";
                            }
                        }
                    }
                    namespace Whitespace {
                        namespace Definitions {
                            export type Options = ("check-branch" | "check-decl" | "check-operator" | "check-module" | "check-separator" | "check-rest-spread" | "check-type" | "check-typecast" | "check-type-operator" | "check-preblock")[];
                            namespace Options {
                                export type Items = "check-branch" | "check-decl" | "check-operator" | "check-module" | "check-separator" | "check-rest-spread" | "check-type" | "check-typecast" | "check-type-operator" | "check-preblock";
                            }
                        }
                    }
                }
            }
            export interface TsRules {
                /**
                 * Enforces function overloads to be consecutive.
                 */
                "adjacent-overload-signatures"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires using either 'T[]' or 'Array<T>' for arrays.
                 */
                "array-type"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.ArrayType.Definitions.Options | TsRules.Properties.ArrayType.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Warns for an awaited value that is not a Promise.
                 */
                "await-promise"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.AwaitPromise.Definitions.Options | TsRules.Properties.AwaitPromise.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Bans specific types from being used. Does not ban the corresponding runtime objects from being used.
                 */
                "ban-types"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.BanTypes.Definitions.Options | TsRules.Properties.BanTypes.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * An interface or literal type with just a call signature can be written as a function type.
                 */
                "callable-types"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires interface names to begin with a capital 'I'
                 */
                "interface-name"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.InterfaceName.Definitions.Options | TsRules.Properties.InterfaceName.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Prefer an interface declaration over a type literal (`type T = { ... }`)
                 */
                "interface-over-type-literal"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires that a default import have the same name as the declaration it imports.
                 * Does nothing for anonymous default exports.
                 */
                "match-default-export-name"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires explicit visibility declarations for class members.
                 */
                "member-access"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.MemberAccess.Definitions.Options | TsRules.Properties.MemberAccess.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires the use of `as Type` for type assertions instead of `<Type>`.
                 */
                "no-angle-bracket-type-assertion"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows usages of `any` as a type declaration.
                 */
                "no-any"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns on comparison to a boolean literal, as in `x === true`.
                 */
                "no-boolean-literal-compare"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Forbids empty interfaces.
                 */
                "no-empty-interface"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Promises returned by functions must be handled appropriately.
                 */
                "no-floating-promises"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.NoFloatingPromises.Definitions.Options | TsRules.Properties.NoFloatingPromises.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
                 */
                "no-inferrable-types"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.NoInferrableTypes.Definitions.Options | TsRules.Properties.NoInferrableTypes.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallow type inference of {} (empty object type) at function and constructor call sites
                 */
                "no-inferred-empty-object-type"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows internal `module`
                 */
                "no-internal-module"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows mergeable namespaces in the same file.
                 */
                "no-mergeable-namespace"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns on apparent attempts to define constructors for interfaces or `new` for classes.
                 */
                "no-misused-new"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows use of internal `module`s and `namespace`s.
                 */
                "no-namespace"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.NoNamespace.Definitions.Options | TsRules.Properties.NoNamespace.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows non-null assertions.
                 */
                "no-non-null-assertion"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Forbids an object literal to appear in a type assertion expression.
                 * Casting to `any` is still allowed.
                 */
                "no-object-literal-type-assertion"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows parameter properties in class constructors.
                 */
                "no-parameter-properties"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Forbids JSDoc which duplicates TypeScript functionality.
                 */
                "no-redundant-jsdoc"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Don't `<reference types="foo" />` if you import `foo` anyway.
                 */
                "no-reference-import"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns when a method is used as outside of a method call.
                 */
                "no-unbound-method"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.NoUnboundMethod.Definitions.Options | TsRules.Properties.NoUnboundMethod.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Warns when a namespace qualifier (`A.x`) is unnecessary.
                 */
                "no-unnecessary-qualifier"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns if a type assertion does not change the type of an expression.
                 */
                "no-unnecessary-type-assertion"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns when using an expression of type 'any' in a dynamic way.
                 * Uses are only allowed if they would work for `{} | null | undefined`.
                 * Type casts and tests are allowed.
                 * Expressions that work on all values (such as `"" + x`) are allowed.
                 */
                "no-unsafe-any"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows unused imports, variables, functions and private class members. Similar to tsc's --noUnusedParameters and --noUnusedLocals options, but does not interrupt code compilation.
                 */
                "no-unused-variable"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.NoUnusedVariable.Definitions.Options | TsRules.Properties.NoUnusedVariable.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Disallows the use of require statements except in import statements.
                 */
                "no-var-requires"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires that private variables are marked as `readonly` if they’re never modified outside of the constructor.
                 */
                "prefer-readonly"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.PreferReadonly.Definitions.Options | TsRules.Properties.PreferReadonly.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Restricts the types allowed in boolean expressions. By default only booleans are allowed.
                 * 
                 * The following nodes are checked:
                 * * Arguments to the `!`, `&&`, and `||` operators
                 * * The condition in a conditional expression (`cond ? x : y`)
                 * * Conditions for `if`, `for`, `while`, and `do-while` statements.
                 */
                "strict-boolean-expressions"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.StrictBooleanExpressions.Definitions.Options | TsRules.Properties.StrictBooleanExpressions.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Warns for type predicates that are always true or always false.
                 * Works for 'typeof' comparisons to constants (e.g. 'typeof foo === "string"'), and equality comparison to 'null'/'undefined'.
                 * (TypeScript won't let you compare '1 === 2', but it has an exception for '1 === undefined'.)
                 * Does not yet work for 'instanceof'.
                 * Does *not* warn for 'if (x.y)' where 'x.y' is always truthy. For that, see strict-boolean-expressions.
                 * 
                 * This rule requires `strictNullChecks` to work properly.
                 */
                "strict-type-predicates"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Requires type definitions to exist.
                 */
                typedef?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.Typedef.Definitions.Options | TsRules.Properties.Typedef.Definitions.Options.Items;
                } | [boolean] | [boolean, any];
                /**
                 * Requires or disallows whitespace for type definitions.
                 */
                "typedef-whitespace"?: boolean | {
                    severity?: any;
                    /**
                     * An option value or an array of multiple option values.
                     */
                    options?: TsRules.Properties.TypedefWhitespace.Definitions.Options | TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$0;
                } | [boolean] | [boolean, TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$0] | [boolean, TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$0, TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$1] | [boolean, TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$0, TsRules.Properties.TypedefWhitespace.Definitions.Options.Items.$1, any];
                /**
                 * Checks that type literal members are separated by semicolons.
                 * Enforces a trailing semicolon for multiline type literals.
                 */
                "type-literal-delimiter"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
                 */
                "unified-signatures"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
                /**
                 * Warns if an explicitly specified type argument is the default for that type parameter.
                 */
                "use-default-type-parameter"?: boolean | {
                    severity?: any;
                } | [boolean] | [boolean, any];
            }
            namespace TsRules {
                namespace Properties {
                    namespace ArrayType {
                        namespace Definitions {
                            export type Options = ("array" | "generic" | "array-simple")[];
                            namespace Options {
                                export type Items = "array" | "generic" | "array-simple";
                            }
                        }
                    }
                    namespace AwaitPromise {
                        namespace Definitions {
                            export type Options = string[];
                            namespace Options {
                                export type Items = string;
                            }
                        }
                    }
                    namespace BanTypes {
                        namespace Definitions {
                            export type Options = string[][];
                            namespace Options {
                                export type Items = string[];
                            }
                        }
                    }
                    namespace InterfaceName {
                        namespace Definitions {
                            export type Options = ("always-prefix" | "never-prefix")[];
                            namespace Options {
                                export type Items = "always-prefix" | "never-prefix";
                            }
                        }
                    }
                    namespace MemberAccess {
                        namespace Definitions {
                            export type Options = ("no-public" | "check-accessor" | "check-constructor")[];
                            namespace Options {
                                export type Items = "no-public" | "check-accessor" | "check-constructor";
                            }
                        }
                    }
                    namespace NoFloatingPromises {
                        namespace Definitions {
                            export type Options = string[];
                            namespace Options {
                                export type Items = string;
                            }
                        }
                    }
                    namespace NoInferrableTypes {
                        namespace Definitions {
                            export type Options = ("ignore-params" | "ignore-properties")[];
                            namespace Options {
                                export type Items = "ignore-params" | "ignore-properties";
                            }
                        }
                    }
                    namespace NoNamespace {
                        namespace Definitions {
                            export type Options = ("allow-declarations")[];
                            namespace Options {
                                export type Items = "allow-declarations";
                            }
                        }
                    }
                    namespace NoUnboundMethod {
                        namespace Definitions {
                            export type Options = ("ignore-static")[];
                            namespace Options {
                                export type Items = "ignore-static";
                            }
                        }
                    }
                    namespace NoUnusedVariable {
                        namespace Definitions {
                            export type Options = (("check-parameters") | {
                                "ignore-pattern"?: string;
                            })[];
                            namespace Options {
                                export type Items = ("check-parameters") | {
                                    "ignore-pattern"?: string;
                                };
                            }
                        }
                    }
                    namespace PreferReadonly {
                        namespace Definitions {
                            export type Options = ("only-inline-lambdas")[];
                            namespace Options {
                                export type Items = "only-inline-lambdas";
                            }
                        }
                    }
                    namespace StrictBooleanExpressions {
                        namespace Definitions {
                            export type Options = ("allow-null-union" | "allow-undefined-union" | "allow-string" | "allow-number" | "allow-boolean-or-undefined")[];
                            namespace Options {
                                export type Items = "allow-null-union" | "allow-undefined-union" | "allow-string" | "allow-number" | "allow-boolean-or-undefined";
                            }
                        }
                    }
                    namespace Typedef {
                        namespace Definitions {
                            export type Options = ("call-signature" | "arrow-call-signature" | "parameter" | "arrow-parameter" | "property-declaration" | "variable-declaration" | "member-variable-declaration" | "object-destructuring" | "array-destructuring")[];
                            namespace Options {
                                export type Items = "call-signature" | "arrow-call-signature" | "parameter" | "arrow-parameter" | "property-declaration" | "variable-declaration" | "member-variable-declaration" | "object-destructuring" | "array-destructuring";
                            }
                        }
                    }
                    namespace TypedefWhitespace {
                        namespace Definitions {
                            export type Options = [{
                                "call-signature"?: "nospace" | "onespace" | "space";
                                "index-signature"?: "nospace" | "onespace" | "space";
                                parameter?: "nospace" | "onespace" | "space";
                                "property-declaration"?: "nospace" | "onespace" | "space";
                                "variable-declaration"?: "nospace" | "onespace" | "space";
                            }] | [{
                                "call-signature"?: "nospace" | "onespace" | "space";
                                "index-signature"?: "nospace" | "onespace" | "space";
                                parameter?: "nospace" | "onespace" | "space";
                                "property-declaration"?: "nospace" | "onespace" | "space";
                                "variable-declaration"?: "nospace" | "onespace" | "space";
                            }, {
                                "call-signature"?: "nospace" | "onespace" | "space";
                                "index-signature"?: "nospace" | "onespace" | "space";
                                parameter?: "nospace" | "onespace" | "space";
                                "property-declaration"?: "nospace" | "onespace" | "space";
                                "variable-declaration"?: "nospace" | "onespace" | "space";
                            }] | [{
                                "call-signature"?: "nospace" | "onespace" | "space";
                                "index-signature"?: "nospace" | "onespace" | "space";
                                parameter?: "nospace" | "onespace" | "space";
                                "property-declaration"?: "nospace" | "onespace" | "space";
                                "variable-declaration"?: "nospace" | "onespace" | "space";
                            }, {
                                "call-signature"?: "nospace" | "onespace" | "space";
                                "index-signature"?: "nospace" | "onespace" | "space";
                                parameter?: "nospace" | "onespace" | "space";
                                "property-declaration"?: "nospace" | "onespace" | "space";
                                "variable-declaration"?: "nospace" | "onespace" | "space";
                            }, any];
                            namespace Options {
                                namespace Items {
                                    export interface $0 {
                                        "call-signature"?: "nospace" | "onespace" | "space";
                                        "index-signature"?: "nospace" | "onespace" | "space";
                                        parameter?: "nospace" | "onespace" | "space";
                                        "property-declaration"?: "nospace" | "onespace" | "space";
                                        "variable-declaration"?: "nospace" | "onespace" | "space";
                                    }
                                    export interface $1 {
                                        "call-signature"?: "nospace" | "onespace" | "space";
                                        "index-signature"?: "nospace" | "onespace" | "space";
                                        parameter?: "nospace" | "onespace" | "space";
                                        "property-declaration"?: "nospace" | "onespace" | "space";
                                        "variable-declaration"?: "nospace" | "onespace" | "space";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
